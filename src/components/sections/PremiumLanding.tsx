import {
  motion,
  useInView,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";
import type { ReactNode } from "react";
import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  Award,
  BadgeIndianRupee,
  Briefcase,
  CalendarDays,
  CarFront,
  Check,
  CheckCircle2,
  ChevronRight,
  Clock3,
  Headphones,
  Map,
  MapPin,
  MessageCircle,
  Phone,
  Plane,
  Route,
  ShieldCheck,
  Sparkles,
  Star,
  Train,
  Users,
  Zap,
} from "lucide-react";

import heroImage from "@/assets/image.png";
import swiftDzire from "@/assets/swift-dzire.jpg";
import innova from "@/assets/innova.jpg";
import ertiga from "@/assets/ertiga.jpg";
import tempoTraveller from "@/assets/tempo-traveller.jpg";
import mumbaiImg from "@/assets/routes/gateway-of-india.jpg";
import elloraImg from "@/assets/routes/ellora-caves.jpeg";
import shaniImg from "@/assets/routes/shani.jpg";
import trimbakImg from "@/assets/routes/trimbak.jpg";
import bhimashankarImg from "@/assets/routes/sri-bhimashankar-temple.jpg";
import vaniImg from "@/assets/routes/image.png";
import { TrustindexReviews } from "@/components/reviews/TrustindexReviews";

const phoneNumber = "+919356310911";
const displayPhone = "+91 93563 10911";
const whatsappHref = `https://wa.me/919356310911?text=${encodeURIComponent("Hi, I want to book a taxi from Shirdi.")}`;

