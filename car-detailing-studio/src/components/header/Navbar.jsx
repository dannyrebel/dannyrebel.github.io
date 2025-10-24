export default function Navbar() {
  return (
    <nav className="bg-accent-950 text-white px-8 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h2 className="text-2xl font-bold">
          <span className="text-primary-500 ">Галерия</span> Detailing
        </h2>
        <div className="flex gap-6">
          <a href="#services" className="hover:text-primary-500 transition">
            Services
          </a>
          <a href="#gallery" className="hover:text-primary-500 transition">
            Gallery
          </a>
          <a href="#about" className="hover:text-primary-500 transition">
            About
          </a>
          <a href="#contact" className="hover:text-primary-500 transition">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}
