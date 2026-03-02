import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  MapPin, 
  Plane, 
  Train, 
  Route, 
  Building2, 
  CalendarDays,
  Shield,
  Clock,
  CheckCircle2,
  IndianRupee,
  ArrowRight
} from 'lucide-react';

const services = [
  {
    icon: MapPin,
    title: 'Shirdi Local Taxi',
    description: 'Temple visits, local sightseeing, and hourly rentals within Shirdi.',
    features: ['Flexible hours', 'Fixed rates', 'AC vehicles'],
    badge: 'Most Popular',
    badgeColor: 'bg-amber-400 text-slate-900'
  },
  {
    icon: Plane,
    title: 'Airport Transfers',
    description: 'Shirdi Airport pickup & drop with flight tracking and meet & greet.',
    features: ['Real-time tracking', 'No waiting charges', 'Free waiting 30min'],
    badge: null,
    badgeColor: null
  },
  {
    icon: Route,
    title: 'Outstation Trips',
    description: 'Mumbai, Pune, Nashik, Aurangabad - comfortable long-distance travel.',
    features: ['Per km rates', 'Multiple stops', 'Clean vehicles'],
    badge: null,
    badgeColor: null
  },
  {
    icon: Train,
    title: 'Railway Pickups',
    description: 'Kopargaon & Manmad station transfers with on-time guarantee.',
    features: ['Train tracking', 'Fixed pricing', 'Instant booking'],
    badge: null,
    badgeColor: null
  },
  {
    icon: CalendarDays,
    title: 'Temple Tour Packages',
    description: 'Curated packages covering Shirdi, Shani Shingnapur, Trimbakeshwar.',
    features: ['Custom itineraries', 'Multi-day options', 'Expert drivers'],
    badge: 'Best Value',
    badgeColor: 'bg-slate-900 text-white'
  },
  {
    icon: Building2,
    title: 'Corporate Services',
    description: 'Monthly contracts, executive travel, and event transportation.',
    features: ['Priority booking', 'Invoicing', 'Dedicated support'],
    badge: null,
    badgeColor: null
  },
];

const guarantees = [
  { icon: Shield, text: 'Licensed & Insured', subtext: 'All commercial permits' },
  { icon: CheckCircle2, text: 'Verified Drivers', subtext: 'Background checked' },
  { icon: Clock, text: 'On-Time Guarantee', subtext: 'Or ride is free*' },
  { icon: IndianRupee, text: 'Transparent Pricing', subtext: 'No hidden charges' },
];

export const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

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
    <section id="services" className="py-20 bg-white relative overflow-hidden" ref={ref}>
      
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #f59e0b 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-700 px-4 py-1.5 rounded-full mb-6">
            <span className="font-bold uppercase tracking-widest text-[10px]">Premium Services</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
            Travel Solutions for
            <span className="text-amber-500 block">Every Journey</span>
          </h2>
          
          <p className="text-lg text-slate-500 leading-relaxed max-w-2xl mx-auto">
            Safe, reliable, and professional taxi services in and around Shirdi. 
            Choose the perfect ride for your spiritual or business trip.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-white rounded-3xl p-8 border-2 border-slate-50 hover:border-amber-200 shadow-sm hover:shadow-xl hover:shadow-amber-900/5 transition-all duration-300"
            >
              {/* Badge */}
              {service.badge && (
                <div className={`absolute top-6 right-6 ${service.badgeColor} text-[10px] font-black uppercase tracking-tighter px-3 py-1.5 rounded-lg shadow-sm`}>
                  {service.badge}
                </div>
              )}

              {/* Icon */}
              <div className="mb-6 relative">
                <div className="w-16 h-16 rounded-2xl bg-slate-900 flex items-center justify-center group-hover:bg-amber-400 transition-colors duration-300 shadow-lg">
                  <service.icon className="w-8 h-8 text-amber-400 group-hover:text-slate-900 transition-colors" />
                </div>
                <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-amber-50 rounded-full -z-10 group-hover:scale-150 transition-transform duration-500" />
              </div>

              {/* Content */}
              <h3 className="font-bold text-2xl text-slate-900 mb-3">
                {service.title}
              </h3>
              
              <p className="text-slate-500 mb-6 text-sm leading-relaxed">
                {service.description}
              </p>

              {/* Features List */}
              <ul className="space-y-3 mb-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-sm font-semibold text-slate-700">
                    <div className="w-5 h-5 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="w-3 h-3 text-amber-600" />
                    </div>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Our Guarantees Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          {/* Background Card */}
          <div className="bg-slate-900 rounded-[3rem] p-8 lg:p-16 border border-slate-800 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-amber-400/5 rounded-full -mr-20 -mt-20 blur-3xl" />
            
            <div className="text-center mb-12 relative z-10">
              <h3 className="text-2xl sm:text-4xl font-bold text-white mb-4">
                Our Promise to You
              </h3>
              <p className="text-slate-400 max-w-xl mx-auto">
                We don't just provide a ride; we provide peace of mind. Every journey with us is built on these four pillars.
              </p>
            </div>

            {/* Guarantees Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 relative z-10">
              {guarantees.map((guarantee, index) => (
                <motion.div
                  key={guarantee.text}
                  whileHover={{ y: -5 }}
                  className="flex flex-col items-center text-center p-6 bg-slate-800/50 rounded-2xl border border-slate-700 hover:border-amber-400/30 transition-all"
                >
                  <div className="w-14 h-14 rounded-full bg-amber-400 flex items-center justify-center mb-4 shadow-lg shadow-amber-400/20">
                    <guarantee.icon className="w-7 h-7 text-slate-900" />
                  </div>
                  <div className="font-bold text-white text-lg mb-1">{guarantee.text}</div>
                  <div className="text-xs text-slate-400 font-medium uppercase tracking-wider">{guarantee.subtext}</div>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <div className="text-center relative z-10">
              <button
                onClick={scrollToRoutes}
                className="group inline-flex items-center gap-3 bg-amber-400 hover:bg-amber-500 text-slate-900 font-black px-10 py-5 rounded-2xl shadow-xl transition-all duration-300 active:scale-95"
              >
                <span>Check Routes & Pricing</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <p className="text-[10px] text-slate-500 mt-4 uppercase font-bold tracking-[0.2em]">
                *Safety is our #1 Priority
              </p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};