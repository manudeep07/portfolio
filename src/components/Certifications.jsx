import React, { useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ExternalLink, Award } from 'lucide-react';
import { blurFadeIn, staggerContainer } from '../animations/variants';
import useNavTrigger from '../hooks/useNavTrigger';

const certificationsData = [
    {
        title: "React (Basic) Certificate",
        organization: "HackerRank",
        year: "2024",
        link: "https://www.hackerrank.com/certificates/6bb4c995572b"
    },
    {
        title: "Problem Solving (Basic) Certificate",
        organization: "HackerRank",
        year: "2024",
        link: "https://www.hackerrank.com/certificates/38df7c317da7"
    },
    {
        title: "Java (Basic) Certificate",
        organization: "HackerRank",
        year: "2024",
        link: "https://www.hackerrank.com/certificates/ebc77d2427b3"
    },
    {
        title: "MERN Stack Crash Course",
        organization: "YouTube",
        year: "2023",
        link: "#"
    }
];

// Linear-style subtle glow card
const CertificationCard = ({ cert, index }) => {
    return (
        <motion.div
            variants={blurFadeIn}
            className="group relative cursor-pointer"
        >
            <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-gray-600 opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-700" />
            
            <a 
                href={cert.link}
                target={cert.link !== "#" ? "_blank" : undefined}
                rel={cert.link !== "#" ? "noopener noreferrer" : undefined}
                className="relative flex flex-col h-full bg-white/[0.02] border border-white/[0.05] p-6 lg:p-8 rounded-3xl shadow-[inset_0_1px_1px_rgba(255,255,255,0.02)] hover:bg-white/[0.04] hover:border-white/10 transition-all duration-500 overflow-hidden"
            >
                {/* Micro styling inner elements */}
                <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 rounded-2xl bg-white/5 border border-white/5 shadow-sm text-gray-300 group-hover:text-white transition-colors">
                        <Award size={22} />
                    </div>
                </div>

                <div className="flex-1 mt-auto">
                    <h3 className="text-xl font-bold text-white/90 group-hover:text-white mb-2 tracking-tight transition-colors">
                        {cert.title}
                    </h3>
                    <div className="flex items-center justify-between mt-6 pt-4 border-t border-white/5">
                        <p className="text-gray-500 font-medium text-sm">{cert.organization}</p>
                        <p className="text-gray-600 font-mono text-xs tracking-wider">{cert.year}</p>
                    </div>
                </div>
                
                <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-500 text-gray-400">
                    <ExternalLink size={18} />
                </div>
            </a>
        </motion.div>
    );
};

const Certifications = () => {
    const refreshKey = useNavTrigger('certifications');

    return (
        <section id="certifications" className="py-24 scroll-mt-20 bg-black text-white relative">
            <div className="container mx-auto px-6 max-w-6xl relative z-10">
                <motion.div
                    key={refreshKey}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ amount: 0.2, once: true }}
                    variants={staggerContainer}
                >
                    <div className="mb-20">
                        <motion.h2 variants={blurFadeIn} className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
                            Certifications
                        </motion.h2>
                        <motion.p variants={blurFadeIn} className="text-gray-400 text-lg max-w-2xl font-light">
                            Professional accreditations documenting mastery over standard architecture and core mechanics.
                        </motion.p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {certificationsData.map((cert, index) => (
                            <CertificationCard key={index} cert={cert} index={index} />
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Certifications;
