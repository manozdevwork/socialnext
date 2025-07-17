
import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { cn } from '@/lib/utils';
import { useNavigate } from 'react-router-dom';

interface ProfileCompletionBannerProps {
  className?: string;
}

const BANNER_STORAGE_KEY = 'profile-banner-dismissed';
const BANNER_EXPIRY_HOURS = 12;

const ProfileCompletionBanner = ({ className }: ProfileCompletionBannerProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const checkBannerVisibility = () => {
      const storedInfo = localStorage.getItem(BANNER_STORAGE_KEY);
      
      if (!storedInfo) {
        setIsVisible(true);
        return;
      }
      
      try {
        const { timestamp } = JSON.parse(storedInfo);
        const currentTime = new Date().getTime();
        const hoursSinceDismissed = (currentTime - timestamp) / (1000 * 60 * 60);
        
        if (hoursSinceDismissed >= BANNER_EXPIRY_HOURS) {
          setIsVisible(true);
        }
      } catch (error) {
        setIsVisible(true);
      }
    };
    
    checkBannerVisibility();
  }, []);

  const handleDismiss = () => {
    const dismissInfo = {
      timestamp: new Date().getTime()
    };
    localStorage.setItem(BANNER_STORAGE_KEY, JSON.stringify(dismissInfo));
    setIsVisible(false);
  };

  const handleCompleteProfile = () => {
    navigate('/account/personal');
    handleDismiss();
  };

  if (!isVisible) return null;

  return (
    <Alert 
      className={cn(
        "relative w-full bg-primary text-primary-foreground border-none shadow-md py-3 px-4",
        className
      )}
    >
      <div className="container mx-auto flex items-center justify-between">
        <AlertDescription className="text-sm font-medium">
          Complete your profile and start using all features
        </AlertDescription>
        <div className="flex items-center gap-3">
          <Button 
            variant="outline" 
            className="h-8 bg-transparent border-white text-white hover:bg-white hover:text-primary"
            onClick={handleCompleteProfile}
          >
            Complete Now
          </Button>
          <Button 
            variant="ghost" 
            size="icon" 
            className="h-6 w-6 text-white hover:bg-primary-foreground/20 hover:text-white"
            onClick={handleDismiss}
          >
            <X className="h-4 w-4" />
            <span className="sr-only">Dismiss</span>
          </Button>
        </div>
      </div>
    </Alert>
  );
};

export default ProfileCompletionBanner;
