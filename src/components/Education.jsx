import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Calendar, MapPin, GraduationCap } from 'lucide-react';
import { blurFadeIn, staggerContainer } from '../animations/variants';
import useMobile from '../hooks/useMobile';
import useNavTrigger from '../hooks/useNavTrigger';

const educationData = [
    {
        title: "Secondary School Certificate",
        institution: "High School",
        location: "K.V.T High School, Rajahmundry",
        duration: "2019 - 2020",
        score: "Score: 9.8 GPA"
    },
    {
        title: "Intermediate (MPC)",
        institution: "Junior College",
        location: "Tirumala Junior College, Rajahmundry",
        duration: "2020 - 2022",
        score: "Score: 890 Marks"
    },
    {
        title: "B.Tech in Computer Science",
        institution: "University",
        location: "S R K R Engineering College, Bhimavaram",
        duration: "2022 - 2026",
        score: "Score: 8.85 CGPA",
        current: true
    }
];

const Education = () => {
    const isMobile = useMobile();
    const containerRef = useRef(null);
    const refreshKey = useNavTrigger('education');
    const isInView = useInView(containerRef, { once: true, amount: 0.2 });

    return (
        <section id="education" className="py-24 scroll-mt-20 bg-black text-white relative">
            <div className="container mx-auto px-6 max-w-6xl relative z-10" ref={containerRef}>
                <motion.div
                    key={refreshKey}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ amount: 0.1, once: true }}
                    variants={staggerContainer}
                    className="flex flex-col"
                >
                    <div className="mb-20 text-center">
                        <motion.h2 variants={blurFadeIn} className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
                            Education
                        </motion.h2>
                        <motion.p variants={blurFadeIn} className="text-gray-400 text-lg max-w-2xl mx-auto font-light">
                            Academic timeline mapping formal systems architecture and logic foundations.
                        </motion.p>
                    </div>

                    <div className="relative w-full max-w-5xl mx-auto mt-10">
                        {/* Background Lines */}
                        <div className="absolute top-1/2 left-0 w-full h-px bg-white/5 -translate-y-1/2 hidden md:block"></div>
                        <div className="absolute top-0 left-8 w-px h-full bg-white/5 md:hidden"></div>

                        {/* Animated Lines */}
                        <motion.div 
                            initial={{ width: 0 }}
                            animate={{ width: isInView && !isMobile ? '100%' : 0 }}
                            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
                            className="absolute top-1/2 left-0 h-px bg-white/20 -translate-y-1/2 hidden md:block" 
                        />
                        <motion.div 
                            initial={{ height: 0 }}
                            animate={{ height: isInView && isMobile ? '100%' : 0 }}
                            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
                            className="absolute top-0 left-8 w-px bg-white/20 md:hidden" 
                        />

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-6 relative z-10">
                            {educationData.map((item, index) => {
                                const isTop = index % 2 === 0;

                                return (
                                    <motion.div 
                                        key={index}
                                        variants={blurFadeIn}
                                        className={`flex flex-col ${isMobile ? 'ml-16' : 'items-center'} relative group`}
                                    >
                                        {/* Timeline Node */}
                                        <div className={`
                                            absolute md:fixed z-20 w-4 h-4 rounded-full border-2 border-[#121212] bg-[#333] transition-colors duration-500
                                            group-hover:bg-white
                                            ${isMobile ? '-left-16 top-6 -translate-x-1/2' : 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'}
                                            ${item.current ? '!bg-white !border-black shadow-[0_0_15px_rgba(255,255,255,0.4)]' : ''}
                                        `}></div>

                                        {/* Connector Line mapping bounding boxes to the timeline node */}
                                        <div className={`
                                            absolute bg-white/10 hidden md:block transition-all duration-500 group-hover:bg-white/30
                                            ${isTop 
                                                ? 'left-1/2 w-px h-10 bottom-[calc(50%+8px)] -translate-x-1/2' 
                                                : 'left-1/2 w-px h-10 top-[calc(50%+8px)] -translate-x-1/2'}
                                        `}></div>

                                        <div className={`
                                            absolute bg-white/10 md:hidden transition-all duration-500 group-hover:bg-white/30
                                            -left-16 w-8 h-px top-[32px]
                                        `}></div>

                                        {/* Education Card */}
                                        <div className={`
                                            w-full bg-white/[0.02] p-8 rounded-3xl border border-white/[0.05] 
                                            shadow-[inset_0_1px_1px_rgba(255,255,255,0.02)] transition-all duration-500 
                                            hover:border-white/10 hover:bg-white/[0.04]
                                            ${!isMobile && isTop ? 'mb-auto pb-12 mt-0' : ''}
                                            ${!isMobile && !isTop ? 'mt-[50%] pt-12 mb-0' : ''}
                                        `}>
                                            <div className="flex items-center gap-3 mb-6">
                                                <div className="p-3 bg-white/5 border border-white/5 rounded-2xl w-fit">
                                                    <GraduationCap className="text-gray-300" size={20} />
                                                </div>
                                                {item.current && (
                                                    <span className="px-3 py-1 bg-white hover:bg-gray-200 text-black text-xs font-bold uppercase tracking-wider rounded-full transition-colors">
                                                        Current
                                                    </span>
                                                )}
                                            </div>

                                            <h3 className="text-xl font-bold tracking-tight text-white/90 mb-2">{item.title}</h3>
                                            <p className="text-gray-400 font-medium mb-6">{item.institution}</p>

                                            <div className="space-y-4">
                                                <div className="flex items-center gap-3 text-sm text-gray-500">
                                                    <Calendar size={16} className="text-gray-600" />
                                                    <span className="font-mono tracking-tight">{item.duration}</span>
                                                </div>
                                                <div className="flex items-center gap-3 text-sm text-gray-500 border-t border-white/5 pt-4 mt-4">
                                                    <MapPin size={16} className="text-gray-600" />
                                                    <span className="truncate">{item.location}</span>
                                                </div>
                                            </div>

                                            <div className="mt-6 inline-block px-4 py-2 bg-[#050505] border border-white/5 rounded-full text-sm font-semibold text-gray-300 shadow-inner">
                                                {item.score}
                                            </div>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Education;
