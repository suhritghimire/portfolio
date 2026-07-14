'use client';

import { motion } from 'framer-motion';
import { experience, education } from '@/lib/data';
import { Briefcase, GraduationCap, Calendar } from 'lucide-react';

export default function Experience() {
    const googleColors = [
        { bg: 'bg-[#4285F4]', text: 'text-blue-600', border: 'border-blue-100', lightBg: 'bg-blue-50' },
        { bg: 'bg-[#EA4335]', text: 'text-red-600', border: 'border-red-100', lightBg: 'bg-red-50' },
        { bg: 'bg-[#FBBC05]', text: 'text-amber-600', border: 'border-amber-100', lightBg: 'bg-amber-50/50' },
        { bg: 'bg-[#34A853]', text: 'text-green-600', border: 'border-green-100', lightBg: 'bg-green-50' },
    ];

    return (
        <div className="space-y-16 relative">
            <div className="hidden lg:block absolute left-8 top-0 bottom-0 w-0.5 bg-zinc-200" />

            <section className="space-y-8">
                <div className="flex items-center gap-4 mb-8">
                    <div className="p-3 bg-blue-50 text-blue-600 rounded-xl z-10 relative border border-blue-100">
                        <Briefcase size={24} />
                    </div>
                    <h2 className="text-2xl font-bold tracking-tight text-zinc-900">Work History</h2>
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
                                <div className={`hidden lg:flex absolute left-[29px] top-6 w-3 h-3 ${color.bg} rounded-full ring-4 ring-white z-10 shadow-sm`} />

                                <motion.div
                                    whileHover={{ scale: 1.02 }}
                                    className={`group relative bg-white border ${color.border} rounded-2xl md:rounded-[2rem] p-6 md:p-8 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300`}
                                >
                                    <div className={`absolute inset-0 opacity-[0.02] ${color.bg}`} />

                                    <div className="relative z-10 flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                                        <div>
                                            <h3 className="text-xl md:text-2xl font-bold text-zinc-900 flex items-center gap-2">
                                                {exp.role}
                                            </h3>
                                            <p className={`font-semibold text-base md:text-lg ${color.text}`}>{exp.company}</p>
                                        </div>
                                        <span className={`self-start px-3 py-1 md:px-4 md:py-1.5 text-[10px] md:text-xs font-bold uppercase tracking-wider ${color.lightBg} ${color.text} rounded-full flex items-center gap-2 border border-current/10`}>
                                            <Calendar size={12} /> {exp.period}
                                        </span>
                                    </div>

                                    <ul className="relative z-10 space-y-3 text-sm md:text-base text-zinc-600 leading-relaxed">
                                        {exp.description.map((desc, i) => (
                                            <li key={i} className="flex gap-2.5">
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
                    <div className="p-3 bg-green-50 text-green-600 rounded-xl z-10 relative border border-green-100">
                        <GraduationCap size={24} />
                    </div>
                    <h2 className="text-2xl font-bold tracking-tight text-zinc-900">Academics</h2>
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
                                <div className={`hidden lg:flex absolute left-[29px] top-6 w-3 h-3 ${color.bg} rounded-full ring-4 ring-white z-10 shadow-sm`} />

                                <motion.div
                                    whileHover={{ scale: 1.02 }}
                                    className={`group relative bg-white border ${color.border} rounded-2xl md:rounded-[2rem] p-6 md:p-8 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300`}
                                >
                                    <div className={`absolute inset-0 opacity-[0.02] ${color.bg}`} />

                                    <div className="relative z-10 flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                                        <div>
                                            <h3 className="text-xl md:text-2xl font-bold text-zinc-900">{edu.institution}</h3>
                                            <p className={`font-semibold text-base md:text-lg ${color.text}`}>{edu.degree}</p>
                                        </div>
                                        <div className="text-left md:text-right flex flex-col items-start md:items-end gap-2 shrink-0">
                                            <span className={`px-3 py-1 md:px-4 md:py-1.5 text-[10px] md:text-xs font-bold uppercase tracking-wider ${color.lightBg} text-zinc-500 rounded-full border border-current/10`}>
                                                {edu.year}
                                            </span>
                                            <span className={`text-xs md:text-sm font-bold ${color.text} ${color.lightBg} px-2.5 py-0.5 md:px-3 md:py-1 rounded-lg border border-current/10`}>
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
