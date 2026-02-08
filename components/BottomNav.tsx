'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Briefcase, Code, Book, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

const navItems = [
    { name: 'Home', href: '/', icon: Home, color: 'bg-blue-500', textColor: 'text-blue-500' },
    { name: 'Experience', href: '/experience', icon: Briefcase, color: 'bg-green-500', textColor: 'text-green-500' },
    { name: 'Projects', href: '/projects', icon: Code, color: 'bg-amber-500', textColor: 'text-amber-500' },
    { name: 'Research', href: '/research', icon: Book, color: 'bg-red-500', textColor: 'text-red-500' },
    { name: 'Contact', href: '/contact', icon: Mail, color: 'bg-purple-500', textColor: 'text-purple-500' },
];

export default function BottomNav() {
    const pathname = usePathname();

    return (
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 w-full max-w-xs sm:max-w-md lg:max-w-none flex justify-center">
            <div className="flex items-center gap-1 p-2 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-xl rounded-full border border-white/20 shadow-2xl ring-1 ring-black/5">
                {navItems.map((item) => {
                    const Icon = item.icon;
                    const isActive = pathname === item.href;

                    return (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="relative px-4 py-3 rounded-full transition-all duration-300 group"
                        >
                            {isActive && (
                                <motion.div
                                    layoutId="active-pill"
                                    className={`absolute inset-0 rounded-full ${item.color}`}
                                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                />
                            )}

                            <div className="relative z-10 flex items-center gap-2">
                                <Icon
                                    size={20}
                                    className={`transition-colors duration-300 ${isActive ? 'text-white' : `${item.textColor} group-hover:scale-110`}`}
                                />
                            </div>

                            {/* Tooltip */}
                            <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-black text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                                {item.name}
                            </span>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
}
