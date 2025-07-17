
import React, { useEffect, useState, useRef } from 'react';
import { Search, X } from 'lucide-react';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Input } from '@/components/ui/input';
import { Command, CommandInput, CommandList, CommandEmpty, CommandGroup, CommandItem } from '@/components/ui/command';
import { ROUTES } from '@/constants/routes';
import { useNavigate } from 'react-router-dom';
import { useIsMobile } from '@/lib/hooks';
import { cn } from '@/lib/utils';

interface SearchItem {
  icon: React.ReactNode;
  label: string;
  path: string;
}

const SearchBox: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();
  const inputRef = useRef<HTMLInputElement>(null);
  const isMobile = useIsMobile();

  // Define navigation items
  const navItems: SearchItem[] = [
    { 
      icon: <span className="mr-2 text-primary">📊</span>, 
      label: 'Dashboard', 
      path: ROUTES.DASHBOARD 
    },
    { 
      icon: <span className="mr-2 text-primary">✨</span>, 
      label: 'Generate', 
      path: ROUTES.CAROUSEL_EDITOR 
    },
    { 
      icon: <span className="mr-2 text-primary">🖼️</span>, 
      label: 'Library', 
      path: ROUTES.ALL_CAROUSELS 
    },
    { 
      icon: <span className="mr-2 text-primary">💰</span>, 
      label: 'Pricing', 
      path: ROUTES.PRICING_PLAN 
    },
    { 
      icon: <span className="mr-2 text-primary">📄</span>, 
      label: 'Invoices', 
      path: '/invoices' 
    },
    { 
      icon: <span className="mr-2 text-primary">👤</span>, 
      label: 'Profile', 
      path: ROUTES.ACCOUNT_SETTINGS 
    },
    { 
      icon: <span className="mr-2 text-primary">📝</span>, 
      label: 'Prompt Guide', 
      path: '/prompt-guide' 
    },
    { 
      icon: <span className="mr-2 text-primary">🔗</span>, 
      label: 'Affiliate', 
      path: '/affiliate' 
    },
  ];

  // Filter items based on search query
  const filteredItems = searchQuery
    ? navItems.filter(item => 
        item.label.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : navItems;

  // Handle keyboard events
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen(prev => !prev);
      }
      if (e.key === 'Escape') {
        setOpen(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Focus the input when opening the popover
  useEffect(() => {
    if (open && inputRef.current) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    }
  }, [open]);

  // Handle navigation
  const handleSelect = (item: SearchItem) => {
    navigate(item.path);
    setOpen(false);
    setSearchQuery('');
  };

  return (
    <div className="flex items-center justify-center">
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <button
            className={cn(
              "flex items-center h-10 px-4 py-2 text-sm border border-gray-200 rounded-md bg-gray-50 hover:bg-gray-100 transition-colors text-gray-500",
              isMobile ? "w-64" : "w-96"
            )}
            onClick={() => setOpen(true)}
          >
            <Search className="h-4 w-4 mr-2" />
            <span className="flex-1 text-left truncate">Search...</span>
            <kbd className="ml-auto pointer-events-none inline-flex h-6 select-none items-center gap-1 rounded border bg-gray-100 px-2 font-mono text-[12px] font-medium text-gray-600">
              ESC
            </kbd>
          </button>
        </PopoverTrigger>
        <PopoverContent 
          className={cn(
            "p-0 mr-6",
            isMobile ? "w-64" : "w-96"
          )} 
          align="start" 
          alignOffset={-8} 
          sideOffset={8}
        >
          <Command className="rounded-lg">
            <div className="w-full flex items-center border-b px-3">
              <CommandInput
                ref={inputRef}
                placeholder="Search..."
                className="w-full h-11 py-3 text-sm bg-transparent placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50 border-none outline-none ring-0 focus:outline-none focus:ring-0 focus:border-none"
                value={searchQuery}
                onValueChange={setSearchQuery}
              />
              {searchQuery && (
                <button
                  className="text-muted-foreground hover:text-foreground"
                  onClick={() => setSearchQuery('')}
                >
                  <X className="h-4 w-4" />
                </button>
              )}
              <div className="ml-auto bg-gray-100 rounded px-2 py-0.5 text-xs text-gray-500">
                ESC
              </div>
            </div>
            <CommandList>
              <CommandEmpty>No results found.</CommandEmpty>
              <CommandGroup heading="Navigation">
                {filteredItems.map((item) => (
                  <CommandItem
                    key={item.label}
                    className="flex items-center py-3 px-2 cursor-pointer"
                    onSelect={() => handleSelect(item)}
                  >
                    {item.icon}
                    <span className="truncate">{item.label}</span>
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default SearchBox;
