import { ArrowUpRight, Facebook, Instagram, Mail, MapPin, MessageCircle, Phone } from 'lucide-react';

const phoneNumber = '+919356310911';
const displayPhone = '+91 93563 10911';
const whatsappHref = `https://wa.me/919356310911?text=${encodeURIComponent('Hi, I want to book a taxi from Shirdi.')}`;

const quickLinks = [
  { name: 'Services', href: '#services' },
  { name: 'Packages', href: '#routes' },
  { name: 'Premium Fleet', href: '#fleet' },
  { name: 'Guest Reviews', href: '#reviews' },
];

const popularRoutes = [
  'Shirdi to Mumbai Airport',
  'Shirdi to Pune',
  'Shirdi to Nashik Darshan',
  'Shirdi to Sambhajinagar and Ellora',
  'Shirdi to Shani Shingnapur',
  'Shirdi to Bhimashankar',
];

const scrollToSection = (href: string) => {
  const element = document.querySelector(href);
  if (!element) return;
  const top = element.getBoundingClientRect().top + window.scrollY - 86;
  window.scrollTo({ top, behavior: 'smooth' });
};

export const Footer = () => {
  const routeRail = [...popularRoutes, ...popularRoutes];

  return (
    <footer id="site-footer" className="relative overflow-hidden bg-[#080b10] text-white">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-300/50 to-transparent" />
      <div className="absolute left-1/2 top-0 h-72 w-[44rem] -translate-x-1/2 rounded-full bg-amber-400/10 blur-[120px]" />
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="testimonial-mask mb-12 overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/[0.04] py-4">
          <div className="testimonial-track flex w-max gap-4">
            {routeRail.map((route, index) => (
              <span key={`${route}-${index}`} className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.05] px-5 py-2 text-xs font-semibold text-slate-300">
                <span className="h-1.5 w-1.5 rounded-full bg-amber-300" />
                {route}
              </span>
            ))}
          </div>
        </div>

        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <div className="flex items-center gap-3">
              <span className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-2xl bg-slate-950 shadow-[0_18px_40px_rgba(245,158,11,0.2)] ring-1 ring-amber-300/30">
                <img src="/shirdi-cab-logo.svg" alt="" className="h-full w-full object-cover" />
              </span>
              <div>
                <h2 className="whitespace-nowrap text-xl font-semibold leading-none">Shirdi Cab Services</h2>
                <p className="mt-1 text-[11px] font-bold uppercase text-amber-300">Premium travel partner</p>
              </div>
            </div>

            <p className="mt-8 max-w-xl text-lg leading-8 text-slate-300">
              A clean, reliable taxi service for Shirdi temple darshan, airport transfers, outstation travel, and curated Maharashtra routes.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              <a href={`tel:${phoneNumber}`} className="group rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-5 shadow-[0_20px_70px_rgba(0,0,0,0.18)] transition-all hover:-translate-y-1 hover:border-amber-300/50 hover:bg-white/[0.07]">
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-amber-300" />
                  <span className="text-sm font-semibold">{displayPhone}</span>
                </div>
                <p className="mt-2 text-xs text-slate-500">24/7 booking and route support</p>
              </a>
              <a href="mailto:contact@saitulsitravels.com" className="group rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-5 shadow-[0_20px_70px_rgba(0,0,0,0.18)] transition-all hover:-translate-y-1 hover:border-amber-300/50 hover:bg-white/[0.07]">
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-amber-300" />
                  <span className="text-sm font-semibold">contact@saitulsitravels.com</span>
                </div>
                <p className="mt-2 text-xs text-slate-500">Business and group inquiries</p>
              </a>
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <div className="rounded-[1.7rem] border border-white/10 bg-white/[0.04] p-6 shadow-[0_20px_70px_rgba(0,0,0,0.18)]">
              <h3 className="text-xs font-bold uppercase text-slate-400">Quick links</h3>
              <div className="mt-6 space-y-4">
                {quickLinks.map((link) => (
                  <button key={link.name} onClick={() => scrollToSection(link.href)} className="flex items-center gap-2 text-sm font-medium text-slate-300 transition-colors hover:text-amber-300">
                    <ArrowUpRight className="h-3.5 w-3.5" />
                    {link.name}
                  </button>
                ))}
              </div>
            </div>

            <div className="rounded-[1.7rem] border border-white/10 bg-white/[0.04] p-6 shadow-[0_20px_70px_rgba(0,0,0,0.18)]">
              <h3 className="text-xs font-bold uppercase text-slate-400">Popular routes</h3>
              <div className="mt-6 space-y-3">
                {popularRoutes.map((route) => (
                  <p key={route} className="text-sm leading-6 text-slate-300">{route}</p>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-8 border-t border-white/10 pt-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-stretch">
          <div className="rounded-[1.7rem] border border-white/10 bg-white/[0.04] p-6 shadow-[0_20px_70px_rgba(0,0,0,0.18)]">
            <h3 className="text-xs font-bold uppercase text-slate-400">Office</h3>
            <div className="mt-5 flex items-start gap-3">
              <MapPin className="mt-1 h-5 w-5 shrink-0 text-amber-300" />
              <p className="text-sm leading-7 text-slate-300">
                Near Sai Tulsi Hotel, Nagar-Manmad Rd, Shirdi, Maharashtra 423109
              </p>
            </div>
            <div className="mt-6 flex gap-3">
              <a href={whatsappHref} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-slate-300 transition-all hover:-translate-y-1 hover:border-emerald-400 hover:text-emerald-300">
                <MessageCircle className="h-5 w-5" />
              </a>
              <a href="#" aria-label="Instagram" className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-slate-300 transition-all hover:-translate-y-1 hover:border-pink-400 hover:text-pink-300">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" aria-label="Facebook" className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-slate-300 transition-all hover:-translate-y-1 hover:border-blue-400 hover:text-blue-300">
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="min-h-72 overflow-hidden rounded-[1.7rem] border border-white/10 bg-slate-900 shadow-[0_20px_70px_rgba(0,0,0,0.22)]">
            <iframe
              title="Shirdi Cab Services office map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3759.088894468571!2d74.4691462!3d19.7615025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdc600109594f71%3A0x62916892523f2603!2sSai%20Tulsi%20Hotel!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              className="h-full min-h-72 w-full grayscale transition-all duration-700 hover:grayscale-0"
              loading="lazy"
            />
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-white/10 pt-8 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>Copyright {new Date().getFullYear()} Shirdi Cab Services. All rights reserved.</p>
          <p className="text-center sm:text-right">
            Designed and developed by{' '}
            <a
              href="https://rohitranmale.in"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 font-semibold text-amber-300 transition-colors hover:text-white"
            >
              Rohit Ganesh Ranmale
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>{' '}
            (8767257420)
          </p>
        </div>
      </div>
    </footer>
  );
};
