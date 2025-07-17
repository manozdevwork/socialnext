
import React from 'react';

interface AnalyticsPromptProps {
  title: string;
  description: string;
}

const AnalyticsPrompt: React.FC<AnalyticsPromptProps> = ({ title, description }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-4 w-full font-inter">
      <h2 className="text-2xl font-bold text-gray-800 mb-2">{title}</h2>
      <p className="text-gray-500">{description}</p>
    </div>
  );
};

export default AnalyticsPrompt;
