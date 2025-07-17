
import React, { useState } from 'react';
import { ArrowLeft, Search, Bookmark } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Routes, useNavigate } from 'react-router-dom';
import { ScrollArea } from '@/components/ui/scroll-area';
import { cn } from '@/lib/utils';
import { useToast } from '@/hooks/use-toast';
import { Textarea } from '@/components/ui/textarea';
import { useIsMobile } from '@/hooks/use-mobile';
import { Card } from '@/components/ui/card';
import PageContentLayout from '@/components/layout/PageContentLayout';
import { ROUTES } from '@/constants/routes';

interface IdeaProps {
  title: string;
  description: string;
}

const IdeaGeneratorEditor = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const isMobile = useIsMobile();
  const [inputText, setInputText] = useState('Top Marketing Strategies for 2024');
  const [charCount, setCharCount] = useState(29);
  const [searchQuery, setSearchQuery] = useState('');
  const maxChars = 150;
  const [selectedTags, setSelectedTags] = useState<string[]>(['Remote Work', 'Green Technology', 'Ai', 'Biotechnology']);
  const [generatedIdeas, setGeneratedIdeas] = useState<IdeaProps[]>([
    {
      title: 'AI Marketing Trends to Watch: Transforming Strategies for 2025',
      description: 'AI in Marketing explores how emerging AI technologies are reshaping marketing with hyper-personalization, predictive analytics, and automation innovations for smarter, more efficient campaigns.',
    },
    {
      title: 'Game-Changing AI Strategies for Enhancing Customer Engagement',
      description: 'AI in Marketing explores how emerging AI technologies are reshaping marketing with hyper-personalization, predictive analytics, and automation innovations for smarter, more efficient campaigns.',
    },
    {
      title: 'AI Marketing Benefits: Boosting Conversion Rates with Personalization',
      description: 'AI in Marketing explores how emerging AI technologies are reshaping marketing with hyper-personalization, predictive analytics, and automation innovations for smarter, more efficient campaigns.',
    }
  ]);
  const [bookmarkedIdeas, setBookmarkedIdeas] = useState<number[]>([]);

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const newText = e.target.value;
    if (newText.length <= maxChars) {
      setInputText(newText);
      setCharCount(newText.length);
    }
  };

  const toggleTag = (tag: string) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter(t => t !== tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };

  const goBack = () => {
    navigate('/carousel-editor');
  };

  const handleGenerateIdeas = () => {
    // In a real app, this would call an API with the input text and selected tags
    toast({
      title: "Generating ideas",
      description: "Your ideas are being generated based on your input.",
    });
  };

  const toggleBookmark = (index: number) => {
    setBookmarkedIdeas(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index) 
        : [...prev, index]
    );
  };

  const trends = [
    "Remote Work", 
    "Robotics", 
    "Automation", 
    "Ai", 
    "Health",
    "Green Technology", 
    "Hybrid Work", 
    "E-Learning", 
    "Biotechnology",
    "Quantum Computing", 
    "Autonomous Vehicles",
  ];

  return (
    <div className="h-full flex flex-col">
      <PageContentLayout
        title="Idea Generator"
        subtitle="Please complete the following steps."
        showBackButton={true}
        backRoute={ROUTES.CAROUSEL_EDITOR}
      >
        <ScrollArea className="flex-1 -mx-4 sm:mx-0 px-4 sm:px-0">
        <div className="flex gap-4 flex-col md:flex-row">
      {/* Left Section - Form inputs */}
      <Card className="w-full md:w-2/5 p-4 md:p-6 bg-white overflow-y-auto">
        {/* Topic Input */}
        <div className="mb-8">
          <h3 className="text-lg font-medium text-gray-800 mb-4">What topic are you interested in?</h3>
          <div className="relative">
            <Textarea
              value={inputText}
              onChange={handleTextChange}
              placeholder="Enter your topic..."
              className="bg-gray-50 w-full py-5 px-4 rounded-md min-h-[120px] resize-none text-base"
              maxLength={maxChars}
            />
            <div className="absolute right-3 bottom-3 text-sm text-gray-500">
              {charCount}/{maxChars}
            </div>
          </div>
        </div>
        
        {/* Trend Selection */}
        <div className="mb-8">
          <h3 className="text-lg font-medium text-gray-800 mb-4">What latest trend are you excited about?</h3>
          <div className="mb-4">
 <div className="mb-6 relative">
           <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
             <Search className="h-5 w-5 text-gray-400" />
           </div>
           <Input 
             placeholder="Search" 
             className="pl-10 bg-gray-50 border-gray-200 rounded-full" 
             value={searchQuery}
             onChange={(e) => setSearchQuery(e.target.value)}
           />
         </div>
</div>
          
          {/* Selected Tags - Top Row */}
          <div className="flex flex-wrap gap-2 mb-4">
            {selectedTags.map((tag) => (
              <div 
                key={`selected-${tag}`}
                className="cursor-pointer rounded-full px-3 py-1.5 text-sm flex items-center gap-1 bg-sky-50 text-sky-500 border border-sky-200"
              >
                {tag}
                <button 
                  className="text-sky-500 hover:text-sky-600"
                  onClick={() => toggleTag(tag)}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 6 6 18"></path>
                    <path d="m6 6 12 12"></path>
                  </svg>
                </button>
              </div>
            ))}
          </div>

          {/* Tag Options - Visible Options */}
          <ScrollArea className="h-auto">
            <div className="flex flex-wrap gap-2">
              {trends
                .filter(trend => !selectedTags.includes(trend) && 
                                trend.toLowerCase().includes(searchQuery.toLowerCase()))
                .map((trend) => (
                  <div 
                    key={`trend-${trend}`}
                    onClick={() => toggleTag(trend)}
                    className="cursor-pointer rounded-full px-3 py-1.5 text-sm flex items-center gap-1 bg-gray-50 border border-gray-200 text-gray-600 hover:bg-gray-100"
                  >
                    {trend}
                  </div>
                ))}
            </div>
          </ScrollArea>
        </div>
        
        {/* Mobile Generate Ideas Button - Only visible on mobile */}
        <div className="md:hidden mb-8">
          <Button 
            className="w-full bg-sky-400 hover:bg-sky-500 text-white rounded-full py-2"
            onClick={handleGenerateIdeas}
          >
            Generate Ideas
          </Button>
        </div>
      </Card>
      
      {/* Right Section - Output */}
      <Card className="w-full md:w-3/5 bg-white p-4 md:p-6">
        <div className="sticky top-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold text-gray-800">Output</h2>
            <div className="hidden md:block">
              <Button  onClick={handleGenerateIdeas}className="rounded-full bg-sky-50 text-sky-500 hover:bg-sky-100 hover:text-sky-600 font-medium text-xs md:text-sm px-2 md:px-4 h-8 md:h-10">
              Regenerate Ideas
                              </Button>
            </div>
          </div>
          
          <div>
            <p className="text-gray-600 mb-4">Here are some ideas for the post</p>
            
            <ScrollArea className="max-h-[calc(100vh-220px)] pr-2">
              <div className="space-y-4 md:space-y-8">
                {generatedIdeas.length > 0 ? (
                  generatedIdeas.map((idea, index) => (
                    <div key={`idea-${index}`} className="bg-gray-50 rounded-lg p-4 md:p-6 space-y-3 md:space-y-4">
                      <div className="flex justify-between items-center gap-2">
                        <h3 className="text-base md:text-lg font-medium text-gray-800">{idea.title}</h3>
                      </div>
                      <p className="text-sm md:text-base text-gray-600 leading-relaxed">{idea.description}</p>
                      <div className="flex justify-end gap-2">
                      <button 
                          onClick={() => toggleBookmark(index)}
                          className={cn(
                            "p-2.5 rounded-full bg-white border border-gray-200 flex-shrink-0 hover:border-sky-500",
                            bookmarkedIdeas.includes(index) ? "text-sky-500" : "text-gray-400 hover:text-sky-500"
                          )}
                        >
                          <Bookmark size={18} className={bookmarkedIdeas.includes(index) ? "fill-sky-500" : ""} />
                        </button>
                        <Button 
                          className="bg-sky-400 hover:bg-sky-500 text-white rounded-full px-4 py-1.5 text-sm md:px-6 md:text-base"
                        >
                          Create a Carousel
                        </Button>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="h-40 md:h-80 flex items-center justify-center text-gray-400">
                    <p>Generated ideas will appear here</p>
                  </div>
                )}
              </div>
            </ScrollArea>
          </div>
          
          {/* Mobile Regenerate Button - Only visible on larger screens on mobile scroll */}
          <div className="md:hidden mt-6 sticky bottom-0 bg-white pt-2 pb-4 border-t border-gray-100">
            <Button 
              className="w-full bg-sky-400 hover:bg-sky-500 text-white rounded-full py-2"
              onClick={handleGenerateIdeas}
            >
              Regenerate Ideas
            </Button>
          </div>
        </div>
      </Card>
    </div>
        </ScrollArea>
      </PageContentLayout>
    </div>

  );
};

export default IdeaGeneratorEditor;
