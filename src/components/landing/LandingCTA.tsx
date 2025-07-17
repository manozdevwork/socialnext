
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { ROUTES } from '@/constants/routes';
import { Button } from '@/components/ui/enhanced-button';
import { Title, Subtitle } from '@/components/ui/typography';

const LandingCTA: React.FC = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Enhanced background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-primary-400/20 rounded-full blur-3xl"></div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Clean, focused headline */}
        <div className="mb-12">
          <Title size="lg" className="text-white mb-6 font-semibold tracking-tight leading-tight text-4xl md:text-5xl">
            Ready to Transform Your LinkedIn Presence?
          </Title>
          
          <Subtitle size="lg" className="text-white/90 max-w-2xl mx-auto font-normal leading-relaxed text-xl">
            Join thousands of professionals creating stunning carousels with AI. No setup required.
          </Subtitle>
        </div>
        
        {/* Single, prominent CTA */}
        <div className="mb-8">
          <Link to={ROUTES.SIGNUP} className="flex-1 max-w-sm">
                          <Button 
                            variant="primary"
                            size="md"
                            className="h-16 rounded-xl text-lg font-bold bg-white text-primary hover:bg-white/90 hover:text-primary-700 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-0.5"
                            prefixIcon={<ArrowRight className="h-6 w-6" />}
                          >
                            Start Your Free Trial
                          </Button>
                        </Link>
        </div>
        
        {/* Trust signal */}
        <Subtitle className="text-white/80 text-base font-medium">
          No credit card required • 14-day free trial • Cancel anytime
        </Subtitle>
      </div>
    </section>
  );
};

export default LandingCTA;
