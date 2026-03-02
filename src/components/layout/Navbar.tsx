import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, MapPin, PhoneCall } from 'lucide-react';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Fleet', href: '#fleet' },
  { name: 'Services', href: '#services' },
  { name: 'Routes', href: '#routes' },
  { name: 'Reviews', href: '#reviews' },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [isMobileMenuOpen]);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white shadow-lg border-b border-gray-100 py-2'
            : 'bg-white/80 backdrop-blur-md py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">

            {/* Logo Section */}
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('#home');
              }}
              className="flex items-center gap-3 group z-50"
            >
              <div className="p-2.5 rounded-xl bg-amber-400 text-slate-900 shadow-sm group-hover:scale-110 transition-transform duration-300">
                <MapPin className="w-6 h-6" fill="currentColor" fillOpacity={0.2} />
              </div>
              <div>
                <h1 className="font-bold text-xl lg:text-2xl leading-none tracking-tight text-slate-900">
                  Sai Tulsi
                </h1>
                <p className="text-[10px] lg:text-xs font-bold uppercase tracking-[0.15em] text-amber-600">
                  Tours & Travels
                </p>
              </div>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-2">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="px-4 py-2 rounded-lg font-semibold text-sm transition-all duration-200 relative group text-slate-600 hover:text-slate-900"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-amber-500 rounded-full transition-all duration-300 group-hover:w-2/3" />
                </button>
              ))}
              
              {/* Call to Action in Nav */}
              <button className="ml-4 px-5 py-2.5 bg-slate-900 text-white rounded-full text-sm font-bold hover:bg-amber-500 hover:text-slate-900 transition-all duration-300 flex items-center gap-2">
                <PhoneCall className="w-4 h-4" />
                Book Now
              </button>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl text-slate-900 hover:bg-gray-100 transition-colors z-50"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-40 lg:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-[300px] bg-white z-40 lg:hidden shadow-2xl flex flex-col"
            >
              <div className="p-6 pt-24 flex-grow">
                <nav className="space-y-2">
                  {navLinks.map((link, index) => (
                    <motion.button
                      key={link.name}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      onClick={() => scrollToSection(link.href)}
                      className="w-full text-left text-slate-800 font-bold text-lg py-4 px-4 rounded-xl hover:bg-amber-50 transition-colors flex items-center justify-between group"
                    >
                      {link.name}
                      <div className="w-2 h-2 rounded-full bg-amber-400 scale-0 group-hover:scale-100 transition-transform" />
                    </motion.button>
                  ))}
                </nav>

                <div className="my-8 h-px bg-slate-100" />

                {/* Quick Stats / Info Card */}
                <div className="space-y-4">
                  <div className="p-5 bg-slate-50 rounded-2xl border border-slate-100">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                      <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Available 24/7</span>
                    </div>
                    <p className="text-sm text-slate-700 font-medium mb-4">
                      Reliable rides for your journey.
                    </p>
                    <div className="grid grid-cols-3 gap-2">
                      <div className="text-center p-2 bg-white rounded-lg shadow-sm">
                        <div className="text-sm font-bold text-amber-600">10K+</div>
                        <div className="text-[9px] text-slate-400 font-bold">Trips</div>
                      </div>
                      <div className="text-center p-2 bg-white rounded-lg shadow-sm">
                        <div className="text-sm font-bold text-amber-600">15+</div>
                        <div className="text-[9px] text-slate-400 font-bold">Years</div>
                      </div>
                      <div className="text-center p-2 bg-white rounded-lg shadow-sm">
                        <div className="text-sm font-bold text-amber-600">4.8★</div>
                        <div className="text-[9px] text-slate-400 font-bold">Rating</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <button className="w-full py-4 bg-amber-400 text-slate-900 rounded-2xl font-bold shadow-lg shadow-amber-200 active:scale-95 transition-transform">
                  Book a Taxi Now
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};