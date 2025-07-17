
import React from 'react';
import { Info, Check, Edit, Trash, Play } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/enhanced-button';
import { Text } from '@/components/ui/text';
import { Badge } from '@/components/ui/badge';

interface PersonaCardProps {
  persona: {
    id: string;
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
    isPrimary: boolean;
    remarks?: string;
  };
  isActive?: boolean;
  onEdit?: () => void;
  onDelete?: () => void;
  onSetActive?: () => void;
  className?: string;
}

interface PersonaFieldProps {
  label: string;
  value: string | string[];
  isArray?: boolean;
}

const PersonaField: React.FC<PersonaFieldProps> = ({ label, value, isArray = false }) => {
  if (!value || (Array.isArray(value) && value.length === 0)) {
    return null;
  }

  return (
    <div className="mb-4">
      <Text variant="caption" className="text-neutral-500 font-semibold text-xs mb-2 uppercase tracking-wide">{label}</Text>
      {isArray && Array.isArray(value) ? (
        <div className="flex flex-wrap gap-1">
          {value.map((item, index) => (
            <Badge key={index} variant="secondary" className="text-xs text-black bg-sky-600/20">
              {item}
            </Badge>
          ))}
        </div>
      ) : (
        <Text className="text-neutral-700 leading-relaxed">{Array.isArray(value) ? value.join(', ') : value}</Text>
      )}
    </div>
  );
};

const PersonaCard: React.FC<PersonaCardProps> = ({ 
  persona,
  isActive = false,
  onEdit,
  onDelete,
  onSetActive,
  className = ""
}) => {
  return (
    <Card className={`
      relative transition-all duration-200
      ${isActive 
        ? 'border-primary-DEFAULT bg-primary-50/30 shadow-md' 
        : 'border-neutral-200 hover:border-neutral-300 hover:shadow-sm'
      }
      ${className}
    `}>
      <CardContent className={`p-6 ${isActive ? 'bg-primary-100' : ''}`}>
        {/* Enhanced Header */}
        <div className={`flex items-start justify-between mb-6 pb-4 ${isActive ? '' : 'border-b border-b-primary-500'}`}>
          <div className="flex-1">
            <div className="flex items-center space-x-3 mb-2">
              {isActive 
                ? <Check className="h-5 w-5 text-primary-600 flex-shrink-0" />
                : <Info className="h-5 w-5 text-neutral-400 flex-shrink-0" />
              }
              <Text variant="h6" className={`font-bold leading-tight ${
                isActive ? 'text-primary-500' : 'text-neutral-800'
              }`}>
                {persona.title}
              </Text>
            </div>
            <div className="flex items-center space-x-2 ml-8">
              {persona.isPrimary && (
                <Badge variant="default" className="text-xs font-medium text-white">Primary</Badge>
              )}
              {isActive && (
                <Badge variant="outline" className="text-xs font-medium border-primary-300 text-primary-500">Active</Badge>
              )}
            </div>
          </div>
          
          <div className="flex space-x-1">
            {!isActive && onSetActive && (
              <Button 
                variant="ghost" 
                size="icon" 
                className="h-8 w-8 hover:bg-neutral-100"
                onClick={onSetActive}
                title="Set as active persona"
              >
                <Play className="h-4 w-4" />
              </Button>
            )}
            <Button 
              variant="ghost" 
              size="icon" 
              className="h-8 w-8 hover:bg-neutral-100"
              onClick={onEdit}
              title="Edit persona"
            >
              <Edit className="h-4 w-4" />
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              className="h-8 w-8 hover:bg-red-50 hover:text-red-600"
              onClick={onDelete}
              title="Delete persona"
            >
              <Trash className="h-4 w-4" />
            </Button>
          </div>
        </div>
        
        {/* Content - Better organized and left-aligned */}
        <div className="space-y-6">
          {/* Basic Info */}
          <div>
            <Text variant="bodySmall" className="text-neutral-600 font-semibold mb-3 text-xs uppercase tracking-wider">Basic Information</Text>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <PersonaField label="Age Group" value={persona.ageGroup} />
              <PersonaField label="Industry" value={persona.industry} />
              <PersonaField label="Seniority Level" value={persona.seniorityLevel} />
              <PersonaField label="Geographic Region" value={persona.geographicRegion} />
            </div>
          </div>
          
          {/* Professional Details */}
          <div>
            <Text variant="bodySmall" className="text-neutral-600 font-semibold mb-3 text-xs uppercase tracking-wider">Professional Details</Text>
            <PersonaField label="Professional Role" value={persona.professionalRole} />
            <PersonaField label="Primary Interests" value={persona.primaryInterests} />
          </div>
          
          {/* Preferences */}
          {(persona.personalityTraits.length > 0 || persona.preferredContentTypes.length > 0) && (
            <div>
              <Text variant="bodySmall" className="text-neutral-600 font-semibold mb-3 text-xs uppercase tracking-wider">Preferences</Text>
              <PersonaField label="Personality Traits" value={persona.personalityTraits} isArray />
              <PersonaField label="Preferred Content Types" value={persona.preferredContentTypes} isArray />
            </div>
          )}
          
          {/* Goals */}
          {persona.goals && (
            <div>
              <Text variant="bodySmall" className="text-neutral-600 font-semibold mb-3 text-xs uppercase tracking-wider">Goals & Objectives</Text>
              <PersonaField label="Goals / Pain Points" value={persona.goals} />
            </div>
          )}

          {/* Remarks */}
          {persona.remarks && (
            <div>
              <Text variant="bodySmall" className="text-neutral-600 font-semibold mb-3 text-xs uppercase tracking-wider">Additional Notes</Text>
              <PersonaField label="Remarks / Notes" value={persona.remarks} />
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default PersonaCard;
