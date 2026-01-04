import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '../animations/variants';
import { Code, Terminal, Cpu } from 'lucide-react';
import useMobile from '../hooks/useMobile';
import useNavTrigger from '../hooks/useNavTrigger';

const About = () => {
    const isMobile = useMobile();
    const refreshKey = useNavTrigger('about'); // ID passed without #

    return (
        <section id="about" className="py-16 md:py-20 bg-black text-white relative overflow-hidden">
            <div className="container mx-auto px-6">
                <motion.div
                    key={refreshKey}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ amount: 0.3, once: true }}
                    variants={staggerContainer}
                    className="flex flex-col md:flex-row items-center gap-12"
                >
                    {/* Text Content */}
                    <motion.div className="md:w-1/2">
                        <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-bold mb-6">
                            About Me
                        </motion.h2>
                        <motion.div variants={fadeInUp} className="w-20 h-1 bg-accent mb-8"></motion.div>

                        <motion.p variants={fadeInUp} className="text-gray-400 text-lg leading-relaxed mb-6">
                            I am a passionate MERN Stack Web Developer focused on building scalable and user-friendly web applications. My journey began with curiosity about how the web works, which naturally evolved into full-stack development using the MERN stack.
                        </motion.p>
                        <motion.p variants={fadeInUp} className="text-gray-400 text-lg leading-relaxed mb-6">
                            I specialize in building dynamic user interfaces with React and developing efficient backend APIs using Node.js, Express, and MongoDB. Alongside application development, I am actively exploring DevOps practices such as deployment, environment configuration, and CI/CD to better understand how applications scale and run in production. I enjoy solving problems with clean, maintainable code and regularly strengthen my problem-solving skills on coding platforms.
                        </motion.p>

                        {/* Stats or Highlights */}
                        <motion.div variants={fadeInUp} className="flex gap-8 mt-8">
                            <div>
                                <h3 className="text-4xl font-bold text-white">200+</h3>
                                <p className="text-sm text-gray-500 mt-1">DSA Problems Solved</p>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Visual Content */}
                    <motion.div className="md:w-1/2 relative">
                        <div className="relative z-10 grid grid-cols-2 gap-4">
                            <motion.div variants={fadeInUp} className="bg-card p-6 rounded-2xl border border-gray-800 hover:border-gray-700 transition-colors">
                                <Code className="text-accent mb-4" size={32} />
                                <h3 className="font-bold text-lg mb-2">Frontend</h3>
                                <p className="text-gray-400 text-sm">Crafting responsive and interactive UIs.</p>
                            </motion.div>
                            <motion.div variants={fadeInUp} className="bg-card p-6 rounded-2xl border border-gray-800 hover:border-gray-700 transition-colors mt-8">
                                <Terminal className="text-purple-500 mb-4" size={32} />
                                <h3 className="font-bold text-lg mb-2">Backend</h3>
                                <p className="text-gray-400 text-sm">Building robust APIs and services.</p>
                            </motion.div>
                            <motion.div variants={fadeInUp} className="bg-card p-6 rounded-2xl border border-gray-800 hover:border-gray-700 transition-colors -mt-8">
                                <Cpu className="text-green-500 mb-4" size={32} />
                                <h3 className="font-bold text-lg mb-2">Optimization</h3>
                                <p className="text-gray-400 text-sm">Ensuring high performance and speed.</p>
                            </motion.div>
                        </div>
                        {/* Decorative blob */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-accent/20 rounded-full blur-3xl -z-10"></div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
