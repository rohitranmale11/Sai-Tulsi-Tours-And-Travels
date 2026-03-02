import { motion } from 'framer-motion';
import { ShieldCheck, Clock, Star, Award, Phone, ArrowRight, CheckCircle, MapPin, Users } from 'lucide-react';

const trustMetrics = [
  { value: '5,000+', label: 'Happy Customers', icon: Users },
  { value: '5+', label: 'Years Experience', icon: Award },
  { value: '4.8★', label: 'Average Rating', icon: Star },
  { value: '50+', label: 'Destinations', icon: MapPin },
];

const features = [
  { icon: ShieldCheck, text: 'Verified Drivers', color: 'bg-amber-100 text-amber-700' },
  { icon: Award, text: 'Licensed Vehicles', color: 'bg-slate-100 text-slate-700' },
  { icon: Clock, text: '24/7 Available', color: 'bg-amber-100 text-amber-700' },
  { icon: Star, text: '4.8★ Rated', color: 'bg-slate-100 text-slate-700' },
];

const carPaths = [
  { delay: 0, duration: 25, yPosition: '15%' },
  { delay: 8, duration: 30, yPosition: '45%' },
  { delay: 16, duration: 28, yPosition: '75%' },
];

export const HeroSection = () => {
  const scrollToRoutes = () => {
    const element = document.querySelector('#routes');
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative bg-slate-50 overflow-hidden">
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        
        {/* Floating Gradient Orbs */}
        <motion.div
          animate={{ scale: [1, 1.2, 1], x: [0, 50, 0], y: [0, 30, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 right-0 w-96 h-96 bg-amber-400/10 rounded-full blur-3xl"
        />
        
        <motion.div
          animate={{ scale: [1, 1.3, 1], x: [0, -50, 0], y: [0, 50, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-0 left-0 w-96 h-96 bg-slate-900/5 rounded-full blur-3xl"
        />

        {/* Animated Road Lines */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="road-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <motion.line
                x1="0" y1="50" x2="100" y2="50"
                stroke="#f59e0b" strokeWidth="2" strokeDasharray="20 10"
                animate={{ x1: [0, 100], x2: [100, 200] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#road-pattern)" />
        </svg>

        {/* Animated Mini Cars */}
        {carPaths.map((path, index) => (
          <motion.div
            key={index}
            initial={{ x: '-10%', opacity: 0 }}
            animate={{ x: ['0%', '110%'], opacity: [0, 0.4, 0.4, 0] }}
            transition={{ duration: path.duration, delay: path.delay, repeat: Infinity, ease: "linear" }}
            className="absolute"
            style={{ top: path.yPosition }}
          >
            <svg width="40" height="20" viewBox="0 0 40 20" className="text-amber-500/30">
              <rect x="8" y="6" width="24" height="10" rx="2" fill="currentColor"/>
              <circle cx="13" cy="16" r="3" fill="currentColor"/>
              <circle cx="27" cy="16" r="3" fill="currentColor"/>
            </svg>
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="pt-28 sm:pt-32 lg:pt-40 pb-16 sm:pb-20 lg:pb-24">
          
          {/* Trust Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex justify-center mb-6 lg:mb-8"
          >
            <div className="inline-flex items-center gap-2 bg-slate-900 text-white rounded-full px-5 py-2 shadow-xl shadow-slate-200">
              <div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse" />
              <span className="text-xs sm:text-sm font-bold tracking-wide uppercase">
                 Trusted Taxi Service in Shirdi
              </span>
            </div>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-extrabold text-slate-900 text-center leading-tight mb-4"
          >
            Your Premium Journey Begins <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-amber-400">With Sai Tulsi</span>
          </motion.h1>

          {/* Hindi Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-700 text-center mb-6 italic"
          >
            "आपकी यात्रा — हमारी जिम्मेदारी"
          </motion.p>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-base sm:text-lg lg:text-xl text-slate-500 text-center max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Safe, professional, and on-time. Your trusted partner for temple darshan, 
            airport transfers, and outstation trips across Maharashtra.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <button
              onClick={scrollToRoutes}
              className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-amber-400 hover:bg-amber-500 text-slate-900 font-bold px-8 py-4 rounded-2xl shadow-[0_10px_20px_-10px_rgba(245,158,11,0.5)] transition-all duration-300 active:scale-95"
            >
              <span className="text-base">View Routes & Pricing</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <a
              href="tel:+919356310911"
              className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-bold px-8 py-4 rounded-2xl shadow-lg transition-all duration-300 active:scale-95"
            >
              <Phone className="w-5 h-5 text-amber-400" />
              <span className="text-base">+91 93563 10911</span>
            </a>
          </motion.div>

          {/* Trust Features Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto mb-16"
          >
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 flex flex-col items-center group hover:shadow-md transition-shadow"
              >
                <div className={`w-12 h-12 rounded-xl ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <feature.icon className="w-6 h-6" />
                </div>
                <p className="text-sm font-bold text-slate-800 text-center">
                  {feature.text}
                </p>
              </div>
            ))}
          </motion.div>

          {/* Stats Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="bg-slate-900 rounded-[2.5rem] p-8 lg:p-12 max-w-5xl mx-auto text-white relative overflow-hidden"
          >
            {/* Background Accent */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-amber-400/10 rounded-full -mr-32 -mt-32 blur-3xl" />
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
              {trustMetrics.map((metric, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl lg:text-4xl font-black text-amber-400 mb-2">
                    {metric.value}
                  </div>
                  <div className="text-xs lg:text-sm text-slate-400 font-bold uppercase tracking-widest">
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>

      {/* Wave Separator */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" className="w-full h-auto translate-y-1">
          <path
            fill="#ffffff"
            d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
          />
        </svg>
      </div>

    </section>
  );
};