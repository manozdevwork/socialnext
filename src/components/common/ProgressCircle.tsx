
import React from 'react';
import { cn } from '@/lib/utils';

interface ProgressCircleProps {
  percentage: number;
  size?: number;
  strokeWidth?: number;
  color?: string;
  className?: string;
}

const ProgressCircle: React.FC<ProgressCircleProps> = ({
  percentage,
  size = 80,
  strokeWidth = 6,
  color = '#38BDF8', // sky-400
  className
}) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;
  
  return (
    <div className={cn("relative", className)}>
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        className="transform -rotate-90"
      >
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="transparent"
          stroke="#E2E8F0" // slate-200
          strokeWidth={strokeWidth}
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="transparent"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center text-xl font-semibold text-sky-500">
        {percentage}%
      </div>
    </div>
  );
};

export default ProgressCircle;
