import { Link } from "react-router-dom";
import { Star } from "lucide-react";
import type { Product } from "@/data/products";
import AffiliateCTA from "./AffiliateCTA";

interface ProductCardProps {
  product: Product;
  index?: number;
}

const ProductCard = ({ product, index = 0 }: ProductCardProps) => {
  return (
    <div
      className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-all duration-300 hover:shadow-md animate-fade-in"
      style={{ animationDelay: `${index * 60}ms` }}
    >
      {/* Image */}
      <Link to={`/product/${product.id}`} className="relative aspect-[4/3] overflow-hidden bg-muted">
        <img
          src={product.imageUrl}
          alt={product.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        {product.badge && (
          <span className="absolute left-3 top-3 rounded-md bg-primary px-2.5 py-1 font-body text-xs font-semibold text-primary-foreground">
            {product.badge}
          </span>
        )}
      </Link>

      {/* Content */}
      <div className="flex flex-1 flex-col gap-3 p-5">
        <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
          {product.category}
        </p>

        <Link to={`/product/${product.id}`}>
          <h3 className="font-heading text-lg leading-snug text-card-foreground hover:text-primary transition-colors">
            {product.title}
          </h3>
        </Link>

        <p className="line-clamp-2 text-sm leading-relaxed text-muted-foreground">
          {product.description}
        </p>

        {/* Rating */}
        <div className="flex items-center gap-1.5">
          <div className="flex">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={`h-3.5 w-3.5 ${
                  i < Math.floor(product.rating)
                    ? "fill-amber-400 text-amber-400"
                    : "fill-muted text-muted"
                }`}
              />
            ))}
          </div>
          <span className="text-xs font-medium text-muted-foreground">
            {product.rating} ({product.reviewCount.toLocaleString()})
          </span>
        </div>

        {/* Price */}
        <div className="mt-auto flex items-baseline gap-2">
          <span className="font-body text-xl font-bold text-card-foreground">
            ${product.price}
          </span>
          {product.originalPrice && (
            <span className="text-sm text-muted-foreground line-through">
              ${product.originalPrice}
            </span>
          )}
        </div>

        {/* CTA */}
        <div className="flex flex-col gap-2 pt-1">
          {product.affiliateLinks.map((link) => (
            <AffiliateCTA
              key={link.platform}
              platform={link.platform}
              url={link.url}
              className="w-full"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
