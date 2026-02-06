import React, { useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children, lang, setLang }) => {
    useEffect(() => {
        document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
        document.documentElement.lang = lang;

        // Update font based on language
        if (lang === 'ar') {
            document.body.style.fontFamily = '"Tajawal", system-ui, sans-serif';
        } else {
            document.body.style.fontFamily = '"Inter", system-ui, sans-serif';
        }
    }, [lang]);

    return (
        <div className="min-h-screen bg-bg-dark text-white overflow-x-hidden flex flex-col">
            <Navbar lang={lang} setLang={setLang} />
            <main className="flex-grow pt-20">
                {children}
            </main>
            <Footer lang={lang} />
        </div>
    );
};

export default Layout;
