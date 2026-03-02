import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Users, Briefcase, Snowflake, Shield, CheckCircle2, TrendingUp, ChevronRight } from 'lucide-react';
import swiftDzire from '@/assets/swift-dzire.jpg';
import innova from '@/assets/innova.jpg';
import ertiga from '@/assets/ertiga.jpg';
import tempoTraveller from '@/assets/tempo-traveller.jpg';

const vehicles = [
  {
    name: 'Swift Dzire',
    type: 'Sedan',
    capacity: '4 Seater',
    image: swiftDzire,
    passengers: 4,
    luggage: 2,
    description: 'Perfect for couples and solo travelers',
    pricePerKm: '₹11',
    examplePrice: '₹2,750',
    exampleRoute: '250 km trip',
    features: ['AC Cabin', 'Music System', 'GPS Tracking', 'Clean Interior'],
    permitType: 'Commercial Yellow Plate',
    popular: false,
    bestFor: 'Budget travel',
  },
  {
    name: 'Toyota Innova Crysta',
    type: 'SUV',
    capacity: '6+1 Seater',
    image: innova,
    passengers: 7,
    luggage: 4,
    description: 'Premium comfort for families and groups',
    pricePerKm: '₹16',
    examplePrice: '₹4,000',
    exampleRoute: '250 km trip',
    features: ['Premium AC', 'Push Back Seats', 'Extra Legroom', 'USB Charging'],
    permitType: 'All India Tourist Permit',
    popular: true,
    bestFor: 'Family comfort',
  },
  {
    name: 'Maruti Ertiga',
    type: 'MPV',
    capacity: '6+1 Seater',
    image: ertiga,
    passengers: 7,
    luggage: 3,
    description: 'Spacious and economical for families',
    pricePerKm: '₹13',
    examplePrice: '₹3,250',
    exampleRoute: '250 km trip',
    features: ['AC Cabin', 'Comfortable Seats', 'Ample Space', 'Fuel Efficient'],
    permitType: 'Commercial Yellow Plate',
    popular: false,
    bestFor: 'Value for money',
  },
  {
    name: 'Tempo Traveller',
    type: 'Mini Bus',
    capacity: '12-17 Seater',
    image: tempoTraveller,
    passengers: 17,
    luggage: 12,
    description: 'Ideal for large groups and pilgrim tours',
    pricePerKm: '₹22',
    examplePrice: '₹5,500',
    exampleRoute: '250 km trip',
    features: ['Group AC', 'Pushback Seats', 'Music System', 'Luggage Space'],
    permitType: 'All India Tourist Permit',
    popular: false,
    bestFor: 'Group tours',
  },
];

const guarantees = [
  { icon: Shield, text: 'All Commercial Permits', color: 'text-amber-500' },
  { icon: CheckCircle2, text: 'Verified Clean Vehicles', color: 'text-amber-500' },
  { icon: Users, text: 'Experienced Drivers', color: 'text-amber-500' },
];

