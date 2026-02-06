export default function Support() {
  return (
    <section className="w-full bg-background">
      <div className="max-w-6xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="flex justify-center lg:justify-start">
          <div className="w-80 h-96 sm:w-[360px] sm:h-[460px] rounded-[56px] bg-white/80 shadow-xl overflow-hidden border border-black/5">
            <img
              src="/images/office-2.jpg"
              alt="Counseling room"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div>
          <h2 className="text-3xl sm:text-4xl font-semibold text-primary">You don’t have to carry it all alone.</h2>
          <p className="mt-6 text-foreground text-lg">You might recognize yourself in some of these experiences:</p>
          <ul className="mt-4 space-y-3 text-foreground text-lg list-disc list-inside">
            <li>Constant worry, racing thoughts, or panic</li>
            <li>Tension in your body or difficulty sleeping</li>
            <li>Feeling “functional” but emotionally on edge</li>
            <li>Lingering effects of past experiences or trauma</li>
            <li>Burnout, perfectionism, and chronic pressure</li>
          </ul>
          <p className="mt-6 text-foreground text-lg">
            Therapy can help you feel more regulated, supported, and grounded in your daily life.
          </p>
          <a
            href="#contact"
            className="mt-10 inline-flex items-center justify-center border border-primary text-primary px-10 py-3 text-xs uppercase tracking-[0.3em]"
          >
            Work with me
          </a>
        </div>
      </div>
    </section>
  );
}
