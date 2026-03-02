import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { MapPin, Clock, Navigation, Users, ArrowRight } from 'lucide-react';

const routes = [
  {
    title: 'Shirdi to Mumbai',
    subtitle: 'Gateway of India • Marine Drive • Business Hub',
    image: './src/assets/routes/gateway-of-india.jpg',
    distance: '250 km',
    duration: '5-6 hrs',
    passengers: '4-7 seats',
    priceFrom: '₹4,500',
    infoEn: 'The city of dreams — from iconic Gateway of India to vibrant Marine Drive, perfect for business trips and weekend getaways.',
    infoHi: 'सपनों की नगरी — गेटवे ऑफ इंडिया, मरीन ड्राइव और बॉलीवुड के लिए प्रसिद्ध',
    highlights: ['Business travel', 'Airport connections', 'Weekend tours'],
    popular: true,
  },
  {
    title: 'Grishneshwar Jyotirlinga',
    subtitle: 'Sacred Temple • Ellora Caves Nearby',
    image: './src/assets/routes/grishneshwar-temple.jpeg',
    distance: '105 km',
    duration: '2.5-3 hrs',
    passengers: '4-7 seats',
    priceFrom: '₹2,200',
    infoEn: 'One of 12 sacred Jyotirlingas, offering deep spiritual experiences near the UNESCO Ellora Caves.',
    infoHi: 'भगवान शिव के 12 पवित्र ज्योतिर्लिंगों में से एक',
    highlights: ['Temple darshan', 'Family pilgrimage', 'Peaceful retreat'],
    popular: false,
  },
  {
    title: 'Ellora Caves',
    subtitle: 'UNESCO Heritage • Ancient Architecture',
    image: './src/assets/routes/ellora-caves.jpeg',
    distance: '110 km',
    duration: '3 hrs',
    passengers: '4-7 seats',
    priceFrom: '₹2,300',
    infoEn: 'World Heritage Site featuring spectacular Buddhist, Hindu, and Jain rock-cut temples and sculptures.',
    infoHi: 'यूनेस्को विश्व धरोहर स्थल — प्राचीन गुफाओं के लिए प्रसिद्ध',
    highlights: ['History lovers', 'Photography', 'Cultural tours'],
    popular: false,
  },
  {
    title: 'Shani Shingnapur',
    subtitle: 'Sacred Village • Divine Protection',
    image: './src/assets/routes/shani.jpg',
    distance: '70 km',
    duration: '1.5-2 hrs',
    passengers: '4-7 seats',
    priceFrom: '₹1,800',
    infoEn: 'Famous village dedicated to Lord Shani, known for houses without doors and strong faith traditions.',
    infoHi: 'भगवान शनि को समर्पित — बिना दरवाजों वाले घरों के लिए जाना जाता है',
    highlights: ['Quick trip', 'Spiritual blessings', 'Faith journey'],
    popular: true,
  },
  {
    title: 'Trimbakeshwar',
    subtitle: 'Jyotirlinga • Godavari Origin',
    image: './src/assets/routes/trimbak.jpg',
    distance: '125 km',
    duration: '3-3.5 hrs',
    passengers: '4-7 seats',
    priceFrom: '₹2,500',
    infoEn: 'Sacred Jyotirlinga temple near Nashik and the holy source of the Godavari River.',
    infoHi: 'नाशिक के पास पवित्र ज्योतिर्लिंग — गोदावरी नदी का उद्गम स्थल',
    highlights: ['Spiritual rituals', 'River origin', 'Temple town'],
    popular: false,
  },
  {
    title: 'Bhimashankar',
    subtitle: 'Forest Temple • Nature & Spirituality',
    image: './src/assets/routes/sri-bhimashankar-temple.jpg',
    distance: '185 km',
    duration: '4.5-5 hrs',
    passengers: '4-7 seats',
    priceFrom: '₹3,800',
    infoEn: 'Serene Jyotirlinga nestled in lush forests and hills, perfect for pilgrims and nature enthusiasts.',
    infoHi: 'घने जंगलों और पहाड़ियों के बीच स्थित पवित्र ज्योतिर्लिंग',
    highlights: ['Nature trekking', 'Wildlife sanctuary', 'Hill temple'],
    popular: false,
  },
];

