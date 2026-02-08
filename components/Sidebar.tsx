'use client';

import Image from 'next/image';
import { personalInfo } from '@/lib/data';
import { Mail, Download, Github, Linkedin, FileText } from 'lucide-react';

export default function Sidebar() {
    return (
        <aside className="w-full lg:w-80 h-auto lg:h-screen lg:fixed lg:top-0 lg:left-0 bg-white border-r border-gray-100 flex flex-col p-8 z-40 overflow-y-auto">
            {/* Profile Header */}
            <div className="flex flex-col items-start">
                {/* Google Brand Ring */}
                <div className="relative w-24 h-24 mb-6 ring-2 ring-gray-100 rounded-full p-[3px] bg-white">
                    {/* 4-Color Gradient Border via CSS or Tailwind utility for 'conic' if available, using simple gradient for now */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#4285F4] via-[#EA4335] to-[#FBBC05] p-[3px]">
                        <div className="w-full h-full bg-white rounded-full flex items-center justify-center overflow-hidden">
                            <div className="relative w-full h-full">
                                <Image
                                    src={personalInfo.image}
                                    alt={personalInfo.name}
                                    fill
                                    className="object-cover"
                                    priority
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <h1 className="text-2xl font-bold tracking-tight text-black mb-2">{personalInfo.name}</h1>
                <p className="text-sm font-medium text-gray-500 mb-4">{personalInfo.title}</p>
                <p className="text-sm text-gray-600 leading-relaxed max-w-sm mb-6">
                    {personalInfo.about}
                </p>

                {/* Socials & Resume - Now Together */}
                <div className="flex flex-wrap gap-3 items-center">
                    <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="p-2.5 bg-gray-50 rounded-full text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-all border border-gray-100">
                        <Linkedin size={20} />
                    </a>
                    <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="p-2.5 bg-gray-50 rounded-full text-gray-600 hover:text-black hover:bg-gray-200 transition-all border border-gray-100">
                        <Github size={20} />
                    </a>
                    <a href={`mailto:${personalInfo.email}`} className="p-2.5 bg-gray-50 rounded-full text-gray-600 hover:text-red-500 hover:bg-red-50 transition-all border border-gray-100">
                        <Mail size={20} />
                    </a>

                    {/* Resume Button - Integrated */}
                    <a
                        href={personalInfo.resume}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#4285F4] text-white text-sm font-semibold shadow-md shadow-blue-200 hover:bg-[#3367D6] hover:scale-[1.02] active:scale-[0.98] transition-all ml-2"
                    >
                        <Download size={16} /> Resume
                    </a>
                </div>
            </div>

            {/* Footer */}
            <div className="mt-auto pt-8">
                <p className="text-xs text-gray-400">
                    © {new Date().getFullYear()} {personalInfo.name}
                </p>
            </div>
        </aside>
    );
}
