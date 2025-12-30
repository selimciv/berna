'use client';

import { useState, useEffect } from 'react';
import { logGameActivity } from '@/lib/gameActivityLogger';
import { speak } from '@/lib/textToSpeech';

interface HangmanProps {
    vocabulary: any;
    level: string;
    onBack: () => void;
}

export default function Hangman({ vocabulary, level, onBack }: HangmanProps) {
    const [currentWord, setCurrentWord] = useState<any>(null);
    const [guessedLetters, setGuessedLetters] = useState<Set<string>>(new Set());
    const [wrongGuesses, setWrongGuesses] = useState(0);
    const [score, setScore] = useState(0);
    const maxWrong = 6;

    const categories = vocabulary?.levelData?.[level] || [];
    const allWords = categories.flatMap((cat: any) => cat.pool || []);

    const startNewWord = () => {
        if (!allWords.length) return;
        const word = allWords[Math.floor(Math.random() * allWords.length)];
        setCurrentWord(word);
        setGuessedLetters(new Set());
        setWrongGuesses(0);
    };

    useEffect(() => {
        // Log game activity
        logGameActivity('Hangman', level);

        if (!currentWord) startNewWord();
    }, []);

    const guessLetter = (letter: string) => {
        if (!currentWord || guessedLetters.has(letter)) return;

        const newGuessed = new Set(guessedLetters);
        newGuessed.add(letter);
        setGuessedLetters(newGuessed);

        if (!currentWord.answer.toLocaleUpperCase('en-US').includes(letter)) {
            setWrongGuesses(wrongGuesses + 1);
        }
    };

    const displayWord = () => {
        if (!currentWord) return '';
        return currentWord.answer
            .toLocaleUpperCase('en-US')
            .split('')
            .map((char: string) => {
                if (char === ' ') return ' ';
                return guessedLetters.has(char) ? char : '_';
            })
            .join(' ');
    };

    const isWon = currentWord && currentWord.answer.toLocaleUpperCase('en-US').split('').every((char: string) =>
        char === ' ' || guessedLetters.has(char)
    );

    const isLost = wrongGuesses >= maxWrong;

    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');



    return (
        <div className="h-full flex flex-col gap-4">
            {/* Score */}
            <div className="text-center flex-shrink-0">
                <div className="inline-block bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl px-6 py-2 shadow-lg backdrop-blur-md border border-white/20">
                    <div className="text-white text-xs opacity-75">Score</div>
                    <div className="text-white text-2xl font-bold">{score}</div>
                </div>
            </div>

            <div className="flex-1 flex flex-col md:flex-row gap-6 min-h-0">
                {/* Hangman Drawing & Word */}
                <div className="flex-1 bg-white/10 backdrop-blur-lg rounded-2xl p-4 flex flex-col items-center justify-center border border-white/10 shadow-xl">
                    <div className="relative h-48 w-full flex items-center justify-center mb-4">
                        <svg viewBox="0 0 200 250" className="h-full text-white drop-shadow-lg">
                            {/* Gallows */}
                            <line x1="20" y1="230" x2="180" y2="230" stroke="currentColor" strokeWidth="4" />
                            <line x1="50" y1="230" x2="50" y2="20" stroke="currentColor" strokeWidth="4" />
                            <line x1="50" y1="20" x2="130" y2="20" stroke="currentColor" strokeWidth="4" />
                            <line x1="130" y1="20" x2="130" y2="50" stroke="currentColor" strokeWidth="4" />

                            {/* Head */}
                            {wrongGuesses >= 1 && <circle cx="130" cy="70" r="20" stroke="currentColor" strokeWidth="4" fill="none" />}

                            {/* Body */}
                            {wrongGuesses >= 2 && <line x1="130" y1="90" x2="130" y2="150" stroke="currentColor" strokeWidth="4" />}

                            {/* Left Arm */}
                            {wrongGuesses >= 3 && <line x1="130" y1="110" x2="100" y2="130" stroke="currentColor" strokeWidth="4" />}

                            {/* Right Arm */}
                            {wrongGuesses >= 4 && <line x1="130" y1="110" x2="160" y2="130" stroke="currentColor" strokeWidth="4" />}

                            {/* Left Leg */}
                            {wrongGuesses >= 5 && <line x1="130" y1="150" x2="110" y2="190" stroke="currentColor" strokeWidth="4" />}

                            {/* Right Leg */}
                            {wrongGuesses >= 6 && <line x1="130" y1="150" x2="150" y2="190" stroke="currentColor" strokeWidth="4" />}
                        </svg>
                    </div>

                    <div className="text-center w-full">
                        <div className="text-white/75 text-sm mb-1">Wrong Guesses: <span className={wrongGuesses >= maxWrong ? 'text-red-400' : 'text-white'}>{wrongGuesses}</span> / {maxWrong}</div>
                        {currentWord && (
                            <>
                                <div className="text-yellow-400 text-xl font-bold mb-2 animate-pulse">{currentWord.question}</div>
                                <div className="text-white text-3xl md:text-5xl font-mono font-bold tracking-widest break-words drop-shadow-md">
                                    {displayWord()}
                                </div>
                            </>
                        )}
                    </div>
                </div>

                {/* Controls & Keyboard */}
                {currentWord && (
                    <div className="flex-1 bg-white/10 backdrop-blur-lg rounded-2xl p-4 flex flex-col justify-center border border-white/10 shadow-xl overflow-y-auto">
                        {!isWon && !isLost && (
                            <div className="grid grid-cols-7 gap-1">
                                {alphabet.map(letter => (
                                    <button
                                        key={letter}
                                        onClick={() => guessLetter(letter)}
                                        disabled={guessedLetters.has(letter)}
                                        className={`aspect-square rounded shadow-md font-bold text-lg md:text-xl transition-all flex items-center justify-center ${guessedLetters.has(letter)
                                            ? 'bg-gray-700/50 text-gray-500 cursor-not-allowed'
                                            : 'bg-gradient-to-br from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white active:scale-95'
                                            }`}
                                    >
                                        {letter}
                                    </button>
                                ))}
                            </div>
                        )}

                        {(isWon || isLost) && (
                            <div className="text-center space-y-4 h-full flex flex-col justify-center">
                                <div className={`text-4xl font-bold animate-bounce ${isWon ? 'text-green-400' : 'text-red-400'}`}>
                                    {isWon ? '🎉 Correct!' : '💀 Game Over'}
                                </div>
                                <div className="text-white text-xl">
                                    The word was: <span className="font-bold text-yellow-300">{currentWord.answer}</span>
                                </div>
                                <button
                                    onClick={() => speak(currentWord.answer)}
                                    className="bg-white/10 hover:bg-white/20 text-white font-bold py-3 px-8 rounded-xl transition-all border border-white/20"
                                >
                                    🔊 Pronunciation
                                </button>
                                <div className="bg-black/20 rounded-xl p-4 border border-white/10">
                                    <div className="text-white text-lg font-medium">{currentWord.example}</div>
                                    <div className="text-white/60 text-sm mt-1 italic">{currentWord.exampleTR}</div>
                                </div>
                                <button
                                    onClick={() => {
                                        if (isWon) setScore(score + 10);
                                        startNewWord();
                                    }}
                                    className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-cyan-500/20 transition-all transform hover:translate-y-[-2px]"
                                >
                                    Next Word →
                                </button>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}
