import { useRef, useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { blurFadeIn } from '../animations/variants';
import { Send, CheckCircle, AlertCircle, XCircle } from 'lucide-react';
import useNavTrigger from '../hooks/useNavTrigger';
import Magnetic from './Magnetic';

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

    // Real-time validation logic
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    const errors = useMemo(() => {
        return {
            name: formState.name.trim().length < 2 ? "Name must be at least 2 characters." : null,
            email: !emailRegex.test(formState.email) ? "Please enter a valid email address." : null,
            message: formState.message.trim().length < 10 ? "Message must be at least 10 characters long." : null,
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

        const subject = encodeURIComponent(`Message from ${formState.name} (${formState.email})`);
        const body = encodeURIComponent(formState.message);
        
        // Simulate network request for premium feedback UX
        setTimeout(() => {
            window.location.href = `mailto:manudeep1000@gmail.com?subject=${subject}&body=${body}`;
            
            setStatus('success');
            setFormState({ name: '', email: '', message: '' });
            setTouched({ name: false, email: false, message: false });
            
            setTimeout(() => setStatus('idle'), 4000);
        }, 800);
    };

    return (
        <section id="contact" className="py-24 scroll-mt-20 bg-black text-white relative border-t border-white/5">
            <div className="container mx-auto px-6 max-w-6xl relative z-10">
                <motion.div
                    key={refreshKey}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ amount: 0.2, once: true }}
                    className="flex flex-col items-center"
                >
                    <motion.div variants={blurFadeIn} className="text-center mb-16">
                        <motion.h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
                            Let's Connect
                        </motion.h2>
                        <motion.p className="text-gray-400 text-lg max-w-2xl mx-auto font-light">
                            Open to deploying powerful projects. Send over an abstract and let's structure a build.
                        </motion.p>
                    </motion.div>

                    <motion.div 
                        variants={blurFadeIn}
                        className="w-full max-w-2xl"
                    >
                        <div className="bg-[#050505] p-8 md:p-12 rounded-3xl border border-white/[0.05] shadow-[inset_0_1px_1px_rgba(255,255,255,0.02)]">
                            <form onSubmit={handleSubmit} ref={form} className="space-y-6" noValidate>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="relative">
                                        <label htmlFor="name" className="block text-xs font-semibold tracking-wider uppercase text-gray-500 mb-2 ml-1">Name</label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formState.name}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            className={`
                                                w-full bg-white/[0.02] border rounded-2xl px-5 py-4 text-white placeholder-gray-600 transition-all duration-300
                                                focus:outline-none focus:ring-1 focus:bg-white/[0.04] shadow-[inset_0_2px_4px_rgba(0,0,0,0.5)]
                                                ${touched.name && errors.name 
                                                    ? 'border-red-500/30 focus:border-red-500 focus:ring-red-500/30' 
                                                    : 'border-white/5 focus:border-white/30 focus:ring-white/10 hover:border-white/10'}
                                            `}
                                            placeholder="Jane Doe"
                                        />
                                    </div>
                                    
                                    <div className="relative">
                                        <label htmlFor="email" className="block text-xs font-semibold tracking-wider uppercase text-gray-500 mb-2 ml-1">Email</label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formState.email}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            className={`
                                                w-full bg-white/[0.02] border rounded-2xl px-5 py-4 text-white placeholder-gray-600 transition-all duration-300
                                                focus:outline-none focus:ring-1 focus:bg-white/[0.04] shadow-[inset_0_2px_4px_rgba(0,0,0,0.5)]
                                                ${touched.email && errors.email 
                                                    ? 'border-red-500/30 focus:border-red-500 focus:ring-red-500/30' 
                                                    : 'border-white/5 focus:border-white/30 focus:ring-white/10 hover:border-white/10'}
                                            `}
                                            placeholder="hello@example.com"
                                        />
                                    </div>
                                </div>

                                <div className="relative">
                                    <label htmlFor="message" className="block text-xs font-semibold tracking-wider uppercase text-gray-500 mb-2 ml-1">Message</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows="5"
                                        value={formState.message}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        className={`
                                            w-full bg-white/[0.02] border rounded-2xl px-5 py-4 text-white resize-none placeholder-gray-600 transition-all duration-300
                                            focus:outline-none focus:ring-1 focus:bg-white/[0.04] shadow-[inset_0_2px_4px_rgba(0,0,0,0.5)]
                                            ${touched.message && errors.message 
                                                ? 'border-red-500/30 focus:border-red-500 focus:ring-red-500/30' 
                                                : 'border-white/5 focus:border-white/30 focus:ring-white/10 hover:border-white/10'}
                                        `}
                                        placeholder="How can I help you?"
                                    ></textarea>
                                </div>

                                <Magnetic strength={0.1}>
                                    <button
                                        type="submit"
                                        disabled={!isFormValid || status === 'loading'}
                                        className={`
                                            w-full py-5 font-bold text-[15px] rounded-2xl flex items-center justify-center gap-3 transition-all duration-500 active:scale-[0.98]
                                            ${isFormValid 
                                                ? 'bg-white text-black hover:bg-gray-200 shadow-[0_4px_20px_rgba(255,255,255,0.1)]' 
                                                : 'bg-white/[0.03] text-gray-600 cursor-not-allowed border border-white/[0.05]'}
                                        `}
                                    >
                                        {status === 'loading' ? (
                                            <div className="flex items-center gap-3">
                                                <div className="w-5 h-5 border-2 border-black/20 border-t-black rounded-full animate-spin" />
                                                Routing...
                                            </div>
                                        ) : (
                                            <>
                                                Send Transmission
                                                <Send size={18} className="ml-1" />
                                            </>
                                        )}
                                    </button>
                                </Magnetic>
                            </form>

                            <AnimatePresence>
                                {status === 'success' && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 15, scale: 0.95 }}
                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.95 }}
                                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                                        className="mt-6 p-5 bg-white/[0.02] border border-white/10 rounded-2xl flex items-center justify-center gap-3 text-white font-medium"
                                    >
                                        <CheckCircle size={20} className="text-white" />
                                        <span>Ready! Client launched.</span>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
