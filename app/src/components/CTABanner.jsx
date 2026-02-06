import React from 'react';
import { motion } from 'framer-motion';
import { content } from '../data/content';
import { ArrowRight, Play } from 'lucide-react';

const CTABanner = ({ lang }) => {
    const t = content[lang].ctaBanner;

    return (
        <section className="py-24 relative overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-primary/20"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/30 rounded-full blur-[150px]"></div>

            {/* Grid Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(176,66,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(176,66,255,0.05)_1px,transparent_1px)] bg-[size:60px_60px]"></div>

            <div className="container max-w-[80%] mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">{t.title}</h2>
                    <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">{t.subtitle}</p>

                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                        <a
                            href="#pricing"
                            className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-primary text-white font-bold rounded-xl hover:bg-primary/90 hover:shadow-[0_0_40px_#B042FF] transition-all text-lg"
                        >
                            {t.cta}
                            <ArrowRight size={20} />
                        </a>
                        <a
                            href="#demo"
                            className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-bold rounded-xl hover:bg-white/20 transition-all text-lg"
                        >
                            <Play size={20} className="fill-current" />
                            {t.secondary}
                        </a>
                    </div>

                    {/* Trust Badges */}
                    <div className="mt-16 flex flex-wrap items-center justify-center gap-8 text-gray-400 text-sm">
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                            Installation en 5 minutes
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                            Support WhatsApp 24/7
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                            Garantie Satisfait ou Remboursé
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default CTABanner;
