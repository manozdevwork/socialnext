
import React, { useEffect, useState } from 'react';
import { ChevronUp } from 'lucide-react';
import LandingHeader from '@/components/landing/LandingHeader';
import LandingHero from '@/components/landing/LandingHero';
import LandingFeatures from '@/components/landing/LandingFeatures';
import LandingHowItWorks from '@/components/landing/LandingHowItWorks';
import LandingTestimonials from '@/components/landing/LandingTestimonials';
import LandingPricing from '@/components/landing/LandingPricing';
import LandingLinkedInSection from '@/components/landing/LandingLinkedInSection';
import LandingFAQ from '@/components/landing/LandingFAQ';
import LandingCTA from '@/components/landing/LandingCTA';
import LandingContact from '@/components/landing/LandingContact';
import LandingFooter from '@/components/landing/LandingFooter';
import { zIndex } from '@/styles/theme/zIndex';

const LandingPage: React.FC = () => {
  // State to track scroll position for scroll-to-top button visibility
  const [scrollY, setScrollY] = useState(0);
  
  // Update scroll position for button visibility
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white text-neutral-800 overflow-x-hidden">
      {/* Header */}
      <LandingHeader />
      
      {/* Hero Section */}
      <LandingHero />
      
      {/* Features Section */}
      <LandingFeatures />
      
      {/* How It Works Section */}
      <LandingHowItWorks />
      
      {/* Testimonials Section */}
      <LandingTestimonials />
      
      {/* Pricing Section */}
      <LandingPricing />
      
      {/* LinkedIn Lead Magnet Section */}
      <LandingLinkedInSection />
      
      {/* FAQ Section */}
      <LandingFAQ />
      
      {/* CTA Section */}
      <LandingCTA />
      
      {/* Contact Section */}
      <LandingContact />
      
      {/* Footer */}
      <LandingFooter />
      
      {/* Minimal scroll to top button */}
      {scrollY > 800 && (
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 bg-white text-neutral-600 p-4 rounded-full shadow-lg hover:shadow-xl hover:text-neutral-800 transition-all duration-300 border border-neutral-200"
          aria-label="Scroll to top"
          style={{ zIndex: zIndex.tooltip }}
        >
          <ChevronUp className="h-5 w-5" />
        </button>
      )}
    </div>
  );
};

export default LandingPage;
