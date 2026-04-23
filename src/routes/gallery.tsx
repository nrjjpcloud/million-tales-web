import { createFileRoute } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import g1 from "@/assets/g1.jpg";
import g2 from "@/assets/g2.jpg";
import g3 from "@/assets/g3.jpg";
import g4 from "@/assets/g4.jpg";
import g5 from "@/assets/g5.jpg";
import g6 from "@/assets/g6.jpg";
import g7 from "@/assets/g7.jpg";
import g8 from "@/assets/g8.jpg";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Million Tales Wedding Photography" },
      { name: "description", content: "A collection of wedding photographs from across India by Million Tales — premium, destination, and editorial." },
      { property: "og:title", content: "Gallery — Million Tales" },
      { property: "og:description", content: "Wedding photography portfolio across India." },
      { property: "og:image", content: g1 },
    ],
  }),
  component: Gallery,
});

type Cat = "All" | "Premium" | "Destination" | "Rituals" | "Portraits";

const photos: { src: string; alt: string; cat: Exclude<Cat, "All">; tall?: boolean }[] = [
  { src: g1, alt: "Bride portrait", cat: "Portraits", tall: true },
  { src: hero1, alt: "Couple at golden hour", cat: "Premium" },
  { src: g2, alt: "Haldi ceremony hands", cat: "Rituals" },
  { src: g4, alt: "Udaipur lake palace", cat: "Destination", tall: true },
  { src: hero3, alt: "Mandap fire ritual", cat: "Rituals" },
  { src: g5, alt: "Bridal mehendi", cat: "Rituals", tall: true },
  { src: g6, alt: "Groom baraat", cat: "Premium" },
  { src: hero2, alt: "Goa beach wedding", cat: "Destination" },
  { src: g7, alt: "First look", cat: "Portraits", tall: true },
  { src: g8, alt: "Beach ceremony aisle", cat: "Destination" },
  { src: g3, alt: "Sangeet dance", cat: "Premium" },
];

const cats: Cat[] = ["All", "Premium", "Destination", "Rituals", "Portraits"];

function Gallery() {
  const [cat, setCat] = useState<Cat>("All");
  const [lightbox, setLightbox] = useState<string | null>(null);

  const filtered = cat === "All" ? photos : photos.filter((p) => p.cat === cat);

  return (
    <div>
      {/* Header */}
      <section className="relative py-28 lg:py-36 border-b border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <p className="text-xs uppercase tracking-luxe text-gold mb-6">— Portfolio</p>
          <h1 className="font-display text-6xl sm:text-8xl max-w-4xl leading-[0.95]">
            A <em className="italic text-gradient-gold not-italic">million</em> moments,<br />
            framed.
          </h1>
          <p className="mt-8 max-w-xl text-muted-foreground">
            A curated selection from weddings across India. Each frame, a chapter
            from a love story we were honoured to witness.
          </p>

          {/* Filters */}
          <div className="mt-12 flex flex-wrap gap-3">
            {cats.map((c) => (
              <button
                key={c}
                onClick={() => setCat(c)}
                className={`px-5 py-2 text-xs uppercase tracking-luxe border transition-all ${
                  cat === c
                    ? "border-gold text-gold bg-gold/10"
                    : "border-border text-muted-foreground hover:text-foreground hover:border-foreground"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Masonry grid */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="columns-2 md:columns-3 lg:columns-4 gap-4">
            <AnimatePresence>
              {filtered.map((p, idx) => (
                <motion.button
                  key={p.src + cat}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5, delay: (idx % 8) * 0.04 }}
                  onClick={() => setLightbox(p.src)}
                  className="mb-4 block w-full overflow-hidden group relative break-inside-avoid"
                >
                  <img
                    src={p.src}
                    alt={p.alt}
                    loading="lazy"
                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-[1.5s]"
                  />
                  <div className="absolute inset-0 bg-background/0 group-hover:bg-background/30 transition-colors flex items-end p-4">
                    <p className="text-xs uppercase tracking-luxe text-foreground opacity-0 group-hover:opacity-100 transition-opacity">
                      {p.cat} · {p.alt}
                    </p>
                  </div>
                </motion.button>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
            className="fixed inset-0 z-[100] bg-background/95 backdrop-blur-md flex items-center justify-center p-6 cursor-zoom-out"
          >
            <button
              className="absolute top-6 right-6 text-foreground text-xs uppercase tracking-luxe hover:text-gold"
              onClick={() => setLightbox(null)}
            >
              Close ✕
            </button>
            <motion.img
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              src={lightbox}
              alt=""
              className="max-w-full max-h-[90vh] object-contain shadow-elegant"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
