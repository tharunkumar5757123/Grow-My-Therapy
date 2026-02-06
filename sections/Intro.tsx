export default function Intro() {
  return (
    <section className="w-full bg-background">
      <div className="max-w-6xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-3xl sm:text-4xl font-semibold text-primary leading-tight">
            Feel steady again, from the inside out.
          </h2>
          <p className="mt-6 text-foreground text-lg leading-relaxed">
            Many of my clients are high-achieving, thoughtful, and self-aware, yet feel exhausted by overthinking, chronic worry, or constant tension in their body.
          </p>
          <p className="mt-4 text-foreground text-lg leading-relaxed">
            Therapy can help you slow down, feel more regulated, and build a calmer relationship with yourself and your life.
          </p>
          <a
            href="#contact"
            className="mt-10 inline-flex items-center justify-center border border-primary text-primary px-10 py-3 text-xs uppercase tracking-[0.3em]"
          >
            Get in touch
          </a>
        </div>
        <div className="flex justify-center lg:justify-end">
          <div className="w-80 h-96 sm:w-[360px] sm:h-[460px] rounded-[56px] bg-white/80 shadow-xl overflow-hidden border border-black/5">
            <img
              src="/images/office-1.jpg"
              alt="Therapy office"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
