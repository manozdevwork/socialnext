
import React, { useEffect, useRef } from 'react';
import { Title, Subtitle } from '@/components/ui/typography';

// Step card component with Japanese aesthetics
interface StepProps {
  number: number;
  title: string;
  description: string;
}

const Step: React.FC<StepProps> = ({ number, title, description }) => {
  const stepRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            entry.target.classList.remove('opacity-0', 'translate-y-12');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (stepRef.current) {
      observer.observe(stepRef.current);
    }
    
    return () => {
      if (stepRef.current) {
        observer.unobserve(stepRef.current);
      }
    };
  }, []);
  
  return (
    <div 
      ref={stepRef}
      className="opacity-0 translate-y-12 transition-all duration-1000 ease-out mb-20 last:mb-0"
    >
      <div className="flex flex-col md:flex-row gap-12 items-center">
        <div className={`w-full md:w-1/2 ${number % 2 === 0 ? 'md:order-2' : 'md:order-1'}`}>
          <div className="relative">
            <div className="absolute -left-4 -top-4 bg-primary-500 text-white font-light text-lg w-12 h-12 rounded-full flex items-center justify-center z-10 shadow-sm">
              {number}
            </div>
            <div className="aspect-[16/10] bg-gradient-to-br from-neutral-50 to-neutral-100 overflow-hidden rounded-3xl border border-neutral-100 shadow-sm">
              <div className="w-full h-full flex items-center justify-center text-neutral-400">
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-primary-300 rounded-2xl mx-auto opacity-60"></div>
                  <Subtitle size="md" tone="muted" className="font-light">Step {number} Preview</Subtitle>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className={`w-full md:w-1/2 ${number % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}>
          <Title size="md" className="mb-4 text-neutral-800 font-normal leading-relaxed">{title}</Title>
          <Subtitle size="lg" tone="muted" className="leading-relaxed font-light text-neutral-500">{description}</Subtitle>
        </div>
      </div>
    </div>
  );
};

const LandingHowItWorks: React.FC = () => {
  const stepsData = [
    {
      number: 1,
      title: "Choose Your Content Style",
      description: "Select from our library of carefully crafted templates or create your own style. Define your brand colors, fonts, and visual elements to maintain perfect consistency across all your content."
    },
    {
      number: 2,
      title: "Generate Content with AI",
      description: "Let our intelligent AI suggest content based on your topic, niche, and target audience. Edit the suggestions to perfectly match your voice, tone, and messaging style."
    },
    {
      number: 3,
      title: "Design Your Carousels",
      description: "Use our intuitive drag-and-drop editor to customize your carousel slides. Add images, text, graphics, and call-to-actions to create engaging, professional content."
    },
    {
      number: 4,
      title: "Schedule & Publish",
      description: "Plan your content calendar by scheduling posts ahead of time. Publish directly to your social media accounts or export for manual posting at optimal times."
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
    <section id="how-it-works" className="py-32 bg-gradient-to-b from-neutral-50/50 to-white">
      <div className="max-w-5xl mx-auto px-8">
        <div 
          ref={sectionRef}
          className="text-center mb-24 opacity-0 transition-opacity duration-1000 ease-out"
        >
          <Title size="lg" className="mb-6 text-neutral-800 font-light text-3xl md:text-4xl">
            How <span className="text-primary font-semibold">SocialNext</span> Works
          </Title>
          <Subtitle size="lg" className="max-w-2xl mx-auto text-neutral-500 leading-relaxed font-light text-lg">
            Create professional carousels in just a few simple, intuitive steps
          </Subtitle>
        </div>
        
        <div>
          {stepsData.map((step, index) => (
            <Step
              key={index}
              number={step.number}
              title={step.title}
              description={step.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LandingHowItWorks;
