import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { fadeInUp, staggerContainer } from '../animations/variants';
import { X, ExternalLink, Github } from 'lucide-react';

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

    return (
        <section id="projects" className="py-12 md:py-20 bg-black text-white relative">
            <div className="container mx-auto px-6">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ amount: 0.1 }}
                    variants={staggerContainer}
                    className="max-w-6xl mx-auto"
                >
                    <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-bold mb-12 text-center">
                        Selected Work
                    </motion.h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project) => (
                            <motion.div
                                key={project.id}
                                variants={fadeInUp}
                                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                                className="group relative cursor-pointer"
                                onClick={() => setSelectedProject(project)}
                            >
                                <div className="relative overflow-hidden rounded-2xl aspect-[4/3] bg-gray-900 border border-gray-800">
                                    {/* Overlay */}
                                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors z-10" />

                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-500"
                                    />

                                    <div className="absolute bottom-0 left-0 p-6 z-20 w-full bg-gradient-to-t from-black/90 to-transparent">
                                        <span className="text-accent text-sm font-medium mb-1 block">{project.category}</span>
                                        <h3 className="text-xl font-bold text-white group-hover:text-accent transition-colors">
                                            {project.title}
                                        </h3>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>

            {/* Modal */}
            <AnimatePresence>
                {selectedProject && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm overflow-y-auto"
                        onClick={() => setSelectedProject(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            className="bg-card w-full max-w-2xl rounded-3xl overflow-hidden border border-gray-800 relative shadow-2xl my-8"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                onClick={() => setSelectedProject(null)}
                                className="absolute top-4 right-4 p-2 bg-black/50 rounded-full text-white hover:bg-white hover:text-black transition-colors z-20"
                            >
                                <X size={24} />
                            </button>

                            <div className="relative w-full aspect-video">
                                <img
                                    src={selectedProject.image}
                                    alt={selectedProject.title}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent"></div>
                            </div>

                            <div className="p-6 md:p-8">
                                <h3 className="text-2xl md:text-3xl font-bold mb-2">{selectedProject.title}</h3>
                                <p className="text-accent font-medium mb-6">{selectedProject.category}</p>

                                <p className="text-gray-300 leading-relaxed mb-6">
                                    {selectedProject.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-8">
                                    {selectedProject.stack.map(tech => (
                                        <span key={tech} className="px-3 py-1 bg-white/5 rounded-full text-sm text-gray-400">
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex flex-col sm:flex-row gap-4">
                                    <a href={selectedProject.LiveDemo} className="flex-1 py-3 bg-white text-black font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-gray-200 transition-colors">
                                        Live Demo <ExternalLink size={18} />
                                    </a>
                                    <a href={selectedProject.SourceCode} className="flex-1 py-3 border border-gray-700 text-white font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-white/5 transition-colors">
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
