import { createFileRoute, Link } from "@tanstack/react-router";
import { queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import { Loader2, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  PRODUCTS_QUERY,
  storefrontApiRequest,
  type ShopifyProduct,
} from "@/lib/shopify";
import { useCartStore } from "@/stores/cart";

const productsQueryOptions = queryOptions({
  queryKey: ["shopify", "products"],
  queryFn: async () => {
    const data = await storefrontApiRequest<{ data: { products: { edges: ShopifyProduct[] } } }>(
      PRODUCTS_QUERY,
      { first: 50 }
    );
    return data?.data?.products?.edges ?? [];
  },
  staleTime: 60_000,
});

export const Route = createFileRoute("/shop")({
  head: () => ({
    meta: [
      { title: "Shop — Naturheilprodukte | Praxis RBT Dübendorf" },
      {
        name: "description",
        content:
          "Hochwertige Naturheilprodukte, ätherische Öle und Nahrungsergänzungen aus meinem Online-Shop. Sorgfältig ausgewählt von der Praxis RBT in Dübendorf.",
      },
      { property: "og:title", content: "Shop — Naturheilprodukte | Praxis RBT" },
      {
        property: "og:description",
        content:
          "Hochwertige Naturheilprodukte aus meinem Online-Shop der Praxis RBT in Dübendorf.",
      },
    ],
  }),
  
  component: ShopPage,
  errorComponent: ({ error }) => (
    <div className="section-padding text-center">
      <p className="text-destructive">Produkte konnten nicht geladen werden: {error.message}</p>
    </div>
  ),
});

function ShopPage() {
  const { data: products } = useSuspenseQuery(productsQueryOptions);

  return (
    <section className="section-padding">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center mb-12">
          <h1 className="font-heading text-3xl md:text-4xl font-semibold text-foreground">
            Online Shop
          </h1>
          <div className="mt-4 h-0.5 w-16 bg-primary mx-auto" />
        </div>

        {products.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-muted-foreground">Noch keine Produkte verfügbar.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((p) => (
              <ProductCard key={p.node.id} product={p} />
            ))}
          </div>
        )}
      </div>
    </section>
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
    e.stopPropagation();
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
    <Link
      to="/product/$handle"
      params={{ handle: n.handle }}
      className="group flex flex-col rounded-2xl border border-border bg-card overflow-hidden transition-all hover:shadow-xl hover:-translate-y-1"
    >
      <div className="aspect-square bg-secondary/30 overflow-hidden">
        {image ? (
          <img
            src={image.url}
            alt={image.altText ?? n.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-muted-foreground">
            Kein Bild
          </div>
        )}
      </div>
      <div className="flex flex-col flex-1 p-5">
        <h2 className="font-heading text-lg font-medium text-foreground line-clamp-2">
          {n.title}
        </h2>
        {n.description && (
          <p className="mt-2 text-sm text-muted-foreground line-clamp-3 flex-1">
            {n.description}
          </p>
        )}
        <div className="mt-4 flex items-center justify-between gap-3">
          <span className="font-semibold text-foreground">
            {price.currencyCode} {parseFloat(price.amount).toFixed(2)}
          </span>
          <Button
            size="sm"
            onClick={handleAdd}
            disabled={!variant || !variant.availableForSale || isLoading}
          >
            {isLoading ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              <>
                <ShoppingCart className="h-4 w-4 mr-1.5" />
                In den Warenkorb
              </>
            )}
          </Button>
        </div>
      </div>
    </Link>
  );
}
