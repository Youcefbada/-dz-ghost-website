import React from 'react';
import { content } from '../data/content';
import { motion } from 'framer-motion';
import { Check, Star } from 'lucide-react';

const PricingCard = ({ plan, highlight, special }) => (
    <div className={`relative p-8 rounded-3xl border flex flex-col h-full transition-all duration-300 ${highlight
            ? 'bg-primary/10 border-primary shadow-[0_0_60px_rgba(176,66,255,0.3)] scale-105 z-10'
            : special
                ? 'bg-yellow-500/5 border-yellow-500/30'
                : 'glass-card border-white/10'
        }`}>
        {highlight && (
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white px-6 py-1 rounded-full text-sm font-bold uppercase tracking-widest shadow-[0_0_20px_#B042FF]">
                {plan.tag}
            </div>
        )}

        <h3 className={`text-xl font-bold mb-2 ${highlight ? 'text-primary' : special ? 'text-yellow-500' : 'text-white'}`}>
            {plan.name}
        </h3>

        <div className="mb-8">
            <span className="text-4xl font-bold text-white">{plan.price}</span>
            <span className="text-gray-500 text-sm ml-2">{plan.period}</span>
        </div>

        <ul className="space-y-4 mb-8 flex-grow">
            {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-400 text-sm">
                    <Check size={16} className={highlight ? 'text-primary' : special ? 'text-yellow-500' : 'text-gray-500'} />
                    {feature}
                </li>
            ))}
        </ul>

        <button className={`w-full py-4 rounded-xl font-bold transition-all ${highlight
                ? 'bg-primary text-white hover:bg-emerald-500 hover:shadow-[0_0_30px_#10b981]'
                : special
                    ? 'bg-yellow-500/20 text-yellow-500 border border-yellow-500/50 hover:bg-yellow-500 hover:text-black'
                    : 'bg-white/5 text-white hover:bg-white/10'
            }`}>
            {plan.cta}
        </button>
    </div>
)

const PricingSection = ({ lang }) => {
    const t = content[lang].pricing;

    return (
        <section className="py-24 relative overflow-hidden">
            <div className="container max-w-[85%] mx-auto px-6">
                <h2 className="text-3xl md:text-5xl font-bold text-center mb-20 text-white">{t.title}</h2>

                <div className="grid md:grid-cols-3 gap-8 items-center max-w-6xl mx-auto">
                    {t.plans.map((plan, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                        >
                            <PricingCard plan={plan} highlight={plan.highlight} special={plan.special} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PricingSection;
