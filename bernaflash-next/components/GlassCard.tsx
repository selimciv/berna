'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

type GlowColor = 'cyan' | 'pink' | 'purple' | 'green' | 'yellow' | 'red' | 'blue' | 'orange';

interface GlassCardProps {
    children: ReactNode;
    className?: string;
    glowColor?: GlowColor;
    onClick?: () => void;
    delay?: number;
    premium?: boolean; // Extra premium effects
}

export default function GlassCard({
    children,
    className = '',
    glowColor = 'cyan',
    onClick,
    delay = 0,
    premium = false
}: GlassCardProps) {

    const glowColors: Record<GlowColor, string> = {
        cyan: 'hover:shadow-[0_0_40px_rgba(0,217,255,0.4)]',
        pink: 'hover:shadow-[0_0_40px_rgba(255,0,128,0.4)]',
        green: 'hover:shadow-[0_0_40px_rgba(0,255,136,0.4)]',
        purple: 'hover:shadow-[0_0_40px_rgba(157,0,255,0.4)]',
        yellow: 'hover:shadow-[0_0_40px_rgba(255,215,0,0.4)]',
        red: 'hover:shadow-[0_0_40px_rgba(255,0,0,0.4)]',
        blue: 'hover:shadow-[0_0_40px_rgba(0,0,255,0.4)]',
        orange: 'hover:shadow-[0_0_40px_rgba(255,165,0,0.4)]'
    };

    const borderColors: Record<GlowColor, string> = {
        cyan: 'hover:border-[#00d9ff]/40',
        pink: 'hover:border-[#ff0080]/40',
        green: 'hover:border-[#00ff88]/40',
        purple: 'hover:border-[#9d00ff]/40',
        yellow: 'hover:border-[#ffd700]/40',
        red: 'hover:border-[#ff0000]/40',
        blue: 'hover:border-[#0000ff]/40',
        orange: 'hover:border-[#ffa500]/40'
    };

    const borderGradients: Record<GlowColor, string> = {
        cyan: 'linear-gradient(90deg, #00d9ff, #0080ff, #00d9ff)',
        pink: 'linear-gradient(90deg, #ff0080, #ff1493, #ff0080)',
        green: 'linear-gradient(90deg, #00ff88, #00cc66, #00ff88)',
        purple: 'linear-gradient(90deg, #9d00ff, #6600cc, #9d00ff)',
        yellow: 'linear-gradient(90deg, #ffd700, #ffa500, #ffd700)',
        red: 'linear-gradient(90deg, #ff0000, #ff3333, #ff0000)',
        blue: 'linear-gradient(90deg, #0000ff, #3333ff, #0000ff)',
        orange: 'linear-gradient(90deg, #ffa500, #ff8c00, #ffa500)'
    };

    return (
        <motion.div
            className={`
        relative
        bg-white/10 backdrop-blur-xl
        border border-white/20
        rounded-2xl
        shadow-[0_8px_32px_rgba(0,0,0,0.3)]
        transition-all duration-300
        ${glowColors[glowColor]}
        ${borderColors[glowColor]}
        ${premium ? 'shadow-[0_0_60px_rgba(0,217,255,0.3)]' : ''}
        ${onClick ? 'cursor-pointer' : ''}
        ${className}
      `}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
                delay,
                type: 'spring',
                stiffness: 100,
                damping: 15
            }}
            whileHover={onClick ? {
                scale: 1.05,
                y: -5
            } : {}}
            whileTap={onClick ? { scale: 0.98 } : {}}
            onClick={onClick}
        >
            {/* Animated border gradient for premium cards */}
            {premium && (
                <div
                    className="absolute inset-0 rounded-2xl opacity-50 pointer-events-none"
                    style={{
                        background: borderGradients[glowColor],
                        backgroundSize: '200% 100%',
                        padding: '2px',
                        WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                        WebkitMaskComposite: 'xor',
                        maskComposite: 'exclude',
                        animation: 'borderGradient 3s linear infinite'
                    }}
                />
            )}

            {/* Inner glow - enhanced for premium */}
            <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br from-white/${premium ? '20' : '10'} to-transparent pointer-events-none`} />

            {/* Content */}
            <div className="relative z-10">
                {children}
            </div>
        </motion.div>
    );
}
