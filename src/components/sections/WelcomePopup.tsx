import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Car, Sparkles } from 'lucide-react';

export const WelcomePopup = () => {
  const [show, setShow] = useState(true);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Audio path remains the same - ensure file exists at this path
    audioRef.current = new Audio('/src/assets/sounds/welcome.mp3');
    audioRef.current.volume = 0.4;
  }, []);

  const enterSite = () => {
    audioRef.current?.play().catch(() => {
      console.log("Audio playback blocked by browser or file missing.");
    });
    setShow(false);
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="fixed inset-0 z-[9999] bg-slate-950 flex items-center justify-center px-4 overflow-hidden"
        >
          {/* Animated Background Aura */}
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3] 
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute w-[800px] h-[800px] bg-amber-500/10 blur-[150px] rounded-full"
          />

          <motion.div
            initial={{ scale: 0.9, y: 20, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 1.1, opacity: 0, filter: 'blur(20px)' }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-xl w-full text-center relative z-10"
          >
            {/* Logo/Icon Header */}
            <motion.div 
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="flex justify-center mb-10"
            >
              <div className="relative">
                <div className="w-20 h-20 rounded-3xl bg-amber-400 flex items-center justify-center rotate-12 shadow-2xl shadow-amber-400/20 relative z-10">
                  <Car className="w-10 h-10 text-slate-950 -rotate-12" />
                </div>
                <motion.div 
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-[-10px] border border-dashed border-amber-400/30 rounded-full"
                />
              </div>
            </motion.div>

            {/* Typography */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <h2 className="font-serif text-4xl md:text-6xl text-white font-medium leading-tight mb-4">
                Experience the <span className="italic text-amber-400">Divine</span> Journey
              </h2>
              
              <p className="text-slate-400 text-lg md:text-xl font-light tracking-wide mb-2">
                Sai Tulsi Tours & Travels
              </p>
              
              <div className="flex items-center justify-center gap-3 text-amber-500/80 mb-12">
                <div className="h-px w-8 bg-amber-500/30" />
                <span className="text-xs font-black uppercase tracking-[0.4em]">आपकी यात्रा – हमारी जिम्मेदारी</span>
                <div className="h-px w-8 bg-amber-500/30" />
              </div>
            </motion.div>

            {/* Enter Button */}
            <motion.button
              whileHover={{ scale: 1.05, letterSpacing: '0.2em' }}
              whileTap={{ scale: 0.95 }}
              onClick={enterSite}
              className="group relative px-12 py-5 bg-transparent border border-amber-400/50 rounded-full overflow-hidden transition-all"
            >
              <div className="absolute inset-0 bg-amber-400 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              <span className="relative z-10 text-amber-400 group-hover:text-slate-950 font-black text-sm uppercase tracking-[0.2em] flex items-center gap-3">
                Enter Sanctuary
                <Sparkles className="w-4 h-4" />
              </span>
            </motion.button>

            <p className="mt-8 text-[10px] text-slate-600 uppercase tracking-widest font-bold">
              Est. 2015 • Shirdi • Maharashtra
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};