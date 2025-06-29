import { loadSlim } from "tsparticles-slim";
import { useCallback } from "react";
import Particles from "react-tsparticles";

const ParticlesBackground = ({ children }) => {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);
// #F59E0B
// #0C0C0C
  return (
    <div className="relative min-h-screen">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: { enable: true, zIndex: -1 },
          background: { color: { value: "#0C0C0C" } },
          particles: {
            number: { value: 50, density: { enable: true, area: 800 } },
            color: { value: "#6366F1" },
            shape: { type: "circle" },
            opacity: { value: 0.5 },
            size: { value: { min: 1, max: 5 } },
            links: {
              enable: true,
              distance: 150,
              color: "#6366F1",
              opacity: 0.4,
              width: 1,
            },
            move: {
              enable: true,
              speed: 1,
              outModes: { default: "bounce" },
            },
          },
          interactivity: {
            events: {
              onHover: { enable: true, mode: "repulse" },
              onClick: { enable: true, mode: "push" },
            },
            modes: {
              repulse: { distance: 100 },
              push: { quantity: 4 },
            },
          },
          detectRetina: true,
        }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default ParticlesBackground;
