'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import TeamCompetition from '@/components/TeamCompetition';
import DuelMode from '@/components/DuelMode';
import WheelOfFortune from '@/components/WheelOfFortune';
import MillionaireQuiz from '@/components/MillionaireQuiz';
import Hangman from '@/components/Hangman';
import Taboo from '@/components/Taboo';
import GlassCard from '@/components/GlassCard';
import ParticleBackground from '@/components/ParticleBackground';

type GameMode = 'standard' | 'grade9' | 'ydt';

export default function GamePage({ params }: { params: { mode: string } }) {
    const [mode, setMode] = useState<GameMode>('standard');
    const [selectedLevel, setSelectedLevel] = useState('A1');
    const [selectedGameMode, setSelectedGameMode] = useState<string | null>(null);
    const [vocabulary, setVocabulary] = useState<any>(null);

    useEffect(() => {
        // Extract mode from params
        const resolveMode = async () => {
            const resolvedParams = await Promise.resolve(params);
            const gameMode = resolvedParams.mode as GameMode;
            setMode(gameMode);

            // Set default level
            if (gameMode === 'standard') setSelectedLevel('A1');
            else if (gameMode === 'grade9') setSelectedLevel('Grade9_Unit1');
            else if (gameMode === 'ydt') setSelectedLevel('YDT_Unit1');

            // Load vocabulary data
            if (gameMode === 'standard' || gameMode === 'grade9') {
                import('@/data/vocabulary-data.js').then((mod) => {
                    setVocabulary(mod.gameData);
                });
            } else if (gameMode === 'ydt') {
                import('@/data/ydt-vocabulary-data.js').then((mod) => {
                    setVocabulary(mod.ydtGameData);
                });
            }
        };
        resolveMode();
    }, [params]);

    const levels = mode === 'standard'
        ? ['A1', 'A2', 'B1', 'B2', 'C1', 'C2']
        : mode === 'grade9'
            ? Array.from({ length: 8 }, (_, i) => `Grade9_Unit${i + 1}`)
            : Array.from({ length: 10 }, (_, i) => `YDT_Unit${i + 1}`);

    const gameTitle = mode === 'standard' ? 'General English'
        : mode === 'grade9' ? '9th Grade Vocabulary'
            : '11th Grade Vocabulary';

    const gameIcon = mode === 'standard' ? '🌍'
        : mode === 'grade9' ? '📚'
            : '🎓';

    // Prepare vocabulary for current level
    useEffect(() => {
        if (vocabulary && (selectedGameMode === 'team' || selectedGameMode === 'duel')) {
            // Process vocabulary to create questions with points
            const levelData = vocabulary.levelData?.[selectedLevel];
            if (levelData) {
                // Show all words for YDT (11th grade), limited for others
                const maxQuestions = selectedLevel.startsWith('YDT_') ? 999 : 5;
                const processedCategories = levelData.map((cat: any) => {
                    const questions = (cat.pool || []).slice(0, maxQuestions).map((q: any) => ({
                        ...q,
                        points: 1  // All questions worth 1 point
                    }));
                    return { ...cat, questions };
                });
                setVocabulary({ ...vocabulary, levelData: { ...vocabulary.levelData, [selectedLevel]: processedCategories } });
            }
        }
    }, [selectedLevel, selectedGameMode]);

    const gameTheme = mode === 'standard' ? 'gaming'
        : mode === 'grade9' ? 'space'
            : 'neon';

    const backgroundGradient = mode === 'standard'
        ? 'from-[#0a0e27] via-[#1a1a3e] to-[#0a0e27]'
        : mode === 'grade9'
            ? 'from-[#1a0933] via-[#0f4c81] to-[#1a0933]'
            : 'from-[#1a0033] via-[#2d0052] to-[#1a0033]';

    const gameModes = [
        { id: 'team', icon: '🏆', title: 'Team Competition', description: 'Compete in teams', color: 'cyan' as const },
        { id: 'duel', icon: '⚔️', title: 'Duel Mode', description: '1v1 Speed Battle', color: 'orange' as const },
        { id: 'wheel', icon: '🎡', title: 'Wheel of Fortune', description: 'Spin to win', color: 'pink' as const },
        { id: 'millionaire', icon: '💰', title: 'Millionaire Quiz', description: 'Test your knowledge', color: 'yellow' as const },
        { id: 'hangman', icon: '🎯', title: 'Hangman', description: 'Guess the word', color: 'green' as const },
        { id: 'taboo', icon: '🙊', title: 'Taboo', description: 'Describe without forbidden words', color: 'purple' as const }
    ];

    return (
        <div className={`h-screen bg-gradient-to-br ${backgroundGradient} relative overflow-hidden flex flex-col`}>
            {/* Animated Background */}
            <ParticleBackground theme={gameTheme} />

            {/* Radial Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black/30 pointer-events-none" />

            <div className="relative z-10 h-full p-4 md:p-6 flex flex-col">
                <div className="max-w-7xl mx-auto w-full h-full flex flex-col">
                    {/* Header - Compact */}
                    <motion.div
                        className="flex items-center justify-between mb-2 md:mb-4 flex-shrink-0"
                        initial={{ y: -20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ type: 'spring', stiffness: 100 }}
                    >
                        <div className="flex items-center gap-2 md:gap-3">
                            <motion.button
                                onClick={() => {
                                    if (selectedGameMode) {
                                        setSelectedGameMode(null);
                                    } else {
                                        window.history.back();
                                    }
                                }}
                                className="bg-white/10 backdrop-blur-md hover:bg-white/20 text-white p-2 md:p-3 rounded-xl font-bold shadow-lg border border-white/20"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <span className="text-lg md:text-xl">←</span>
                            </motion.button>

                            <Link href="/">
                                <motion.button
                                    className="bg-white/10 backdrop-blur-md hover:bg-white/20 text-white p-2 md:p-3 rounded-xl font-bold shadow-lg border border-white/20"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <span className="text-lg md:text-xl">🏠</span>
                                </motion.button>
                            </Link>
                        </div>

                        <motion.div
                            className="text-center flex-1 mx-2"
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 0.1 }}
                        >
                            <h1 className="text-xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#00d9ff] via-[#ff0080] to-[#00ff88] truncate">
                                {gameTitle}
                            </h1>
                        </motion.div>

                        <div className="w-[88px] md:w-32"></div> {/* Spacer for balance */}
                    </motion.div>

                    {/* Game Mode Selection */}
                    {!selectedGameMode && (
                        <div className="flex-1 flex flex-col min-h-0 overflow-hidden">
                            {/* Level Selector - Ultra Compact */}
                            <motion.div
                                className="mb-2 md:mb-4 flex-shrink-0"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.2 }}
                            >
                                <GlassCard className="p-2 md:p-4">
                                    <div className="flex items-center gap-2 md:gap-4 overflow-x-auto pb-1 custom-scrollbar mask-gradient">
                                        <h2 className="text-sm md:text-lg font-bold text-white whitespace-nowrap">
                                            Level:
                                        </h2>
                                        <div className="flex gap-1 md:gap-2">
                                            {levels.map((level, idx) => (
                                                <motion.button
                                                    key={level}
                                                    onClick={() => setSelectedLevel(level)}
                                                    className={`px-3 py-1 md:px-4 md:py-2 rounded-lg font-bold text-xs md:text-sm transition-all whitespace-nowrap ${selectedLevel === level
                                                        ? 'bg-white text-purple-900 shadow-[0_0_15px_rgba(255,255,255,0.4)]'
                                                        : 'bg-white/10 text-white hover:bg-white/20'
                                                        }`}
                                                    initial={{ opacity: 0, x: -10 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    transition={{ delay: 0.3 + idx * 0.05 }}
                                                    whileHover={{ scale: 1.05 }}
                                                    whileTap={{ scale: 0.95 }}
                                                >
                                                    {mode === 'standard' ? level : `Unit ${idx + 1}`}
                                                </motion.button>
                                            ))}
                                        </div>
                                    </div>
                                </GlassCard>
                            </motion.div>

                            {/* Game Modes Grid - Compact Grid */}
                            <motion.div
                                className="flex-1 min-h-0 flex flex-col"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                            >
                                <h2 className="text-sm md:text-2xl font-bold text-white mb-2 md:mb-3 text-center flex-shrink-0 opacity-80">
                                    Choose Game Mode
                                </h2>

                                <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-4 overflow-y-auto pb-20 md:pb-0 pr-1">
                                    {gameModes.map((game, idx) => (
                                        <motion.div
                                            key={game.id}
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{ delay: 0.5 + idx * 0.1 }}
                                            className="w-full"
                                        >
                                            <GlassCard
                                                glowColor={game.color}
                                                onClick={() => setSelectedGameMode(game.id)}
                                                className="p-3 md:p-6 h-full min-h-[100px] md:min-h-[180px] flex flex-col items-center justify-center text-center hover:bg-white/5 transition-colors cursor-pointer group"
                                            >
                                                <div className="flex-shrink-0 mb-1 md:mb-4 group-hover:scale-110 transition-transform duration-300">
                                                    <span className="text-3xl md:text-6xl">{game.icon}</span>
                                                </div>
                                                <div className="flex flex-col gap-0 md:gap-2">
                                                    <h3 className="text-sm md:text-2xl font-bold text-white leading-tight">
                                                        {game.title}
                                                    </h3>
                                                    <p className="text-white/60 text-[10px] md:text-base hidden md:block">
                                                        {game.description}
                                                    </p>
                                                </div>
                                            </GlassCard>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        </div>
                    )}

                    {/* Team Competition Game */}
                    {selectedGameMode === 'team' && vocabulary && (
                        <TeamCompetition
                            vocabulary={vocabulary}
                            level={selectedLevel}
                            onBack={() => setSelectedGameMode(null)}
                        />
                    )}

                    {/* Duel Mode Game */}
                    {selectedGameMode === 'duel' && vocabulary && (
                        <DuelMode
                            vocabulary={vocabulary}
                            level={selectedLevel}
                            onBack={() => setSelectedGameMode(null)}
                        />
                    )}

                    {/* Wheel of Fortune Game */}
                    {selectedGameMode === 'wheel' && vocabulary && (
                        <WheelOfFortune
                            vocabulary={vocabulary}
                            level={selectedLevel}
                            onBack={() => setSelectedGameMode(null)}
                        />
                    )}

                    {/* Millionaire Quiz Game */}
                    {selectedGameMode === 'millionaire' && vocabulary && (
                        <MillionaireQuiz
                            vocabulary={vocabulary}
                            level={selectedLevel}
                            onBack={() => setSelectedGameMode(null)}
                        />
                    )}

                    {/* Hangman Game */}
                    {selectedGameMode === 'hangman' && vocabulary && (
                        <Hangman
                            vocabulary={vocabulary}
                            level={selectedLevel}
                            onBack={() => setSelectedGameMode(null)}
                        />
                    )}

                    {/* Taboo Game */}
                    {selectedGameMode === 'taboo' && vocabulary && (
                        <Taboo
                            vocabulary={vocabulary}
                            level={selectedLevel}
                            onBack={() => setSelectedGameMode(null)}
                        />
                    )}
                </div>
            </div>
        </div>
    );
}
