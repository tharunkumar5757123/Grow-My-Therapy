export default function Services() {
  return (
    <section id="services" className="w-full py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-2xl mb-16">
          <p className="text-xs uppercase tracking-[0.3em] text-primary/70">How I Help</p>
          <h2 className="mt-4 text-3xl md:text-4xl font-semibold text-primary">
            Therapy Services
          </h2>
          <p className="mt-4 text-foreground">
            Evidence-based support tailored to your mental health and personal growth. Sessions are thoughtful, collaborative, and designed to help you feel steady again.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-secondary/80 p-8 rounded-2xl shadow-sm border border-primary/10">
            <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center mb-6">
              <span className="text-primary text-lg">01</span>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-foreground">Anxiety and Stress</h3>
            <p className="text-foreground text-sm leading-relaxed">
              Practical strategies to calm the nervous system, reduce overwhelm, and help you feel more grounded day to day.
            </p>
          </div>

          <div className="bg-secondary/80 p-8 rounded-2xl shadow-sm border border-primary/10">
            <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center mb-6">
              <span className="text-primary text-lg">02</span>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-foreground">Relationships and Couples</h3>
            <p className="text-foreground text-sm leading-relaxed">
              A supportive space to strengthen communication, rebuild trust, and feel closer to the people who matter most.
            </p>
          </div>

          <div className="bg-secondary/80 p-8 rounded-2xl shadow-sm border border-primary/10">
            <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center mb-6">
              <span className="text-primary text-lg">03</span>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-foreground">Life Transitions</h3>
            <p className="text-foreground text-sm leading-relaxed">
              Guidance through career changes, family shifts, or new chapters so you can move forward with clarity and confidence.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
