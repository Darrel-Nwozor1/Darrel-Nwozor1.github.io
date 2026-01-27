import React, { useState } from "react";

function Navbar() {
  const [open, setOpen] = useState(false);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false); // close menu after click
  };

  return (
    <nav className="bg-gray-900 text-white fixed top-0 left-0 w-full shadow-md z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <h1 className="text-2xl font-extrabold tracking-wide">
          <span className="text-cyan-400">Darrel's</span> Portfolio
        </h1>

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-8 text-sm font-medium items-center">
          <li className="hover:text-cyan-400 cursor-pointer" onClick={() => scrollToSection("home")}>Home</li>
          <li className="hover:text-cyan-400 cursor-pointer" onClick={() => scrollToSection("projects")}>Projects</li>
          <li className="hover:text-cyan-400 cursor-pointer" onClick={() => scrollToSection("about")}>About</li>
          <li>
            <button
              onClick={() => scrollToSection("contact")}
              className="bg-cyan-500 hover:bg-cyan-400 px-4 py-2 rounded-full font-semibold text-sm shadow-md transition"
            >
              Contact
            </button>
          </li>
        </ul>

        {/* This is the Burger Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col space-y-1"
        >
          <span className={`h-0.5 w-6 bg-white transition ${open && "rotate-45 translate-y-1.5"}`} />
          <span className={`h-0.5 w-6 bg-white transition ${open && "opacity-0"}`} />
          <span className={`h-0.5 w-6 bg-white transition ${open && "-rotate-45 -translate-y-1.5"}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <ul className="md:hidden bg-gray-900 px-6 pb-6 space-y-4 text-sm font-medium">
          <li className="hover:text-cyan-400 cursor-pointer" onClick={() => scrollToSection("home")}>Home</li>
          <li className="hover:text-cyan-400 cursor-pointer" onClick={() => scrollToSection("projects")}>Projects</li>
          <li className="hover:text-cyan-400 cursor-pointer" onClick={() => scrollToSection("about")}>About</li>
          <li>
            <button
              onClick={() => scrollToSection("contact")}
              className="bg-cyan-500 hover:bg-cyan-400 w-full py-2 rounded-full font-semibold shadow-md transition"
            >
              Contact
            </button>
          </li>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
