export default function Office() {
  return (
    <section id="office" className="w-full bg-background">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl sm:text-4xl font-semibold text-primary">
          Our Office
        </h2>
        <p className="mt-6 text-foreground text-lg leading-relaxed max-w-2xl">
          A quiet, private space in Santa Monica designed to feel calm and grounding, with natural light and a comfortable, uncluttered environment.
        </p>
        <p className="mt-4 text-sm uppercase tracking-[0.3em] text-primary/70">
          Santa Monica, CA · In-person + Telehealth
        </p>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="w-full h-64 rounded-[32px] overflow-hidden shadow-lg border border-black/5">
            <img
              src="/images/office-1.jpg"
              alt="Therapy office interior"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full h-64 rounded-[32px] overflow-hidden shadow-lg border border-black/5">
            <img
              src="/images/office-2.jpg"
              alt="Comfortable counseling space"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
