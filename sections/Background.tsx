export default function Background() {
  return (
    <section className="w-full bg-background">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl sm:text-4xl font-semibold text-primary">My Approach</h2>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-12 text-foreground">
          <div>
            <h3 className="text-lg font-semibold">Evidence‑Based Care</h3>
            <p className="mt-4 text-lg leading-relaxed">
              I integrate CBT, EMDR, mindfulness‑based practices, and body‑oriented techniques to address both emotional and physiological stress.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Trauma‑Informed</h3>
            <p className="mt-4 text-lg leading-relaxed">
              Trauma work is paced carefully with an emphasis on safety, stabilization, and helping you feel more regulated in daily life.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Collaborative</h3>
            <p className="mt-4 text-lg leading-relaxed">
              Therapy works best when you feel respected and actively involved. My goal is insight, resilience, and sustainable change.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
