import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Calendar, Clock, MapPin, User, Phone, Car, MessageSquare, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';

const vehicles = [
  { value: 'swift-dzire', label: 'Swift Dzire (Sedan)' },
  { value: 'innova', label: 'Toyota Innova Crysta (SUV)' },
  { value: 'ertiga', label: 'Maruti Ertiga (MPV)' },
  { value: 'tempo-12', label: 'Tempo Traveller (12 Seater)' },
  { value: 'tempo-17', label: 'Tempo Traveller (17 Seater)' },
];

const tripTypes = [
  { value: 'one-way', label: 'One Way' },
  { value: 'round-trip', label: 'Round Trip' },
  { value: 'local', label: 'Local (Within City)' },
];

export const BookingSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    pickup: '',
    drop: '',
    date: '',
    time: '',
    vehicle: '',
    tripType: '',
    requests: '',
  });

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formData.name || !formData.phone || !formData.pickup || !formData.drop) {
      toast.error("Please fill all required fields");
      return;
    }

    setIsLoading(true);

    try {
      const res = await fetch("http://localhost:5000/api/bookings/book", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          pickup: formData.pickup,
          drop: formData.drop,
          vehicle: formData.vehicle,
          dateTime: `${formData.date} ${formData.time}`,
          tripType: formData.tripType,
          requests: formData.requests,
        }),
      });

      const data = await res.json();

      if (data.success) {
        toast.success("Booking successful! We will contact you soon.");
        setIsSubmitted(true);
      } else {
        toast.error("Booking failed. Try again.");
      }

    } catch (error) {
      console.error(error);
      toast.error("Server error. Please try later.");
    }

    setIsLoading(false);
  };

  // SUCCESS SCREEN
  if (isSubmitted) {
    return (
      <section id="booking" className="py-20 md:py-32 bg-gradient-to-br from-primary to-royal-light" ref={ref}>
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-lg mx-auto text-center"
          >
            <div className="w-20 h-20 rounded-full bg-secondary flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-primary" />
            </div>

            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
              Booking Confirmed 🎉
            </h2>

            <p className="text-white/80 text-lg mb-8">
              Your booking request has been received. Our driver will contact you shortly.
            </p>

            <Button variant="hero" size="lg" onClick={() => setIsSubmitted(false)}>
              Book Another Ride
            </Button>
          </motion.div>
        </div>
      </section>
    );
  }

  // FORM UI
  return (
    <section id="booking" className="py-20 md:py-32 bg-gradient-to-br from-primary to-royal-light" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* LEFT INFO */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <span className="text-secondary font-semibold uppercase tracking-wider text-sm">
              Book Your Ride
            </span>

            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mt-2 mb-6">
              Ready to Travel?
            </h2>

            <p className="text-white/80 text-lg leading-relaxed mb-8">
              Fill the booking form and get confirmation within 15 minutes.
            </p>

            <div className="space-y-4">
              {[
                'Fast confirmation',
                'Transparent pricing',
                'Free cancellation',
                'Verified drivers',
              ].map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0" />
                  <span className="text-white/90">{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* FORM */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-premium-lg p-6 md:p-8">
              <h3 className="font-heading font-bold text-xl text-primary mb-6">
                Book Your Taxi
              </h3>

              <div className="space-y-5">

                {/* NAME & PHONE */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Full Name</Label>
                    <Input
                      placeholder="Enter your name"
                      value={formData.name}
                      onChange={(e) => handleChange('name', e.target.value)}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label>Phone Number</Label>
                    <Input
                      type="tel"
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => handleChange('phone', e.target.value)}
                      required
                    />
                  </div>
                </div>

                {/* PICKUP & DROP */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Pickup Location</Label>
                    <Input
                      placeholder="e.g., Shirdi Temple"
                      value={formData.pickup}
                      onChange={(e) => handleChange('pickup', e.target.value)}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label>Drop Location</Label>
                    <Input
                      placeholder="e.g., Mumbai Airport"
                      value={formData.drop}
                      onChange={(e) => handleChange('drop', e.target.value)}
                      required
                    />
                  </div>
                </div>

                {/* DATE & TIME */}
                <div className="grid md:grid-cols-2 gap-4">
                  <Input type="date" value={formData.date} onChange={(e) => handleChange('date', e.target.value)} required />
                  <Input type="time" value={formData.time} onChange={(e) => handleChange('time', e.target.value)} required />
                </div>

                {/* VEHICLE & TRIP */}
                <div className="grid md:grid-cols-2 gap-4">
                  <Select onValueChange={(val) => handleChange('vehicle', val)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Choose vehicle" />
                    </SelectTrigger>
                    <SelectContent>
                      {vehicles.map((vehicle) => (
                        <SelectItem key={vehicle.value} value={vehicle.value}>
                          {vehicle.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>

                  <Select onValueChange={(val) => handleChange('tripType', val)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Trip Type" />
                    </SelectTrigger>
                    <SelectContent>
                      {tripTypes.map((type) => (
                        <SelectItem key={type.value} value={type.value}>
                          {type.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* REQUESTS */}
                <Textarea
                  placeholder="Special requests (optional)"
                  value={formData.requests}
                  onChange={(e) => handleChange('requests', e.target.value)}
                />

                {/* SUBMIT */}
                <Button type="submit" variant="hero" size="xl" className="w-full" disabled={isLoading}>
                  {isLoading ? 'Submitting...' : 'Confirm Booking'}
                </Button>

              </div>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
