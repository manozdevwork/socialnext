
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Play, CheckCircle, Users, TrendingUp } from 'lucide-react';
import { ROUTES } from '@/constants/routes';
import { Button } from '@/components/ui/enhanced-button';
import { Title, Subtitle } from '@/components/ui/typography';
import { Card } from '@/components/ui/card';

const LandingHero: React.FC = () => {
  return (
    <section className="relative pt-20 pb-16 flex items-center justify-center overflow-hidden bg-gradient-to-b from-white via-gray-50/30 to-white">
      {/* Subtle background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary-50/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-gray-100/40 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center mt-20">
        <div className="max-w-5xl mx-auto">
          {/* Social proof badge */}
          <div className="mb-8 animate-fade-in">
            <div className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm border border-primary text-primary px-6 py-3 rounded-full text-sm font-medium shadow-sm">
              <div className="flex items-center gap-1">
                <Users className="h-4 w-4" />
                <span className="font-semibold">10,000+</span>
              </div>
              <span>professionals already creating stunning LinkedIn content</span>
            </div>
          </div>

          {/* Hero title - More benefit-focused */}
          <div className="mb-12 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <Title size="xl" className="text-gray-900 mb-6 font-bold tracking-tight leading-[1.1] text-4xl md:text-6xl lg:text-7xl">
              Turn Your Ideas Into{' '}
              <span className="text-primary-600 font-bold relative">
                Viral LinkedIn Carousels
                {/* <div className="absolute -bottom-2 left-0 right-0 h-3 bg-primary -z-10 rounded-lg"></div> */}
              </span>
            </Title>

            {/* Hero subtitle with clear value proposition */}
            <Subtitle size="lg" className="text-gray-700 max-w-3xl mx-auto leading-relaxed font-normal text-xl md:text-2xl mb-8">
              Create professional carousels that get engagement in minutes, not hours. 
              No design skills required.
            </Subtitle>

            {/* Key benefits */}
            <div className="flex flex-wrap justify-center gap-6 md:gap-8 mb-8">
              {[
                { icon: CheckCircle, text: "Ready in 2 mins" },
                { icon: TrendingUp, text: "10x more engagement" },
                // { icon: Users, text: "Used by 12K+ creators" }
                { icon: Users, text: "Build for creators" }
              ].map((benefit, index) => (
                <div key={index} className="flex items-center gap-2 text-gray-600">
                  <benefit.icon className="h-5 w-5 text-green-500" />
                  <span className="font-medium text-sm md:text-base">{benefit.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Enhanced CTA buttons */}
          <div className="mb-16 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-2xl mx-auto">
              <Link to={ROUTES.SIGNUP} className="flex-1 max-w-sm">
                <Button 
                  variant="primary"
                  size="lg"
                  fullWidth
                  className="h-16 rounded-xl text-lg font-bold bg-primary hover:bg-primary-700 text-white shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-0.5"
                  prefixIcon={<ArrowRight className="h-6 w-6" />}
                >
                  Create Your First Carousel Free
                </Button>
              </Link>
              
              <Button 
                variant="outlined"
                size="lg"
                fullWidth
                className="h-16 rounded-xl text-lg font-semibold border-2 border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400 transition-all duration-300 flex-1 max-w-sm"
                prefixIcon={<Play className="h-6 w-6" />}
              >
                Watch 60s Demo
              </Button>
            </div>
            
            {/* Trust signal below CTA */}
            <div className="mt-4 text-center">
              <Subtitle className="text-gray-500 text-sm font-medium">
                ✨ No credit card required • Start creating in 30 seconds
              </Subtitle>
            </div>
          </div>

          {/* Hero Banner - Platform Feature Showcase */}
          <div className="mb-12 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <Card className="relative max-w-6xl mx-auto bg-white shadow-2xl border border-gray-200/60 rounded-2xl overflow-hidden hover:shadow-3xl transition-all duration-700 group">
              {/* Subtle glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary-500/5 via-transparent to-primary-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative">
                <img
                  src="/hero-banner.png"
                  alt="AI-powered carousel editor in action - Create stunning LinkedIn posts in minutes"
                  className="w-full h-auto object-cover rounded-2xl"
                  loading="eager"
                />
                
                {/* Floating labels for features */}
                <div className="absolute top-2 left-[248px] bg-white/95 backdrop-blur-sm px-4 py-2 rounded-lg shadow-lg border border-gray-300 animate-fade-in" style={{ animationDelay: '0.8s' }}>
                  <Subtitle className="text-gray-700 font-semibold text-sm flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    AI Writing Assistant
                  </Subtitle>
                </div>
                
                <div className="absolute bottom-6 right-6 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-lg shadow-lg border border-gray-300 animate-fade-in" style={{ animationDelay: '1s' }}>
                  <Subtitle className="text-gray-700 font-semibold text-sm flex items-center gap-2">
                    <TrendingUp className="h-4 w-4 text-primary-600" />
                    Post to LinkedIn
                  </Subtitle>
                </div>
              </div>
            </Card>
          </div>

          {/* Enhanced trust signals */}
          <div className="animate-fade-in" style={{ animationDelay: '0.5s' }}>
            <div className="flex flex-col items-center gap-8">
              {/* Star rating */}
              <div className="flex flex-col items-center gap-4">
                <div className="flex items-center gap-2">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="w-6 h-6 text-amber-400 text-xl">⭐</div>
                  ))}
                  <Subtitle className="text-gray-600 ml-3 font-semibold text-lg">
                    4.9/5 from 2,000+ creators
                  </Subtitle>
                </div>
                
                <Subtitle className="text-gray-500 font-medium">
                  "Best tool for LinkedIn content creation" - Marketing professionals
                </Subtitle>
              </div>
              
              {/* Company logos */}
              <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 opacity-50 hover:opacity-70 transition-opacity duration-300">
                {['Google', 'Microsoft', 'Meta', 'Adobe', 'Salesforce'].map((company) => (
                  <Subtitle key={company} className="text-sm font-semibold tracking-wider text-gray-500 uppercase">
                    {company}
                  </Subtitle>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingHero;
