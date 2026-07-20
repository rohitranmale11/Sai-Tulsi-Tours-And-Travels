import { Navbar } from '@/components/layout/Navbar';
import { PremiumLanding } from '@/components/sections/PremiumLanding';
import { Footer } from '@/components/layout/Footer';
import { FloatingButtons } from '@/components/layout/FloatingButtons';
import { SEO } from '@/components/seo/SEO';

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-body">
      <SEO />
      <Navbar />
      <PremiumLanding />
      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default Index;
