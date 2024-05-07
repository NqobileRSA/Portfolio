import { useCallback, useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
// import { loadAll } from "@/tsparticles/all";
import { loadSlim } from "@tsparticles/slim";

const ParallexBG = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      // await loadAll(engine);
      //await loadFull(engine);
      await loadSlim(engine);
      //await loadBasic(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    // console.log(container);
  };
  const particleOptions = {
    fpsLimit: 60,
    interactivity: {
      detectsOn: "canvas",
      events: {
        onhover: {
          enable: true,
          mode: "bubble",
          parallax: { enable: false, force: 60, smooth: 10 },
        },
        resize: true,
      },
      modes: {
        bubble: {
          distance: 400,
          duration: 2,
          opacity: 0.8,
          size: 40,
          speed: 3,
        },
        grab: { distance: 400, links: { opacity: 1 } },
        push: { quantity: 4 },
        remove: { quantity: 2 },
        repulse: { distance: 200, duration: 0.4 },
      },
    },
    particles: {
      move: {
        distance: 100,
        direction: "none",
        enable: true,
        outMode: "none",
        random: false,
        speed: 6,
        straight: false,
      },
      number: { density: { enable: true, area: 800 }, value: 0 },
      opacity: {
        animation: { enable: true, minimumValue: 0.5, speed: 1, sync: false },
        random: false,
        value: 1,
      },
      shape: {
        type: "char",
      },
      size: {
        animation: { enable: true, minimumValue: 10, speed: 5, sync: false },
        random: false,
        value: 16,
      },
    },
    stroke: { color: "#ffffff", width: 1 },
    retina_detect: true,
  };
  return (
    init && (
      <Particles
        id="tsparticles"
        particlesLoaded={particlesLoaded}
        options={particleOptions}
      />
    )
  );
};

export default ParallexBG;
