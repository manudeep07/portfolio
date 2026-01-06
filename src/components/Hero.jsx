import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer, photoAnim } from '../animations/variants';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import profileImg from '../assets/IMG-20241103-WA0016 1.jpg';
import useMobile from '../hooks/useMobile';
import useNavTrigger from '../hooks/useNavTrigger';

const Hero = () => {
    const isMobile = useMobile();
    const refreshKey = useNavTrigger('home');

    return (
        <section id="home" className="min-h-screen flex items-center pt-20 relative overflow-hidden">
            {/* Background Elements - Optimized */}
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3]
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="absolute top-20 right-0 w-96 h-96 bg-accent/10 rounded-full blur-2xl -z-10"
                style={{ willChange: "transform, opacity" }}
            ></motion.div>
            <motion.div
                animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.3, 0.5, 0.3]
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                }}
                className="absolute bottom-20 left-0 w-72 h-72 bg-blue-500/10 rounded-full blur-2xl -z-10"
                style={{ willChange: "transform, opacity" }}
            ></motion.div>

            <div className="container mx-auto px-6">
                <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">
                    <motion.div
                        key={refreshKey}
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ amount: 0.1, once: true }}
                        className="md:w-1/2 gpu-accelerated"
                    >
                        <motion.p variants={fadeInUp} className="text-accent font-medium mb-4 text-lg">
                            Hello, I'm a Web Developer
                        </motion.p>
                        <motion.h1 variants={fadeInUp} className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 leading-tight">
                            Building <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">digital experiences</span> with precision and soul.
                        </motion.h1>
                        <motion.p variants={fadeInUp} className="text-gray-400 text-lg md:text-xl max-w-2xl mb-10 leading-relaxed">
                            I create scalable, high-performance web applications using MongoDB, Express, React, and Node.js, with a strong focus on clean design and intuitive user interfaces.
                        </motion.p>

                        <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4">
                            <a href="#projects" className="px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition-all flex items-center justify-center gap-2 group">
                                View Projects
                                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                            </a>
                            <a href="#contact" className="px-8 py-4 border border-gray-700 text-white font-semibold rounded-full hover:bg-white/5 transition-all flex items-center justify-center">
                                Contact Me
                            </a>
                        </motion.div>

                        <motion.div variants={fadeInUp} className="mt-16 flex items-center gap-6 text-gray-400">
                            <motion.a whileHover={{ scale: 1.2, color: "#fff" }} href="https://github.com/manudeep07/" target="_blank" rel="noopener noreferrer" className="transition-colors cursor-pointer"><Github size={24} /></motion.a>
                            <motion.a whileHover={{ scale: 1.2, color: "#0A66C2" }} href="https://www.linkedin.com/in/manudeep07/" target="_blank" rel="noopener noreferrer" className="transition-colors cursor-pointer"><Linkedin size={24} /></motion.a>
                            <motion.a whileHover={{ scale: 1.2, color: "#EA4335" }} href="mailto:manudeep1000@gmail.com"  className="transition-colors cursor-pointer"><Mail size={24} /></motion.a>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ amount: 0.1, once: true }}
                        variants={photoAnim}
                        className="md:w-1/2 flex flex-col items-center justify-center relative"
                    >
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.4, ease: "easeOut" }}
                            className="relative w-64 h-64 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-gray-800 shadow-2xl z-10"
                        >
                            <img
                                src={profileImg}
                                alt="Narasingu Manudeep"
                                className="w-full h-full object-cover"
                            />
                        </motion.div>

                        <motion.div
                            variants={fadeInUp}
                            className="text-center mt-6 z-10 cursor-default"
                        >
                            <motion.h3
                                whileHover={{ scale: 1.1, color: "#3B82F6" }}
                                transition={{ duration: 0.3, ease: "easeInOut" }}
                                className="text-3xl font-bold text-white inline-block"
                            >
                                Narasingu Manudeep
                            </motion.h3>
                        </motion.div>

                        {/* Blob behind image */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-accent/20 rounded-full blur-2xl -z-10 gpu-accelerated"></div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