const fadeUp = {
  hidden: { opacity: 0, y: 34 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const services = [
  {
    icon: MapPin,
    title: "Shirdi Local Chauffeur",
    eyebrow: "Hourly and point-to-point",
    description:
      "Temple visits, hotel transfers, local sightseeing, and flexible wait time handled with calm precision.",
    features: [
      "Sai Baba Temple access guidance",
      "Clean AC cabs",
      "Flexible pickup windows",
    ],
  },
  {
    icon: Plane,
    title: "Airport Transfers",
    eyebrow: "Shirdi, Pune, Mumbai",
    description:
      "Flight-aware pickup and drop service for families, business travelers, and late-night arrivals.",
    features: [
      "Driver coordination",
      "Luggage friendly fleet",
      "Early morning support",
    ],
  },
  {
    icon: Route,
    title: "Outstation Journeys",
    eyebrow: "Maharashtra and beyond",
    description:
      "One-way and round-trip travel to Mumbai, Pune, Nashik, Sambhajinagar, and custom destinations.",
    features: [
      "Transparent per-km pricing",
      "Multiple stops",
      "Experienced route drivers",
    ],
  },
  {
    icon: Train,
    title: "Railway Pickups",
    eyebrow: "Kopargaon and Manmad",
    description:
      "Reliable station transfers with practical local coordination for pilgrims arriving by train.",
    features: ["Arrival tracking", "Easy meeting point", "Fixed fare guidance"],
  },
  {
    icon: CalendarDays,
    title: "Temple Tour Curation",
    eyebrow: "Darshan-first planning",
    description:
      "Well-paced spiritual itineraries covering Shirdi, Shani Shingnapur, Trimbakeshwar, Ellora, and more.",
    features: ["Single-day packages", "Multi-site planning", "Patient drivers"],
  },
  {
    icon: Briefcase,
    title: "Business Travel Desk",
    eyebrow: "Executive movement",
    description:
      "Priority cabs for corporate guests, hotels, events, recurring airport movements, and monthly needs.",
    features: [
      "Dedicated coordination",
      "Invoice-friendly",
      "Premium vehicles",
    ],
  },
];

const stats = [
  {
    icon: Users,
    value: 5000,
    suffix: "+",
    label: "Guests served",
    caption: "Families, pilgrims, and executives",
  },
  {
    icon: Award,
    value: 5,
    suffix: "+",
    label: "Years local trust",
    caption: "Deep Shirdi route expertise",
  },
  {
    icon: Map,
    value: 30,
    suffix: "+",
    label: "Travel routes",
    caption: "Across Maharashtra and nearby states",
  },
  {
    icon: Star,
    value: 5,
    suffix: "/5",
    label: "Guest rating",
    caption: "Consistent service experience",
  },
];

const promises = [
  {
    icon: ShieldCheck,
    title: "Verified Commercial Fleet",
    detail:
      "Every ride is assigned from a permitted, regularly cleaned commercial vehicle.",
  },
  {
    icon: Clock3,
    title: "Time Respect",
    detail:
      "Pickup planning, darshan buffers, and airport margins are treated like part of the service.",
  },
  {
    icon: BadgeIndianRupee,
    title: "Clear Price Conversation",
    detail:
      "You get simple fare guidance before the journey begins, with no surprise booking fees.",
  },
  {
    icon: Headphones,
    title: "Human Support",
    detail:
      "Call or WhatsApp support stays available for changes, delays, and custom itinerary questions.",
  },
];

const packages = [
  {
    title: "Shani Shingnapur",
    subtitle: "Sacred half-day darshan",
    image: shaniImg,
    duration: "Half day",
    distance: "70 km",
    price: "Custom fare",
    highlights: [
      "Shani Temple",
      "Local darshan timing",
      "Hotel pickup and return",
    ],
  },
  {
    title: "Nashik Darshan",
    subtitle: "Jyotirlinga and heritage route",
    image: trimbakImg,
    duration: "Full day",
    distance: "125 km",
    price: "Package quote",
    highlights: ["Trimbakeshwar", "Panchavati", "Godavari Ghat"],
  },
  {
    title: "Sambhajinagar Circuit",
    subtitle: "Ellora, Grishneshwar, Bhadra Maruti",
    image: elloraImg,
    duration: "Full day",
    distance: "110 km",
    price: "Package quote",
    highlights: ["Ellora Caves", "Grishneshwar Jyotirlinga", "Bhadra Maruti"],
  },
  {
    title: "Mumbai Darshan",
    subtitle: "City icons and airport transfers",
    image: mumbaiImg,
    duration: "Full day",
    distance: "250 km",
    price: "Custom fare",
    highlights: ["Gateway of India", "Marine Drive", "Siddhivinayak"],
  },
  {
    title: "Bhimashankar",
    subtitle: "Jyotirlinga with scenic drive",
    image: bhimashankarImg,
    duration: "Full day",
    distance: "185 km",
    price: "Package quote",
    highlights: ["Bhimashankar Temple", "Hill route", "Nature viewpoints"],
  },
  {
    title: "Vani Darshan",
    subtitle: "Saptashrungi temple route",
    image: vaniImg,
    duration: "Full day",
    distance: "150 km",
    price: "Package quote",
    highlights: ["Saptashrungi Temple", "Hill darshan", "Scenic return"],
  },
];

const vehicles = [
  {
    name: "Swift Dzire",
    type: "Premium Sedan",
    image: swiftDzire,
    capacity: "4 guests",
    luggage: "2 bags",
    price: "Rs. 12/km",
    bestFor: "Solo travelers and couples",
    features: [
      "AC cabin",
      "GPS route support",
      "Clean interior",
      "City and outstation",
    ],
  },
  {
    name: "Maruti Ertiga",
    type: "Comfort MPV",
    image: ertiga,
    capacity: "6 guests",
    luggage: "3 bags",
    price: "Rs. 14/km",
    bestFor: "Families seeking value",
    features: [
      "Spacious cabin",
      "Comfortable seating",
      "Fuel efficient",
      "Temple tours",
    ],
  },
  {
    name: "Toyota Innova Crysta",
    type: "Executive SUV",
    image: innova,
    capacity: "6 guests",
    luggage: "4 bags",
    price: "Rs. 20/km",
    bestFor: "Premium family comfort",
    features: [
      "Extra legroom",
      "Premium AC",
      "USB charging",
      "Long-distance comfort",
    ],
  },
  {
    name: "Tempo Traveller",
    type: "Group Traveller",
    image: tempoTraveller,
    capacity: "12-17 guests",
    luggage: "Group bags",
    price: "Rs. 25/km",
    bestFor: "Pilgrim groups",
    features: [
      "Pushback seats",
      "Group AC",
      "Luggage space",
      "Tour coordination",
    ],
  },
];

function scrollToSection(id: string) {
  const element = document.querySelector(id);
  if (!element) return;
  const top = element.getBoundingClientRect().top + window.scrollY - 86;
  window.scrollTo({ top, behavior: "smooth" });
}

function SectionIntro({
  kicker,
  title,
  text,
  align = "center",
}: {
  kicker: string;
  title: string;
  text: string;
  align?: "center" | "left";
}) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-120px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={
        align === "center"
          ? "mx-auto mb-14 max-w-3xl text-center"
          : "mb-10 max-w-2xl"
      }
    >
      <div className="mb-5 inline-flex items-center gap-2 border border-amber-200 bg-white px-4 py-2 text-[11px] font-bold uppercase text-amber-700 shadow-[0_10px_30px_rgba(15,23,42,0.06)]">
        <Sparkles className="h-3.5 w-3.5" />
        {kicker}
      </div>
      <h2 className="text-balance text-4xl font-semibold leading-[1.04] text-slate-950 sm:text-5xl lg:text-6xl">
        {title}
      </h2>
      <p className="mt-6 text-base leading-8 text-slate-500 sm:text-lg">
        {text}
      </p>
    </motion.div>
  );
}

