export default function Hero() {
  return (
    <section id="top" className="w-full bg-background">
      <div className="max-w-6xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="flex justify-center lg:justify-start">
          <div className="w-80 h-80 sm:w-[420px] sm:h-[420px] rounded-full bg-white/80 shadow-xl overflow-hidden border border-black/5">
            <img
              src="/images/maya-reynolds.jpg"
              alt="Dr. Maya Reynolds"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="text-center lg:text-left">
          <h1 className="text-4xl sm:text-5xl lg:text-[64px] font-semibold text-primary leading-tight">
            Anxiety, trauma, and burnout therapy
            <br />
            in Santa Monica, CA
          </h1>
          <p className="mt-6 text-base sm:text-lg text-foreground max-w-xl">
            Dr. Maya Reynolds, PsyD offers grounded, evidence-based therapy for adults who feel overwhelmed by anxiety, stress, panic, or the impact of past experiences.
          </p>
          <a
            href="#contact"
            className="mt-10 inline-flex items-center justify-center border border-primary text-primary px-10 py-3 text-xs uppercase tracking-[0.3em]"
          >
            Connect with me
          </a>
        </div>
      </div>
    </section>
  );
}
