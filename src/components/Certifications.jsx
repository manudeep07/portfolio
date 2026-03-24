import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";
import useNavTrigger from "../hooks/useNavTrigger";
import software from "../assets/software.png"
import nptel from "../assets/nptel.png"
import bits from "../assets/bitsandbytes.png"
import master from "../assets/mastergenerativeai.png"
const certificates = [
  {
    id: 1,
    title: "Master Generative AI & Tools",
    org: "Udemy",
    year: "2025",
    link: "https://www.udemy.com/certificate/UC-b478df37-62ba-4fff-8d94-f4699465cdbe/",
    image:
      master,
    x: -180,
    y: -30,
    rotate: -12,
  },
  {
    id: 2,
    title: "Bits and Bytes of Computer Networking",
    org: "Coursera",
    year: "2024",
    link: "https://www.coursera.org/account/accomplishments/verify/VO6M465PCJL1",
    image:
      bits,
    x: -60,
    y: 20,
    rotate: -5,
  },
  {
    id: 3,
    title: "Software Development Processes and Methodologies",
    org: "Coursera",
    year: "2024",
    link: "https://www.coursera.org/account/accomplishments/verify/DLGZ8QKAW4WS",
    image:
      software,
    x: 60,
    y: -10,
    rotate: 6,
  },
  {
    id: 4,
    title: "Social Networks",
    org: "NPTEL",
    year: "2024",
    link: "https://archive.nptel.ac.in/noc/Ecertificate/?q=NPTEL25CS65S14750003204445075",
    image:
      nptel,
    x: 180,
    y: 30,
    rotate: 12,
  },
];

