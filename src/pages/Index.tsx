import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, ArrowRight, TrendingUp, Zap } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { products, categories } from "@/data/products";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const topPicks = products.filter((p) => p.badge).slice(0, 4);
  const trending = products.sort((a, b) => b.reviewCount - a.reviewCount).slice(0, 4);

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border bg-card">
        <div className="container flex flex-col items-center py-20 text-center md:py-28">
          <span className="mb-4 inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-4 py-1.5 font-body text-xs font-semibold text-primary">
            <TrendingUp className="h-3.5 w-3.5" />
            Trusted by 50,000+ readers
          </span>

          <h1 className="max-w-3xl font-heading text-4xl leading-tight text-foreground md:text-6xl md:leading-tight">
            Find the best products,{" "}
            <span className="text-primary">without the guesswork</span>
          </h1>

          <p className="mt-5 max-w-xl font-body text-lg leading-relaxed text-muted-foreground">
            We research, compare, and test so you don't have to. Expert-curated
            recommendations you can trust.
          </p>

          {/* Search */}
          <div className="mt-8 flex w-full max-w-lg items-center overflow-hidden rounded-xl border border-border bg-background shadow-sm transition-shadow focus-within:shadow-md">
            <Search className="ml-4 h-5 w-5 shrink-0 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search for products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1 bg-transparent px-3 py-3.5 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"
            />
            <Link
              to={`/products${searchQuery ? `?q=${searchQuery}` : ""}`}
              className="mr-1.5 rounded-lg bg-primary px-5 py-2 font-body text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
            >
              Search
            </Link>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="container py-16">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="font-heading text-2xl text-foreground md:text-3xl">
              Featured Categories
            </h2>
            <p className="mt-1.5 font-body text-sm text-muted-foreground">
              Browse our top-reviewed product categories
            </p>
          </div>
          <Link
            to="/products"
            className="hidden items-center gap-1 font-body text-sm font-medium text-primary hover:underline md:flex"
          >
            View all <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {categories.map((cat, i) => (
            <Link
              key={cat.id}
              to={`/category/${cat.id}`}
              className="group flex flex-col items-center gap-3 rounded-xl border border-border bg-card p-6 text-center transition-all hover:border-primary/30 hover:shadow-sm animate-fade-in"
              style={{ animationDelay: `${i * 50}ms` }}
            >
              <span className="text-3xl">{cat.icon}</span>
              <span className="font-body text-sm font-medium text-card-foreground">
                {cat.name}
              </span>
              <span className="text-xs text-muted-foreground">
                {cat.productCount} products
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Top Picks */}
      <section className="border-t border-border bg-card">
        <div className="container py-16">
          <div className="flex items-end justify-between">
            <div>
              <h2 className="font-heading text-2xl text-foreground md:text-3xl">
                Top Picks
              </h2>
              <p className="mt-1.5 font-body text-sm text-muted-foreground">
                Hand-picked by our editorial team
              </p>
            </div>
            <Link
              to="/products"
              className="hidden items-center gap-1 font-body text-sm font-medium text-primary hover:underline md:flex"
            >
              See all products <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {topPicks.map((product, i) => (
              <ProductCard key={product.id} product={product} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="border-t border-border">
        <div className="container py-16">
          <div className="flex flex-col items-center gap-6 rounded-2xl bg-primary px-8 py-14 text-center md:px-16">
            <Zap className="h-10 w-10 text-primary-foreground" />
            <h2 className="max-w-xl font-heading text-3xl leading-tight text-primary-foreground md:text-4xl">
              Never miss a great deal again
            </h2>
            <p className="max-w-md font-body text-base text-primary-foreground/80">
              We track prices and curate the best offers daily. Browse our full catalog to find your next favorite product.
            </p>
            <Link
              to="/products"
              className="inline-flex items-center gap-2 rounded-lg bg-card px-8 py-3 font-body text-sm font-semibold text-card-foreground transition-opacity hover:opacity-90"
            >
              Browse All Deals <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Trending */}
      <section className="border-t border-border bg-card">
        <div className="container py-16">
          <div className="flex items-end justify-between">
            <div>
              <h2 className="font-heading text-2xl text-foreground md:text-3xl">
                Trending Now
              </h2>
              <p className="mt-1.5 font-body text-sm text-muted-foreground">
                Most popular products this week
              </p>
            </div>
            <Link
              to="/products"
              className="hidden items-center gap-1 font-body text-sm font-medium text-primary hover:underline md:flex"
            >
              See all <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {trending.map((product, i) => (
              <ProductCard key={product.id} product={product} index={i} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
