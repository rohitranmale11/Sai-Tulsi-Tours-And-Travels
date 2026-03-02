import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { Users, Car, HeadphonesIcon, Award } from 'lucide-react';

const stats = [
  { icon: Users, value: 10000, suffix: '+', label: 'Happy Customers' },
  { icon: Car, value: 10, suffix: '+', label: 'Vehicles' },
  { icon: HeadphonesIcon, value: 24, suffix: '/7', label: 'Support' },
  { icon: Award, value: 5, suffix: '+', label: 'Years Experience' },
];

const AnimatedCounter = ({ value, suffix, isInView }: { value: number; suffix: string; isInView: boolean }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    const duration = 2000;
    const steps = 60;
    const stepValue = value / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += stepValue;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [value, isInView]);

  return (
    <span className="counter-value text-2xl md:text-3xl">
      {count.toLocaleString()}{suffix}
    </span>
  );
};

export const StatsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-8 md:py-10 bg-gradient-to-r from-primary via-royal-light to-primary" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 backdrop-blur mb-2">
                <stat.icon className="w-5 h-5 md:w-6 md:h-6 text-secondary" />
              </div>
              <div className="mb-1">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} isInView={isInView} />
              </div>
              <p className="text-white/80 font-medium text-xs md:text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
