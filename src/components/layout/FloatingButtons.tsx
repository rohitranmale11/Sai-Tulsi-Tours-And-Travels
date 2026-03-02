import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, Phone, X, ArrowUp } from 'lucide-react';
import { useState, useEffect } from 'react';

export const FloatingButtons = () => {
  const [showHelper, setShowHelper] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    // Show helper card after 4 seconds
    const timer = setTimeout(() => setShowHelper(true), 4000);

    // Monitor scroll for "Back to Top" button
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-[100] flex flex-col items-end gap-4">
      
      {/* Back to Top Button */}
      {/* <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            onClick={scrollToTop}
            className="w-10 h-10 rounded-xl bg-slate-900/80 backdrop-blur-md text-amber-400 flex items-center justify-center border border-white/10 shadow-xl hover:bg-slate-950 transition-all mb-2"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence> */}

      {/* Floating Helper Popup */}
      <AnimatePresence>
        {showHelper && (
          <motion.div
            initial={{ opacity: 0, y: 20, x: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, x: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="bg-white/90 backdrop-blur-xl rounded-[2rem] shadow-2xl p-5 w-72 border border-slate-100 mb-2 relative group"
          >
            <button
              onClick={() => setShowHelper(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-900 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
            
            <div className="flex items-center gap-3 mb-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-amber-400 flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 text-slate-950" />
                </div>
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full animate-pulse" />
              </div>
              <div>
                <p className="text-sm font-black text-slate-950">Sai Tulsi Support</p>
                <p className="text-[10px] font-bold text-green-600 uppercase tracking-tight">Online Now</p>
              </div>
            </div>
            
            <p className="text-xs text-slate-500 leading-relaxed mb-4">
              "Namaste! Looking for a taxi from Shirdi? Get an instant quote on WhatsApp."
            </p>
            
            <a
              href="https://wa.me/919356310911?text=Hi,%20I%20want%20to%20book%20a%20taxi"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full py-3 bg-slate-900 text-amber-400 rounded-xl text-center text-xs font-black uppercase tracking-widest hover:bg-slate-800 transition-colors"
            >
              Start Chat
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Buttons Container */}
      <div className="flex flex-col gap-3">
        {/* Call Button */}
        <motion.a
          href="tel:+919356310911"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-slate-950 text-white flex items-center justify-center shadow-2xl border border-white/10 group relative"
        >
          <div className="absolute inset-0 bg-amber-400/20 rounded-2xl scale-0 group-hover:scale-100 transition-transform duration-500" />
          <motion.div
            animate={{ rotate: [0, -10, 10, -10, 0] }}
            transition={{ repeat: Infinity, duration: 2, repeatDelay: 4 }}
          >
            <Phone className="w-6 h-6 md:w-7 md:h-7 text-amber-400 relative z-10" />
          </motion.div>
        </motion.a>

        {/* WhatsApp Button */}
        <motion.a
          href="https://wa.me/919356310911?text=Hi,%20I%20want%20to%20book%20a%20taxi"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-[#25D366] text-white flex items-center justify-center shadow-2xl relative group overflow-hidden"
        >
          {/* Wave Ripple Animation */}
          <motion.div
            animate={{ 
              scale: [1, 1.5, 2],
              opacity: [0.3, 0.1, 0]
            }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="absolute inset-0 bg-white rounded-full"
          />
          
          <MessageCircle className="w-7 h-7 md:w-8 md:h-8 relative z-10" />
          
          {/* Notification Pips */}
          <span className="absolute top-3 right-3 w-2.5 h-2.5 bg-red-500 border-2 border-white rounded-full z-20" />
        </motion.a>
      </div>
    </div>
  );
};