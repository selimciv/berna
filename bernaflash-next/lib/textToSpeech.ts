export const speak = (text: string, callback?: () => void) => {
    if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();

        // Ensure voices are loaded (for some browsers like Chrome)
        const loadVoicesAndSpeak = () => {
            const voices = window.speechSynthesis.getVoices();
            const utterance = new SpeechSynthesisUtterance(text);
            utterance.lang = 'en-GB'; // British English

            // Strict filtering for clear British Female voices
            const voicesInSystem = voices.filter(v => v.lang.startsWith('en'));

            const britishVoice = voicesInSystem.find(v =>
                v.name.includes('Google UK English Female') ||
                v.name.includes('Martha') ||
                v.name.includes('Catherine') ||
                (v.lang === 'en-GB' && v.name.includes('Female')) ||
                (v.name.includes('Microsoft') && v.lang === 'en-GB' && (v.name.includes('Susan') || v.name.includes('Hazel')))
            )
                // Fallback to other quality female English voices if no British found
                || voicesInSystem.find(v => v.name.includes('Samantha'))
                || voicesInSystem.find(v => v.lang === 'en-GB' && !v.name.includes('Male') && !v.name.includes('Daniel'));

            if (britishVoice) {
                utterance.voice = britishVoice;
            }

            // Adjust rate/pitch for natural feel
            utterance.rate = 0.95; // Slightly faster than before
            utterance.pitch = 1.1; // Higher pitch for female voice

            utterance.onend = () => {
                if (callback) callback();
            };

            window.speechSynthesis.speak(utterance);
        };

        if (window.speechSynthesis.getVoices().length > 0) {
            loadVoicesAndSpeak();
        } else {
            // Voices not loaded yet, wait for event
            window.speechSynthesis.onvoiceschanged = () => {
                loadVoicesAndSpeak();
                // Remove listener to avoid multiple triggers
                window.speechSynthesis.onvoiceschanged = null;
            };
        }
    } else if (callback) {
        callback();
    }
};
