import { useState, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { SlidersHorizontal, X } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { products, categories } from "@/data/products";

type SortOption = "rating" | "price-low" | "price-high" | "trending";

const priceRanges = [
  { label: "Under $100", min: 0, max: 100 },
  { label: "$100 – $300", min: 100, max: 300 },
  { label: "$300 – $500", min: 300, max: 500 },
  { label: "$500+", min: 500, max: Infinity },
];

const Products = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryFilter = searchParams.get("category") || "";
  const queryFilter = searchParams.get("q") || "";

  const [sort, setSort] = useState<SortOption>("rating");
  const [showFilters, setShowFilters] = useState(false);
  const [priceRange, setPriceRange] = useState<number | null>(null);
  const [minRating, setMinRating] = useState<number>(0);

  const filtered = useMemo(() => {
    let result = [...products];

    if (categoryFilter) {
      result = result.filter((p) => p.category === categoryFilter);
    }

    if (queryFilter) {
      const q = queryFilter.toLowerCase();
      result = result.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q)
      );
    }

    if (priceRange !== null) {
      const range = priceRanges[priceRange];
      result = result.filter((p) => p.price >= range.min && p.price < range.max);
    }

    if (minRating > 0) {
      result = result.filter((p) => p.rating >= minRating);
    }

    switch (sort) {
      case "price-low":
        result.sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        result.sort((a, b) => b.price - a.price);
        break;
      case "trending":
        result.sort((a, b) => b.reviewCount - a.reviewCount);
        break;
      case "rating":
      default:
        result.sort((a, b) => b.rating - a.rating);
    }

    return result;
  }, [categoryFilter, queryFilter, sort, priceRange, minRating]);

  const setCategory = (cat: string) => {
    const params = new URLSearchParams(searchParams);
    if (cat) params.set("category", cat);
    else params.delete("category");
    setSearchParams(params);
  };

  const activeCategoryName = categories.find((c) => c.id === categoryFilter)?.name;

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <div className="container flex-1 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="font-heading text-3xl text-foreground md:text-4xl">
            {activeCategoryName || "All Products"}
          </h1>
          <p className="mt-1.5 font-body text-sm text-muted-foreground">
            {filtered.length} product{filtered.length !== 1 ? "s" : ""} found
            {queryFilter && (
              <span>
                {" "}for "<strong>{queryFilter}</strong>"
              </span>
            )}
          </p>
        </div>

        <div className="flex gap-8">
          {/* Sidebar Filters (desktop) */}
          <aside className="hidden w-60 shrink-0 md:block">
            <div className="sticky top-24 space-y-6">
              {/* Categories */}
              <div>
                <h3 className="mb-3 font-body text-sm font-semibold text-foreground">Category</h3>
                <div className="space-y-1.5">
                  <button
                    onClick={() => setCategory("")}
                    className={`block w-full rounded-lg px-3 py-2 text-left font-body text-sm transition-colors ${
                      !categoryFilter
                        ? "bg-primary/10 font-medium text-primary"
                        : "text-muted-foreground hover:bg-muted hover:text-foreground"
                    }`}
                  >
                    All Categories
                  </button>
                  {categories.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => setCategory(cat.id)}
                      className={`block w-full rounded-lg px-3 py-2 text-left font-body text-sm transition-colors ${
                        categoryFilter === cat.id
                          ? "bg-primary/10 font-medium text-primary"
                          : "text-muted-foreground hover:bg-muted hover:text-foreground"
                      }`}
                    >
                      {cat.icon} {cat.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div>
                <h3 className="mb-3 font-body text-sm font-semibold text-foreground">Price Range</h3>
                <div className="space-y-1.5">
                  <button
                    onClick={() => setPriceRange(null)}
                    className={`block w-full rounded-lg px-3 py-2 text-left font-body text-sm transition-colors ${
                      priceRange === null
                        ? "bg-primary/10 font-medium text-primary"
                        : "text-muted-foreground hover:bg-muted hover:text-foreground"
                    }`}
                  >
                    Any Price
                  </button>
                  {priceRanges.map((range, i) => (
                    <button
                      key={range.label}
                      onClick={() => setPriceRange(i)}
                      className={`block w-full rounded-lg px-3 py-2 text-left font-body text-sm transition-colors ${
                        priceRange === i
                          ? "bg-primary/10 font-medium text-primary"
                          : "text-muted-foreground hover:bg-muted hover:text-foreground"
                      }`}
                    >
                      {range.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Rating Filter */}
              <div>
                <h3 className="mb-3 font-body text-sm font-semibold text-foreground">Minimum Rating</h3>
                <div className="space-y-1.5">
                  {[0, 4, 4.5].map((r) => (
                    <button
                      key={r}
                      onClick={() => setMinRating(r)}
                      className={`block w-full rounded-lg px-3 py-2 text-left font-body text-sm transition-colors ${
                        minRating === r
                          ? "bg-primary/10 font-medium text-primary"
                          : "text-muted-foreground hover:bg-muted hover:text-foreground"
                      }`}
                    >
                      {r === 0 ? "All Ratings" : `${r}+ Stars`}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          <div className="flex-1">
            {/* Toolbar */}
            <div className="mb-6 flex flex-wrap items-center gap-3">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-2 font-body text-sm font-medium text-foreground transition-colors hover:bg-muted md:hidden"
              >
                <SlidersHorizontal className="h-4 w-4" />
                Filters
              </button>

              {/* Sort */}
              <div className="ml-auto">
                <select
                  value={sort}
                  onChange={(e) => setSort(e.target.value as SortOption)}
                  className="rounded-lg border border-border bg-card px-4 py-2 font-body text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                >
                  <option value="rating">Top Rated</option>
                  <option value="trending">Trending</option>
                  <option value="price-low">Price: Low → High</option>
                  <option value="price-high">Price: High → Low</option>
                </select>
              </div>
            </div>

            {/* Mobile filters */}
            {showFilters && (
              <div className="mb-6 space-y-4 rounded-xl border border-border bg-card p-4 md:hidden">
                <div>
                  <h4 className="mb-2 font-body text-xs font-semibold text-foreground">Category</h4>
                  <div className="flex flex-wrap gap-2">
                    <button
                      onClick={() => { setCategory(""); }}
                      className={`rounded-full px-3 py-1.5 font-body text-xs font-medium transition-colors ${
                        !categoryFilter
                          ? "bg-primary text-primary-foreground"
                          : "bg-muted text-muted-foreground"
                      }`}
                    >
                      All
                    </button>
                    {categories.map((cat) => (
                      <button
                        key={cat.id}
                        onClick={() => { setCategory(cat.id); }}
                        className={`rounded-full px-3 py-1.5 font-body text-xs font-medium transition-colors ${
                          categoryFilter === cat.id
                            ? "bg-primary text-primary-foreground"
                            : "bg-muted text-muted-foreground"
                        }`}
                      >
                        {cat.icon} {cat.name}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="mb-2 font-body text-xs font-semibold text-foreground">Price</h4>
                  <div className="flex flex-wrap gap-2">
                    <button
                      onClick={() => setPriceRange(null)}
                      className={`rounded-full px-3 py-1.5 font-body text-xs font-medium transition-colors ${
                        priceRange === null ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                      }`}
                    >
                      Any
                    </button>
                    {priceRanges.map((range, i) => (
                      <button
                        key={range.label}
                        onClick={() => setPriceRange(i)}
                        className={`rounded-full px-3 py-1.5 font-body text-xs font-medium transition-colors ${
                          priceRange === i ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                        }`}
                      >
                        {range.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Active filter tags */}
            {(categoryFilter || queryFilter || priceRange !== null || minRating > 0) && (
              <div className="mb-6 flex flex-wrap items-center gap-2">
                {categoryFilter && (
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3 py-1 font-body text-xs font-medium text-foreground">
                    {activeCategoryName}
                    <button onClick={() => setCategory("")}>
                      <X className="h-3 w-3 text-muted-foreground hover:text-foreground" />
                    </button>
                  </span>
                )}
                {queryFilter && (
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3 py-1 font-body text-xs font-medium text-foreground">
                    "{queryFilter}"
                    <button
                      onClick={() => {
                        const params = new URLSearchParams(searchParams);
                        params.delete("q");
                        setSearchParams(params);
                      }}
                    >
                      <X className="h-3 w-3 text-muted-foreground hover:text-foreground" />
                    </button>
                  </span>
                )}
                {priceRange !== null && (
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3 py-1 font-body text-xs font-medium text-foreground">
                    {priceRanges[priceRange].label}
                    <button onClick={() => setPriceRange(null)}>
                      <X className="h-3 w-3 text-muted-foreground hover:text-foreground" />
                    </button>
                  </span>
                )}
                {minRating > 0 && (
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3 py-1 font-body text-xs font-medium text-foreground">
                    {minRating}+ Stars
                    <button onClick={() => setMinRating(0)}>
                      <X className="h-3 w-3 text-muted-foreground hover:text-foreground" />
                    </button>
                  </span>
                )}
              </div>
            )}

            {/* Grid */}
            {filtered.length > 0 ? (
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {filtered.map((product, i) => (
                  <ProductCard key={product.id} product={product} index={i} />
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-20 text-center">
                <p className="font-heading text-xl text-foreground">No products found</p>
                <p className="mt-2 text-sm text-muted-foreground">
                  Try adjusting your filters or search query.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Products;
