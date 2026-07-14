'use client';

import { motion } from 'framer-motion';
import { projects } from '@/lib/data';
import { ArrowUpRight } from 'lucide-react';

export default function Projects() {
    const googleColors = [
        { border: 'border-blue-100', bg: 'bg-blue-50', text: 'text-blue-600', hoverBorder: 'group-hover:border-blue-300' },
        { border: 'border-red-100', bg: 'bg-red-50', text: 'text-red-600', hoverBorder: 'group-hover:border-red-300' },
        { border: 'border-amber-100', bg: 'bg-amber-50/50', text: 'text-amber-600', hoverBorder: 'group-hover:border-amber-300' },
        { border: 'border-green-100', bg: 'bg-green-50', text: 'text-green-600', hoverBorder: 'group-hover:border-green-300' },
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
                        className={`group relative bg-white border ${color.border} ${color.hoverBorder} rounded-[2rem] p-8 overflow-hidden cursor-pointer shadow-sm hover:shadow-md shadow-zinc-100 transition-all duration-300`}
                    >
                        <div className="relative z-10">
                            <div className="flex justify-between items-start">
                                <div>
                                    <span className={`text-xs font-bold ${color.text} uppercase tracking-wider mb-2 block`}>
                                        PROJECT
                                    </span>
                                    <h3 className="text-3xl font-bold mb-2 tracking-tight text-zinc-900">
                                        {project.title}
                                    </h3>
                                    <p className="text-zinc-600 leading-relaxed mb-6 max-w-xl">
                                        {project.points[0]}
                                    </p>
                                </div>
                                {project.link !== '#' && (
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`p-3 rounded-full ${color.bg} ${color.text} transition-colors hover:brightness-95 border border-current/10`}
                                    >
                                        <ArrowUpRight size={24} />
                                    </a>
                                )}
                            </div>

                            <div className="flex flex-wrap gap-2">
                                {project.tech.map((t, i) => (
                                    <span key={i} className={`px-3 py-1 ${color.bg} ${color.text} rounded-full text-xs font-semibold border border-current/10`}>
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
