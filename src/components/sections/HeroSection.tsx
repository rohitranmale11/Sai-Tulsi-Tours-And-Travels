import { motion, useReducedMotion } from 'framer-motion';
import {
  ArrowRight,
  BadgeIndianRupee,
  CarFront,
  Check,
  Clock3,
  Phone,
  ShieldCheck,
  Sparkles,
  Star,
  Users,
  MapPin,
  Award,
} from 'lucide-react';
import heroImage from '@/assets/hero-shirdi-cab-services.png';

const trustFeatures = [
  { icon: Clock3, title: '24/7 Service', detail: 'Day or night, we are ready' },
  { icon: Sparkles, title: 'Clean & Safe Cars', detail: 'Sanitized before every trip' },
  { icon: ShieldCheck, title: 'Experienced Drivers', detail: 'Local, verified professionals' },
  { icon: BadgeIndianRupee, title: 'Transparent Pricing', detail: 'Clear fares, no surprises' },
];

const statistics = [
  { value: '5,000+', label: 'Happy Customers', icon: Users },
  { value: '5+', label: 'Years Experience', icon: Award },
  { value: '50+', label: 'Destinations', icon: MapPin },
  { value: '4.8', label: 'Google Rating', icon: Star },
];

const serviceBadges = [
  'Temple Darshan',
  'Airport Transfers',
  'Outstation Cabs',
  '24/7 Available',
];

export const HeroSection = () => {
  const shouldReduceMotion = useReducedMotion();

  const scrollToRoutes = () => {
    const element = document.querySelector('#routes');
    if (element) {
      const offsetPosition = element.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  const reveal = (delay = 0) => ({
    initial: { opacity: 0, y: shouldReduceMotion ? 0 : 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] as const },
  });

  return (
    <section id="home" className="relative isolate flex min-h-[85svh] overflow-hidden bg-slate-950 font-heading text-white">
      <motion.img
        src={heroImage}
        alt="Shirdi temple at sunrise with premium tourist cabs"
        initial={{ scale: 1.04 }}
        animate={{ scale: shouldReduceMotion ? 1 : 1.1 }}
        transition={{ duration: 18, ease: 'easeOut' }}
        className="absolute inset-0 h-full w-full object-cover object-[68%_center] sm:object-[62%_center] lg:object-center"
      />

      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(2,6,23,0.94)_0%,rgba(2,6,23,0.82)_34%,rgba(2,6,23,0.28)_68%,rgba(2,6,23,0.08)_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,6,23,0.42)_0%,transparent_38%,rgba(2,6,23,0.68)_100%)]" />
      <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(rgba(255,255,255,.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.5)_1px,transparent_1px)] [background-size:72px_72px]" />

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col px-4 pb-5 pt-24 sm:px-6 sm:pb-6 sm:pt-28 lg:px-8 lg:pb-7 lg:pt-28">
        <div className="my-auto max-w-3xl py-5 sm:py-7 lg:py-8">
          <motion.div {...reveal()} className="mb-4 inline-flex items-center gap-2 rounded-full border border-amber-300/25 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-amber-300 shadow-2xl backdrop-blur-xl">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-70" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            Shirdi's trusted cab service
          </motion.div>

          <motion.h1 {...reveal(0.08)} className="text-balance text-5xl font-black leading-[0.96] tracking-[-0.045em] sm:text-6xl md:text-7xl lg:text-[5.5rem]">
            Shirdi Cab
            <span className="block bg-gradient-to-r from-amber-300 via-amber-400 to-orange-400 bg-clip-text text-transparent">
              Services
            </span>
          </motion.h1>

          <motion.div {...reveal(0.14)} className="mt-5 flex max-w-2xl flex-wrap gap-2">
            {serviceBadges.map((service) => (
              <span
                key={service}
                className="rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.12em] text-white/90 shadow-lg backdrop-blur-md sm:px-3.5 sm:text-xs"
              >
                {service}
              </span>
            ))}
          </motion.div>

          <motion.p {...reveal(0.18)} className="mt-5 text-xl font-semibold tracking-tight text-white sm:text-2xl lg:text-3xl">
            Comfortable. Reliable. Always On Time.
          </motion.p>

          <motion.p {...reveal(0.24)} className="mt-3 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg lg:text-xl">
            Your trusted partner for temple darshan, airport transfers and outstation trips across Maharashtra.
          </motion.p>

         

          <motion.div {...reveal(0.4)} className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-xs font-semibold text-slate-300 sm:text-sm">
            {['Instant booking support', 'Verified local drivers', 'No hidden charges'].map((item) => (
              <span key={item} className="flex items-center gap-2">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-400/15 text-emerald-300">
                  <Check className="h-3 w-3" strokeWidth={3} />
                </span>
                {item}
              </span>
            ))}
          </motion.div>
        </div>

        <motion.div {...reveal(0.48)} className="grid grid-cols-2 gap-2 lg:grid-cols-4">
          {trustFeatures.map((feature) => (
            <div key={feature.title} className="group rounded-2xl border border-white/15 bg-slate-950/45 p-3 shadow-2xl backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-amber-300/30 hover:bg-slate-950/60 sm:p-3.5">
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-amber-300/20 bg-amber-400/15 text-amber-300 sm:h-10 sm:w-10">
                  <feature.icon className="h-5 w-5" />
                </span>
                <div className="min-w-0">
                  <p className="text-xs font-extrabold text-white sm:text-sm">{feature.title}</p>
                  <p className="mt-0.5 hidden truncate text-[11px] text-slate-400 sm:block">{feature.detail}</p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>

        <motion.div {...reveal(0.56)} className="mt-2 grid grid-cols-2 overflow-hidden rounded-2xl border border-white/10 bg-white/95 text-slate-950 shadow-2xl sm:grid-cols-4">
          {statistics.map((stat, index) => (
            <div key={stat.label} className={`relative flex items-center gap-3 px-4 py-3 sm:px-5 ${index > 0 ? 'sm:border-l sm:border-slate-200' : ''} ${index % 2 === 1 ? 'border-l border-slate-200' : ''} ${index > 1 ? 'border-t border-slate-200 sm:border-t-0' : ''}`}>
              <stat.icon className={`hidden h-5 w-5 shrink-0 text-amber-500 lg:block ${stat.icon === Star ? 'fill-amber-500' : ''}`} />
              <div>
                <div className="text-xl font-black tracking-tight sm:text-2xl">{stat.value}</div>
                <div className="text-[9px] font-bold uppercase tracking-[0.12em] text-slate-500 sm:text-[10px]">{stat.label}</div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="pointer-events-none absolute bottom-0 left-1/2 z-20 hidden -translate-x-1/2 items-center gap-2 pb-2 text-[9px] font-bold uppercase tracking-[0.2em] text-white/40 xl:flex">
        <CarFront className="h-3.5 w-3.5" /> Premium rides across Maharashtra
      </div>
    </section>
  );
};
