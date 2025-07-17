import React from 'react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Button } from '@/components/ui/enhanced-button';
import { Check, X } from 'lucide-react';
import { Title } from '@/components/ui/typography';
import { Text } from '@/components/ui/text';

interface SuccessDialogProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  message?: string;
  buttonText?: string;
  onButtonClick?: () => void;
}

const SuccessDialog: React.FC<SuccessDialogProps> = ({
  isOpen,
  onClose,
  title = 'Success!',
  message = 'Persona Deleted Successfully',
  buttonText = 'Return Home',
  onButtonClick
}) => {
  const handleButtonClick = () => {
    onButtonClick ? onButtonClick() : onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[400px] text-center">
        <Button
          variant="ghost"
          size="icon"
          onClick={onClose}
          className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none"
        >
          <X className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </Button>
        
        <div className="flex flex-col items-center justify-center py-6">
          <Title as="h2" size="sm" className="mb-6">{title}</Title>
          
          <div className="w-16 h-16 rounded-full bg-feedback-success-light flex items-center justify-center mb-6">
            <Check className="h-8 w-8 text-feedback-success-DEFAULT" />
          </div>
          
          <Text className="text-neutral-700 mb-8">{message}</Text>
          
          <Button 
            onClick={handleButtonClick}
            variant="primary"
            fullWidth
            className="bg-primary-DEFAULT hover:bg-primary-dark text-white"
          >
            {buttonText}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SuccessDialog;
