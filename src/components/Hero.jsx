import { motion } from 'framer-motion';
import { blurFadeIn, staggerContainer, photoAnim } from '../animations/variants';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import profileImg from '../assets/formalpic copy.png';
import useNavTrigger from '../hooks/useNavTrigger';
import Magnetic from './Magnetic';

const Hero = () => {
    const refreshKey = useNavTrigger('home');

    return (
        <section id="home" className="min-h-screen flex items-center pt-20 relative overflow-hidden scroll-mt-20">
            {/* Ultra-premium dark structural gradient */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.15),rgba(255,255,255,0))] pointer-events-none"></div>

            <div className="container mx-auto px-6 max-w-6xl relative z-10">
                <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">
                    <motion.div
                        key={refreshKey}
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ amount: 0.1, once: true }}
                        className="md:w-1/2 gpu-accelerated"
                    >
                        <motion.div variants={blurFadeIn} className="flex items-center gap-3 mb-6">
                            <span className="relative flex h-3 w-3">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-accent"></span>
                            </span>
                            <p className="text-gray-300 font-medium tracking-wide uppercase text-sm">
                                Available for work
                            </p>
                        </motion.div>

                        <motion.h1 
                            variants={blurFadeIn} 
                            className="text-5xl md:text-6xl lg:text-8xl font-black mb-6 leading-[1.1] tracking-tighter"
                        >
                            <span className="text-white drop-shadow-sm">Digital</span>
                            <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-600">Experiences.</span>
                        </motion.h1>

                        <motion.p variants={blurFadeIn} className="text-gray-400 text-lg md:text-xl max-w-xl mb-10 leading-relaxed font-light">
                            I engineer scalable, high-performance web applications using MERN, focusing heavily on <span className="text-gray-200 font-medium">imperceptible latency</span> and <span className="text-gray-200 font-medium">immaculate design</span>.
                        </motion.p>

                        <motion.div variants={blurFadeIn} className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
                            <Magnetic strength={0.2} padding={0}>
                                <a href="#projects" className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-black bg-white rounded-full transition-transform hover:scale-105 active:scale-95 overflow-hidden">
                                    <span className="relative z-10 flex items-center gap-2">
                                        View Projects
                                        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                                    </span>
                                    {/* Subtle hover shine */}
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/5 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] pointer-events-none"></div>
                                </a>
                            </Magnetic>

                            <Magnetic strength={0.15}>
                                <a href="#contact" className="px-8 py-4 font-bold text-gray-300 border border-white/10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] rounded-full hover:bg-white/5 hover:text-white transition-all active:scale-95 backdrop-blur-sm">
                                    Contact Me
                                </a>
                            </Magnetic>
                        </motion.div>

                        <motion.div variants={blurFadeIn} className="mt-16 flex items-center gap-6 text-gray-500">
                            <Magnetic strength={0.3}><a href="https://github.com/manudeep07/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors p-2 -m-2"><Github size={22} /></a></Magnetic>
                            <Magnetic strength={0.3}><a href="https://www.linkedin.com/in/manudeep07/" target="_blank" rel="noopener noreferrer" className="hover:text-[#0A66C2] transition-colors p-2 -m-2"><Linkedin size={22} /></a></Magnetic>
                            <Magnetic strength={0.3}><a href="mailto:manudeep1000@gmail.com" className="hover:text-[#EA4335] transition-colors p-2 -m-2"><Mail size={22} /></a></Magnetic>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ amount: 0.1, once: true }}
                        variants={photoAnim}
                        className="md:w-1/2 flex flex-col items-center justify-center relative"
                    >
                        {/* Premium Soft Glow Ring */}
                        <div className="absolute inset-0 bg-accent/20 blur-[120px] rounded-full scale-75 z-0 pointer-events-none"></div>
                        
                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                            className="relative w-64 h-64 md:w-96 md:h-96 rounded-full overflow-hidden border border-white/10 shadow-[0_0_40px_rgba(0,0,0,0.5),inset_0_1px_2px_rgba(255,255,255,0.2)] z-10 bg-black/50"
                        >
                            <img
                                src={profileImg}
                                alt="Narasingu Manudeep"
                                className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity duration-500"
                            />
                        </motion.div>

                        <motion.div variants={blurFadeIn} className="mt-8 z-10">
                            <h3 className="text-xl font-bold tracking-tight text-white/90">
                                Narasingu Manudeep
                            </h3>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
