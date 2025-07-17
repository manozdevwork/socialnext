
import React from 'react';
import { cn } from '@/lib/utils';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

interface LogoProps {
  className?: string;
  colorful?: boolean;
}

const Logo: React.FC<LogoProps> = ({ className, colorful = true }) => {
  return (
    <div className={cn("flex items-center", className)}>
      <span className={cn("text-2xl font-bold", colorful ? "text-sky-400" : "")}>
        Social<span className="text-gray-800">Next.AI</span>
      </span>
      <svg 
        className="w-6 h-6 ml-1 text-sky-400" 
        viewBox="0 0 24 24" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <path 
          d="M14 3L16.44 8.55L22 11L16.44 13.45L14 19L11.56 13.45L6 11L11.56 8.55L14 3Z" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};

// Create a UserProfileDisplay component that can replace the Logo
export const UserProfileDisplay: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <Avatar className="h-11 w-11 border border-blue-200">
        <AvatarImage src="https://via.placeholder.com/40x40/f0f0f0/808080?text=JS" alt="User" />
        <AvatarFallback>
          <img 
          src="https://media.licdn.com/dms/image/v2/D4D03AQF4_kz2qtXq7w/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1697794439943?e=1752710400&v=beta&t=FTOcIe6GHwXX2M2-pnbQIH_RvAWSARoSqZEGrAx8wlE" 
          alt="LinkedIn" 
          className="w-full h-full object-cover" 
          />
          </AvatarFallback>
      </Avatar>
      <div className="flex flex-col">
        <span className="font-medium text-md flex items-center gap-1">
          Courtney Henry
          <img src="/icons/linkedin.svg" alt="LinkedIn" className="w-5 h-5 color-blue-600" />
        </span>
        <span className="text-[0.74rem] text-green-600">🌱 Crafting Content...</span>
      </div>
    </div>
  );
};

export default Logo;
