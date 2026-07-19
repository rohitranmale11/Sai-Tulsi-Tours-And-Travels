import { motion, useReducedMotion } from "framer-motion";
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
  Circle,
} from "lucide-react";
import heroImage from "@/assets/image.png";

const trustFeatures = [
  { icon: Clock3, title: "24/7 Service", detail: "Day or night, we are ready" },
  {
    icon: Sparkles,
    title: "Clean & Safe Cars",
    detail: "Sanitized before every trip",
  },
  {
    icon: ShieldCheck,
    title: "Experienced Drivers",
    detail: "Local, verified professionals",
  },
  {
    icon: BadgeIndianRupee,
    title: "Transparent Pricing",
    detail: "Clear fares, no surprises",
  },
];

const statistics = [
  { value: "5,000+", label: "Happy Customers", icon: Users },
  { value: "5+", label: "Years Experience", icon: Award },
  { value: "50+", label: "Destinations", icon: MapPin },
  { value: "4.8", label: "Google Rating", icon: Star },
];

const serviceBadges = [
  "Temple Darshan",
  "Airport Transfers",
  "Outstation Cabs",
  "24/7 Available",
];

export const HeroSection = () => {
  const shouldReduceMotion = useReducedMotion();

  const scrollToRoutes = () => {
    const element = document.querySelector("#routes");
    if (element) {
      const offsetPosition =
        element.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  const reveal = (delay = 0) => ({
    initial: { opacity: 0, y: shouldReduceMotion ? 0 : 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] as const },
  });

  // Continuous floating animation for decorative elements
  const float = (duration = 4, delay = 0) => ({
    y: shouldReduceMotion ? 0 : [0, -12, 0],
    transition: {
      duration,
      delay,
      repeat: Infinity,
      repeatType: "loop" as const,
      ease: "easeInOut",
    },
  });

  // Continuous rotation for ring
  const rotate = (duration = 20) => ({
    rotate: shouldReduceMotion ? 0 : 360,
    transition: {
      duration,
      repeat: Infinity,
      ease: "linear",
    },
  });

  return (
    <section
      id="home"
      className="relative isolate min-h-[90vh] overflow-hidden bg-slate-50 font-heading text-slate-900"
    >
      {/* Decorative animated gradient orbs */}
      <motion.div
        className="absolute -top-40 -right-40 h-[600px] w-[600px] rounded-full bg-amber-400/10 blur-3xl"
        animate={float(8, 0)}
      />
      <motion.div
        className="absolute bottom-20 left-20 h-[300px] w-[300px] rounded-full bg-amber-300/5 blur-2xl"
        animate={float(6, 1)}
      />
      <motion.div
        className="absolute top-1/3 left-1/4 h-16 w-16 rounded-full bg-amber-400/5 blur-xl"
        animate={float(5, 0.5)}
      />

      {/* Rotating ring behind the image */}
      <motion.div
        className="absolute right-1/4 top-1/2 -translate-y-1/2 hidden lg:block"
        animate={rotate(25)}
        style={{ width: 500, height: 500 }}
      >
        <div className="absolute inset-0 rounded-full border-2 border-amber-400/10" />
        <div className="absolute inset-8 rounded-full border-2 border-amber-400/5" />
        <div className="absolute inset-16 rounded-full border-2 border-amber-400/5" />
      </motion.div>

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-16">
          {/* ===== LEFT CONTENT ===== */}
          <div className="space-y-6 py-8 lg:py-12">
            <motion.div
              {...reveal()}
              className="inline-flex items-center gap-3 rounded-full border border-amber-200/30 bg-white/70 px-4 py-2 shadow-lg backdrop-blur-sm"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-amber-700">
                Shirdi's trusted cab service
              </span>
            </motion.div>

            <motion.h1
              {...reveal(0.08)}
              className="text-balance text-5xl font-black leading-[0.96] tracking-[-0.045em] sm:text-6xl md:text-7xl lg:text-[5rem]"
            >
              Shirdi Cab
              <span className="block bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
                Services
              </span>
            </motion.h1>

            <motion.div
              {...reveal(0.14)}
              className="flex flex-wrap gap-2"
            >
              {serviceBadges.map((service) => (
                <span
                  key={service}
                  className="rounded-full border border-slate-200 bg-white/80 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.12em] text-slate-700 shadow-sm backdrop-blur-sm sm:px-3.5 sm:text-xs"
                >
                  {service}
                </span>
              ))}
            </motion.div>

            <motion.p
              {...reveal(0.18)}
              className="text-xl font-semibold tracking-tight text-slate-800 sm:text-2xl lg:text-3xl"
            >
              Comfortable. Reliable. Always On Time.
            </motion.p>

            <motion.p
              {...reveal(0.24)}
              className="max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg lg:text-xl"
            >
              Your trusted partner for temple darshan, airport transfers and
              outstation trips across Maharashtra.
            </motion.p>

            {/* Trust features - horizontal cards with continuous hover float */}
            <motion.div
              {...reveal(0.48)}
              className="grid grid-cols-2 gap-3 sm:grid-cols-4"
            >
              {trustFeatures.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  className="group rounded-2xl border border-slate-200/60 bg-white/70 p-3 shadow-sm backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:border-amber-200 hover:shadow-lg"
                  whileHover={{ y: -4 }}
                  animate={float(4 + index * 0.5, index * 0.2)}
                >
                  <div className="flex items-center gap-3">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-amber-100 text-amber-600 sm:h-10 sm:w-10">
                      <feature.icon className="h-5 w-5" />
                    </span>
                    <div className="min-w-0">
                      <p className="text-xs font-extrabold text-slate-800 sm:text-sm">
                        {feature.title}
                      </p>
                      <p className="mt-0.5 hidden truncate text-[11px] text-slate-500 sm:block">
                        {feature.detail}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Quick stats */}
            <motion.div
              {...reveal(0.56)}
              className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm font-semibold text-slate-600"
            >
              {[
                "Instant booking support",
                "Verified local drivers",
                "No hidden charges",
              ].map((item) => (
                <span key={item} className="flex items-center gap-2">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                    <Check className="h-3 w-3" strokeWidth={3} />
                  </span>
                  {item}
                </span>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              {...reveal(0.32)}
              className="flex flex-wrap items-center gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={scrollToRoutes}
                className="group flex items-center gap-3 rounded-full bg-gradient-to-r from-amber-400 to-amber-500 px-8 py-4 text-sm font-bold text-slate-900 shadow-lg shadow-amber-400/25 transition-all hover:shadow-amber-400/40 hover:from-amber-500 hover:to-amber-600"
              >
                Book Now
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-7 py-4 text-sm font-bold text-slate-700 backdrop-blur-sm transition-all hover:border-amber-300 hover:bg-white/90"
              >
                <Phone className="h-4 w-4 text-amber-500" />
                Call Now
              </motion.button>
            </motion.div>
          </div>

          {/* ===== RIGHT SIDE: IMAGE WITH ANIMATED BORDER AND FLOATING ELEMENTS ===== */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex justify-center"
          >
            <div className="relative w-full max-w-lg">
              {/* Animated border container with rotating gradient */}
              <div className="relative rounded-3xl p-[3px] bg-gradient-to-r from-amber-300 via-amber-500 to-orange-400 animate-border-spin">
                <div className="rounded-3xl overflow-hidden bg-slate-200 shadow-2xl">
                  <img
                    src={heroImage}
                    alt="Shirdi temple at sunrise with premium tourist cabs"
                    className="h-[350px] w-full object-cover object-[68%_center] sm:h-[400px] lg:h-[500px]"
                  />
                </div>
              </div>

              {/* Floating car icon that moves continuously */}
              <motion.div
                className="absolute -top-6 -right-6 bg-white/90 backdrop-blur-xl p-3 rounded-2xl shadow-xl border border-amber-200/30"
                animate={float(3, 0.5)}
              >
                <CarFront className="h-8 w-8 text-amber-500" />
              </motion.div>

              {/* Floating rating badge */}
              <motion.div
                className="absolute -bottom-4 -left-4 bg-white/90 backdrop-blur-xl px-4 py-2 rounded-2xl shadow-xl border border-amber-200/30 flex items-center gap-2"
                animate={float(4.5, 1)}
              >
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="text-sm font-bold text-slate-900">4.9</span>
              </motion.div>

              {/* Stats row (replaces bottom stats bar) */}
              <div className="mt-6 grid grid-cols-4 gap-2 rounded-2xl border border-slate-200/60 bg-white/70 p-2 backdrop-blur-sm">
                {statistics.map((stat) => (
                  <div key={stat.label} className="flex flex-col items-center justify-center rounded-xl p-2 text-center">
                    <stat.icon className={`h-5 w-5 text-amber-500 ${stat.icon === Star ? "fill-amber-500" : ""}`} />
                    <div className="text-sm font-black tracking-tight text-slate-800">{stat.value}</div>
                    <div className="text-[9px] font-bold uppercase tracking-[0.12em] text-slate-500">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom decorative line with continuous shimmer */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-amber-400/30 to-transparent"
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{ backgroundSize: "200% 200%" }}
      />

      {/* Keyframes for border spin animation */}
      <style>{`
        @keyframes border-spin {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-border-spin {
          background-size: 200% 200%;
          animation: border-spin 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};