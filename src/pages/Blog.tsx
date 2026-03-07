import { Link } from "react-router-dom";
import { Clock, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const blogPosts = [
  {
    id: "1",
    slug: "best-headphones-2026",
    title: "Best Wireless Headphones of 2026: Our Top Picks",
    excerpt: "We tested 20+ wireless headphones to find the best options for every budget and use case.",
    category: "Audio",
    date: "Mar 5, 2026",
    readTime: "8 min read",
    imageUrl: "/placeholder.svg",
  },
  {
    id: "2",
    slug: "budget-tablets-guide",
    title: "The Ultimate Budget Tablet Buying Guide",
    excerpt: "You don't need to spend a fortune to get a great tablet. Here are our top affordable picks.",
    category: "Tech",
    date: "Mar 2, 2026",
    readTime: "6 min read",
    imageUrl: "/placeholder.svg",
  },
  {
    id: "3",
    slug: "home-office-setup",
    title: "How to Build the Perfect Home Office on a Budget",
    excerpt: "From ergonomic chairs to monitor arms, here's everything you need for a productive workspace.",
    category: "Office",
    date: "Feb 28, 2026",
    readTime: "10 min read",
    imageUrl: "/placeholder.svg",
  },
  {
    id: "4",
    slug: "smart-home-essentials",
    title: "10 Smart Home Gadgets That Are Actually Worth It",
    excerpt: "Skip the gimmicks. These are the smart home products that genuinely make life easier.",
    category: "Gadgets",
    date: "Feb 25, 2026",
    readTime: "7 min read",
    imageUrl: "/placeholder.svg",
  },
  {
    id: "5",
    slug: "fitness-tracker-comparison",
    title: "Fitbit vs Garmin vs Apple Watch: Which Is Right for You?",
    excerpt: "A head-to-head comparison of the three most popular fitness tracking ecosystems.",
    category: "Fitness",
    date: "Feb 20, 2026",
    readTime: "9 min read",
    imageUrl: "/placeholder.svg",
  },
  {
    id: "6",
    slug: "kitchen-appliances-2026",
    title: "Kitchen Appliances That Changed How We Cook in 2026",
    excerpt: "From air fryers to ice cream makers, these appliances earned a permanent spot on our counter.",
    category: "Home",
    date: "Feb 18, 2026",
    readTime: "5 min read",
    imageUrl: "/placeholder.svg",
  },
];

const Blog = () => (
  <div className="flex min-h-screen flex-col">
    <Navbar />

    {/* Header */}
    <section className="border-b border-border bg-card">
      <div className="container flex flex-col items-center py-16 text-center md:py-20">
        <h1 className="font-heading text-4xl text-foreground md:text-5xl">
          The <span className="text-primary">PickRight</span> Blog
        </h1>
        <p className="mt-4 max-w-lg font-body text-lg text-muted-foreground">
          Expert buying guides, in-depth reviews, and tips to help you make smarter purchases.
        </p>
      </div>
    </section>

    {/* Posts */}
    <section className="container py-12">
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post, i) => (
          <article
            key={post.id}
            className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-all hover:shadow-md animate-fade-in"
            style={{ animationDelay: `${i * 60}ms` }}
          >
            <div className="aspect-[16/9] overflow-hidden bg-muted">
              <img
                src={post.imageUrl}
                alt={post.title}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
            </div>
            <div className="flex flex-1 flex-col gap-3 p-5">
              <div className="flex items-center gap-3">
                <span className="rounded-full bg-primary/10 px-3 py-0.5 font-body text-xs font-semibold text-primary">
                  {post.category}
                </span>
                <span className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Clock className="h-3 w-3" /> {post.readTime}
                </span>
              </div>
              <h2 className="font-heading text-lg leading-snug text-card-foreground">
                {post.title}
              </h2>
              <p className="line-clamp-2 text-sm leading-relaxed text-muted-foreground">
                {post.excerpt}
              </p>
              <div className="mt-auto flex items-center justify-between pt-2">
                <span className="text-xs text-muted-foreground">{post.date}</span>
                <span className="inline-flex items-center gap-1 font-body text-sm font-medium text-primary group-hover:underline">
                  Read more <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>

    <Footer />
  </div>
);

export default Blog;
