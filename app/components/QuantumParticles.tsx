"use client";

import { useCallback, useEffect, useState } from "react";
import { Particles, ParticlesProvider } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { Container } from "@tsparticles/engine";

export default function QuantumParticles() {
  const [engineLoaded, setEngineLoaded] = useState(false);

  const onLoaded = useCallback(async (container?: Container) => {
    void container;
  }, []);

  useEffect(() => {
    setEngineLoaded(true);
  }, []);

  if (!engineLoaded) return null;

  return (
    <ParticlesProvider
      init={async (engine) => {
        await loadSlim(engine);
      }}
    >
      <Particles
        id="quantum-particles"
        particlesLoaded={onLoaded}
        className="absolute inset-0 pointer-events-none z-0"
        options={{
          background: { color: { value: "transparent" } },
          fpsLimit: 60,
          interactivity: {
            events: {
              onHover: {
                enable: true,
                mode: "grab",
              },
            },
            modes: {
              grab: {
                distance: 140,
                links: { opacity: 0.5 },
              },
            },
          },
          particles: {
            color: { value: ["#00c4b4", "#a78bfa", "#ffffff"] },
            links: {
              color: "#00c4b4",
              distance: 120,
              enable: true,
              opacity: 0.12,
              width: 1,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: { default: "bounce" },
              random: true,
              speed: 0.4,
              straight: false,
            },
            number: {
              density: { enable: true },
              value: 60,
            },
            opacity: {
              value: { min: 0.1, max: 0.4 },
              animation: {
                enable: true,
                speed: 0.5,
                sync: false,
              },
            },
            shape: { type: "circle" },
            size: {
              value: { min: 1, max: 3 },
            },
          },
          detectRetina: true,
        }}
      />
    </ParticlesProvider>
  );
}
