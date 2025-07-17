
import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/enhanced-button';
import { Check } from 'lucide-react';
import { Title } from '@/components/ui/typography';
import { Text } from '@/components/ui/text';
import { Badge } from '@/components/ui/badge';

interface PersonaDeleteDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  personaData: {
    title: string;
    ageGroup: string;
    primaryInterests: string;
    professionalRole: string;
    goals: string;
    preferredContentTypes: string[];
    personalityTraits: string[];
    seniorityLevel: string;
    geographicRegion: string;
    industry: string;
  };
}

const PersonaDeleteDialog: React.FC<PersonaDeleteDialogProps> = ({
  isOpen,
  onClose,
  onConfirm,
  personaData
}) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>
            <Title as="h2" size="sm">Delete Persona</Title>
          </DialogTitle>
          <Text tone="muted" className="mt-1">Are you sure you want to delete this persona?</Text>
        </DialogHeader>
        
        <div className="mt-4">
          <div className="bg-primary-DEFAULT text-white p-4 rounded-md flex items-center mb-4">
            <Check className="h-5 w-5 mr-2" />
            <Text className="text-white font-medium">{personaData.title}</Text>
          </div>
          
          <div className="space-y-3">
            {personaData.ageGroup && (
              <div className="flex justify-between">
                <Text tone="muted">Age Group:</Text>
                <Text>{personaData.ageGroup}</Text>
              </div>
            )}
            
            {personaData.industry && (
              <div className="flex justify-between">
                <Text tone="muted">Industry:</Text>
                <Text className="capitalize">{personaData.industry}</Text>
              </div>
            )}
            
            {personaData.professionalRole && (
              <div className="flex justify-between">
                <Text tone="muted">Professional Role:</Text>
                <Text>{personaData.professionalRole}</Text>
              </div>
            )}
            
            {personaData.primaryInterests && (
              <div className="flex justify-between">
                <Text tone="muted">Primary Interests:</Text>
                <Text>{personaData.primaryInterests}</Text>
              </div>
            )}
            
            {personaData.seniorityLevel && (
              <div className="flex justify-between">
                <Text tone="muted">Seniority Level:</Text>
                <Text className="capitalize">{personaData.seniorityLevel.replace('-', ' ')}</Text>
              </div>
            )}
            
            {personaData.geographicRegion && (
              <div className="flex justify-between">
                <Text tone="muted">Geographic Region:</Text>
                <Text>{personaData.geographicRegion}</Text>
              </div>
            )}
            
            {personaData.personalityTraits.length > 0 && (
              <div>
                <Text tone="muted" className="mb-2">Personality Traits:</Text>
                <div className="flex flex-wrap gap-1">
                  {personaData.personalityTraits.map((trait, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {trait}
                    </Badge>
                  ))}
                </div>
              </div>
            )}
            
            {personaData.preferredContentTypes.length > 0 && (
              <div>
                <Text tone="muted" className="mb-2">Preferred Content Types:</Text>
                <div className="flex flex-wrap gap-1">
                  {personaData.preferredContentTypes.map((type, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {type.charAt(0).toUpperCase() + type.slice(1)}
                    </Badge>
                  ))}
                </div>
              </div>
            )}
            
            {personaData.goals && (
              <div>
                <Text tone="muted">Goals / Pain Points:</Text>
                <Text className="mt-1 text-sm">{personaData.goals}</Text>
              </div>
            )}
          </div>
          
          <div className="flex justify-end gap-2 mt-6">
            <Button variant="outlined" onClick={onClose}>
              Cancel
            </Button>
            <Button onClick={onConfirm} variant="primary" className="bg-primary-DEFAULT hover:bg-primary-dark text-white">
              Confirm Delete
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PersonaDeleteDialog;
