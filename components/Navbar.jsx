export default function Navbar() {
  return (
    <header className="w-full border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-xl font-semibold">
          Grow<span className="text-green-600">My</span>Therapy
        </div>

        {/* Nav links */}
        <nav className="flex gap-6 text-sm">
          <a href="#" className="hover:underline">Home</a>
          <a href="#" className="hover:underline">For Therapists</a>
          <a href="#" className="hover:underline">Resources</a>
          <a href="#" className="hover:underline">Contact</a>
        </nav>

        {/* CTA */}
        <button className="bg-green-600 text-white px-4 py-2 rounded-md text-sm">
          Get Started
        </button>
      </div>
    </header>
  );
}
