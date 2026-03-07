import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="border-t border-border bg-card">
    <div className="container py-12">
      <div className="grid gap-8 md:grid-cols-4">
        <div className="md:col-span-2">
          <span className="font-heading text-xl text-foreground">
            Pick<span className="text-primary">Right</span>
          </span>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted-foreground">
            We research, test, and recommend the best products so you can spend
            less time searching and more time enjoying.
          </p>
        </div>

        <div>
          <h4 className="mb-3 font-body text-sm font-semibold text-foreground">Quick Links</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/" className="hover:text-foreground transition-colors">Home</Link></li>
            <li><Link to="/products" className="hover:text-foreground transition-colors">Products</Link></li>
            <li><Link to="/" className="hover:text-foreground transition-colors">Blog</Link></li>
            <li><Link to="/" className="hover:text-foreground transition-colors">About Us</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="mb-3 font-body text-sm font-semibold text-foreground">Categories</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/products" className="hover:text-foreground transition-colors">Tech</Link></li>
            <li><Link to="/products" className="hover:text-foreground transition-colors">Home</Link></li>
            <li><Link to="/products" className="hover:text-foreground transition-colors">Audio</Link></li>
            <li><Link to="/products" className="hover:text-foreground transition-colors">Office</Link></li>
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
