export default function Specialties() {
  return (
    <section className="w-full bg-background">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl sm:text-4xl font-semibold text-primary">Areas I Help With</h2>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <div className="w-full h-56 rounded-[32px] overflow-hidden shadow-[0_18px_35px_rgba(0,0,0,0.08)] border border-black/5">
              <img
                src="/images/service-anxiety.svg"
                alt="Calming abstract shape for anxiety support"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="mt-6 text-2xl font-semibold text-primary">Anxiety and Panic</h3>
            <p className="mt-4 text-foreground text-lg leading-relaxed">
              Support for chronic worry, panic symptoms, sleep disruption, and the feeling of always bracing for what might go wrong.
            </p>
          </div>
          <div>
            <div className="w-full h-56 rounded-[32px] overflow-hidden shadow-[0_18px_35px_rgba(0,0,0,0.08)] border border-black/5">
              <img
                src="/images/service-trauma.svg"
                alt="Abstract shapes representing trauma recovery"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="mt-6 text-2xl font-semibold text-primary">Trauma Recovery</h3>
            <p className="mt-4 text-foreground text-lg leading-relaxed">
              Healing from single-incident trauma or long‑standing patterns rooted in childhood, relationships, or chronic stress.
            </p>
          </div>
          <div>
            <div className="w-full h-56 rounded-[32px] overflow-hidden shadow-[0_18px_35px_rgba(0,0,0,0.08)] border border-black/5">
              <img
                src="/images/service-burnout.svg"
                alt="Abstract shapes for burnout and perfectionism"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="mt-6 text-2xl font-semibold text-primary">Burnout and Perfectionism</h3>
            <p className="mt-4 text-foreground text-lg leading-relaxed">
              For professionals and creatives under high pressure who feel depleted, disconnected, or stuck in overdrive.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
