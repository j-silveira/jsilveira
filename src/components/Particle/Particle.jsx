import { useCallback, useEffect, useState } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";

// Configuração inicial
const initialOptions = {
    background: { color: { value: "#121212" } },
    fullScreen: { enable: true, zIndex: -1 },
    fpsLimit: 120,
    interactivity: {
        detect_on: "canvas",
        events: {
            onClick: { enable: true, mode: "push" },
            resize: true,
        },
        modes: {
            push: { quantity: 4 },
            repulse: { distance: 200, duration: 0.4 },
        },
    },
    particles: {
        color: { value: "#00bfb2" },
        links: { color: "#00bfb2", distance: 150, enable: true, opacity: 0.4, width: 1 },
        collisions: { enable: true },
        move: { directions: "top", enable: true, outModes: { default: "bounce" }, random: true, speed: 1, straight: true },
        number: { density: { enable: true, area: 900 }, value: 100 },
        opacity: { value: 0.5 },
        shape: { type: "circle" },
        size: { value: { min: 1, max: 3 } },
    },
    detectRetina: true,
};

// Nova configuração com partículas brancas
const alternateOptions = {
    background: { color: { value: "#000000" } },
    fullScreen: { enable: true, zIndex: -1 },
    fpsLimit: 120,
    interactivity: {
        detect_on: "canvas",
        events: {
            onClick: { enable: true, mode: "push" },
            resize: true,
        },
        modes: {
            push: { quantity: 6 },
            repulse: { distance: 150, duration: 0.5 },
        },
    },
    particles: {
        color: { value: "#090c43" }, // Partículas brancas
        links: { color: "#090c43", distance: 100, enable: true, opacity: 0.6, width: 1 },
        collisions: { enable: true },
        move: { directions: "bottom", enable: true, outModes: { default: "bounce" }, random: true, speed: 2, straight: false },
        number: { density: { enable: true, area: 800 }, value: 80 },
        opacity: { value: 0.7 },
        shape: { type: "circle" }, // Pode mudar para "square" se preferir
        size: { value: { min: 2, max: 5 } },
    },
    detectRetina: true,
};

export const Particle = () => {
    const [options, setOptions] = useState(initialOptions);

    useEffect(() => {
        const isInitialLoad = Math.random() < 0.5; // 50% de chance de usar a configuração alternativa
        setOptions(isInitialLoad ? initialOptions : alternateOptions);
    }, []); // Executa apenas na montagem do componente

    const particlesInit = useCallback(async (engine) => {
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async (container) => {}, []);

    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={options}
        />
    );
};

export default Particle;
