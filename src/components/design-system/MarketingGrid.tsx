
import React from 'react';
import { ArrowRight } from 'lucide-react';

interface MarketingCardProps {
  title: string;
  subtitle: string;
  description: string;
}

const MarketingCard: React.FC<MarketingCardProps> = ({ title, subtitle, description }) => {
  return (
    <div className="flex flex-col h-full">
      <div className="relative rounded-lg overflow-hidden bg-gray-900 mb-4">
        <div className="absolute top-4 left-4 bg-black/60 rounded-full p-2">
          <div className="w-6 h-6 flex items-center justify-center text-white text-xs">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="white" strokeWidth="1.5"/>
              <path d="M15 12L10 8V16L15 12Z" fill="white" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
        
        <div className="pt-[100%] relative">
          {/* Wave pattern background */}
          <div className="absolute inset-0 w-full h-full">
            <svg width="100%" height="100%" viewBox="0 0 300 300" preserveAspectRatio="none">
              <path
                d="M0,100 C50,130 80,110 140,120 C200,130 250,140 300,130 L300,300 L0,300 Z"
                fill="none"
                stroke="#22BCDD"
                strokeWidth="1.5"
                opacity="0.6"
              />
              <path
                d="M0,140 C70,150 100,130 170,150 C240,170 270,160 300,150 L300,300 L0,300 Z"
                fill="none"
                stroke="#22BCDD"
                strokeWidth="1.5"
                opacity="0.4"
              />
              <path
                d="M0,180 C60,170 90,190 160,180 C230,170 260,190 300,170 L300,300 L0,300 Z"
                fill="none"
                stroke="#22BCDD"
                strokeWidth="1.5"
                opacity="0.2"
              />
            </svg>
          </div>
          
          {/* Text content */}
          <div className="absolute inset-0 p-4 flex flex-col justify-between">
            <div className="text-white uppercase font-bold text-2xl leading-tight tracking-wide">
              {title}
            </div>
            <div className="text-white/80 text-sm mt-auto">
              {subtitle}
            </div>
          </div>
          
          {/* Blue circle */}
          <div className="absolute bottom-0 left-0 w-20 h-20 bg-[#22BCDD] rounded-tr-full"></div>
        </div>
      </div>
      
      <div className="flex-grow">
        <h3 className="text-gray-800 font-semibold text-lg mb-2">
          AI Marketing Trends to Watch: Transforming Strategies for 2025
        </h3>
        <p className="text-gray-600 text-sm mb-3">
          {description}
        </p>
        <a href="#" className="inline-flex items-center text-[#22BCDD] text-sm font-medium hover:underline">
          View Details <ArrowRight className="ml-1 h-4 w-4" />
        </a>
      </div>
    </div>
  );
};

interface MarketingGridProps {
  className?: string;
}

const MarketingGrid: React.FC<MarketingGridProps> = ({ className }) => {
  const cards = [
    {
      title: "TIPS FOR SMALL BUSINESS OWNER",
      subtitle: "SEO - FIVE TERMS YOU SHOW KNOW",
      description: "AI in Marketing explores how emerging AI technologies are reshaping..."
    },
    {
      title: "TIPS FOR SMALL BUSINESS OWNER",
      subtitle: "SEO - FIVE TERMS YOU SHOW KNOW",
      description: "AI in Marketing explores how emerging AI technologies are reshaping..."
    },
    {
      title: "TIPS FOR SMALL BUSINESS OWNER",
      subtitle: "SEO - FIVE TERMS YOU SHOW KNOW",
      description: "AI in Marketing explores how emerging AI technologies are reshaping..."
    },
    {
      title: "TIPS FOR SMALL BUSINESS OWNER",
      subtitle: "SEO - FIVE TERMS YOU SHOW KNOW",
      description: "AI in Marketing explores how emerging AI technologies are reshaping..."
    },
    {
      title: "TIPS FOR SMALL BUSINESS OWNER",
      subtitle: "SEO - FIVE TERMS YOU SHOW KNOW",
      description: "AI in Marketing explores how emerging AI technologies are reshaping..."
    }
  ];

  return (
    <div className={`w-full ${className}`}>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {cards.map((card, index) => (
          <div key={index} className="flex flex-col h-full">
            <MarketingCard
              title={card.title}
              subtitle={card.subtitle}
              description={card.description}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MarketingGrid;
