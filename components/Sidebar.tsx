'use client';

import Image from 'next/image';
import { personalInfo } from '@/lib/data';
import { Mail, Github, Linkedin } from 'lucide-react';

export default function Sidebar() {
    return (
        <aside className="w-full lg:w-80 h-auto lg:h-screen lg:fixed lg:top-0 lg:left-0 bg-black border-r border-zinc-800 flex flex-col p-8 z-40 overflow-y-auto">
            {/* Profile Header */}
            <div className="flex flex-col items-start pt-4">
                {/* Google Brand Ring */}
                <div className="relative w-24 h-24 mb-6 ring-2 ring-zinc-800 rounded-full p-[3px] bg-black">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#4285F4] via-[#EA4335] to-[#FBBC05] p-[3px]">
                        <div className="w-full h-full bg-black rounded-full flex items-center justify-center overflow-hidden">
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

                <h1 className="text-2xl font-bold tracking-tight text-zinc-100 mb-2">{personalInfo.name}</h1>
                <p className="text-sm font-medium text-zinc-400 mb-4">{personalInfo.title}</p>
                <p className="text-sm text-zinc-300 leading-relaxed max-w-sm mb-6">
                    {personalInfo.about}
                </p>

                {/* Socials */}
                <div className="flex flex-wrap gap-3 items-center">
                    <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="p-2.5 bg-zinc-900 rounded-full text-zinc-400 hover:text-blue-400 hover:bg-blue-900/30 transition-all border border-zinc-800">
                        <Linkedin size={20} />
                    </a>
                    <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="p-2.5 bg-zinc-900 rounded-full text-zinc-400 hover:text-white hover:bg-zinc-800 transition-all border border-zinc-800">
                        <Github size={20} />
                    </a>
                    <a href={`mailto:${personalInfo.email}`} className="p-2.5 bg-zinc-900 rounded-full text-zinc-400 hover:text-red-400 hover:bg-red-900/30 transition-all border border-zinc-800">
                        <Mail size={20} />
                    </a>
                </div>
            </div>

            {/* Footer */}
            <div className="mt-auto pt-8">
                <p className="text-xs text-zinc-600">
                    © {new Date().getFullYear()} {personalInfo.name}
                </p>
            </div>
        </aside>
    );
}
