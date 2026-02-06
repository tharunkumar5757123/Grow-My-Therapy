export default function CTA() {
  return (
    <section className="w-full bg-background">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl sm:text-4xl font-semibold text-primary">Start therapy in Santa Monica, CA.</h2>
        <p className="mt-6 text-foreground text-lg leading-relaxed max-w-2xl">
          If you’re looking for a therapist who combines practical tools with depth‑oriented work, I’d be glad to connect. In‑person sessions are available in Santa Monica, with telehealth across California.
        </p>
        <a
          href="#contact"
          className="mt-10 inline-flex items-center justify-center border border-primary text-primary px-10 py-3 text-xs uppercase tracking-[0.3em]"
        >
          Get in touch
        </a>
      </div>
    </section>
  );
}
