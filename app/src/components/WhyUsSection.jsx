import React from 'react';
import { motion } from 'framer-motion';
import { content } from '../data/content';
import { Flag, Key, Brain, Headphones, RefreshCw, Users } from 'lucide-react';

const iconMap = {
    flag: Flag,
    key: Key,
    brain: Brain,
    headphones: Headphones,
    refresh: RefreshCw,
    users: Users
};

const WhyUsSection = ({ lang }) => {
    const t = content[lang].whyUs;

    return (
        <section className="py-24 bg-gradient-to-b from-bg-dark to-bg-deep relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-[100px]"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500 rounded-full blur-[120px]"></div>
            </div>

            <div className="container max-w-[80%] mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">{t.title}</h2>
                    <p className="text-xl text-gray-400">{t.subtitle}</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {t.items.map((item, i) => {
                        const Icon = iconMap[item.icon] || Flag;
                        return (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl hover:border-primary/50 hover:bg-white/10 transition-all duration-300 group"
                            >
                                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 group-hover:shadow-[0_0_30px_#B042FF40] transition-all">
                                    <Icon size={28} className="text-primary" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                                <p className="text-gray-400 leading-relaxed">{item.desc}</p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default WhyUsSection;
