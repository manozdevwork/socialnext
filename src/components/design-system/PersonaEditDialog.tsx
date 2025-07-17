
import React, { useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/enhanced-button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from '@/components/ui/form';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { TextArea } from '@/components/ui/forms/TextArea';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Text } from '@/components/ui/text';
import { 
  PersonaFormData, 
  AGE_GROUP_OPTIONS, 
  SENIORITY_LEVEL_OPTIONS, 
  CONTENT_TYPE_OPTIONS,
  PERSONALITY_TRAIT_OPTIONS,
  INDUSTRY_OPTIONS 
} from '@/types/persona';
import { personaSchema, PersonaSchemaType } from '@/schemas/personaSchema';

interface PersonaEditDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (data: PersonaFormData) => void;
  initialData?: Partial<PersonaFormData>;
}

const PersonaEditDialog: React.FC<PersonaEditDialogProps> = ({
  isOpen,
  onClose,
  onSave,
  initialData
}) => {
  const isEditMode = !!initialData?.title;
  
  const form = useForm<PersonaSchemaType>({
    resolver: zodResolver(personaSchema),
    defaultValues: {
      title: '',
      ageGroup: '',
      primaryInterests: '',
      professionalRole: '',
      goals: '',
      preferredContentTypes: [],
      personalityTraits: [],
      seniorityLevel: '',
      geographicRegion: '',
      industry: '',
      isPrimary: false,
      remarks: ''
    }
  });

  // Reset form when dialog opens/closes or data changes
  useEffect(() => {
    if (isOpen) {
      if (isEditMode && initialData) {
        // For edit mode, populate with existing data
        console.log('Edit mode - populating form with:', initialData);
        form.reset({
          title: initialData.title || '',
          ageGroup: initialData.ageGroup || '',
          primaryInterests: initialData.primaryInterests || '',
          professionalRole: initialData.professionalRole || '',
          goals: initialData.goals || '',
          preferredContentTypes: initialData.preferredContentTypes || [],
          personalityTraits: initialData.personalityTraits || [],
          seniorityLevel: initialData.seniorityLevel || '',
          geographicRegion: initialData.geographicRegion || '',
          industry: initialData.industry || '',
          isPrimary: initialData.isPrimary || false,
          remarks: initialData.remarks || ''
        });
      } else {
        // For create mode, reset to empty form
        console.log('Create mode - resetting form');
        form.reset({
          title: '',
          ageGroup: '',
          primaryInterests: '',
          professionalRole: '',
          goals: '',
          preferredContentTypes: [],
          personalityTraits: [],
          seniorityLevel: '',
          geographicRegion: '',
          industry: '',
          isPrimary: false,
          remarks: ''
        });
      }
    }
  }, [isOpen, isEditMode, initialData, form]);

  const handleSubmit = (data: PersonaSchemaType) => {
    console.log('Form submission data:', data);
    console.log('Is edit mode:', isEditMode);
    onSave(data as PersonaFormData);
  };

  const handleClose = () => {
    form.reset();
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-[700px] max-h-[90vh] overflow-y-auto">
        <DialogHeader className='border-b border-primary-200 pb-2'>
          <DialogTitle asChild>
            <Text variant="h4" className="text-neutral-800">
              {isEditMode ? 'Edit Persona' : 'Create New Persona'}
            </Text>
          </DialogTitle>
          <Text tone="muted" className="mt-1">
            Define your audience persona to create more targeted LinkedIn content
          </Text>
        </DialogHeader>
        
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
            {/* Basic Information Section */}
            <div>
              <Text variant="h6" className="mb-4">Basic Information</Text>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="title"
                  render={({ field }) => (
                    <FormItem className="md:col-span-2">
                      <FormLabel>Persona Title *</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g., Aspiring Data Scientist" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="ageGroup"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Age Group *</FormLabel>
                      <Select onValueChange={field.onChange} value={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select age group" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {AGE_GROUP_OPTIONS.filter(option => option.value !== 'all').map((option) => (
                            <SelectItem key={option.value} value={option.value}>
                              {option.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="industry"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Industry</FormLabel>
                      <Select onValueChange={field.onChange} value={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select industry" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {INDUSTRY_OPTIONS.filter(option => option.value !== 'all').map((option) => (
                            <SelectItem key={option.value} value={option.value}>
                              {option.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="seniorityLevel"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Seniority Level</FormLabel>
                      <Select onValueChange={field.onChange} value={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select seniority" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {SENIORITY_LEVEL_OPTIONS.filter(option => option.value !== 'all').map((option) => (
                            <SelectItem key={option.value} value={option.value}>
                              {option.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="geographicRegion"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Geographic Region</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g., South Asia, Europe" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            {/* Professional Details Section */}
            <div>
              <Text variant="h6" className="mb-4">Professional Details</Text>
              <div className="grid grid-cols-1 gap-4">
                <FormField
                  control={form.control}
                  name="professionalRole"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Professional Role / Domain *</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g., Software Developer, Nurse, Marketing Executive" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="primaryInterests"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Primary Interests *</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g., AI, career growth, mental health" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="goals"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Goals / Pain Points</FormLabel>
                      <FormControl>
                        <TextArea 
                          placeholder="e.g., Wants to break into tech, Struggles with work-life balance"
                          className="min-h-[100px]"
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            {/* Preferences Section */}
            <div>
              <Text variant="h6" className="mb-4">Content Preferences</Text>
              <div className="space-y-4">
                <FormField
                  control={form.control}
                  name="preferredContentTypes"
                  render={() => (
                    <FormItem>
                      <FormLabel>Preferred Content Types</FormLabel>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                        {CONTENT_TYPE_OPTIONS.map((option) => {
                          const isChecked = form.watch('preferredContentTypes').includes(option.value);
                          return (
                            <div key={option.value} className="flex items-center space-x-2">
                              <Checkbox
                                id={option.value}
                                checked={isChecked}
                                onCheckedChange={(checked) => {
                                  const current = form.getValues('preferredContentTypes');
                                  if (checked) {
                                    form.setValue('preferredContentTypes', [...current, option.value]);
                                  } else {
                                    form.setValue('preferredContentTypes', current.filter(type => type !== option.value));
                                  }
                                  form.trigger('preferredContentTypes');
                                }}
                              />
                              <label htmlFor={option.value} className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                {option.label}
                              </label>
                            </div>
                          );
                        })}
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="personalityTraits"
                  render={() => (
                    <FormItem>
                      <FormLabel>Personality Traits</FormLabel>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                        {PERSONALITY_TRAIT_OPTIONS.map((option) => {
                          const isChecked = form.watch('personalityTraits').includes(option.value);
                          return (
                            <div key={option.value} className="flex items-center space-x-2">
                              <Checkbox
                                id={`trait-${option.value}`}
                                checked={isChecked}
                                onCheckedChange={(checked) => {
                                  const current = form.getValues('personalityTraits');
                                  if (checked) {
                                    form.setValue('personalityTraits', [...current, option.value]);
                                  } else {
                                    form.setValue('personalityTraits', current.filter(trait => trait !== option.value));
                                  }
                                  form.trigger('personalityTraits');
                                }}
                              />
                              <label htmlFor={`trait-${option.value}`} className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                {option.label}
                              </label>
                            </div>
                          );
                        })}
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            {/* Remarks Section */}
            <div>
              <FormField
                control={form.control}
                name="remarks"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Remarks / Notes</FormLabel>
                    <FormControl>
                      <TextArea 
                        placeholder="Add any additional notes or remarks about this persona..."
                        className="min-h-[80px]"
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            
            <div className="flex items-center space-x-2">
              <FormField
                control={form.control}
                name="isPrimary"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel>Make This Primary Persona</FormLabel>
                    </div>
                  </FormItem>
                )}
              />
            </div>
            
            <div className="flex justify-end gap-2">
              <Button type="button" variant="outlined" onClick={handleClose}>
                Cancel
              </Button>
              <Button type="submit" variant="primary" className="bg-primary hover:bg-primary-dark text-white">
                {isEditMode ? 'Update Persona' : 'Create Persona'}
              </Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default PersonaEditDialog;
