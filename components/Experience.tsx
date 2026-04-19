'use client';

import { motion } from 'framer-motion';
import { experience, education } from '@/lib/data';
import { Briefcase, GraduationCap, Calendar } from 'lucide-react';

export default function Experience() {
    const googleColors = [
        { bg: 'bg-[#4285F4]', text: 'text-blue-400', border: 'border-blue-900/30', lightBg: 'bg-blue-900/20' },
        { bg: 'bg-[#EA4335]', text: 'text-red-400', border: 'border-red-900/30', lightBg: 'bg-red-900/20' },
        { bg: 'bg-[#FBBC05]', text: 'text-yellow-400', border: 'border-yellow-900/30', lightBg: 'bg-yellow-900/20' },
        { bg: 'bg-[#34A853]', text: 'text-green-400', border: 'border-green-900/30', lightBg: 'bg-green-900/20' },
    ];

    return (
        <div className="space-y-16 relative">
            <div className="hidden lg:block absolute left-8 top-0 bottom-0 w-0.5 bg-zinc-800" />

            <section className="space-y-8">
                <div className="flex items-center gap-4 mb-8">
                    <div className="p-3 bg-blue-900/20 text-blue-400 rounded-xl z-10 relative">
                        <Briefcase size={24} />
                    </div>
                    <h2 className="text-2xl font-bold tracking-tight text-zinc-100">Work History</h2>
                </div>

                <div className="space-y-12">
                    {experience.map((exp, index) => {
                        const color = googleColors[index % 4];
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                className="relative pl-0 lg:pl-24"
                            >
                                <div className={`hidden lg:flex absolute left-[29px] top-6 w-3 h-3 ${color.bg} rounded-full ring-4 ring-black z-10 shadow-sm`} />

                                <motion.div
                                    whileHover={{ scale: 1.02 }}
                                    className={`group relative bg-zinc-900/50 border ${color.border} rounded-[2rem] p-8 overflow-hidden hover:shadow-lg transition-all duration-300`}
                                >
                                    <div className={`absolute inset-0 opacity-[0.05] ${color.bg}`} />

                                    <div className="relative z-10 flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                                        <div>
                                            <h3 className="text-2xl font-bold text-zinc-100 flex items-center gap-2">
                                                {exp.role}
                                            </h3>
                                            <p className={`font-semibold text-lg ${color.text}`}>{exp.company}</p>
                                        </div>
                                        <span className={`self-start px-4 py-1.5 text-xs font-bold uppercase tracking-wider ${color.lightBg} ${color.text} rounded-full flex items-center gap-2`}>
                                            <Calendar size={12} /> {exp.period}
                                        </span>
                                    </div>

                                    <ul className="relative z-10 space-y-3 text-zinc-300 leading-relaxed text-base">
                                        {exp.description.map((desc, i) => (
                                            <li key={i} className="flex gap-3">
                                                <span className={`mt-1.5 min-w-[6px] ${color.text}`}>•</span>
                                                <span>{desc}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </motion.div>
                            </motion.div>
                        )
                    })}
                </div>
            </section>

            <section className="space-y-8 relative">
                <div className="flex items-center gap-4 mb-8">
                    <div className="p-3 bg-green-900/20 text-green-400 rounded-xl z-10 relative">
                        <GraduationCap size={24} />
                    </div>
                    <h2 className="text-2xl font-bold tracking-tight text-zinc-100">Academics</h2>
                </div>

                <div className="space-y-12">
                    {education.map((edu, index) => {
                        const color = googleColors[(index + 2) % 4];
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                className="relative pl-0 lg:pl-24"
                            >
                                <div className={`hidden lg:flex absolute left-[29px] top-6 w-3 h-3 ${color.bg} rounded-full ring-4 ring-black z-10 shadow-sm`} />

                                <motion.div
                                    whileHover={{ scale: 1.02 }}
                                    className={`group relative bg-zinc-900/50 border ${color.border} rounded-[2rem] p-8 overflow-hidden hover:shadow-lg transition-all duration-300`}
                                >
                                    <div className={`absolute inset-0 opacity-[0.05] ${color.bg}`} />

                                    <div className="relative z-10 flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                                        <div>
                                            <h3 className="text-2xl font-bold text-zinc-100">{edu.institution}</h3>
                                            <p className={`font-semibold text-lg ${color.text}`}>{edu.degree}</p>
                                        </div>
                                        <div className="text-right flex flex-col items-end gap-2">
                                            <span className={`px-4 py-1.5 text-xs font-bold uppercase tracking-wider ${color.lightBg} text-zinc-400 rounded-full`}>
                                                {edu.year}
                                            </span>
                                            <span className={`text-sm font-bold ${color.text} ${color.lightBg} px-3 py-1 rounded-lg`}>
                                                Grade: {edu.grade}
                                            </span>
                                        </div>
                                    </div>
                                </motion.div>
                            </motion.div>
                        )
                    })}
                </div>
            </section>
        </div>
    );
}
