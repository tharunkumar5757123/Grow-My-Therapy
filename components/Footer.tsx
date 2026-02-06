export default function Footer() {
  return (
    <footer id="contact" className="w-full bg-background">
      <div className="max-w-6xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-16">
        <div>
          <h3 className="text-lg font-semibold text-primary">Dr. Maya Reynolds, PsyD</h3>
          <p className="mt-3 text-foreground">123th Street 45 W</p>
          <p className="text-foreground">Santa Monica, CA 90401</p>
          <p className="mt-4 text-foreground">hello@drmayareynolds.com</p>
          <p className="text-foreground">(310) 555-0142</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-primary">Hours</h3>
          <p className="mt-3 text-foreground">Monday – Friday</p>
          <p className="text-foreground">10am – 6pm</p>
          <div className="mt-8">
            <h4 className="text-sm uppercase tracking-[0.3em] text-foreground/70">Find</h4>
            <div className="mt-3 flex gap-6 text-sm text-foreground">
              <a href="#top" className="hover:text-primary">Home</a>
              <a href="#contact" className="hover:text-primary">Contact</a>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-black/5">
        <div className="max-w-6xl mx-auto px-6 py-6 text-xs text-foreground/70">
          All Rights Reserved © 2024 Dr. Maya Reynolds, PsyD.
        </div>
      </div>
    </footer>
  );
}
