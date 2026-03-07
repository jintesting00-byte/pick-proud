import { Link } from "react-router-dom";
import { categories } from "@/data/products";

const Footer = () => (
  <footer className="border-t border-border bg-card">
    <div className="container py-12">
      <div className="grid gap-8 md:grid-cols-5">
        {/* Brand */}
        <div className="md:col-span-2">
          <span className="font-heading text-xl text-foreground">
            Pick<span className="text-primary">Right</span>
          </span>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted-foreground">
            We research, test, and recommend the best products so you can spend
            less time searching and more time enjoying.
          </p>
          {/* Social */}
          <div className="mt-4 flex gap-3">
            {["Twitter", "YouTube", "Instagram"].map((s) => (
              <a
                key={s}
                href="#"
                className="rounded-lg bg-muted px-3 py-1.5 font-body text-xs font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {s}
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="mb-3 font-body text-sm font-semibold text-foreground">Quick Links</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/" className="hover:text-foreground transition-colors">Home</Link></li>
            <li><Link to="/products" className="hover:text-foreground transition-colors">Products</Link></li>
            <li><Link to="/blog" className="hover:text-foreground transition-colors">Blog</Link></li>
            <li><Link to="/about" className="hover:text-foreground transition-colors">About Us</Link></li>
          </ul>
        </div>

        {/* Categories */}
        <div>
          <h4 className="mb-3 font-body text-sm font-semibold text-foreground">Categories</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            {categories.slice(0, 5).map((cat) => (
              <li key={cat.id}>
                <Link
                  to={`/category/${cat.id}`}
                  className="hover:text-foreground transition-colors"
                >
                  {cat.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h4 className="mb-3 font-body text-sm font-semibold text-foreground">Legal</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/about" className="hover:text-foreground transition-colors">Privacy Policy</Link></li>
            <li><Link to="/about" className="hover:text-foreground transition-colors">Terms of Service</Link></li>
            <li><Link to="/about" className="hover:text-foreground transition-colors">Contact Us</Link></li>
            <li><Link to="/about" className="hover:text-foreground transition-colors">Affiliate Disclosure</Link></li>
          </ul>
        </div>
      </div>

      <div className="mt-10 border-t border-border pt-6">
        <p className="text-xs leading-relaxed text-muted-foreground">
          <strong>Affiliate Disclosure:</strong> As an Amazon Associate, we earn
          from qualifying purchases. Some links on this site are affiliate links,
          meaning we may earn a commission at no additional cost to you when you
          click through and make a purchase.
        </p>
        <p className="mt-3 text-xs text-muted-foreground">
          © {new Date().getFullYear()} PickRight. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
