export interface AffiliateLink {
  platform: "Amazon" | "Flipkart" | string;
  url: string;
}

export interface Product {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewCount: number;
  category: string;
  affiliateLinks: AffiliateLink[];
  badge?: string;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  productCount: number;
}

export const categories: Category[] = [
  { id: "tech", name: "Tech & Electronics", icon: "📱", productCount: 24 },
  { id: "home", name: "Home & Kitchen", icon: "🏠", productCount: 18 },
  { id: "gadgets", name: "Gadgets & Gear", icon: "⚡", productCount: 15 },
  { id: "audio", name: "Audio & Sound", icon: "🎧", productCount: 12 },
  { id: "fitness", name: "Fitness & Health", icon: "💪", productCount: 9 },
  { id: "office", name: "Office & Desk", icon: "🖥️", productCount: 21 },
];

export const products: Product[] = [
  {
    id: "1",
    title: "Sony WH-1000XM5 Wireless Headphones",
    description: "Industry-leading noise cancellation with exceptional sound quality. 30-hour battery life and ultra-comfortable design.",
    imageUrl: "/placeholder.svg",
    price: 348,
    originalPrice: 399,
    rating: 4.8,
    reviewCount: 12453,
    category: "audio",
    affiliateLinks: [{ platform: "Amazon", url: "#" }],
    badge: "Editor's Pick",
  },
  {
    id: "2",
    title: "Apple iPad Air M2 (2024)",
    description: "Powerful M2 chip, stunning Liquid Retina display, and all-day battery life. Perfect for work and play.",
    imageUrl: "/placeholder.svg",
    price: 599,
    originalPrice: 649,
    rating: 4.7,
    reviewCount: 8921,
    category: "tech",
    affiliateLinks: [{ platform: "Amazon", url: "#" }],
    badge: "Best Value",
  },
  {
    id: "3",
    title: "Dyson V15 Detect Cordless Vacuum",
    description: "Laser reveals hidden dust. Powerful suction with intelligent real-time reports on your screen.",
    imageUrl: "/placeholder.svg",
    price: 649,
    originalPrice: 749,
    rating: 4.6,
    reviewCount: 5632,
    category: "home",
    affiliateLinks: [{ platform: "Amazon", url: "#" }],
    badge: "Top Rated",
  },
  {
    id: "4",
    title: "Anker 737 Power Bank (24,000mAh)",
    description: "Massive capacity with 140W fast charging. Charge a MacBook Pro and iPhone simultaneously.",
    imageUrl: "/placeholder.svg",
    price: 109,
    originalPrice: 149,
    rating: 4.5,
    reviewCount: 3211,
    category: "gadgets",
    affiliateLinks: [{ platform: "Amazon", url: "#" }],
  },
  {
    id: "5",
    title: "Garmin Venu 3 Smartwatch",
    description: "Advanced health monitoring with AMOLED display. Built-in GPS, sleep coaching, and 14-day battery.",
    imageUrl: "/placeholder.svg",
    price: 449,
    rating: 4.4,
    reviewCount: 2876,
    category: "fitness",
    affiliateLinks: [{ platform: "Amazon", url: "#" }],
  },
  {
    id: "6",
    title: "Logitech MX Master 3S Mouse",
    description: "Ergonomic perfection with MagSpeed scrolling. Works on any surface, even glass. Multi-device ready.",
    imageUrl: "/placeholder.svg",
    price: 99,
    rating: 4.7,
    reviewCount: 9845,
    category: "office",
    affiliateLinks: [{ platform: "Amazon", url: "#" }],
    badge: "Our Favorite",
  },
  {
    id: "7",
    title: "Samsung Galaxy Tab S9 FE",
    description: "Vibrant 10.9-inch display with S Pen included. IP68 water resistance and powerful performance.",
    imageUrl: "/placeholder.svg",
    price: 349,
    originalPrice: 449,
    rating: 4.3,
    reviewCount: 4521,
    category: "tech",
    affiliateLinks: [{ platform: "Amazon", url: "#" }],
  },
  {
    id: "8",
    title: "Ninja Creami Ice Cream Maker",
    description: "Turn frozen ingredients into ice cream, sorbet, or milkshakes in minutes. 7 one-touch programs.",
    imageUrl: "/placeholder.svg",
    price: 199,
    originalPrice: 229,
    rating: 4.5,
    reviewCount: 7123,
    category: "home",
    affiliateLinks: [{ platform: "Amazon", url: "#" }],
    badge: "Trending",
  },
  {
    id: "9",
    title: "JBL Charge 5 Bluetooth Speaker",
    description: "Bold sound with deep bass. IP67 waterproof with 20 hours of playtime. Built-in power bank.",
    imageUrl: "/placeholder.svg",
    price: 179,
    rating: 4.6,
    reviewCount: 15234,
    category: "audio",
    affiliateLinks: [{ platform: "Amazon", url: "#" }],
  },
  {
    id: "10",
    title: "Secretlab Titan Evo Gaming Chair",
    description: "Award-winning ergonomic design with magnetic accessories. 4-way lumbar support and cold-cure foam.",
    imageUrl: "/placeholder.svg",
    price: 519,
    originalPrice: 569,
    rating: 4.8,
    reviewCount: 6789,
    category: "office",
    affiliateLinks: [{ platform: "Amazon", url: "#" }],
  },
  {
    id: "11",
    title: "Fitbit Charge 6 Fitness Tracker",
    description: "Google integration with heart rate monitoring. 7-day battery, GPS, and 40+ exercise modes.",
    imageUrl: "/placeholder.svg",
    price: 139,
    originalPrice: 159,
    rating: 4.2,
    reviewCount: 11023,
    category: "fitness",
    affiliateLinks: [{ platform: "Amazon", url: "#" }],
  },
  {
    id: "12",
    title: "Anker USB-C Hub 8-in-1",
    description: "Expand your laptop with HDMI 4K, USB-A, SD card, ethernet, and 100W power delivery.",
    imageUrl: "/placeholder.svg",
    price: 35,
    originalPrice: 45,
    rating: 4.4,
    reviewCount: 8456,
    category: "gadgets",
    affiliateLinks: [{ platform: "Amazon", url: "#" }],
  },
];
