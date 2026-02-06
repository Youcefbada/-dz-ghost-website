import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';
import { motion } from 'framer-motion';
import GhostCore from './GhostCore';
import { content } from '../data/content';

const Hero = ({ lang }) => {
    const t = content[lang].hero;

    return (
        <section className="relative min-h-screen flex items-center overflow-hidden bg-bg-dark">
            {/* Background Gradients */}
            <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-primary/10 to-transparent pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/5 blur-[150px] rounded-full pointer-events-none"></div>

            <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center h-full relative z-10 pt-20">

                {/* Text Content */}
                <div className="order-2 lg:order-1 flex flex-col items-center lg:items-start text-center lg:text-start">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-5xl md:text-7xl font-bold font-display leading-tight mb-6">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
                                {t.headline.split('.')[0]}.
                            </span>
                            <br />
                            <span className="text-primary text-glow">
                                {t.headline.split('. ')[1]}
                            </span>
                        </h1>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-gray-400 text-lg md:text-xl mb-8 max-w-lg border-l-2 border-primary/30 pl-4"
                    >
                        {t.subheadline}
                    </motion.p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <motion.button
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="group relative px-8 py-4 bg-primary text-white font-bold rounded-lg shadow-[0_0_20px_rgba(176,66,255,0.4)] hover:shadow-[0_0_40px_rgba(176,66,255,0.6)] transition-all overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                            <span className="relative uppercase tracking-widest">{t.cta}</span>
                        </motion.button>
                    </div>

                    {/* Floating Notifications */}
                    <div className="mt-12 flex flex-col gap-3 w-full max-w-xs relative ">
                        {t.notifications.map((note, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 1 + (i * 0.5), duration: 0.5 }}
                                className="glass-card p-3 rounded-lg flex items-center gap-3 border-l-4 border-green-500"
                            >
                                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                                <span className="text-sm font-mono text-green-400">{note}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* 3D Scene */}
                <div className="order-1 lg:order-2 h-[50vh] lg:h-[80vh] w-full relative">
                    <Canvas camera={{ position: [0, 0, 3], fov: 75 }} gl={{ antialias: false }} dpr={[1, 1.5]}>
                        <Suspense fallback={null}>
                            <GhostCore />
                            <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} enablePan={false} />
                        </Suspense>
                    </Canvas>
                    {/* Decorative elements behind 3D */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-primary/10 blur-[100px] rounded-full -z-10"></div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
