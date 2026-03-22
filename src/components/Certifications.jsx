import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";
import useNavTrigger from "../hooks/useNavTrigger";

const certificates = [
  {
    id: 1,
    title: "Master Generative AI & Tools",
    org: "Udemy",
    year: "2025",
    link: "#",
    image:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800&h=1000",
    x: -180,
    y: -30,
    rotate: -12,
  },
  {
    id: 2,
    title: "Computer Networking",
    org: "Coursera",
    year: "2024",
    link: "#",
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800&h=1000",
    x: -60,
    y: 20,
    rotate: -5,
  },
  {
    id: 3,
    title: "Software Development",
    org: "Coursera",
    year: "2024",
    link: "#",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800&h=1000",
    x: 60,
    y: -10,
    rotate: 6,
  },
  {
    id: 4,
    title: "Frontend Architecture",
    org: "Meta",
    year: "2024",
    link: "#",
    image:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800&h=1000",
    x: 180,
    y: 30,
    rotate: 12,
  },
];

const Certifications = () => {
  const refreshKey = useNavTrigger("certifications");
  const [hoveredCert, setHoveredCert] = useState(null);

  return (
    <section
      id="certifications"
      key={refreshKey}
      className="min-h-screen py-24 flex items-center justify-center bg-gradient-to-b from-black to-[#0f172a] relative overflow-hidden"
    >
      {/* 🌌 Background Glow */}
      <div className="absolute w-[800px] h-[800px] bg-purple-500/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10 flex flex-col items-center">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Certifications
          </h2>
          <p className="text-gray-400">
            Explore my verified achievements
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row w-full items-center justify-center gap-16">

          {/* LEFT: CARDS */}
          <div className="relative w-full lg:w-1/2 h-[450px] flex items-center justify-center perspective-[1200px]">
            {certificates.map((cert, index) => {
              const isFocused = hoveredCert?.id === cert.id;
              const isFaded = hoveredCert && !isFocused;

              return (
                <motion.div
                  key={cert.id}
                  // 1. Initial Deal & Settling Position (runs once)
                  initial={{ opacity: 0, x: -250, y: 150, rotate: -40, scale: 0.8 }}
                  whileInView={{ opacity: 1, x: cert.x, y: cert.y, rotate: cert.rotate, scale: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{
                    delay: index * 0.15,
                    type: "spring",
                    stiffness: 100,
                    damping: 15,
                    mass: 1,
                  }}
                  className="absolute"
                  style={{
                    zIndex: isFocused ? 50 : index + 10,
                    transformStyle: "preserve-3d",
                  }}
                  onMouseEnter={() => setHoveredCert(cert)}
                  onMouseLeave={() => setHoveredCert(null)}
                >
                  {/* 2. Infinite Floating Wrapper (Runs independently of interactivity) */}
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{
                      duration: 4 + index * 0.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    {/* 3. Snappy Interactive Hover Mechanics (Zero Delay, Spring Physics) */}
                    <motion.a
                      href={cert.link}
                      target="_blank"
                      rel="noreferrer"
                      animate={{
                        opacity: isFaded ? 0.4 : 1,
                        filter: isFaded ? "blur(4px)" : "blur(0px)",
                        scale: isFocused ? 1.08 : 1,
                        rotate: isFocused ? -cert.rotate : 0, // Undoes the outer transform rotation
                        y: isFocused ? -25 : 0,
                        x: isFaded ? (cert.x > 0 ? 30 : -30) : 0, // Faded cards part ways
                        boxShadow: isFocused
                          ? "0px 40px 100px rgba(120,80,255,0.4)"
                          : "0px 20px 40px rgba(0,0,0,0.5)",
                      }}
                      transition={{ 
                        type: "spring", 
                        stiffness: 300, 
                        damping: 25, 
                        mass: 0.8 
                      }}
                      className="group block w-[260px] h-[360px] p-6 rounded-[2rem] bg-white/[0.05] backdrop-blur-xl border border-white/20 text-white relative overflow-hidden"
                    >
                      {/* Shine Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                      {/* Image Silhouette & Blur */}
                      <img
                        src={cert.image}
                        className="absolute inset-0 w-full h-full object-cover opacity-20 blur-sm pointer-events-none"
                        alt=""
                      />

                      {/* Foreground Content */}
                      <div className="relative z-10 flex flex-col h-full pointer-events-none">
                        <div className="flex justify-between items-center mb-4">
                          <div className="p-2 bg-white/10 rounded-xl backdrop-blur-md border border-white/5">
                            <Award className="text-purple-300 drop-shadow-md" size={22} />
                          </div>
                          <span className="text-xs font-mono font-bold bg-black/40 px-3 py-1 rounded-full border border-white/5">{cert.year}</span>
                        </div>

                        <div className="mt-auto bg-black/60 p-5 rounded-2xl backdrop-blur-md border border-white/10 shadow-lg">
                          <h3 className="font-bold text-lg leading-snug tracking-tight mb-1">{cert.title}</h3>
                          <p className="text-xs text-gray-400 font-medium">{cert.org}</p>
                        </div>
                      </div>
                    </motion.a>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>

          {/* RIGHT: PREVIEW */}
          <div className="w-full lg:w-1/2 max-w-[400px] h-[500px]">
            <AnimatePresence mode="wait">
              {hoveredCert ? (
                <motion.div
                  key={hoveredCert.id}
                  initial={{ opacity: 0, x: 40, scale: 0.95 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: 20, scale: 0.95 }}
                  className="w-full h-full bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl p-6"
                >
                  <h3 className="text-xl font-bold mb-2">
                    {hoveredCert.title}
                  </h3>
                  <p className="text-gray-400 mb-4">
                    {hoveredCert.org} • {hoveredCert.year}
                  </p>

                  <div className="h-[350px] overflow-hidden rounded-xl">
                    <motion.img
                      src={hoveredCert.image}
                      alt=""
                      initial={{ scale: 1.1 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.6 }}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </motion.div>
              ) : (
                <div className="h-full flex items-center justify-center text-gray-500">
                  Hover a certificate
                </div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;