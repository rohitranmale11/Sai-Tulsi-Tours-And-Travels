import { Navbar } from '@/components/layout/Navbar';
import { HeroSection } from '@/components/sections/HeroSection';
import { FleetSection } from '@/components/sections/FleetSection';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { RoutesSection } from '@/components/sections/RoutesSection';
import { BookingSection } from '@/components/sections/BookingSection';
import { StatsSection } from '@/components/sections/StatsSection';
import { ReviewsSection } from '@/components/sections/ReviewsSection';
import { Footer } from '@/components/layout/Footer';
import { FloatingButtons } from '@/components/layout/FloatingButtons';
import { WelcomePopup } from '@/components/sections/WelcomePopup';

const Index = () => {
  return (
    <div className="min-h-screen">
      <WelcomePopup />
      <Navbar />
      <HeroSection />
      {/* <StatsSection /> */}
      <ServicesSection />
      <RoutesSection />
      <FleetSection />
      {/* <BookingSection /> */}
      <ReviewsSection />
      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default Index;
