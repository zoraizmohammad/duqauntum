export default function Footer() {
  return (
    <footer
      className="relative py-16 border-t border-[#3b2472]"
      style={{ background: "#1e1040" }}
    >
      {/* Circuit wire top decoration */}
      <div className="flex items-center mb-12 max-w-5xl mx-auto px-6 opacity-30">
        <div className="flex-1 h-[1px] bg-white" />
        <div className="w-4 h-4 border border-white rounded-full flex items-center justify-center mx-2">
          <div className="w-1 h-1 bg-white rounded-full" />
        </div>
        <div className="w-12 h-[1px] bg-white" />
        <div className="w-8 h-8 border border-white flex items-center justify-center font-mono text-xs text-white mx-0">
          H
        </div>
        <div className="w-12 h-[1px] bg-white" />
        <div className="w-4 h-4 border border-white flex items-center justify-center mx-2">
          <span className="text-white text-xs font-mono">⊕</span>
        </div>
        <div className="flex-1 h-[1px] bg-white" />
      </div>

      <div className="max-w-5xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <FooterLogo />
              <div>
                <p
                  className="font-mono font-bold text-white tracking-widest text-sm"
                  style={{ fontFamily: "'JetBrains Mono', monospace" }}
                >
                  DuQuantum
                </p>
                <p className="text-[#b8a9d9] text-xs">2026</p>
              </div>
            </div>
            <p className="text-[#b8a9d9] text-sm leading-relaxed">
              Duke&apos;s inaugural quantum computing hackathon. Building the
              next generation of quantum engineers, one qubit at a time.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4 flex items-center gap-2">
              <span className="w-4 h-[1px] bg-[#00c4b4]" />
              Navigate
            </h4>
            <ul className="space-y-2">
              {["About", "Tracks", "Schedule", "Speakers", "Sponsors", "Register"].map(
                (l) => (
                  <li key={l}>
                    <a
                      href={`#${l.toLowerCase()}`}
                      className="text-[#b8a9d9] text-sm hover:text-[#00c4b4] transition-colors font-mono"
                    >
                      {l}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4 flex items-center gap-2">
              <span className="w-4 h-[1px] bg-[#00c4b4]" />
              Contact
            </h4>
            <a
              href="mailto:organizers@duquantum.org"
              className="text-[#00c4b4] text-sm font-mono hover:text-[#00e5d3] transition-colors block mb-3"
            >
              organizers@duquantum.org
            </a>
            <p className="text-[#b8a9d9] text-xs leading-relaxed">
              Duke University<br />
              Durham, NC 27708<br />
              October 24–25, 2026
            </p>

            {/* DQ × HackDuke logos */}
            <div className="mt-5 flex items-center gap-3">
              <div className="w-8 h-8 rounded-full border border-[#3b2472] flex items-center justify-center">
                <span className="text-[#a78bfa] font-bold text-xs font-mono">DQ</span>
              </div>
              <span className="text-[#3b2472] font-mono text-sm">⊗</span>
              <div className="text-[#00c4b4] font-bold text-sm tracking-wider">
                HACK<span className="block leading-none">DUKE</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[#3b2472] pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[#b8a9d9] text-xs font-mono">
            © 2026 Duke Quantum Information Society &amp; HackDuke
          </p>
          <p
            className="text-[#b8a9d9] text-xs font-mono"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            |ψ_final⟩ = <span className="text-[#00c4b4]">measured</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterLogo() {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="50" cy="50" r="44" stroke="white" strokeWidth="4" />
      <ellipse cx="50" cy="50" rx="44" ry="14" stroke="white" strokeWidth="3" opacity="0.6" />
      <line x1="50" y1="50" x2="72" y2="22" stroke="#00c4b4" strokeWidth="3.5" />
      <polygon points="72,22 64,26 70,32" fill="#00c4b4" />
      <text x="22" y="58" fontSize="30" fontWeight="700" fill="white" fontFamily="Space Grotesk, sans-serif">DQ</text>
    </svg>
  );
}
