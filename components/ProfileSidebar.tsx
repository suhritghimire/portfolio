'use client';

import Image from 'next/image';
import { personalInfo } from '@/lib/data';
import { Github, Linkedin, Mail, MapPin, GraduationCap, Download, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ProfileSidebar() {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="lg:fixed lg:top-24 lg:left-8 lg:w-80 h-fit space-y-4 z-10"
        >
            {/* Main Profile Card */}
            <div className="glass-card rounded-3xl p-6 flex flex-col items-center text-center">
                <div className="relative w-32 h-32 mb-4">
                    <Image
                        src={personalInfo.image}
                        alt={personalInfo.name}
                        fill
                        className="rounded-full object-cover shadow-apple"
                        priority
                    />
                    <div className="absolute bottom-1 right-1 w-4 h-4 bg-system-green border-2 border-white rounded-full" title="Available for hire" />
                </div>

                <h1 className="text-2xl font-bold tracking-tight mb-1">{personalInfo.name}</h1>
                <p className="text-sm font-medium text-system-gray mb-4">
                    CS Student & Data Engineer
                </p>

                <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                    {personalInfo.about}
                </p>

                <div className="w-full space-y-3 mb-6">
                    <div className="flex items-center gap-3 text-sm text-gray-500">
                        <div className="p-2 bg-gray-100 rounded-full"><MapPin size={14} /></div>
                        <span>{personalInfo.location}</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-gray-500">
                        <div className="p-2 bg-gray-100 rounded-full"><GraduationCap size={14} /></div>
                        <span>DTU, New Delhi</span>
                    </div>
                </div>

                <a
                    href="/Resume.pdf"
                    download
                    className="w-full py-2.5 rounded-xl bg-black text-white dark:bg-white dark:text-black font-medium text-sm hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 shadow-apple-hover"
                >
                    <Download size={16} /> Download Resume
                </a>
            </div>

            {/* Social Links Bento */}
            <div className="grid grid-cols-3 gap-3">
                <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="glass-card rounded-2xl p-4 flex items-center justify-center text-system-blue hover:bg-blue-50 transition-colors group">
                    <Linkedin size={24} className="group-hover:scale-110 transition-transform" />
                </a>
                <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="glass-card rounded-2xl p-4 flex items-center justify-center text-black dark:text-white hover:bg-gray-50 transition-colors group">
                    <Github size={24} className="group-hover:scale-110 transition-transform" />
                </a>
                <a href={`mailto:${personalInfo.email}`} className="glass-card rounded-2xl p-4 flex items-center justify-center text-system-red hover:bg-red-50 transition-colors group">
                    <Mail size={24} className="group-hover:scale-110 transition-transform" />
                </a>
            </div>
        </motion.div>
    );
}
