import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { MapPin, Clock, Users, CheckCircle, ArrowRight, Phone } from 'lucide-react';

import mumbaiImg from '@/assets/routes/gateway-of-india.jpg';
import elloraImg from '@/assets/routes/ellora-caves.jpeg';
import shaniImg from '@/assets/routes/shani.jpg';
import trimbakImg from '@/assets/routes/trimbak.jpg';
import bhimashankarImg from '@/assets/routes/sri-bhimashankar-temple.jpg';
import image from '@/assets/routes/image.png';

const routes = [
  {
    title: 'Mumbai Darshan',
    subtitle: 'Full City Coverage',
    image: mumbaiImg,
    distance: '250 km',
    duration: 'Full Day',
    passengers: '4-7 seats',
    points: [
      'Gateway of India',
      'Marine Drive',
      'Siddhivinayak Temple',
      'Haji Ali Dargah',
      'Juhu Beach'
    ],
  },
  {
    title: 'Shirdi – Sambhajinagar',
    subtitle: '3 Major Spiritual Points',
    image: elloraImg,
    distance: '110 km',
    duration: 'Full Day',
    passengers: '4-7 seats',
    points: [
      'Bhadra Maruti Temple',
      'Grishneshwar Jyotirlinga',
      'Ellora Caves'
    ],
  },
  {
    title: 'Nashik Darshan',
    subtitle: 'All Major Nashik Temples',
    image: trimbakImg,
    distance: '125 km',
    duration: 'Full Day',
    passengers: '4-7 seats',
    points: [
      'Kalaram Temple',
      'Trimbakeshwar Jyotirlinga',
      'Panchavati',
      'Godavari Ghat'
    ],
  },
  {
    title: 'Shani Shingnapur',
    subtitle: 'Sacred Temple Visit',
    image: shaniImg,
    distance: '70 km',
    duration: 'Half Day',
    passengers: '4-7 seats',
    points: [
      'Shani Temple',
      'Local Darshan',
      'Nearby Spiritual Spots'
    ],
  },
  {
    title: 'Bhimashankar Darshan',
    subtitle: 'Jyotirlinga + Nature',
    image: bhimashankarImg,
    distance: '185 km',
    duration: 'Full Day',
    passengers: '4-7 seats',
    points: [
      'Bhimashankar Temple',
      'Wildlife Sanctuary',
      'Hill View Points'
    ],
  },
  {
    title: 'Vani Darshan',
    subtitle: 'Saptashrungi Temple',
    image: image,
    distance: '150 km',
    duration: 'Full Day',
    passengers: '4-7 seats',
    points: [
      'Saptashrungi Temple',
      'Hill Temple Darshan',
      'Scenic Route'
    ],
  },
];

export const RoutesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="routes" ref={ref} className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">

        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <span className="inline-block px-4 py-1.5 mb-4 text-xs font-bold tracking-widest text-amber-600 uppercase bg-amber-100 rounded-full">
            Premium Packages
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
            Popular Travel Routes
          </h2>
          <p className="text-slate-500 text-lg leading-relaxed">
            Experience complete darshan & sightseeing coverage with our curated routes. 
            We provide comprehensive tours, not just a drop service.
          </p>
        </motion.div>

        {/* Grid of Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {routes.map((route, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -12 }}
              className="group bg-white rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-100 flex flex-col"
            >
              {/* Image Header */}
              <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent z-10 opacity-80" />
                <img
                  src={route.image}
                  alt={route.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2s]"
                />
                <div className="absolute bottom-6 left-6 z-20">
                  <span className="bg-amber-400 text-slate-900 text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-lg shadow-lg">
                    {route.subtitle}
                  </span>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-slate-900 mb-6 group-hover:text-amber-600 transition-colors">
                  {route.title}
                </h3>

                {/* Quick Info Grid */}
                <div className="grid grid-cols-3 gap-2 p-4 bg-slate-50 rounded-2xl mb-8 border border-slate-100">
                  <div className="flex flex-col items-center text-center">
                    <MapPin className="w-4 h-4 text-amber-500 mb-1" />
                    <span className="text-[10px] text-slate-400 font-bold uppercase">Dist.</span>
                    <span className="text-xs font-bold text-slate-800">{route.distance}</span>
                  </div>
                  <div className="flex flex-col items-center text-center border-x border-slate-200">
                    <Clock className="w-4 h-4 text-amber-500 mb-1" />
                    <span className="text-[10px] text-slate-400 font-bold uppercase">Trip</span>
                    <span className="text-xs font-bold text-slate-800">Day</span>
                  </div>
                  <div className="flex flex-col items-center text-center">
                    <Users className="w-4 h-4 text-amber-500 mb-1" />
                    <span className="text-[10px] text-slate-400 font-bold uppercase">Seats</span>
                    <span className="text-xs font-bold text-slate-800">{route.passengers.split(' ')[0]}</span>
                  </div>
                </div>

                {/* Checklist */}
                <div className="mb-8 flex-grow">
                  <p className="text-[10px] font-black uppercase text-slate-400 tracking-[0.2em] mb-4">
                    Destinations Covered
                  </p>
                  <ul className="grid grid-cols-1 gap-3">
                    {route.points.map((point, i) => (
                      <li key={i} className="flex items-center gap-3 text-sm font-medium text-slate-600">
                        <div className="bg-amber-100 p-1 rounded-full">
                          <CheckCircle className="w-3.5 h-3.5 text-amber-600" />
                        </div>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Button */}
                <motion.a
                  whileTap={{ scale: 0.96 }}
                  href="tel:+919356310911"
                  className="w-full flex items-center justify-center gap-3 bg-slate-900 hover:bg-amber-400 text-white hover:text-slate-900 font-bold py-4 rounded-2xl transition-all duration-300 shadow-xl group/btn"
                >
                  Book This Journey
                  <ArrowRight className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" />
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Refined Custom Route Section */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-24 relative overflow-hidden bg-slate-900 rounded-[3rem] p-12 md:p-16 text-center"
        >
          {/* Decorative Glows */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-amber-400/20 rounded-full blur-[100px]" />
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-amber-400/10 rounded-full blur-[100px]" />
          
          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Need a Custom Itinerary?
            </h3>
            <p className="text-slate-400 mb-10 max-w-xl mx-auto text-lg">
              We create personalized travel packages tailored to your schedule and preferences across India.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="tel:+919356310911"
                className="flex items-center gap-3 bg-amber-400 hover:bg-white text-slate-900 font-black px-10 py-5 rounded-2xl transition-all transform hover:scale-105 shadow-2xl"
              >
                <Phone className="w-5 h-5" />
                +91 93563 10911
              </a>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};