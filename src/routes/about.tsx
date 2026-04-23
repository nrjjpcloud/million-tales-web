import { createFileRoute, Link } from "@tanstack/react-router";
import hero1 from "@/assets/hero-1.jpg";
import g7 from "@/assets/g7.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Million Tales Wedding Photography" },
      { name: "description", content: "Million Tales is a wedding photography studio based in India, telling love stories with cinematic intent." },
      { property: "og:title", content: "About — Million Tales" },
      { property: "og:description", content: "A wedding photography studio based in India." },
      { property: "og:image", content: g7 },
    ],
  }),
  component: About,
});

function About() {
  return (
    <div>
      <section className="relative py-28 lg:py-36 border-b border-border">
        <div className="max-w-6xl mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <p className="text-xs uppercase tracking-luxe text-gold mb-6">— The studio</p>
            <h1 className="font-display text-5xl sm:text-7xl leading-[0.95]">
              We chase <em className="italic text-gradient-gold not-italic">light</em>, not poses.
            </h1>
          </div>
          <div className="lg:col-span-7 space-y-6 text-muted-foreground leading-relaxed">
            <p>
              Million Tales began in 2013 with a simple belief: a wedding is not a
              checklist of moments to capture, but a single, breathing story. Today
              we are a small studio of photographers and filmmakers serving couples
              across India.
            </p>
            <p>
              From a sun-drenched temple wedding in Chennai to a fog-soft
              Himalayan elopement, we approach every day the same way — quietly,
              attentively, with reverence for what is unfolding in front of us.
            </p>
            <p>
              We believe in honest light, honest emotion, and prints you'll still
              hand to your grandchildren. We do not stage tears. We do not stage
              joy. We wait for them, and we are usually rewarded.
            </p>
          </div>
        </div>
      </section>

      <section className="grid lg:grid-cols-2 border-b border-border">
        <div className="aspect-square lg:aspect-auto overflow-hidden">
          <img src={hero1} alt="Couple at golden hour" loading="lazy" className="w-full h-full object-cover" />
        </div>
        <div className="bg-card flex items-center px-6 lg:px-16 py-20">
          <div>
            <p className="text-xs uppercase tracking-luxe text-gold mb-6">— Our principles</p>
            <ul className="space-y-8">
              {[
                { t: "Story over staging", d: "We don't direct your day. We document it." },
                { t: "Light over filters", d: "Editing is restraint. The frame is sacred." },
                { t: "Slow over fast", d: "Galleries delivered in 6–8 weeks, not 6 days." },
                { t: "Print over pixels", d: "Every wedding ends with something you can hold." },
              ].map((p) => (
                <li key={p.t}>
                  <h3 className="font-display text-2xl text-gold">{p.t}</h3>
                  <p className="text-sm text-muted-foreground mt-2">{p.d}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-xs uppercase tracking-luxe text-gold mb-6">— Working with us</p>
          <h2 className="font-display text-4xl sm:text-6xl">
            We take a few weddings <em className="text-gradient-gold">a year.</em>
          </h2>
          <p className="mt-6 text-muted-foreground">
            So that we can give each one everything. If our work resonates, we'd
            love to hear about your day.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 mt-10 bg-gold text-accent-foreground px-10 py-5 text-xs uppercase tracking-luxe hover:shadow-glow transition-all"
          >
            Start a conversation →
          </Link>
        </div>
      </section>
    </div>
  );
}
