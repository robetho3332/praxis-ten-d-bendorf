import { createFileRoute, Link, useRouter } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Loader2, ArrowLeft } from "lucide-react";
import { PRODUCT_BY_HANDLE_QUERY, storefrontApiRequest, type ShopifyProductNode } from "@/lib/shopify";
import { useCartStore } from "@/stores/cart";

export const Route = createFileRoute("/product/$handle")({
  head: ({ params }) => ({
    meta: [
      { title: `${params.handle} — Praxis RBT Shop` },
      { name: "description", content: "Produkt im Praxis RBT Shop." },
    ],
  }),
  component: ProductPage,
  errorComponent: ({ error, reset }) => {
    const router = useRouter();
    return (
      <div className="mx-auto max-w-2xl section-padding text-center">
        <p className="text-muted-foreground">Fehler: {error.message}</p>
        <Button
          className="mt-4"
          onClick={() => {
            router.invalidate();
            reset();
          }}
        >
          Erneut versuchen
        </Button>
      </div>
    );
  },
  notFoundComponent: () => (
    <div className="mx-auto max-w-2xl section-padding text-center">
      <h1 className="font-heading text-3xl">Produkt nicht gefunden</h1>
      <Link to="/shop" className="mt-4 inline-block text-primary hover:underline">
        Zurück zum Shop
      </Link>
    </div>
  ),
});

async function fetchProduct(handle: string): Promise<ShopifyProductNode | null> {
  const data = await storefrontApiRequest(PRODUCT_BY_HANDLE_QUERY, { handle });
  return data?.data?.product ?? null;
}

function ProductPage() {
  const { handle } = Route.useParams();
  const { data: product, isLoading } = useQuery({
    queryKey: ["shopify", "product", handle],
    queryFn: () => fetchProduct(handle),
  });

  const [selectedVariantId, setSelectedVariantId] = useState<string | null>(null);
  const [activeImage, setActiveImage] = useState(0);
  const addItem = useCartStore((s) => s.addItem);
  const isAdding = useCartStore((s) => s.isLoading);

  if (isLoading) {
    return (
      <div className="flex justify-center section-padding">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  if (!product) {
    return (
      <div className="mx-auto max-w-2xl section-padding text-center">
        <h1 className="font-heading text-3xl">Produkt nicht gefunden</h1>
        <Link to="/shop" className="mt-4 inline-block text-primary hover:underline">
          Zurück zum Shop
        </Link>
      </div>
    );
  }

  const images = product.images.edges.map((e) => e.node);
  const variants = product.variants.edges.map((e) => e.node);
  const activeVariant = variants.find((v) => v.id === selectedVariantId) ?? variants[0];

  const handleAdd = async () => {
    if (!activeVariant) return;
    await addItem({
      productTitle: product.title,
      productHandle: product.handle,
      imageUrl: images[0]?.url ?? null,
      variantId: activeVariant.id,
      variantTitle: activeVariant.title,
      price: activeVariant.price,
      quantity: 1,
      selectedOptions: activeVariant.selectedOptions ?? [],
    });
  };

  return (
    <section className="section-padding">
      <div className="mx-auto max-w-5xl">
        <Link
          to="/shop"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary mb-8"
        >
          <ArrowLeft className="h-4 w-4" /> Zurück zum Shop
        </Link>

        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <div className="rounded-xl overflow-hidden bg-secondary/30 aspect-square">
              {images[activeImage] ? (
                <img
                  src={images[activeImage].url}
                  alt={images[activeImage].altText ?? product.title}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                  Kein Bild
                </div>
              )}
            </div>
            {images.length > 1 && (
              <div className="mt-4 grid grid-cols-5 gap-2">
                {images.map((img, i) => (
                  <button
                    key={img.url}
                    onClick={() => setActiveImage(i)}
                    className={`aspect-square rounded-md overflow-hidden border-2 ${
                      i === activeImage ? "border-primary" : "border-transparent"
                    }`}
                  >
                    <img src={img.url} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          <div>
            <h1 className="font-heading text-3xl font-semibold text-foreground">
              {product.title}
            </h1>
            {activeVariant && (
              <p className="mt-3 text-2xl font-medium text-primary">
                {activeVariant.price.currencyCode} {parseFloat(activeVariant.price.amount).toFixed(2)}
              </p>
            )}

            {product.descriptionHtml ? (
              <div
                className="mt-6 prose prose-sm max-w-none text-muted-foreground leading-relaxed"
                dangerouslySetInnerHTML={{ __html: product.descriptionHtml }}
              />
            ) : (
              <p className="mt-6 text-muted-foreground leading-relaxed whitespace-pre-line">
                {product.description}
              </p>
            )}

            {variants.length > 1 && (
              <div className="mt-6">
                <label className="text-sm font-medium">Variante</label>
                <div className="mt-2 flex flex-wrap gap-2">
                  {variants.map((v) => (
                    <button
                      key={v.id}
                      onClick={() => setSelectedVariantId(v.id)}
                      disabled={!v.availableForSale}
                      className={`px-4 py-2 rounded-md border text-sm transition-colors ${
                        (activeVariant?.id === v.id)
                          ? "border-primary bg-primary/10 text-primary"
                          : "border-border hover:border-primary"
                      } disabled:opacity-50 disabled:cursor-not-allowed`}
                    >
                      {v.title}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <Button
              onClick={handleAdd}
              disabled={isAdding || !activeVariant?.availableForSale}
              className="mt-8 w-full md:w-auto"
              size="lg"
            >
              {isAdding ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : activeVariant?.availableForSale ? (
                "In den Warenkorb"
              ) : (
                "Ausverkauft"
              )}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
