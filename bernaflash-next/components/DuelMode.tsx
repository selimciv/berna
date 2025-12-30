'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { logGameActivity } from '@/lib/gameActivityLogger';
import { speak } from '@/lib/textToSpeech';

interface DuelModeProps {
    vocabulary: any;
    level: string;
    onBack: () => void;
}

interface Question {
    word: any;
    options: any[];
}

export default function DuelMode({ vocabulary, level, onBack }: DuelModeProps) {
    const [teamAScore, setTeamAScore] = useState(0);
    const [teamBScore, setTeamBScore] = useState(0);
    const [currentQuestion, setCurrentQuestion] = useState<Question | null>(null);
    const [phase, setPhase] = useState<'countdown' | 'active' | 'result'>('countdown');
    const [countdown, setCountdown] = useState(3);
    const [lockout, setLockout] = useState<{ A: boolean; B: boolean }>({ A: false, B: false });
    const [winner, setWinner] = useState<'A' | 'B' | null>(null);
    const [roundMessage, setRoundMessage] = useState<string>('');
    const [optionsOrder, setOptionsOrder] = useState<number[]>([]); // To ensure same order for both

    const categories = vocabulary?.levelData?.[level] || [];
    const allWords = categories.flatMap((cat: any) => cat.pool || []);

    // Initial setup
    useEffect(() => {
        logGameActivity('Duel Mode', level);
        startNewRound();
    }, []);

    const startNewRound = () => {
        if (!allWords || allWords.length === 0) return;

        // Reset Round State
        setPhase('countdown');
        setCountdown(3);
        setLockout({ A: false, B: false });
        setWinner(null);
        setRoundMessage('');

        // Prepare Question
        const word = allWords[Math.floor(Math.random() * allWords.length)];

        // Generate options (1 correct + 3 distractors)
        const distractors = allWords
            .filter((w: any) => w.answer !== word.answer)
            .sort(() => Math.random() - 0.5)
            .slice(0, 3)
            .map((w: any) => ({ text: w.question, correct: false }));

        const correctOption = { text: word.question, correct: true };
        const allOptions = [correctOption, ...distractors].sort(() => Math.random() - 0.5);

        setCurrentQuestion({ word, options: allOptions });

        // Start Countdown
        let count = 3;
        const timer = setInterval(() => {
            count--;
            setCountdown(count);
            if (count === 0) {
                clearInterval(timer);
                setPhase('active');
                // Speak the word on reveal
                speak(word.answer);
            }
        }, 1000);
    };

    const handleAnswer = (team: 'A' | 'B', isCorrect: boolean) => {
        if (phase !== 'active' || lockout[team]) return;

        if (isCorrect) {
            // WIN CASE
            if (team === 'A') setTeamAScore(prev => prev + 1);
            else setTeamBScore(prev => prev + 1);

            setWinner(team);
            setRoundMessage(`${team === 'A' ? 'TEAM A' : 'TEAM B'} WINS!`);
            setPhase('result');

            // Auto restart after delay
            setTimeout(startNewRound, 2000);
        } else {
            // LOSE CASE (Lockout)
            setLockout(prev => ({ ...prev, [team]: true }));

            // Check if BOTH are locked out
            if (lockout[team === 'A' ? 'B' : 'A']) {
                setRoundMessage('NO POINTS!');
                setPhase('result');
                setTimeout(startNewRound, 2000);
            }
        }
    };

    if (!currentQuestion) return <div className="text-white text-center">Loading...</div>;

    return (
        <div className="h-full flex flex-col relative overflow-hidden">
            {/* Countdown Overlay */}
            <AnimatePresence>
                {phase === 'countdown' && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 1.5 }}
                        className="absolute inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm pointer-events-none"
                    >
                        <div className="text-[150px] font-bold text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.8)] animate-pulse">
                            {countdown}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Result Overlay */}
            <AnimatePresence>
                {phase === 'result' && (
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 z-40 flex flex-col items-center justify-center bg-black/75 backdrop-blur-md pointer-events-none"
                    >
                        <div className={`text-6xl font-bold mb-4 drop-shadow-lg ${winner === 'A' ? 'text-blue-400' : winner === 'B' ? 'text-red-400' : 'text-gray-400'
                            }`}>
                            {roundMessage}
                        </div>
                        <div className="text-white text-2xl bg-white/10 px-6 py-2 rounded-xl border border-white/20">
                            {currentQuestion.word.answer} = {currentQuestion.word.question}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Main Game Area (Split Screen) */}
            <div className="flex-1 flex w-full h-full relative">

                {/* --- TEAM A (LEFT) --- */}
                <div className={`flex-1 border-r border-white/10 flex flex-col p-4 transition-all duration-300 ${lockout.A ? 'opacity-50 grayscale' : 'bg-gradient-to-br from-blue-900/40 to-blue-800/20'
                    } ${winner === 'A' ? 'bg-blue-600/30' : ''}`}>

                    {/* Header */}
                    <div className="flex justify-between items-center mb-6 border-b border-blue-500/30 pb-2">
                        <h2 className="text-3xl font-bold text-blue-400">TEAM A</h2>
                        <div className="text-5xl font-bold text-white">{teamAScore}</div>
                    </div>

                    {/* Word Display */}
                    <div className="flex-1 flex flex-col justify-center items-center mb-6">
                        {phase !== 'countdown' ? (
                            <div className="text-center">
                                <div className="text-blue-200 text-sm mb-2 font-bold tracking-widest">TRANSLATE THIS</div>
                                <div className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg mb-2">
                                    {currentQuestion.word.answer}
                                </div>
                                <div className="text-white/50 italic text-lg">/{currentQuestion.word.pronunciation}/</div>
                            </div>
                        ) : (
                            <div className="text-white/20 text-xl animate-pulse">Get Ready...</div>
                        )}
                    </div>

                    {/* Options Grid */}
                    <div className="grid grid-cols-2 gap-3 mt-auto">
                        {currentQuestion.options.map((opt, idx) => (
                            <button
                                key={`A-${idx}`}
                                onClick={() => handleAnswer('A', opt.correct)}
                                disabled={phase !== 'active' || lockout.A}
                                className={`h-24 rounded-xl text-xl font-bold transition-all border-2 ${lockout.A
                                    ? 'border-gray-600 bg-gray-800/50 text-gray-500 cursor-not-allowed'
                                    : 'border-blue-500/30 bg-blue-500/10 hover:bg-blue-500/30 hover:border-blue-400 hover:scale-[1.02] active:scale-95 text-white'
                                    }`}
                            >
                                {phase === 'active' || phase === 'result' ? opt.text : '???'}
                            </button>
                        ))}
                    </div>
                </div>


                {/* --- TEAM B (RIGHT) --- */}
                <div className={`flex-1 border-l border-white/10 flex flex-col p-4 transition-all duration-300 ${lockout.B ? 'opacity-50 grayscale' : 'bg-gradient-to-bl from-red-900/40 to-red-800/20'
                    } ${winner === 'B' ? 'bg-red-600/30' : ''}`}>

                    {/* Header */}
                    <div className="flex justify-between items-center mb-6 border-b border-red-500/30 pb-2">
                        <div className="text-5xl font-bold text-white">{teamBScore}</div>
                        <h2 className="text-3xl font-bold text-red-400">TEAM B</h2>
                    </div>

                    {/* Word Display */}
                    <div className="flex-1 flex flex-col justify-center items-center mb-6">
                        {phase !== 'countdown' ? (
                            <div className="text-center">
                                <div className="text-red-200 text-sm mb-2 font-bold tracking-widest">TRANSLATE THIS</div>
                                <div className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg mb-2">
                                    {currentQuestion.word.answer}
                                </div>
                                <div className="text-white/50 italic text-lg">/{currentQuestion.word.pronunciation}/</div>
                            </div>
                        ) : (
                            <div className="text-white/20 text-xl animate-pulse">Get Ready...</div>
                        )}
                    </div>

                    {/* Options Grid */}
                    <div className="grid grid-cols-2 gap-3 mt-auto">
                        {currentQuestion.options.map((opt, idx) => (
                            <button
                                key={`B-${idx}`}
                                onClick={() => handleAnswer('B', opt.correct)}
                                disabled={phase !== 'active' || lockout.B}
                                className={`h-24 rounded-xl text-xl font-bold transition-all border-2 ${lockout.B
                                    ? 'border-gray-600 bg-gray-800/50 text-gray-500 cursor-not-allowed'
                                    : 'border-red-500/30 bg-red-500/10 hover:bg-red-500/30 hover:border-red-400 hover:scale-[1.02] active:scale-95 text-white'
                                    }`}
                            >
                                {phase === 'active' || phase === 'result' ? opt.text : '???'}
                            </button>
                        ))}
                    </div>
                </div>

                {/* VS Badge Center */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white rounded-full flex items-center justify-center z-10 font-black text-2xl text-black shadow-[0_0_20px_rgba(255,255,255,0.5)]">
                    VS
                </div>
            </div>


        </div>
    );
}
