'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { personalInfo } from '@/lib/data';
import { Github, Linkedin, Mail, FileText } from 'lucide-react';

export default function Hero() {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute top-0 right-0 -z-10 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-50 translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 left-0 -z-10 w-96 h-96 bg-red-50 rounded-full blur-3xl opacity-50 -translate-x-1/2 translate-y-1/2" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse md:flex-row items-center gap-12">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="flex-1 text-center md:text-left"
                >
                    <h2 className="text-xl md:text-2xl font-medium text-blue-600 mb-2">Hello, I'm</h2>
                    <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight">
                        {personalInfo.name}
                    </h1>
                    <h3 className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-6">
                        {personalInfo.title}
                    </h3>
                    <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-lg mx-auto md:mx-0 leading-relaxed">
                        {personalInfo.about}
                    </p>

                    <div className="flex gap-4 justify-center md:justify-start">
                        <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-gray-100 hover:bg-blue-50 hover:text-blue-600 transition-all transform hover:scale-110">
                            <Linkedin size={24} />
                        </a>
                        <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-gray-100 hover:bg-gray-200 transition-all transform hover:scale-110">
                            <Github size={24} />
                        </a>
                        <a href={`mailto:${personalInfo.email}`} className="p-3 rounded-full bg-gray-100 hover:bg-red-50 hover:text-red-500 transition-all transform hover:scale-110">
                            <Mail size={24} />
                        </a>
                        <a href="#resume" className="p-3 rounded-full bg-gray-100 hover:bg-blue-50 hover:text-blue-600 transition-all transform hover:scale-110">
                            <FileText size={24} />
                        </a>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="flex-1 relative"
                >
                    <div className="w-[300px] h-[300px] md:w-[400px] md:h-[400px] relative rounded-full overflow-hidden border-4 border-white shadow-2xl mx-auto">
                        <Image
                            src={personalInfo.image}
                            alt={personalInfo.name}
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                    {/* Decorative ring */}
                    <div className="absolute inset-0 border-2 border-blue-500/20 rounded-full scale-105 -z-10" />
                    <div className="absolute inset-0 border-2 border-red-500/20 rounded-full scale-110 -z-10" />
                </motion.div>
            </div>
        </section>
    );
}
