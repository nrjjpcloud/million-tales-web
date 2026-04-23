import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import logo from "@/assets/million-tales-logo.jpg";

const links = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/gallery", label: "Gallery" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <img
            src={logo}
            alt="Million Tales"
            width={40}
            height={40}
            className="w-10 h-10 rounded-sm object-cover ring-1 ring-border group-hover:ring-gold transition"
          />
          <span className="hidden sm:block font-display text-xl tracking-wide">
            Million<span className="text-gold">·</span>Tales
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-xs uppercase tracking-luxe text-muted-foreground hover:text-foreground transition-colors"
              activeProps={{ className: "text-gold" }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <button
          aria-label="Menu"
          className="md:hidden text-foreground"
          onClick={() => setOpen((v) => !v)}
        >
          <div className="w-6 h-px bg-current mb-1.5" />
          <div className="w-6 h-px bg-current mb-1.5" />
          <div className="w-4 h-px bg-current ml-auto" />
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-border bg-background/95 backdrop-blur">
          <nav className="flex flex-col px-6 py-6 gap-4">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="text-sm uppercase tracking-luxe text-muted-foreground hover:text-gold"
                activeProps={{ className: "text-gold" }}
                activeOptions={{ exact: l.to === "/" }}
              >
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
