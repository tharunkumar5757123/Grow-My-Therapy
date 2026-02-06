export default function Office() {
  return (
    <section id="office" className="w-full py-28 bg-secondary">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-primary/70">Our Office</p>
            <h2 className="mt-4 text-3xl md:text-4xl font-semibold text-primary">
              A Calm Space for Healing
            </h2>
            <p className="mt-6 text-foreground leading-relaxed">
              The San Francisco office is designed to feel warm, quiet, and private. Expect a comfortable setting that supports reflection, safety, and honest conversations.
            </p>
            <div className="mt-6 space-y-3 text-sm text-foreground">
              <p>Located in a calm neighborhood with easy access.</p>
              <p>Comfortable seating, natural light, and thoughtful details.</p>
              <p>Hybrid-friendly for in-person and online sessions.</p>
            </div>
            <a
              href="#contact"
              className="inline-flex mt-8 bg-primary text-white px-6 py-3 rounded-full text-sm shadow-sm hover:shadow-md transition"
            >
              View Availability
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="h-56 rounded-2xl bg-gradient-to-br from-white via-secondary to-primary/15 shadow-md"></div>
            <div className="h-56 rounded-2xl bg-gradient-to-br from-white via-secondary to-accent/20 shadow-md"></div>
            <div className="h-56 rounded-2xl bg-gradient-to-br from-white via-secondary to-primary/25 shadow-md sm:col-span-2"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
