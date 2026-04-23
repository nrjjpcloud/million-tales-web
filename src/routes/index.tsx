import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";
import g1 from "@/assets/g1.jpg";
import g2 from "@/assets/g2.jpg";
import g4 from "@/assets/g4.jpg";
import g7 from "@/assets/g7.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Million Tales — Wedding Photography across India" },
      { name: "description", content: "Million Tales is a premium wedding photography studio capturing premium and destination weddings across India." },
      { property: "og:title", content: "Million Tales — Wedding Photography across India" },
      { property: "og:description", content: "Premium and destination wedding photography across India." },
      { property: "og:image", content: hero1 },
      { name: "twitter:image", content: hero1 },
    ],
  }),
  component: Index,
});

const slides = [
  {
    img: hero1,
    eyebrow: "A House of Love Stories",
    title: "Where every <em>vow</em> becomes a frame.",
    sub: "Premium wedding photography for couples who believe their day deserves to be remembered like cinema.",
  },
  {
    img: hero2,
    eyebrow: "Destination Weddings",
    title: "From <em>Goa shores</em> to Udaipur palaces.",
    sub: "We travel anywhere in India — and beyond — to chase the light of your love story.",
  },
  {
    img: hero3,
    eyebrow: "Tradition, Honoured",
    title: "Every <em>ritual</em>, every glance, kept forever.",
    sub: "Candid, editorial, and unobtrusive — storytelling rooted in Indian tradition.",
  },
];

