import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import g1 from "@/assets/g1.jpg";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Million Tales Wedding Photography" },
      { name: "description", content: "Tell us about your wedding. Million Tales serves couples across India." },
      { property: "og:title", content: "Contact — Million Tales" },
      { property: "og:description", content: "Tell us about your wedding." },
      { property: "og:image", content: g1 },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <div className="grid lg:grid-cols-2 min-h-[calc(100vh-5rem)]">
      {/* Image side */}
      <div className="relative hidden lg:block">
        <img src={g1} alt="Bride portrait" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/30 to-background/60" />
        <div className="absolute bottom-12 left-12 right-12">

          
        </div>
      </div>

      {/* Form side */}
      <div className="px-6 lg:px-16 py-20 flex items-center">
        <div className="w-full max-w-lg">
          <p className="text-xs uppercase tracking-luxe text-gold mb-6">— Tell us about your day</p>
          <h1 className="font-display text-5xl sm:text-6xl leading-tight">
            Let's begin a <em className="italic text-gradient-gold not-italic">tale.</em>
          </h1>
          <p className="mt-6 text-muted-foreground">
            We respond to every enquiry personally within 6 hours(Business hours).
          </p>

          {sent ? (
            <div className="mt-12 border border-gold/40 bg-gold/5 p-8">
              <h2 className="font-display text-3xl text-gold">Received with love.</h2>
              <p className="mt-3 text-sm text-muted-foreground">
                Thank you. We'll be in touch within 6 hours (Business hours).
              </p>
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
              className="mt-10 space-y-6"
            >
              <div className="grid sm:grid-cols-2 gap-6">
                <Field label="Bride's name" name="bride" />
                <Field label="Groom's name" name="groom" />
              </div>
              <Field label="Email" name="email" type="email" required />
              <Field label="Phone" name="phone" type="tel" />
              <Field label="Wedding date" name="date" type="date" />
              <Field label="Location / venue" name="location" placeholder="e.g. Banglore, Hyderabad, Mumbai" />
              <div>
                <label className="text-xs uppercase tracking-luxe text-muted-foreground">Tell us about your story</label>
                <textarea
                  rows={4}
                  className="mt-2 w-full bg-transparent border-b border-border focus:border-gold outline-none py-2 text-sm resize-none"
                  placeholder="How did you meet? What kind of wedding are you imagining?"
                />
              </div>
              <button
                type="submit"
                className="mt-4 bg-gold text-accent-foreground px-10 py-4 text-xs uppercase tracking-luxe hover:shadow-glow transition-all"
              >
                Send enquiry →
              </button>
            </form>

          )}
          <p className="mt-4 text-sm text-muted-foreground">capture@milliontales.in · +91 99999 99999</p>
        </div>
      </div>
    </div>
  );
}

function Field({ label, name, type = "text", required, placeholder }: { label: string; name: string; type?: string; required?: boolean; placeholder?: string }) {
  return (
    <div>
      <label htmlFor={name} className="text-xs uppercase tracking-luxe text-muted-foreground">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="mt-2 w-full bg-transparent border-b border-border focus:border-gold outline-none py-2 text-sm"
      />
    </div>
  );
}
