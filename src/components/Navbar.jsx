import { motion } from 'framer-motion';
import { navVariants } from '../animations/variants';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import cv_12318201 from '../assets/cv_12318201.pdf';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);

        const sections = ['home', 'about', 'skills', 'projects', 'certifications', 'education', 'contact'];
        const observerOptions = {
            root: null,
            rootMargin: '-80px 0px -50% 0px',
            threshold: 0
        };

        const observerCallback = (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);

        sections.forEach(section => {
            const element = document.getElementById(section);
            if (element) {
                observer.observe(element);
            }
        });

        return () => {
            window.removeEventListener('scroll', handleScroll);
            observer.disconnect();
        };
    }, []);

    const handleNavClick = (e, href) => {
        e.preventDefault();
        setIsOpen(false);
        const targetId = href.replace('#', '');
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            // Full screen sections (home, about) should snap exactly to the top (0 offset)
            // so their min-h-screen layout fits precisely under the navbar.
            const headerOffset = (targetId === 'home' || targetId === 'about') ? 0 : 80;
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.scrollY - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
            setActiveSection(targetId);
            const event = new CustomEvent('nav-click', { detail: targetId });
            window.dispatchEvent(event);
        }
    };

    const links = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Projects', href: '#projects' },
        { name: 'Certifications', href: '#certifications' },
        { name: 'Education', href: '#education' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <motion.nav
            variants={navVariants}
            initial="hidden"
            animate="visible"
            className={`fixed w-full z-50 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${scrolled ? 'bg-black/70 backdrop-blur-2xl py-4 shadow-[0_1px_0_rgba(255,255,255,0.05)]' : 'bg-transparent py-6'}`}
        >
            <div className="container mx-auto px-6 max-w-6xl flex justify-between items-center">
                <a
                    href="#"
                    onClick={(e) => handleNavClick(e, '#home')}
                    className="text-xl font-bold tracking-tighter text-white hover:opacity-70 transition-opacity"
                >
                    M.
                </a>

                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-8 items-center">
                    {links.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={(e) => handleNavClick(e, link.href)}
                            className={`text-xs font-semibold tracking-wide uppercase transition-colors duration-500 ${
                                activeSection === link.href.substring(1) ? 'text-white' : 'text-gray-500 hover:text-gray-300'
                            }`}
                        >
                            {link.name}
                        </a>
                    ))}
                    <div className="h-4 w-px bg-white/10 mx-2"></div>
                    <a
                        href={cv_12318201}
                        download="Narasingu_Manudeep_CV.pdf"
                        className="px-5 py-2 text-xs font-bold text-black bg-white rounded-full hover:scale-105 active:scale-95 hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] transition-all duration-300"
                    >
                        Download CV
                    </a>
                </div>

                {/* Mobile Toggle */}
                <div className="md:hidden">
                    <button onClick={() => setIsOpen(!isOpen)} className="text-gray-400 hover:text-white transition-colors">
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -10, filter: "blur(5px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className="md:hidden bg-black/95 backdrop-blur-3xl border-t border-white/5 mt-4 absolute w-full"
                >
                    <div className="px-6 py-8 flex flex-col space-y-6">
                        {links.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={(e) => handleNavClick(e, link.href)}
                                className={`text-lg font-medium tracking-tight transition-colors ${
                                    activeSection === link.href.substring(1) ? 'text-white' : 'text-gray-500 hover:text-white'
                                }`}
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>
                </motion.div>
            )}
        </motion.nav>
    );
};

export default Navbar;
