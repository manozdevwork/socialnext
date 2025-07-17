
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Hand, Lightbulb } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '@/constants/routes';
import { ScrollArea } from '@/components/ui/scroll-area';
import PageContentLayout from '@/components/layout/PageContentLayout';

const CarouselEditor = () => {
  const navigate = useNavigate();

  const goToStartFromScratch = () => {
    navigate(ROUTES.CAROUSEL_EDITOR_SCRATCH);
  };

  const goToIdeaGenerator = () => {
    navigate(ROUTES.CAROUSEL_EDITOR_IDEA_GENERATOR);
  };

  return (
    <div className="h-full flex flex-col">
      <PageContentLayout
        title="Create a Carousel"
        subtitle="Please complete the following steps to complete your profile"
      >
        <ScrollArea className="flex-1 -mx-4 sm:mx-0 px-4 sm:px-0">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Start From Scratch Card */}
            <Card className="overflow-hidden border border-[#e4e3ea] shadow-sm hover:shadow-md transition-all duration-200">
              <div className="bg-sky-500 p-4 text-white flex items-center space-x-3">
                <div className="p-2 flex items-center justify-center">
                  <img 
                          src="/icons/scratch.svg" 
                          alt="LinkedIn" 
                          className="w-7 h-7" 
                        />
                </div>
                <h2 className="text-xl font-semibold">Start From Scratch</h2>
              </div>
              
              <CardContent className="pt-6 space-y-6">
                <p className="text-gray-600 leading-relaxed">
                  Allows users to create their carousels step-by-step it has affected the global 
                  economy. Short description about AI in marketing and how it has affected
                </p>
                
                <div className="flex justify-end">
                  <Button 
                    className="bg-sky-500 hover:from-sky-500 hover:to-sky-600 text-white rounded-full px-5 py-2 h-auto font-medium text-base shadow-sm"
                    onClick={goToStartFromScratch}
                  >
                    Get Started
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Idea Generator Card */}
            <Card className="overflow-hidden border border-[#e4e3ea] shadow-sm hover:shadow-md transition-all duration-200">
              <div className="bg-sky-500 p-4 text-white flex items-center space-x-3">
                <div className="flex items-center justify-center">
                <img 
                          src="/icons/idea.svg" 
                          alt="LinkedIn" 
                          className="w-7 h-7" 
                        />
                </div>
                <h2 className="text-xl font-semibold">Idea Generator</h2>
              </div>
              
              <CardContent className="pt-6 space-y-6">
                <p className="text-gray-600 leading-relaxed">
                Allows users to create their carousels step-by-step it has affected the global 
                economy. Short description about AI in marketing and how it has affected
                </p>
                
                <div className="flex justify-end">
                  <Button 
                    className="bg-sky-500 hover:bg-sky-600 text-white rounded-full px-5 py-2 h-auto font-medium text-base shadow-sm"
                    onClick={goToIdeaGenerator}
                  >
                    Get Started
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </ScrollArea>
      </PageContentLayout>
    </div>
  );
};

export default CarouselEditor;
