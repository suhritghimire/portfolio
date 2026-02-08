'use client';


import { motion } from 'framer-motion';
import { skills } from '@/lib/data';

export default function Skills() {
    return (
        <section id="skills" className="space-y-8">
            <h2 className="text-3xl font-bold mb-8 text-center"><span className="text-blue-600">Specialized</span> <span className="text-red-500">Skills</span></h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {Object.entries(skills).map(([category, items], index) => (
                    <motion.div
                        key={category}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                    >
                        <h3 className="text-xl font-bold mb-4 text-gray-800 border-b pb-2">{category}</h3>
                        <div className="flex flex-wrap gap-2">
                            {items.map((skill) => (
                                <span key={skill} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
