'use client';

import { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

export default function MouseGradient() {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springConfig = { damping: 25, stiffness: 150 };
    const springX = useSpring(mouseX, springConfig);
    const springY = useSpring(mouseY, springConfig);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            mouseX.set(e.clientX - 250); // Center the 500px div
            mouseY.set(e.clientY - 250);
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, [mouseX, mouseY]);

    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
            <motion.div
                className="absolute w-[500px] h-[500px] rounded-full opacity-40 blur-[100px] mix-blend-multiply dark:mix-blend-screen"
                style={{
                    x: springX,
                    y: springY,
                    background: 'radial-gradient(circle, rgba(99,102,241,1) 0%, rgba(168,85,247,1) 50%, rgba(236,72,153,1) 100%)',
                }}
            />
            {/* Secondary ambient blobs */}
            <div className="absolute top-[-10%] right-[-5%] w-[400px] h-[400px] bg-blue-400/20 rounded-full blur-[80px]" />
            <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-purple-400/20 rounded-full blur-[80px]" />
        </div>
    );
}
