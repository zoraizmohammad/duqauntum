"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

type Event = {
  time: string;
  title: string;
  desc: string;
  type: "gate" | "measure" | "cnot" | "swap";
  color: string;
};

const day1: Event[] = [
  { time: "9:00 AM", title: "Check-In & Welcome", desc: "Registration opens, swag pickup, meet your team", type: "gate", color: "#00c4b4" },
  { time: "10:00 AM", title: "Opening Ceremony", desc: "Keynote: The State of Quantum Computing in 2026", type: "measure", color: "#a78bfa" },
  { time: "11:00 AM", title: "Hacking Begins", desc: "Superposition: all possibilities open. |ψ⟩ = ∑α_i|i⟩", type: "cnot", color: "#00c4b4" },
  { time: "12:30 PM", title: "Lunch + Mentor Intro", desc: "Industry mentors from IBM Quantum, IonQ, Microsoft Azure Quantum", type: "gate", color: "#b8a9d9" },
  { time: "2:00 PM", title: "Workshop I — Qiskit Crash Course", desc: "Building your first quantum circuit in under 30 minutes", type: "gate", color: "#a78bfa" },
  { time: "4:00 PM", title: "Workshop II — Quantum ML with PennyLane", desc: "Variational circuits and quantum kernels hands-on", type: "gate", color: "#a78bfa" },
  { time: "6:30 PM", title: "Dinner", desc: "Refuel and hack on — the wavefunction doesn't collapse until tomorrow", type: "gate", color: "#b8a9d9" },
  { time: "8:00 PM", title: "Midpoint Check-in", desc: "Optional mentor office hours; team progress snapshots", type: "measure", color: "#00c4b4" },
  { time: "12:00 AM", title: "Midnight Snacks", desc: "Late-night quantum fuel to keep coherence up", type: "gate", color: "#b8a9d9" },
];

const day2: Event[] = [
  { time: "8:00 AM", title: "Breakfast", desc: "Rise and shine — decoherence time is running down", type: "gate", color: "#b8a9d9" },
  { time: "9:00 AM", title: "Workshop III — Quantum Error Correction", desc: "Why noise is your enemy and how to fight it", type: "gate", color: "#a78bfa" },
  { time: "11:00 AM", title: "Hacking Deadline", desc: "Final submission on Devpost. Wave function collapses here.", type: "measure", color: "#f0abfc" },
  { time: "12:00 PM", title: "Lunch + Judging Begins", desc: "Judges review submissions; teams prepare demos", type: "cnot", color: "#00c4b4" },
  { time: "2:00 PM", title: "Project Demos", desc: "Top projects demo to judges and attendees", type: "swap", color: "#a78bfa" },
  { time: "4:00 PM", title: "Closing Ceremony & Awards", desc: "Winners announced, prizes awarded, quantum futures discussed", type: "measure", color: "#00c4b4" },
];

