import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="border-t border-border mt-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <h3 className="font-display text-3xl">
            Million<span className="text-gold">·</span>Tales
          </h3>
          <p className="mt-4 text-sm text-muted-foreground max-w-sm leading-relaxed">
            No templates. No forced moments.
            Every frame is intentional. Every story is personal.
            Whether it’s an intimate outdoor shoot or a destination celebration,
            we create visual narratives that feel timeless — not staged.

          </p>
          <p className="mt-4 text-xs uppercase tracking-luxe text-muted-foreground">
            Serving all over India · Based in Banglore
          </p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-luxe text-gold mb-4">Explore</p>
          <ul className="space-y-2 text-sm">
            <li><Link to="/services" className="hover:text-gold">Services</Link></li>
            <li><Link to="/gallery" className="hover:text-gold">Gallery</Link></li>
            <li><Link to="/about" className="hover:text-gold">About</Link></li>
            <li><Link to="/contact" className="hover:text-gold">Contact</Link></li>
          </ul>
        </div>
        <div>
          <p className="text-xs uppercase tracking-luxe text-gold mb-4">Connect</p>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-gold">Instagram</a></li>
            <li><a href="#" className="hover:text-gold">Pinterest</a></li>
            <li><a href="mailto:hello@milliontales.in" className="hover:text-gold">hello@milliontales.in</a></li>
            <li><a href="tel:+919999999999" className="hover:text-gold">+91 99999 99999</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Million Tales. All rights reserved.</p>
          <p className="tracking-luxe uppercase">A million love stories, one frame at a time</p>
        </div>
      </div>
    </footer>
  );
}
