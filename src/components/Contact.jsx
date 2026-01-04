import { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { fadeInUp, staggerContainer } from '../animations/variants';
import { Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import emailjs from '@emailjs/browser';
import useMobile from '../hooks/useMobile';
import useNavTrigger from '../hooks/useNavTrigger';

const Contact = () => {
    const form = useRef();
    const isMobile = useMobile();
    const refreshKey = useNavTrigger('contact');
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [status, setStatus] = useState('idle'); // idle, loading, success, error

    const handleChange = (e) => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('loading');

        try {
            await emailjs.send(
                import.meta.env.VITE_SERVICE_ID,
                import.meta.env.VITE_TEMPLATE_ID,
                {
                    from_name: formState.name,
                    from_email: formState.email,
                    message: formState.message,
                    to_name: 'Narasingu Manudeep' // Optional: Can be dynamic or hardcoded
                },
                import.meta.env.VITE_PUBLIC_KEY
            );

            setStatus('success');
            setFormState({ name: '', email: '', message: '' });
            setTimeout(() => setStatus('idle'), 3000);
        } catch (error) {
            console.error('EmailJS Error:', error);
            setStatus('error');
            setTimeout(() => setStatus('idle'), 3000);
        }
    };

    return (
        <section id="contact" className="py-16 md:py-24 bg-gradient-to-b from-black to-gray-900 text-white">
            <div className="container mx-auto px-6 max-w-4xl">
                <motion.div
                    key={refreshKey}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ amount: 0.3, once: true }}
                    className="text-center mb-16"
                >
                    <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-bold mb-4">
                        Get In Touch
                    </motion.h2>
                    <motion.p variants={fadeInUp} className="text-gray-400">
                        I am currently open to new opportunities. Feel free to reach out.
                    </motion.p>
                </motion.div>

                <div className="bg-card p-8 md:p-12 rounded-3xl border border-gray-800 shadow-2xl">
                    <form onSubmit={handleSubmit} ref={form} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    value={formState.name}
                                    onChange={handleChange}
                                    className="w-full bg-black/50 border border-gray-800 rounded-xl px-4 py-3 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all text-white placeholder-gray-600"
                                    placeholder="John Doe"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    value={formState.email}
                                    onChange={handleChange}
                                    className="w-full bg-black/50 border border-gray-800 rounded-xl px-4 py-3 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all text-white placeholder-gray-600"
                                    placeholder="abc@email.com"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                required
                                rows="6"
                                value={formState.message}
                                onChange={handleChange}
                                className="w-full bg-black/50 border border-gray-800 rounded-xl px-4 py-3 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all text-white resize-none placeholder-gray-600"
                                placeholder="Your message here..."
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            disabled={status === 'loading'}
                            className="w-full py-4 bg-white text-black font-bold rounded-xl hover:bg-gray-200 transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {status === 'loading' ? (
                                <>
                                    <Loader2 className="animate-spin" size={20} />
                                    Sending...
                                </>
                            ) : (
                                <>
                                    Send Message
                                    <Send size={20} />
                                </>
                            )}
                        </button>
                    </form>

                    <AnimatePresence>
                        {status === 'success' && (
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0 }}
                                className="mt-6 p-4 bg-green-500/10 border border-green-500/20 rounded-xl flex items-center justify-center gap-2 text-green-500"
                            >
                                <CheckCircle size={20} />
                                <span>Message sent successfully! I'll get back to you soon.</span>
                            </motion.div>
                        )}
                        {status === 'error' && (
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0 }}
                                className="mt-6 p-4 bg-red-500/10 border border-red-500/20 rounded-xl flex items-center justify-center gap-2 text-red-500"
                            >
                                <AlertCircle size={20} />
                                <span>Failed to send message. Please try again later.</span>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
};

export default Contact;
