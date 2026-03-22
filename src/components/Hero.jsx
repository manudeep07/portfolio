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
      {/* 🌌 Background Gradient (fixed darkness issue) */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.25),rgba(15,23,42,0.95))]" />

      {/* 🌌 Glow Layer (fake depth / 3D feel) */}
      <div className="absolute top-1/2 left-1/2 w-[500px] h-[500px] bg-purple-500/10 blur-[120px] rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">
          
          {/* LEFT CONTENT */}
          <div className="md:w-1/2">
            
            {/* 🔥 Heading */}
            <motion.h1
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={1}
              className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 leading-[1.1]"
            >
              <span className="text-blue-300 text-lg block mb-3">
                Hi, I am
              </span>

              <span className="text-white">Narasingu Manudeep</span>

              <br />

            </motion.h1>

            {/* 🔥 Description */}
            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={2}
              className="text-gray-400 text-lg md:text-xl max-w-xl mb-10 leading-relaxed"
            >
              Building digital experiences with precision and intent.  
              I engineer scalable, high-performance web applications using the MERN stack,
              focusing on{" "}
              <span className="text-gray-200 font-medium">
                seamless user experience
              </span>{" "}
              and{" "}
              <span className="text-gray-200 font-medium">
                clean architecture
              </span>.
            </motion.p>

            {/* 🔥 Buttons */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={3}
              className="flex flex-col sm:flex-row items-center sm:items-center justify-start gap-4 sm:gap-6"
            >
              <a
                href="#projects"
                className="group relative px-8 py-4 w-full sm:w-auto bg-white text-black font-bold rounded-full flex justify-center items-center gap-2 hover:scale-105 active:scale-95 transition-transform duration-300 shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)]"
              >
                View Projects
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#contact"
                className="px-8 py-4 w-full sm:w-auto border border-white/10 text-gray-300 rounded-full text-center hover:bg-white/10 hover:text-white hover:scale-105 active:scale-95 transition-all duration-300 backdrop-blur-sm"
              >
                Contact Me
              </a>
            </motion.div>

            {/* 🔥 Social Icons */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={4}
              className="mt-12 flex items-center justify-center md:justify-start gap-6 text-gray-500"
            >
              <a href="https://github.com/manudeep07" target="_blank" className="hover:text-white hover:-translate-y-1 hover:scale-110 transition-all duration-300">
                <Github size={24} />
              </a>

              <a href="https://linkedin.com/in/manudeep07" target="_blank" className="hover:text-[#0A66C2] hover:-translate-y-1 hover:scale-110 transition-all duration-300">
                <Linkedin size={24} />
              </a>

              <a href="mailto:manudeep1000@gmail.com" className="hover:text-[#EA4335] hover:-translate-y-1 hover:scale-110 transition-all duration-300">
                <Mail size={24} />
              </a>
            </motion.div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="md:w-1/2 flex justify-center relative">
            
            {/* Glow */}
            <div className="absolute w-80 h-80 bg-purple-500/20 blur-[120px] rounded-full" />

            <div className="relative w-64 h-64 md:w-96 md:h-96">
              {/* Floating Image */}
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="w-full h-full rounded-full overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl shadow-[0_0_60px_rgba(100,100,255,0.2)]"
              >
                <img
                  src={profileImg}
                  alt="Manudeep"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>

            {/* Name */}
            <p className="absolute -bottom-10 text-white/50 font-semibold uppercase tracking-[0.1em] hover:text-white hover:tracking-[0.25em] transition-all duration-500 cursor-default">
              Manudeep Narasingu
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;