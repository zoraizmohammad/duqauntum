"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const speakers = [
  {
    name: "Dr. Kenneth Brown",
    role: "Professor of Electrical & Computer Engineering",
    affiliation: "Duke University",
    expertise: "Trapped-ion quantum computing, quantum error correction",
    initials: "KB",
    color: "#00c4b4",
  },
  {
    name: "Dr. Jungsang Kim",
    role: "Professor of Electrical & Computer Engineering",
    affiliation: "Duke University / IonQ Co-founder",
    expertise: "Photonic interconnects, large-scale ion traps",
    initials: "JK",
    color: "#a78bfa",
  },
  {
    name: "TBA",
    role: "Quantum Research Scientist",
    affiliation: "IBM Quantum",
    expertise: "Quantum error mitigation, transmon qubits",
    initials: "IBM",
    color: "#00c4b4",
  },
  {
    name: "TBA",
    role: "Principal Engineer",
    affiliation: "Microsoft Azure Quantum",
    expertise: "Topological qubits, quantum networking",
    initials: "MS",
    color: "#f0abfc",
  },
];

const mentors = [
  { area: "Quantum Algorithms", count: "4 mentors", color: "#00c4b4" },
  { area: "Quantum Hardware", count: "3 mentors", color: "#a78bfa" },
  { area: "Quantum ML", count: "3 mentors", color: "#f0abfc" },
  { area: "Industry Applications", count: "2 mentors", color: "#00c4b4" },
];

export default function Speakers() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="speakers"
      ref={ref}
      className="relative pt-36 pb-32"
      style={{ background: "#1e1040" }}
    >
      {/* Ising model lattice watermark */}
      <IsingLattice />

      <div className="relative max-w-6xl mx-auto px-8 lg:px-16">
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
              Speakers & Mentors
            </span>
            <span className="w-8 h-[1px] bg-[#00c4b4]" />
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white">
            Leading Voices in{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#a78bfa] to-[#00c4b4]">
              Quantum
            </span>
          </h2>
        </motion.div>

        {/* Speaker cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          {speakers.map((sp, i) => (
            <motion.div
              key={sp.name + i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.12 }}
              className="relative flex flex-col items-center text-center p-6 border bg-[#2a1958]/40 transition-all duration-300 group hover:-translate-y-1"
              style={{ borderColor: `${sp.color}25` }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = `${sp.color}70`;
                (e.currentTarget as HTMLElement).style.boxShadow = `0 0 30px ${sp.color}18`;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = `${sp.color}25`;
                (e.currentTarget as HTMLElement).style.boxShadow = "none";
              }}
            >
              {/* Avatar — Bloch-sphere style circle with initials */}
              <div className="relative mb-4">
                <div
                  className="w-20 h-20 rounded-full border-2 flex items-center justify-center font-bold text-lg font-mono"
                  style={{ borderColor: sp.color, color: sp.color, background: `${sp.color}10` }}
                >
                  {sp.initials}
                </div>
                {/* Orbit ring */}
                <div
                  className="absolute inset-[-6px] rounded-full border opacity-30"
                  style={{ borderColor: sp.color, transform: "rotateX(70deg)" }}
                />
              </div>

              <h3 className="text-white font-bold text-sm mb-1">{sp.name}</h3>
              <p className="text-xs font-mono" style={{ color: sp.color }}>
                {sp.affiliation}
              </p>
              <p className="text-[#b8a9d9] text-xs mt-1">{sp.role}</p>

              <div
                className="mt-4 w-full p-2 text-xs text-[#b8a9d9] rounded-sm border"
                style={{ borderColor: `${sp.color}20`, background: `${sp.color}08` }}
              >
                {sp.expertise}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Circuit divider */}
        <div className="flex items-center gap-2 mb-12 opacity-30">
          <div className="flex-1 h-[1px] bg-white" />
          <div className="w-4 h-4 border border-white flex items-center justify-center">
            <span className="text-white text-xs">H</span>
          </div>
          <div className="w-16 h-[1px] bg-white" />
          <div className="w-4 h-4 border border-white rounded-full flex items-center justify-center">
            <div className="w-1 h-1 bg-white rounded-full" />
          </div>
          <div className="flex-1 h-[1px] bg-white" />
        </div>

        {/* Mentor areas */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h3 className="text-center text-white font-bold text-xl mb-8">
            Mentor Tracks
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {mentors.map((m, i) => (
              <div
                key={m.area}
                className="flex items-center gap-3 p-4 border"
                style={{ borderColor: `${m.color}30`, background: `${m.color}08` }}
              >
                <div
                  className="w-10 h-10 border-2 flex-shrink-0 flex items-center justify-center font-mono font-bold text-xs"
                  style={{ borderColor: m.color, color: m.color }}
                >
                  M{i + 1}
                </div>
                <div>
                  <p className="text-white text-sm font-semibold">{m.area}</p>
                  <p className="text-xs font-mono" style={{ color: m.color }}>
                    {m.count}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function IsingLattice() {
  const cols = 12;
  const rows = 6;
  const spacing = 60;
  const w = cols * spacing;
  const h = rows * spacing;

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-[0.04]">
      <svg
        width="100%"
        height="100%"
        viewBox={`0 0 ${w} ${h}`}
        preserveAspectRatio="xMidYMid slice"
      >
        {Array.from({ length: rows }, (_, r) =>
          Array.from({ length: cols }, (_, c) => {
            const x = c * spacing + spacing / 2;
            const y = r * spacing + spacing / 2;
            const up = (c + r) % 2 === 0;
            return (
              <g key={`${r}-${c}`}>
                {/* Horizontal bond */}
                {c < cols - 1 && (
                  <line
                    x1={x}
                    y1={y}
                    x2={x + spacing}
                    y2={y}
                    stroke="white"
                    strokeWidth="1"
                  />
                )}
                {/* Vertical bond */}
                {r < rows - 1 && (
                  <line
                    x1={x}
                    y1={y}
                    x2={x}
                    y2={y + spacing}
                    stroke="white"
                    strokeWidth="1"
                  />
                )}
                {/* Spin arrow */}
                <line
                  x1={x}
                  y1={up ? y + 10 : y - 10}
                  x2={x}
                  y2={up ? y - 10 : y + 10}
                  stroke="white"
                  strokeWidth="1.5"
                />
                <polygon
                  points={
                    up
                      ? `${x},${y - 10} ${x - 4},${y - 4} ${x + 4},${y - 4}`
                      : `${x},${y + 10} ${x - 4},${y + 4} ${x + 4},${y + 4}`
                  }
                  fill="white"
                />
              </g>
            );
          })
        )}
      </svg>
    </div>
  );
}
