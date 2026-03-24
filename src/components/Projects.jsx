import { useState } from "react";
import {
  motion,
  AnimatePresence,
} from "framer-motion";
import { X, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "SyncNote",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
    description: "Real-time collaborative editor with seamless synchronization and multi-user support.",
    longDescription: "SyncNote is a high-performance collaborative environment built for teams. It features real-time cursor tracking, conflict resolution, and a sleek dark interface designed for focus.",
    tags: ["php","mysql","bootstrap","js"],
    github: "https://github.com/manudeep07/collaborative-notepad",
    live: "#"
  },
  {
    id: 2,
    title: "EduLite",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
    description: "Modern LMS platform for streamlined learning management and progress tracking.",
    longDescription: "EduLite simplifies the educational experience with intuitive course management, interactive quizzes, and comprehensive analytics for both students and instructors.",
    tags: ["React", "Node.js", "MongoDB", "Tailwind","clerk","stripe api"],
    github: "https://github.com/manudeep07/LMS",
    live: "#"
  },
  {
    id: 3,
    title: "ClassNova",
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b",
    description: "Virtual classroom system with integrated video conferencing and whiteboarding.",
    longDescription: "ClassNova brings the classroom to the screen. It integrates low-latency video, shared digital whiteboards, and breakout rooms to foster an engaging learning environment.",
    tags: ["React", "Node.js", "Socket.io","webRTC", "Tailwind"],
    github: "https://github.com/manudeep07/virtual-classroom",
    live: "#"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const ProjectCard = ({ project, onSelect }) => {
  return (
    <motion.div
      variants={itemVariants}
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      onClick={() => onSelect(project)}
      className="group relative cursor-pointer bg-[#111111] border border-white/5 rounded-xl overflow-hidden hover:border-red-500/30 transition-all duration-300 shadow-2xl shadow-black/50"
    >
      {/* Image Container */}
      <div className="relative aspect-[16/10] overflow-hidden grayscale-[0.2] group-hover:grayscale-0 transition-all duration-500">
        <motion.img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
          <span className="text-white text-[10px] uppercase font-bold tracking-[0.2em] flex items-center gap-2">
            View Details <ExternalLink size={12} className="text-red-500" />
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.slice(0, 2).map((tag) => (
            <span key={tag} className="text-[9px] uppercase tracking-[0.15em] font-bold text-neutral-500 border border-white/5 px-2 py-1 rounded-sm">
              {tag}
            </span>
          ))}
        </div>
        <h3 className="text-lg font-bold text-white mb-2 tracking-tight group-hover:text-red-500 transition-colors">
          {project.title}
        </h3>
        <p className="text-neutral-400 text-xs leading-relaxed line-clamp-2 tracking-tight">
          {project.description}
        </p>
      </div>
    </motion.div>
  );
};

export default function Projects() {
  const [selected, setSelected] = useState(null);

  return (
    <section id="projects" className="py-24 bg-[#050505] relative overflow-hidden tracking-tight">
      <div className="container mx-auto px-6 md:px-16 max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-2">
            <div className="h-[2px] w-8 bg-red-600 rounded-full" />
            <span className="text-[10px] uppercase font-bold tracking-[0.3em] text-red-500">
              Work
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-white uppercase italic">
            Featured <span className="text-neutral-600">Projects</span>
          </h2>
        </motion.div>

        <motion.div
           variants={containerVariants}
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true }}
           className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onSelect={setSelected}
            />
          ))}
        </motion.div>
      </div>

      {/* MODAL */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6"
          >
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelected(null)}
              className="absolute inset-0 bg-black/95 backdrop-blur-sm"
            />
            
            <motion.div
              layoutId={`project-${selected.id}`}
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="relative bg-[#0A0A0A] border border-white/5 rounded-2xl overflow-hidden max-w-4xl w-full max-h-[90vh] flex flex-col md:flex-row shadow-2xl tracking-tight"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-red-500/20 text-white hover:text-red-500 rounded-full transition-all"
                aria-label="Close modal"
              >
                <X size={18} />
              </button>

              {/* Modal Image */}
              <div className="w-full md:w-1/2 h-64 md:h-auto overflow-hidden border-b md:border-b-0 md:border-r border-white/5">
                <img
                  src={selected.image}
                  alt={selected.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Modal Content */}
              <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center overflow-y-auto">
                <div className="flex flex-wrap gap-2 mb-6">
                  {selected.tags.map((tag) => (
                    <span key={tag} className="text-[9px] uppercase tracking-widest font-black text-red-500 bg-red-500/5 border border-red-500/20 px-3 py-1 rounded-sm">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <h2 className="text-3xl md:text-4xl font-black text-white mb-4 uppercase italic tracking-tighter">
                  {selected.title}
                </h2>
                
                <p className="text-neutral-400 text-sm leading-relaxed mb-10 tracking-tight">
                  {selected.longDescription || selected.description}
                </p>

                <div className="flex flex-wrap gap-4 mt-auto">
                  <a
                    href={selected.live}
                    className="flex items-center gap-3 px-8 py-3 bg-red-600 text-white text-[10px] uppercase font-bold tracking-[0.2em] rounded-sm hover:bg-red-700 transition-all shadow-lg shadow-red-600/20"
                  >
                    Launch <ExternalLink size={14} />
                  </a>
                  <a
                    href={selected.github}
                    className="flex items-center gap-3 px-8 py-3 bg-white/5 border border-white/10 text-white text-[10px] uppercase font-bold tracking-[0.2em] rounded-sm hover:bg-white/10 transition-all"
                  >
                    Source <Github size={14} />
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}