export const FleetSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const scrollToBooking = () => {
    const element = document.querySelector('#booking');
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section id="fleet" className="py-20 bg-white relative overflow-hidden" ref={ref}>
      
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-amber-50 rounded-full blur-[120px] -mr-20 -mt-20 opacity-60" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-slate-50 rounded-full blur-[120px] -ml-20 -mb-20 opacity-60" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-slate-900 text-amber-400 px-5 py-2 rounded-full mb-6 shadow-xl shadow-slate-900/10">
            <Shield className="w-3.5 h-3.5" />
            <span className="font-black uppercase tracking-widest text-[10px]">Premium Fleet</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 mb-6 leading-tight">
            Choose Your
            <span className="text-amber-500 block">Perfect Journey</span>
          </h2>
          
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            Our fleet features well-maintained, sanitized vehicles equipped for both short city transfers and long-distance spiritual tours.
          </p>
        </motion.div>

        {/* Guarantees Bar */}
        <div className="flex flex-wrap justify-center gap-4 lg:gap-8 mb-16">
          {guarantees.map((guarantee, index) => (
            <motion.div
              key={guarantee.text}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.3 + index * 0.1 }}
              className="flex items-center gap-3 bg-white px-6 py-3 rounded-2xl shadow-sm border border-slate-100"
            >
              <div className="w-8 h-8 rounded-full bg-amber-50 flex items-center justify-center">
                <guarantee.icon className={`w-4 h-4 ${guarantee.color}`} />
              </div>
              <span className="text-sm font-bold text-slate-800">{guarantee.text}</span>
            </motion.div>
          ))}
        </div>

        {/* Vehicle Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {vehicles.map((vehicle, index) => (
            <motion.div
              key={vehicle.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-white rounded-[2.5rem] overflow-hidden border border-slate-100 hover:border-amber-400/50 shadow-sm hover:shadow-2xl hover:shadow-amber-900/10 transition-all duration-500"
            >
              {/* Image Section */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src={vehicle.image}
                  alt={vehicle.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* Popular Badge */}
                {vehicle.popular && (
                  <div className="absolute top-4 left-4 z-10 bg-slate-900 text-amber-400 text-[10px] font-black uppercase px-3 py-1.5 rounded-xl shadow-lg border border-amber-400/20">
                    Featured
                  </div>
                )}

                {/* Type Tag */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md text-slate-900 text-[10px] font-black px-3 py-1.5 rounded-xl uppercase">
                  {vehicle.type}
                </div>
                
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-60" />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-black text-xl text-slate-900 mb-1 group-hover:text-amber-600 transition-colors">
                  {vehicle.name}
                </h3>
                <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-4">
                  {vehicle.bestFor}
                </p>

                {/* Dashboard Stats */}
                <div className="grid grid-cols-3 gap-2 p-3 bg-slate-50 rounded-2xl mb-6">
                  <div className="text-center">
                    <Users className="w-4 h-4 text-slate-400 mx-auto mb-1" />
                    <span className="text-xs font-black text-slate-800">{vehicle.passengers}</span>
                  </div>
                  <div className="text-center border-x border-slate-200">
                    <Briefcase className="w-4 h-4 text-slate-400 mx-auto mb-1" />
                    <span className="text-xs font-black text-slate-800">{vehicle.luggage}</span>
                  </div>
                  <div className="text-center">
                    <Snowflake className="w-4 h-4 text-slate-400 mx-auto mb-1" />
                    <span className="text-xs font-black text-slate-800 uppercase">AC</span>
                  </div>
                </div>

                {/* Pricing Footer */}
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <span className="text-2xl font-black text-slate-900">{vehicle.pricePerKm}</span>
                    <span className="text-[10px] font-bold text-slate-400 uppercase ml-1">/ KM</span>
                  </div>
                  <div className="text-right">
                    <div className="text-[10px] font-black text-amber-600 uppercase">Approx. {vehicle.examplePrice}</div>
                    <div className="text-[9px] font-medium text-slate-400 uppercase leading-none">per 250km trip</div>
                  </div>
                </div>

                <button
                  onClick={scrollToBooking}
                  className="w-full bg-slate-900 hover:bg-amber-400 text-white hover:text-slate-900 font-black py-4 rounded-2xl transition-all duration-300 flex items-center justify-center gap-2 group/btn"
                >
                  <span>Select Car</span>
                  <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Pricing Transparency Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="bg-slate-900 rounded-[3rem] p-8 lg:p-12 relative overflow-hidden"
        >
          <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
            <div>
              <h3 className="text-2xl lg:text-3xl font-black text-white mb-6">
                Honest & <span className="text-amber-400">Fixed</span> Pricing
              </h3>
              <div className="space-y-4">
                {[
                  'Includes Driver Allowance & Toll Taxes',
                  'Zero Hidden Charges or Booking Fees',
                  'Sanitized Vehicles Before Every Trip'
                ].map((text, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-amber-400/20 flex items-center justify-center">
                      <CheckCircle2 className="w-3 h-3 text-amber-400" />
                    </div>
                    <span className="text-slate-300 text-sm font-medium">{text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-[2rem] text-center md:text-right">
              <p className="text-slate-400 text-sm mb-6">
                Custom itineraries or group bookings? Our team is available 24/7.
              </p>
              <div className="flex flex-col md:flex-row gap-4 justify-end">
                <a
                  href="tel:+919356310911"
                  className="px-8 py-4 bg-amber-400 hover:bg-amber-500 text-slate-900 font-black rounded-2xl transition-all active:scale-95"
                >
                  Call Support
                </a>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};