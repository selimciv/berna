'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import PasswordModal from '@/components/PasswordModal';
import HomeworkControl from '@/components/HomeworkControl';
import HomeworkReport from '@/components/HomeworkReport';
import ParticleBackground from '@/components/ParticleBackground';
import PremiumButton from '@/components/PremiumButton';
import GlassCard from '@/components/GlassCard';
import FeedbackButton from '@/components/FeedbackButton';

type ModalType = 'password-control' | 'password-report' | 'homework-control' | 'homework-report' | null;
type Theme = 'gaming' | 'space' | 'neon';

export default function LandingPage() {
  const [activeModal, setActiveModal] = useState<ModalType>(null);
  const [theme, setTheme] = useState<Theme>('gaming');
  const [showThemeSelector, setShowThemeSelector] = useState(false);

  // Load theme from localStorage on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('bernaflash-theme') as Theme;
    if (savedTheme && ['gaming', 'space', 'neon'].includes(savedTheme)) {
      setTheme(savedTheme);
    }
  }, []);

  // Save theme to localStorage when changed
  const changeTheme = (newTheme: Theme) => {
    setTheme(newTheme);
    localStorage.setItem('bernaflash-theme', newTheme);
    setShowThemeSelector(false);
  };

  // Theme configurations
  const themes = {
    gaming: {
      name: 'Gaming',
      icon: '🎮',
      bg: 'bg-gradient-to-br from-[#0a0e27] via-[#1a1a3e] to-[#0a0e27]'
    },
    space: {
      name: 'Space',
      icon: '🚀',
      bg: 'bg-gradient-to-br from-[#1a0933] via-[#0f4c81] to-[#1a0933]'
    },
    neon: {
      name: 'Neon Arcade',
      icon: '🕹️',
      bg: 'bg-gradient-to-br from-[#1a0033] via-[#2d0052] to-[#1a0033]'
    }
  };

  const currentTheme = themes[theme];

  const openHomeworkControl = () => {
    setActiveModal('password-control');
  };

  const openHomeworkReport = () => {
    setActiveModal('homework-report');
  };

  return (
    <div className={`h-screen ${currentTheme.bg} transition-all duration-500 relative overflow-hidden`}>
      {/* Animated Particle Background */}
      <ParticleBackground theme={theme} />

      {/* Radial Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black/30 pointer-events-none" />

      {/* Main Content */}
      <div className="relative z-10 h-screen flex flex-col items-center justify-between px-2 py-4 md:px-4 md:py-8 safe-area-inset-top">

        {/* Header Section */}
        <div className="flex flex-col items-center w-full mt-2">
          {/* Title */}
          <motion.h1
            className="text-2xl md:text-5xl font-bold mb-1 text-center text-transparent bg-clip-text bg-gradient-to-r from-[#00d9ff] via-[#ff0080] to-[#00ff88] animate-float"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 80, damping: 15, delay: 0.2 }}
            style={{ textShadow: '0 0 40px rgba(0,217,255,0.5)' }}
          >
            Vocabulary Challenge
          </motion.h1>

          <motion.p
            className="text-white/70 text-xs md:text-base mb-2 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Choose your learning mode
          </motion.p>

          {/* Total Words Counter - Inline */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, type: 'spring' }}
            className="bg-white/5 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 flex items-center gap-2 group hover:bg-white/10 transition-colors duration-300 mb-2"
          >
            <div className="bg-gradient-to-br from-yellow-400 to-orange-500 w-5 h-5 rounded-full flex items-center justify-center shadow-lg">
              <span className="text-xs">📚</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] text-white/50 uppercase tracking-widest font-bold leading-none">Total:</span>
              <span className="text-white font-bold text-sm leading-none font-mono">1,725</span>
            </div>
          </motion.div>
        </div>

        {/* Premium Cards Grid - FULL HEIGHT COMPACT */}
        <div className="w-full max-w-5xl flex-1 flex flex-col justify-center gap-4 min-h-0 py-2">

          {/* Main Games Section */}
          <div className="flex flex-col gap-2">
            <motion.h2
              className="text-sm md:text-xl font-bold text-white text-center opacity-80"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              📚 Levels
            </motion.h2>

            <div className="grid grid-cols-3 gap-2 md:gap-4">
              <PremiumButton
                href="/game/standard"
                icon="🌍"
                title="General"
                description="Daily Vocab"
                glowColor="cyan"
                size="medium"
                delay={0.6}
              />

              <PremiumButton
                href="/game/grade9"
                icon="📚"
                title="9th Grade"
                description="School"
                glowColor="pink"
                size="medium"
                delay={0.75}
              />

              <PremiumButton
                href="/game/ydt"
                icon="🎓"
                title="11th Grade"
                description="Exam Prep"
                glowColor="green"
                size="medium"
                delay={0.9}
              />
            </div>
          </div>

          {/* Teacher Tools Section */}
          <div className="flex flex-col gap-2 mt-2">
            <motion.h2
              className="text-sm md:text-xl font-bold text-white text-center opacity-80"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.0 }}
            >
              👩‍🏫 Tools
            </motion.h2>

            <div className="grid grid-cols-2 gap-2 md:gap-4 max-w-2xl mx-auto w-full">
              <PremiumButton
                onClick={openHomeworkControl}
                icon="📝"
                title="Control"
                description="Check Homework"
                glowColor="purple"
                size="medium"
                delay={1.1}
              />

              <PremiumButton
                onClick={openHomeworkReport}
                icon="📊"
                title="Report"
                description="View Report"
                glowColor="yellow"
                size="medium"
                delay={1.25}
              />
            </div>
          </div>
        </div>

        {/* Footer */}
        <motion.div
          className="text-white text-center w-full mb-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
        >
          <p className="text-xs md:text-base font-semibold">Berna Fergana Civelek</p>
          <p className="text-[10px] opacity-75 md:text-xs">V29.12.2025.00.03 © 2025</p>
        </motion.div>
      </div>

      {/* Password Modals */}
      <FeedbackButton />
      {activeModal === 'password-control' && (
        <PasswordModal
          title="Ödev Kontrolü - Öğretmen Girişi"
          onSuccess={() => setActiveModal('homework-control')}
          onClose={() => setActiveModal(null)}
        />
      )}

      {activeModal === 'password-report' && (
        <PasswordModal
          title="Ödev Raporu - Öğretmen Girişi"
          onSuccess={() => setActiveModal('homework-report')}
          onClose={() => setActiveModal(null)}
        />
      )}

      {/* Homework Modals */}
      {activeModal === 'homework-control' && (
        <HomeworkControl onClose={() => setActiveModal(null)} />
      )}

      {activeModal === 'homework-report' && (
        <HomeworkReport onClose={() => setActiveModal(null)} />
      )}
    </div>
  );
}
