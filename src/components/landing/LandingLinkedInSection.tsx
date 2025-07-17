
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Linkedin, TrendingUp, Users, Zap, BarChart3 } from 'lucide-react';
import { ROUTES } from '@/constants/routes';
import { Button } from '@/components/ui/enhanced-button';
import { Title, Subtitle } from '@/components/ui/typography';
import { Card, CardContent } from '@/components/ui/card';

const LandingLinkedInSection: React.FC = () => {
  const benefits = [
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: 'Boost Engagement',
      description: 'Create content that resonates and drives meaningful conversations with your audience.'
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: 'Grow Your Network',
      description: 'Attract quality connections with professional, visually compelling carousel posts.'
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: 'Save Time',
      description: 'Transform ideas into polished carousels in minutes with our intelligent AI assistance.'
    }
  ];

  const stats = [
    { number: '300%', label: 'Avg. Engagement Boost', icon: BarChart3 },
    { number: '10k+', label: 'Happy Creators', icon: Users },
    { number: '15min', label: 'Time Saved per Post', icon: Zap },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-primary-50/30 to-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-primary-100 text-primary px-4 py-2 rounded-full">
              <img 
                          src="/icons/linkedin.svg" 
                          alt="LinkedIn" 
                          className="w-6 h-6" 
                        />
                <span className="text-sm font-medium">LinkedIn Growth</span>
              </div>
              
              <Title size="lg" className="text-neutral-800 font-medium tracking-tight leading-tight">
                Supercharge Your LinkedIn Presence
              </Title>

              <Subtitle size="lg" className="text-neutral-600 leading-relaxed">
                Transform your LinkedIn strategy with AI-powered carousel creation. Stand out in the feed, 
                engage your audience, and establish yourself as a thought leader.
              </Subtitle>
            </div>

            {/* Benefits */}
            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="flex-shrink-0 p-3 bg-white rounded-xl shadow-sm border border-primary-100">
                    <div className="text-primary-600">
                      {benefit.icon}
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Title size="sm" className="text-neutral-800 font-medium">
                      {benefit.title}
                    </Title>
                    <Subtitle className="text-neutral-600 leading-relaxed">
                      {benefit.description}
                    </Subtitle>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                asChild
                variant="primary"
                size="lg"
                className="rounded-xl px-8 font-medium bg-primary-500 hover:bg-primary-600 text-white h-12"
              >
                <Link to={ROUTES.SIGNUP}>
                  Start Creating Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              
              <Button 
                variant="outlined"
                size="lg"
                className="rounded-xl px-8 font-medium border-neutral-300 text-neutral-700 hover:border-primary-300 hover:text-primary-600 h-12"
              >
                View Examples
              </Button>
            </div>
          </div>

          {/* Right Column - Stats & Visual */}
          <div className="space-y-6">
            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-4">
              {stats.slice(0, 2).map((stat, index) => (
                <Card key={index} className="bg-white border border-neutral-200 shadow-sm hover:shadow-md transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-100 rounded-xl mb-4">
                      <stat.icon className="h-6 w-6 text-primary-600" />
                    </div>
                    <Title size="lg" className="text-neutral-800 mb-2 font-semibold">
                      {stat.number}
                    </Title>
                    <Subtitle className="text-neutral-600">
                      {stat.label}
                    </Subtitle>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Feature Highlight Card */}
            <Card className="bg-gradient-to-br from-primary-500 to-primary-600 text-white border-none shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-white/20 rounded-lg">
                    <Zap className="h-6 w-6 text-white" />
                  </div>
                  <Title size="md" className="text-white font-medium">
                    AI-Powered Creation
                  </Title>
                </div>
                
                <Subtitle className="text-primary-100 mb-6 leading-relaxed">
                  Our intelligent AI understands your content goals and creates carousels that resonate with your professional audience.
                </Subtitle>
                
                <Button 
                  variant="secondary"
                  size="md"
                  className="rounded-xl bg-white text-primary-700 hover:bg-neutral-50 font-medium"
                >
                  Learn More
                </Button>
              </CardContent>
            </Card>

            {/* Social Proof */}
            <Card className="bg-white border border-neutral-200 shadow-sm">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex -space-x-2">
                    {[...Array(4)].map((_, i) => (
                      <div 
                        key={i}
                        className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 border-2 border-white flex items-center justify-center text-white font-medium text-sm"
                      >
                        {String.fromCharCode(65 + i)}
                      </div>
                    ))}
                  </div>
                  <Subtitle className="text-neutral-600 font-medium">
                    Join 10,000+ creators
                  </Subtitle>
                </div>
                <Subtitle className="text-neutral-500 text-sm leading-relaxed">
                  "SocialNext transformed how I create LinkedIn content. My engagement has never been higher, and the time savings are incredible."
                </Subtitle>
                <div className="mt-3 text-primary-600 text-sm font-medium">
                  — Sarah Chen, Marketing Director
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingLinkedInSection;
