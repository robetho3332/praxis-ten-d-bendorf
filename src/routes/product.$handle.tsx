import { createFileRoute, Link, notFound, useRouter } from "@tanstack/react-router";
import { queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import { useState } from "react";
import { ArrowLeft, Loader2, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  PRODUCT_BY_HANDLE_QUERY,
  storefrontApiRequest,
  type ShopifyProductNode,
} from "@/lib/shopify";
import { useCartStore } from "@/stores/cart";

const productQueryOptions = (handle: string) =>
  queryOptions({
    queryKey: ["shopify", "product", handle],
    queryFn: async () => {
      const data = await storefrontApiRequest<{ data: { product: ShopifyProductNode | null } }>(
        PRODUCT_BY_HANDLE_QUERY,
        { handle }
      );
      const product = data?.data?.product;
      if (!product) throw notFound();
      return product;
    },
    staleTime: 60_000,
  });

export const Route = createFileRoute("/product/$handle")({
  loader: ({ context, params }) =>
    context.queryClient.ensureQueryData(productQueryOptions(params.handle)),
  head: ({ loaderData }) => {
    const p = loaderData as ShopifyProductNode | undefined;
    if (!p) {
      return { meta: [{ title: "Produkt — Praxis RBT" }] };
    }
    const desc = (p.description || "").slice(0, 155);
    const img = p.images.edges[0]?.node?.url;
    return {
      meta: [
        { title: `${p.title} | Praxis RBT Shop` },
        { name: "description", content: desc },
        { property: "og:title", content: p.title },
        { property: "og:description", content: desc },
        ...(img
          ? [
              { property: "og:image", content: img },
              { name: "twitter:image", content: img },
            ]
          : []),
      ],
    };
  },
  component: ProductPage,
  errorComponent: ({ error, reset }) => {
    const router = useRouter();
    return (
      <div className="section-padding text-center">
        <p className="text-destructive mb-4">Fehler: {error.message}</p>
        <Button
          onClick={() => {
            reset();
            router.invalidate();
          }}
        >
          Erneut versuchen
        </Button>
      </div>
    );
  },
  notFoundComponent: () => (
    <div className="section-padding text-center">
      <h1 className="font-heading text-2xl font-semibold mb-4">Produkt nicht gefunden</h1>
      <Link to="/shop" className="text-primary hover:underline">
        Zurück zum Shop
      </Link>
    </div>
  ),
});

function ProductPage() {
  const product = useSuspenseQuery(productQueryOptions(Route.useParams().handle)).data;
  const variants = product.variants.edges.map((e) => e.node);
  const [selectedVariantId, setSelectedVariantId] = useState(variants[0]?.id);
  const [quantity, setQuantity] = useState(1);
  const [activeImageIdx, setActiveImageIdx] = useState(0);

  const variant = variants.find((v) => v.id === selectedVariantId) ?? variants[0];
  const images = product.images.edges.map((e) => e.node);
  const activeImage = images[activeImageIdx] ?? images[0];

  const addItem = useCartStore((s) => s.addItem);
  const isLoading = useCartStore((s) => s.isLoading);

  const handleAdd = async () => {
    if (!variant) return;
    await addItem({
      productTitle: product.title,
      productHandle: product.handle,
      imageUrl: images[0]?.url ?? null,
      variantId: variant.id,
      variantTitle: variant.title,
      price: variant.price,
      quantity,
      selectedOptions: variant.selectedOptions ?? [],
    });
  };

  return (
    <section className="section-padding">
      <div className="mx-auto max-w-5xl px-6">
        <Link
          to="/shop"
          className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-6"
        >
          <ArrowLeft className="h-4 w-4 mr-1" />
          Zurück zum Shop
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <div className="aspect-square bg-secondary/30 rounded-2xl overflow-hidden">
              {activeImage ? (
                <img
                  src={activeImage.url}
                  alt={activeImage.altText ?? product.title}
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
                    onClick={() => setActiveImageIdx(i)}
                    className={`aspect-square rounded-lg overflow-hidden border-2 transition ${
                      i === activeImageIdx ? "border-primary" : "border-transparent"
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
            {variant && (
              <p className="mt-3 text-2xl font-semibold text-primary">
                {variant.price.currencyCode} {parseFloat(variant.price.amount).toFixed(2)}
              </p>
            )}

            {variants.length > 1 && (
              <div className="mt-6">
                <label className="block text-sm font-medium mb-2">Variante</label>
                <select
                  value={selectedVariantId}
                  onChange={(e) => setSelectedVariantId(e.target.value)}
                  className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm"
                >
                  {variants.map((v) => (
                    <option key={v.id} value={v.id} disabled={!v.availableForSale}>
                      {v.title} {!v.availableForSale && "(ausverkauft)"}
                    </option>
                  ))}
                </select>
              </div>
            )}

            <div className="mt-6 flex items-center gap-3">
              <label className="text-sm font-medium">Menge</label>
              <div className="flex items-center border border-border rounded-lg">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="px-3 py-2 hover:bg-muted"
                >
                  −
                </button>
                <span className="px-4 text-sm w-10 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  className="px-3 py-2 hover:bg-muted"
                >
                  +
                </button>
              </div>
            </div>

            <Button
              size="lg"
              className="mt-6 w-full"
              onClick={handleAdd}
              disabled={!variant || !variant.availableForSale || isLoading}
            >
              {isLoading ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                <>
                  <ShoppingCart className="h-4 w-4 mr-2" />
                  In den Warenkorb
                </>
              )}
            </Button>

            {product.descriptionHtml ? (
              <div
                className="mt-8 prose prose-sm max-w-none text-foreground/80"
                dangerouslySetInnerHTML={{ __html: product.descriptionHtml }}
              />
            ) : (
              <p className="mt-8 text-foreground/80 whitespace-pre-line">{product.description}</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
