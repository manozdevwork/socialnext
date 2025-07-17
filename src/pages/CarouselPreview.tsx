
import React, { useEffect, useState } from 'react';
import { 
  ArrowLeft, ArrowRight, Copy, Download, Instagram, Share2, Check, 
  Bold, Italic, AlignLeft, AlignCenter, AlignRight, Smartphone, Tablet, 
  Monitor, Trash, Sparkles, Rocket, ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight,
  Maximize, Minimize
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useNavigate } from 'react-router-dom';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from '@/components/ui/carousel';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Switch } from '@/components/ui/switch';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from '@/hooks/use-toast';
import PostPreview from '@/components/PostPreview';
import { cn } from '@/lib/utils';
import { 
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import RegeneratePostDialog from '@/components/dialogs/RegeneratePostDialog';

interface PreviewData {
  templateId: number;
  inputText: string;
  selectedAudience: 'my' | 'new';
  selectedTags: string[];
  selectedPersona: string;
}

const CarouselPreview = () => {
  const navigate = useNavigate();
  const [previewData, setPreviewData] = useState<PreviewData | null>(null);
  const [currentTemplate, setCurrentTemplate] = useState<number>(1);
  const [isCopied, setIsCopied] = useState(false);
  const [activeSection, setActiveSection] = useState('carousel-builder');
  const [activeSectionTab, setActiveSectionTab] = useState('slides');
  const [postTitle, setPostTitle] = useState("");
  const [postSubTitle, setPostSubTitle] = useState("");
  const [charCount, setCharCount] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(1);
  const [totalSlides, setTotalSlides] = useState(5);
  const [disableAvatar, setDisableAvatar] = useState(false);
  const [showInIntroOutro, setShowInIntroOutro] = useState(false);
  const [nameInput, setNameInput] = useState("Jon Snow");
  const [ctaInput, setCtaInput] = useState("Book Now");
  const [handleInput, setHandleInput] = useState("@Jonsnow");
  const [selectedFontFamily, setSelectedFontFamily] = useState("Inter");
  const [selectedFontSize, setSelectedFontSize] = useState("72px");
  const [textAlignment, setTextAlignment] = useState("left");
  const [isBold, setIsBold] = useState(false);
  const [isItalic, setIsItalic] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isRegenerateDialogOpen, setIsRegenerateDialogOpen] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);
  
  useEffect(() => {
    // Retrieve the preview data from localStorage
    const storedData = localStorage.getItem('previewTemplate');
    if (storedData) {
      const data = JSON.parse(storedData) as PreviewData;
      setPreviewData(data);
      setCurrentTemplate(data.templateId);
      setPostTitle(data.inputText);
      setPostSubTitle(data.inputText);
      setCharCount(data.inputText.length);
    }
    
    // Check screen width for responsive layout
    const checkScreenSize = () => {
      setIsMobileView(window.innerWidth < 768); // 768px is typically md breakpoint
    };
    
    // Initial check
    checkScreenSize();
    
    // Listen for resize events
    window.addEventListener('resize', checkScreenSize);
    
    // Cleanup
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const goBack = () => {
    navigate('/carousel-editor/scratch');
  };

  const handleCopyLink = () => {
    // Simulate copy to clipboard
    setIsCopied(true);
    toast({
      title: "Link copied!"
    });
    
    // Reset the copied state after 2 seconds
    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  };

  const handleDownload = () => {
    toast({
      title: "Download started"
    });
  };

  const handleShareToInstagram = () => {
    toast({
      title: "Share to Instagram"
    });
  };

  const handleTitleChange = (text: string) => {
    setPostTitle(text);
    setCharCount(text.length);
  };

  const handleSubTitleChange = (text: string) => {
    setPostSubTitle(text);
  };
  
  const handleTextAlignmentChange = (alignment: string) => {
    setTextAlignment(alignment);
  };
  
  const toggleBold = () => {
    setIsBold(!isBold);
  };
  
  const toggleItalic = () => {
    setIsItalic(!isItalic);
  };

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  const goToPreviousSlide = () => {
    setCurrentSlide(prev => prev > 1 ? prev - 1 : prev);
  };

  const goToNextSlide = () => {
    setCurrentSlide(prev => prev < totalSlides ? prev + 1 : prev);
  };

  const goToFirstSlide = () => {
    setCurrentSlide(1);
  };

  const goToLastSlide = () => {
    setCurrentSlide(totalSlides);
  };
  
  const handleRegenerateClick = () => {
    setIsRegenerateDialogOpen(true);
  };
  
  const handleRegenerateConfirm = () => {
    setIsRegenerateDialogOpen(false);
    // Add logic for handling the regeneration
    toast({
      title: "Post regenerated successfully"
    });
  };
  
  const handleRegenerateCancel = () => {
    setIsRegenerateDialogOpen(false);
  };

  // Templates data
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
      ],
      color: "bg-gradient-to-r from-orange-500 to-amber-700"
    }
  ];

  const currentTemplateData = templates.find(t => t.id === currentTemplate) || templates[0];
  const currentImage = currentTemplateData.images[(currentSlide - 1) % currentTemplateData.images.length];
  
  // Mobile bottom navigation for slide controls
  const MobileSlideControls = () => (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t p-3 flex justify-between items-center z-10">
      <button 
        className="bg-gray-100 p-2 rounded-full"
        onClick={goToFirstSlide}
      >
        <ChevronsLeft size={20} />
      </button>
      <button 
        className="bg-gray-100 p-2 rounded-full"
        onClick={goToPreviousSlide}
      >
        <ChevronLeft size={20} />
      </button>
      
      <div className="font-medium">
        {currentSlide}/{totalSlides}
      </div>
      
      <button 
        className="bg-gray-100 p-2 rounded-full"
        onClick={goToNextSlide}
      >
        <ChevronRight size={20} />
      </button>
      <button 
        className="bg-gray-100 p-2 rounded-full"
        onClick={goToLastSlide}
      >
        <ChevronsRight size={20} />
      </button>
    </div>
  );
  
  // Mobile sticky bottom action buttons
  const MobileActionButtons = () => (
    <div className="fixed bottom-16 left-0 right-0 bg-white border-t p-3 z-10 space-y-2">
      <Button 
        className="w-full bg-sky-400 hover:bg-sky-500 rounded-full py-5"
      >
        Preview & Publish
      </Button>
      <Button 
        variant="outline" 
        className="w-full text-sky-500 bg-sky-50 border-sky-100 hover:bg-sky-100 rounded-full py-5"
      >
        Schedule Post
      </Button>
    </div>
  );
  
  return (
    <div className="mt-4 px-2 md:px-4 py-4 md:py-6 bg-white">
      <div className="flex flex-col">
        {isMobileView ? (
          // Mobile layout - stacked columns
          <div className="flex flex-col space-y-6">
            {/* Text Editing Section */}
            <div className="bg-white p-3 rounded-lg shadow-sm border">
              <h2 className="text-lg font-medium mb-3">Edit Content</h2>
              <PostPreview 
                title={postTitle}
                subtitle={postSubTitle}
                onTitleChange={handleTitleChange}
                onSubtitleChange={handleSubTitleChange}
              />
            </div>
            
            {/* Carousel Builder Section */}
            <div className="bg-white p-3 rounded-lg shadow-sm border">
              <h2 className="text-lg font-medium mb-3">Carousel Builder</h2>
              <Tabs value={activeSectionTab} onValueChange={setActiveSectionTab} className="w-full">
                <TabsList className="flex w-full mb-4 p-1 rounded-full">
                  <TabsTrigger 
                    value="slides" 
                    className={`flex-1 rounded-full ${activeSectionTab === 'slides' ? '' : 'bg-sky-400 text-white'}`}
                  >
                    Slides
                  </TabsTrigger>
                  <TabsTrigger 
                    value="design" 
                    className={`flex-1 rounded-full ${activeSectionTab === 'design' ? '' : 'bg-sky-400 text-white'}`}
                  >
                    Design
                  </TabsTrigger>
                  <TabsTrigger 
                    value="headshot" 
                    className={`flex-1 rounded-full ${activeSectionTab === 'headshot' ? '' : 'bg-sky-400 text-white'}`}
                  >
                    Headshot
                  </TabsTrigger>
                </TabsList>
                
                <TabsContent value="slides" className="mt-0">
                  <PostPreview 
                    title={postTitle}
                    subtitle={postSubTitle}
                    displayValue={`${currentSlide}/${totalSlides}`}
                    activeView="slides"
                  />
                </TabsContent>
                
                <TabsContent value="design" className="mt-0">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="grid grid-cols-2 gap-6">
                      <h3 className="text-sm font-medium mb-2">Primary Color</h3>
                      <div className="h-10 bg-black rounded-md"></div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <h3 className="text-sm font-medium mb-2">Secondary Color</h3>
                      <div className="h-10 bg-sky-400 rounded-md"></div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <h3 className="text-sm font-medium mb-2">Text Color</h3>
                      <div className="h-10 bg-white border border-gray-200 rounded-md"></div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <h3 className="text-sm font-medium mb-2">Sub Text Color</h3>
                      <div className="h-10 bg-gray-200 rounded-md"></div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <h3 className="text-sm font-medium mb-2">CTA Color</h3>
                      <div className="h-10 bg-sky-400 rounded-md"></div>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="headshot" className="mt-0">
                  <div className="flex flex-col space-y-4">
                    <div className="flex justify-center">
                      <div className="relative">
                        <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-4 border-gray-200">
                          <img 
                            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" 
                            alt="User headshot"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <button className="absolute -bottom-1 -right-1 bg-red-500 text-white rounded-full w-7 h-7 md:w-8 md:h-8 flex items-center justify-center border-2 border-white">
                          <Trash size={14} />
                        </button>
                      </div>
                    </div>
                    
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 md:p-6 flex flex-col items-center justify-center">
                      <p className="text-sky-400 font-medium mb-1 text-sm md:text-base">Click to Upload</p>
                      <p className="text-gray-500 text-xs md:text-sm">or drag and drop</p>
                      <p className="text-gray-500 text-xs md:text-sm mt-1">(Max. File size: 25 MB)</p>
                    </div>

                    <div className="flex flex-col space-y-3">
                      <div className="flex items-center space-x-2">
                        <Switch 
                          checked={disableAvatar} 
                          onCheckedChange={setDisableAvatar}
                          className="bg-sky-400 data-[state=checked]:bg-sky-400"
                        />
                        <span className="text-gray-700 text-sm">Disable Avatar</span>
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        <Switch 
                          checked={showInIntroOutro} 
                          onCheckedChange={setShowInIntroOutro}
                          className="bg-sky-400 data-[state=checked]:bg-sky-400"  
                        />
                        <span className="text-gray-700 text-sm">Show only in "Intro" and "Outro" slides</span>
                      </div>
                    </div>
                  </div>
                  
                  <Separator className="my-4" />
                  
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-gray-700 mb-1 text-sm">Name</label>
                        <Input 
                          type="text" 
                          value={nameInput}
                          onChange={(e) => setNameInput(e.target.value)}
                          className="w-full bg-gray-100 text-base"
                        />
                      </div>
                      <div>
                        <label className="block text-gray-700 mb-1 text-sm">CTA</label>
                        <Input 
                          type="text" 
                          value={ctaInput}
                          onChange={(e) => setCtaInput(e.target.value)}
                          className="w-full bg-gray-100 text-base"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-gray-700 mb-1 text-sm">Handle</label>
                      <Input 
                        type="text" 
                        value={handleInput}
                        onChange={(e) => setHandleInput(e.target.value)}
                        className="w-full bg-gray-100 text-base"
                      />
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
            
            {/* Preview Section */}
            <div className="mb-20">
              <h2 className="text-2xl font-bold mb-3">Post Preview</h2>
              
              <div className="flex items-center justify-end mb-2">
                <div className="flex space-x-2">
                  <button className="border rounded p-1.5 bg-gray-100">
                    <Smartphone size={16} />
                  </button>
                  <button className="border rounded p-1.5">
                    <Tablet size={16} />
                  </button>
                  <button className="border rounded p-1.5">
                    <Monitor size={16} />
                  </button>
                </div>
              </div>
              
              {/* Post Preview Card */}
              <Card className={cn(
                "border border-gray-200 rounded-lg overflow-hidden shadow-sm",
                isFullscreen ? "fixed inset-0 z-50 flex flex-col" : ""
              )}>
                <div className="p-3 md:p-4 relative">
                  {/* Fullscreen toggle button */}
                  <button 
                    onClick={toggleFullscreen} 
                    className="absolute top-2 right-2 z-10 bg-black/30 hover:bg-black/50 text-white p-1.5 rounded-full transition-colors"
                  >
                    {isFullscreen ? <Minimize size={16} /> : <Maximize size={16} />}
                  </button>

                  <div className="flex items-center">
                    <div className="relative">
                      <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gray-200 flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 md:w-6 md:h-6 text-gray-400">
                          <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
                          <circle cx="9" cy="9" r="2" />
                          <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
                        </svg>
                      </div>
                      <div className="absolute -bottom-1 -right-1 bg-blue-600 rounded-full w-4 h-4 md:w-5 md:h-5 flex items-center justify-center border-2 border-white">
                        <span className="text-white text-[8px] md:text-xs font-bold">in</span>
                      </div>
                    </div>
                    <div className="ml-2 text-xs md:text-sm text-gray-500">
                      Now • <span className="opacity-50">⚪</span>
                    </div>
                  </div>
                  
                  <p className="mt-2 mb-3 text-xs md:text-sm text-gray-700">asdfasdf</p>

                  {/* Post image with hover navigation */}
                  <div 
                    className="relative bg-black rounded-md overflow-hidden mb-3"
                    onMouseEnter={() => setIsHovering(true)}
                    onMouseLeave={() => setIsHovering(false)}
                  >
                    <img 
                      src={currentImage} 
                      alt={`Slide ${currentSlide}`} 
                      className="w-full opacity-30 object-cover"
                    />
                    <div className="absolute inset-0 flex flex-col justify-between p-4 md:p-6">
                      <div className="self-start bg-white rounded-full p-1.5 md:p-2">
                        <div className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center">
                          <span className="font-bold text-xs md:text-sm">LOGO</span>
                        </div>
                      </div>
                      <div className="flex flex-col items-center text-center">
                        <h1 className="text-white text-2xl md:text-4xl font-bold mb-8 md:mb-16">{postTitle}</h1>
                        <p className="text-white text-sm md:text-base">{postSubTitle}</p>
                      </div>
                    </div>

                    {/* Touch-friendly navigation dots for mobile */}
                    <div className="absolute bottom-2 left-0 right-0 flex justify-center space-x-1 md:hidden">
                      {Array.from({length: totalSlides}).map((_, index) => (
                        <button 
                          key={index}
                          onClick={() => setCurrentSlide(index + 1)}
                          className={`w-2 h-2 rounded-full ${currentSlide === index + 1 ? 'bg-white' : 'bg-white/50'}`}
                        />
                      ))}
                    </div>

                    {/* Navigation controls - visible on desktop hover, always visible on touch */}
                    {(isHovering || isMobileView) && (
                      <>
                        <button 
                          onClick={goToPreviousSlide}
                          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-1.5 md:p-2 rounded-full transition-all"
                        >
                          <ChevronLeft size={20} />
                        </button>
                        <button 
                          onClick={goToNextSlide}
                          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-1.5 md:p-2 rounded-full transition-all"
                        >
                          <ChevronRight size={20} />
                        </button>
                      </>
                    )}
                  </div>
                  
                  {/* Post stats */}
                  <div className="mt-3 flex items-center">
                    <div className="flex -space-x-1">
                      <div className="w-4 h-4 md:w-5 md:h-5 rounded-full bg-blue-500 flex items-center justify-center text-white text-xs">
                        👍
                      </div>
                      <div className="w-4 h-4 md:w-5 md:h-5 rounded-full bg-red-500 flex items-center justify-center text-white text-xs">
                        ❤️
                      </div>
                      <div className="w-4 h-4 md:w-5 md:h-5 rounded-full bg-yellow-500 flex items-center justify-center text-white text-xs">
                        😮
                      </div>
                      <div className="w-4 h-4 md:w-5 md:h-5 rounded-full bg-green-500 flex items-center justify-center text-white text-xs">
                        👏
                      </div>
                    </div>
                    <span className="ml-2 text-xs md:text-sm text-gray-500">88</span>
                    <div className="ml-auto text-xs md:text-sm text-gray-500">4 comments • 1 repost</div>
                  </div>
                  
                  {/* Action buttons */}
                  <div className="flex justify-between mt-3 border-t pt-2">
                    <button className="flex items-center gap-1 md:gap-2 text-gray-500 py-1 px-2 md:px-3 rounded-md hover:bg-gray-100 text-xs md:text-sm">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>
                      </svg>
                      <span>Like</span>
                    </button>
                    <button className="flex items-center gap-1 md:gap-2 text-gray-500 py-1 px-2 md:px-3 rounded-md hover:bg-gray-100 text-xs md:text-sm">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                      </svg>
                      <span>Comment</span>
                    </button>
                    <button className="flex items-center gap-1 md:gap-2 text-gray-500 py-1 px-2 md:px-3 rounded-md hover:bg-gray-100 text-xs md:text-sm">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="18" cy="5" r="3"></circle>
                        <circle cx="6" cy="12" r="3"></circle>
                        <circle cx="18" cy="19" r="3"></circle>
                        <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
                        <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
                      </svg>
                      <span>Share</span>
                    </button>
                    <button className="flex items-center gap-1 md:gap-2 text-gray-500 py-1 px-2 md:px-3 rounded-md hover:bg-gray-100 text-xs md:text-sm">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="22" y1="2" x2="11" y2="13"></line>
                        <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                      </svg>
                      <span>Send</span>
                    </button>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        ) : (
          // Desktop layout - three columns
          <div className="grid grid-cols-1 lg:grid-cols-7 gap-0 bg-white">
            {/* Column 1 */}
            <div className="col-span-1 lg:col-span-2 p-6 border-r border-gray-200">
              <PostPreview 
                title={postTitle}
                subtitle={postSubTitle}
                onTitleChange={handleTitleChange}
                onSubtitleChange={handleSubTitleChange}
              />
            </div>

            {/* Column 2 */}
            <div className="col-span-1 lg:col-span-3 p-6 border-r border-gray-200">
              <div className='flex items-center justify-between'>

              <h2 className="text-xl font-medium mb-4">Carousel Builder</h2>
              <div className="flex space-x-2 md:space-x-3">
              <Button variant="ghost" className="text-cyan-400 hover:text-cyan-500 hover:bg-cyan-50 rounded-full font-medium text-xs md:text-sm h-8 md:h-10 px-2 md:px-4 underline underline-offset-4 hover:no-underline">
              View History
                          </Button>
                          <Button onClick={handleRegenerateClick} className="rounded-full bg-sky-50 text-sky-500 hover:bg-sky-100 hover:text-sky-600 font-medium text-xs md:text-sm px-2 md:px-4 h-8 md:h-10">
                                            Regenerate Post
                                          </Button>
          </div>
          </div>
              <div className="p-4">
                <Tabs value={activeSectionTab} onValueChange={setActiveSectionTab} className="w-full">
                <TabsList className="flex w-full mb-4 p-1 bg-gray-100 rounded-full">
  <TabsTrigger 
    value="slides" 
    className={`flex-1 rounded-full text-sm ${activeSectionTab === 'slides' ? 'border border-[#333]' : 'text-gray-500 bg-transparent'}`}
  >
    Slides
  </TabsTrigger>
  <TabsTrigger 
    value="design" 
    className={`flex-1 rounded-full text-sm ${activeSectionTab === 'design' ? 'border border-[#333]' : 'text-gray-500 bg-transparent'}`}
  >
    Design
  </TabsTrigger>
  <TabsTrigger 
    value="headshot" 
    className={`flex-1 rounded-full text-sm ${activeSectionTab === 'headshot' ? 'border border-[#333]' : 'text-gray-500 bg-transparent'}`}
  >
    Headshot
  </TabsTrigger>
</TabsList>
                  
                  <TabsContent value="slides" className="mt-0">
                    <PostPreview 
                      title={postTitle}
                      subtitle={postSubTitle}
                      displayValue={`${currentSlide}/${totalSlides}`}
                      activeView="slides"
                    />
                  </TabsContent>
                  
                  <TabsContent value="design" className="mt-0">
                    <div className="grid grid-cols-2 gap-6">
                      <div className='bg-gray-100 pt-2 px-3 rounded-lg pb-3'>
                        <h3 className="text-sm font-medium mb-2">Primary Color</h3>
                        <div className="h-10 bg-black rounded-md"></div>
                      </div>
                      <div className='bg-gray-100 pt-2 px-3 rounded-lg pb-3'>
                        <h3 className="text-sm font-medium mb-2">Secondary Color</h3>
                        <div className="h-10 bg-sky-400 rounded-md"></div>
                      </div>
                      <div className='bg-gray-100 pt-2 px-3 rounded-lg pb-3'>
                        <h3 className="text-sm font-medium mb-2">Text Color</h3>
                        <div className="h-10 bg-white border border-gray-200 rounded-md"></div>
                      </div>
                      <div className='bg-gray-100 pt-2 px-3 rounded-lg pb-3'>
                        <h3 className="text-sm font-medium mb-2">Sub Text Color</h3>
                        <div className="h-10 bg-gray-200 rounded-md"></div>
                      </div>
                      <div className='bg-gray-100 pt-2 px-3 rounded-lg pb-3'>
                        <h3 className="text-sm font-medium mb-2">CTA Color</h3>
                        <div className="h-10 bg-sky-400 rounded-md"></div>
                      </div>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="headshot" className="mt-0">
                    <div className="flex flex-col space-y-6">
                      <div className="flex justify-center">
                        <div className="relative">
                          <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-gray-200">
                            <img 
                              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" 
                              alt="User headshot"
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <button className="absolute -bottom-1 -right-1 bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center border-2 border-white">
                            <Trash size={14} />
                          </button>
                        </div>
                      </div>
                      
                      <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 flex flex-col items-center justify-center">
                        <p className="text-sky-400 font-medium mb-1">Click to Upload</p>
                        <p className="text-gray-500 text-sm">or drag and drop</p>
                        <p className="text-gray-500 text-sm mt-1">(Max. File size: 25 MB)</p>
                      </div>

                      <div className="flex justify-between py-2 items-center">
                        <div className="flex items-center space-x-2">
                          <Switch 
                            checked={disableAvatar} 
                            onCheckedChange={setDisableAvatar}
                            className="bg-sky-400 data-[state=checked]:bg-sky-400"
                          />
                          <span className="text-gray-700 text-sm">Disable Avatar</span>
                        </div>
                        
                        <div className="flex items-center space-x-2">
                          <Switch 
                            checked={showInIntroOutro} 
                            onCheckedChange={setShowInIntroOutro}
                            className="bg-sky-400 data-[state=checked]:bg-sky-400"  
                          />
                          <span className="text-gray-700 text-sm">Show only in "Intro" and "Outro" slides</span>
                        </div>
                      </div>
                    </div>
                    
                    <Separator className="my-6" />
                    
                    <div className="space-y-6">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-gray-700 mb-2">Name</label>
                          <Input 
                            type="text" 
                            value={nameInput}
                            onChange={(e) => setNameInput(e.target.value)}
                            className="w-full bg-gray-100 text-lg"
                          />
                        </div>
                        <div>
                          <label className="block text-gray-700 mb-2">CTA</label>
                          <Input 
                            type="text" 
                            value={ctaInput}
                            onChange={(e) => setCtaInput(e.target.value)}
                            className="w-full bg-gray-100 text-lg"
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label className="block text-gray-700 mb-2">Handle</label>
                        <Input 
                          type="text" 
                          value={handleInput}
                          onChange={(e) => setHandleInput(e.target.value)}
                          className="w-full bg-gray-100 text-lg"
                        />
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
            </div>

            {/* Column 3 - Modified ACTIONS column */}
            <div className="col-span-1 lg:col-span-2 p-6 flex flex-col">
              <div className="flex items-center justify-between">
              <h2 className="text-lg font-bold mb-4">Post Preview</h2>
              <div className="flex items-center justify-end mb-4">
                <div className="flex space-x-2">
                  <button className="border rounded p-1.5 bg-gray-100">
                    <Smartphone size={18} />
                  </button>
                  <button className="border rounded p-1.5">
                    <Tablet size={18} />
                  </button>
                  <button className="border rounded p-1.5">
                    <Monitor size={18} />
                  </button>
                </div>
              </div>
              </div>

              {/* Main post preview card */}
              <Card className={cn(
                "border border-gray-200 rounded-none overflow-hidden shadow-sm flex-1",
              )}>
                <div className="relative">
                  <div className="px-4 py-3 flex items-center">
                    <div className="relative">
                      <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-gray-400">
                          <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
                          <circle cx="9" cy="9" r="2" />
                          <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
                        </svg>
                      </div>
                      <div className="absolute -bottom-1 -right-1 bg-blue-600 rounded-full w-5 h-5 flex items-center justify-center border-2 border-white">
                        <span className="text-white text-xs font-bold">in</span>
                      </div>
                    </div>
                    <div className="ml-2 text-sm text-gray-500">
                      Now • <span className="opacity-50">⚪</span>
                    </div>
                  </div>
                  
                  <p className="px-4 pb-3 text-gray-700">asdfasdf</p>

                  {/* Post image with hover navigation */}
                  <div 
                    className="relative bg-black rounded-none overflow-hidden mb-3"
                    onMouseEnter={() => setIsHovering(true)}
                    onMouseLeave={() => setIsHovering(false)}
                  >
                    <img 
                      src={currentImage} 
                      alt={`Slide ${currentSlide}`} 
                      className="w-full opacity-30 object-cover"
                    />
                    {/* Hover navigation controls */}
                    {isHovering && (
                      <>
                        <button 
                          onClick={goToPreviousSlide}
                          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all"
                        >
                          <ChevronLeft size={24} />
                        </button>
                        <button 
                          onClick={goToNextSlide}
                          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all"
                        >
                          <ChevronRight size={24} />
                        </button>
                      </>
                    )}
                  </div>
                  
                  {/* Post stats */}
                  <div className="mt-3 px-4 flex items-center">
                    <div className="flex -space-x-1">
                      <div className="w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center text-white text-xs">
                        👍
                      </div>
                      <div className="w-5 h-5 rounded-full bg-red-500 flex items-center justify-center text-white text-xs">
                        ❤️
                      </div>
                      <div className="w-5 h-5 rounded-full bg-yellow-500 flex items-center justify-center text-white text-xs">
                        😮
                      </div>
                      <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center text-white text-xs">
                        👏
                      </div>
                    </div>
                    <span className="ml-2 text-sm text-gray-500">88</span>
                    <div className="ml-auto text-sm text-gray-500">4 comments • 1 repost</div>
                  </div>
                  
                  {/* Action buttons */}
                  <div className="flex justify-between mt-3 border-t pt-2 pb-2">
                    <button className="flex items-center gap-2 text-gray-500 py-1 px-3 rounded-md hover:bg-gray-100">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>
                      </svg>
                      <span>Like</span>
                    </button>
                    <button className="flex items-center gap-2 text-gray-500 py-1 px-3 rounded-md hover:bg-gray-100">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                      </svg>
                      <span>Comment</span>
                    </button>
                    <button className="flex items-center gap-2 text-gray-500 py-1 px-3 rounded-md hover:bg-gray-100">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="18" cy="5" r="3"></circle>
                        <circle cx="6" cy="12" r="3"></circle>
                        <circle cx="18" cy="19" r="3"></circle>
                        <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
                        <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
                      </svg>
                      <span>Share</span>
                    </button>
                    <button className="flex items-center gap-2 text-gray-500 py-1 px-3 rounded-md hover:bg-gray-100">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="22" y1="2" x2="11" y2="13"></line>
                        <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                      </svg>
                      <span>Send</span>
                    </button>
                  </div>
                </div>
              </Card>
              
              {!isFullscreen && (
                <>
                  {/* Navigation controls */}
                  <div className="mt-4 flex justify-center">
                    <div className="rounded-full border border-gray-200 inline-flex items-center px-4 py-1">
                      <button 
                        className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
                        onClick={goToPreviousSlide}
                      >
                        <ChevronLeft className="h-4 w-4" />
                      </button>
                      <div className="px-4 text-gray-600 font-medium">{currentSlide}/{totalSlides}</div>
                      <button 
                        className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
                        onClick={goToNextSlide}
                      >
                        <ChevronRight className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                  
                  {/* Action buttons */}
                  <div className="mt-6 space-y-3">
                    <Button 
                      variant="outline" 
                      className="w-full rounded-full py-6 text-sky-500 bg-sky-50 border-sky-100 hover:bg-sky-100 transition-all"
                    >
                      Schedule Post
                    </Button>
                    <Button 
                      className="w-full rounded-full py-6 bg-sky-400 hover:bg-sky-500 transition-all"
                    >
                      Preview & Publish
                    </Button>
                  </div>
                </>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Mobile slide controls - fixed to bottom */}
      {isMobileView && !isFullscreen && <MobileSlideControls />}
      
      {/* Mobile action buttons - fixed above slide controls */}
      {isMobileView && !isFullscreen && <MobileActionButtons />}

      {/* Regenerate Dialog */}
      <RegeneratePostDialog 
        open={isRegenerateDialogOpen}
        onOpenChange={setIsRegenerateDialogOpen}
        onConfirm={handleRegenerateConfirm}
        onCancel={handleRegenerateCancel}
      />
    </div>
  );
};

export default CarouselPreview;
