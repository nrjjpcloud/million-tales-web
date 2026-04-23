import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import g4 from "@/assets/g4.jpg";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Million Tales Wedding Photography" },
      { name: "description", content: "Premium and destination wedding photography services across India by Million Tales." },
      { property: "og:title", content: "Services — Million Tales Wedding Photography" },
      { property: "og:description", content: "Premium and destination wedding photography services across India." },
      { property: "og:image", content: hero2 },
    ],
  }),
  component: Services,
});

const services = [
  {
    n: "01",
    title: "Premium Weddings",
    img: hero1,
    desc: "A full-day cinematic experience for the wedding you've imagined since childhood. From haldi to vidaai — every ritual, every fleeting glance, captured with the eye of a storyteller.",
    includes: [
      "Two lead photographers + one cinematographer",
      "Pre-wedding consult & shot planning",
      "Up to 12 hours of coverage per day",
      "Hand-edited, color-graded gallery",
      "Premium hardcover album (40 pages)",
      "Highlight film (3–5 minutes)",
    ],
    from: "₹ 2,50,000",
  },
  {
    n: "02",
    title: "Destination Weddings",
    img: hero2,
    desc: "From the lakes of Udaipur to the beaches of Goa, from Jaipur palaces to Bali villas — we travel anywhere in India and abroad to follow your story to its setting.",
    includes: [
      "Multi-day on-location coverage",
      "Travel & accommodation handled",
      "Drone & aerial cinematography",
      "Editorial portrait sessions",
      "Curated luxury album & travel film",
      "24/7 dedicated story manager",
    ],
    from: "₹ 5,00,000",
  },
];

function Services() {
  return (
    <div>
      {/* Header */}
      <section className="relative py-32 lg:py-40 border-b border-border overflow-hidden">
        <img src={g4} alt="" className="absolute inset-0 w-full h-full object-cover opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/80 to-background" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
          <p className="text-xs uppercase tracking-luxe text-gold mb-6">— What we offer</p>
          <h1 className="font-display text-6xl sm:text-8xl max-w-4xl leading-[0.95]">
            Two ways to <em className="italic text-gradient-gold not-italic">tell</em> your story.
          </h1>
          <p className="mt-8 max-w-xl text-muted-foreground">
            Whether your wedding unfolds in your hometown or by the sea, we craft
            packages built around your day — never templates.
          </p>
        </div>
      </section>

      {/* Service blocks */}
      {services.map((s, idx) => (
        <section
          key={s.n}
          className={`relative py-24 lg:py-32 border-b border-border ${idx % 2 === 1 ? "bg-card" : ""}`}
        >
          <div className={`max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${idx % 2 === 1 ? "lg:[direction:rtl]" : ""}`}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="aspect-[4/5] overflow-hidden"
            >
              <img src={s.img} alt={s.title} loading="lazy" className="w-full h-full object-cover" />
            </motion.div>
            <div className="[direction:ltr]">
              <p className="text-xs uppercase tracking-luxe text-gold">{s.n} — Signature</p>
              <h2 className="mt-4 font-display text-5xl sm:text-6xl">{s.title}</h2>
              <p className="mt-6 text-muted-foreground leading-relaxed">{s.desc}</p>
              <ul className="mt-8 space-y-3">
                {s.includes.map((it) => (
                  <li key={it} className="flex gap-4 text-sm">
                    <span className="text-gold mt-[2px]">◆</span>
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-10 flex items-end gap-8 flex-wrap">
                <div>
                  <p className="text-xs uppercase tracking-luxe text-muted-foreground">Investment from</p>
                  <p className="font-display text-3xl text-gold mt-1">{s.from}</p>
                </div>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-3 bg-gold text-accent-foreground px-8 py-4 text-xs uppercase tracking-luxe hover:shadow-glow transition-all"
                >
                  Enquire →
                </Link>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Add-ons */}
      <section className="py-24 lg:py-32">
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <p className="text-xs uppercase tracking-luxe text-gold mb-6">— Add-ons</p>
          <h2 className="font-display text-4xl sm:text-6xl mb-12">Beyond the wedding day.</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
            {[
              { t: "Pre-wedding shoot", d: "A day of portraits in a place that means something to you." },
              { t: "Save-the-date film", d: "A 60-second invitation film to send your guests." },
              { t: "Engagement & roka", d: "Coverage for the smaller, quieter beginnings." },
              { t: "Sangeet & mehendi", d: "Dedicated coverage for the festivities before the day." },
              { t: "Heirloom albums", d: "Hand-bound leather books, designed page by page." },
              { t: "Reception coverage", d: "An evening of celebration, kept for keeps." },
            ].map((a) => (
              <div key={a.t} className="bg-background p-8">
                <h3 className="font-display text-2xl">{a.t}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{a.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
