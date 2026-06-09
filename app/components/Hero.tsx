"use client";

import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";

const QuantumParticles = dynamic(() => import("./QuantumParticles"), { ssr: false });

export default function Hero() {
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setAnimated(true), 300);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden interference-bg">
      {/* All background layers — absolutely positioned, out of flow */}
      <QuantumParticles />
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div
          className="w-[700px] h-[700px] rounded-full opacity-15"
          style={{
            background:
              "radial-gradient(circle, rgba(0,196,180,0.35) 0%, rgba(59,36,114,0.1) 55%, transparent 75%)",
          }}
        />
      </div>
      <FloatingEquations />

      {/*
        Content wrapper: absolute inset-0 guarantees it covers the full
        min-h-screen section, so justify-center truly vertically centers.
        pt-20 reserves space for the fixed navbar.
      */}
      <div
        className={`absolute inset-0 flex flex-col items-center justify-center text-center px-6 pt-20 pb-10 transition-all duration-1000 ${
          animated ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        {/* Tag line */}
        <div className="mb-5 flex items-center gap-2">
          <span className="w-8 h-[1px] bg-[#00c4b4]" />
          <span
            className="text-[#00c4b4] text-xs font-mono font-medium tracking-[0.25em] uppercase"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            Duke&apos;s First Quantum Computing Hackathon
          </span>
          <span className="w-8 h-[1px] bg-[#00c4b4]" />
        </div>

        {/* Animated circuit wordmark — tighter max-width so it's not too tall */}
        <CircuitWordmark animated={animated} />

        {/* Date + org */}
        <div className="mt-7 flex flex-col items-center gap-2">
          <div className="flex items-center gap-4">
            <span className="w-12 h-[1px] bg-[#3b2472]" />
            <span
              className="text-[#b8a9d9] text-sm font-mono tracking-widest"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              |ψ⟩ ={" "}
              <span className="text-white font-bold">OCT. 24 – 25, 2026</span>
            </span>
            <span className="w-12 h-[1px] bg-[#3b2472]" />
          </div>
          <p className="text-[#b8a9d9] text-sm">
            by the{" "}
            <strong className="text-white">Duke Quantum Information Society</strong>{" "}
            × <strong className="text-[#00c4b4]">HackDuke</strong>
          </p>
          <p className="text-[#b8a9d9] text-sm">
            Open to{" "}
            <span className="text-white font-semibold">all undergrad, masters, and PhD students</span>
          </p>
        </div>

        {/* CTA buttons */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a href="#register" className="gate-btn group">
            <span className="inline-block w-6 h-[2px] bg-[#00c4b4]" />
            <span className="bg-[#00c4b4] text-[#2a1958] font-mono font-bold text-sm tracking-widest px-6 py-3 hover:bg-[#00e5d3] transition-colors">
              Register Now
            </span>
            <span className="inline-block w-6 h-[2px] bg-[#00c4b4]" />
          </a>
          <a
            href="#about"
            className="border border-[#3b2472] hover:border-[#a78bfa] text-[#b8a9d9] hover:text-white font-mono text-sm tracking-widest px-6 py-3 transition-all duration-200"
          >
            Learn More
          </a>
        </div>

        {/* Scroll cue — reduced gap so it doesn't crowd CTAs */}
        <div className="mt-10 flex flex-col items-center gap-2 animate-bounce">
          <span className="text-[#b8a9d9] text-xs font-mono tracking-widest">scroll</span>
          <svg width="16" height="24" viewBox="0 0 16 24" fill="none">
            <rect x="1" y="1" width="14" height="22" rx="7" stroke="#3b2472" strokeWidth="1.5" />
            <rect x="6.5" y="5" width="3" height="6" rx="1.5" fill="#00c4b4" />
          </svg>
        </div>
      </div>
    </section>
  );
}

/* The DUQUANTUM circuit-style wordmark as inline SVG */
function CircuitWordmark({ animated }: { animated: boolean }) {
  return (
    <div className="w-full max-w-3xl mx-auto">
      <svg
        viewBox="0 0 900 280"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto"
      >
        {/* === Wire 1 (top) === */}
        <line
          x1="0"
          y1="90"
          x2="900"
          y2="90"
          stroke="white"
          strokeWidth="2"
          strokeDasharray="1000"
          strokeDashoffset={animated ? "0" : "1000"}
          style={{ transition: "stroke-dashoffset 1.8s ease-out 0.2s" }}
        />
        {/* === Wire 2 (mid) === */}
        <line
          x1="0"
          y1="155"
          x2="900"
          y2="155"
          stroke="white"
          strokeWidth="2"
          strokeDasharray="1000"
          strokeDashoffset={animated ? "0" : "1000"}
          style={{ transition: "stroke-dashoffset 1.8s ease-out 0.4s" }}
        />
        {/* === Wire 3 (bottom) === */}
        <line
          x1="0"
          y1="220"
          x2="900"
          y2="220"
          stroke="white"
          strokeWidth="2"
          strokeDasharray="1000"
          strokeDashoffset={animated ? "0" : "1000"}
          style={{ transition: "stroke-dashoffset 1.8s ease-out 0.6s" }}
        />

        {/* ─── Gate boxes with letters (DUQUANTUM) ─── */}

        {/* D */}
        <GateBox x={28} y={62} w={58} h={58} letter="D" delay={0.6} animated={animated} />
        {/* U */}
        <GateBox x={110} y={62} w={58} h={58} letter="U" delay={0.75} animated={animated} />

        {/* CNOT between wire1 and wire2 at x=200 */}
        <CNOTGate x={200} topY={90} botY={155} delay={0.9} animated={animated} />

        {/* Q — spans wire 1 & 2 */}
        <TallGateBox x={230} y={62} w={68} h={123} letter="Q" delay={1.0} animated={animated} />

        {/* Measurement gate at x=330 */}
        <MeasGate x={320} y={120} delay={1.15} animated={animated} />

        {/* U */}
        <GateBox x={395} y={62} w={58} h={58} letter="U" delay={1.2} animated={animated} />

        {/* |0⟩ state label */}
        <StateLabel x={468} y={90} delay={1.3} animated={animated} />

        {/* A */}
        <GateBox x={395} y={127} w={58} h={58} letter="A" delay={1.25} animated={animated} />

        {/* N */}
        <GateBox x={470} y={127} w={58} h={58} letter="N" delay={1.35} animated={animated} />

        {/* Controlled vertical line */}
        <ControlLine x={548} topY={155} botY={220} delay={1.4} animated={animated} />

        {/* T — spans wire 2 & 3 */}
        <TallGateBox x={560} y={127} w={68} h={123} letter="T" delay={1.5} animated={animated} />

        {/* SWAP at x=655 */}
        <SwapGate x={650} topY={90} botY={155} delay={1.6} animated={animated} />

        {/* U */}
        <GateBox x={680} y={192} w={58} h={58} letter="U" delay={1.7} animated={animated} />

        {/* CNOT ⊕ at x=760 */}
        <XorGate x={760} y={90} delay={1.75} animated={animated} />

        {/* M — last gate */}
        <TallGateBox x={790} y={62} w={68} h={123} letter="M" delay={1.85} animated={animated} />

        {/* ─── Pulse animation on wire 1 ─── */}
        {animated && (
          <rect
            x="-30"
            y="85"
            width="30"
            height="10"
            rx="5"
            fill="#00c4b4"
            opacity="0.8"
            style={{
              animation: "wirePulseX 3s linear 2.5s infinite",
            }}
          />
        )}
      </svg>

      <style>{`
        @keyframes wirePulseX {
          0%   { transform: translateX(0px);   opacity: 0.8; }
          90%  { transform: translateX(960px);  opacity: 0.8; }
          100% { transform: translateX(960px);  opacity: 0; }
        }
      `}</style>
    </div>
  );
}

/* ─── Helper gate sub-components ─── */
type GateProps = {
  x: number;
  y: number;
  w: number;
  h: number;
  letter: string;
  delay: number;
  animated: boolean;
};

function GateBox({ x, y, w, h, letter, delay, animated }: GateProps) {
  return (
    <g
      style={{
        opacity: animated ? 1 : 0,
        transform: animated ? "scale(1)" : "scale(0.8)",
        transformOrigin: `${x + w / 2}px ${y + h / 2}px`,
        transition: `opacity 0.4s ease ${delay}s, transform 0.4s ease ${delay}s`,
      }}
    >
      <rect x={x} y={y} width={w} height={h} fill="#2a1958" stroke="white" strokeWidth="2.5" />
      <text
        x={x + w / 2}
        y={y + h / 2 + 1}
        textAnchor="middle"
        dominantBaseline="middle"
        fontSize="24"
        fontWeight="700"
        fill="white"
        fontFamily="Space Grotesk, sans-serif"
      >
        {letter}
      </text>
    </g>
  );
}

function TallGateBox({
  x,
  y,
  w,
  h,
  letter,
  delay,
  animated,
}: GateProps) {
  return (
    <g
      style={{
        opacity: animated ? 1 : 0,
        transform: animated ? "scale(1)" : "scale(0.8)",
        transformOrigin: `${x + w / 2}px ${y + h / 2}px`,
        transition: `opacity 0.4s ease ${delay}s, transform 0.4s ease ${delay}s`,
      }}
    >
      <rect
        x={x}
        y={y}
        width={w}
        height={h}
        fill="#3b2472"
        stroke="white"
        strokeWidth="2.5"
      />
      <text
        x={x + w / 2}
        y={y + h / 2 + 1}
        textAnchor="middle"
        dominantBaseline="middle"
        fontSize="28"
        fontWeight="700"
        fill="white"
        fontFamily="Space Grotesk, sans-serif"
      >
        {letter}
      </text>
    </g>
  );
}

function CNOTGate({
  x,
  topY,
  botY,
  delay,
  animated,
}: {
  x: number;
  topY: number;
  botY: number;
  delay: number;
  animated: boolean;
}) {
  return (
    <g
      style={{
        opacity: animated ? 1 : 0,
        transition: `opacity 0.5s ease ${delay}s`,
      }}
    >
      <line x1={x} y1={topY} x2={x} y2={botY} stroke="white" strokeWidth="2" />
      <circle cx={x} cy={topY} r="5" fill="white" />
      <circle cx={x} cy={botY} r="12" fill="#2a1958" stroke="white" strokeWidth="2" />
      <line x1={x - 12} y1={botY} x2={x + 12} y2={botY} stroke="white" strokeWidth="1.5" />
      <line x1={x} y1={botY - 12} x2={x} y2={botY + 12} stroke="white" strokeWidth="1.5" />
    </g>
  );
}

function MeasGate({
  x,
  y,
  delay,
  animated,
}: {
  x: number;
  y: number;
  delay: number;
  animated: boolean;
}) {
  return (
    <g
      style={{
        opacity: animated ? 1 : 0,
        transition: `opacity 0.4s ease ${delay}s`,
      }}
    >
      <rect x={x} y={y} width={58} height={58} fill="#2a1958" stroke="white" strokeWidth="2.5" />
      {/* Meter arc */}
      <path
        d={`M ${x + 10} ${y + 42} Q ${x + 29} ${y + 16} ${x + 48} ${y + 42}`}
        stroke="white"
        strokeWidth="2"
        fill="none"
      />
      {/* Meter needle */}
      <line
        x1={x + 29}
        y1={y + 42}
        x2={x + 44}
        y2={y + 22}
        stroke="white"
        strokeWidth="2"
      />
    </g>
  );
}

function StateLabel({
  x,
  y,
  delay,
  animated,
}: {
  x: number;
  y: number;
  delay: number;
  animated: boolean;
}) {
  return (
    <text
      x={x}
      y={y}
      textAnchor="middle"
      dominantBaseline="middle"
      fontSize="20"
      fill="#00c4b4"
      fontFamily="JetBrains Mono, monospace"
      fontWeight="500"
      style={{
        opacity: animated ? 1 : 0,
        transition: `opacity 0.5s ease ${delay}s`,
      }}
    >
      |0⟩
    </text>
  );
}

function ControlLine({
  x,
  topY,
  botY,
  delay,
  animated,
}: {
  x: number;
  topY: number;
  botY: number;
  delay: number;
  animated: boolean;
}) {
  return (
    <g
      style={{
        opacity: animated ? 1 : 0,
        transition: `opacity 0.5s ease ${delay}s`,
      }}
    >
      <line x1={x} y1={topY} x2={x} y2={botY} stroke="white" strokeWidth="2" strokeDasharray="4 3" />
      <circle cx={x} cy={topY} r="4" fill="white" />
      <circle cx={x} cy={botY} r="4" fill="white" />
    </g>
  );
}

function SwapGate({
  x,
  topY,
  botY,
  delay,
  animated,
}: {
  x: number;
  topY: number;
  botY: number;
  delay: number;
  animated: boolean;
}) {
  const sz = 8;
  return (
    <g
      style={{
        opacity: animated ? 1 : 0,
        transition: `opacity 0.5s ease ${delay}s`,
      }}
    >
      <line x1={x} y1={topY} x2={x} y2={botY} stroke="white" strokeWidth="2" />
      {/* × top */}
      <line x1={x - sz} y1={topY - sz} x2={x + sz} y2={topY + sz} stroke="white" strokeWidth="2.5" />
      <line x1={x + sz} y1={topY - sz} x2={x - sz} y2={topY + sz} stroke="white" strokeWidth="2.5" />
      {/* × bottom */}
      <line x1={x - sz} y1={botY - sz} x2={x + sz} y2={botY + sz} stroke="white" strokeWidth="2.5" />
      <line x1={x + sz} y1={botY - sz} x2={x - sz} y2={botY + sz} stroke="white" strokeWidth="2.5" />
    </g>
  );
}

function XorGate({
  x,
  y,
  delay,
  animated,
}: {
  x: number;
  y: number;
  delay: number;
  animated: boolean;
}) {
  return (
    <g
      style={{
        opacity: animated ? 1 : 0,
        transition: `opacity 0.5s ease ${delay}s`,
      }}
    >
      <circle cx={x} cy={y} r="14" fill="#2a1958" stroke="white" strokeWidth="2.5" />
      <line x1={x - 14} y1={y} x2={x + 14} y2={y} stroke="white" strokeWidth="2" />
      <line x1={x} y1={y - 14} x2={x} y2={y + 14} stroke="white" strokeWidth="2" />
    </g>
  );
}

function FloatingEquations() {
  const equations = [
    { text: "H|0⟩ = |+⟩", x: "8%", y: "20%", rot: "-12deg", scale: 1.1 },
    { text: "CNOT", x: "85%", y: "15%", rot: "8deg", scale: 0.9 },
    { text: "iℏ∂ψ/∂t = Ĥψ", x: "75%", y: "70%", rot: "-6deg", scale: 1.0 },
    { text: "⟨ψ|ψ⟩ = 1", x: "5%", y: "65%", rot: "10deg", scale: 1.2 },
    { text: "|Φ⁺⟩", x: "50%", y: "85%", rot: "0deg", scale: 0.8 },
    { text: "U†U = I", x: "92%", y: "45%", rot: "-4deg", scale: 0.95 },
  ];

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {equations.map((eq, i) => (
        <div
          key={i}
          className="absolute quantum-float font-mono text-[#a78bfa] select-none"
          style={{
            left: eq.x,
            top: eq.y,
            transform: `rotate(${eq.rot}) scale(${eq.scale})`,
            fontSize: "clamp(0.7rem, 1.5vw, 1.1rem)",
            animationDelay: `${i * 1.3}s`,
            fontFamily: "'JetBrains Mono', monospace",
          }}
        >
          {eq.text}
        </div>
      ))}
    </div>
  );
}
