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
  { name: "Express", icon: <SiExpress />, x: -160, y: 150 },
  { name: "JavaScript", icon: <SiJavascript />, x: 100, y: -60 },
  { name: "Java", icon: <FaJava />, x: -120, y: -80 },
  { name: "C", icon: <SiC />, x: -180, y: 60 },
  { name: "C++", icon: <SiCplusplus />, x: 140, y: 100 },
  { name: "PHP", icon: <SiPhp />, x: 0, y: 140 },
  { name: "MySQL", icon: <SiMysql />, x: -100, y: 200 },
  { name: "Git", icon: <FaGitAlt />, x: 40, y: -190 },
  { name: "GitHub", icon: <FaGithub />, x: 220, y: -40 },
  { name: "Figma", icon: <FaFigma />, x: -220, y: -120 },
  { name: "Tailwind", icon: <SiTailwindcss />, x: 80, y: 180 },
  { name: "Bootstrap", icon: <SiBootstrap />, x: -200, y: -10 },
  {name: "Docker", icon: <FaDocker />, x: 300, y: -100},
];

const Skills = () => {
  const refreshKey = useNavTrigger('skills');

  return (
    <section id="skills" key={refreshKey} className="min-h-screen flex items-center justify-center relative bg-gradient-to-b from-black to-[#0f172a] overflow-hidden">
      
      {/* 🌌 Background Glow */}
      <div className="absolute w-[600px] h-[600px] bg-purple-500/10 blur-[140px] rounded-full" />

      {/* Heading */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true, amount: 0.8 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="absolute top-20 text-center"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-white">
          Skills & Expertise
        </h2>
        <p className="text-gray-400 mt-4">
          Technologies I work with
        </p>
      </motion.div>

      {/* Floating Skills */}
      <div className="relative w-[650px] h-[650px] flex items-center justify-center">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 0, y: 0 }}
            whileInView={{
              opacity: 1,
              x: skill.x,
              y: skill.y,
            }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
              delay: index * 0.05,
              duration: 1,
              ease: "easeOut"
            }}
            className="absolute"
          >
            {/* Floating Animation */}
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{
                duration: 4 + index * 0.2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              whileHover={{
                scale: 1.2,
                boxShadow: "0px 0px 30px rgba(255,255,255,0.2)",
              }}
              className="flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 text-sm text-white cursor-pointer transition-all"
            >
              <span className="text-lg">{skill.icon}</span>
              {skill.name}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;