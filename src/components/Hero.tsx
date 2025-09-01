import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';
import { useCallback } from 'react';
import { Engine } from 'tsparticles-engine';

export default function Hero() {
    const particlesInit = useCallback(async (engine: Engine) => {
        await loadSlim(engine);
    }, []);

    return (
        <section
            id="home"
            className="min-h-[100vh] flex items-center relative overflow-hidden"
        >
            <Particles
                id="tsparticles"
                init={particlesInit}
                className="absolute inset-0 z-0"
                options={{
                    background: {
                        color: {
                            value: "transparent",
                        },
                    },
                    fpsLimit: 60,
                    particles: {
                        color: {
                            value: "#3b82f6",
                        },
                        links: {
                            color: "#3b82f6",
                            distance: 150,
                            enable: true,
                            opacity: 0.3,
                            width: 1,
                        },
                        move: {
                            direction: "none",
                            enable: true,
                            outModes: {
                                default: "bounce",
                            },
                            random: true,
                            speed: 1,
                            straight: false,
                        },
                        number: {
                            density: {
                                enable: true,
                                area: 800,
                            },
                            value: 50,
                        },
                        opacity: {
                            value: 0.3,
                        },
                        shape: {
                            type: "circle",
                        },
                        size: {
                            value: { min: 1, max: 3 },
                        },
                    },
                    detectRetina: true,
                }}
            />

            <div className="container mx-auto px-4 relative z-10 pt-16">
                <div className="max-w-3xl backdrop-blur-sm bg-white/70 dark:bg-gray-900/70 p-8 rounded-2xl shadow-xl">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">
                        Hi, I'm <span className="text-blue-600">Khoubaib Benzayed</span>
                        <br />
                        <span className="text-3xl md:text-4xl font-normal mt-2 block">
                            Full Stack Developer
                        </span>
                    </h1>

                    <p className="text-xl mb-8 text-gray-700 dark:text-gray-300">
                        I specialize in building <span className="font-mono bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">fast</span>,
                        <span className="font-mono bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">scalable</span>, and
                        <span className="font-mono bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">reliable </span> solutions.<br />
                        I bring over 3 years of experience working in startup environments.
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <a
                            href="#projects"
                            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors shadow-lg hover:shadow-blue-500/20"
                        >
                            View Projects
                        </a>
                        <a
                            href="#contact"
                            className="border border-gray-300 dark:border-gray-700 hover:border-blue-600 px-6 py-3 rounded-lg font-medium transition-colors"
                        >
                            Contact Me
                        </a>
                        <a
                            href="https://drive.google.com/uc?export=download&id=1rrLiFC1PaWbj-_yIrKQq8HohToDll9pj"
                            download
                            className="bg-gray-800 hover:bg-gray-900 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                        >
                            Download CV
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}