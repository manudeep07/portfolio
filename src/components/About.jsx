import { motion } from 'framer-motion';
import { blurFadeIn, staggerContainer } from '../animations/variants';
import { Code, Terminal, Cpu } from 'lucide-react';
import useNavTrigger from '../hooks/useNavTrigger';

const About = () => {
    const refreshKey = useNavTrigger('about');

    return (
        <section id="about" className="py-24 scroll-mt-20 bg-black text-white relative overflow-hidden">
            {/* Extremely dark structured radial core */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(120,119,198,0.1),transparent)] pointer-events-none"></div>

            <div className="container mx-auto px-6 max-w-6xl relative z-10">
                <motion.div
                    key={refreshKey}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ amount: 0.3, once: true }}
                    variants={staggerContainer}
                    className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24"
                >
                    {/* Text Content */}
                    <motion.div className="lg:w-1/2">
                        <motion.div variants={blurFadeIn} className="flex items-center gap-3 mb-6">
                            <span className="h-px bg-white/20 w-12"></span>
                            <h2 className="text-sm font-semibold tracking-[0.2em] text-gray-400 uppercase">
                                Background
                            </h2>
                        </motion.div>
                        
                        <motion.h3 variants={blurFadeIn} className="text-4xl md:text-5xl font-bold mb-8 tracking-tight">
                            Driven by architecture, obsessed with detail.
                        </motion.h3>

                        <div className="space-y-6 text-gray-400 text-lg font-light leading-relaxed">
                            <motion.p variants={blurFadeIn}>
                                I am a passionate MERN Stack Web Developer focused on building highly scalable, zero-latency web applications. My journey began with curiosity about how the web works at an architectural level, which naturally evolved into full-stack engineering.
                            </motion.p>
                            <motion.p variants={blurFadeIn}>
                                I specialize in building deterministic user interfaces with React and engineering asynchronous backend architectures using Node.js, Express, and MongoDB. Beyond writing execution contexts, I am actively exploring DevOps orchestration layers (CI/CD, remote environments) to command the full lifecycle of software deployments.
                            </motion.p>
                        </div>
                    </motion.div>

                    {/* Visual Content / Vercel-style Grid Cards */}
                    <motion.div className="lg:w-1/2 relative w-full h-full">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 group/list relative z-10">
                            <motion.div 
                                variants={blurFadeIn} 
                                className="bg-white/[0.02] p-8 rounded-3xl border border-white/[0.05] shadow-[inset_0_1px_1px_rgba(255,255,255,0.02)] hover:bg-white/[0.04] hover:border-white/10 transition-all duration-500 group/item group-hover/list:opacity-50 hover:!opacity-100 flex flex-col"
                            >
                                <div className="p-3 bg-white/5 border border-white/5 rounded-2xl w-fit mb-6">
                                    <Code className="text-gray-300 transition-transform group-hover/item:scale-110 duration-500" size={24} />
                                </div>
                                <h3 className="font-semibold text-xl text-white mb-2 tracking-tight">Frontend</h3>
                                <p className="text-gray-500 text-sm font-medium leading-relaxed">Crafting responsive, high-framerate UIs with React.</p>
                            </motion.div>

                            <motion.div 
                                variants={blurFadeIn} 
                                className="bg-white/[0.02] p-8 rounded-3xl border border-white/[0.05] shadow-[inset_0_1px_1px_rgba(255,255,255,0.02)] hover:bg-white/[0.04] hover:border-white/10 transition-all duration-500 group/item group-hover/list:opacity-50 hover:!opacity-100 flex flex-col sm:mt-12"
                            >
                                <div className="p-3 bg-white/5 border border-white/5 rounded-2xl w-fit mb-6">
                                    <Terminal className="text-gray-300 transition-transform group-hover/item:scale-110 duration-500" size={24} />
                                </div>
                                <h3 className="font-semibold text-xl text-white mb-2 tracking-tight">Backend</h3>
                                <p className="text-gray-500 text-sm font-medium leading-relaxed">Building asynchronous APIs and secure microservices.</p>
                            </motion.div>

                            <motion.div 
                                variants={blurFadeIn} 
                                className="bg-white/[0.02] p-8 rounded-3xl border border-white/[0.05] shadow-[inset_0_1px_1px_rgba(255,255,255,0.02)] hover:bg-white/[0.04] hover:border-white/10 transition-all duration-500 group/item group-hover/list:opacity-50 hover:!opacity-100 flex flex-col sm:-mt-12 sm:col-span-2 sm:w-1/2 sm:mx-auto"
                            >
                                <div className="p-3 bg-white/5 border border-white/5 rounded-2xl w-fit mb-6">
                                    <Cpu className="text-gray-300 transition-transform group-hover/item:scale-110 duration-500" size={24} />
                                </div>
                                <h3 className="font-semibold text-xl text-white mb-2 tracking-tight">Optimization</h3>
                                <p className="text-gray-500 text-sm font-medium leading-relaxed">Targeting zero-latency execution contexts natively.</p>
                            </motion.div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
