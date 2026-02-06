import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { content } from '../data/content';
import { Menu, X } from 'lucide-react';

const Navbar = ({ lang, setLang }) => {
    const t = content[lang].navbar;
    const [isOpen, setIsOpen] = React.useState(false);

    const toggleLang = () => {
        setLang(prev => prev === 'fr' ? 'ar' : 'fr');
    };

    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-bg-dark/80 backdrop-blur-md border-b border-white/5">
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                {/* Logo */}
                <div className="text-2xl font-bold tracking-tighter text-white relative group cursor-pointer">
                    <span className="relative z-10 font-display tracking-widest animate-[glitch_3s_infinite]" data-text={t.logo}>
                        {t.logo}
                    </span>
                    <div className="absolute inset-0 bg-primary/50 blur-lg opacity-20 group-hover:opacity-60 transition-opacity duration-300"></div>
                </div>

                {/* Desktop Actions */}
                <div className="hidden md:flex items-center gap-6">
                    <button
                        onClick={toggleLang}
                        className="text-gray-400 hover:text-white transition-colors font-mono uppercase text-sm border border-white/5 px-3 py-1 rounded hover:border-primary/50"
                    >
                        {t.language}
                    </button>

                    <button className="relative px-6 py-2 bg-transparent text-white font-bold rounded-lg border border-primary/50 shadow-[0_0_15px_rgba(176,66,255,0.2)] hover:shadow-[0_0_25px_rgba(176,66,255,0.4)] hover:bg-primary/5 transition-all group overflow-hidden">
                        <span className="relative z-10 tracking-wide">{t.cta}</span>
                        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </button>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button onClick={() => setIsOpen(!isOpen)} className="text-white hover:text-primary transition-colors">
                        {isOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden absolute top-full left-0 w-full bg-bg-dark border-b border-primary/20 overflow-hidden"
                    >
                        <div className="p-6 flex flex-col gap-4">
                            <button
                                onClick={() => { toggleLang(); setIsOpen(false); }}
                                className="text-gray-300 hover:text-primary transition-colors font-mono uppercase text-sm border border-white/10 px-3 py-3 rounded w-full text-center"
                            >
                                Switch to {lang === 'fr' ? 'Arabic' : 'French'}
                            </button>
                            <button className="bg-primary/10 border border-primary text-primary font-bold py-3 px-6 rounded-lg w-full shadow-[0_0_20px_rgba(176,66,255,0.2)]">
                                {t.cta}
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
