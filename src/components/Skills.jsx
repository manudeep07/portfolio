import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import useNavTrigger from "../hooks/useNavTrigger";
import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaJava,
  FaFigma,
  FaDocker,
} from "react-icons/fa";

import {
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiTailwindcss,
  SiExpress,
  SiBootstrap,
  SiPhp,
  SiC,
  SiCplusplus,
} from "react-icons/si";

const skills = [
  { name: "React", icon: <FaReact />, x: -80, y: -140 },
  { name: "Node.js", icon: <FaNodeJs />, x: 140, y: -120 },
  { name: "MongoDB", icon: <SiMongodb />, x: 200, y: 40 },
  { name: "Express", icon: <SiExpress />, x: -170, y: 150 },
  { name: "JavaScript", icon: <SiJavascript />, x: 100, y: -60 },
  { name: "Java", icon: <FaJava />, x: -120, y: -80 },
  { name: "C", icon: <SiC />, x: -180, y: 60 },
  { name: "C++", icon: <SiCplusplus />, x: 140, y: 100 },
  { name: "PHP", icon: <SiPhp />, x: 0, y: 120 },
  { name: "MySQL", icon: <SiMysql />, x: -100, y: 200 },
  { name: "Git", icon: <FaGitAlt />, x: 40, y: -190 },
  { name: "GitHub", icon: <FaGithub />, x: 250, y: -20 },
  { name: "Figma", icon: <FaFigma />, x: -240, y: -140 },
  { name: "Tailwind", icon: <SiTailwindcss />, x: 80, y: 180 },
  { name: "Bootstrap", icon: <SiBootstrap />, x: -200, y: -10 },
  {name: "Docker", icon: <FaDocker />, x: 300, y: -100},
];

const Skills = () => {
  const refreshKey = useNavTrigger('skills');
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section id="skills" key={refreshKey} className="py-20 bg-background relative overflow-hidden scroll-mt-28">
      
      {/* 🌌 Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-600/5 blur-[140px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 md:px-16 max-w-6xl relative z-10">
        {/* Heading */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="h-[2px] w-8 bg-red-600 rounded-full" />
            <span className="text-[10px] uppercase font-bold tracking-[0.3em] text-red-500">
              Tech Stack
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white uppercase italic tracking-tighter">
            Skills & <span className="text-neutral-700">Expertise</span>
          </h2>
        </motion.div>
 
        {/* Floating Skills Container */}
        <div className={`relative ${isMobile ? 'flex flex-wrap justify-center gap-3 h-auto' : 'h-[500px] w-full flex items-center justify-center'}`}>
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 0, y: 0 }}
              whileInView={{
                opacity: 1,
                x: isMobile ? 0 : skill.x,
                y: isMobile ? 0 : skill.y,
              }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.03,
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1]
              }}
              className={isMobile ? 'relative' : 'absolute'}
            >
              {/* Floating Animation */}
              <motion.div
                animate={isMobile ? { y: [0, -5, 0] } : { y: [0, -10, 0] }}
                transition={{
                  duration: 4 + index * 0.1,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                whileHover={{
                  scale: 1.1,
                  y: -5,
                }}
                className="group flex items-center gap-3 px-4 md:px-6 py-2 md:py-3 rounded-sm bg-card border border-white/5 text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-neutral-400 hover:text-white hover:border-red-500/50 hover:bg-red-500/5 transition-all cursor-pointer shadow-xl shadow-black/50"
              >
                <span className="text-base md:text-xl text-red-500 group-hover:scale-110 transition-transform">{skill.icon}</span>
                {skill.name}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

    </section>
  );
};

export default Skills;