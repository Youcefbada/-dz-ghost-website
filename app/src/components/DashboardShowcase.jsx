import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { content } from '../data/content';
import dashboardImg from '../assets/dashboard-shot.png';

const DashboardShowcase = ({ lang }) => {
    const t = content[lang].dashboardShowcase;
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    const rotateX = useTransform(scrollYProgress, [0, 0.5], [15, 0]);
    const scale = useTransform(scrollYProgress, [0, 0.5], [0.9, 1]);
    const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

    return (
        <section ref={ref} className="py-24 relative perspective-1000">
            <div className="container max-w-[85%] mx-auto px-6 text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-4xl md:text-6xl font-bold text-white mb-16 tracking-tight"
                >
                    {t.title}
                </motion.h2>

                <motion.div
                    style={{ rotateX, scale, opacity }}
                    className="relative mx-auto max-w-5xl"
                >
                    {/* Massive Purple Glow */}
                    <div className="absolute inset-0 bg-primary/30 blur-[100px] rounded-full -z-10 translate-y-20"></div>

                    {/* Browser Frame */}
                    <div className="rounded-xl bg-bg-dark border border-white/10 shadow-2xl overflow-hidden relative group">
                        {/* Browser Controls */}
                        <div className="h-8 bg-black/50 border-b border-white/5 flex items-center px-4 gap-2">
                            <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                            <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                            <div className="ml-4 flex-1 h-4 bg-white/5 rounded-full max-w-xs"></div>
                        </div>

                        {/* Dashboard Image */}
                        <div className="relative aspect-video bg-black">
                            <img
                                src={dashboardImg}
                                alt="DZ-Ghost Dashboard"
                                className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500"
                            />

                            {/* Reflection Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent pointer-events-none"></div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default DashboardShowcase;
