import { createFileRoute, Link } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { useMemo, useState } from "react";
import shopImg from "@/assets/shop.jpg";
import catSupplements from "@/assets/cat-supplements.jpg";
import catProtein from "@/assets/cat-protein.jpg";
import catAdaptogens from "@/assets/cat-adaptogens.jpg";
import catShake from "@/assets/cat-shake.jpg";
import catFace from "@/assets/cat-face.jpg";
import catBody from "@/assets/cat-body.jpg";
import catOils from "@/assets/cat-oils.jpg";
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

type CategoryKey =
  | "supplements"
  | "protein"
  | "adaptogens"
  | "shake"
  | "face"
  | "body"
  | "oils";

interface Category {
  key: CategoryKey;
  title: string;
  bg: string;
  keywords: string[];
}

const CATEGORIES: Category[] = [
  { key: "supplements", title: "Nahrungsergänzungsmittel", bg: catSupplements, keywords: ["nahrungsergänzung", "supplement", "vitamin", "mineral", "kapsel"] },
  { key: "protein", title: "Proteinpulver", bg: catProtein, keywords: ["protein"] },
  { key: "adaptogens", title: "Adaptogene", bg: catAdaptogens, keywords: ["adaptogen", "ashwagandha", "reishi", "rhodiola", "maca"] },
  { key: "shake", title: "Alles für den perfekten Shake", bg: catShake, keywords: ["shake", "smoothie", "mix"] },
  { key: "face", title: "Gesichtspflege", bg: catFace, keywords: ["gesicht", "face", "anti-age", "creme", "serum"] },
  { key: "body", title: "Körperpflege", bg: catBody, keywords: ["körper", "body", "lotion", "schaumbad", "bath", "körperöl"] },
  { key: "oils", title: "Ätherische Öle", bg: catOils, keywords: ["ätherisch", "öl", "oil", "aroma", "duft", "edelstein"] },
];

function matchesCategory(p: ShopifyProduct, cat: Category): boolean {
  const haystack = [
    p.node.title,
    p.node.productType ?? "",
    p.node.description ?? "",
    ...(p.node.tags ?? []),
  ]
    .join(" ")
    .toLowerCase();
  return cat.keywords.some((k) => haystack.includes(k));
}

function ShopPage() {
  const { data: products, isLoading, isError } = useQuery({
    queryKey: ["shopify", "products"],
    queryFn: fetchProducts,
  });
  const [activeCategory, setActiveCategory] = useState<CategoryKey | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const filteredProducts = useMemo(() => {
    if (!products) return [];
    if (!activeCategory) return products;
    const cat = CATEGORIES.find((c) => c.key === activeCategory);
    if (!cat) return products;
    return products.filter((p) => matchesCategory(p, cat));
  }, [products, activeCategory]);

  const activeCat = CATEGORIES.find((c) => c.key === activeCategory) ?? null;

  return (
    <div>
      <section className="px-6 py-3 md:px-12 md:py-4 lg:px-20 bg-secondary/50">
        <div className="mx-auto max-w-6xl grid gap-4 md:grid-cols-2 items-center">
          <div>
            <div className="h-0.5 w-16 bg-primary mb-2" />
            <h1 className="font-heading text-xl font-semibold text-foreground md:text-2xl">Shop</h1>
            <p className="mt-1 text-xs md:text-sm text-muted-foreground leading-relaxed">
              Ausgewählte Naturprodukte für Ihre Gesundheit. Bestellen Sie bequem online oder
              erhalten Sie die Produkte direkt in der Praxis.
            </p>
          </div>
          <div className="rounded-xl overflow-hidden shadow-md max-h-24 md:max-h-32">
            <img src={shopImg} alt="Naturprodukte Shop" className="w-full h-full object-cover" width={800} height={200} />
          </div>
        </div>
      </section>

      {/* Kategorien */}
      <section className="section-padding">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-heading text-center text-xl font-semibold text-foreground md:text-2xl">
            Kategorien
          </h2>
          <div className="mt-4 h-0.5 w-16 bg-primary mx-auto mb-12" />
          <div className="grid gap-6 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
            {CATEGORIES.map((c, i) => {
              const isActive = activeCategory === c.key;
              return (
                <button
                  key={c.key}
                  type="button"
                  onClick={() => setActiveCategory(isActive ? null : c.key)}
                  onMouseEnter={() => setHoveredIndex(i)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className={`relative aspect-square w-full rounded-full overflow-hidden bg-card shadow-sm border transition-all ${
                    isActive ? "border-primary ring-2 ring-primary" : "border-border hover:shadow-md"
                  }`}
                  aria-pressed={isActive}
                >
                  <img
                    src={c.bg}
                    alt=""
                    className="absolute inset-0 h-full w-full object-cover"
                    loading="lazy"
                    width={512}
                    height={512}
                  />
                  <div
                    className={`absolute inset-0 flex items-center justify-center text-center p-4 transition-colors ${
                      hoveredIndex === i || isActive ? "bg-black/40" : "bg-black/20"
                    }`}
                  >
                    <h3 className="font-heading text-base sm:text-lg font-semibold text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                      {c.title}
                    </h3>
                  </div>
                </button>
              );
            })}
          </div>
          {activeCategory && (
            <div className="mt-6 text-center">
              <button
                type="button"
                onClick={() => setActiveCategory(null)}
                className="text-sm text-primary hover:underline"
              >
                Filter zurücksetzen
              </button>
            </div>
          )}
        </div>
      </section>

      <section className="section-padding pt-0">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-heading text-2xl font-semibold text-foreground text-center mb-12">
            {activeCat ? activeCat.title : "Unsere Produkte"}
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

          {!isLoading && !isError && filteredProducts.length === 0 && (
            <p className="text-center text-muted-foreground">
              {activeCategory
                ? "Keine Produkte in dieser Kategorie. Schreiben Sie mir gerne für eine Bestellung."
                : "Keine Produkte gefunden."}
            </p>
          )}

          {filteredProducts.length > 0 && (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filteredProducts.map((p) => (
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
