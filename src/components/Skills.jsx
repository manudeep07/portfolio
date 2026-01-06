import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer, scaleUp } from '../animations/variants';
import useMobile from '../hooks/useMobile';
import useNavTrigger from '../hooks/useNavTrigger';

const skillsData = [
    { name: 'Java', level: 'Advanced' },
    { name: 'C++', level: 'Advanced' },
    { name: 'C', level: 'Intermediate' },
    { name: 'JavaScript', level: 'Advanced' },
    { name: 'PHP', level: 'Intermediate' },
    { name: 'MongoDB', level: 'Basic' },
    { name: 'Express.js', level: 'Intermediate' },
    { name: 'React', level: 'Advanced' },
    { name: 'Node.js', level: 'Intermediate' },
    { name: 'Tailwind CSS', level: 'Advanced' },
    { name: 'Git', level: 'Advanced' },
    { name: 'GitHub', level: 'Advanced' },
    { name: 'Figma', level: 'Advanced' },
];

const Skills = () => {
    const isMobile = useMobile();
    const refreshKey = useNavTrigger('skills');

    return (
        <section id="skills" className="py-16 md:py-20 bg-black text-white relative overflow-hidden">
            <div className="container mx-auto px-6">
                <motion.div
                    key={refreshKey}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ amount: 0.2, once: true }}
                    variants={staggerContainer}
                    className="text-center max-w-3xl mx-auto"
                >
                    <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-bold mb-12">
                        Tech Stack
                    </motion.h2>

                    <motion.div variants={staggerContainer} className="flex flex-wrap justify-center gap-4">
                        {skillsData.map((skill) => (
                            <motion.div
                                key={skill.name}
                                variants={scaleUp}
                                whileHover={{ scale: 1.05, borderColor: "rgba(255,255,255,0.4)" }}
                                className="px-6 py-3 rounded-full border border-gray-800 bg-card text-gray-300 cursor-default hover:text-white hover:bg-white/5 transition-colors"
                            >
                                {skill.name}
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;
