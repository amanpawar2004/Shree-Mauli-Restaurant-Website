import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  FaPhoneAlt,
  FaBars,
  FaTimes,
} from "react-icons/fa";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  const navLinkClass = ({ isActive }) =>
    isActive
      ? "text-yellow-300 font-semibold"
      : "hover:text-yellow-300 transition";

  return (
    <nav className="sticky top-0 z-50 bg-[#8B1E1E] shadow-lg">

      <div className="max-w-7xl mx-auto px-5 lg:px-8 h-20 flex justify-between items-center">

        {/* Logo */}

        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-white">
            श्री माऊली
          </h1>

          <p className="text-xs md:text-sm text-yellow-300">
            Pure Veg Restaurant
          </p>
        </div>

        {/* Desktop Menu */}

        <div className="hidden lg:flex items-center gap-8 text-lg text-white">

          <NavLink to="/" className={navLinkClass}>
            Home
          </NavLink>

          <NavLink to="/menu" className={navLinkClass}>
            Menu
          </NavLink>

          <NavLink to="/about" className={navLinkClass}>
            About
          </NavLink>

          <NavLink to="/gallery" className={navLinkClass}>
            Gallery
          </NavLink>

          <NavLink to="/book-table" className={navLinkClass}>
            Book Table
          </NavLink>

          <NavLink to="/contact" className={navLinkClass}>
            Contact
          </NavLink>

        </div>

        {/* Desktop Call */}

        <a
          href="tel:+919921291202"
          className="hidden lg:flex bg-yellow-400 hover:bg-yellow-300 text-black px-5 py-2 rounded-xl items-center gap-2 font-semibold transition"
        >
          <FaPhoneAlt />
          Call Now
        </a>

        {/* Mobile Menu Button */}

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden text-white text-3xl"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

      </div>

      {/* Mobile Menu */}

      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-[500px]" : "max-h-0"
        } bg-[#7A1818]`}
      >

        <div className="flex flex-col px-6 py-5 space-y-5 text-white text-lg">

          <NavLink to="/" onClick={closeMenu} className={navLinkClass}>
            Home
          </NavLink>

          <NavLink to="/menu" onClick={closeMenu} className={navLinkClass}>
            Menu
          </NavLink>

          <NavLink to="/about" onClick={closeMenu} className={navLinkClass}>
            About
          </NavLink>

          <NavLink to="/gallery" onClick={closeMenu} className={navLinkClass}>
            Gallery
          </NavLink>

          <NavLink to="/book-table" onClick={closeMenu} className={navLinkClass}>
            Book Table
          </NavLink>

          <NavLink to="/contact" onClick={closeMenu} className={navLinkClass}>
            Contact
          </NavLink>

          <a
            href="tel:+919921291202"
            className="bg-yellow-400 text-black rounded-xl px-5 py-3 flex items-center justify-center gap-3 font-semibold"
          >
            <FaPhoneAlt />
            Call Restaurant
          </a>

        </div>

      </div>

    </nav>
  );
}

export default Navbar;