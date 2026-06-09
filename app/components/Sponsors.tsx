"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const tiers = [
  {
    name: "Entangled",
    color: "#00c4b4",
    gate: "⊗",
    description: "Premier founding partner",
    sponsors: [
      { name: "IBM Quantum", abbr: "IBM" },
      { name: "IonQ", abbr: "IQ" },
    ],
  },
  {
    name: "Superposition",
    color: "#a78bfa",
    gate: "H",
    description: "Principal sponsors",
    sponsors: [
      { name: "Microsoft Azure Quantum", abbr: "MS" },
      { name: "Google Quantum AI", abbr: "GQ" },
      { name: "Amazon Braket", abbr: "AWS" },
    ],
  },
  {
    name: "Coherent",
    color: "#f0abfc",
    gate: "U",
    description: "Supporting sponsors",
    sponsors: [
      { name: "Your Company", abbr: "+" },
      { name: "Your Company", abbr: "+" },
      { name: "Your Company", abbr: "+" },
      { name: "Your Company", abbr: "+" },
    ],
  },
];

export default function Sponsors() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="sponsors"
      ref={ref}
      className="relative pt-36 pb-32"
      style={{ background: "linear-gradient(180deg, #1e1040 0%, #2a1958 100%)" }}
    >
      <div className="max-w-5xl mx-auto px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-8 h-[1px] bg-[#00c4b4]" />
            <span
              className="text-[#00c4b4] text-xs font-mono tracking-[0.3em] uppercase"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              Sponsors
            </span>
            <span className="w-8 h-[1px] bg-[#00c4b4]" />
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Who Makes It{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00c4b4] to-[#a78bfa]">
              Possible
            </span>
          </h2>
          <p className="text-[#b8a9d9] max-w-md mx-auto">
            DuQuantum 2026 is made possible by leaders in quantum computing
            hardware, software, and cloud access.
          </p>
        </motion.div>

        <div className="space-y-12">
          {tiers.map((tier, ti) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + ti * 0.15 }}
            >
              {/* Tier header as circuit gate */}
              <div className="flex items-center gap-3 mb-6">
                <div className="flex-1 h-[1px]" style={{ background: `${tier.color}30` }} />
                <div className="flex items-center gap-2">
                  <div className="w-6 h-[1px]" style={{ background: tier.color }} />
                  <div
                    className="w-9 h-9 border-2 flex items-center justify-center font-mono font-bold text-sm"
                    style={{ borderColor: tier.color, color: tier.color }}
                  >
                    {tier.gate}
                  </div>
                  <div className="w-6 h-[1px]" style={{ background: tier.color }} />
                </div>
                <div>
                  <span
                    className="text-xs font-mono font-bold tracking-widest uppercase"
                    style={{ color: tier.color }}
                  >
                    {tier.name}
                  </span>
                  <span className="text-[#b8a9d9] text-xs ml-2">— {tier.description}</span>
                </div>
                <div className="flex-1 h-[1px]" style={{ background: `${tier.color}30` }} />
              </div>

              {/* Sponsor logos */}
              <div
                className={`grid gap-4 ${
                  tier.sponsors.length <= 2
                    ? "grid-cols-2"
                    : tier.sponsors.length === 3
                    ? "grid-cols-3"
                    : "grid-cols-4"
                }`}
              >
                {tier.sponsors.map((sp, si) => (
                  <motion.div
                    key={`${sp.name}-${si}`}
                    whileHover={{ scale: 1.03, borderColor: `${tier.color}80` }}
                    className="aspect-[3/2] border flex flex-col items-center justify-center gap-2 cursor-pointer transition-all duration-200"
                    style={{
                      borderColor: `${tier.color}25`,
                      background: `${tier.color}05`,
                    }}
                  >
                    <div
                      className="w-12 h-12 rounded-full border-2 flex items-center justify-center font-mono font-bold text-sm"
                      style={{ borderColor: tier.color, color: tier.color }}
                    >
                      {sp.abbr}
                    </div>
                    <span className="text-[#b8a9d9] text-xs text-center px-2">{sp.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Become a sponsor CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 text-center border border-dashed border-[#3b2472] p-8"
        >
          <p className="text-[#b8a9d9] mb-2">
            Interested in sponsoring Duke&apos;s first quantum hackathon?
          </p>
          <p className="text-white font-semibold mb-4">
            Reach 200+ quantum-curious students, faculty, and researchers at Duke.
          </p>
          <a
            href="mailto:organizers@duquantum.org"
            className="inline-flex items-center gap-0 font-mono font-bold text-sm tracking-widest text-[#2a1958] bg-[#00c4b4] hover:bg-[#00e5d3] transition-colors px-6 py-3"
          >
            <span className="inline-block w-5 h-[2px] bg-[#2a1958]/40 mr-0" />
            organizers@duquantum.org
            <span className="inline-block w-5 h-[2px] bg-[#2a1958]/40 ml-0" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
