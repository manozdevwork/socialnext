
import React, { useEffect, useRef } from 'react';
import { ArrowRight, Brain, MessageSquare, Calendar, BarChart3, Palette, Users } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Title, Subtitle } from '@/components/ui/typography';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  delay: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, icon, delay }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('opacity-100', 'translate-y-0');
              entry.target.classList.remove('opacity-0', 'translate-y-8');
            }, delay);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (cardRef.current) {
      observer.observe(cardRef.current);
    }
    
    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, [delay]);
  
  return (
    <Card 
      ref={cardRef}
      className="opacity-0 translate-y-8 transition-all duration-700 ease-out p-8 bg-white border-2 border-gray-100 rounded-2xl hover:shadow-lg hover:border-gray-200 transition-all duration-300"
    >
      <div className="p-4 bg-blue-50 rounded-xl inline-block mb-6 border border-blue-100">
        {icon}
      </div>
      <Title size="sm" className="mb-4 text-gray-900 font-semibold leading-tight">
        {title}
      </Title>
      <Subtitle size="md" className="text-gray-700 leading-relaxed font-normal">
        {description}
      </Subtitle>
    </Card>
  );
};

const LandingFeatures: React.FC = () => {
  const featuresData = [
    {
      title: "AI-Powered Design",
      description: "Create professional carousel designs in minutes with our intelligent AI that understands your brand style and aesthetic preferences.",
      icon: <Brain className="h-7 w-7 text-blue-600" />,
    },
    {
      title: "Content Suggestions",
      description: "Never run out of ideas. Get personalized content suggestions based on your niche, audience interests, and trending topics.",
      icon: <MessageSquare className="h-7 w-7 text-green-600" />,
    },
    {
      title: "Effortless Publishing",
      description: "Plan your content calendar and automatically publish carousels at the optimal times for maximum engagement and reach.",
      icon: <Calendar className="h-7 w-7 text-purple-600" />,
    },
    {
      title: "Performance Analytics",
      description: "Track performance with detailed analytics on views, engagement, clicks, and conversion metrics to optimize your strategy.",
      icon: <BarChart3 className="h-7 w-7 text-orange-600" />,
    },
    {
      title: "Brand Consistency",
      description: "Maintain consistent branding across all carousels with customizable templates, style presets, and brand guidelines.",
      icon: <Palette className="h-7 w-7 text-pink-600" />,
    },
    {
      title: "Team Collaboration",
      description: "Seamlessly work with team members or clients with real-time collaboration, feedback loops, and approval workflows.",
      icon: <Users className="h-7 w-7 text-indigo-600" />,
    },
  ];
  
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100');
            entry.target.classList.remove('opacity-0');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  
  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div 
          ref={sectionRef}
          className="text-center mb-16 opacity-0 transition-opacity duration-1000 ease-out"
        >
          <Title size="lg" className="mb-6 text-gray-900 font-semibold text-4xl md:text-5xl">
            Powerful Features for <span className="text-primary">Social Success</span>
          </Title>
          <Subtitle size="lg" className="max-w-3xl mx-auto text-gray-700 leading-relaxed font-normal text-xl">
            Everything you need to create, manage, and optimize your social media carousel content with peaceful focus.
          </Subtitle>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuresData.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
              delay={index * 150}
            />
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a 
            href="#how-it-works" 
            className="inline-flex items-center text-primary font-semibold hover:text-blue-700 transition-colors duration-300 text-lg"
          >
            Learn how it works
            <ArrowRight className="ml-3 h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default LandingFeatures;
