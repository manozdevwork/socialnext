
import React from 'react';
import { Card } from '@/components/ui/card';
import { Title } from '@/components/ui/typography';
import AnalyticsFilter from './AnalyticsFilter';
import AnalyticsCard from './AnalyticsCard';
import TopicEngagementItem from './TopicEngagementItem';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const activityData = [
  { month: 'JAN', value: 100 },
  { month: 'FEB', value: 130 },
  { month: 'MAR', value: 140 },
  { month: 'APR', value: 230 },
  { month: 'MAY', value: 280 },
  { month: 'JUN', value: 190 },
  { month: 'JUL', value: 230 },
  { month: 'AUG', value: 90 },
  { month: 'SEP', value: 280 },
  { month: 'OCT', value: 340 },
  { month: 'NOV', value: 390 },
  { month: 'DEC', value: 450 },
];

const weakTopics = [
  { 
    title: "Marketing the traditional way",
    image: "https://picsum.photos/id/48/80/80",
    percentage: 15
  },
  { 
    title: "Compliance Basics Procedures",
    image: "https://picsum.photos/id/237/80/80",
    percentage: 5
  },
  { 
    title: "Company Networking",
    image: "https://picsum.photos/id/60/80/80",
    percentage: 20
  }
];

const strongTopics = [
  { 
    title: "Covid Protocols",
    image: "https://picsum.photos/id/119/80/80",
    percentage: 95
  },
  { 
    title: "Cyber Security Basics",
    image: "https://picsum.photos/id/180/80/80",
    percentage: 92
  },
  { 
    title: "Social Media Policies",
    image: "https://picsum.photos/id/152/80/80",
    percentage: 89
  }
];

const AnalyticsDashboard: React.FC = () => {
  return (
    <div className="space-y-6 sm:space-y-8 px-2 sm:px-0">
      <AnalyticsFilter />
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        <AnalyticsCard 
          title="Active Users" 
          value="27" 
          subValue="/80"
        />
        <AnalyticsCard 
          title="User Engagement" 
          value="3,298"
        />
        <AnalyticsCard 
          title="Comments" 
          value="2m 34s"
        />
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        <div className="col-span-1">
          <AnalyticsCard 
            title="Starting Knowledge" 
            value="64%"
          />
        </div>
        <div className="col-span-1">
          <AnalyticsCard 
            title="Current Knowledge" 
            value="86%" 
            showChart={true}
          />
        </div>
        <div className="col-span-1">
          <AnalyticsCard 
            title="Knowledge Gain" 
            value="+34%" 
            showChart={true}
          />
        </div>
        <div className="col-span-1">
          <Card className="p-4 h-full">
            <div className="flex items-center justify-between mb-2">
              <Title size="sm" className="text-neutral-500">Activity</Title>
              <Select defaultValue="month">
                <SelectTrigger className="h-8 text-xs px-2 w-20 sm:w-24">
                  <SelectValue placeholder="Month" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="week">Week</SelectItem>
                  <SelectItem value="month">Month</SelectItem>
                  <SelectItem value="year">Year</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="h-[120px] sm:h-[180px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={activityData} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
                  <CartesianGrid vertical={false} stroke="#f0f0f0" />
                  <XAxis 
                    dataKey="month" 
                    tickLine={false} 
                    axisLine={false} 
                    tick={{ fontSize: 9 }}
                    interval={window.innerWidth < 400 ? 1 : 0}
                  />
                  <YAxis hide domain={[0, 500]} />
                  <Bar dataKey="value" fill="var(--primary)" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </Card>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
        <Card className="p-4 sm:p-6">
          <Title size="md" className="mb-4 sm:mb-6">Weakest Topics</Title>
          <div>
            {weakTopics.map((topic, index) => (
              <TopicEngagementItem 
                key={index}
                title={topic.title}
                image={topic.image}
                percentage={topic.percentage}
              />
            ))}
          </div>
        </Card>
        
        <Card className="p-4 sm:p-6">
          <Title size="md" className="mb-4 sm:mb-6">Strongest Topics</Title>
          <div>
            {strongTopics.map((topic, index) => (
              <TopicEngagementItem 
                key={index}
                title={topic.title}
                image={topic.image}
                percentage={topic.percentage}
                isPositive={true}
              />
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default AnalyticsDashboard;
