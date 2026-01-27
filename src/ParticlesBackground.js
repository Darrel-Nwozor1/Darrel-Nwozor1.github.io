import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { useCallback } from "react";

export default function ParticlesBackground({ variant = "home" }) {
  const init = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const configs = {
    home: {
      particles: { number: { value: 60 }, color: { value: "#22d3ee" } },
    },
    projects: {
      particles: { number: { value: 40 }, color: { value: "#38bdf8" } },
    },
    tech: {
      particles: { number: { value: 50 }, color: { value: "#67e8f9" } },
    },
    about: {
      particles: { number: { value: 30 }, color: { value: "#5eead4" } },
    },
    contact: {
      particles: { number: { value: 25 }, color: { value: "#22d3ee" } },
    },
  };

  return (
    <Particles
      init={init}
      className="absolute inset-0 -z-10"
      options={{
        fullScreen: false,
        background: { color: "transparent" },
        particles: {
          ...configs[variant].particles,
          opacity: { value: 0.4 },
          size: { value: 2 },
          move: { enable: true, speed: 0.6 },
          links: { enable: true, color: "#22d3ee", opacity: 0.15 },
        },
      }}
    />
  );
}
