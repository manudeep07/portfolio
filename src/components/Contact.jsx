import { useRef, useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { blurFadeIn, staggerContainer } from '../animations/variants';
import { Send, CheckCircle, MapPin, Clock, Github, Linkedin, Mail } from 'lucide-react';
import useNavTrigger from '../hooks/useNavTrigger';
import Magnetic from './Magnetic';

// Futuristic Particles Background Component
const ParticlesBackground = () => {
    // Generate static array of particles for performance to avoid re-renders
    const particles = useMemo(() => {
        return Array.from({ length: 30 }).map((_, i) => ({
            id: i,
            size: Math.random() * 2 + 1,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            duration: Math.random() * 20 + 10,
            delay: Math.random() * 5
        }));
    }, []);

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* Soft animated red glows */}
            <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-red-600/5 rounded-full blur-[120px] mix-blend-screen animate-pulse" />
            
            {/* Floating particles */}
            {particles.map(p => (
                <motion.div
                    key={p.id}
                    initial={{ opacity: 0, y: 0 }}
                    animate={{ 
                        opacity: [0, 0.2, 0], 
                        y: [-20, -100] 
                    }}
                    transition={{
                        duration: p.duration,
                        repeat: Infinity,
                        delay: p.delay,
                        ease: "linear"
                    }}
                    className="absolute rounded-sm bg-red-500/20 shadow-[0_0_4px_rgba(239,68,68,0.3)]"
                    style={{
                        width: p.size,
                        height: p.size,
                        left: p.left,
                        top: p.top
                    }}
                />
            ))}
        </div>
    );
};

