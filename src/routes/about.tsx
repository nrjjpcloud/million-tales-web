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
              We chase <em className="italic text-gradient-gold not-italic">Moments</em>, not Events.
            </h1>
          </div>
          <div className="lg:col-span-7 space-y-6 text-muted-foreground leading-relaxed">
            <p>
              Million Tales began its journey in 2020 with a simple belief: a wedding is a single,
              breathing story. Today,
              we are filmmakers serving couples
              globally.
            </p>
            <p>
              We don't just document weddings. We capture how it feels like.The quiet in-between moments.
              The way two people exist when everything else fades. 
            </p>
            <p>
             Because years later, that’s what truly matters.
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
                { t: "Emotion over everything", d: "We prioritise what you feel, not just what you see." },
                { t: "Cinematic, not staged", d: "We create frames that feel like films, not forced poses." },
                { t: "Built for years, not trends", d: "Our work is designed to feel as powerful decades from now as it does today." },
                { t: "Presence before perfection", d: "The best moments aren’t directed. They’re lived — we make space for that." },
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
            We take on a limited number of weddings<em className="text-gradient-gold"> each season</em>
          </h2>
          <p className="mt-6 text-muted-foreground">
            ensuring every story gets the attention it deserves. If our work resonates, we'd
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
