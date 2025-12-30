'use client';

import { useState, useEffect } from 'react';
import { logGameActivity } from '@/lib/gameActivityLogger';
import { speak } from '@/lib/textToSpeech';

interface TeamCompetitionProps {
    vocabulary: any;
    level: string;
    onBack: () => void;
}

export default function TeamCompetition({ vocabulary, level, onBack }: TeamCompetitionProps) {
    const [teams, setTeams] = useState([
        { name: 'Team A', score: 0, color: 'bg-blue-500' },
        { name: 'Team B', score: 0, color: 'bg-green-500' },
        { name: 'Team C', score: 0, color: 'bg-yellow-500' },
        { name: 'Team D', score: 0, color: 'bg-red-500' },
    ]);

    const [selectedCard, setSelectedCard] = useState<any>(null);
    const [usedCards, setUsedCards] = useState<Set<string>>(new Set());
    const [shuffledCategories, setShuffledCategories] = useState<any[]>([]);

    // Fisher-Yates shuffle algorithm
    const shuffleArray = (array: any[]) => {
        const shuffled = [...array];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    };

    // Log game activity on mount
    useEffect(() => {
        logGameActivity('Team Competition', level);
    }, []);

    // Shuffle questions on mount and split into columns
    useEffect(() => {
        const categories = vocabulary?.levelData?.[level] || [];
        // Optimized column size for YDT to fit all words nicely
        const maxWordsPerColumn = level.startsWith('YDT_') ? 15 : 5;

        const expandedCategories: any[] = [];

        categories.forEach((cat: any) => {
            // Use 'questions' if available (which has points), otherwise fall back to 'pool'
            const words = cat.questions || cat.pool || [];
            const shuffledWords = shuffleArray(words);

            // Split into chunks of maxWordsPerColumn
            const numColumns = Math.ceil(shuffledWords.length / maxWordsPerColumn);

            for (let i = 0; i < numColumns; i++) {
                const start = i * maxWordsPerColumn;
                const end = Math.min(start + maxWordsPerColumn, shuffledWords.length);
                const chunk = shuffledWords.slice(start, end);

                expandedCategories.push({
                    name: numColumns > 1 ? `${cat.name} (${i + 1})` : cat.name,
                    originalName: cat.name,
                    columnIndex: i,
                    pool: chunk
                });
            }
        });

        setShuffledCategories(expandedCategories);
    }, [vocabulary, level]);

    // Load categories from vocabulary data
    const categories = shuffledCategories;
    // Dynamic maxRows: find the longest category to show all words
    const maxRows = categories.length > 0
        ? Math.max(...categories.map((cat: any) => cat.pool?.length || 0))
        : 5;

    const handleCardClick = (category: string, questionIndex: number, question: any) => {
        const cardId = `${category}-${questionIndex}`;
        if (usedCards.has(cardId)) return;

        setSelectedCard({ category, questionIndex, question, cardId });
    };

    const handleAwardPoints = (teamIndex: number) => {
        if (!selectedCard) return;

        const newTeams = [...teams];
        newTeams[teamIndex].score += selectedCard.question.points || (selectedCard.questionIndex + 1);
        setTeams(newTeams);

        // Mark card as used
        setUsedCards(new Set([...usedCards, selectedCard.cardId]));
        setSelectedCard(null);
    };

    return (
        <div className="h-full flex flex-col gap-2">
            {/* Scoreboard */}
            <div className="flex-shrink-0 grid grid-cols-2 md:grid-cols-4 gap-2">
                {teams.map((team, idx) => (
                    <div key={idx} className={`${team.color} rounded-xl p-2 text-white text-center shadow-lg backdrop-blur-md bg-opacity-90 border border-white/20 transition-all hover:scale-105`}>
                        <div className="font-bold text-xs md:text-sm">{team.name}</div>
                        <div className="text-lg md:text-2xl font-bold drop-shadow-lg">{team.score}</div>
                    </div>
                ))}
            </div>

            {/* Game Board - Full height, no scroll */}
            <div className="flex-1 bg-white/10 backdrop-blur-lg rounded-2xl p-2 border border-white/10 shadow-xl custom-scrollbar overflow-hidden">
                <div className="w-full h-full">
                    <div className="grid gap-1 h-full" style={{ gridTemplateColumns: `repeat(${categories.length}, minmax(120px, 1fr))`, gridTemplateRows: `auto repeat(${maxRows}, 1fr)` }}>
                        {/* Category Headers */}
                        {categories.map((cat: any, catIdx: number) => (
                            <div key={catIdx} className="bg-purple-600/80 text-white p-2 rounded-lg text-center font-bold flex items-center justify-center border border-white/20 shadow-md">
                                <span className="line-clamp-2 text-xs">{cat.name}</span>
                            </div>
                        ))}


                        {/* Question Cards */}
                        {Array.from({ length: maxRows }).map((_, rowIdx) => (
                            categories.map((cat: any, catIdx: number) => {
                                const question = cat.pool?.[rowIdx];
                                if (!question) return <div key={`${catIdx}-${rowIdx}`} className="h-full" />;

                                const cardId = `${cat.originalName || cat.name}-${cat.columnIndex || 0}-${rowIdx}`;
                                const isUsed = usedCards.has(cardId);

                                return (
                                    <button
                                        key={cardId}
                                        onClick={() => handleCardClick(cat.name, rowIdx, question)}
                                        disabled={isUsed}
                                        className={`h-full rounded-lg font-bold text-sm md:text-base transition-all border border-white/10 flex items-center justify-center ${isUsed
                                            ? 'bg-gray-700/50 text-gray-500 cursor-not-allowed border-transparent'
                                            : 'bg-gradient-to-br from-emerald-600 to-green-700 text-white hover:scale-105 shadow-md hover:shadow-xl hover:z-10'
                                            }`}
                                    >
                                        {question.points || 1}
                                    </button>
                                );
                            })
                        ))}
                    </div>
                </div>
            </div>

            {/* Question Modal */}
            {selectedCard && (
                <div className="fixed inset-0 bg-black/90 flex items-center justify-center p-2 z-50 animate-fadeIn">
                    <div className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl p-4 w-full max-w-5xl h-full max-h-[95vh] flex flex-col shadow-2xl animate-scaleIn border border-white/20">
                        {/* Header */}
                        <div className="flex justify-between items-center mb-2 flex-shrink-0">
                            {[
                                <div key="info" className="bg-white/20 px-4 py-1.5 rounded-lg backdrop-blur-sm border border-white/10 flex items-center gap-4">
                                    <div className="text-white text-sm opacity-90 font-medium">{selectedCard.category}</div>
                                    <div className="w-px h-4 bg-white/30"></div>
                                    <div className="text-white text-xl font-bold text-yellow-300">
                                        {selectedCard.question.points || (selectedCard.questionIndex + 1)} pts
                                    </div>
                                </div>
                            ]}
                            <button
                                onClick={() => setSelectedCard(null)}
                                className="text-white text-2xl hover:scale-110 transition-transform bg-white/10 w-8 h-8 rounded-full flex items-center justify-center hover:bg-white/20 hover:text-red-300"
                            >
                                ×
                            </button>
                        </div>

                        {/* Question Content */}
                        <div className="flex-1 flex flex-col bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/10 overflow-hidden relative">
                            {/* Word & Pronunciation Section */}
                            <div className="flex flex-col items-center justify-center flex-1 text-center py-4">
                                <div className="text-white text-5xl md:text-6xl font-bold mb-2 tracking-tight drop-shadow-xl">
                                    {selectedCard.question.answer}
                                </div>
                                <div className="flex items-center gap-3 mb-4">
                                    <button
                                        onClick={() => speak(selectedCard.question.answer)}
                                        className="bg-white/20 hover:bg-white/30 p-3 rounded-full transition-all text-white shadow-lg group"
                                        title="Listen"
                                    >
                                        <span className="group-hover:scale-110 block text-xl">🔊</span>
                                    </button>
                                    <div className="text-white/80 text-2xl font-serif italic">/{selectedCard.question.pronunciation}/</div>
                                </div>

                                {/* Show Answer Button - Centered */}
                                <button
                                    id="show-answer-btn"
                                    onClick={() => {
                                        const answerEl = document.getElementById('answer-section');
                                        const btnEl = document.getElementById('show-answer-btn');
                                        if (answerEl && btnEl) {
                                            answerEl.classList.remove('hidden');
                                            answerEl.classList.add('flex');
                                            btnEl.classList.add('hidden'); // Hide button after click to save space

                                            // Play audio sequentially: Word -> wait -> Example
                                            speak(selectedCard.question.answer, () => {
                                                setTimeout(() => {
                                                    if (selectedCard.question.example) {
                                                        speak(selectedCard.question.example);
                                                    }
                                                }, 500);
                                            });
                                        }
                                    }}
                                    className="px-8 py-3 bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-white font-bold text-lg rounded-xl transition-all shadow-lg hover:shadow-orange-500/30 animate-pulse"
                                >
                                    SHOW ANSWER
                                </button>
                            </div>

                            {/* Answer Section - Initially Hidden */}
                            <div id="answer-section" className="hidden flex-col items-center justify-center flex-1 border-t border-white/10 pt-4 animate-slideUp gap-4">
                                {/* Meaning */}
                                <div className="bg-black/20 rounded-xl px-8 py-4 text-center border border-white/5 w-full max-w-2xl">
                                    <div className="text-white/50 text-xs tracking-widest mb-1">TURKISH MEANING</div>
                                    <div className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-300">
                                        {selectedCard.question.question}
                                    </div>
                                </div>

                                {/* Example Sentence */}
                                {selectedCard.question.example && (
                                    <div className="bg-white/5 rounded-xl p-4 border border-white/10 w-full max-w-3xl flex items-center gap-4 hover:bg-white/10 transition-colors">
                                        <button
                                            onClick={() => speak(selectedCard.question.example)}
                                            className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all flex-shrink-0"
                                        >
                                            🔊
                                        </button>
                                        <div className="text-left">
                                            <div className="text-white text-lg md:text-xl font-medium leading-snug">{selectedCard.question.example}</div>
                                            <div className="text-white/50 text-base italic mt-1">{selectedCard.question.exampleTR}</div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Team Buttons Footer - Compact */}
                        <div className="mt-3 pt-3 border-t border-white/10 flex-shrink-0">
                            <div className="text-white/50 text-xs text-center mb-2 tracking-widest">AWARD POINTS TO TEAM</div>
                            <div className="grid grid-cols-4 gap-3 h-16">
                                {teams.map((team, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => handleAwardPoints(idx)}
                                        className={`${team.color} hover:brightness-110 text-white font-bold rounded-lg transition-all transform hover:scale-[1.02] shadow-lg border-b-4 border-black/20 active:border-b-0 active:translate-y-1 flex flex-col items-center justify-center h-full`}
                                    >
                                        <span className="text-sm md:text-base leading-none">{team.name}</span>
                                        <span className="text-[10px] opacity-80 mt-1 font-normal">+{selectedCard.question.points || (selectedCard.questionIndex + 1)}</span>
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
