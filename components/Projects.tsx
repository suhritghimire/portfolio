'use client';

import { motion } from 'framer-motion';
import { projects } from '@/lib/data';
import { ArrowUpRight } from 'lucide-react';

export default function Projects() {
    const googleColors = [
        { 
            border: 'border-blue-200 dark:border-blue-900/30', 
            bg: 'bg-blue-50 dark:bg-blue-900/30', 
            text: 'text-blue-600 dark:text-blue-400', 
            hoverBorder: 'group-hover:border-blue-300 dark:group-hover:border-blue-700' 
        },
        { 
            border: 'border-red-200 dark:border-red-900/30', 
            bg: 'bg-red-50 dark:bg-red-900/30', 
            text: 'text-red-600 dark:text-red-400', 
            hoverBorder: 'group-hover:border-red-300 dark:group-hover:border-red-700' 
        },
        { 
            border: 'border-yellow-200 dark:border-yellow-900/30', 
            bg: 'bg-yellow-50 dark:bg-yellow-900/30', 
            text: 'text-yellow-600 dark:text-yellow-400', 
            hoverBorder: 'group-hover:border-yellow-300 dark:group-hover:border-yellow-700' 
        },
        { 
            border: 'border-green-200 dark:border-green-900/30', 
            bg: 'bg-green-50 dark:bg-green-900/30', 
            text: 'text-green-600 dark:text-green-400', 
            hoverBorder: 'group-hover:border-green-300 dark:group-hover:border-green-700' 
        },
    ];

    return (
        <div className="grid gap-6">
            {projects.map((project, index) => {
                const color = googleColors[index % 4];
                return (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.98 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.02 }}
                        className={`group relative bg-white dark:bg-zinc-900/50 border ${color.border} ${color.hoverBorder} rounded-[2rem] p-8 overflow-hidden cursor-pointer hover:shadow-lg transition-all duration-300`}
                    >
                        {/* Background Tint */}
                        <div className={`absolute inset-0 opacity-[0.03] dark:opacity-[0.05] bg-current`} />

                        <div className="relative z-10">
                            <div className="flex justify-between items-start">
                                <div>
                                    <span className={`text-xs font-bold ${color.text} uppercase tracking-wider mb-2 block`}>
                                        PROJECT
                                    </span>
                                    <h3 className="text-3xl font-bold mb-2 tracking-tight text-gray-900 dark:text-zinc-100">
                                        {project.title}
                                    </h3>
                                    <p className="text-gray-600 dark:text-zinc-300 leading-relaxed mb-6 max-w-xl">
                                        {project.points[0]}
                                    </p>
                                </div>
                                {project.link !== '#' && (
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`p-3 rounded-full ${color.bg} ${color.text} transition-colors hover:brightness-95`}
                                    >
                                        <ArrowUpRight size={24} />
                                    </a>
                                )}
                            </div>

                            <div className="flex flex-wrap gap-2">
                                {project.tech.map((t, i) => (
                                    <span key={i} className={`px-3 py-1 ${color.bg} ${color.text} rounded-full text-xs font-semibold`}>
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                )
            })}
        </div>
    );
}
