'use client';

import { motion } from 'framer-motion';
import { experience, education } from '@/lib/data';
import { Briefcase, GraduationCap, Calendar } from 'lucide-react';

export default function Experience() {
    const googleColors = [
        { bg: 'bg-blue-500', text: 'text-blue-600', border: 'border-blue-200', lightBg: 'bg-blue-50', gradient: 'from-blue-400 to-blue-300' },
        { bg: 'bg-red-500', text: 'text-red-600', border: 'border-red-200', lightBg: 'bg-red-50', gradient: 'from-red-400 to-red-300' },
        { bg: 'bg-yellow-500', text: 'text-yellow-600', border: 'border-yellow-200', lightBg: 'bg-yellow-50', gradient: 'from-yellow-400 to-yellow-300' },
        { bg: 'bg-green-500', text: 'text-green-600', border: 'border-green-200', lightBg: 'bg-green-50', gradient: 'from-green-400 to-green-300' },
    ];

    return (
        <div className="space-y-16 relative">
            {/* Central Line for Desktop */}
            <div className="hidden lg:block absolute left-8 top-0 bottom-0 w-0.5 bg-gray-200" />

            {/* Experience Section */}
            <section className="space-y-8">
                <div className="flex items-center gap-4 mb-8">
                    <div className="p-3 bg-blue-50 rounded-xl text-blue-600 z-10 relative">
                        <Briefcase size={24} />
                    </div>
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900">Work History</h2>
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
                                {/* Timeline Node (Desktop) */}
                                <div className={`hidden lg:flex absolute left-[29px] top-6 w-3 h-3 ${color.bg} rounded-full ring-4 ring-white z-10 shadow-sm`} />

                                <motion.div
                                    whileHover={{ scale: 1.02 }}
                                    className={`group relative bg-white border ${color.border} rounded-[2rem] p-8 overflow-hidden hover:shadow-lg transition-all duration-300`}
                                >
                                    {/* Subtle Background Tint */}
                                    <div className={`absolute inset-0 opacity-[0.03] ${color.bg}`} />

                                    <div className="relative z-10 flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                                        <div>
                                            <h3 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                                                {exp.role}
                                            </h3>
                                            <p className={`font-semibold text-lg ${color.text}`}>{exp.company}</p>
                                        </div>
                                        <span className={`self-start px-4 py-1.5 text-xs font-bold uppercase tracking-wider ${color.lightBg} ${color.text} rounded-full flex items-center gap-2`}>
                                            <Calendar size={12} /> {exp.period}
                                        </span>
                                    </div>

                                    <ul className="relative z-10 space-y-3 text-gray-700 leading-relaxed text-base">
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

            {/* Education Section */}
            <section className="space-y-8 relative">
                <div className="flex items-center gap-4 mb-8">
                    <div className="p-3 bg-green-50 rounded-xl text-green-600 z-10 relative">
                        <GraduationCap size={24} />
                    </div>
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900">Academics</h2>
                </div>

                <div className="space-y-12">
                    {education.map((edu, index) => {
                        const color = googleColors[(index + 2) % 4]; // Offset colors
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                className="relative pl-0 lg:pl-24"
                            >
                                {/* Timeline Node (Desktop) */}
                                <div className={`hidden lg:flex absolute left-[29px] top-6 w-3 h-3 ${color.bg} rounded-full ring-4 ring-white z-10 shadow-sm`} />

                                <motion.div
                                    whileHover={{ scale: 1.02 }}
                                    className={`group relative bg-white border ${color.border} rounded-[2rem] p-8 overflow-hidden hover:shadow-lg transition-all duration-300`}
                                >
                                    {/* Subtle Background Tint */}
                                    <div className={`absolute inset-0 opacity-[0.03] ${color.bg}`} />

                                    <div className="relative z-10 flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                                        <div>
                                            <h3 className="text-2xl font-bold text-gray-900">{edu.institution}</h3>
                                            <p className={`font-semibold text-lg ${color.text}`}>{edu.degree}</p>
                                        </div>
                                        <div className="text-right flex flex-col items-end gap-2">
                                            <span className={`px-4 py-1.5 text-xs font-bold uppercase tracking-wider ${color.lightBg} text-gray-600 rounded-full`}>
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
