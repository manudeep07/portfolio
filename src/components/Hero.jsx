import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import profileImg from "../assets/formalpic copy.png";
import useNavTrigger from "../hooks/useNavTrigger";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

const Hero = () => {
  const refreshKey = useNavTrigger('home');

  return (
    <section
      id="home"
      key={refreshKey}
      className="min-h-screen flex items-center pt-20 relative overflow-hidden scroll-mt-20"
    >
      {/* 🌌 Background Gradient */}
      <div className="absolute inset-0 bg-[#050505]" />

      {/* 🌌 Glow Layer */}
      <div className="absolute top-1/2 left-1/2 w-[500px] h-[500px] bg-red-600/5 blur-[120px] rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

      <div className="container mx-auto px-6 md:px-16 max-w-6xl relative z-10">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">
          
          {/* LEFT CONTENT */}
          <div className="md:w-3/5">
            
            {/* 🔥 Heading */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={1}
              className="mb-8"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="h-[2px] w-8 bg-red-600 rounded-full" />
                <span className="text-[10px] uppercase font-bold tracking-[0.3em] text-red-500">
                  Engineer & Designer
                </span>
              </div>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-[0.9] tracking-tighter uppercase italic">
                Narasingu <br />
                <span className="text-neutral-700">Manudeep</span>
              </h1>
            </motion.div>

            {/* 🔥 Description */}
            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={2}
              className="text-neutral-400 text-lg md:text-xl max-w-xl mb-12 leading-relaxed tracking-tight"
            >
              Building high-octane digital experiences with precision.  
              I engineer scalable, high-performance web applications using the MERN stack,
              focusing on{" "}
              <span className="text-white font-bold italic">
                seamless UX
              </span>{" "}
              and{" "}
              <span className="text-white font-bold italic">
                clean architecture
              </span>.
            </motion.p>

            {/* 🔥 Buttons */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={3}
              className="flex flex-col sm:flex-row items-center justify-start gap-4 sm:gap-8"
            >
              <a
                href="#projects"
                className="group relative px-10 py-4 w-full sm:w-auto bg-red-600 text-white font-black text-[12px] uppercase tracking-[0.2em] rounded-sm flex justify-center items-center gap-3 hover:bg-red-700 active:scale-95 transition-all duration-300 shadow-xl shadow-red-600/20"
              >
                Launch Projects
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#contact"
                className="px-10 py-4 w-full sm:w-auto border border-white/10 text-neutral-300 font-bold text-[12px] uppercase tracking-[0.2em] rounded-sm text-center hover:bg-white/5 hover:text-white active:scale-95 transition-all duration-300"
              >
                Contact
              </a>
            </motion.div>

            {/* 🔥 Social Icons */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={4}
              className="mt-16 flex items-center justify-center md:justify-start gap-8"
            >
              <a href="https://github.com/manudeep07" target="_blank" className="text-neutral-600 hover:text-white transition-colors">
                <Github size={20} />
              </a>

              <a href="https://linkedin.com/in/manudeep07" target="_blank" className="text-neutral-600 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>

              <a href="mailto:manudeep1000@gmail.com" className="text-neutral-600 hover:text-white transition-colors">
                <Mail size={20} />
              </a>
            </motion.div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="md:w-2/5 flex justify-center relative">
            
            <div className="relative w-72 h-72 md:w-[450px] md:h-[450px]">
              {/* Image Frame */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                className="w-full h-full rounded-2xl overflow-hidden border border-white/5 bg-[#0A0A0A] shadow-2xl grayscale hover:grayscale-0 transition-all duration-1000"
              >
                <img
                  src={profileImg}
                  alt="Manudeep"
                  className="w-full h-full object-cover scale-110"
                />
              </motion.div>
              
              {/* Decorative Corner */}
              <div className="absolute -top-4 -right-4 w-24 h-24 border-t-4 border-r-4 border-red-600/30 rounded-tr-3xl" />
              <div className="absolute -bottom-4 -left-4 w-24 h-24 border-b-4 border-l-4 border-white/10 rounded-bl-3xl" />
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Hero;