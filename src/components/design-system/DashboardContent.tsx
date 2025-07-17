
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Check } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import ScheduledPosts from '@/components/design-system/ScheduledPosts';
import { useIsMobile } from '@/hooks/use-mobile';

// Dummy data to match the image
const statsCards = [
  { 
    title: 'Active Users', 
    value: '1075', 
    suffix: '/day', 
    icon: '👤', 
    bgColor: 'bg-sky-50', 
    iconBg: 'bg-sky-400',
    arrowColor: 'text-sky-400',
    gradientColor: 'from-sky-400/20 to-transparent',
    hoverBgColor: 'hover:bg-sky-100',
    arrowHoverColor: 'group-hover:text-white group-hover:bg-sky-400'
  },
  { 
    title: 'Active Users', 
    value: '1075', 
    suffix: '/day', 
    icon: '🎯', 
    bgColor: 'bg-yellow-50', 
    iconBg: 'bg-yellow-400',
    arrowColor: 'text-yellow-400',
    gradientColor: 'from-yellow-400/20 to-transparent',
    hoverBgColor: 'hover:bg-yellow-100',
    arrowHoverColor: 'group-hover:text-white group-hover:bg-yellow-400'
  },
  { 
    title: 'Active Users', 
    value: '1075', 
    suffix: '/day', 
    icon: '📊', 
    bgColor: 'bg-orange-50', 
    iconBg: 'bg-orange-400',
    arrowColor: 'text-orange-400',
    gradientColor: 'from-orange-400/20 to-transparent',
    hoverBgColor: 'hover:bg-orange-100',
    arrowHoverColor: 'group-hover:text-white group-hover:bg-orange-400'
  },
];

// Sample data for scheduled posts
const scheduledPosts = [
  {
    title: 'AI Marketing Trends to Watch: Strategies for 2025',
    date: 'Dec 5, 2024',
    time: '12:20 PM',
    image: 'https://www.shutterstock.com/image-vector/colorful-stylish-quote-text-template-260nw-564990154.jpg',
    tag: 'TIPS FOR SMALL BUSINESS',
    bgColor: 'bg-gray-800'
  },
  {
    title: 'AI Marketing Trends to Watch: Strategies for 2025',
    date: 'Dec 5, 2024',
    time: '12:20 PM',
    image: 'https://www.shutterstock.com/image-vector/colorful-stylish-quote-text-template-260nw-564990154.jpg',
    tag: 'AI STRATEGIES',
    bgColor: 'bg-purple-500'
  },
  {
    title: 'AI Marketing Trends to Watch: Strategies for 2025',
    date: 'Dec 5, 2024',
    time: '12:20 PM',
    image: 'https://www.shutterstock.com/image-vector/colorful-stylish-quote-text-template-260nw-564990154.jpg',
    tag: 'MARKETING TRENDS',
    bgColor: 'bg-orange-400'
  },
  {
    title: 'AI Marketing Trends to Watch: Strategies for 2025',
    date: 'Dec 5, 2024',
    time: '12:20 PM',
    image: 'https://www.shutterstock.com/image-vector/colorful-stylish-quote-text-template-260nw-564990154.jpg',
    tag: 'TIPS FOR SMALL BUSINESS',
    bgColor: 'bg-gray-800'
  },
  {
    title: 'AI Marketing Trends to Watch: Strategies for 2025',
    date: 'Dec 5, 2024',
    time: '12:20 PM',
    image: 'https://www.shutterstock.com/image-vector/colorful-stylish-quote-text-template-260nw-564990154.jpg',
    tag: 'AI STRATEGIES',
    bgColor: 'bg-purple-500'
  },
  {
    title: 'AI Marketing Trends to Watch: Strategies for 2025',
    date: 'Dec 5, 2024',
    time: '12:20 PM',
    image: 'https://www.shutterstock.com/image-vector/colorful-stylish-quote-text-template-260nw-564990154.jpg',
    tag: 'MARKETING TRENDS',
    bgColor: 'bg-orange-400'
  },
];

