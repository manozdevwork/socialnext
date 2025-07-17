import React, { useState, useRef } from 'react';
import { X, Search, ChevronDown } from 'lucide-react';
import { CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import PageContentLayout from '@/components/layout/PageContentLayout';
import { ROUTES } from '@/constants/routes';

interface PreferenceSelectorProps {
  title?: string;
  description?: string;
  className?: string;
}

interface TagProps {
  label: string;
  onRemove?: () => void;
  onClick?: () => void;
  active?: boolean;
}

const Tag: React.FC<TagProps> = ({ label, onRemove, onClick, active = false }) => {
  return (
    <div 
      onClick={onClick}
      className={cn(
        "inline-flex items-center rounded-full px-4 py-2 text-sm mr-2 mb-2 transition-all",
        active 
          ? "bg-sky-100 text-sky-700 border border-sky-300 hover:bg-sky-200" 
          : "bg-gray-50 text-gray-700 border border-gray-200 hover:bg-gray-100 cursor-pointer"
      )}
    >
      <span>{label}</span>
      {active && onRemove && (
        <button 
          onClick={(e) => {
            e.stopPropagation();
            onRemove();
          }}
          className="ml-1.5 text-sky-600 hover:text-sky-800 bg-sky-50 rounded-full p-0.5 hover:bg-sky-100 transition-colors"
          aria-label={`Remove ${label}`}
        >
          <X className="h-3.5 w-3.5" />
        </button>
      )}
    </div>
  );
};

const PreferenceSelector: React.FC<PreferenceSelectorProps> = ({ 
  title = "Preferences",
  description = "Select categories that are relevant to your interests",
  className = ""
}) => {
  const [activeFilters, setActiveFilters] = useState<string[]>([
    'Technology', 'Science', 'Design', 'Marketing', 'Advertising'
  ]);
  const [searchQuery, setSearchQuery] = useState('');
  const [showAll, setShowAll] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  
  const allCategories = [
    'Advertising', 'Design', 'Arts', 'Fashion', 'Lead Generation', 
    'Finance', 'Sales', 'Science', 'Technology', 'Marketing',
    'Business Development', 'Engineering', 'Healthcare', 'Education',
    'Entertainment', 'Real Estate', 'Hospitality', 'Manufacturing',
    'Retail', 'Transportation', 'Media', 'Construction', 'Agriculture',
    'Energy', 'Environment', 'Information Technology', 'Telecommunications'
  ];

  // Remove duplicates and sort alphabetically
  const uniqueCategories = [...new Set(allCategories)].sort();

  const toggleFilter = (filter: string) => {
    if (activeFilters.includes(filter)) {
      setActiveFilters(activeFilters.filter(f => f !== filter));
    } else {
      setActiveFilters([...activeFilters, filter]);
    }
  };

  const removeFilter = (filter: string) => {
    setActiveFilters(activeFilters.filter(f => f !== filter));
  };

  // Filter categories based on search query
  const filteredCategories = uniqueCategories.filter(category => 
    !activeFilters.includes(category) && 
    category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Decide how many items to show
  const displayedCategories = showAll 
    ? filteredCategories 
    : filteredCategories.slice(0, 20);

  // Toggle show all/less
  const toggleShowAll = () => {
    setShowAll(!showAll);
    
    // Scroll to bottom when expanding
    if (!showAll && scrollAreaRef.current) {
      setTimeout(() => {
        scrollAreaRef.current?.scrollTo({
          top: scrollAreaRef.current.scrollHeight,
          behavior: 'smooth'
        });
      }, 100);
    }
  };

  return (
    <PageContentLayout
      title={title}
      subtitle={description}
      className={className}
      showBackButton={true}
      backRoute={ROUTES.ACCOUNT}
    >
      <CardContent className="px-8">
        {/* Search */}
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
        
        {/* Active filters */}
        <div className="mb-4">
          {activeFilters.map((filter, index) => (
            <Tag 
              key={`active-${filter}-${index}`} 
              label={filter} 
              active={true} 
              onRemove={() => removeFilter(filter)} 
            />
          ))}
        </div>
        
        {/* Available categories */}
        <ScrollArea 
          className="pr-4 max-h-[300px]" 
          ref={scrollAreaRef as any}
        >
          <div className="pb-2">
            {displayedCategories.map((category, index) => (
              <Tag 
                key={`category-${category}-${index}`} 
                label={category} 
                active={false} 
                onClick={() => toggleFilter(category)} 
              />
            ))}
          </div>
        </ScrollArea>

        {/* Show more toggle */}
        {filteredCategories.length > 20 && (
          <div className="flex justify-center mt-4">
            <Button 
              variant="ghost" 
              size="sm"
              onClick={toggleShowAll}
              className="text-sky-500 hover:text-sky-700 flex items-center gap-1"
            >
              {showAll ? 'Show Less' : `Show More (${filteredCategories.length - 20})`}
              <ChevronDown className={`h-4 w-4 transition-transform ${showAll ? 'rotate-180' : ''}`} />
            </Button>
          </div>
        )}
      </CardContent>
    </PageContentLayout>
  );
};

export default PreferenceSelector;