function Index() {
  const [i, setI] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % slides.length), 6000);
    return () => clearInterval(t);
  }, []);

  return (
    <div>
      {/* HERO SLIDER */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden grain">
        <AnimatePresence mode="sync">
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.6, ease: "easeOut" }}
            className="absolute inset-0"
          >
            <img
              src={slides[i].img}
              alt={slides[i].eyebrow}
              width={1920}
              height={1080}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-background/20" />
            <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-background/30" />
          </motion.div>
        </AnimatePresence>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-10 w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.9, delay: 0.2 }}
            >
              <p className="text-xs uppercase tracking-luxe text-gold mb-8">
                — {slides[i].eyebrow}
              </p>
              <h1
                className="font-display text-5xl sm:text-7xl lg:text-9xl leading-[0.95] max-w-5xl"
                dangerouslySetInnerHTML={{
                  __html: slides[i].title.replace(
                    "<em>",
                    '<em class="italic text-gradient-gold not-italic">',
                  ),
                }}
              />
              <p className="mt-8 max-w-xl text-base text-muted-foreground leading-relaxed">
                {slides[i].sub}
              </p>
            </motion.div>
          </AnimatePresence>

          <div className="mt-12 flex flex-wrap items-center gap-5">
            <Link
              to="/gallery"
              className="group inline-flex items-center gap-3 bg-gold text-accent-foreground px-8 py-4 text-xs uppercase tracking-luxe hover:shadow-glow transition-all"
            >
              View the gallery
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>
            <Link
              to="/contact"
              className="text-xs uppercase tracking-luxe text-foreground border-b border-border hover:border-gold pb-1"
            >
              Book a date
            </Link>
          </div>
        </div>

        {/* dots */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3 z-10">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setI(idx)}
              aria-label={`Slide ${idx + 1}`}
              className={`h-px transition-all duration-500 ${
                idx === i ? "w-16 bg-gold" : "w-8 bg-foreground/30 hover:bg-foreground/60"
              }`}
            />
          ))}
        </div>
      </section>

      {/* INTRO */}
      <section className="relative py-32 lg:py-44 border-t border-border">
        <div className="max-w-6xl mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <p className="text-xs uppercase tracking-luxe text-gold">— Who We Are</p>
          </div>
          <div className="lg:col-span-8">
            <p className="font-display text-3xl sm:text-5xl leading-tight">
              Since 2020, we’ve worked with couples across different cultures, locations, and styles —
              adapting to each story while maintaining a consistent standard of quality and storytelling.
              work is designed not just for today, but for how it will feel years from now. For us,
              wedding is not an <em className="text-gold not-italic font-serif-display">event</em> — it
              is a <em className="text-gold not-italic font-serif-display">story</em> told in glances,
              tears, and laughter that deserves to outlive us.
            </p>
            <div className="mt-12 grid sm:grid-cols-3 gap-8 text-sm text-muted-foreground">
              <div>
                <p className="text-foreground font-display text-3xl">240+</p>
                <p className="mt-2 uppercase tracking-luxe text-xs">Weddings shot</p>
              </div>
              <div>
                <p className="text-foreground font-display text-3xl">28</p>
                <p className="mt-2 uppercase tracking-luxe text-xs">Cities covered</p>
              </div>
              <div>
                <p className="text-foreground font-display text-3xl">6</p>
                <p className="mt-2 uppercase tracking-luxe text-xs">Years of love</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES TEASER */}
      <section className="relative py-24 lg:py-32 border-t border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex items-end justify-between mb-16">
            <div>
              <p className="text-xs uppercase tracking-luxe text-gold mb-4">— What we do</p>
              <h2 className="font-display text-5xl sm:text-7xl">Services</h2>
            </div>
            <Link to="/services" className="hidden sm:inline-block text-xs uppercase tracking-luxe border-b border-border hover:border-gold pb-1">
              All services →
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-px bg-border">
            <Link to="/services" className="group relative bg-background overflow-hidden">
              <div className="aspect-[4/5] overflow-hidden">
                <img src={hero1} alt="Premium Weddings" loading="lazy" width={1920} height={1080} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1.5s]" />
              </div>
              <div className="p-8 lg:p-10">
                <p className="text-xs uppercase tracking-luxe text-gold">01 — Signature</p>
                <h3 className="font-display text-4xl sm:text-5xl mt-3 group-hover:italic group-hover:text-gold transition">Premium Weddings</h3>
                <p className="mt-4 text-sm text-muted-foreground max-w-md">Full-day cinematic coverage for couples who want their wedding remembered as a film, not a folder.</p>
              </div>
            </Link>
            <Link to="/services" className="group relative bg-background overflow-hidden">
              <div className="aspect-[4/5] overflow-hidden">
                <img src={hero2} alt="Destination Weddings" loading="lazy" width={1920} height={1080} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1.5s]" />
              </div>
              <div className="p-8 lg:p-10">
                <p className="text-xs uppercase tracking-luxe text-gold">02 — Wanderlust</p>
                <h3 className="font-display text-4xl sm:text-5xl mt-3 group-hover:italic group-hover:text-gold transition">Destination Weddings</h3>
                <p className="mt-4 text-sm text-muted-foreground max-w-md">From Udaipur palaces to Goan beaches and Bali villas — we travel anywhere your story unfolds.</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* GALLERY PREVIEW */}
      <section className="relative py-24 lg:py-32 border-t border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="text-xs uppercase tracking-luxe text-gold mb-4">— Recent frames</p>
              <h2 className="font-display text-5xl sm:text-7xl">From the album</h2>
            </div>
            <Link to="/gallery" className="hidden sm:inline-block text-xs uppercase tracking-luxe border-b border-border hover:border-gold pb-1">
              Open gallery →
            </Link>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            {[g1, g2, g4, g7].map((src, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: idx * 0.08 }}
                className="aspect-[4/5] overflow-hidden group"
              >
                <img src={src} alt="" loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1.5s]" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-32 lg:py-44 overflow-hidden border-t border-border">
        <img src={hero3} alt="" loading="lazy" className="absolute inset-0 w-full h-full object-cover opacity-15" />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
        <div className="relative max-w-4xl mx-auto px-6 lg:px-10 text-center">
          <p className="text-xs uppercase tracking-luxe text-gold mb-6">— Begin your story</p>
          <h2 className="font-display text-5xl sm:text-7xl">
            Have a date <em className="text-gradient-gold">in mind?</em>
          </h2>
          <p className="mt-8 text-muted-foreground max-w-xl mx-auto">
            Our calendar fills quickly — especially during wedding season. Tell us
            about your day and let's begin.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 mt-12 bg-gold text-accent-foreground px-10 py-5 text-xs uppercase tracking-luxe hover:shadow-glow transition-all"
          >
            Enquire now →
          </Link>
        </div>
      </section>
    </div>
  );
}
