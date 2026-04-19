'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Briefcase, Code, Book, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

const navItems = [
    { name: 'Home', href: '/#', icon: Home, color: 'bg-blue-500', textColor: 'text-blue-500' },
    { name: 'Experience', href: '#experience', icon: Briefcase, color: 'bg-green-500', textColor: 'text-green-500' },
    { name: 'Projects', href: '#projects', icon: Code, color: 'bg-amber-500', textColor: 'text-amber-500' },
    { name: 'Contact', href: '#contact', icon: Mail, color: 'bg-purple-500', textColor: 'text-purple-500' },
];

export default function BottomNav() {
    const pathname = usePathname();

    return (
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 w-full max-w-xs sm:max-w-md lg:max-w-none flex justify-center">
            <div className="flex items-center gap-1 p-2 bg-black/90 backdrop-blur-xl rounded-full border border-zinc-800 shadow-2xl ring-1 ring-white/10">
                {navItems.map((item) => {
                    const Icon = item.icon;
                    return (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="relative px-4 py-3 rounded-full transition-all duration-300 group"
                        >
                            <div className="relative z-10 flex items-center gap-2">
                                <Icon
                                    size={20}
                                    className={`transition-colors duration-300 ${item.textColor} group-hover:scale-110 active:scale-95`}
                                />
                            </div>

                            {/* Tooltip */}
                            <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-zinc-100 text-black text-[10px] font-bold uppercase rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap shadow-xl">
                                {item.name}
                            </span>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
}