const carouselPosts = [
  {
    id: 1,
    title: 'Tips for Small Business Owner',
    subTitle: 'AI Marketing Trends to Watch:',
    date: 'Dec 5, 2024',
    time: '12:20 PM',
    image: 'https://media.istockphoto.com/id/1457894295/vector/quote-frame-vector.jpg?s=612x612&w=0&k=20&c=cHcl134Sxb2hKscvdQwUaWnIG9kQOkhHg2AaTbT3xHw='
  },
  {
    id: 2,
    title: 'Become a Marketing Superstar',
    subTitle: 'AI Marketing Trends to Watch:',
    date: 'Dec 5, 2024',
    time: '12:20 PM',
    image: 'https://media.istockphoto.com/id/1457894295/vector/quote-frame-vector.jpg?s=612x612&w=0&k=20&c=cHcl134Sxb2hKscvdQwUaWnIG9kQOkhHg2AaTbT3xHw='
  },
  {
    id: 3,
    title: 'Happy and Healthy Employees',
    subTitle: 'AI Marketing Trends to Watch:',
    date: 'Dec 5, 2024',
    time: '12:20 PM',
    image: 'https://media.istockphoto.com/id/1457894295/vector/quote-frame-vector.jpg?s=612x612&w=0&k=20&c=cHcl134Sxb2hKscvdQwUaWnIG9kQOkhHg2AaTbT3xHw='
  },
  {
    id: 4,
    title: 'Why you should not say Yes to every project',
    subTitle: 'AI Marketing Trends to Watch:',
    date: 'Dec 5, 2024',
    time: '12:20 PM',
    image: 'https://media.istockphoto.com/id/1457894295/vector/quote-frame-vector.jpg?s=612x612&w=0&k=20&c=cHcl134Sxb2hKscvdQwUaWnIG9kQOkhHg2AaTbT3xHw='
  },
];

