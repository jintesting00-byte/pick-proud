import { useState, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { SlidersHorizontal, X } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { products, categories } from "@/data/products";

type SortOption = "rating" | "price-low" | "price-high";

const Products = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryFilter = searchParams.get("category") || "";
  const queryFilter = searchParams.get("q") || "";

  const [sort, setSort] = useState<SortOption>("rating");
  const [showFilters, setShowFilters] = useState(false);

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

    switch (sort) {
      case "price-low":
        result.sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        result.sort((a, b) => b.price - a.price);
        break;
      case "rating":
      default:
        result.sort((a, b) => b.rating - a.rating);
    }

    return result;
  }, [categoryFilter, queryFilter, sort]);

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

        {/* Toolbar */}
        <div className="mb-6 flex flex-wrap items-center gap-3">
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-2 font-body text-sm font-medium text-foreground transition-colors hover:bg-muted md:hidden"
          >
            <SlidersHorizontal className="h-4 w-4" />
            Filters
          </button>

          {/* Category pills (desktop) */}
          <div className="hidden flex-wrap gap-2 md:flex">
            <button
              onClick={() => setCategory("")}
              className={`rounded-full px-4 py-1.5 font-body text-sm font-medium transition-colors ${
                !categoryFilter
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground hover:text-foreground"
              }`}
            >
              All
            </button>
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setCategory(cat.id)}
                className={`rounded-full px-4 py-1.5 font-body text-sm font-medium transition-colors ${
                  categoryFilter === cat.id
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:text-foreground"
                }`}
              >
                {cat.icon} {cat.name}
              </button>
            ))}
          </div>

          {/* Sort */}
          <div className="ml-auto">
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value as SortOption)}
              className="rounded-lg border border-border bg-card px-4 py-2 font-body text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
            >
              <option value="rating">Top Rated</option>
              <option value="price-low">Price: Low → High</option>
              <option value="price-high">Price: High → Low</option>
            </select>
          </div>
        </div>

        {/* Mobile filters */}
        {showFilters && (
          <div className="mb-6 flex flex-wrap gap-2 md:hidden">
            <button
              onClick={() => { setCategory(""); setShowFilters(false); }}
              className={`rounded-full px-4 py-1.5 font-body text-sm font-medium transition-colors ${
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
                onClick={() => { setCategory(cat.id); setShowFilters(false); }}
                className={`rounded-full px-4 py-1.5 font-body text-sm font-medium transition-colors ${
                  categoryFilter === cat.id
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground"
                }`}
              >
                {cat.icon} {cat.name}
              </button>
            ))}
          </div>
        )}

        {/* Active filter tag */}
        {(categoryFilter || queryFilter) && (
          <div className="mb-6 flex items-center gap-2">
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
          </div>
        )}

        {/* Grid */}
        {filtered.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
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

      <Footer />
    </div>
  );
};

export default Products;