function PremiumFrame({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`relative rounded-[2rem] bg-gradient-to-br from-white via-amber-200/70 to-emerald-200/70 p-px shadow-[0_24px_80px_rgba(15,23,42,0.09)] ${className}`}
    >
      {children}
    </div>
  );
}

function AnimatedCounter({
  value,
  suffix,
  active,
}: {
  value: number;
  suffix: string;
  active: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return;
    const start = performance.now();
    const duration = 1600;
    let frame = 0;

    const tick = (time: number) => {
      const progress = Math.min((time - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(value * eased);
      if (progress < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [active, value]);

  const formatted =
    value % 1 === 0 ? Math.round(count).toLocaleString() : count.toFixed(1);
  return (
    <span>
      {formatted}
      {suffix}
    </span>
  );
}

function TiltCard({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const reduce = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [7, -7]), {
    stiffness: 160,
    damping: 18,
  });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-7, 7]), {
    stiffness: 160,
    damping: 18,
  });

  return (
    <motion.div
      style={
        reduce ? undefined : { rotateX, rotateY, transformStyle: "preserve-3d" }
      }
      onMouseMove={(event) => {
        if (reduce) return;
        const rect = event.currentTarget.getBoundingClientRect();
        x.set((event.clientX - rect.left) / rect.width - 0.5);
        y.set((event.clientY - rect.top) / rect.height - 0.5);
      }}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
      whileHover={{ y: -8, scale: 1.01 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function HeroSection() {
  const reduce = useReducedMotion();

  return (
    <section
      id="home"
      className="relative isolate overflow-hidden bg-[linear-gradient(135deg,#fbf8f1_0%,#ffffff_45%,#edf7f3_100%)] pt-28 sm:pt-32"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-300/60 to-transparent" />
      <div className="absolute left-0 top-24 hidden h-[520px] w-px bg-gradient-to-b from-transparent via-slate-300 to-transparent lg:block" />
      <div className="mx-auto grid min-h-[calc(100svh-7rem)] max-w-7xl items-center gap-14 px-5 pb-16 sm:px-6 lg:grid-cols-[0.96fr_1.04fr] lg:px-8">
        <motion.div variants={stagger} initial="hidden" animate="visible">
          <motion.div
            variants={fadeUp}
            className="mb-6 inline-flex items-center gap-2 border border-slate-200 bg-white/80 px-4 py-2 text-[11px] font-bold uppercase text-slate-600 shadow-sm backdrop-blur"
          >
            <span className="h-2 w-2 bg-emerald-500" />
            Trusted taxi service in Shirdi
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="max-w-4xl text-balance text-5xl font-semibold leading-[0.98] text-slate-950 sm:text-6xl lg:text-7xl xl:text-[5.7rem]"
          >
            Premium cabs for temple, airport and outstation travel.
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-7 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl"
          >
            Shirdi Cab Services pairs verified local drivers, spotless
            commercial vehicles, and calm 24/7 coordination for journeys across
            Maharashtra.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-9 flex flex-col gap-3 sm:flex-row"
          >
            <a
              href={`tel:${phoneNumber}`}
              className="group inline-flex min-h-14 items-center justify-center gap-3 bg-slate-950 px-7 py-4 text-sm font-semibold text-white shadow-[0_20px_45px_rgba(15,23,42,0.22)] transition-all duration-300 hover:-translate-y-1 hover:bg-slate-800"
            >
              <Phone className="h-4 w-4 text-amber-300" />
              Call {displayPhone}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex min-h-14 items-center justify-center gap-3 border border-emerald-200 bg-white px-7 py-4 text-sm font-semibold text-slate-950 shadow-[0_18px_40px_rgba(20,83,45,0.1)] transition-all duration-300 hover:-translate-y-1 hover:border-emerald-400"
            >
              <MessageCircle className="h-4 w-4 text-emerald-500" />
              WhatsApp Quote
            </a>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="mt-8 grid max-w-2xl grid-cols-1 gap-3 sm:grid-cols-3"
          >
            {["No hidden charges", "Verified drivers", "Clean AC vehicles"].map(
              (item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 text-sm font-medium text-slate-600"
                >
                  <span className="flex h-5 w-5 items-center justify-center bg-emerald-100 text-emerald-700">
                    <Check className="h-3 w-3" strokeWidth={3} />
                  </span>
                  {item}
                </div>
              ),
            )}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: reduce ? 0 : 44, scale: 0.96 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <motion.div
            animate={
              reduce
                ? undefined
                : { opacity: [0.45, 0.85, 0.45], scale: [1, 1.08, 1] }
            }
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -inset-8 rounded-[2.5rem] bg-[radial-gradient(circle_at_30%_20%,rgba(245,158,11,0.22),transparent_34%),radial-gradient(circle_at_70%_85%,rgba(16,185,129,0.18),transparent_30%)] blur-3xl"
          />
          <TiltCard className="relative">
            <div className="hero-image-frame p-[2px] shadow-[0_36px_110px_rgba(15,23,42,0.18)]">
              <div className="relative aspect-[1.18] overflow-hidden rounded-[calc(2rem-2px)] bg-slate-100">
                <img
                  src={heroImage}
                  alt="Shirdi Cab Services branded premium taxi experience"
                  width="1536"
                  height="1024"
                  decoding="async"
                  fetchPriority="high"
                  className="relative z-10 h-full w-full object-cover transition-transform duration-1000 hover:scale-105"
                />
                <div className="pointer-events-none absolute inset-0 z-20 bg-[linear-gradient(135deg,rgba(255,255,255,0.18),transparent_42%,rgba(245,158,11,0.12))]" />
              </div>
            </div>
          </TiltCard>
        </motion.div>
      </div>
    </section>
  );
}

function StatsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-90px" });

  return (
    <section ref={ref} className="relative bg-white py-10 sm:py-14">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {stats.map((stat, index) => (
            <PremiumFrame key={stat.label}>
              <motion.div
                variants={fadeUp}
                whileHover={{ y: -10, scale: 1.015 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="premium-spotlight group relative h-full rounded-[calc(2rem-1px)] border border-white/70 bg-white/90 p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.9)] backdrop-blur-xl"
              >
                <motion.div
                  animate={{ y: [0, index % 2 === 0 ? -7 : 7, 0] }}
                  transition={{
                    duration: 5 + index,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="pointer-events-none absolute right-5 top-5 h-16 w-16 rounded-full bg-gradient-to-br from-amber-200/45 to-emerald-200/25 blur-2xl"
                />
                <div className="mb-8 flex items-center justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-amber-300 shadow-[0_18px_38px_rgba(15,23,42,0.2)] transition-all duration-300 group-hover:rotate-3 group-hover:scale-110 group-hover:bg-amber-400 group-hover:text-slate-950">
                    <stat.icon className="h-5 w-5" />
                  </span>
                  <span className="h-px w-16 bg-gradient-to-r from-slate-200 to-transparent" />
                </div>
                <div className="text-4xl font-semibold text-slate-950">
                  <AnimatedCounter
                    value={stat.value}
                    suffix={stat.suffix}
                    active={isInView}
                  />
                </div>
                <p className="mt-2 text-sm font-semibold text-slate-700">
                  {stat.label}
                </p>
                <p className="mt-1 text-xs leading-5 text-slate-500">
                  {stat.caption}
                </p>
              </motion.div>
            </PremiumFrame>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function ServicesSection() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-[#fbfaf6] py-24 sm:py-32"
    >
      <div className="absolute inset-0 opacity-70 [background-image:radial-gradient(circle_at_18%_12%,rgba(245,158,11,0.1),transparent_24%),radial-gradient(circle_at_82%_18%,rgba(16,185,129,0.09),transparent_22%)]" />
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <SectionIntro
          kicker="Service portfolio"
          title="Designed around the way premium travelers actually move."
          text="Not every ride has the same emotional job. A temple route needs patience. An airport route needs precision. A corporate route needs discretion."
        />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-120px" }}
          className="grid gap-5 md:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((service, index) => (
            <motion.div key={service.title} variants={fadeUp} className="group">
              <motion.article
                whileHover={{ y: -12 }}
                transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                className="premium-spotlight relative h-full overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-7 shadow-[0_18px_55px_rgba(15,23,42,0.06)] transition-all duration-500 hover:border-slate-950 hover:bg-slate-950 hover:text-white hover:shadow-[0_34px_90px_rgba(15,23,42,0.18)]"
              >
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-amber-300 via-slate-950 to-emerald-300 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <motion.div
                  className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-amber-200/0 blur-3xl transition-colors duration-500 group-hover:bg-amber-300/20"
                  animate={{ scale: [1, 1.18, 1], opacity: [0.4, 0.75, 0.4] }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.2,
                  }}
                />
                <div className="mb-7 flex items-start justify-between gap-6">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-950 text-amber-300 shadow-[0_20px_44px_rgba(15,23,42,0.22)] transition-all duration-500 group-hover:rotate-3 group-hover:scale-110 group-hover:bg-amber-400 group-hover:text-slate-950">
                    <service.icon className="h-7 w-7" />
                  </div>
                  <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-right text-[10px] font-bold uppercase text-slate-500 transition-colors group-hover:border-white/15 group-hover:bg-white/10 group-hover:text-amber-200">
                    {service.eyebrow}
                  </span>
                </div>
                <h3 className="text-2xl font-semibold text-slate-950 transition-colors group-hover:text-white">
                  {service.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-slate-500 transition-colors group-hover:text-slate-300">
                  {service.description}
                </p>
                <div className="mt-7 space-y-3">
                  {service.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-center gap-3 text-sm font-medium text-slate-700 transition-colors group-hover:text-slate-200"
                    >
                      <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                      {feature}
                    </div>
                  ))}
                </div>
              </motion.article>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function PromiseSection() {
  return (
    <section className="relative overflow-hidden bg-white py-24 sm:py-32">
      <div className="absolute inset-y-0 left-1/2 hidden w-px bg-gradient-to-b from-transparent via-slate-200 to-transparent lg:block" />
      <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
        <SectionIntro
          align="left"
          kicker="Our promise"
          title="The quiet details that make a journey feel premium."
          text="Luxury here is not loud. It is a clean cabin, a composed driver, clarity on fare, and someone answering when plans change."
        />
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-120px" }}
          className="grid gap-4 sm:grid-cols-2"
        >
          {promises.map((promise, index) => (
            <PremiumFrame key={promise.title}>
              <motion.div
                variants={fadeUp}
                whileHover={{ y: -12, scale: 1.01 }}
                className={`premium-spotlight group relative h-full overflow-hidden rounded-[calc(2rem-1px)] p-7 shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] transition-all duration-500 ${index === 1 || index === 2 ? "bg-slate-950 text-white" : "bg-[#fbfaf6] text-slate-950"}`}
              >
                <motion.span
                  animate={{ x: ["-20%", "10%", "-20%"], y: [0, -12, 0] }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.25,
                  }}
                  className={`absolute right-0 top-0 h-28 w-28 rounded-full blur-3xl ${index === 1 || index === 2 ? "bg-amber-300/20" : "bg-emerald-200/55"}`}
                />
                <div
                  className={`mb-12 flex h-14 w-14 items-center justify-center rounded-2xl shadow-lg transition-all duration-500 group-hover:-rotate-3 group-hover:scale-110 ${index === 1 || index === 2 ? "bg-white/10 text-amber-300" : "bg-white text-emerald-600"}`}
                >
                  <promise.icon className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-semibold">{promise.title}</h3>
                <p
                  className={`mt-4 text-sm leading-7 ${index === 1 || index === 2 ? "text-slate-300" : "text-slate-500"}`}
                >
                  {promise.detail}
                </p>
              </motion.div>
            </PremiumFrame>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function PackagesSection() {
  return (
    <section id="routes" className="bg-[#f7f2e8] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <SectionIntro
          kicker="Curated packages"
          title="Temple and city routes with the itinerary already thought through."
          text="Choose a proven package or ask for a custom route. Every plan is adjusted to your pickup time, darshan pace, and group size."
        />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-120px" }}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {packages.map((item) => (
            <TiltCard key={item.title} className="group">
              <motion.article
                variants={fadeUp}
                className="premium-spotlight relative h-full overflow-hidden rounded-[2rem] border border-white/80 bg-white shadow-[0_26px_80px_rgba(68,54,31,0.13)] ring-1 ring-slate-950/5 transition-all duration-500 group-hover:shadow-[0_40px_100px_rgba(68,54,31,0.18)]"
              >
                <div className="absolute inset-x-6 top-0 z-10 h-px bg-gradient-to-r from-transparent via-amber-300 to-transparent" />
                <div className="relative h-64 overflow-hidden rounded-t-[2rem]">
                  <img
                    src={item.image}
                    alt={`${item.title} taxi package from Shirdi Cab Services`}
                    width="640"
                    height="426"
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/10 to-transparent" />
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-white/0 via-white/10 to-white/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    animate={{ x: ["-120%", "120%"] }}
                    transition={{
                      duration: 3.6,
                      repeat: Infinity,
                      repeatDelay: 1.8,
                      ease: "easeInOut",
                    }}
                  />
                  <div className="absolute bottom-5 left-5 right-5">
                    <p className="inline-flex rounded-full bg-amber-300/95 px-3 py-1.5 text-[10px] font-bold uppercase text-slate-950 shadow-lg">
                      {item.subtitle}
                    </p>
                    <h3 className="mt-1 text-2xl font-semibold text-white">
                      {item.title}
                    </h3>
                  </div>
                </div>
                <div className="p-6">
                  <div className="mb-6 grid grid-cols-3 overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 shadow-inner">
                    <div className="p-3 text-center transition-colors group-hover:bg-white">
                      <p className="text-[10px] font-bold uppercase text-slate-400">
                        Trip
                      </p>
                      <p className="mt-1 text-xs font-semibold text-slate-900">
                        {item.duration}
                      </p>
                    </div>
                    <div className="border-x border-slate-200 p-3 text-center transition-colors group-hover:bg-white">
                      <p className="text-[10px] font-bold uppercase text-slate-400">
                        Dist.
                      </p>
                      <p className="mt-1 text-xs font-semibold text-slate-900">
                        {item.distance}
                      </p>
                    </div>
                    <div className="p-3 text-center transition-colors group-hover:bg-white">
                      <p className="text-[10px] font-bold uppercase text-slate-400">
                        Fare
                      </p>
                      <p className="mt-1 text-xs font-semibold text-slate-900">
                        {item.price}
                      </p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    {item.highlights.map((highlight) => (
                      <p
                        key={highlight}
                        className="flex items-center gap-3 text-sm font-medium text-slate-600"
                      >
                        <Check className="h-4 w-4 text-emerald-500" />
                        {highlight}
                      </p>
                    ))}
                  </div>
                  <a
                    href={`tel:${phoneNumber}`}
                    className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-slate-950 px-5 py-4 text-sm font-semibold text-white shadow-[0_18px_36px_rgba(15,23,42,0.18)] transition-all duration-300 hover:-translate-y-1 hover:bg-amber-400 hover:text-slate-950 hover:shadow-[0_22px_44px_rgba(245,158,11,0.28)]"
                  >
                    Book Package <ChevronRight className="h-4 w-4" />
                  </a>
                </div>
              </motion.article>
            </TiltCard>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function FleetSection() {
  return (
    <section id="fleet" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <SectionIntro
          kicker="Premium fleet"
          title="Choose the cabin that fits the journey, not just the passenger count."
          text="From efficient sedans to group travellers, each vehicle is positioned around comfort, luggage, route length, and the experience your guests expect."
        />

        <div className="space-y-8">
          {vehicles.map((vehicle, index) => (
            <motion.article
              key={vehicle.name}
              initial={{ opacity: 0, y: 34 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-120px" }}
              transition={{
                duration: 0.7,
                delay: index * 0.04,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{ y: -10 }}
              className="premium-spotlight group grid overflow-hidden rounded-[2.25rem] border border-white bg-[linear-gradient(135deg,#ffffff_0%,#fbfaf6_52%,#eef8f3_100%)] shadow-[0_28px_90px_rgba(15,23,42,0.1)] ring-1 ring-slate-950/5 transition-all duration-500 hover:shadow-[0_44px_120px_rgba(15,23,42,0.17)] lg:grid-cols-[0.9fr_1.1fr]"
            >
              <div className="relative min-h-72 overflow-hidden rounded-[2rem] m-3 lg:m-4">
                <img
                  src={vehicle.image}
                  alt={`${vehicle.name} taxi available for Shirdi cab booking`}
                  width="640"
                  height="426"
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/65 via-transparent to-transparent opacity-80" />
                <div className="absolute left-5 top-5 rounded-full border border-white/40 bg-white/90 px-4 py-2 text-[11px] font-bold uppercase text-slate-700 shadow-xl backdrop-blur">
                  {vehicle.type}
                </div>
                <div className="absolute bottom-5 left-5 rounded-2xl border border-white/20 bg-white/12 px-4 py-3 text-white shadow-2xl backdrop-blur-xl">
                  <p className="text-[10px] font-bold uppercase text-amber-200">
                    Best for
                  </p>
                  <p className="text-sm font-semibold">{vehicle.bestFor}</p>
                </div>
              </div>
              <div className="p-7 sm:p-10">
                <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-start">
                  <div>
                    <p className="text-sm font-semibold text-amber-700">
                      {vehicle.type}
                    </p>
                    <h3 className="mt-2 text-3xl font-semibold text-slate-950 sm:text-4xl">
                      {vehicle.name}
                    </h3>
                  </div>
                  <div className="rounded-2xl border border-slate-200 bg-white px-5 py-4 text-left shadow-[0_16px_36px_rgba(15,23,42,0.06)] transition-transform group-hover:-translate-y-1 sm:text-right">
                    <p className="text-[10px] font-bold uppercase text-slate-400">
                      Starting from
                    </p>
                    <p className="mt-1 text-2xl font-semibold text-slate-950">
                      {vehicle.price}
                    </p>
                  </div>
                </div>
                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-inner transition-colors group-hover:bg-amber-50/60">
                    <p className="text-[10px] font-bold uppercase text-slate-400">
                      Capacity
                    </p>
                    <p className="mt-1 font-semibold text-slate-950">
                      {vehicle.capacity}
                    </p>
                  </div>
                  <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-inner transition-colors group-hover:bg-emerald-50/70">
                    <p className="text-[10px] font-bold uppercase text-slate-400">
                      Luggage
                    </p>
                    <p className="mt-1 font-semibold text-slate-950">
                      {vehicle.luggage}
                    </p>
                  </div>
                </div>
                <div className="mt-7 grid gap-3 sm:grid-cols-2">
                  {vehicle.features.map((feature) => (
                    <p
                      key={feature}
                      className="flex items-center gap-3 text-sm font-medium text-slate-600"
                    >
                      <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                      {feature}
                    </p>
                  ))}
                </div>
                <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                  <a
                    href={`tel:${phoneNumber}`}
                    className="inline-flex flex-1 items-center justify-center gap-2 rounded-2xl bg-slate-950 px-5 py-4 text-sm font-semibold text-white shadow-[0_18px_38px_rgba(15,23,42,0.18)] transition-all hover:-translate-y-1 hover:bg-slate-800"
                  >
                    <Phone className="h-4 w-4 text-amber-300" />
                    Call to Book
                  </a>
                  <a
                    href={whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex flex-1 items-center justify-center gap-2 rounded-2xl border border-emerald-300 bg-white px-5 py-4 text-sm font-semibold text-slate-950 shadow-[0_18px_38px_rgba(16,185,129,0.09)] transition-all hover:-translate-y-1 hover:border-emerald-500"
                  >
                    <MessageCircle className="h-4 w-4 text-emerald-500" />
                    WhatsApp
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ReviewsSection() {
  return (
    <section
      id="reviews"
      className="relative overflow-hidden bg-[#fbfaf6] py-24 sm:py-32"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(245,158,11,0.16),transparent_30%),radial-gradient(circle_at_92%_80%,rgba(16,185,129,0.13),transparent_26%)]" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <SectionIntro
          align="left"
          kicker="Guest testimonials"
          title="Kind words from travelers we have grown with."
          text="Real feedback from families, pilgrims, business guests, and group travelers who trusted Shirdi Cab Services for their journey."
        />

        <div className="-mx-5 overflow-hidden px-5 pb-4 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
          <TrustindexReviews />
        </div>
      </div>
    </section>
  );
}

function BookingCTA() {
  return (
    <section
      id="booking"
      className="relative overflow-hidden bg-white py-24 sm:py-32"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(245,158,11,0.13),transparent_28%),radial-gradient(circle_at_80%_80%,rgba(16,185,129,0.12),transparent_24%)]" />
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="relative grid overflow-hidden rounded-[2.5rem] border border-white bg-[linear-gradient(135deg,#0b1020_0%,#111827_45%,#173d34_100%)] shadow-[0_40px_120px_rgba(15,23,42,0.26)] ring-1 ring-slate-950/5 lg:grid-cols-[1.05fr_0.95fr]"
        >
          <motion.div
            animate={{ x: ["-8%", "8%", "-8%"], y: [0, -14, 0] }}
            transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -left-16 top-8 h-56 w-56 rounded-full bg-amber-300/15 blur-3xl"
          />
          <motion.div
            animate={{ x: ["8%", "-8%", "8%"], y: [0, 16, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-20 right-1/3 h-64 w-64 rounded-full bg-emerald-300/12 blur-3xl"
          />
          <div className="relative p-8 text-white sm:p-12 lg:p-16">
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-[11px] font-bold uppercase text-amber-200 shadow-[0_14px_34px_rgba(0,0,0,0.16)] backdrop-blur-xl">
              <Zap className="h-3.5 w-3.5" />
              Instant ride planning
            </div>
            <h2 className="text-balance text-4xl font-semibold leading-[1.04] sm:text-5xl lg:text-6xl">
              Tell us the route. We will shape the journey.
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
              For fastest confirmation, call or send your pickup, destination,
              date, time, and preferred vehicle on WhatsApp.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {["Pickup", "Vehicle", "Confirmation"].map((step, index) => (
                <div
                  key={step}
                  className="rounded-2xl border border-white/10 bg-white/[0.06] p-4 backdrop-blur-xl"
                >
                  <p className="text-[10px] font-bold uppercase text-amber-200">
                    Step {index + 1}
                  </p>
                  <p className="mt-1 text-sm font-semibold text-white">
                    {step}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href={`tel:${phoneNumber}`}
                className="inline-flex items-center justify-center gap-3 rounded-2xl bg-amber-400 px-7 py-4 text-sm font-semibold text-slate-950 shadow-[0_22px_48px_rgba(245,158,11,0.28)] transition-all hover:-translate-y-1 hover:bg-white"
              >
                <Phone className="h-4 w-4" />
                Call {displayPhone}
              </a>
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 rounded-2xl border border-white/20 bg-white/10 px-7 py-4 text-sm font-semibold text-white shadow-[0_18px_44px_rgba(0,0,0,0.14)] transition-all hover:-translate-y-1 hover:bg-white hover:text-slate-950"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp Itinerary
              </a>
            </div>
          </div>
          <div className="relative min-h-80 overflow-hidden p-4">
            <div className="relative h-full min-h-80 overflow-hidden rounded-[2rem] border border-white/15">
              <img
                src={innova}
                alt="Toyota Innova premium cab interior and exterior"
                width="640"
                height="426"
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover opacity-90 transition-transform duration-1000 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/15 bg-white/10 p-5 text-white shadow-2xl backdrop-blur-xl">
                <p className="text-[11px] font-bold uppercase text-amber-200">
                  Booking desk
                </p>
                <p className="mt-2 text-xl font-semibold">
                  24/7 support for airport, temple, and custom route requests.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export const PremiumLanding = () => {
  return (
    <main className="overflow-hidden font-body">
      <HeroSection />
      <StatsSection />
      <ServicesSection />
      <PromiseSection />
      <PackagesSection />
      <FleetSection />
      <ReviewsSection />
      <BookingCTA />
    </main>
  );
};
