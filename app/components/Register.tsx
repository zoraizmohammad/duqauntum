"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

const faqs = [
  {
    q: "Do I need quantum computing experience?",
    a: "No prior quantum knowledge is required. We offer beginner-friendly workshops during the event, and the Quantum ML track is accessible to anyone with basic Python and ML experience. Come curious.",
  },
  {
    q: "Who can participate?",
    a: "All Duke undergrad, masters, and PhD students. We welcome participants from any department — CS, Physics, ECE, Math, Biology, and beyond. Cross-disciplinary teams often build the most creative projects.",
  },
  {
    q: "How large are teams?",
    a: "Teams are 2–4 people. Solo registration is welcome; we'll have a team-matching session at the start of the event for those who want to find teammates.",
  },
  {
    q: "What hardware/software will be available?",
    a: "All participants get access to IBM Quantum cloud credits, IonQ cloud access, and AWS Braket tokens. Simulators include Qiskit, Cirq, PennyLane, and QuTiP. No specialized local hardware needed.",
  },
  {
    q: "Is there a registration fee?",
    a: "DuQuantum 2026 is completely free for all Duke students. Meals, snacks, and swag are provided throughout the 24-hour event.",
  },
  {
    q: "What happens to our project after the hackathon?",
    a: "All rights remain with your team. We encourage open-source releases and will feature exceptional projects on the DuQuantum website and in our communications to sponsors.",
  },
];

export default function Register() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="register"
      ref={ref}
      className="relative py-28"
      style={{ background: "linear-gradient(180deg, #2a1958 0%, #1e1040 100%)" }}
    >
      {/* QFT watermark */}
      <div
        className="absolute bottom-12 right-8 text-[#a78bfa]/6 font-mono text-xl select-none pointer-events-none quantum-float hidden lg:block"
        style={{ fontFamily: "'JetBrains Mono', monospace", animationDelay: "2s" }}
      >
        QFT|x⟩ = (1/√N) Σ ω^(xy)|y⟩
      </div>

      <div className="max-w-5xl mx-auto px-6">
        {/* Register CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-8 h-[1px] bg-[#00c4b4]" />
            <span
              className="text-[#00c4b4] text-xs font-mono tracking-[0.3em] uppercase"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              Registration
            </span>
            <span className="w-8 h-[1px] bg-[#00c4b4]" />
          </div>

          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-4 leading-tight">
            Collapse Your{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00c4b4] to-[#a78bfa]">
              Superposition
            </span>
          </h2>

          <p className="text-[#b8a9d9] max-w-lg mx-auto mb-3 leading-relaxed">
            Right now you&apos;re in superposition — simultaneously going and not going.
            Make a measurement. Collapse into the version of yourself who built something
            quantum.
          </p>

          <p className="font-mono text-[#00c4b4] text-sm mb-10" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
            |ψ⟩ = α|stay home⟩ + β|build quantum⟩ → <strong>|build quantum⟩</strong>
          </p>

          {/* Gate-styled CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://devpost.com"
              target="_blank"
              rel="noopener noreferrer"
              className="gate-btn group"
            >
              <span className="inline-block w-8 h-[2px] bg-[#00c4b4]" />
              <span className="bg-[#00c4b4] text-[#2a1958] font-mono font-bold text-base tracking-widest px-8 py-4 hover:bg-[#00e5d3] transition-colors inline-block">
                Register on Devpost
              </span>
              <span className="inline-block w-8 h-[2px] bg-[#00c4b4]" />
            </a>
          </div>

          <p className="text-[#b8a9d9] text-xs mt-4 font-mono">
            Applications open August 2026 · Free for all Duke students · 200 spots
          </p>

          {/* Countdown placeholder */}
          <div className="mt-12 inline-flex items-center gap-0 border border-[#3b2472]">
            <div className="px-6 py-4 border-r border-[#3b2472] text-center">
              <div className="text-3xl font-bold font-mono text-white">137</div>
              <div className="text-xs text-[#b8a9d9] tracking-widest uppercase mt-1">days</div>
            </div>
            <div className="px-2 text-[#3b2472] font-mono">⊗</div>
            <div className="px-6 py-4 border-r border-[#3b2472] text-center">
              <div className="text-3xl font-bold font-mono text-white">--</div>
              <div className="text-xs text-[#b8a9d9] tracking-widest uppercase mt-1">hours</div>
            </div>
            <div className="px-2 text-[#3b2472] font-mono">⊗</div>
            <div className="px-6 py-4 text-center">
              <div className="text-3xl font-bold font-mono text-white">--</div>
              <div className="text-xs text-[#b8a9d9] tracking-widest uppercase mt-1">minutes</div>
            </div>
          </div>
          <p className="text-[#b8a9d9] text-xs mt-2 font-mono">until DuQuantum 2026</p>
        </motion.div>

        {/* FAQ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="flex items-center gap-3 mb-8">
            <span className="flex-1 h-[1px] bg-[#3b2472]" />
            <span
              className="text-[#b8a9d9] text-xs font-mono tracking-[0.3em] uppercase"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              FAQ
            </span>
            <span className="flex-1 h-[1px] bg-[#3b2472]" />
          </div>

          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <FAQItem key={i} faq={faq} index={i} inView={inView} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function FAQItem({
  faq,
  index,
  inView,
}: {
  faq: { q: string; a: string };
  index: number;
  inView: boolean;
}) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: 0.4 + index * 0.07 }}
      className="border border-[#3b2472] hover:border-[#00c4b4]/30 transition-colors"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 p-5 text-left group"
      >
        <div className="flex items-center gap-3">
          {/* Gate indicator */}
          <div
            className="w-7 h-7 border border-[#3b2472] flex-shrink-0 flex items-center justify-center font-mono text-xs transition-colors"
            style={open ? { borderColor: "#00c4b4", color: "#00c4b4" } : { color: "#b8a9d9" }}
          >
            Q{index + 1}
          </div>
          <span className="text-white font-medium text-sm group-hover:text-[#00c4b4] transition-colors">
            {faq.q}
          </span>
        </div>
        <span
          className="text-[#b8a9d9] flex-shrink-0 text-lg font-mono transition-transform duration-200"
          style={{ transform: open ? "rotate(45deg)" : "rotate(0deg)", display: "inline-block" }}
        >
          +
        </span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <div className="px-5 pb-5 pl-[60px]">
              <p className="text-[#b8a9d9] text-sm leading-relaxed">{faq.a}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