export default function Schedule() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [activeDay, setActiveDay] = useState<1 | 2>(1);

  const events = activeDay === 1 ? day1 : day2;

  return (
    <section
      id="schedule"
      ref={ref}
      className="relative py-28"
      style={{ background: "linear-gradient(180deg, #2a1958 0%, #1e1040 100%)" }}
    >
      {/* Bell state watermark */}
      <div
        className="absolute top-12 left-8 text-[#00c4b4]/6 font-mono text-3xl select-none pointer-events-none quantum-float hidden lg:block"
        style={{ fontFamily: "'JetBrains Mono', monospace" }}
      >
        |Φ⁺⟩ = (|00⟩+|11⟩)/√2
      </div>

      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-8 h-[1px] bg-[#00c4b4]" />
            <span
              className="text-[#00c4b4] text-xs font-mono tracking-[0.3em] uppercase"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              Oct. 24–25, 2026
            </span>
            <span className="w-8 h-[1px] bg-[#00c4b4]" />
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white">
            Circuit{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00c4b4] to-[#a78bfa]">
              Schedule
            </span>
          </h2>
        </motion.div>

        {/* Day selector — gate style */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex items-center justify-center gap-0 mb-12"
        >
          <div className="w-8 h-[2px] bg-[#3b2472]" />
          <button
            onClick={() => setActiveDay(1)}
            className={`px-6 py-2 border-2 font-mono font-bold text-sm tracking-widest transition-all duration-200 ${
              activeDay === 1
                ? "border-[#00c4b4] bg-[#00c4b4] text-[#2a1958]"
                : "border-[#3b2472] text-[#b8a9d9] hover:border-[#00c4b4]/50"
            }`}
          >
            Day 1
          </button>
          <div className="w-4 h-[2px] bg-[#3b2472]" />
          <div className="w-6 h-6 border-2 border-[#3b2472] rounded-full flex items-center justify-center">
            <div className="w-2 h-2 rounded-full bg-[#3b2472]" />
          </div>
          <div className="w-4 h-[2px] bg-[#3b2472]" />
          <button
            onClick={() => setActiveDay(2)}
            className={`px-6 py-2 border-2 font-mono font-bold text-sm tracking-widest transition-all duration-200 ${
              activeDay === 2
                ? "border-[#a78bfa] bg-[#a78bfa] text-[#2a1958]"
                : "border-[#3b2472] text-[#b8a9d9] hover:border-[#a78bfa]/50"
            }`}
          >
            Day 2
          </button>
          <div className="w-8 h-[2px] bg-[#3b2472]" />
        </motion.div>

        {/* Circuit-wire timeline */}
        <div className="relative">
          {/* Vertical wire */}
          <div
            className="absolute left-[28px] md:left-[72px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#3b2472] via-[#00c4b4]/30 to-[#3b2472]"
          />

          <div className="space-y-2">
            {events.map((ev, i) => (
              <ScheduleEvent key={ev.time} event={ev} index={i} inView={inView} activeDay={activeDay} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ScheduleEvent({
  event,
  index,
  inView,
  activeDay,
}: {
  event: Event;
  index: number;
  inView: boolean;
  activeDay: number;
}) {
  const gateSymbol =
    event.type === "measure"
      ? "⊞"
      : event.type === "cnot"
      ? "⊕"
      : event.type === "swap"
      ? "×"
      : "□";

  return (
    <motion.div
      key={`${activeDay}-${index}`}
      initial={{ opacity: 0, x: -30 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: 0.1 + index * 0.07 }}
      className="relative flex items-start gap-4 md:gap-6 pl-0"
    >
      {/* Gate node on wire */}
      <div className="relative flex-shrink-0 w-14 md:w-36 flex justify-start md:justify-end items-start pt-3">
        <span
          className="hidden md:block text-xs font-mono text-[#b8a9d9] text-right pr-4"
          style={{ fontFamily: "'JetBrains Mono', monospace" }}
        >
          {event.time}
        </span>
        <div
          className="relative z-10 w-8 h-8 border-2 flex items-center justify-center text-xs font-mono flex-shrink-0"
          style={{ borderColor: event.color, color: event.color, background: "#1e1040" }}
        >
          {gateSymbol}
        </div>
      </div>

      {/* Content */}
      <div
        className="flex-1 pb-6 border-l-0 pl-0 group cursor-default"
      >
        <span
          className="md:hidden text-xs font-mono text-[#b8a9d9] block mb-1"
          style={{ fontFamily: "'JetBrains Mono', monospace" }}
        >
          {event.time}
        </span>
        <div
          className="p-4 border transition-all duration-200 hover:border-opacity-60"
          style={{
            borderColor: `${event.color}25`,
            background: `${event.color}08`,
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.borderColor = `${event.color}60`;
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.borderColor = `${event.color}25`;
          }}
        >
          <h4 className="text-white font-semibold text-sm mb-1">{event.title}</h4>
          <p className="text-[#b8a9d9] text-xs leading-relaxed">{event.desc}</p>
        </div>
      </div>
    </motion.div>
  );
}
