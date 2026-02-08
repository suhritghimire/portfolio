'use client';

import { motion } from 'framer-motion';
import { skills } from '@/lib/data';
import Section from './Section';

export default function Skills() {
    return (
        <Section id="skills" title="Proficiency">
            <div className="space-y-8">
                {Object.entries(skills).map(([category, items], index) => (
                    <motion.div
                        key={category}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-xs font-semibold uppercase tracking-wider text-system-gray mb-4 ml-1">
                            {category}
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            {items.map((skill) => (
                                <span
                                    key={skill}
                                    className="px-4 py-2 bg-white dark:bg-zinc-800 rounded-full text-sm font-medium shadow-sm border border-gray-100 dark:border-zinc-700 hover:scale-105 transition-transform cursor-default"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
}
