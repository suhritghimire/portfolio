'use client';

import { useState } from 'react';
import { Send, CheckCircle, Loader2 } from 'lucide-react';

export default function Contact() {
    const [status, setStatus] = useState<'idle' | 'sending' | 'success'>('idle');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('sending');

        // Simulate network delay
        await new Promise(resolve => setTimeout(resolve, 1500));

        setStatus('success');

        // Reset after 3 seconds
        setTimeout(() => setStatus('idle'), 3000);
    };

    return (
        <div className="max-w-xl">
            <div className="relative overflow-hidden bg-white dark:bg-zinc-900 border border-gray-100 dark:border-zinc-800 rounded-[2.5rem] p-8 shadow-sm transition-colors duration-300">
                {/* Decorative Google Gradient Line */}
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-500 via-red-500 to-yellow-500" />

                <div className="space-y-8 relative z-10 text-center py-4">
                    <div className="space-y-2">
                        <p className="text-sm font-bold text-gray-500 dark:text-zinc-500 uppercase tracking-widest">Email</p>
                        <a 
                            href="mailto:suhrit1ghimire@gmail.com" 
                            className="text-2xl font-bold text-[#4285F4] dark:text-blue-400 hover:text-[#3367D6] dark:hover:text-blue-300 transition-colors break-all"
                        >
                            suhrit1ghimire@gmail.com
                        </a>
                    </div>
                    
                    <div className="space-y-2">
                        <p className="text-sm font-bold text-gray-500 dark:text-zinc-500 uppercase tracking-widest">Phone</p>
                        <a 
                            href="tel:+919625609307" 
                            className="text-2xl font-bold text-[#34A853] dark:text-green-400 hover:text-[#2d8a46] dark:hover:text-green-300 transition-colors"
                        >
                            +91 9625609307
                        </a>
                    </div>
                </div>
            </div>

            <div className="mt-12 text-center text-sm text-gray-500 dark:text-zinc-500">
                <p>Alternatively, reach out directly at:</p>
                <a href="mailto:suhrit1ghimire@gmail.com" className="font-bold text-gray-900 dark:text-zinc-100 hover:text-blue-600 dark:hover:text-blue-400 transition-colors mt-1 block">
                    suhrit1ghimire@gmail.com
                </a>
            </div>
        </div>
    );
}
