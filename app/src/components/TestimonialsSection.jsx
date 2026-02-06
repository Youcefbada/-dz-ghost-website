import React from 'react';
import { motion } from 'framer-motion';
import { content } from '../data/content';
import { Quote, Star } from 'lucide-react';

const TestimonialsSection = ({ lang }) => {
    const t = content[lang].testimonials;

    return (
        <section className="py-24 bg-bg-deep relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>

            <div className="container max-w-[80%] mx-auto px-6">
                <h2 className="text-3xl md:text-5xl font-bold text-center text-white mb-16">{t.title}</h2>

                <div className="grid md:grid-cols-3 gap-8">
                    {t.items.map((testimonial, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.15 }}
                            className="relative bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl hover:border-primary/30 transition-all group"
                        >
                            {/* Quote Icon */}
                            <Quote size={40} className="absolute top-6 right-6 text-primary/20 group-hover:text-primary/40 transition-colors" />

                            {/* Stars */}
                            <div className="flex gap-1 mb-6">
                                {[...Array(5)].map((_, j) => (
                                    <Star key={j} size={16} className="text-yellow-500 fill-yellow-500" />
                                ))}
                            </div>

                            {/* Quote Text */}
                            <p className="text-gray-300 leading-relaxed mb-8 italic">"{testimonial.quote}"</p>

                            {/* Author */}
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-indigo-500 flex items-center justify-center text-white font-bold">
                                    {testimonial.name.charAt(0)}
                                </div>
                                <div>
                                    <div className="font-bold text-white">{testimonial.name}</div>
                                    <div className="text-sm text-gray-400">{testimonial.role}</div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;
