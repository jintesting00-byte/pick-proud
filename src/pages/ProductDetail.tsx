import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Star, Shield, Award, ThumbsUp } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import AffiliateCTA from "@/components/AffiliateCTA";
import { products } from "@/data/products";

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <div className="container flex flex-1 flex-col items-center justify-center py-20 text-center">
          <h1 className="font-heading text-3xl text-foreground">Product Not Found</h1>
          <p className="mt-2 text-sm text-muted-foreground">
            The product you're looking for doesn't exist.
          </p>
          <Link
            to="/products"
            className="mt-6 inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 font-body text-sm font-semibold text-primary-foreground"
          >
            <ArrowLeft className="h-4 w-4" /> Browse Products
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const related = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <div className="container py-8">
        {/* Breadcrumb */}
        <nav className="mb-6 flex items-center gap-2 font-body text-sm text-muted-foreground">
          <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
          <span>/</span>
          <Link to="/products" className="hover:text-foreground transition-colors">Products</Link>
          <span>/</span>
          <Link
            to={`/category/${product.category}`}
            className="capitalize hover:text-foreground transition-colors"
          >
            {product.category}
          </Link>
          <span>/</span>
          <span className="text-foreground">{product.title}</span>
        </nav>

        <div className="grid gap-10 lg:grid-cols-2">
          {/* Image */}
          <div className="relative overflow-hidden rounded-2xl border border-border bg-muted">
            <img
              src={product.imageUrl}
              alt={product.title}
              className="aspect-square w-full object-cover"
            />
            {product.badge && (
              <span className="absolute left-4 top-4 rounded-lg bg-primary px-3 py-1.5 font-body text-sm font-semibold text-primary-foreground">
                {product.badge}
              </span>
            )}
          </div>

          {/* Info */}
          <div className="flex flex-col gap-5">
            <p className="text-xs font-semibold uppercase tracking-widest text-primary">
              {product.category}
            </p>

            <h1 className="font-heading text-3xl leading-tight text-foreground md:text-4xl">
              {product.title}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2">
              <div className="flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${
                      i < Math.floor(product.rating)
                        ? "fill-amber-400 text-amber-400"
                        : "fill-muted text-muted"
                    }`}
                  />
                ))}
              </div>
              <span className="font-body text-sm font-medium text-foreground">
                {product.rating}
              </span>
              <span className="text-sm text-muted-foreground">
                ({product.reviewCount.toLocaleString()} reviews)
              </span>
            </div>

            {/* Price */}
            <div className="flex items-baseline gap-3">
              <span className="font-body text-3xl font-bold text-foreground">
                ${product.price}
              </span>
              {product.originalPrice && (
                <>
                  <span className="text-lg text-muted-foreground line-through">
                    ${product.originalPrice}
                  </span>
                  <span className="rounded-full bg-secondary px-3 py-0.5 font-body text-sm font-semibold text-secondary-foreground">
                    Save {discount}%
                  </span>
                </>
              )}
            </div>

            <p className="text-base leading-relaxed text-muted-foreground">
              {product.description}
            </p>

            {/* Trust badges */}
            <div className="grid grid-cols-3 gap-3 rounded-xl border border-border bg-card p-4">
              <div className="flex flex-col items-center gap-1.5 text-center">
                <Shield className="h-5 w-5 text-primary" />
                <span className="font-body text-xs font-medium text-muted-foreground">
                  Verified Product
                </span>
              </div>
              <div className="flex flex-col items-center gap-1.5 text-center">
                <Award className="h-5 w-5 text-primary" />
                <span className="font-body text-xs font-medium text-muted-foreground">
                  Expert Tested
                </span>
              </div>
              <div className="flex flex-col items-center gap-1.5 text-center">
                <ThumbsUp className="h-5 w-5 text-primary" />
                <span className="font-body text-xs font-medium text-muted-foreground">
                  Top Rated
                </span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col gap-3">
              {product.affiliateLinks.map((link) => (
                <AffiliateCTA
                  key={link.platform}
                  platform={link.platform}
                  url={link.url}
                  className="w-full py-3 text-base"
                />
              ))}
            </div>

            <p className="text-xs text-muted-foreground">
              * Prices may vary. We earn a commission on qualifying purchases.
            </p>
          </div>
        </div>

        {/* Pros & Cons */}
        <div className="mt-16 grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border border-border bg-card p-6">
            <h3 className="mb-4 font-heading text-xl text-foreground">What We Like</h3>
            <ul className="space-y-2.5">
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <span className="mt-0.5 text-secondary-foreground">✓</span>
                Excellent build quality and design
              </li>
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <span className="mt-0.5 text-secondary-foreground">✓</span>
                Outstanding performance for the price
              </li>
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <span className="mt-0.5 text-secondary-foreground">✓</span>
                Great battery life and efficiency
              </li>
            </ul>
          </div>
          <div className="rounded-xl border border-border bg-card p-6">
            <h3 className="mb-4 font-heading text-xl text-foreground">What Could Improve</h3>
            <ul className="space-y-2.5">
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <span className="mt-0.5 text-destructive">✗</span>
                Premium price point
              </li>
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <span className="mt-0.5 text-destructive">✗</span>
                Limited color options
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Related Products */}
      {related.length > 0 && (
        <section className="border-t border-border bg-card">
          <div className="container py-16">
            <h2 className="font-heading text-2xl text-foreground md:text-3xl">
              Related Products
            </h2>
            <p className="mt-1.5 font-body text-sm text-muted-foreground">
              More from {product.category}
            </p>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {related.map((p, i) => (
                <ProductCard key={p.id} product={p} index={i} />
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
};

export default ProductDetail;
