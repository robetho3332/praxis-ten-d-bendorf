import { createFileRoute, Link } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import shopImg from "@/assets/shop.jpg";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { PRODUCTS_QUERY, storefrontApiRequest, type ShopifyProduct } from "@/lib/shopify";
import { useCartStore } from "@/stores/cart";

export const Route = createFileRoute("/shop")({
  head: () => ({
    meta: [
      { title: "Shop — Praxis RBT Dübendorf" },
      { name: "description", content: "Naturprodukte aus der Praxis RBT – direkt online bestellen." },
      { property: "og:title", content: "Shop — Praxis RBT" },
      { property: "og:description", content: "Ausgewählte Naturprodukte für Ihre Gesundheit." },
    ],
  }),
  component: ShopPage,
});

async function fetchProducts(): Promise<ShopifyProduct[]> {
  const data = await storefrontApiRequest(PRODUCTS_QUERY, { first: 50 });
  return data?.data?.products?.edges ?? [];
}

function ShopPage() {
  const { data: products, isLoading, isError } = useQuery({
    queryKey: ["shopify", "products"],
    queryFn: fetchProducts,
  });

  return (
    <div>
      <section className="section-padding bg-secondary/50">
        <div className="mx-auto max-w-6xl grid gap-12 md:grid-cols-2 items-center">
          <div>
            <h1 className="font-heading text-4xl font-semibold text-foreground md:text-5xl">Shop</h1>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              Ausgewählte Naturprodukte für Ihre Gesundheit. Bestellen Sie bequem online oder
              erhalten Sie die Produkte direkt in der Praxis.
            </p>
            <div className="mt-4 h-0.5 w-16 bg-primary" />
          </div>
          <div className="rounded-xl overflow-hidden shadow-md">
            <img src={shopImg} alt="Naturprodukte Shop" className="w-full h-auto object-cover" width={800} height={600} />
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-heading text-2xl font-semibold text-foreground text-center mb-12">
            Unsere Produkte
          </h2>

          {isLoading && (
            <div className="flex justify-center py-12">
              <Loader2 className="h-8 w-8 animate-spin text-primary" />
            </div>
          )}

          {isError && (
            <p className="text-center text-muted-foreground">
              Produkte konnten nicht geladen werden. Bitte später erneut versuchen.
            </p>
          )}

          {!isLoading && !isError && products && products.length === 0 && (
            <p className="text-center text-muted-foreground">Keine Produkte gefunden.</p>
          )}

          {products && products.length > 0 && (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {products.map((p) => (
                <ProductCard key={p.node.id} product={p} />
              ))}
            </div>
          )}

          <div className="mt-12 text-center">
            <p className="text-muted-foreground">
              Für Beratung kontaktieren Sie mich gerne direkt.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

function ProductCard({ product }: { product: ShopifyProduct }) {
  const n = product.node;
  const image = n.images.edges[0]?.node;
  const variant = n.variants.edges[0]?.node;
  const price = variant?.price ?? n.priceRange.minVariantPrice;
  const addItem = useCartStore((s) => s.addItem);
  const isLoading = useCartStore((s) => s.isLoading);

  const handleAdd = async (e: React.MouseEvent) => {
    e.preventDefault();
    if (!variant) return;
    await addItem({
      productTitle: n.title,
      productHandle: n.handle,
      imageUrl: image?.url ?? null,
      variantId: variant.id,
      variantTitle: variant.title,
      price: variant.price,
      quantity: 1,
      selectedOptions: variant.selectedOptions ?? [],
    });
  };

  return (
    <div className="rounded-xl bg-card shadow-sm border border-border flex flex-col overflow-hidden">
      <Link
        to="/product/$handle"
        params={{ handle: n.handle }}
        className="block aspect-square bg-secondary/30 overflow-hidden"
      >
        {image ? (
          <img
            src={image.url}
            alt={image.altText ?? n.title}
            className="w-full h-full object-cover transition-transform hover:scale-105"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-muted-foreground text-sm">
            Kein Bild
          </div>
        )}
      </Link>
      <div className="p-6 flex flex-col flex-1">
        <Link to="/product/$handle" params={{ handle: n.handle }}>
          <h3 className="font-heading text-lg font-semibold text-foreground hover:text-primary transition-colors">
            {n.title}
          </h3>
        </Link>
        <p className="mt-2 text-sm text-muted-foreground leading-relaxed flex-1 line-clamp-3">
          {n.description}
        </p>
        <div className="mt-4 flex items-center justify-between gap-3">
          <p className="text-sm font-medium text-primary">
            {price.currencyCode} {parseFloat(price.amount).toFixed(2)}
          </p>
          <Button size="sm" onClick={handleAdd} disabled={isLoading || !variant?.availableForSale}>
            {variant?.availableForSale ? "In den Warenkorb" : "Ausverkauft"}
          </Button>
        </div>
      </div>
    </div>
  );
}
