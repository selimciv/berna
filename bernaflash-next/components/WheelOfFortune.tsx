'use client';

import { useState, useEffect } from 'react';
import { logGameActivity } from '@/lib/gameActivityLogger';
import { speak } from '@/lib/textToSpeech';
import GlassCard from './GlassCard';

interface WheelOfFortuneProps {
    vocabulary: any;
    level: string;
    onBack: () => void;
}

export default function WheelOfFortune({ vocabulary, level, onBack }: WheelOfFortuneProps) {
    const [currentQuestion, setCurrentQuestion] = useState<any>(null);
    const [teams, setTeams] = useState([
        { name: 'Team A', score: 0, color: 'bg-blue-500', jokers: 3 },
        { name: 'Team B', score: 0, color: 'bg-green-500', jokers: 3 },
        { name: 'Team C', score: 0, color: 'bg-yellow-500', jokers: 3 },
        { name: 'Team D', score: 0, color: 'bg-red-500', jokers: 3 },
    ]);
    const [selectedTeam, setSelectedTeam] = useState<number | null>(null);
    const [spinning, setSpinning] = useState(false);
    const [rotation, setRotation] = useState(0);
    const [showAnswer, setShowAnswer] = useState(false);
    const [segments, setSegments] = useState<any[]>([]);

    // Timer State
    const [timeLeft, setTimeLeft] = useState(30);

    const categories = vocabulary?.levelData?.[level] || [];
    const allWords = categories.flatMap((cat: any) => cat.pool || []);

    // Log game activity on mount
    useEffect(() => {
        logGameActivity('Wheel of Fortune', level);
    }, []);

    // Timer Logic
    useEffect(() => {
        if (!currentQuestion || showAnswer || timeLeft <= 0) return;

        const timer = setInterval(() => {
            setTimeLeft((prev) => {
                if (prev <= 1) {
                    // Time's up! Return to spin screen
                    setCurrentQuestion(null);
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);

        return () => clearInterval(timer);
    }, [currentQuestion, showAnswer, timeLeft]);

    // Reset timer when a new question is shown
    useEffect(() => {
        if (currentQuestion) {
            setTimeLeft(30);
        }
    }, [currentQuestion]);

    // Colors for segments - Expanded Palette for better variety
    const SEGMENT_COLORS = [
        '#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4',
        '#FFEEAD', '#FFCC5C', '#FF9671', '#D4A5A5',
        '#9B59B6', '#3498DB', '#E67E22', '#E74C3C',
        '#2ECC71', '#F1C40F', '#1ABC9C', '#34495E'
    ];

    // Initialize/Refresh segments
    useEffect(() => {
        if (allWords.length > 0 && segments.length === 0) {
            refreshSegments();
        }
    }, [allWords]);

    const refreshSegments = () => {
        // Show ALL words as requested
        // If there are too many (>50), we might want to slice, but user asked for "o ünitedeki tüm kelimeler"
        // Let's shuffle them for randomness but keep all.
        const shuffled = [...allWords].sort(() => 0.5 - Math.random());
        setSegments(shuffled);
    };

    const spinWheel = () => {
        if (spinning || segments.length === 0) return;

        setSpinning(true);
        setShowAnswer(false);
        setTimeLeft(30); // Ensure timer is reset before spinning starts (or when question appears)

        // Pick a random winner
        const winnerIndex = Math.floor(Math.random() * segments.length);
        const winner = segments[winnerIndex];

        const segmentAngle = 360 / segments.length;
        const spins = 10;

        // Calculate target rotation
        // Align segment center to top marker (which is at -90deg visually or 0deg depending on setup)
        // We set up text at 0deg (Top) then rotate.
        // Pointer is at Top.
        // To verify: transform: rotate(angle). 
        // If we want index I to be at Top (0deg effective), we need - (I * segmentAngle + segmentAngle/2).
        // Let's stick to the previous calibrated logic:
        // (360 - (index * angle)) brings the START of the segment to 0.
        // We want the CENTER. So subtract half angle.

        const centerOffset = segmentAngle / 2;

        // Add random jitter within the segment, but keep it safe (80% of width)
        const safeZone = segmentAngle * 0.8;
        const randomOffset = (Math.random() * safeZone) - (safeZone / 2);

        // Formula: 
        // 1. Full spins
        // 2. Align start of winner segment to 0 (which is top) -> (360 - (winnerIndex * segmentAngle))
        // 3. Align center of winner segment -> - centerOffset
        // 4. Randomize -> + randomOffset

        const targetRotation = rotation + (spins * 360) + (360 - (winnerIndex * segmentAngle)) - centerOffset + randomOffset;

        setRotation(targetRotation);

        setTimeout(() => {
            setCurrentQuestion(winner);
            setSpinning(false);
        }, 3500);
    };



    const handleShowAnswer = () => {
        setShowAnswer(true);
        if (currentQuestion) {
            speak(currentQuestion.answer, () => {
                setTimeout(() => {
                    speak(currentQuestion.example);
                }, 500);
            });
        }
    };

    const handleJokerClick = (teamIndex: number) => {
        setTeams(prev => prev.map((team, idx) => {
            if (idx === teamIndex && team.jokers > 0) {
                return { ...team, jokers: team.jokers - 1 };
            }
            return team;
        }));
    };

    if (allWords.length === 0) {
        return (
            <div className="h-full flex flex-col items-center justify-center text-white">
                <div className="text-2xl mb-4">⚠️ No vocabulary words found</div>
                <p>Level: {level}</p>
                <button onClick={onBack} className="mt-4 px-6 py-2 bg-white/20 rounded-lg hover:bg-white/30">Go Back</button>
            </div>
        );
    }

    const segmentAngle = 360 / (segments.length || 1);

    // Dynamic font size based on number of segments
    const getFontSize = () => {
        if (segments.length > 30) return 'text-[8px] md:text-[10px]';
        if (segments.length > 20) return 'text-[10px] md:text-xs';
        if (segments.length > 12) return 'text-xs md:text-sm';
        return 'text-sm md:text-xl';
    };

    return (
        <div className="h-full flex flex-col gap-4">
            {/* Team Scoreboard */}
            <div className="flex gap-2 md:gap-3 flex-shrink-0">
                {teams.map((team, idx) => (
                    <div
                        key={idx}
                        className={`flex-1 ${team.color} rounded-lg md:rounded-xl p-2 md:p-3 text-center transition-all relative group ${selectedTeam === idx ? 'ring-4 ring-white shadow-xl scale-105' : 'opacity-90'
                            }`}
                    >
                        <div className="text-white text-xs md:text-sm font-bold">{team.name}</div>
                        <div className="text-white text-xl md:text-3xl font-bold">{team.score}</div>

                        {/* Joker Button */}
                        {team.jokers > 0 && (
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    handleJokerClick(idx);
                                }}
                                className="absolute -top-3 -right-3 w-12 h-12 rounded-full bg-purple-600 text-white border-2 border-white shadow-lg flex items-center justify-center font-bold text-xl hover:scale-110 transition-transform z-10"
                                title="Use Joker"
                            >
                                🃏
                                <span className="absolute -bottom-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full border border-white">
                                    {team.jokers}
                                </span>
                            </button>
                        )}
                    </div>
                ))}
            </div>

            <div className="flex-1 min-h-0 flex flex-col items-center justify-center relative">
                {/* Main Content Container */}
                <div className={`transition-all duration-500 flex flex-col items-center justify-center ${currentQuestion ? 'scale-90 opacity-20 blur-sm pointer-events-none' : 'scale-100 opacity-100'}`}>
                    {/* Wheel */}
                    <div className="relative mb-6">
                        <div
                            className="w-[85vw] h-[85vw] md:w-[450px] md:h-[450px] lg:w-[45vh] lg:h-[45vh] max-w-[350px] max-h-[350px] md:max-w-[500px] md:max-h-[500px] rounded-full border-4 border-white shadow-[0_0_50px_rgba(255,255,255,0.2)] transition-transform duration-[3500ms] cubic-bezier(0.17, 0.67, 0.12, 0.99)" // Custom easing for realistic spin
                            style={{
                                transform: `rotate(${rotation}deg)`,
                                position: 'relative',
                                overflow: 'hidden',
                                // Use Conic Gradient for perfect segments
                                background: `conic-gradient(
                                    ${segments.map((_, i) => `${SEGMENT_COLORS[i % SEGMENT_COLORS.length]} ${i * (100 / segments.length)}% ${(i + 1) * (100 / segments.length)}%`).join(', ')}
                                )`
                            }}
                        >
                            {/* Segments - Backgrounds */}
                            {/* {segments.map((word, index) => {
                                const rotation = index * segmentAngle;
                                return (
                                    <div
                                        key={`seg-${index}`}
                                        className="absolute top-0 right-0 w-1/2 h-1/2 origin-bottom-left"
                                        style={{
                                            transform: `rotate(${rotation}deg) skewY(${90 - segmentAngle}deg)`,
                                            background: SEGMENT_COLORS[index % SEGMENT_COLORS.length],
                                            border: '2px solid rgba(255,255,255,0.2)',
                                            transformOrigin: '0% 100%',
                                            zIndex: 1
                                        }}
                                    />
                                );
                            })} */}

                            {/* Text Labels - Rendered Separate & On Top */}
                            {segments.map((word, index) => {
                                // Mid-angle of the segment
                                const angle = (index * segmentAngle) + (segmentAngle / 2);
                                return (
                                    <div
                                        key={`text-${index}`}
                                        className="absolute top-0 left-0 w-full h-full flex justify-center pt-2 md:pt-4 pointer-events-none"
                                        style={{
                                            transform: `rotate(${angle}deg)`,
                                            zIndex: 10
                                        }}
                                    >
                                        <div
                                            className={`font-bold text-white tracking-wider select-none drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] ${getFontSize()}`}
                                            style={{
                                                writingMode: 'vertical-rl',
                                                textOrientation: 'mixed',
                                                maxHeight: '45%',
                                            }}
                                        >
                                            {word.answer.toLocaleUpperCase('en-US')}
                                        </div>
                                    </div>
                                )
                            })}

                            {/* Centre Circle */}
                            <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20">
                                <div className="w-16 h-16 md:w-24 md:h-24 bg-white rounded-full shadow-[0_0_20px_rgba(0,0,0,0.3)] flex items-center justify-center border-4 border-gray-100">
                                    <div className="text-3xl md:text-4xl">🎡</div>
                                </div>
                            </div>
                        </div>

                        {/* Pointer - Fixed Top Center */}
                        <div className="absolute -top-6 left-1/2 -translate-x-1/2 z-20 filter drop-shadow-lg">
                            <div className="w-0 h-0 border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent border-t-[40px] border-t-white"></div>
                        </div>
                    </div>

                    {/* Spin Button */}
                    <button
                        onClick={spinWheel}
                        disabled={spinning}
                        className={`relative z-20 px-12 py-4 rounded-xl font-bold text-xl md:text-2xl transition-all shadow-xl ${spinning
                            ? 'bg-gray-500 cursor-not-allowed scale-95 opacity-80'
                            : 'bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-white transform hover:scale-105 hover:shadow-orange-500/40'
                            }`}
                    >
                        {spinning ? '🎡 Spinning...' : '🎡 SPIN!'}
                    </button>
                </div>

                {/* Question Overlay - Appears when question is set */}
                {currentQuestion && !spinning && (
                    <div className="absolute inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">

                        {/* Timer Overlay */}
                        {!showAnswer && (
                            <div className="absolute top-4 right-4 z-60">
                                <div className={`w-16 h-16 rounded-full flex items-center justify-center border-4 text-2xl font-bold shadow-lg bg-black/50 backdrop-blur-sm ${timeLeft <= 5 ? 'border-red-500 text-red-500 animate-pulse' :
                                    timeLeft <= 10 ? 'border-yellow-400 text-yellow-400' : 'border-blue-400 text-white'
                                    }`}>
                                    {timeLeft}
                                </div>
                            </div>
                        )}

                        <GlassCard
                            className="max-w-4xl w-full mx-4 shadow-2xl animate-scaleIn"
                            glowColor="purple"
                            premium={true}
                        >
                            <div className="p-6 md:p-8 flex flex-col gap-6">
                                {!showAnswer ? (
                                    // ENGLISH WORD PROMPT
                                    <div className="text-center flex flex-col items-center gap-8 py-4">
                                        <div>
                                            <div className="text-white/60 text-sm tracking-wider mb-4">ENGLISH WORD</div>
                                            <div className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent text-5xl md:text-7xl font-bold leading-tight drop-shadow-sm">
                                                {currentQuestion.answer}
                                            </div>
                                        </div>

                                        <button
                                            onClick={handleShowAnswer}
                                            className="bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-md text-white px-8 py-4 rounded-xl text-xl font-bold shadow-lg transform hover:scale-105 transition-all group"
                                        >
                                            <span className="group-hover:hidden">👁️ Show Meaning</span>
                                            <span className="hidden group-hover:inline">🔊 Reveal & Listen</span>
                                        </button>
                                    </div>
                                ) : (
                                    // REVEALED DETAILS
                                    <div className="flex flex-col gap-6 w-full">
                                        <div className="flex flex-col md:flex-row items-stretch gap-6">
                                            {/* Left: Word Card */}
                                            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl flex-shrink-0 flex flex-col items-center justify-center w-full md:w-1/3 text-center">
                                                <div className="text-4xl md:text-5xl font-bold text-white mb-2">{currentQuestion.answer}</div>
                                                <div className="text-white/60 text-lg font-serif italic mb-4">/{currentQuestion.pronunciation}/</div>
                                                <button
                                                    onClick={() => speak(currentQuestion.answer)}
                                                    className="bg-purple-500/20 hover:bg-purple-500/40 border border-purple-500/30 p-3 rounded-full transition-all text-2xl"
                                                >
                                                    🔊
                                                </button>
                                            </div>

                                            {/* Right: Meaning & Example */}
                                            <div className="flex-1 flex flex-col gap-4">
                                                <div className="bg-white/5 border border-white/10 p-5 rounded-2xl">
                                                    <div className="text-xs text-white/40 tracking-widest mb-1">TURKISH MEANING</div>
                                                    <div className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-400">
                                                        {currentQuestion.question}
                                                    </div>
                                                </div>

                                                <div className="bg-white/5 border border-white/10 p-5 rounded-2xl flex-1">
                                                    <div className="text-xs text-white/40 tracking-widest mb-3">EXAMPLE SENTENCE</div>
                                                    <div className="flex items-start gap-4">
                                                        <button
                                                            onClick={() => speak(currentQuestion.example)}
                                                            className="text-2xl opacity-70 hover:opacity-100 flex-shrink-0 mt-1"
                                                        >
                                                            🔊
                                                        </button>
                                                        <div>
                                                            <div className="text-lg md:text-xl text-white font-medium leading-relaxed">
                                                                {currentQuestion.example}
                                                            </div>
                                                            <div className="text-white/40 italic mt-2 text-sm border-t border-white/10 pt-2">
                                                                {currentQuestion.exampleTR}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Team Selection or Award */}
                                        {selectedTeam === null ? (
                                            <div className="flex flex-col gap-4 w-full">
                                                <div className="text-white/60 text-sm text-center">Hangi takım bildi?</div>
                                                <div className="grid grid-cols-2 gap-3">
                                                    {teams.map((team, idx) => (
                                                        <button
                                                            key={idx}
                                                            onClick={() => setSelectedTeam(idx)}
                                                            className={`${team.color} hover:opacity-90 text-white font-bold py-4 rounded-xl transition-all text-lg shadow-lg transform hover:scale-[1.02]`}
                                                        >
                                                            {team.name}
                                                        </button>
                                                    ))}
                                                </div>
                                                <button
                                                    onClick={() => {
                                                        // Don't add points, keep word in segments (so it can be asked again)
                                                        setCurrentQuestion(null);
                                                        setSelectedTeam(null);
                                                        setRotation(rotation + 20);
                                                    }}
                                                    className="bg-gradient-to-r from-red-500 to-rose-600 hover:from-red-600 hover:to-rose-700 text-white font-bold py-3 rounded-xl transition-all shadow-lg hover:shadow-red-500/30 transform hover:scale-[1.02]"
                                                >
                                                    ❌ Kimse Bilmedi (Tekrar Sor)
                                                </button>
                                            </div>
                                        ) : (
                                            <div className="flex gap-4 w-full">
                                                <button
                                                    onClick={() => setSelectedTeam(null)}
                                                    className="flex-1 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold py-4 rounded-xl transition-all"
                                                >
                                                    ← Geri
                                                </button>
                                                <button
                                                    onClick={() => {
                                                        // Award point to selected team
                                                        const newTeams = [...teams];
                                                        newTeams[selectedTeam].score += 1;
                                                        setTeams(newTeams);

                                                        // Remove the known word from segments
                                                        const newSegments = segments.filter(s => s !== currentQuestion);
                                                        setSegments(newSegments);

                                                        setCurrentQuestion(null);
                                                        setSelectedTeam(null);
                                                        setRotation(0);
                                                    }}
                                                    className={`flex-1 ${teams[selectedTeam].color} hover:opacity-90 text-white font-bold py-4 rounded-xl transition-all text-xl shadow-lg transform hover:scale-[1.02]`}
                                                >
                                                    ✅ {teams[selectedTeam].name} +1 Puan
                                                </button>
                                            </div>
                                        )}
                                    </div>
                                )}
                            </div>
                        </GlassCard>
                    </div>
                )}
            </div>
        </div>
    );
}

