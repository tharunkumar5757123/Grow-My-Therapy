export default function Bio() {
  return (
    <section className="w-full bg-background">
      <div className="max-w-6xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="flex justify-center lg:justify-start">
          <div className="w-80 h-96 sm:w-[360px] sm:h-[460px] rounded-[56px] bg-white/80 shadow-xl overflow-hidden border border-black/5">
            <img
              src="/images/maya-reynolds.jpg"
              alt="Dr. Maya Reynolds"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div>
          <h2 className="text-3xl sm:text-4xl font-semibold text-primary">Hi, I’m Dr. Maya Reynolds, PsyD.</h2>
          <p className="mt-6 text-foreground text-lg leading-relaxed">
            I’m a licensed clinical psychologist based in Santa Monica, California. I offer therapy for adults navigating anxiety, panic, trauma, and burnout—especially those who are high-achieving on the outside but feel overwhelmed inside.
          </p>
          <p className="mt-4 text-foreground text-lg leading-relaxed">
            My approach is warm, collaborative, and grounded. Sessions are structured enough to feel supportive, while still leaving space for reflection and depth.
          </p>
          <a
            href="#contact"
            className="mt-10 inline-flex items-center justify-center border border-primary text-primary px-10 py-3 text-xs uppercase tracking-[0.3em]"
          >
            Let's chat
          </a>
        </div>
      </div>
    </section>
  );
}
