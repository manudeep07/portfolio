import { motion } from "framer-motion";
import { Code, Terminal, Cpu } from "lucide-react";
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

const About = () => {
  const refreshKey = useNavTrigger("about");

  return (
    <section
      id="about"
      className="py-24 bg-section text-white relative overflow-hidden"
    >
      {/* 🌌 Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>

      <div className="container mx-auto px-6 md:px-16 max-w-6xl relative z-10">
        <motion.div
          key={refreshKey}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.3, once: true }}
          className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24"
        >
          {/* LEFT TEXT */}
          <div className="lg:w-1/2">
            
            {/* Section Label */}
            <motion.div
              variants={fadeUp}
              custom={1}
              className="flex items-center gap-4 mb-8"
            >
              <div className="h-[2px] w-8 bg-red-600 rounded-full" />
              <h2 className="text-[10px] uppercase font-bold tracking-[0.3em] text-red-500">
                Performance & Intent
              </h2>
            </motion.div>

            {/* Heading */}
            <motion.h3
              variants={fadeUp}
              custom={2}
              className="text-4xl md:text-5xl lg:text-6xl font-black mb-10 leading-[1] uppercase italic tracking-tighter"
            >
              From <span className="text-neutral-700">Curiosity</span> <br />
              to Engineering <br />
              Scalable Systems.
            </motion.h3>

            {/* Content */}
            <div className="space-y-6 text-neutral-400 text-lg leading-relaxed tracking-tight">
              <motion.p variants={fadeUp} custom={3}>
                I’m Narasingu Manudeep, a Computer Science undergraduate with a drive for high-performance engineering. Currently pursuing my Bachelor of Technology at Lovely Professional University.
              </motion.p>

              <motion.p variants={fadeUp} custom={4}>
                I specialize in <span className="text-white font-bold italic">Full-Stack Development</span>, architecting real-world applications with React, Node.js, and MongoDB. My focus is on writing clean, efficient code that powers seamless digital experiences.
              </motion.p>

              <motion.p variants={fadeUp} custom={5}>
                With over <span className="text-red-500 font-black">200+</span> coding problems solved, I possess a sharp logical foundation and an relentless drive for optimization.
              </motion.p>
            </div>
          </div>

          {/* RIGHT CARDS */}
          <div className="lg:w-1/2 w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 group/list">

              {/* FRONTEND */}
              <motion.div
                variants={fadeUp}
                custom={3}
                className="bg-card p-10 rounded-xl border border-white/5 hover:border-red-500/30 transition-all duration-500 group-hover/list:opacity-50 hover:!opacity-100 shadow-2xl shadow-black/50"
              >
                <div className="p-3 bg-red-500/10 text-red-500 rounded-sm w-fit mb-8">
                  <Code size={24} />
                </div>
                <h3 className="text-xs uppercase font-black tracking-widest mb-4 italic text-white group-hover:text-red-500 transition-colors">Frontend</h3>
                <p className="text-neutral-500 text-sm leading-relaxed tracking-tight">
                  High-speed, responsive interfaces built with React and precision styling systems.
                </p>
              </motion.div>

              {/* BACKEND */}
              <motion.div
                variants={fadeUp}
                custom={4}
                className="bg-card p-10 rounded-xl border border-white/5 hover:border-red-500/30 transition-all duration-500 sm:mt-12 group-hover/list:opacity-50 hover:!opacity-100 shadow-2xl shadow-black/50"
              >
                <div className="p-3 bg-red-500/10 text-red-500 rounded-sm w-fit mb-8">
                  <Terminal size={24} />
                </div>
                <h3 className="text-xs uppercase font-black tracking-widest mb-4 italic text-white group-hover:text-red-500 transition-colors">Backend</h3>
                <p className="text-neutral-500 text-sm leading-relaxed tracking-tight">
                  Scalable API architectures and robust server-side logic powered by Node.js.
                </p>
              </motion.div>

            </div>
          </div>
        </motion.div>
      </div>

    </section>
  );
};

export default About;