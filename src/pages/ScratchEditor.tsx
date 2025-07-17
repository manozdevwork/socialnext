import React, { useState } from 'react';
import { ArrowLeft, ChevronLeft, ChevronRight, Search, Check, Bookmark } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useNavigate } from 'react-router-dom';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from '@/components/ui/carousel';
import { cn } from '@/lib/utils';
import { toast } from "@/hooks/use-toast";
import { BookmarkModal, BookmarkItem } from '@/components/modals/BookmarkModal';
import { zIndex } from '@/styles/theme/zIndex';
import { useIsMobile } from '@/hooks/use-mobile';
import PageContentLayout from '@/components/layout/PageContentLayout';
import { Card } from '@/components/ui/card';
import { Title } from '@/components/ui';

const ScratchEditor = () => {
  const navigate = useNavigate();
  const isMobile = useIsMobile();
  const [inputText, setInputText] = useState('Top Marketing Strategies for 2024');
  const [charCount, setCharCount] = useState(29);
  const [selectedAudience, setSelectedAudience] = useState<'my' | 'new'>('my');
  const [selectedTags, setSelectedTags] = useState<string[]>(['Arrogant', 'Confident', 'Professional', 'Confident']);
  const [currentTemplate, setCurrentTemplate] = useState(2);
  const [selectedPersona, setSelectedPersona] = useState('High Tech Audience');
  const [bookmarkModalOpen, setBookmarkModalOpen] = useState(false);
  const maxChars = 150;

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

  const openBookmarkModal = () => {
    setBookmarkModalOpen(true);
  };

  const handleBookmarkSelect = (bookmark: BookmarkItem) => {
    setInputText(bookmark.title);
    setCharCount(bookmark.title.length);
    setBookmarkModalOpen(false);
    toast({
      title: "Bookmark selected"
    });
  };

  const handlePreviewTemplate = () => {
    // Save selected template info in localStorage to access in preview page
    localStorage.setItem('previewTemplate', JSON.stringify({
      templateId: currentTemplate,
      inputText,
      selectedAudience,
      selectedTags,
      selectedPersona
    }));
    
    // Navigate to preview page
    navigate('/carousel-editor/preview');
  };

  const personas = [
    {
      id: 1,
      title: "High Tech Audience",
      name: "James Smith",
      ageGroup: "21-30",
      interests: "Music, Books",
      personalityTraits: "Extrovert, Curious, Jolly",
    },
    {
      id: 2,
      title: "Low Tech Audience",
      name: "James Smith",
      ageGroup: "21-30",
      interests: "Music, Books",
      personalityTraits: "Extrovert, Curious, Jolly",
    },
    {
      id: 3,
      title: "Business Group",
      name: "James Smith",
      ageGroup: "21-30",
      interests: "Music, Books",
      personalityTraits: "Extrovert, Curious, Jolly",
    },
    {
      id: 4,
      title: "Marketing Audience",
      name: "James Smith",
      ageGroup: "21-30",
      interests: "Music, Books",
      personalityTraits: "Extrovert, Curious, Jolly",
    },
  ];

  const templates = [
    {
      id: 1,
      title: "Template 1",
      images: [
        "https://picsum.photos/id/1/300/300",
        "https://picsum.photos/id/10/300/300",
        "https://picsum.photos/id/20/300/300",
        "https://picsum.photos/id/30/300/300",
        "https://picsum.photos/id/40/300/300",
        "https://picsum.photos/id/50/300/300",
      ],
      color: "bg-slate-800"
    },
    {
      id: 2,
      title: "Template 2",
      images: [
        "https://picsum.photos/id/2/300/300",
        "https://picsum.photos/id/12/300/300",
        "https://picsum.photos/id/22/300/300",
        "https://picsum.photos/id/32/300/300",
        "https://picsum.photos/id/42/300/300",
      ],
      color: "bg-gradient-to-br from-teal-500 to-purple-600"
    },
    {
      id: 3,
      title: "Template 3",
      images: [
        "https://picsum.photos/id/3/300/300",
        "https://picsum.photos/id/13/300/300",
        "https://picsum.photos/id/23/300/300",
        "https://picsum.photos/id/33/300/300",
        "https://picsum.photos/id/43/300/300",
        "https://picsum.photos/id/53/300/300",
      ],
      color: "bg-black"
    },
    {
      id: 4,
      title: "Template 4",
      images: [
        "https://picsum.photos/id/4/300/300",
        "https://picsum.photos/id/14/300/300",
        "https://picsum.photos/id/24/300/300",
        "https://picsum.photos/id/34/300/300",
        "https://picsum.photos/id/44/300/300",
        "https://picsum.photos/id/54/300/300",
      ],
      color: "bg-black"
    },
    {
      id: 5,
      title: "Template 5",
      images: [
        "https://picsum.photos/id/5/300/300",
        "https://picsum.photos/id/15/300/300",
        "https://picsum.photos/id/25/300/300",
        "https://picsum.photos/id/35/300/300",
        "https://picsum.photos/id/45/300/300",
      ],
      color: "bg-slate-800"
    },
    {
      id: 6,
      title: "Template 6",
      images: [
        "https://picsum.photos/id/6/300/300",
        "https://picsum.photos/id/16/300/300",
        "https://picsum.photos/id/26/300/300",
        "https://picsum.photos/id/36/300/300",
        "https://picsum.photos/id/46/300/300",
        "https://picsum.photos/id/56/300/300",
      ],
      color: "bg-gradient-to-r from-orange-500 to-amber-700"
    }
  ];

  const toneOptions = [
    { label: "Arrogant", selected: true },
    { label: "Funny", selected: false },
    { label: "Funky", selected: false },
    { label: "Confident", selected: true },
    { label: "Advertising", selected: false },
    { label: "Design", selected: false },
    { label: "Professional", selected: true },
    { label: "Finance", selected: false },
    { label: "Science", selected: false },
    { label: "Quantum Computing", selected: false },
    { label: "Autonomous Vehicles", selected: false },
    { label: "Electric Vehicles (EVs)", selected: false },
  ];

  return (
    <div className="flex flex-col lg:flex-row gap-5">
      {/* Left side - Content inputs */}
      <div className="w-full lg:w-3/5 p-4 md:p-6 bg-white pb-24 lg:pb-6">
      <PageContentLayout
    title="Start From Scratch"
    subtitle="Please complete the following steps"
    action={{
      label: "Get Ideas From Bookmark",
      onClick: () => openBookmarkModal(),
      icon: <Bookmark className="mr-2 h-4 w-4" />
    }}
    showBackButton
  >
        {/* <div className="mb-6">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-2">
            <div className="flex items-center">
              <div 
                className="bg-sky-400 rounded-full w-6 h-6 flex items-center justify-center text-white mr-3 cursor-pointer"
                onClick={goBack}
              >
                <ArrowLeft size={16} />
              </div>
              <h2 className="text-xl font-semibold text-gray-800">Start From Scratch</h2>
            </div>
            <Button
              variant="outline"
              className="bg-sky-50 text-sky-500 border-sky-100 hover:bg-sky-100 hover:text-sky-600 rounded-full px-4 md:px-6 w-full sm:w-auto"
              onClick={openBookmarkModal}
            >
              <Bookmark className="mr-2 h-4 w-4" />
              <span className="whitespace-nowrap">Get Ideas From Bookmark</span>
            </Button>
          </div>
          <p className="text-gray-600">Please complete the following steps.</p>
        </div> */}
        
        {/* What do you want to post about? with radio buttons */}
        <div className="mb-8 bg-white p-4 md:p-5 rounded-lg">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
            <h3 className="text-lg font-medium text-gray-800">What do you want to post about?</h3>
            
            <div className="flex flex-wrap gap-6">
              <div 
                className={`flex items-center cursor-pointer ${selectedAudience === 'my' ? 'text-sky-500' : 'text-gray-500'}`}
                onClick={() => setSelectedAudience('my')}
              >
                <div 
                  className={`w-6 h-6 rounded-full border-2 flex items-center justify-center mr-2 ${
                    selectedAudience === 'my' 
                      ? 'border-sky-500 bg-sky-500' 
                      : 'border-gray-300 bg-white'
                  }`}
                >
                  {selectedAudience === 'my' && (
                    <Check className="w-4 h-4 text-white" />
                  )}
                </div>
                <span className="text-base md:text-lg">My Audience</span>
              </div>
              
              <div 
                className={`flex items-center cursor-pointer ${selectedAudience === 'new' ? 'text-sky-500' : 'text-gray-500'}`}
                onClick={() => setSelectedAudience('new')}
              >
                <div 
                  className={`w-6 h-6 rounded-full border-2 flex items-center justify-center mr-2 ${
                    selectedAudience === 'new' 
                      ? 'border-sky-500 bg-sky-500' 
                      : 'border-gray-300 bg-white'
                  }`}
                >
                  {selectedAudience === 'new' && (
                    <Check className="w-4 h-4 text-white" />
                  )}
                </div>
                <span className="text-base md:text-lg">New Audience</span>
              </div>
            </div>
          </div>
          
          <div className="relative mb-6">
            <Textarea
              value={inputText}
              onChange={handleTextChange}
              placeholder="Enter your post topic..."
              className="bg-gray-100 w-full py-4 px-4 rounded-md min-h-[100px] md:min-h-[120px] resize-none text-base md:text-lg font-medium"
              maxLength={maxChars}
            />
            <div className="absolute right-3 bottom-3 text-sm text-gray-500">
              {charCount}/{maxChars}
            </div>
          </div>

          {selectedAudience === 'my' && (
            <div className="mb-6">
              <h3 className="text-lg font-medium text-gray-800 mb-4">Choose Persona</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {personas.map((persona) => (
                  <div
                    key={persona.id}
                    className={`rounded-lg p-4 cursor-pointer border-2 border-gray-50 ${
                      selectedPersona === persona.title
                        ? 'border-2 border-sky-400 bg-white'
                        : 'bg-gray-50'
                    }`}
                    onClick={() => setSelectedPersona(persona.title)}
                  >
                    <div className="flex justify-between items-center mb-1">
                      <h4 className="font-medium text-lg">{persona.title}</h4>
                      {selectedPersona === persona.title && (
                        <div className="rounded-full bg-sky-400 p-1">
                          <Check className="h-4 w-4 text-white" />
                        </div>
                      )}
                    </div>
                    <div className="text-gray-600 text-sm md:text-base">
                      <p>Name: {persona.name}</p>
                      <p>Age Group: {persona.ageGroup}</p>
                      <p>Interests: {persona.interests}</p>
                      <p>Personality Traits: {persona.personalityTraits}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
        
        {selectedAudience === 'new' && (
          <div className="mb-8 bg-white p-4 md:p-5 rounded-lg">
            <div className="mb-2">
              <h3 className="text-lg font-medium text-gray-800 mb-4">Select Tone of Voice</h3>
                <div className="mb-4">
               <div className="mb-6 relative">
                         <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                           <Search className="h-5 w-5 text-gray-400" />
                         </div>
                         <Input 
                           placeholder="Search" 
                           className="pl-10 bg-gray-50 border-gray-200 rounded-full" 
                         />
                       </div>
              </div>
              
              <div className="flex flex-wrap gap-2 mb-8">
                {toneOptions.map((tone) => {
                  const isSelected = selectedTags.includes(tone.label);
                  return (
                    <div 
                      key={tone.label}
                      onClick={() => toggleTag(tone.label)}
                      className={`
                        cursor-pointer rounded-full px-3 py-1.5 md:px-4 md:py-2 text-sm md:text-base flex items-center gap-2
                        ${isSelected ? 'bg-white text-sky-500 border-2 border-sky-200' : 'bg-gray-100 border-2 border-gray-100 text-gray-600'}
                      `}
                    >
                      {tone.label}
                      {isSelected && (
                        <button className="text-sky-500 hover:text-sky-600">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M18 6 6 18"></path>
                            <path d="m6 6 12 12"></path>
                          </svg>
                        </button>
                      )}
                    </div>
                  );
                })}
              </div>
              
              <h3 className="text-lg font-medium text-gray-800 mb-4">About Audience</h3>
              <div className="relative">
                <Textarea
                  value={inputText}
                  onChange={handleTextChange}
                  placeholder="Describe your audience..."
                  className="bg-gray-100 w-full py-3 px-4 rounded-md min-h-[100px] resize-none font-medium"
                />
                <div className="absolute right-3 bottom-3 text-sm text-gray-500">
                  {charCount}/{maxChars}
                </div>
              </div>
            </div>
          </div>
        )}
        </PageContentLayout>
      </div>
    
      
      {/* Right side - Template selection */}
      <Card className="w-full lg:w-2/5 bg-white p-4 md:p-6 pb-24 lg:pb-6">
        <div>
        <Title size="sm" className="text-neutral-800 mb-5">
        Select a Carousel Template
        </Title>
          <div className="grid grid-cols-2 gap-3 md:gap-4 mb-8">
            {templates.map((template) => (
              <div 
                key={template.id}
                className={`relative overflow-hidden rounded-lg cursor-pointer group transition-all duration-300 ${
                  currentTemplate === template.id 
                    ? 'ring-2 ring-sky-400 border-2 border-sky-400 shadow-lg' 
                    : 'border border-gray-200 hover:shadow-md'
                }`}
                onClick={() => setCurrentTemplate(template.id)}
              >
                {/* Template name banner that's always visible at bottom */}
                <div className="absolute bottom-0 left-0 right-0 z-20 bg-sky-400 px-2 py-1 md:px-3 md:py-2 flex justify-between items-center text-white font-medium">
                  <span className="text-xs md:text-sm text-center mx-auto">{template.title}</span>
                </div>
                
                {/* Slide counter always visible at top-right */}
                <div className="absolute top-2 right-2 z-20 bg-sky-400/90 text-white text-xs px-1.5 py-0.5 md:px-2 md:py-1 rounded-full">
                  <span className="text-xs">1/{template.images.length}</span>
                </div>
                
                <Carousel className="w-full">
                  <CarouselContent className="aspect-square">
                    {template.images.map((image, index) => (
                      <CarouselItem key={index} className="aspect-square">
                        <div className={`aspect-square ${template.color} flex flex-col items-center justify-center p-3 md:p-4 text-white relative`}>
                          <img 
                            src={image} 
                            alt={`${template.title} slide ${index + 1}`}
                            className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-30"
                          />
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  
                  <div className="absolute left-0.5 md:left-1 top-1/2 -translate-y-1/2 z-10">
                    <CarouselPrevious className="relative -left-0 h-5 w-5 md:h-6 md:w-6 bg-black/50 border-0 hover:bg-black/70 text-white" />
                  </div>
                  <div className="absolute right-0.5 md:right-1 top-1/2 -translate-y-1/2 z-10">
                    <CarouselNext className="relative -right-0 h-5 w-5 md:h-6 md:w-6 bg-black/50 border-0 hover:bg-black/70 text-white" />
                  </div>
                </Carousel>
                
                {/* Selected indicator */}
                {currentTemplate === template.id && (
                  <div className="absolute top-2 md:top-3 left-2 md:left-3 z-10">
                    <div className="bg-sky-400 text-white rounded-full p-0.5">
                      <Check size={12} className="md:hidden" />
                      <Check size={16} className="hidden md:block" />
                    </div>
                  </div>
                )}
                
                {/* Animated overlay on hover */}
                <div className={cn(
                  "absolute inset-0 bg-sky-500/0 transition-all duration-300 flex items-center justify-center",
                  "group-hover:bg-sky-500/20"
                )}></div>
              </div>
            ))}
          </div>
        </div>
      </Card>

      {/* Sticky preview button at bottom - only visible on mobile */}
      {isMobile && (
        <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-gray-200 shadow-lg z-[1000]">
          <Button 
            className="w-full rounded-full py-4 md:py-5 text-white md:text-lg font-medium bg-sky-400 hover:bg-sky-500 transition-all duration-300"
            onClick={handlePreviewTemplate}
          >
            Preview Selected Template
          </Button>
        </div>
      )}

      {/* Non-sticky button for desktop - displayed at the end of the content */}
      {!isMobile && (
        <div className="hidden lg:block lg:fixed lg:bottom-6 lg:right-6 z-40">
          <Button 
            className="rounded-full py-3 px-6 text-white font-medium bg-sky-400 hover:bg-sky-500 transition-all duration-300"
            onClick={handlePreviewTemplate}
          >
            Preview Selected Template
          </Button>
        </div>
      )}

      {/* BookmarkModal component */}
      <BookmarkModal 
        open={bookmarkModalOpen} 
        onClose={() => setBookmarkModalOpen(false)}
        onSelect={handleBookmarkSelect}
      />
    </div>
  );
};

export default ScratchEditor;
