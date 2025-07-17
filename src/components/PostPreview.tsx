
import React, { useState } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Smartphone, Tablet, Monitor, MessageSquare, Share, Send, ThumbsUp, Trash, Copy, Plus } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Switch } from '@/components/ui/switch';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';

interface PostPreviewProps {
  title?: string;
  subtitle?: string;
  contentImage?: string;
  displayValue?: string;
  activeView?: 'post' | 'slides';
  onTitleChange?: (title: string) => void;
  onSubtitleChange?: (subtitle: string) => void;
}

const PostPreview: React.FC<PostPreviewProps> = ({
  title = "TIPS FOR SMALL BUSINESS OWNER",
  subtitle = "SEO - FIVE TERMS YOU SHOW KNOW",
  contentImage = "https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&w=300",
  displayValue = "1/5",
  activeView = 'post',
  onTitleChange,
  onSubtitleChange
}) => {
  // State for text formatting
  const [titleText, setTitleText] = useState(title);
  const [subtitleText, setSubtitleText] = useState(subtitle);
  const [titleFont, setTitleFont] = useState("Inter");
  const [subtitleFont, setSubtitleFont] = useState("Inter");
  const [titleSize, setTitleSize] = useState("72px");
  const [subtitleSize, setSubtitleSize] = useState("72px");
  const [titleColor, setTitleColor] = useState("#333333");
  const [subtitleColor, setSubtitleColor] = useState("#333333");
  const [titleCharCount, setTitleCharCount] = useState(title.length);
  const [subtitleCharCount, setSubtitleCharCount] = useState(subtitle.length);
  const maxChars = 150;

  // Handle title text change
  const handleTitleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newText = e.target.value;
    setTitleText(newText);
    setTitleCharCount(newText.length);
    if (onTitleChange) onTitleChange(newText);
  };

  // Handle subtitle text change
  const handleSubtitleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newText = e.target.value;
    setSubtitleText(newText);
    setSubtitleCharCount(newText.length);
    if (onSubtitleChange) onSubtitleChange(newText);
  };

  // Random images for slide backgrounds
  const randomBackgrounds = [
    "https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&w=300",
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=300",
    "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&w=300",
    "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=300",
    "https://images.unsplash.com/photo-1721322800607-8c38375eef04?auto=format&fit=crop&w=300",
    "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?auto=format&fit=crop&w=300",
    "https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&w=300",
    "https://images.unsplash.com/photo-1426604966848-d7adac402bff?auto=format&fit=crop&w=300",
  ];

  // Color options
  const colorOptions = [
    { label: "Black", value: "#333333", bgClass: "bg-gray-800" },
    { label: "White", value: "#FFFFFF", bgClass: "bg-white" },
    { label: "Red", value: "#E53E3E", bgClass: "bg-red-500" },
    { label: "Blue", value: "#3182CE", bgClass: "bg-blue-500" },
    { label: "Green", value: "#38A169", bgClass: "bg-green-500" },
    { label: "Yellow", value: "#ECC94B", bgClass: "bg-yellow-400" },
    { label: "Purple", value: "#805AD5", bgClass: "bg-purple-500" },
    { label: "Pink", value: "#D53F8C", bgClass: "bg-pink-500" },
  ];

  // Font options
  const fontOptions = [
    { label: "Inter", value: "Inter" },
    { label: "Arial", value: "Arial" },
    { label: "Roboto", value: "Roboto" },
    { label: "Open Sans", value: "Open Sans" },
    { label: "Montserrat", value: "Montserrat" },
  ];

  // Size options
  const sizeOptions = [
    { label: "72px", value: "72px" },
    { label: "64px", value: "64px" },
    { label: "48px", value: "48px" },
    { label: "36px", value: "36px" },
    { label: "24px", value: "24px" },
  ];

  // Title Editor Component
  const TitleEditor = () => (
    <div className="space-y-4">
      <h2 className="text-xl font-medium">Title</h2>
      <div className="relative">
        <Textarea 
          value={titleText}
          onChange={handleTitleChange}
          className="min-h-[100px] border rounded-lg p-3 w-full resize-none bg-gray-50"
          placeholder="Enter your title here..."
          maxLength={maxChars}
          rows={10}
        />
        <div className="absolute bottom-5 right-2 text-xs text-gray-500">
          {titleCharCount}/{maxChars}
        </div>
        <div className="absolute bottom-2 left-2 text-sm text-gray-500">
        <div className="flex items-center">
        <Select value={titleFont} onValueChange={setTitleFont} >
          <SelectTrigger className="w-[150px] rounded-l-md rounded-r-none border-r-0">
            <SelectValue placeholder="Select Font" className='text-xs'/>
          </SelectTrigger>
          <SelectContent>
            {fontOptions.map((font) => (
              <SelectItem key={font.value} value={font.value} className='text-xs'>
                {font.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        
        <div className="flex border-t border-b">
          <DropdownMenu>
            <DropdownMenuTrigger className="p-2 hover:bg-gray-100 border-r">
              <div 
                className="w-5 h-5 rounded-full" 
                style={{ backgroundColor: titleColor }}
              />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <div className="grid grid-cols-4 gap-1 p-1">
                {colorOptions.map((color) => (
                  <DropdownMenuItem key={color.value} onClick={() => setTitleColor(color.value)}>
                    <div 
                      className={`w-6 h-6 rounded-full ${color.bgClass} border border-gray-300`}
                    />
                  </DropdownMenuItem>
                ))}
              </div>
            </DropdownMenuContent>
          </DropdownMenu>
          
          <button className="p-2 hover:bg-gray-100 border-r">
            <span className="font-bold text-xs">B</span>
          </button>
        </div>
        
        <Select value={titleSize} onValueChange={setTitleSize}>
          <SelectTrigger className="w-[75px] rounded-r-md rounded-l-none border-l-0">
            <SelectValue placeholder="Size" />
          </SelectTrigger>
          <SelectContent>
            {sizeOptions.map((size) => (
              <SelectItem key={size.value} value={size.value}>
                {size.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
        </div>
      </div>
    </div>
  );

  // Sub Title Editor Component
  const SubTitleEditor = () => (
    <div className="space-y-4 mt-6">
      <h2 className="text-xl font-medium">Sub Title</h2>
      <div className="relative">
        <Textarea 
          value={subtitleText}
          onChange={handleSubtitleChange}
          className="min-h-[100px] border rounded-lg p-3 w-full resize-none bg-gray-50"
          placeholder="Enter your subtitle here..."
          maxLength={maxChars}
          rows={10}
        />
        <div className="absolute bottom-5 right-2 text-sm text-gray-500">
          {subtitleCharCount}/{maxChars}
        </div>
        <div className="absolute bottom-2 left-2 text-sm text-gray-500">
        <div className="flex items-center">
        <Select value={subtitleFont} onValueChange={setSubtitleFont}>
          <SelectTrigger className="w-[150px] rounded-l-md rounded-r-none border-r-0">
            <SelectValue placeholder="Select Font" />
          </SelectTrigger>
          <SelectContent>
            {fontOptions.map((font) => (
              <SelectItem key={font.value} value={font.value} className='text-xs'>
                {font.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        
        <div className="flex border-t border-b">
          <DropdownMenu>
            <DropdownMenuTrigger className="p-2 hover:bg-gray-100 border-r">
              <div 
                className="w-5 h-5 rounded-full" 
                style={{ backgroundColor: subtitleColor }}
              />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <div className="grid grid-cols-4 gap-1 p-1">
                {colorOptions.map((color) => (
                  <DropdownMenuItem key={color.value} onClick={() => setSubtitleColor(color.value)}>
                    <div 
                      className={`w-6 h-6 rounded-full ${color.bgClass} border border-gray-300`}
                    />
                  </DropdownMenuItem>
                ))}
              </div>
            </DropdownMenuContent>
          </DropdownMenu>
          
          <button className="p-2 hover:bg-gray-100 border-r">
            <span className="font-bold text-xs">B</span>
          </button>
        </div>
        
        <Select value={subtitleSize} onValueChange={setSubtitleSize}>
          <SelectTrigger className="w-[100px] rounded-r-md rounded-l-none border-l-0">
            <SelectValue placeholder="Size" />
          </SelectTrigger>
          <SelectContent>
            {sizeOptions.map((size) => (
              <SelectItem key={size.value} value={size.value}>
                {size.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
        </div>
      </div>
     
    </div>
  );

  // Main component
  return (
    <div className="flex flex-col w-full">
      {/* If in editor mode, show the title and subtitle editors */}
      {onTitleChange && onSubtitleChange && (
        <>
          <TitleEditor />
          <SubTitleEditor />
        </>
      )}

      {/* If no editors are needed, show regular preview content */}
      {!onTitleChange && !onSubtitleChange && (
        <>
            <div className="grid grid-cols-3 gap-3">
              {/* Add new slide card */}
              <div className="border border-sky-100 bg-sky-50 rounded-md p-3 aspect-square flex flex-col items-center justify-center text-sky-400 transition-all hover:bg-sky-100 hover:border-sky-200 cursor-pointer">
                <div className="w-14 h-14 flex items-center justify-center">
                  <Plus className="w-10 h-10" />
                </div>
              </div>
              
              {/* Generate 8 slide preview cards */}
              {Array.from({ length: 8 }).map((_, index) => (
                <div key={index} className="relative rounded-md overflow-hidden bg-gray-800 group">
                  <div className="aspect-square">
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent to-sky-900 z-10"></div>
                    <div className="absolute top-2 left-2 bg-black/60 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs z-20">
                      {index + 1}
                    </div>
                    <div className="absolute top-2 right-2 flex space-x-1 z-20 group-hover:opacity-100 transition-opacity">
                      <button className="bg-white border border-sky-400 rounded-full p-1 w-6 h-6 flex items-center justify-center hover:bg-gray-100 transition-colors">
                        <Copy className="w-3 h-3" color="#38bdf9"/>
                      </button>
                      <button className="border border-white bg-sky-400 rounded-full p-1 w-6 h-6 flex items-center justify-center transition-colors">
                        <Trash className="w-3 h-3" color="white"/>
                      </button>
                    </div>
                    <div 
                      className="absolute inset-0 opacity-30 bg-cover bg-center group-hover:scale-110 transition-transform duration-300"
                      style={{ backgroundImage: `url(${randomBackgrounds[index % randomBackgrounds.length]})` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
        </>
      )}
    </div>
  );
};

export default PostPreview;
