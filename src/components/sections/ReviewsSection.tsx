import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Star, Quote, CheckCircle2, MapPin, Calendar, ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';

const reviews = [
  {
    name: 'Rajesh Sharma',
    location: 'Mumbai, Maharashtra',
    rating: 5,
    text: 'Excellent service from Shirdi to Mumbai. Driver arrived 10 minutes early, car was spotlessly clean, and he knew all the fastest routes. The Innova was perfect for our family of 5 with luggage.',
    route: { from: 'Shirdi', to: 'Mumbai' },
    vehicle: 'Toyota Innova Crysta',
    date: 'Jan 2025',
    verified: true,
    category: 'Airport Transfer',
  },
  {
    name: 'Priya Patel',
    location: 'Pune, Maharashtra',
    rating: 5,
    text: 'Booked for temple darshan tour covering Shirdi, Shani Shingnapur, and Trimbakeshwar. Driver was respectful, patient during our temple visits, and gave us local tips. Great experience!',
    route: { from: 'Temple Tour', to: 'Multiple Sites' },
    vehicle: 'Maruti Ertiga',
    date: 'Dec 2024',
    verified: true,
    category: 'Temple Tour',
  },
  {
    name: 'Amit Kumar',
    location: 'Delhi',
    rating: 5,
    text: 'Best taxi service in Shirdi! Booked airport pickup at 5 AM, driver was waiting with name board. AC worked perfectly, and pricing was exactly as quoted. No hidden charges.',
    route: { from: 'Airport', to: 'Hotel' },
    vehicle: 'Swift Dzire',
    date: 'Dec 2024',
    verified: true,
    category: 'Airport Transfer',
  },
  {
    name: 'Sunita Deshmukh',
    location: 'Nashik, MH',
    rating: 5,
    text: 'We travel to Shirdi monthly for business and always use Sai Tulsi. Consistent quality, well-maintained vehicles, and drivers who understand our schedule.',
    route: { from: 'Nashik', to: 'Shirdi' },
    vehicle: 'Swift Dzire',
    date: 'Jan 2025',
    verified: true,
    category: 'Corporate',
  },
  {
    name: 'Mahesh Joshi',
    location: 'Aurangabad, MH',
    rating: 5,
    text: 'Tempo Traveller for our group of 14 pilgrims was perfect. Clean vehicle, comfortable pushback seats, and driver helped with luggage. Transparent pricing.',
    route: { from: 'Aurangabad', to: 'Shirdi' },
    vehicle: 'Tempo Traveller',
    date: 'Nov 2024',
    verified: true,
    category: 'Group Travel',
  },
  {
    name: 'Kavita Reddy',
    location: 'Bangalore, KA',
    rating: 5,
    text: 'Long journey from Shirdi to Pune airport was comfortable. Driver maintained perfect speed and got us there 20 minutes early. Will definitely book again.',
    route: { from: 'Shirdi', to: 'Pune Airport' },
    vehicle: 'Toyota Innova',
    date: 'Jan 2025',
    verified: true,
    category: 'Outstation',
  }
];

const stats = [
  { value: '4.8/5', label: 'Average Rating' },
  { value: '5,000+', label: 'Happy Customers' },
  { value: '95%', label: 'Repeat Bookings' },
];

export const ReviewsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentIndex, setCurrentIndex] = useState(0);

  const reviewsPerPage = 3;
  const totalPages = Math.ceil(reviews.length / reviewsPerPage);

  const next = () => setCurrentIndex((prev) => (prev + 1) % totalPages);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages);

  const visibleReviews = reviews.slice(
    currentIndex * reviewsPerPage,
    (currentIndex + 1) * reviewsPerPage
  );

  return (
    <section id="reviews" className="py-24 bg-white relative overflow-hidden" ref={ref}>
      {/* Background Polish */}
      <div className="absolute inset-0 bg-slate-50/50" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        
        {/* Centered Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-slate-900 text-amber-400 px-4 py-1.5 rounded-full mb-6 shadow-lg">
            <Star className="w-3.5 h-3.5 fill-amber-400" />
            <span className="font-black uppercase tracking-widest text-[10px]">Guest Reviews</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-slate-900 mb-6 leading-tight">
            Trusted by Thousands of <br />
            <span className="text-amber-500">Happy Travelers</span>
          </h2>
          <p className="text-slate-500 text-lg mb-10">
            Real experiences from pilgrims and travelers who chose Sai Tulsi Tours & Travels for their Maharashtra journey.
          </p>

          {/* Centered Stats Bar */}
          <div className="flex flex-wrap justify-center gap-8 sm:gap-16 border-y border-slate-100 py-8">
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl font-black text-slate-900">{stat.value}</div>
                <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* 3-Column Review Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {visibleReviews.map((review, idx) => (
            <motion.div
              key={`${review.name}-${currentIndex}-${idx}`}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white rounded-[2.5rem] p-8 border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-500 flex flex-col group"
            >
              {/* Header: Rating & Quote */}
              <div className="flex justify-between items-start mb-6">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <Quote className="w-8 h-8 text-slate-100 group-hover:text-amber-100 transition-colors" />
              </div>

              {/* Review Text */}
              <p className="text-slate-600 leading-relaxed mb-8 flex-grow text-sm">
                "{review.text}"
              </p>

              {/* Route Badge */}
              <div className="flex items-center gap-3 mb-8 bg-slate-50 p-3 rounded-2xl border border-slate-100">
                <span className="text-[10px] font-black uppercase text-slate-400">{review.route.from}</span>
                <ArrowRight className="w-3 h-3 text-amber-500" />
                <span className="text-[10px] font-black uppercase text-slate-900">{review.route.to}</span>
              </div>

              {/* Footer: User Details */}
              <div className="flex items-center gap-4 border-t border-slate-50 pt-6">
                <div className="w-12 h-12 rounded-full bg-slate-900 flex items-center justify-center font-black text-amber-400">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="font-black text-slate-900 text-sm">{review.name}</h4>
                    {review.verified && <CheckCircle2 className="w-3 h-3 text-green-500" />}
                  </div>
                  <div className="flex items-center gap-1 text-[10px] font-bold text-slate-400 uppercase">
                    <MapPin className="w-3 h-3" /> {review.location}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Centered Navigation */}
        <div className="flex items-center justify-center gap-6 mb-20">
          <button
            onClick={prev}
            className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center hover:bg-slate-900 hover:text-white transition-all shadow-sm"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          
          <div className="flex gap-2">
            {[...Array(totalPages)].map((_, i) => (
              <div 
                key={i} 
                className={`h-1.5 rounded-full transition-all duration-300 ${i === currentIndex ? 'w-8 bg-amber-500' : 'w-2 bg-slate-200'}`} 
              />
            ))}
          </div>

          <button
            onClick={next}
            className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center hover:bg-slate-900 hover:text-white transition-all shadow-sm"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Compact CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="bg-slate-900 rounded-[3rem] p-10 lg:p-14 text-center relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-amber-400/5 blur-[100px]" />
          <h3 className="text-3xl font-black text-white mb-4 relative z-10">
            Ready to Plan Your Journey?
          </h3>
          <p className="text-slate-400 mb-8 max-w-xl mx-auto relative z-10">
            Join thousands of satisfied pilgrims. Book your clean, reliable, and verified taxi in Shirdi today.
          </p>
          <button 
            onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-amber-400 hover:bg-amber-500 text-slate-900 px-10 py-4 rounded-2xl font-black transition-all active:scale-95 shadow-xl relative z-10"
          >
            Book Your Ride Now
          </button>
        </motion.div>

      </div>
    </section>
  );
};