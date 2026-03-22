import { motion } from 'framer-motion';
import { blurFadeIn, staggerContainer } from '../animations/variants';
import { Code2, Database, LayoutTemplate, Server, Wrench, GitBranch, Github, TerminalSquare, BrainCircuit, Users, Clock, Target, Lightbulb, Atom, Coffee, Network, FileCode, Palette, AppWindow, Container } from 'lucide-react';
import useNavTrigger from '../hooks/useNavTrigger';

const skillsData = [
    {
        title: "Architecture & Frontend",
        icon: <Code2 className="w-5 h-5 text-gray-300" />,
        skills: [
            { name: "React", icon: <Atom className="w-4 h-4" /> },
            { name: "JavaScript", icon: <FileCode className="w-4 h-4" /> },
            { name: "Tailwind CSS", icon: <Palette className="w-4 h-4" /> },
            { name: "Figma", icon: <LayoutTemplate className="w-4 h-4" /> },
        ]
    },
    {
        title: "Backend & Systems",
        icon: <Server className="w-5 h-5 text-gray-300" />,
        skills: [
            { name: "Node.js", icon: <Server className="w-4 h-4" /> },
            { name: "Express.js", icon: <Network className="w-4 h-4" /> },
            { name: "MongoDB", icon: <Database className="w-4 h-4" /> },
            { name: "Java", icon: <Coffee className="w-4 h-4" /> },
            { name: "C++", icon: <TerminalSquare className="w-4 h-4" /> },
            { name: "PHP", icon: <AppWindow className="w-4 h-4" /> },
            { name: "C", icon: <TerminalSquare className="w-4 h-4" /> },
        ]
    },
    {
        title: "DevOps & Tooling",
        icon: <Wrench className="w-5 h-5 text-gray-300" />,
        skills: [
            { name: "Git", icon: <GitBranch className="w-4 h-4" /> },
            { name: "GitHub", icon: <Github className="w-4 h-4" /> },
            { name: "Docker", icon: <Container className="w-4 h-4" /> },
        ]
    },
    {
        title: "Core Mechanics",
        icon: <BrainCircuit className="w-5 h-5 text-gray-300" />,
        skills: [
            { name: "Problem Solving", icon: <Lightbulb className="w-4 h-4" /> },
            { name: "Teamwork", icon: <Users className="w-4 h-4" /> },
            { name: "Adaptability", icon: <Target className="w-4 h-4" /> },
            { name: "Time Management", icon: <Clock className="w-4 h-4" /> },
        ]
    }
];

const Skills = () => {
    const refreshKey = useNavTrigger('skills');

    return (
        <section id="skills" className="py-24 scroll-mt-20 bg-black text-white relative">
            <div className="container mx-auto px-6 max-w-6xl relative z-10">
                <motion.div
                    key={refreshKey}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ amount: 0.1, once: true }}
                    variants={staggerContainer}
                >
                    <div className="mb-20">
                        <motion.h2 variants={blurFadeIn} className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
                            Technical Stack
                        </motion.h2>
                        <motion.p variants={blurFadeIn} className="text-gray-400 text-lg max-w-2xl font-light">
                            The core infrastructure and languages I wield to build production-grade environments.
                        </motion.p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 group/list">
                        {skillsData.map((category, idx) => (
                            <motion.div
                                key={idx}
                                variants={blurFadeIn}
                                className="bg-white/[0.02] p-6 rounded-3xl border border-white/[0.05] shadow-[inset_0_1px_1px_rgba(255,255,255,0.02)] transition-all duration-500 hover:border-white/10 hover:bg-white/[0.04] group/item group-hover/list:opacity-40 hover:!opacity-100 flex flex-col"
                            >
                                <div className="flex items-center gap-3 mb-8">
                                    <div className="p-2.5 rounded-xl bg-white/5 border border-white/5">
                                        {category.icon}
                                    </div>
                                    <h3 className="font-semibold text-lg tracking-tight text-white/90">{category.title}</h3>
                                </div>

                                <div className="flex flex-col gap-2 mt-auto">
                                    {category.skills.map((skill, sIdx) => (
                                        <div
                                            key={sIdx}
                                            className="group flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-white/5 transition-colors duration-300 cursor-default"
                                        >
                                            <span className="text-gray-500 group-hover:text-white transition-colors duration-300">
                                                {skill.icon}
                                            </span>
                                            <span className="text-sm font-medium text-gray-400 group-hover:text-white transition-colors duration-300">
                                                {skill.name}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;
