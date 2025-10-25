import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-accent-950/80 backdrop-blur-sm text-white px-4 md:px-8 py-4 fixed w-full z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h2 className="text-xl md:text-2xl font-bold">
          <span className="text-primary-500">TOSHKO G</span> Detailing
        </h2>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-6">
          <a href="#about" className="hover:text-primary-500 transition">
            About
          </a>
          <a href="#gallery" className="hover:text-primary-500 transition">
            Gallery
          </a>
          <a href="#contact" className="hover:text-primary-500 transition">
            Contact
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden flex flex-col gap-1 w-8 h-8 justify-center items-center"
        >
          <span
            className={`w-6 h-0.5 bg-white transition-all duration-300 ${
              isMenuOpen ? "rotate-45 translate-y-1.5" : ""
            }`}
          ></span>
          <span
            className={`w-6 h-0.5 bg-white transition-all duration-300 ${
              isMenuOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`w-6 h-0.5 bg-white transition-all duration-300 ${
              isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
            }`}
          ></span>
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-accent-950/95 backdrop-blur-sm transition-all duration-300 ${
          isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div className="flex flex-col py-4">
          <a
            href="#services"
            className="px-6 py-3 hover:text-primary-500 hover:bg-white/10 transition"
            onClick={() => setIsMenuOpen(false)}
          >
            Services
          </a>
          <a
            href="#gallery"
            className="px-6 py-3 hover:text-primary-500 hover:bg-white/10 transition"
            onClick={() => setIsMenuOpen(false)}
          >
            Gallery
          </a>
          <a
            href="#about"
            className="px-6 py-3 hover:text-primary-500 hover:bg-white/10 transition"
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </a>
          <a
            href="#contact"
            className="px-6 py-3 hover:text-primary-500 hover:bg-white/10 transition"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}