const Contact = () => {
    const form = useRef();
    const refreshKey = useNavTrigger('contact');
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        message: ''
    });
    
    // Track touched fields for real-time validation display
    const [touched, setTouched] = useState({
        name: false,
        email: false,
        message: false
    });
    
    const [status, setStatus] = useState('idle'); // idle, loading, success, error

    // Terminal sequence state for success message
    const [terminalLines, setTerminalLines] = useState([]);
    
    // Real-time validation logic
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    const errors = useMemo(() => {
        return {
            name: formState.name.trim().length < 2 ? "Name required" : null,
            email: !emailRegex.test(formState.email) ? "Invalid email" : null,
            message: formState.message.trim().length < 10 ? "Message too short" : null,
        };
    }, [formState]);
    
    const isFormValid = Object.values(errors).every(err => err === null);

    const handleChange = (e) => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        });
    };

    const handleBlur = (e) => {
        setTouched({
            ...touched,
            [e.target.name]: true
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (!isFormValid) {
            setTouched({ name: true, email: true, message: true });
            return;
        }
        
        setStatus('loading');

        const subject = encodeURIComponent(`Message from ${formState.name}`);
        const body = encodeURIComponent(formState.message);
        
        setTimeout(() => {
            window.location.href = `mailto:manudeep1000@gmail.com?subject=${subject}&body=${body}`;
            
            setStatus('success');
            setFormState({ name: '', email: '', message: '' });
            setTouched({ name: false, email: false, message: false });
            
            // Start terminal animation
            setTerminalLines([]); 
            setTimeout(() => setTerminalLines(prev => [...prev, 'Establishing secure link...']), 100);
            setTimeout(() => setTerminalLines(prev => [...prev, 'Encrypting telemetry...']), 800);
            setTimeout(() => setTerminalLines(prev => [...prev, 'Link Stabilized. Message Sent.']), 1800);

            setTimeout(() => {
                setStatus('idle');
                setTerminalLines([]);
            }, 6000);

        }, 800);
    };

    return (
        <section id="contact" className="py-24 bg-background text-white relative border-t border-white/5 overflow-hidden">
            <ParticlesBackground />
            
            <div className="container mx-auto px-6 md:px-16 max-w-6xl relative z-10">
                <motion.div
                    key={refreshKey}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ amount: 0.1, once: true }}
                    variants={staggerContainer}
                    className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center"
                >
                    {/* Left Panel: Info & Abstract */}
                    <div className="lg:w-1/2 flex flex-col justify-center">
                        <motion.div variants={blurFadeIn} className="flex items-center gap-4 mb-8">
                            <div className="h-[2px] w-8 bg-red-600 rounded-full" />
                            <span className="text-[10px] uppercase font-bold tracking-[0.3em] text-red-500">
                                Contact Channel
                            </span>
                        </motion.div>

                        <motion.h2 variants={blurFadeIn} className="text-4xl md:text-5xl lg:text-7xl font-black uppercase italic tracking-tighter mb-8 leading-[1]">
                            Let's build <br /> something <span className="text-neutral-700">Impactful.</span>
                        </motion.h2>
                        
                        <motion.p variants={blurFadeIn} className="text-neutral-400 text-lg mb-10 leading-relaxed tracking-tight max-w-md">
                            Open for high-performance collaborations. Initiate a secure link to discuss your project abstract.
                        </motion.p>
                        
                        {/* <motion.div variants={blurFadeIn} className="space-y-6 mb-12">
                            <div className="flex items-center gap-4 text-neutral-300">
                                <MapPin size={18} className="text-red-500" />
                                <span className="text-xs font-bold uppercase tracking-widest">Earth, Sol System</span>
                            </div>
                            <div className="flex items-center gap-4 text-neutral-300">
                                <Clock size={18} className="text-red-500" />
                                <span className="text-xs font-bold uppercase tracking-widest">Response T-24 Hours</span>
                            </div>
                        </motion.div> */}
                        
                        <motion.div variants={blurFadeIn} className="flex items-center gap-4">
                            {[
                                { icon: Github, href: "https://github.com/manudeep1000", label: "GitHub" },
                                { icon: Linkedin, href: "https://linkedin.com/in/manudeep1000", label: "LinkedIn" },
                                { icon: Mail, href: "mailto:manudeep1000@gmail.com", label: "Email" }
                            ].map((social, idx) => (
                                <Magnetic strength={0.2} key={idx}>
                                    <a 
                                        href={social.href}
                                        target="_blank"
                                        rel="noreferrer"
                                        aria-label={social.label}
                                        className="group w-12 h-12 rounded-sm bg-card border border-white/5 flex items-center justify-center text-neutral-500 transition-all duration-300 hover:text-red-500 hover:border-red-500/50"
                                    >
                                        <social.icon size={20} className="transition-transform group-hover:scale-110" />
                                    </a>
                                </Magnetic>
                            ))}
                        </motion.div>
                    </div>

                    {/* Right Panel: F1 Form */}
                    <motion.div 
                        variants={blurFadeIn}
                        className="lg:w-1/2 w-full relative"
                    >
                        <div className="bg-card p-8 md:p-12 rounded-xl border border-white/5 shadow-2xl shadow-black relative overflow-hidden group">
                            <form onSubmit={handleSubmit} ref={form} className="space-y-8 relative z-10" noValidate>
                                <div className="space-y-6">
                                    <div className="relative group/input">
                                        <label htmlFor="name" className="block text-[10px] font-black tracking-widest uppercase text-neutral-500 mb-2 italic">01 // Name</label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formState.name}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            className={`
                                                w-full bg-background border rounded-sm px-5 py-4 text-white text-sm font-bold tracking-tight transition-all duration-300
                                                focus:outline-none focus:bg-neutral-900
                                                ${touched.name && errors.name 
                                                    ? 'border-red-500/50' 
                                                    : 'border-white/5 focus:border-red-500/50'}
                                            `}
                                            placeholder="NARASINGU MANUDEEP"
                                        />
                                    </div>
                                    
                                    <div className="relative group/input">
                                        <label htmlFor="email" className="block text-[10px] font-black tracking-widest uppercase text-neutral-500 mb-2 italic">02 // Email</label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formState.email}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            className={`
                                                w-full bg-background border rounded-sm px-5 py-4 text-white text-sm font-bold tracking-tight transition-all duration-300
                                                focus:outline-none focus:bg-neutral-900
                                                ${touched.email && errors.email 
                                                    ? 'border-red-500/50' 
                                                    : 'border-white/5 focus:border-red-500/50'}
                                            `}
                                            placeholder="HELLO@PRECISION.COM"
                                        />
                                    </div>

                                    <div className="relative group/input">
                                        <label htmlFor="message" className="block text-[10px] font-black tracking-widest uppercase text-neutral-500 mb-2 italic">03 // Abstract</label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            rows="4"
                                            value={formState.message}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            className={`
                                                w-full bg-background border rounded-sm px-5 py-4 text-white text-sm font-bold tracking-tight resize-none transition-all duration-300
                                                focus:outline-none focus:bg-neutral-900
                                                ${touched.message && errors.message 
                                                    ? 'border-red-500/50' 
                                                    : 'border-white/5 focus:border-red-500/50'}
                                            `}
                                            placeholder="INITIATE DATA TRANSMISSION..."
                                        ></textarea>
                                    </div>
                                </div>

                                <Magnetic strength={0.1}>
                                    <button
                                        type="submit"
                                        disabled={!isFormValid || status === 'loading' || status === 'success'}
                                        className={`
                                            group w-full px-8 py-5 font-black text-xs uppercase italic tracking-[0.2em] rounded-sm flex items-center justify-center gap-4 transition-all duration-500 active:scale-95
                                            ${isFormValid && status !== 'success'
                                                ? 'bg-red-600 text-white hover:bg-white hover:text-black shadow-lg shadow-red-600/20' 
                                                : 'bg-neutral-900 text-neutral-700 cursor-not-allowed border border-white/5'}
                                        `}
                                    >
                                        {status === 'loading' ? (
                                            <div className="flex items-center gap-3">
                                                <div className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                                                Processing
                                            </div>
                                        ) : status === 'success' ? (
                                            <div className="flex items-center gap-2">
                                                <CheckCircle size={16} />
                                                Sent
                                            </div>
                                        ) : (
                                            <>
                                                Launch Message <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                            </>
                                        )}
                                    </button>
                                </Magnetic>
                            </form>

                            <AnimatePresence>
                                {status === 'success' && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 10 }}
                                        className="mt-8 bg-background border border-red-500/20 rounded-lg p-6 font-mono text-[10px] md:text-xs"
                                    >
                                        {terminalLines.map((line, idx) => (
                                            <motion.div
                                                key={idx}
                                                initial={{ opacity: 0, x: -5 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                className={`flex items-center gap-3 mb-2 last:mb-0 ${idx === terminalLines.length - 1 ? 'text-red-500 font-black' : 'text-neutral-500'}`}
                                            >
                                                <span className="text-red-500/30 font-bold">{'>'}</span> {line}
                                            </motion.div>
                                        ))}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </motion.div>
                </motion.div>
            </div>

            
            <style>{`
                @keyframes shimmer {
                    100% {
                        transform: translateX(100%);
                    }
                }
                @keyframes shine {
                    0% { transform: translateX(-200%); }
                    100% { transform: translateX(200%); }
                }
                .animate-shine {
                    animation: shine 2s ease-in-out infinite;
                }
            `}</style>
        </section>
    );
};

export default Contact;
