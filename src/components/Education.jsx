import { motion } from "framer-motion";
import useNavTrigger from "../hooks/useNavTrigger";

const education = [
  {
    title: "Secondary Education",
    place: "Sri Krishna VIBGYOR School",
    year: "2020",
    score: "99.7%",
  },
  {
    title: "Higher Secondary",
    place: "Narayana Junior College",
    year: "2021 - 2023",
    score: "97.1%",
  },
  {
    title: "B.Tech CSE",
    place: "Lovely Professional University",
    year: "2023 - Present",
    score: "CGPA: 8.4",
    current: true,
  },
];

const Education = () => {
  const refreshKey = useNavTrigger("education");

  return (
    <section
      id="education"
      key={refreshKey}
      className="min-h-screen py-24 scroll-mt-20 flex items-center justify-center bg-gradient-to-b from-black to-[#0f172a] text-white overflow-hidden relative"
    >
      {/* Deep Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-purple-500/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-6xl w-full mx-auto px-6 relative z-10">

        {/* Heading */}
        <motion.div 
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-24 md:mb-32"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">Education</h2>
          <p className="text-gray-400">
            My academic journey
          </p>
        </motion.div>

        {/* Timeline Desktop (Horizontal Alternating) */}
        <div className="hidden md:block relative w-full h-[300px]">
          {/* Base Line */}
          <div className="absolute top-1/2 left-0 w-full h-[2px] bg-white/10 -translate-y-1/2" />
          
          {/* Animated Progress */}
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute top-1/2 left-0 h-[2px] bg-gradient-to-r from-purple-500 to-blue-500 -translate-y-1/2 shadow-[0_0_15px_rgba(168,85,247,0.6)]"
          />

          <div className="relative flex items-center justify-between h-full">
            {education.map((item, index) => (
              <div key={index} className="relative flex flex-col items-center justify-center w-1/3 group">

                {/* Node */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + index * 0.2, type: "spring", stiffness: 200, damping: 15 }}
                  className={`
                    absolute top-1/2 -translate-y-1/2 z-20 w-6 h-6 rounded-full border-4 border-[#0f172a] 
                    ${item.current ? "bg-purple-400 scale-125 shadow-[0_0_20px_rgba(168,85,247,0.8)]" : "bg-gray-500"}
                    transition-colors duration-300 group-hover:bg-white cursor-pointer
                  `}
                />

                {/* Alternating Card */}
                <motion.div
                  initial={{ opacity: 0, y: index % 2 === 0 ? 30 : -30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 + 0.2, duration: 0.5 }}
                  className={`
                    absolute ${index % 2 === 0 ? "top-[60%]" : "bottom-[60%]"} 
                    w-[260px] bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-[2rem] p-6 text-center 
                    shadow-[0_15px_40px_rgba(0,0,0,0.5),inset_0_1px_1px_rgba(255,255,255,0.1)] 
                    hover:bg-white/[0.08] hover:border-white/30 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(100,50,255,0.2)] 
                    transition-all duration-300
                  `}
                >
                  {/* Current Badge for Desktop */}
                  {item.current && (
                    <span className={`absolute ${index % 2 === 0 ? "-top-3" : "-bottom-3"} left-1/2 -translate-x-1/2 inline-block text-[10px] font-bold tracking-widest uppercase text-white bg-gradient-to-r from-purple-500 to-blue-500 px-3 py-1 rounded-full shadow-lg border border-white/20`}>
                      Current
                    </span>
                  )}

                  <h3 className="font-bold text-lg leading-snug mb-2">{item.title}</h3>
                  <p className="text-gray-400 text-sm font-medium">{item.place}</p>
                  <p className="text-gray-500 text-xs mt-2 font-mono">{item.year}</p>

                  <div className="mt-4 inline-block px-4 py-1.5 bg-black/40 border border-white/5 rounded-full text-sm font-mono text-gray-300 shadow-inner">
                    {item.score}
                  </div>
                </motion.div>
                
              </div>
            ))}
          </div>
        </div>

        {/* Timeline Mobile (Vertical) */}
        <div className="md:hidden relative w-full pl-6">
          {/* Vertical Line Base */}
          <div className="absolute top-0 left-0 w-[2px] h-full bg-white/10" />
          
          {/* Vertical Line Progress */}
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute top-0 left-0 w-[2px] bg-gradient-to-b from-purple-500 to-blue-500 shadow-[0_0_15px_rgba(168,85,247,0.6)]"
          />

          <div className="flex flex-col gap-12">
            {education.map((item, index) => (
              <div key={index} className="relative group">
                
                {/* Node */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.2, type: "spring", stiffness: 200 }}
                  className={`
                    absolute top-6 -left-[27px] z-20 w-5 h-5 rounded-full border-[3px] border-[#0f172a]
                    ${item.current ? "bg-purple-400 scale-125 shadow-[0_0_10px_rgba(168,85,247,0.8)]" : "bg-gray-500"}
                  `}
                />

                {/* Card */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2, duration: 0.5 }}
                  className="w-full bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-3xl p-6 shadow-lg relative"
                >
                  <h3 className="font-bold text-lg leading-snug mb-1">{item.title}</h3>
                  <p className="text-gray-400 text-sm font-medium">{item.place}</p>
                  <p className="text-gray-500 text-xs mt-2 font-mono">{item.year}</p>

                  <div className="mt-4 inline-block px-4 py-1.5 bg-black/40 border border-white/5 rounded-full text-sm font-mono text-gray-300">
                    {item.score}
                  </div>

                  {/* Current Badge for Mobile */}
                  {item.current && (
                    <div className="mt-5">
                        <span className="inline-block text-[10px] font-bold tracking-widest uppercase text-white bg-gradient-to-r from-purple-500 to-blue-500 px-3 py-1 rounded-full border border-white/20">
                        Current
                        </span>
                    </div>
                  )}
                </motion.div>
                
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Education;