export const RoutesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

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
    <section id="routes" ref={ref} className="py-20 bg-slate-50 relative overflow-hidden">
      
      {/* Background road pattern */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
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
          <div className="inline-flex items-center gap-2 bg-slate-900 text-amber-400 px-4 py-1.5 rounded-full mb-6">
            <Navigation className="w-3.5 h-3.5" />
            <span className="font-bold uppercase tracking-widest text-[10px]">Popular Destinations</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
            Where Would You
            <span className="text-amber-500 block">Like to Go?</span>
          </h2>
          
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            Explore our most frequent routes from Shirdi. Whether it's a holy pilgrimage or a city trip, we ensure a smooth ride.
          </p>
        </motion.div>

        {/* Routes Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {routes.map((route, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative rounded-[2rem] overflow-hidden bg-white border border-slate-200 hover:border-amber-400/50 shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col"
            >
              {/* Popular Badge */}
              {route.popular && (
                <div className="absolute top-4 left-4 z-10 bg-amber-400 text-slate-900 text-[10px] font-black uppercase px-3 py-1.5 rounded-xl shadow-lg flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-slate-900 rounded-full animate-pulse" />
                  Most Booked
                </div>
              )}

              {/* Image Section */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={route.image}
                  alt={route.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent" />
                
                <div className="absolute bottom-4 left-6 right-6">
                  <h3 className="font-bold text-xl text-white mb-1 group-hover:text-amber-400 transition-colors">
                    {route.title}
                  </h3>
                  <p className="text-xs text-slate-300 font-medium">{route.subtitle}</p>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-6 flex flex-col flex-grow">
                
                {/* Stats Grid */}
                <div className="grid grid-cols-3 gap-4 mb-6 pb-6 border-b border-slate-100">
                  <div className="text-center">
                    <MapPin className="w-4 h-4 text-amber-500 mx-auto mb-1" />
                    <div className="text-[10px] uppercase font-bold text-slate-400 mb-0.5">KM</div>
                    <div className="text-sm font-black text-slate-800">{route.distance}</div>
                  </div>
                  <div className="text-center border-x border-slate-100">
                    <Clock className="w-4 h-4 text-amber-500 mx-auto mb-1" />
                    <div className="text-[10px] uppercase font-bold text-slate-400 mb-0.5">Time</div>
                    <div className="text-sm font-black text-slate-800">{route.duration}</div>
                  </div>
                  <div className="text-center">
                    <Users className="w-4 h-4 text-amber-500 mx-auto mb-1" />
                    <div className="text-[10px] uppercase font-bold text-slate-400 mb-0.5">Seats</div>
                    <div className="text-sm font-black text-slate-800">{route.passengers}</div>
                  </div>
                </div>

                <p className="text-sm text-slate-600 leading-relaxed mb-3">
                  {route.infoEn}
                </p>
                <p className="text-xs text-slate-400 italic mb-6">
                  {route.infoHi}
                </p>

                {/* Price & Button */}
                <div className="mt-auto flex items-center justify-between">
                  <div>
                    <div className="text-[10px] uppercase font-black text-slate-400 tracking-wider">Starts At</div>
                    <div className="text-2xl font-black text-slate-900">{route.priceFrom}</div>
                  </div>
                  <button
                    onClick={scrollToBooking}
                    className="w-12 h-12 rounded-2xl bg-amber-400 flex items-center justify-center text-slate-900 shadow-lg shadow-amber-400/20 hover:bg-slate-900 hover:text-amber-400 transition-all duration-300 group/btn"
                  >
                    <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Custom Route Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-slate-900 rounded-[2.5rem] p-8 lg:p-12 text-center border border-slate-800 relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-64 h-64 bg-amber-400/5 rounded-full -ml-32 -mt-32 blur-3xl" />
          
          <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4 relative z-10">
            Planning a custom journey?
          </h3>
          <p className="text-slate-400 mb-8 max-w-xl mx-auto relative z-10">
            We provide tailored packages for multi-day trips and unconventional routes. Call us for a custom quote today.
          </p>
          
          <a
            href="tel:+919356310911"
            className="inline-flex items-center gap-3 bg-amber-400 hover:bg-amber-500 text-slate-900 font-black px-8 py-4 rounded-2xl shadow-xl transition-all relative z-10 active:scale-95"
          >
            <span className="text-base">Call +91 93563 10911</span>
          </a>
        </motion.div>

      </div>
    </section>
  );
};  