const DashboardContent = () => {
  const isMobile = useIsMobile();

  return (
    <div className="space-y-4 md:space-y-6">      
      {/* Main Content - 2 Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-6 relative z-10">
        {/* First Column - 8/12 width */}
        <div className="lg:col-span-8 space-y-4 md:space-y-5 pt-3">
          {/* Stats Cards - 3 in a row on desktop, 1 per row on small devices */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-5">
            {statsCards.map((stat, index) => (
              <Card 
                key={index} 
                className={`relative overflow-hidden border-none shadow-sm ${stat.bgColor} ${stat.hoverBgColor} transition-colors duration-300 group cursor-pointer`}
              >
                <div className={`absolute bottom-0 right-0 w-2/3 h-3/4 bg-gradient-to-tr ${stat.gradientColor} rounded-tl-full transition-transform duration-500 group-hover:scale-110 group-hover:rotate-[-5deg] ease-in-out`}></div>
                <CardContent className="p-3 md:p-4 z-10 relative">
                  <div className="text-gray-500 font-normal text-sm md:text-base mb-1">{stat.title}</div>
                  <div className="flex justify-between items-center">
                    <div className="text-2xl md:text-4xl font-bold flex items-end text-gray-800">
                      {stat.value}
                    </div>
                    <div className={`rounded-full p-2 md:p-3 ${stat.iconBg} text-white text-lg md:text-xl absolute top-3 md:top-4 right-3 md:right-4 flex items-center justify-center transition-transform duration-300 group-hover:scale-110 animate-[fadeIn_0.6s_ease-out_forwards] opacity-0`} style={{width: isMobile ? '36px' : '46px', height: isMobile ? '36px' : '46px', animationDelay: `${index * 0.1}s`}}>
                      {stat.icon}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Profile Completeness and Current Plan Cards in same row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
            {/* Profile Completeness Card */}
            <Card className="border-none shadow-sm">
              <CardHeader className="flex flex-row items-center justify-between p-3 md:p-4 pb-1 md:pb-2">
                <div className="flex items-center gap-2 md:gap-3">
                  <div className="rounded-full bg-gray-100 p-1 md:p-2 w-8 md:w-10 h-8 md:h-10 flex items-center justify-center animate-[fadeIn_0.5s_ease-out_forwards] opacity-0">
                    <span className="text-gray-600 text-base md:text-lg">👤</span>
                  </div>
                  <CardTitle className="text-base md:text-lg font-medium">Profile Completeness</CardTitle>
                </div>
                <Button className="rounded-full bg-sky-50 text-sky-500 hover:bg-sky-100 hover:text-sky-600 font-medium text-xs md:text-sm px-2 md:px-4 h-8 md:h-10">
                  Continue
                </Button>
              </CardHeader>
              <CardContent className="p-3 md:p-4">
                  <div className="flex items-start gap-2 md:gap-3">
                    <div className="flex flex-col items-center">
                      <div className="rounded-full bg-green-500 p-1 flex items-center justify-center w-5 md:w-6 h-5 md:h-6 animate-[bounceIn_0.6s_cubic-bezier(0.68,-0.55,0.27,1.55)_forwards] scale-0">
                        <Check className="w-3 h-3 md:w-4 md:h-4 text-white" />
                      </div>
                      <div className="h-12 md:h-16 w-0.5 bg-gray-200 mx-auto my-1"></div>
                    </div>
                    <div>
                      <div className="font-medium text-sm md:text-base">Select Preferences</div>
                      <div className="text-xs md:text-sm text-gray-500">Lorem consectetur adipiscing elit.</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-2 md:gap-3 -mt-4 md:-mt-5">
                    <div className="rounded-full bg-gray-200 p-1 flex items-center justify-center w-5 md:w-6 h-5 md:h-6 animate-[bounceIn_0.6s_cubic-bezier(0.68,-0.55,0.27,1.55)_forwards] scale-0 animate-delay-300">
                      <Check className="w-3 h-3 md:w-4 md:h-4 text-white" />
                    </div>
                    <div>
                      <div className="font-medium text-sm md:text-base">Connect LinkedIn Account</div>
                      <div className="text-xs md:text-sm text-gray-500 flex items-center gap-2">
                        Lorem consectetur adipiscing elit.
                        <img 
                          src="/icons/linkedin.svg" 
                          alt="LinkedIn" 
                          className="w-5 h-5 mb-[2px]" 
                        />
                      </div>
                    </div>
                  </div>
              </CardContent>
            </Card>

            {/* Current Plan Card */}
            <Card className="border-none shadow-sm">
              <CardHeader className="flex flex-row items-center justify-between p-3 md:p-4 pb-1 md:pb-2">
                <div className="flex items-center gap-2 md:gap-3">
                  <div className="rounded-full bg-amber-100 p-1 md:p-2 w-8 md:w-10 h-8 md:h-10 flex items-center justify-center animate-[fadeIn_0.5s_ease-out_forwards] opacity-0 animate-delay-200">
                    <span className="text-amber-500 text-base md:text-lg">🏆</span>
                  </div>
                  <CardTitle className="text-base md:text-lg font-medium">Current Plan</CardTitle>
                </div>
                <Button className="rounded-full bg-sky-50 text-sky-500 hover:bg-sky-100 hover:text-sky-600 font-medium text-xs md:text-sm px-2 md:px-4 h-8 md:h-10">
                  Upgrade Plan
                </Button>
              </CardHeader>
              <CardContent className="p-3 md:p-4">
                <div className="bg-cyan-500 text-white rounded-lg p-3 md:p-4">
                  <h3 className="text-base md:text-lg font-medium mb-1">Premium Plan</h3>
                  <p className="text-xs md:text-sm mb-2 md:mb-3">Complete your profile and start using all feature</p>
                  <Progress value={20} className="h-2 md:h-2.5 bg-cyan-400 mb-1" />
                  <div className="text-xs md:text-sm">2000/10,000 words</div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Continue To Create Your Carousel Section */}
          <div>
            <div className="flex justify-between items-center mb-3 md:mb-4">
              <div className="flex items-center gap-2">
                <span className="text-base md:text-lg animate-[fadeIn_0.5s_ease-out_forwards] opacity-0 animate-delay-300">🎨</span>
                <h2 className="text-base md:text-lg font-semibold">Continue To Create Your Carousel</h2>
              </div>
              <Button variant="ghost" className="text-cyan-400 hover:text-cyan-500 hover:bg-cyan-50 rounded-full font-medium text-xs md:text-sm h-8 md:h-10 px-2 md:px-4 underline underline-offset-4 hover:no-underline">
                View All
              </Button>
            </div>
            
            <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
              {carouselPosts.map((post, index) => (
                <div key={post.id} className="flex flex-col animate-[fadeIn_0.6s_ease-out_forwards] opacity-0" style={{animationDelay: `${0.1 + index * 0.1}s`}}>
                  <div className="aspect-square rounded-lg overflow-hidden mb-2 bg-gray-200">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="font-medium truncate text-sm md:text-base text-gray-800">{post.subTitle}</div>
                  <div className="font-medium truncate text-sm md:text-base text-gray-800">{post.title}</div>
                  <div className="flex justify-between text-xs md:text-sm text-gray-500">
                    <span>{post.date}</span>
                    <span>{post.time}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Second Column - 4/12 width for Scheduled Posts */}
        <div className="lg:col-span-4 pt-3">
          <Card className="border-none shadow-sm h-full">
            <CardHeader className="flex flex-row items-center justify-between p-3 md:p-4 mb-[-10px]">
              <div className="flex items-center gap-2">
                <div className="text-base md:text-lg animate-[fadeIn_0.5s_ease-out_forwards] opacity-0 animate-delay-400">📅</div>
                <CardTitle className="text-base md:text-lg font-medium">Scheduled Carousel</CardTitle>
              </div>
              <Button variant="ghost" className="text-cyan-400 hover:text-cyan-500 hover:bg-cyan-50 rounded-full font-medium text-xs md:text-sm px-2 md:px-6 h-8 md:h-10 underline underline-offset-4 hover:no-underline">
                View All
              </Button>
            </CardHeader>
            <CardContent className="p-3 md:p-4">
              <div className="space-y-3 md:space-y-4">
                {scheduledPosts.slice(0, isMobile ? 3 : 6).map((post, index) => (
                  <div key={index} className="flex items-start gap-3 md:gap-4 py-1 md:py-2 animate-[fadeIn_0.6s_ease-out_forwards] opacity-0" style={{animationDelay: `${0.2 + index * 0.1}s`}}>
                    <div className="relative min-w-[60px] md:min-w-[80px] h-[60px] md:h-[80px] rounded-md overflow-hidden">
                      <img 
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    <div className="flex-grow">
                      <div className="flex justify-between items-start">
                        <h3 className="font-medium text-sm md:text-base text-gray-800 leading-tight mb-1 md:mb-2 pr-2">{post.title}</h3>
                        <Button variant="ghost" size="icon" className="h-6 w-6 md:h-8 md:w-8 p-0">
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z" fill="currentColor" />
                            <path d="M19 13C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11C18.4477 11 18 11.4477 18 12C18 12.5523 18.4477 13 19 13Z" fill="currentColor" />
                            <path d="M5 13C5.55228 13 6 12.5523 6 12C6 11.4477 5.55228 11 5 11C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13Z" fill="currentColor" />
                          </svg>
                        </Button>
                      </div>

                      <div className="flex items-center text-xs md:text-sm text-gray-500 mt-1 md:mt-2">
                        <span>{post.date}</span>
                        <div className="mx-2 md:mx-3 w-12 md:w-16 border-t border-dotted border-gray-300"></div>
                        <span>{post.time}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default DashboardContent;
