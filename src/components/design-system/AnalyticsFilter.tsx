
import React from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const AnalyticsFilter: React.FC = () => {
  return (
    <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
      <div className="w-full sm:w-auto flex-1">
        <Select defaultValue="likes">
          <SelectTrigger className="bg-white border-gray-200 h-10 sm:h-12 text-sm">
            <SelectValue placeholder="View By: Likes" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="likes">View By: Likes</SelectItem>
            <SelectItem value="comments">View By: Comments</SelectItem>
            <SelectItem value="shares">View By: Shares</SelectItem>
          </SelectContent>
        </Select>
      </div>
      
      <div className="w-full sm:w-auto flex-1">
        <Select defaultValue="all-personas">
          <SelectTrigger className="bg-white border-gray-200 h-10 sm:h-12 text-sm">
            <SelectValue placeholder="Personas: All" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all-personas">Personas: All</SelectItem>
            <SelectItem value="business">Personas: Business</SelectItem>
            <SelectItem value="creative">Personas: Creative</SelectItem>
          </SelectContent>
        </Select>
      </div>
      
      <div className="w-full sm:w-auto flex-1">
        <Select defaultValue="all-topics">
          <SelectTrigger className="bg-white border-gray-200 h-10 sm:h-12 text-sm">
            <SelectValue placeholder="Topic: All" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all-topics">Topic: All</SelectItem>
            <SelectItem value="marketing">Topic: Marketing</SelectItem>
            <SelectItem value="technology">Topic: Technology</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default AnalyticsFilter;
