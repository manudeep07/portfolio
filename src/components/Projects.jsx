import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { blurFadeIn, staggerContainer } from '../animations/variants';
import { X, ExternalLink, Github } from 'lucide-react';
import useNavTrigger from '../hooks/useNavTrigger';

const projects = [
    {
        id: 1,
        title: 'Collaborative Online Notepad',
        category: 'PHP / JavaScript / Ratchet',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        description: 'This project is a real-time collaborative notepad built using PHP, JavaScript, and the Ratchet WebSocket library. It allows multiple users to edit the same document simultaneously and see updates instantly without refreshing the page.',
        LiveDemo: '#',
        SourceCode: 'https://github.com/manudeep07/collaborative-notepad',
        stack: ['PHP', 'JavaScript', 'Ratchet']
    },
    {
        id: 2,
        title: 'LMS',
        category: 'MERN/tailwind',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        description: 'This project is a full-stack Learning Management System (LMS) inspired by platforms like Udemy and Coursera. It enables users to browse, purchase, and learn from online courses through a secure and seamless digital learning experience. The platform integrates modern authentication and payment solutions to ensure scalability, security, and a smooth user journey from enrollment to course completion.',
        LiveDemo: 'https://edulite.manudeep.xyz/',
        SourceCode: 'https://github.com/manudeep07/LMS',
        stack: ['MERN', 'Clerk Auth', 'Stripe Payment']
    },
    {
        id: 3,
        title: 'Virtual Classroom',
        category: 'MERN/WEbrtc/Socket.io',
        image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        description: 'A web-based virtual classroom platform where teachers can create classrooms, share a unique class code, post announcements, assignments, study materials, and conduct live sessions.',
        LiveDemo: '#',
        SourceCode: 'https://github.com/manudeep07/virtual-classroom',
        stack: ['MERN', 'WebRTC', 'Socket.io']
    },
];

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);
    const refreshKey = useNavTrigger('projects');

    return (
        <section id="projects" className="py-24 scroll-mt-20 bg-black text-white relative">
            <div className="container mx-auto px-6 max-w-6xl relative z-10">
                <motion.div
                    key={refreshKey}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ amount: 0.1, once: true }}
                    variants={staggerContainer}
                >
                    <div className="mb-20 text-center">
                        <motion.h2 variants={blurFadeIn} className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
                            Selected Works
                        </motion.h2>
                        <motion.p variants={blurFadeIn} className="text-gray-400 text-lg max-w-2xl mx-auto font-light">
                            Production-grade applications built resolving complex digital architecture logic.
                        </motion.p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 group/list">
                        {projects.map((project) => (
                            <motion.div
                                key={project.id}
                                variants={blurFadeIn}
                                onClick={() => setSelectedProject(project)}
                                className={`
                                    group/item relative cursor-pointer gpu-accelerated flex flex-col h-full
                                    bg-white/[0.02] p-4 rounded-3xl border border-white/[0.05] 
                                    shadow-[inset_0_1px_1px_rgba(255,255,255,0.02)] transition-all duration-500 
                                    hover:bg-white/[0.04] hover:border-white/10 group-hover/list:opacity-40 hover:!opacity-100
                                `}
                            >
                                <div className="relative overflow-hidden rounded-2xl aspect-[4/3] bg-[#0a0a0a] border border-white/5 mb-5 select-none">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="object-cover w-full h-full transform group-hover/item:scale-[1.03] transition-transform duration-[1s] ease-[cubic-bezier(0.22,1,0.36,1)]"
                                    />
                                    {/* Ultra subtle gradient overlay on hover */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover/item:opacity-100 transition-opacity duration-500" />
                                </div>

                                <div className="px-2 pb-2 flex flex-col flex-1">
                                    <span className="text-gray-500 text-xs font-semibold mb-2 uppercase tracking-[0.1em]">{project.category}</span>
                                    <h3 className="text-xl font-bold text-white/90 group-hover/item:text-white transition-colors tracking-tight">
                                        {project.title}
                                    </h3>
                                    <p className="text-sm text-gray-400 mt-2 line-clamp-2 leading-relaxed font-light">
                                        {project.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>

            {/* Application Modal */}
            <AnimatePresence>
                {selectedProject && (
                    <motion.div
                        initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
                        animate={{ opacity: 1, backdropFilter: "blur(12px)" }}
                        exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                        className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 overflow-y-auto"
                        onClick={() => setSelectedProject(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.95, opacity: 0, y: 10, filter: "blur(10px)" }}
                            animate={{ scale: 1, opacity: 1, y: 0, filter: "blur(0px)" }}
                            exit={{ scale: 0.95, opacity: 0, y: 10, filter: "blur(10px)" }}
                            transition={{ type: "spring", stiffness: 300, damping: 30, mass: 0.8 }}
                            className="bg-[#0a0a0a] w-full max-w-3xl rounded-[2rem] overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.8),inset_0_1px_1px_rgba(255,255,255,0.05)] my-8 flex flex-col relative"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                onClick={() => setSelectedProject(null)}
                                className="absolute top-4 right-4 p-2 bg-black/40 backdrop-blur-xl border border-white/10 rounded-full text-gray-400 hover:text-white hover:bg-white/10 hover:scale-110 transition-all z-[110]"
                            >
                                <X size={20} />
                            </button>

                            <div className="relative w-full aspect-[21/9] border-b border-white/5 bg-[#050505]">
                                <img
                                    src={selectedProject.image}
                                    alt={selectedProject.title}
                                    className="w-full h-full object-cover opacity-80"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent"></div>
                            </div>

                            <div className="p-8 md:p-12 flex flex-col flex-1">
                                <h3 className="text-3xl font-black mb-4 tracking-tight">{selectedProject.title}</h3>
                                <div className="flex gap-3 items-center mb-8">
                                    <div className="px-3 py-1 bg-white/[0.03] border border-white/[0.05] rounded-full text-xs font-semibold text-gray-400 tracking-wide uppercase">
                                        {selectedProject.category}
                                    </div>
                                </div>

                                <p className="text-gray-400 leading-relaxed text-base md:text-lg mb-12 font-light">
                                    {selectedProject.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-12">
                                    {selectedProject.stack.map(tech => (
                                        <span key={tech} className="px-4 py-2 bg-white/[0.02] border border-white/[0.05] shadow-[inset_0_1px_1px_rgba(255,255,255,0.02)] rounded-full text-sm font-medium text-gray-300">
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex flex-col sm:flex-row gap-4 mt-auto border-t border-white/5 pt-8">
                                    {selectedProject.LiveDemo === '#' ? (
                                        <button disabled className="flex-1 py-4 bg-white/[0.02] border border-white/[0.05] text-gray-600 font-bold rounded-2xl flex items-center justify-center gap-2 cursor-not-allowed">
                                            Not Live <ExternalLink size={18} />
                                        </button>
                                    ) : (
                                        <a href={selectedProject.LiveDemo} target="_blank" rel="noopener noreferrer" className="flex-1 py-4 bg-white text-black font-bold rounded-2xl flex items-center justify-center gap-2 hover:bg-gray-200 hover:scale-[1.02] transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)]">
                                            Live Demo <ExternalLink size={18} />
                                        </a>
                                    )}
                                    <a href={selectedProject.SourceCode} target="_blank" rel="noopener noreferrer" className="flex-1 py-4 bg-white/[0.03] border border-white/10 text-white font-bold rounded-2xl flex items-center justify-center gap-2 hover:bg-white/10 active:scale-95 transition-all">
                                        Source Code <Github size={18} />
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Projects;
