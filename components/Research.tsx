'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Link as LinkIcon, Calendar, Plus, RefreshCw, Lock, Trash2 } from 'lucide-react';
import { research } from '@/lib/data';

export default function Research() {
    const router = useRouter();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [pin, setPin] = useState('');
    const [loading, setLoading] = useState(false);
    const [deletingId, setDeletingId] = useState<string | null>(null);
    const [newPaper, setNewPaper] = useState({ title: '', date: '', link: '' });

    const googleColors = [
        { border: 'border-red-200', bg: 'bg-red-50', text: 'text-red-600', hover: 'group-hover:text-red-700' },
        { border: 'border-blue-200', bg: 'bg-blue-50', text: 'text-blue-600', hover: 'group-hover:text-blue-700' },
        { border: 'border-green-200', bg: 'bg-green-50', text: 'text-green-600', hover: 'group-hover:text-green-700' },
        { border: 'border-yellow-200', bg: 'bg-yellow-50', text: 'text-yellow-600', hover: 'group-hover:text-yellow-700' },
    ];

    // ... handleAuth ...

    const handleDelete = async (id: string, e: React.MouseEvent) => {
        e.preventDefault(); // Prevent link click
        if (!confirm('Are you sure you want to delete this paper?')) return;

        setDeletingId(id);
        try {
            const res = await fetch('/api/papers', {
                method: 'DELETE',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ id })
            });

            if (!res.ok) throw new Error('Failed to delete');
            router.refresh();
        } catch (error) {
            console.error(error);
            alert('Failed to delete paper.');
        } finally {
            setDeletingId(null);
        }
    };

    // ... handleAddPaper ...

    const handleAuth = () => {
        if (pin === '9841') {
            setIsAuthenticated(true);
            setIsModalOpen(true);
            setPin('');
        } else {
            alert('Incorrect PIN');
        }
    };

    const handleAddPaper = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            const res = await fetch('/api/papers', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    title: newPaper.title,
                    date: newPaper.date || new Date().toISOString().split('T')[0],
                    link: newPaper.link
                })
            });

            if (!res.ok) throw new Error('Failed to save');

            setNewPaper({ title: '', date: '', link: '' });
            setIsModalOpen(false);
            router.refresh(); // Refresh to show new data
        } catch (error) {
            console.error(error);
            alert('Failed to save paper. Check console.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="w-full">
            {/* Add Button / Unlock */}
            <div className="flex justify-end mb-6">
                {isAuthenticated ? (
                    <button
                        onClick={() => setIsModalOpen(true)}
                        className="flex items-center gap-2 px-4 py-2 bg-black text-white rounded-full hover:bg-gray-800 transition-all text-sm font-medium"
                    >
                        <Plus size={16} /> Add Paper
                    </button>
                ) : (
                    <div className="flex gap-2 items-center">
                        <Lock size={16} className="text-gray-400" />
                        <input
                            type="password"
                            placeholder="PIN"
                            className="px-3 py-1.5 border border-gray-200 rounded-full text-sm w-24 focus:outline-none focus:border-blue-500 transition-colors"
                            value={pin}
                            onChange={e => setPin(e.target.value)}
                        />
                        <button
                            onClick={handleAuth}
                            className="px-3 py-1.5 bg-gray-100 text-gray-600 rounded-full hover:bg-gray-200 transition-colors text-xs font-semibold"
                        >
                            Unlock
                        </button>
                    </div>
                )}
            </div>

            <div className="grid gap-4 w-full">
                {research.map((paper, index) => {
                    const color = googleColors[index % 4];
                    return (
                        <motion.div
                            key={paper.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className={`group bg-white p-6 rounded-[2rem] border ${color.border} shadow-sm hover:shadow-md transition-all flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4`}
                        >
                            <div>
                                <h3 className={`font-bold text-lg text-gray-900 ${color.hover} transition-colors mb-2`}>
                                    {paper.title}
                                </h3>
                                <div className="flex items-center gap-2 text-sm text-gray-500">
                                    <span className={`flex items-center gap-1 px-3 py-1 rounded-full ${color.bg} ${color.text} font-medium`}>
                                        <Calendar size={14} />
                                        {paper.date}
                                    </span>
                                </div>
                            </div>



                            <div className="flex gap-2">
                                <a
                                    href={paper.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`p-3 rounded-full ${color.bg} ${color.text} hover:scale-110 transition-transform`}
                                >
                                    <LinkIcon size={20} />
                                </a>
                                {isAuthenticated && (
                                    <button
                                        onClick={(e) => handleDelete(paper.id, e)}
                                        disabled={deletingId === paper.id}
                                        className="p-3 rounded-full bg-gray-100 text-gray-500 hover:bg-red-100 hover:text-red-600 transition-colors disabled:opacity-50"
                                    >
                                        {deletingId === paper.id ? <RefreshCw size={20} className="animate-spin" /> : <Trash2 size={20} />}
                                    </button>
                                )}
                            </div>
                        </motion.div>
                    )
                })}

                {research.length === 0 && (
                    <div className="text-center text-gray-500 py-12 bg-gray-50 rounded-3xl">
                        Thinking about the next big idea... 💡
                    </div>
                )}
            </div>

            {/* Add Modal */}
            <AnimatePresence>
                {isModalOpen && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/20 backdrop-blur-sm">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            className="bg-white rounded-2xl p-6 w-full max-w-md shadow-2xl"
                        >
                            <h3 className="text-xl font-bold mb-4">Add Research Paper</h3>
                            <form onSubmit={handleAddPaper} className="space-y-4">
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-1">Title</label>
                                    <input
                                        type="text"
                                        required
                                        className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                                        placeholder="e.g. Attention Is All You Need"
                                        value={newPaper.title}
                                        onChange={e => setNewPaper({ ...newPaper, title: e.target.value })}
                                        disabled={loading}
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-1">Date</label>
                                    <input
                                        type="date"
                                        className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                                        value={newPaper.date}
                                        onChange={e => setNewPaper({ ...newPaper, date: e.target.value })}
                                        disabled={loading}
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-1">Link</label>
                                    <input
                                        type="url"
                                        required
                                        className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                                        placeholder="https://..."
                                        value={newPaper.link}
                                        onChange={e => setNewPaper({ ...newPaper, link: e.target.value })}
                                        disabled={loading}
                                    />
                                </div>
                                <div className="flex justify-end gap-3 mt-6">
                                    <button
                                        type="button"
                                        onClick={() => setIsModalOpen(false)}
                                        className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg text-sm font-medium"
                                        disabled={loading}
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        type="submit"
                                        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm font-medium flex items-center gap-2"
                                        disabled={loading}
                                    >
                                        {loading ? <RefreshCw size={14} className="animate-spin" /> : null}
                                        {loading ? 'Saving...' : 'Add Paper'}
                                    </button>
                                </div>
                            </form>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </div >
    );
}
