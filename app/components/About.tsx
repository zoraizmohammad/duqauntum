"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import dynamic from "next/dynamic";

const BlochSphere = dynamic(() => import("./BlochSphere"), { ssr: false });

const stats = [
  { label: "Hours", value: "24" },
  { label: "Tracks", value: "3" },
  { label: "Prize Pool", value: "$5k+" },
  { label: "Workshops", value: "8+" },
];

export default function About() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="about"
      ref={ref}
      className="relative py-28 overflow-hidden"
      style={{ background: "linear-gradient(180deg, #2a1958 0%, #231449 100%)" }}
    >
      {/* Schrödinger equation watermark */}
      <div
        className="absolute top-8 right-8 text-[#a78bfa]/10 font-mono text-2xl select-none pointer-events-none quantum-float-slow hidden lg:block"
        style={{ fontFamily: "'JetBrains Mono', monospace" }}
      >
        iℏ ∂/∂t |ψ(t)⟩ = Ĥ|ψ(t)⟩
      </div>
      <div
        className="absolute bottom-12 left-8 text-[#00c4b4]/8 font-mono text-xl select-none pointer-events-none quantum-float hidden lg:block"
        style={{ fontFamily: "'JetBrains Mono', monospace", animationDelay: "3s" }}
      >
        ρ = |ψ⟩⟨ψ|
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="w-8 h-[1px] bg-[#00c4b4]" />
              <span
                className="text-[#00c4b4] text-xs font-mono tracking-[0.3em] uppercase"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                About DuQuantum
              </span>
            </div>

            <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
              Duke&apos;s First
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00c4b4] to-[#a78bfa]">
                Quantum Hackathon
              </span>
            </h2>

            <div className="space-y-5 text-[#b8a9d9] leading-relaxed">
              <p>
                DuQuantum 2026 brings together students across quantum physics,
                computer science, and engineering to build at the frontier of
                one of the most consequential technologies of our time.
              </p>
              <p>
                Whether you understand{" "}
                <span className="font-mono text-[#00c4b4]">|ψ⟩ = α|0⟩ + β|1⟩</span>{" "}
                or you&apos;re encountering superposition for the first time —
                there&apos;s a track for you. Teams of 2–4 will tackle real
                quantum computing challenges across hardware, algorithms, and
                applications.
              </p>
              <p>
                Hosted by the{" "}
                <strong className="text-white">Duke Quantum Information Society</strong>{" "}
                in collaboration with{" "}
                <strong className="text-[#00c4b4]">HackDuke</strong>, with
                access to real quantum hardware through IBM Quantum and IonQ
                cloud platforms.
              </p>
            </div>

            {/* Circuit divider */}
            <div className="my-8 flex items-center gap-3">
              <span className="flex-1 h-[1px] bg-[#3b2472]" />
              <span className="font-mono text-[#3b2472] text-xs">─ CNOT ─</span>
              <span className="flex-1 h-[1px] bg-[#3b2472]" />
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                  className="flex flex-col items-center text-center p-4 border border-[#3b2472] hover:border-[#00c4b4]/50 transition-colors rounded-sm"
                >
                  <span className="text-3xl font-bold text-[#00c4b4] font-mono">
                    {s.value}
                  </span>
                  <span className="text-xs text-[#b8a9d9] mt-1 tracking-widest uppercase">
                    {s.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* 3D Bloch Sphere */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1.0, delay: 0.2, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative w-full aspect-square max-w-md mx-auto">
              {/* Glow effect behind sphere */}
              <div
                className="absolute inset-0 rounded-full opacity-30"
                style={{
                  background:
                    "radial-gradient(circle, rgba(0,196,180,0.4) 0%, transparent 70%)",
                  filter: "blur(30px)",
                }}
              />
              <BlochSphere />
            </div>

            {/* Labels around sphere */}
            <div className="absolute top-4 left-1/2 -translate-x-1/2 font-mono text-xs text-white/70 tracking-widest">
              |0⟩
            </div>
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 font-mono text-xs text-[#a78bfa]/70 tracking-widest">
              |1⟩
            </div>
            <div className="absolute left-2 top-1/2 -translate-y-1/2 font-mono text-xs text-[#b8a9d9]/50">
              |−⟩
            </div>
            <div className="absolute right-2 top-1/2 -translate-y-1/2 font-mono text-xs text-[#b8a9d9]/50">
              |+⟩
            </div>

            <p className="text-center text-[#b8a9d9] text-xs font-mono mt-4 tracking-wide">
              Drag to explore the Bloch sphere
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