const Certifications = () => {
  const refreshKey = useNavTrigger("certifications");
  const [hoveredCert, setHoveredCert] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <section
      id="certifications"
      key={refreshKey}
      className="py-24 flex items-center justify-center bg-section relative overflow-hidden"
    >
      {/* 🌌 Background Glow */}
      <div className="absolute w-[800px] h-[800px] bg-red-600/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 md:px-16 max-w-6xl relative z-10 flex flex-col">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="h-[2px] w-8 bg-red-600 rounded-full" />
            <span className="text-[10px] uppercase font-bold tracking-[0.3em] text-red-500">
              Certifications
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-black text-white uppercase italic tracking-tighter">
            Verified <span className="text-neutral-700">Certificates</span>
          </h2>
        </motion.div>

        <div className="flex flex-col lg:flex-row w-full items-center justify-center gap-12 lg:gap-24">

          {/* LEFT: CARDS */}
          <div className={`relative w-full lg:w-1/2 ${isMobile ? 'flex flex-col gap-6 items-center' : 'h-[450px] flex items-center justify-center perspective-[1200px]'}`}>
            {certificates.map((cert, index) => {
              const isFocused = hoveredCert?.id === cert.id;
              const isFaded = hoveredCert && !isFocused;

              return (
                <motion.div
                  key={cert.id}
                  initial={{ opacity: 0, x: isMobile ? 0 : -100, y: isMobile ? 0 : 50, rotate: isMobile ? 0 : -20, scale: 0.9 }}
                  whileInView={{ 
                    opacity: 1, 
                    x: isMobile ? 0 : cert.x, 
                    y: isMobile ? 0 : cert.y, 
                    rotate: isMobile ? 0 : cert.rotate, 
                    scale: 1 
                  }}
                  viewport={{ once: true }}
                  transition={{
                    delay: index * 0.1,
                    duration: 0.8,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className={isMobile ? 'relative w-full max-w-sm' : 'absolute'}
                  style={{
                    zIndex: isFocused ? 50 : index + 10,
                  }}
                  onMouseEnter={() => !isMobile && setHoveredCert(cert)}
                  onMouseLeave={() => !isMobile && setHoveredCert(null)}
                  onClick={() => isMobile && setHoveredCert(hoveredCert?.id === cert.id ? null : cert)}
                >
                  {/* Infinite Floating Wrapper */}
                  <motion.div
                    animate={isMobile ? { y: [0, -4, 0] } : { y: [0, -8, 0] }}
                    transition={{
                      duration: 4 + index * 0.4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    {/* Interactive Hover Mechanics */}
                    <motion.div
                      animate={{
                        opacity: isFaded ? 0.3 : 1,
                        scale: isFocused ? 1.05 : 1,
                        rotate: isFocused && !isMobile ? -cert.rotate : 0,
                        y: isFocused ? -10 : 0,
                        boxShadow: isFocused
                          ? "0px 30px 60px rgba(239,68,68,0.2)"
                          : "0px 10px 30px rgba(0,0,0,0.5)",
                      }}
                      transition={{ 
                        duration: 0.4,
                        ease: "easeOut"
                      }}
                      className="group block w-full aspect-[3/4.2] md:w-[240px] md:h-[340px] p-6 rounded-xl bg-card border border-white/5 text-white relative overflow-hidden cursor-pointer"
                    >
                      {/* Image Silhouette */}
                      <img
                        src={cert.image}
                        className="absolute inset-0 w-full h-full object-cover opacity-10 transition-opacity group-hover:opacity-20 pointer-events-none"
                        alt=""
                      />

                      {/* Foreground Content */}
                      <div className="relative z-10 flex flex-col h-full pointer-events-none">
                        <div className="flex justify-between items-center mb-4">
                          <div className="p-2 bg-red-500/10 rounded-sm border border-red-500/10">
                            <Award className="text-red-500" size={18} />
                          </div>
                          <span className="text-[10px] font-bold bg-black/40 px-2 py-1 rounded-sm border border-white/5 tracking-widest">{cert.year}</span>
                        </div>

                        <div className="mt-auto bg-black/80 p-5 rounded-lg border border-white/5 backdrop-blur-md">
                          <h3 className="font-black text-sm uppercase italic tracking-tighter mb-1 leading-tight">{cert.title}</h3>
                          <p className="text-[10px] text-neutral-500 font-bold uppercase tracking-widest">{cert.org}</p>
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>

          {/* RIGHT: PREVIEW */}
          <div className={`w-full lg:w-1/2 max-w-[450px] ${isMobile ? 'h-auto mt-8' : 'h-[550px]'}`}>
            <AnimatePresence mode="wait">
              {hoveredCert ? (
                <motion.div
                  key={hoveredCert.id}
                  initial={{ opacity: 0, x: isMobile ? 0 : 20, y: isMobile ? 20 : 0 }}
                  animate={{ opacity: 1, x: 0, y: 0 }}
                  exit={{ opacity: 0, x: isMobile ? 0 : 10, y: isMobile ? 10 : 0 }}
                  transition={{ duration: 0.4 }}
                  className="w-full bg-card border border-white/5 rounded-xl p-6 md:p-8 flex flex-col shadow-2xl shadow-black/50"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="h-4 w-px bg-red-600" />
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-red-500">Certificate Details</span>
                  </div>
                  
                  <h3 className="text-xl md:text-2xl font-black uppercase italic tracking-tighter mb-2 text-left">
                    {hoveredCert.title}
                  </h3>
                  <p className="text-neutral-500 text-[10px] md:text-xs font-bold uppercase tracking-widest mb-8 text-left">
                    {hoveredCert.org} • {hoveredCert.year}
                  </p>

                  <div className="aspect-video md:flex-1 overflow-hidden rounded-lg border border-white/5 group relative mb-6">
                    <motion.img
                      src={hoveredCert.image}
                      alt=""
                      initial={{ scale: 1.1 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.8 }}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                       <span className="text-[9px] font-bold uppercase tracking-[0.2em] flex items-center gap-2">Verify <ExternalLink size={12} className="text-red-500" /></span>
                    </div>
                  </div>

                  <a
                    href={hoveredCert.link}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full py-3 bg-red-600 hover:bg-red-700 text-white text-[10px] font-black uppercase tracking-[0.2em] text-center rounded-sm transition-colors"
                  >
                    Launch Verification
                  </a>
                </motion.div>
              ) : (
                !isMobile && (
                  <div className="h-full flex flex-col items-center justify-center text-center p-12 bg-card/30 rounded-xl border border-dashed border-white/5">
                    <div className="p-4 bg-white/5 rounded-full mb-4">
                      <Award size={32} className="text-neutral-700" />
                    </div>
                    <p className="text-[10px] uppercase font-bold tracking-[0.2em] text-neutral-600">
                      Hover a certificate to launch preview
                    </p>
                  </div>
                )
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Certifications;