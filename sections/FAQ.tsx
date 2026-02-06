export default function FAQ() {
  return (
    <section className="w-full bg-background">
      <div className="max-w-6xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="flex justify-center lg:justify-start">
          <div className="w-80 h-96 sm:w-[360px] sm:h-[460px] rounded-[56px] bg-white/80 shadow-xl overflow-hidden border border-black/5">
            <img
              src="/images/office-2.jpg"
              alt="Therapy space"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div>
          <h2 className="text-3xl sm:text-4xl font-semibold text-primary">FAQs</h2>
          <div className="mt-8 space-y-6 text-foreground">
            <div>
              <h3 className="text-lg font-semibold">Do you offer in-person or telehealth sessions?</h3>
              <p className="mt-2 text-lg leading-relaxed">
                I offer in-person therapy in Santa Monica and secure telehealth for clients located in California.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">What issues do you specialize in?</h3>
              <p className="mt-2 text-lg leading-relaxed">
                I work primarily with anxiety, panic, trauma, and burnout, including perfectionism and chronic stress.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">What is your approach to therapy?</h3>
              <p className="mt-2 text-lg leading-relaxed">
                My style is warm, collaborative, and grounded, with a blend of structured, evidence‑based methods and space for reflection.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
