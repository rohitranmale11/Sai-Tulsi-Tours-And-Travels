import { AnimatePresence, motion } from 'framer-motion';
import { Menu, MessageCircle, Phone, X } from 'lucide-react';
import { useEffect, useState } from 'react';

const navLinks = [
  { name: 'Services', href: '#services' },
  { name: 'Packages', href: '#routes' },
  { name: 'Fleet', href: '#fleet' },
  { name: 'Reviews', href: '#reviews' },
];

const phoneNumber = '+919356310911';
const whatsappHref = `https://wa.me/919356310911?text=${encodeURIComponent('Hi, I want to book a taxi from Shirdi.')}`;

const scrollToSection = (href: string) => {
  const element = document.querySelector(href);
  if (!element) return;
  const top = element.getBoundingClientRect().top + window.scrollY - 86;
  window.scrollTo({ top, behavior: 'smooth' });
};

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('#home');

  useEffect(() => {
    const onScroll = () => {
      const sectionIds = ['#home', '#services', '#routes', '#fleet', '#reviews'];
      let current = '#home';
      sectionIds.forEach((id) => {
        const element = document.querySelector(id);
        if (element && element.getBoundingClientRect().top <= 120) current = id;
      });

      if (current) setActiveSection(current);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const handleNavigate = (href: string) => {
    scrollToSection(href);
    setIsOpen(false);
  };

  return (
    <>
      <motion.header
        initial={{ y: -26, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        className="fixed inset-x-0 top-4 z-50 px-4 sm:px-6"
      >
        <nav
          className="mx-auto flex h-[4.25rem] max-w-7xl items-center justify-between rounded-[1.4rem] border border-slate-200 bg-white px-3 shadow-[0_18px_48px_rgba(15,23,42,0.12)] transition-all duration-300 sm:px-4"
        >
          <button
            onClick={() => handleNavigate('#home')}
            className="flex min-w-0 items-center gap-3"
            aria-label="Go to home"
          >
            <span className="relative flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-[1rem] bg-slate-950 shadow-[0_16px_30px_rgba(15,23,42,0.22)]">
              <span className="absolute -right-1 -top-1 h-3 w-3 rounded-full border-2 border-white bg-emerald-500" />
              <img src="/shirdi-cab-logo.svg" alt="" className="h-full w-full object-cover" />
            </span>
            <span className="min-w-0 text-left">
              <span className="block whitespace-nowrap text-lg font-semibold leading-none text-slate-950 sm:text-xl">
                Shirdi Cab Services
              </span>
              <span className="mt-1 hidden text-[10px] font-bold uppercase text-slate-400 sm:block">
                Premium taxis / 24x7
              </span>
            </span>
          </button>

          <div className="hidden items-center gap-1 rounded-2xl border border-slate-200/70 bg-slate-50/80 p-1 lg:flex">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href;
              return (
                <button
                  key={link.name}
                  onClick={() => handleNavigate(link.href)}
                  className={`group relative rounded-xl px-4 py-2 text-sm font-medium transition-all ${
                    isActive
                      ? 'bg-white text-slate-950 shadow-sm'
                      : 'text-slate-500 hover:bg-white/70 hover:text-slate-950'
                  }`}
                >
                  {link.name}
                  <span className={`absolute inset-x-4 bottom-1 h-px origin-left bg-amber-500 transition-transform duration-300 ${isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`} />
                </button>
              );
            })}
          </div>

          <div className="hidden items-center gap-2 lg:flex">
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-11 w-11 items-center justify-center rounded-xl border border-emerald-200 bg-white text-emerald-500 shadow-sm transition-all hover:-translate-y-1 hover:border-emerald-400 hover:shadow-[0_14px_28px_rgba(16,185,129,0.16)]"
              aria-label="Open WhatsApp chat"
            >
              <MessageCircle className="h-4 w-4" />
            </a>
            <a
              href={`tel:${phoneNumber}`}
              className="inline-flex h-11 items-center gap-2 rounded-xl bg-slate-950 px-5 text-sm font-semibold text-white shadow-[0_16px_32px_rgba(15,23,42,0.2)] transition-all hover:-translate-y-1 hover:bg-amber-400 hover:text-slate-950 hover:shadow-[0_18px_36px_rgba(245,158,11,0.22)]"
            >
              <Phone className="h-4 w-4" />
              Book Ride
            </a>
          </div>

          <button
            onClick={() => setIsOpen((value) => !value)}
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-950 shadow-sm lg:hidden"
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>
      </motion.header>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-slate-950/35 backdrop-blur-sm lg:hidden"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ y: -24, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -24, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="mx-4 mt-24 rounded-[1.5rem] border border-slate-200 bg-white p-4 shadow-[0_28px_80px_rgba(15,23,42,0.2)]"
              onClick={(event) => event.stopPropagation()}
            >
              <div className="grid gap-2">
                {navLinks.map((link) => (
                  <button
                    key={link.name}
                    onClick={() => handleNavigate(link.href)}
                    className="flex items-center justify-between rounded-2xl px-4 py-4 text-left text-base font-semibold text-slate-900 transition-colors hover:bg-[#fbfaf6]"
                  >
                    {link.name}
                    <span className="h-1.5 w-1.5 bg-amber-400" />
                  </button>
                ))}
              </div>
              <div className="mt-4 grid grid-cols-2 gap-3 border-t border-slate-100 pt-4">
                <a href={`tel:${phoneNumber}`} className="flex items-center justify-center gap-2 rounded-2xl bg-slate-950 px-4 py-4 text-sm font-semibold text-white">
                  <Phone className="h-4 w-4 text-amber-300" />
                  Call
                </a>
                <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 rounded-2xl border border-emerald-200 px-4 py-4 text-sm font-semibold text-slate-950">
                  <MessageCircle className="h-4 w-4 text-emerald-500" />
                  WhatsApp
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
