import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import { Textarea } from '../ui/textarea';

interface Template {
  id: number;
  name: string;
  image: string;
}

interface RegeneratePostDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onConfirm: () => void;
  onCancel: () => void;
}

const TEMPLATES: Template[] = [
  {
    id: 1,
    name: "How to Write Hook That Don't Suck",
    image: "https://picsum.photos/id/1/300/300"
  },
  {
    id: 2,
    name: "7 Types of Highly Effective Sales Emails",
    image: "https://picsum.photos/id/2/300/300"
  },
  {
    id: 3,
    name: "Why you should not say Yes to every project",
    image: "https://picsum.photos/id/3/300/300"
  },
  {
    id: 4,
    name: "Happy and Healthy Employees",
    image: "https://picsum.photos/id/4/300/300"
  },
  {
    id: 5,
    name: "Your Business",
    image: "https://picsum.photos/id/5/300/300"
  },
  {
    id: 6,
    name: "Become a Marketing Superstar",
    image: "https://picsum.photos/id/6/300/300"
  },
  {
    id: 7,
    name: "Tips for Small Business Owner",
    image: "https://picsum.photos/id/7/300/300"
  },
  {
    id: 8,
    name: "Designing Brand Identity",
    image: "https://picsum.photos/id/8/300/300"
  },
  {
    id: 9,
    name: "Five Steps to build Competitive Sales Strategy",
    image: "https://picsum.photos/id/9/300/300"
  }
];

const RegeneratePostDialog: React.FC<RegeneratePostDialogProps> = ({
  open,
  onOpenChange,
  onConfirm,
  onCancel
}) => {
  const [topic, setTopic] = useState("Top Marketing Strategies for 2024");
  const [charCount, setCharCount] = useState(29);
  const [selectedTemplate, setSelectedTemplate] = useState<number | null>(null);
  
  const handleTopicChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newTopic = e.target.value;
    setTopic(newTopic);
    setCharCount(newTopic.length);
  };
  
  const handleTemplateSelect = (templateId: number) => {
    setSelectedTemplate(templateId);
  };
  
  const handleConfirm = () => {
    if (selectedTemplate) {
      onConfirm();
    }
  };
  
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl p-6 bg-white">
        <DialogHeader>
          <div className='flex justify-between items-center'>
            <div className="flex flex-col justify-end mt-6">
          <DialogTitle className="text-2xl font-bold">Regenerate Post</DialogTitle>
          <p className="text-gray-500 mt-1">
            Please complete the following steps to complete your profile
          </p>
          </div>

          <div className="flex gap-4 mt-6">
          <Button 
            variant="outline" 
            onClick={onCancel}
            className="px-6 rounded-full"
          >
            Cancel
          </Button>
          <Button 
            onClick={handleConfirm}
            className="bg-sky-400 hover:bg-sky-500 px-6 rounded-full"
            disabled={!selectedTemplate}
          >
            Confirm
          </Button>
          </div>
        </div>
        </DialogHeader>
        
        <div className="my-6">
          <h3 className="text-lg font-semibold mb-2">What topic are you interested in?</h3>
          <div className="relative">
          <div className="relative">
            <Textarea
          value={topic}
          onChange={handleTopicChange}
          className="min-h-[100px] border rounded-lg p-3 w-full resize-none bg-gray-50"
          placeholder="Enter your topic here"
          rows={7}
        />
            <div className="absolute bottom-5 right-2 text-xs text-gray-500">
              {charCount}/150
            </div>
            </div>
          </div>
        </div>
        
        <div className="mb-4 flex justify-between items-center">
          <h3 className="text-lg font-semibold">Choose template</h3>
          <Button 
            className="bg-sky-400 hover:bg-sky-500 text-white rounded-full"
          >
            Regenerate
          </Button>
        </div>
        
        <div className="grid grid-cols-3 md:grid-cols-5 gap-4">
          {TEMPLATES.map((template) => (
            <div 
              key={template.id}
              className={cn(
                "relative cursor-pointer overflow-hidden rounded-md border-2 transition-all",
                selectedTemplate === template.id ? "border-sky-500" : "border-transparent hover:border-sky-300"
              )}
              onClick={() => handleTemplateSelect(template.id)}
            >
              <div className="relative aspect-square">
                <img 
                  src={template.image} 
                  // alt={template.name}
                  className="w-full h-full object-cover"
                />
                
                {/* Navigation overlay - appears on hover */}
                <div className="absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 transition-opacity flex justify-between items-center px-2">
                  <button className="bg-white/80 rounded-full p-1.5">
                    <ChevronLeft className="h-4 w-4" />
                  </button>
                  <button className="bg-white/80 rounded-full p-1.5">
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
              
              {/* Template title and position indicator */}
              <div className="absolute bottom-0 inset-x-0 bg-black/70 text-white p-2 text-xs flex justify-between">
                <span className="truncate">{template.name}</span>
                <span>1/3</span>
              </div>
            </div>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default RegeneratePostDialog;
