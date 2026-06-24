import { Car, Phone, Mail, MapPin, Facebook, Instagram, MessageCircle, ArrowRight, ExternalLink } from 'lucide-react';

const quickLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Fleet', href: '#fleet' },
  { name: 'Services', href: '#services' },
  { name: 'Routes', href: '#routes' },
  { name: 'Reviews', href: '#reviews' },
];

const topRoutes = [
  'Shirdi to Mumbai Airport',
  'Shirdi to Pune (One Way)',
  'Shirdi to Nashik Darshan',
  'Shirdi to Aurangabad/Ellora',
];

const socialLinks = [
  { icon: MessageCircle, href: 'https://wa.me/919356310911', label: 'WhatsApp', color: 'hover:bg-green-500' },
  { icon: Instagram, href: '#', label: 'Instagram', color: 'hover:bg-pink-600' },
  { icon: Facebook, href: '#', label: 'Facebook', color: 'hover:bg-blue-600' },
];

export const Footer = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="relative bg-slate-950 text-white overflow-hidden">
      {/* Decorative Gradient Background */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-500/5 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/5 blur-[120px] rounded-full" />

      {/* Main Content */}
      <div className="container mx-auto px-4 pt-20 pb-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">

          {/* Brand Column */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-amber-400 flex items-center justify-center shadow-lg shadow-amber-400/20">
                <Car className="w-6 h-6 text-slate-950" />
              </div>
              <div>
                <h2 className="font-black text-xl tracking-tight leading-none">Shirdi Cab Services</h2>
                <p className="text-amber-400 text-[10px] font-black uppercase tracking-[0.2em]">Your Trusted Travel Partner</p>
              </div>
            </div>

            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              Providing premium, safe, and reliable spiritual travel experiences across Maharashtra since 2015. Your comfort is our devotion.
            </p>

            <a
              href="https://shirdicabservices.in"
              className="inline-flex items-center gap-2 text-sm font-bold text-amber-400 transition-colors hover:text-amber-300"
            >
              shirdicabservices.in
              <ExternalLink className="h-3.5 w-3.5" />
            </a>

            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className={`w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center transition-all duration-300 group ${social.color}`}
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4 text-slate-400 group-hover:text-white transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-black uppercase tracking-widest text-white mb-8 flex items-center gap-2">
              <span className="w-2 h-2 bg-amber-400 rounded-full" />
              Quick Explore
            </h3>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-slate-400 text-sm hover:text-amber-400 transition-all flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all text-amber-500" />
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Routes Section (SEO Friendly) */}
          <div>
            <h3 className="text-sm font-black uppercase tracking-widest text-white mb-8 flex items-center gap-2">
              <span className="w-2 h-2 bg-amber-400 rounded-full" />
              Popular Routes
            </h3>
            <ul className="space-y-4">
              {topRoutes.map((route) => (
                <li key={route} className="text-slate-400 text-sm flex items-start gap-2 group cursor-default">
                  <div className="w-1.5 h-1.5 rounded-full bg-slate-800 mt-1.5 group-hover:bg-amber-500 transition-colors" />
                  <span className="group-hover:text-slate-200 transition-colors">{route}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Map & Location */}
          <div>
            <h3 className="text-sm font-black uppercase tracking-widest text-white mb-8 flex items-center gap-2">
              <span className="w-2 h-2 bg-amber-400 rounded-full" />
              Our Office
            </h3>
            <div className="rounded-[2rem] overflow-hidden border border-slate-800 shadow-2xl relative group">
              <iframe
                title="Shirdi Cab Services office location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3759.088894468571!2d74.4691462!3d19.7615025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdc600109594f71%3A0x62916892523f2603!2sSai%20Tulsi%20Hotel!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                className="w-full h-40 grayscale group-hover:grayscale-0 transition-all duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-transparent transition-colors pointer-events-none" />
            </div>
            <div className="mt-4 flex items-start gap-3">
              <MapPin className="w-4 h-4 text-amber-400 mt-1 shrink-0" />
              <p className="text-xs text-slate-400 leading-relaxed">
                Near Sai Tulsi Hotel, Nagar-Manmad Rd,<br />
                Shirdi, Maharashtra 423109
              </p>
            </div>
          </div>

        </div>

        {/* Contact Strip */}
        <div className="mt-16 py-8 border-y border-slate-900 flex flex-wrap justify-center gap-8 md:gap-16">
          <a href="tel:+919356310911" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center group-hover:bg-amber-400 transition-all">
              <Phone className="w-4 h-4 text-amber-400 group-hover:text-slate-950" />
            </div>
            <div>
              <p className="text-[10px] font-black uppercase text-slate-500 tracking-widest">Call Us</p>
              <p className="text-sm font-bold text-white group-hover:text-amber-400 transition-colors">+91 93563 10911</p>
            </div>
          </a>
          <a href="mailto:contact@saitulsitravels.com" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center group-hover:bg-amber-400 transition-all">
              <Mail className="w-4 h-4 text-amber-400 group-hover:text-slate-950" />
            </div>
            <div>
              <p className="text-[10px] font-black uppercase text-slate-500 tracking-widest">Email Us</p>
              <p className="text-sm font-bold text-white group-hover:text-amber-400 transition-colors">contact@saitulsitravels.com</p>
            </div>
          </a>
        </div>

        {/* Final Bottom Bar */}
        <div className="mt-12 flex flex-col md:flex-row items-center justify-between gap-6 border-t border-slate-900/50 pt-8">
          <p className="text-slate-500 text-[11px] font-medium tracking-wide text-center md:text-left">
            © {new Date().getFullYear()} <span className="text-slate-300">Shirdi Cab Services</span>. All rights reserved.
          </p>

          <a
            href="https://rohitranmale.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 group"
          >
            <span className="text-slate-500 text-[11px] font-medium uppercase tracking-tighter">Crafted by</span>
            <span className="text-amber-400/80 group-hover:text-amber-400 font-black text-xs transition-all flex items-center gap-1">
              ROHIT G RANMALE
              <ExternalLink className="w-2.5 h-2.5" />
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
};
