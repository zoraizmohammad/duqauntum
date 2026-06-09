"use client";

import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "About", href: "#about" },
    { label: "Tracks", href: "#tracks" },
    { label: "Schedule", href: "#schedule" },
    { label: "Speakers", href: "#speakers" },
    { label: "Sponsors", href: "#sponsors" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#2a1958]/90 backdrop-blur-md border-b border-[#3b2472]/60"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* DQ Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <BlochSphereLogo />
          <span
            className="font-mono font-bold text-lg tracking-widest text-white group-hover:text-[#00c4b4] transition-colors"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            DuQuantum
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[#b8a9d9] hover:text-[#00c4b4] text-sm font-medium tracking-wide transition-colors duration-200"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#register"
            className="relative inline-flex items-center gap-0 font-mono font-bold text-sm tracking-widest text-[#2a1958] bg-[#00c4b4] hover:bg-[#00e5d3] transition-colors px-5 py-2 rounded-sm"
          >
            <span className="absolute -left-5 top-1/2 -translate-y-1/2 w-5 h-[2px] bg-[#00c4b4]" />
            Register
            <span className="absolute -right-5 top-1/2 -translate-y-1/2 w-5 h-[2px] bg-[#00c4b4]" />
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-[#b8a9d9] hover:text-white"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            {menuOpen ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </>
            ) : (
              <>
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </>
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#2a1958]/95 backdrop-blur-md border-b border-[#3b2472]/60 px-6 pb-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="block py-3 text-[#b8a9d9] hover:text-[#00c4b4] font-medium tracking-wide border-b border-[#3b2472]/40 transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#register"
            onClick={() => setMenuOpen(false)}
            className="mt-4 block text-center font-mono font-bold text-sm tracking-widest text-[#2a1958] bg-[#00c4b4] hover:bg-[#00e5d3] transition-colors px-5 py-2 rounded-sm"
          >
            Register
          </a>
        </div>
      )}
    </header>
  );
}

function BlochSphereLogo() {
  return (
    <svg
      width="36"
      height="36"
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="group-hover:drop-shadow-[0_0_8px_rgba(0,196,180,0.8)] transition-all duration-300"
    >
      {/* Outer circle (Bloch sphere) */}
      <circle cx="50" cy="50" r="44" stroke="white" strokeWidth="4" />
      {/* Equatorial ellipse */}
      <ellipse
        cx="50"
        cy="50"
        rx="44"
        ry="14"
        stroke="white"
        strokeWidth="3"
        opacity="0.7"
      />
      {/* State vector arrow */}
      <line x1="50" y1="50" x2="72" y2="22" stroke="#00c4b4" strokeWidth="3.5" />
      <polygon points="72,22 64,26 70,32" fill="#00c4b4" />
      {/* DQ text */}
      <text
        x="22"
        y="58"
        fontSize="30"
        fontWeight="700"
        fill="white"
        fontFamily="Space Grotesk, sans-serif"
      >
        DQ
      </text>
    </svg>
  );
}
