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
            <div className="relative overflow-hidden bg-white border border-gray-100 rounded-[2.5rem] p-8 shadow-sm">
                {/* Decorative Google Gradient Line */}
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-500 via-red-500 to-yellow-500" />

                <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                    <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2 ml-1">Name</label>
                        <input
                            type="text"
                            required
                            className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:bg-white outline-none transition-all placeholder:text-gray-400"
                            placeholder="John Doe"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2 ml-1">Email</label>
                        <input
                            type="email"
                            required
                            className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:bg-white outline-none transition-all placeholder:text-gray-400"
                            placeholder="john@example.com"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2 ml-1">Message</label>
                        <textarea
                            required
                            rows={4}
                            className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:bg-white outline-none transition-all resize-none placeholder:text-gray-400"
                            placeholder="Let's build something amazing..."
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={status === 'sending' || status === 'success'}
                        className={`w-full py-4 rounded-xl font-bold text-white transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-xl hover:-translate-y-0.5
                            ${status === 'success' ? 'bg-green-500' : 'bg-[#4285F4] hover:bg-[#3367D6]'}
                        `}
                    >
                        {status === 'idle' && <><Send size={18} /> Send Message</>}
                        {status === 'sending' && <><Loader2 size={18} className="animate-spin" /> Sending...</>}
                        {status === 'success' && <><CheckCircle size={18} /> Message Sent!</>}
                    </button>
                </form>
            </div>

            <div className="mt-12 text-center text-sm text-gray-500">
                <p>Alternatively, reach out directly at:</p>
                <a href="mailto:suhrit1ghimire@gmail.com" className="font-bold text-gray-900 hover:text-blue-600 transition-colors mt-1 block">
                    suhrit1ghimire@gmail.com
                </a>
            </div>
        </div>
    );
}
