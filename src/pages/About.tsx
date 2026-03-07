import { Users, Target, Eye, Shield } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const values = [
  {
    icon: Target,
    title: "Research-Driven",
    description: "Every recommendation is backed by hours of research, comparison, and real-world testing.",
  },
  {
    icon: Shield,
    title: "Honest Reviews",
    description: "We're transparent about how we earn money and never let it influence our recommendations.",
  },
  {
    icon: Eye,
    title: "User-First",
    description: "Our goal is to save you time and money by cutting through marketing noise.",
  },
  {
    icon: Users,
    title: "Community Trusted",
    description: "Over 50,000 readers trust us monthly to help them make smarter buying decisions.",
  },
];

const About = () => (
  <div className="flex min-h-screen flex-col">
    <Navbar />

    {/* Hero */}
    <section className="border-b border-border bg-card">
      <div className="container flex flex-col items-center py-20 text-center md:py-28">
        <h1 className="max-w-2xl font-heading text-4xl leading-tight text-foreground md:text-5xl">
          About <span className="text-primary">PickRight</span>
        </h1>
        <p className="mt-5 max-w-xl font-body text-lg leading-relaxed text-muted-foreground">
          We're a team of product enthusiasts dedicated to helping you find the
          best products without the guesswork. No fluff, no bias — just honest
          recommendations.
        </p>
      </div>
    </section>

    {/* How it works */}
    <section className="container py-16">
      <h2 className="text-center font-heading text-2xl text-foreground md:text-3xl">
        How We Work
      </h2>
      <p className="mx-auto mt-2 max-w-lg text-center font-body text-sm text-muted-foreground">
        Our process ensures every recommendation meets our high standards
      </p>

      <div className="mt-10 grid gap-8 md:grid-cols-3">
        {[
          { step: "01", title: "Research", desc: "We analyze hundreds of products, user reviews, and expert opinions." },
          { step: "02", title: "Test & Compare", desc: "We test top contenders side-by-side for real-world performance." },
          { step: "03", title: "Recommend", desc: "Only the best make it to our site with transparent affiliate links." },
        ].map((item) => (
          <div
            key={item.step}
            className="rounded-xl border border-border bg-card p-8 text-center"
          >
            <span className="font-heading text-4xl text-primary">{item.step}</span>
            <h3 className="mt-4 font-heading text-xl text-foreground">{item.title}</h3>
            <p className="mt-2 font-body text-sm leading-relaxed text-muted-foreground">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>

    {/* Values */}
    <section className="border-t border-border bg-card">
      <div className="container py-16">
        <h2 className="text-center font-heading text-2xl text-foreground md:text-3xl">
          Our Values
        </h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((val) => (
            <div
              key={val.title}
              className="flex flex-col items-center gap-3 rounded-xl border border-border bg-background p-6 text-center"
            >
              <val.icon className="h-8 w-8 text-primary" />
              <h3 className="font-heading text-lg text-foreground">{val.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{val.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <Footer />
  </div>
);

export default About;
