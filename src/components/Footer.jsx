import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-background py-20 border-t border-white/5 text-center overflow-hidden relative">
            {/* Subtle red accent bar */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-[2px] bg-red-600 rounded-full" />
            
            <div className="container mx-auto px-6 md:px-16 max-w-6xl relative z-10 flex flex-col items-center">
                
                <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-10"
                >
                    <span className="text-2xl font-black uppercase italic tracking-tighter text-white">
                        MANU<span className="text-red-600 underline decoration-2 underline-offset-4">DEEP</span>
                    </span>
                    <p className="text-[9px] uppercase font-bold tracking-[0.4em] text-neutral-600 mt-2">
                        Precision Engineering // v2.0
                    </p>
                </motion.div>

                <div className="flex justify-center gap-4 mb-10">
                    {[
                        { icon: Github, href: "https://github.com/manudeep1000", label: "GitHub" },
                        { icon: Linkedin, href: "https://linkedin.com/in/manudeep1000", label: "LinkedIn" },
                        { icon: Mail, href: "mailto:manudeep1000@gmail.com", label: "Email" }
                    ].map((social, idx) => (
                        <motion.a 
                            key={idx}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-4 bg-card border border-white/5 rounded-sm text-neutral-500 hover:text-red-500 hover:border-red-500/30 transition-all duration-300 shadow-xl shadow-black/50"
                        >
                            <social.icon size={18} />
                        </motion.a>
                    ))}
                </div>

                <div className="w-full h-px bg-white/5 mb-10" />

                <div className="flex flex-col md:flex-row justify-between items-center gap-6 w-full opacity-50">
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-neutral-500">
                        © {currentYear} ALL RIGHTS RESERVED
                    </p>
                    <div className="flex gap-8">
                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-neutral-500">Telemetry: Status OK</span>
                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-neutral-500 italic">Built for Speed</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};


export default Footer;
