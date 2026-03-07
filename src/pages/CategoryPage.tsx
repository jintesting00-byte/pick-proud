import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { products, categories } from "@/data/products";

const CategoryPage = () => {
  const { slug } = useParams();
  const category = categories.find((c) => c.id === slug);
  const filtered = products.filter((p) => p.category === slug);

  if (!category) {
    return (
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <div className="container flex flex-1 flex-col items-center justify-center py-20 text-center">
          <h1 className="font-heading text-3xl text-foreground">Category Not Found</h1>
          <p className="mt-2 text-sm text-muted-foreground">This category doesn't exist.</p>
          <Link
            to="/products"
            className="mt-6 inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 font-body text-sm font-semibold text-primary-foreground"
          >
            <ArrowLeft className="h-4 w-4" /> Browse All Products
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <div className="container flex-1 py-8">
        {/* Breadcrumb */}
        <nav className="mb-6 flex items-center gap-2 font-body text-sm text-muted-foreground">
          <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
          <span>/</span>
          <Link to="/products" className="hover:text-foreground transition-colors">Products</Link>
          <span>/</span>
          <span className="text-foreground">{category.name}</span>
        </nav>

        {/* Header */}
        <div className="mb-10 rounded-2xl border border-border bg-card p-8 text-center md:p-12">
          <span className="text-5xl">{category.icon}</span>
          <h1 className="mt-4 font-heading text-3xl text-foreground md:text-4xl">
            {category.name}
          </h1>
          <p className="mt-2 font-body text-muted-foreground">
            {filtered.length} expert-reviewed product{filtered.length !== 1 ? "s" : ""}
          </p>
        </div>

        {/* Grid */}
        {filtered.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filtered.map((product, i) => (
              <ProductCard key={product.id} product={product} index={i} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <p className="font-heading text-xl text-foreground">No products yet</p>
            <p className="mt-2 text-sm text-muted-foreground">
              We're working on adding products to this category.
            </p>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default CategoryPage;
