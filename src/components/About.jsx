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
      className="min-h-screen flex items-center pt-20 pb-12 bg-gradient-to-b from-[#0f172a] to-black text-white relative overflow-hidden"
    >
      {/* 🌌 Soft Gradient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(120,119,198,0.15),transparent)] pointer-events-none"></div>

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
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
              className="flex items-center gap-3 mb-6"
            >
              <span className="h-px bg-white/20 w-12"></span>
              <h2 className="text-sm font-semibold tracking-[0.2em] text-gray-400 uppercase">
                About Me
              </h2>
            </motion.div>

            {/* Heading */}
            <motion.h3
              variants={fadeUp}
              custom={2}
              className="text-4xl md:text-5xl font-bold mb-8 tracking-tight"
            >
              From curiosity to engineering scalable systems.
            </motion.h3>

            {/* Content */}
            <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
              <motion.p variants={fadeUp} custom={3}>
                I’m Narasingu Manudeep, a Computer Science undergraduate from
                Nellore, Andhra Pradesh, currently pursuing my Bachelor of
                Technology at Lovely Professional University with a strong
                academic foundation.
              </motion.p>

              <motion.p variants={fadeUp} custom={4}>
                I am passionate about full-stack development and problem
                solving, with hands-on experience in technologies like React,
                Node.js, Express, and MongoDB. I’ve built real-world
                applications such as a Virtual Classroom Platform and a
                Learning Management System, gaining practical experience in
                scalable system design.
              </motion.p>

              <motion.p variants={fadeUp} custom={5}>
                Alongside development, I have solved over 200 coding problems,
                strengthening my logical thinking and consistency. I’m a quick
                learner, collaborative team player, and constantly exploring
                ways to grow as a software engineer.
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
                className="bg-white/[0.03] p-8 rounded-3xl border border-white/[0.08] backdrop-blur-xl hover:bg-white/[0.06] hover:border-white/20 transition-all duration-500 group-hover/list:opacity-50 hover:!opacity-100"
              >
                <div className="p-3 bg-white/10 rounded-xl w-fit mb-6">
                  <Code size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-2">Frontend</h3>
                <p className="text-gray-400 text-sm">
                  Building responsive, high-performance interfaces with React and modern UI systems.
                </p>
              </motion.div>

              {/* BACKEND */}
              <motion.div
                variants={fadeUp}
                custom={4}
                className="bg-white/[0.03] p-8 rounded-3xl border border-white/[0.08] backdrop-blur-xl hover:bg-white/[0.06] hover:border-white/20 transition-all duration-500 sm:mt-12 group-hover/list:opacity-50 hover:!opacity-100"
              >
                <div className="p-3 bg-white/10 rounded-xl w-fit mb-6">
                  <Terminal size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-2">Backend</h3>
                <p className="text-gray-400 text-sm">
                  Designing scalable APIs and asynchronous architectures using Node.js and Express.
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