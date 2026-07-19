import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUp, MessageCircle, Phone, X } from 'lucide-react';
import { useEffect, useState } from 'react';

const phoneNumber = '+919356310911';
const whatsappHref = `https://wa.me/919356310911?text=${encodeURIComponent('Hi, I want to book a taxi from Shirdi.')}`;

export const FloatingButtons = () => {
  const [showHelper, setShowHelper] = useState(false);
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const helperTimer = window.setTimeout(() => setShowHelper(true), 2600);
    const onScroll = () => setShowTop(window.scrollY > 620);

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.clearTimeout(helperTimer);
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <div className="fixed inset-x-0 bottom-4 z-[80] flex flex-col items-center gap-3 px-4 sm:inset-x-auto sm:bottom-7 sm:right-7 sm:items-end sm:px-0">
      <AnimatePresence>
        {showHelper && (
          <motion.div
            initial={{ opacity: 0, y: 18, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.96 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="w-full max-w-[19rem] border border-slate-200 bg-white/92 p-4 shadow-[0_24px_70px_rgba(15,23,42,0.16)] backdrop-blur-xl sm:w-[19rem]"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-center gap-3">
                <span className="relative flex h-11 w-11 items-center justify-center bg-slate-950 text-amber-300">
                  <MessageCircle className="h-5 w-5" />
                  <span className="absolute -right-0.5 -top-0.5 h-3 w-3 border-2 border-white bg-emerald-500" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-slate-950">Booking desk online</p>
                  <p className="text-[11px] font-medium text-slate-500">Get route and fare guidance</p>
                </div>
              </div>
              <button onClick={() => setShowHelper(false)} className="text-slate-400 transition-colors hover:text-slate-900" aria-label="Dismiss booking helper">
                <X className="h-4 w-4" />
              </button>
            </div>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 flex items-center justify-center gap-2 bg-emerald-500 px-4 py-3 text-xs font-bold uppercase text-white transition-all hover:bg-emerald-600"
            >
              WhatsApp Now
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex items-center justify-center gap-2">
        <AnimatePresence>
          {showTop && (
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex h-12 w-12 items-center justify-center border border-slate-200 bg-white text-slate-950 shadow-[0_18px_40px_rgba(15,23,42,0.12)] transition-all hover:-translate-y-1"
              aria-label="Scroll to top"
            >
              <ArrowUp className="h-5 w-5" />
            </motion.button>
          )}
        </AnimatePresence>

        <motion.a
          href={`tel:${phoneNumber}`}
          whileHover={{ y: -3, scale: 1.02 }}
          whileTap={{ scale: 0.96 }}
          className="flex h-14 w-14 items-center justify-center bg-slate-950 text-amber-300 shadow-[0_20px_45px_rgba(15,23,42,0.28)]"
          aria-label="Call Shirdi Cab Services"
        >
          <Phone className="h-5 w-5" />
        </motion.a>

        <motion.a
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ y: -3, scale: 1.02 }}
          whileTap={{ scale: 0.96 }}
          className="relative flex h-14 w-14 items-center justify-center overflow-hidden bg-emerald-500 text-white shadow-[0_20px_45px_rgba(16,185,129,0.34)]"
          aria-label="WhatsApp Shirdi Cab Services"
        >
          <motion.span
            animate={{ scale: [1, 1.7, 2.15], opacity: [0.28, 0.12, 0] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: 'easeOut' }}
            className="absolute inset-0 bg-white"
          />
          <MessageCircle className="relative h-6 w-6" />
        </motion.a>
      </div>
    </div>
  );
};
