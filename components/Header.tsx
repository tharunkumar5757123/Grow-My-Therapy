export default function Header() {
  return (
    <header className="w-full bg-background">
      <div className="max-w-6xl mx-auto px-6 py-10 flex items-center justify-between">
        <a href="#top" className="text-2xl font-semibold text-primary tracking-tight">
          Dr. Maya Reynolds, PsyD
        </a>
        <nav className="flex items-center gap-10 text-sm uppercase tracking-widest text-foreground">
          <a href="#contact" className="hover:text-primary">Contact</a>
        </nav>
      </div>
    </header>
  );
}
