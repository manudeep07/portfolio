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
      className="py-24 bg-section text-white relative overflow-hidden flex items-center justify-center"
    >
      {/* Deep Glow Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-red-600/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-6xl w-full mx-auto px-6 md:px-16 relative z-10 flex flex-col">

        {/* Heading */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="h-[2px] w-8 bg-red-600 rounded-full" />
            <span className="text-[10px] uppercase font-bold tracking-[0.3em] text-red-500">
              Academic Journey
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-black text-white uppercase italic tracking-tighter">
            Education <span className="text-neutral-700">& Bio</span>
          </h2>
        </motion.div>

        {/* Timeline Desktop (Horizontal Alternating) */}
        <div className="hidden md:flex relative w-full h-[350px] items-center justify-between mt-8">
          
          {/* Base Horizontal Line */}
          <div className="absolute top-1/2 left-0 w-full h-[2px] bg-white/5 -translate-y-1/2" />
          
          {/* Animated Horizontal Progress */}
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
            className="absolute top-1/2 left-0 h-[2px] bg-red-600 -translate-y-1/2 shadow-[0_0_15px_rgba(239,68,68,0.5)] origin-left"
          />

          {education.map((item, index) => {
            const isDown = index % 2 === 0;

            return (
              <div key={index} className="relative h-full flex flex-col items-center justify-center w-1/3 group">
                
                {/* Node (Dot) */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.4 + index * 0.1 }}
                  className={`w-4 h-4 rounded-sm border-[2px] border-section z-20 relative cursor-pointer
                    ${item.current 
                      ? "bg-red-500 scale-[1.3] shadow-[0_0_20px_rgba(239,68,68,0.8)]" 
                      : "bg-neutral-800"
                    }
                    group-hover:bg-white group-hover:shadow-[0_0_20px_rgba(255,255,255,0.8)] transition-all duration-300
                  `}
                >
                  {item.current && (
                    <>
                      <div className="absolute inset-0 rounded-sm animate-ping bg-red-500/40" />
                      <div className={`absolute ${isDown ? "bottom-8" : "top-8"} left-1/2 -translate-x-1/2`}>
                        <span className="text-[9px] font-black tracking-widest uppercase text-red-500 italic whitespace-nowrap">
                          Active
                        </span>
                      </div>
                    </>
                  )}
                </motion.div>

                {/* Vertical Connector Line */}
                <motion.div
                  initial={{ height: 0 }}
                  whileInView={{ height: 40 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.6 + index * 0.1, ease: "easeOut" }}
                  className={`absolute w-[2px] bg-red-600/30 ${
                    isDown 
                      ? "top-[calc(50%+8px)] origin-top" 
                      : "bottom-[calc(50%+8px)] origin-bottom"
                  } z-10 transition-all duration-300 group-hover:bg-red-600 group-hover:h-[48px]`}
                />

                {/* Card */}
                <motion.div
                  initial={{ opacity: 0, y: isDown ? 20 : -20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.7 + index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className={`absolute ${
                    isDown ? "top-[calc(50%+58px)]" : "bottom-[calc(50%+58px)]"
                  } w-[280px] z-30 bg-card border border-white/5 rounded-xl p-6 text-left shadow-2xl shadow-black/50 hover:border-red-500/30 hover:scale-[1.02] transition-all duration-300`}
                >
                  <div className="flex flex-col gap-2">
                    <h3 className="font-black text-sm uppercase italic tracking-tighter text-white">{item.title}</h3>
                    <p className="text-red-500 text-[10px] font-bold uppercase tracking-widest">{item.place}</p>
                    
                    <div className="flex justify-between items-center mt-4 pt-4 border-t border-white/5">
                      <p className="text-neutral-500 text-[10px] font-bold uppercase tracking-widest">{item.year}</p>
                      <div className="px-3 py-1 bg-red-500/5 border border-red-500/10 rounded-sm text-[10px] font-black text-red-500 uppercase tracking-widest">
                        {item.score}
                      </div>
                    </div>
                  </div>
                </motion.div>
                
              </div>
            );
          })}
        </div>

        {/* Timeline Mobile (Vertical Stacked) */}
        <div className="md:hidden relative w-full pt-10">
          
          {/* Base Vertical Line */}
          <div className="absolute top-0 left-[20px] w-[2px] h-full bg-white/5" />
          
          {/* Animated Vertical Progress */}
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute top-0 left-[20px] w-[2px] bg-red-600 shadow-[0_0_15px_rgba(239,68,68,0.5)] origin-top"
          />

          <div className="flex flex-col gap-12 pl-[48px] pr-2 pb-6">
            {education.map((item, index) => (
              <div key={index} className="relative group">
                
                {/* Node (Dot) */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1, type: "spring", stiffness: 200 }}
                  className={`absolute top-[24px] -left-[35px] z-20 w-4 h-4 rounded-sm border-[2px] border-section
                    ${item.current 
                      ? "bg-red-500 scale-[1.3] shadow-[0_0_15px_rgba(239,68,68,0.8)]" 
                      : "bg-neutral-800"
                    }
                  `}
                >
                  {item.current && (
                    <div className="absolute inset-0 rounded-sm animate-ping bg-red-500/50" />
                  )}
                </motion.div>

                {/* Card */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + index * 0.1, duration: 0.6 }}
                  className="w-full bg-card border border-white/5 rounded-xl p-6 shadow-2xl relative"
                >
                  <h3 className="font-black text-sm uppercase italic tracking-tighter text-white mb-1">{item.title}</h3>
                  <p className="text-red-500 text-[10px] font-bold uppercase tracking-widest mb-4">{item.place}</p>
                  
                  <div className="flex flex-wrap gap-4 items-center justify-between mt-4 pt-4 border-t border-white/5">
                    <p className="text-neutral-500 text-[10px] font-bold uppercase tracking-widest">{item.year}</p>
                    <div className="px-3 py-1 bg-red-500/5 border border-red-500/10 rounded-sm text-[10px] font-black text-red-500">
                      {item.score}
                    </div>
                  </div>
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

