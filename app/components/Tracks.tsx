"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const tracks = [
  {
    gate: "H",
    gateLabel: "Hadamard",
    name: "Quantum Algorithms",
    color: "#00c4b4",
    description:
      "Design or improve quantum algorithms targeting real near-term hardware. Topics include variational algorithms (VQE, QAOA), quantum simulation, error mitigation, and Grover/Shor-inspired approaches.",
    tags: ["Qiskit", "Cirq", "PennyLane", "IonQ API"],
    example: "Optimize a molecule's ground state energy using VQE on IBM Quantum",
  },
  {
    gate: "⊕",
    gateLabel: "CNOT",
    name: "Quantum ML & Optimization",
    color: "#a78bfa",
    description:
      "Harness quantum-classical hybrid approaches for machine learning and combinatorial optimization. Build quantum kernels, quantum neural networks, or quantum-enhanced solvers.",
    tags: ["PennyLane", "TensorFlow Quantum", "QUBO", "Quantum Annealers"],
    example: "Quantum kernel SVM for drug-protein interaction classification",
  },
  {
    gate: "U",
    gateLabel: "Unitary",
    name: "Quantum Hardware & Systems",
    color: "#f0abfc",
    description:
      "Work directly with quantum hardware, pulse-level control, or quantum networking. Design new gate sequences, noise characterization protocols, or quantum error correction codes.",
    tags: ["Qiskit Pulse", "QuTiP", "Trapped Ion", "Superconducting"],
    example: "Implement a fault-tolerant logical qubit using the surface code",
  },
];

export default function Tracks() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="tracks"
      ref={ref}
      className="relative py-28"
      style={{
        background: "linear-gradient(180deg, #231449 0%, #2a1958 100%)",
      }}
    >
      {/* Background tensor network pattern */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-5">
        <svg width="100%" height="100%" viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
          {Array.from({ length: 6 }, (_, i) =>
            Array.from({ length: 5 }, (_, j) => (
              <g key={`${i}-${j}`}>
                <circle cx={120 * i + 60} cy={120 * j + 60} r="10" fill="white" />
                {i < 5 && (
                  <line
                    x1={120 * i + 70}
                    y1={120 * j + 60}
                    x2={120 * (i + 1) + 50}
                    y2={120 * j + 60}
                    stroke="white"
                    strokeWidth="1.5"
                  />
                )}
                {j < 4 && (
                  <line
                    x1={120 * i + 60}
                    y1={120 * j + 70}
                    x2={120 * i + 60}
                    y2={120 * (j + 1) + 50}
                    stroke="white"
                    strokeWidth="1.5"
                  />
                )}
              </g>
            ))
          )}
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
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
              Challenge Tracks
            </span>
            <span className="w-8 h-[1px] bg-[#00c4b4]" />
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white">
            Choose Your
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#a78bfa] to-[#00c4b4]">
              Quantum Path
            </span>
          </h2>
          <p className="mt-4 text-[#b8a9d9] max-w-xl mx-auto">
            Three tracks spanning the full quantum computing stack — from
            algorithms to hardware. All levels welcome.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {tracks.map((track, i) => (
            <TrackCard key={track.name} track={track} index={i} inView={inView} />
          ))}
        </div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center text-[#b8a9d9] text-sm mt-10 font-mono"
          style={{ fontFamily: "'JetBrains Mono', monospace" }}
        >
          Teams of 2–4. Cross-track collaboration encouraged.{" "}
          <span className="text-[#00c4b4]">No quantum experience required for Track 1 & 2.</span>
        </motion.p>
      </div>
    </section>
  );
}

function TrackCard({
  track,
  index,
  inView,
}: {
  track: (typeof tracks)[0];
  index: number;
  inView: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: 0.2 + index * 0.15 }}
      className="group relative flex flex-col border border-[#3b2472] hover:border-opacity-100 bg-[#2a1958]/60 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1"
      style={{
        borderColor: `${track.color}33`,
        "--track-color": track.color,
      } as React.CSSProperties}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor = `${track.color}99`;
        (e.currentTarget as HTMLElement).style.boxShadow = `0 0 30px ${track.color}22`;
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor = `${track.color}33`;
        (e.currentTarget as HTMLElement).style.boxShadow = "none";
      }}
    >
      {/* Gate header */}
      <div className="p-6 border-b" style={{ borderColor: `${track.color}22` }}>
        <div className="flex items-center gap-4 mb-3">
          {/* Gate icon */}
          <div className="relative flex items-center">
            <div className="w-8 h-[2px]" style={{ background: track.color }} />
            <div
              className="w-14 h-14 border-2 flex items-center justify-center font-mono font-bold text-xl flex-shrink-0"
              style={{ borderColor: track.color, color: track.color }}
            >
              {track.gate}
            </div>
            <div className="w-8 h-[2px]" style={{ background: track.color }} />
          </div>
          <div>
            <p
              className="text-xs font-mono tracking-widest opacity-70 uppercase"
              style={{ color: track.color }}
            >
              {track.gateLabel} gate
            </p>
            <h3 className="text-white font-bold text-lg leading-tight">{track.name}</h3>
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="p-6 flex flex-col flex-1 gap-5">
        <p className="text-[#b8a9d9] text-sm leading-relaxed">{track.description}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {track.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-2 py-1 font-mono rounded-sm"
              style={{
                background: `${track.color}15`,
                color: track.color,
                border: `1px solid ${track.color}30`,
                fontFamily: "'JetBrains Mono', monospace",
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Example challenge */}
        <div
          className="mt-auto p-3 rounded-sm"
          style={{ background: `${track.color}0a`, border: `1px dashed ${track.color}30` }}
        >
          <p
            className="text-xs font-mono mb-1 uppercase tracking-widest"
            style={{ color: track.color }}
          >
            Example challenge
          </p>
          <p className="text-xs text-[#b8a9d9]">{track.example}</p>
        </div>
      </div>
    </motion.div>
  );
}
