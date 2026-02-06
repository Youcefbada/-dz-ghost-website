import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { content } from '../data/content';
import { ChevronDown, Plus, Minus } from 'lucide-react';

const FAQItem = ({ question, answer, isOpen, onClick }) => (
    <div className="border-b border-white/10 last:border-0">
        <button
            onClick={onClick}
            className="w-full py-6 flex items-center justify-between text-left group"
        >
            <span className="text-lg font-medium text-white group-hover:text-primary transition-colors pr-8">
                {question}
            </span>
            <div className={`w-8 h-8 rounded-full bg-white/5 flex items-center justify-center transition-all ${isOpen ? 'bg-primary text-white' : 'text-gray-400'}`}>
                {isOpen ? <Minus size={18} /> : <Plus size={18} />}
            </div>
        </button>

        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                >
                    <p className="text-gray-400 pb-6 leading-relaxed">{answer}</p>
                </motion.div>
            )}
        </AnimatePresence>
    </div>
);

const FAQSection = ({ lang }) => {
    const t = content[lang].faq;
    const [openIndex, setOpenIndex] = useState(0);

    return (
        <section className="py-24 relative">
            <div className="container max-w-[80%] mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-16 items-start">
                    {/* Left - Title */}
                    <div className="sticky top-24">
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">{t.title}</h2>
                        <p className="text-gray-400 text-lg">
                            Tout ce que vous devez savoir avant de commencer. Des questions ? Contactez notre support.
                        </p>
                        <div className="mt-8">
                            <a href="#" className="inline-flex items-center gap-2 text-primary hover:underline">
                                Contacter le Support
                                <ChevronDown size={16} className="-rotate-90" />
                            </a>
                        </div>
                    </div>

                    {/* Right - Questions */}
                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                        {t.items.map((item, i) => (
                            <FAQItem
                                key={i}
                                question={item.q}
                                answer={item.a}
                                isOpen={openIndex === i}
                                onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQSection;
