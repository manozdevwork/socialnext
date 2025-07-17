
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { personaService } from '@/api/personaService';
import { PersonaFormData } from '@/types/persona';
import { toast } from 'sonner';

const QUERY_KEYS = {
  personas: ['personas'] as const,
  persona: (id: string) => ['personas', id] as const,
};

// Get all personas
export const useGetPersonas = () => {
  return useQuery({
    queryKey: QUERY_KEYS.personas,
    queryFn: personaService.getPersonas,
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
};

// Get persona by ID
export const useGetPersona = (id: string) => {
  return useQuery({
    queryKey: QUERY_KEYS.persona(id),
    queryFn: () => personaService.getPersonaById(id),
    enabled: !!id,
  });
};

// Create persona
export const useCreatePersona = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: personaService.createPersona,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: QUERY_KEYS.personas });
      toast.success('Persona created successfully!');
    },
    onError: (error: Error) => {
      console.error('Failed to create persona:', error);
      toast.error('Failed to create persona. Please try again.');
    },
  });
};

// Update persona
export const useUpdatePersona = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: ({ id, data }: { id: string; data: PersonaFormData }) =>
      personaService.updatePersona(id, data),
    onSuccess: (updatedPersona) => {
      queryClient.invalidateQueries({ queryKey: QUERY_KEYS.personas });
      queryClient.setQueryData(QUERY_KEYS.persona(updatedPersona.id), updatedPersona);
      toast.success('Persona updated successfully!');
    },
    onError: (error: Error) => {
      console.error('Failed to update persona:', error);
      toast.error('Failed to update persona. Please try again.');
    },
  });
};

// Delete persona
export const useDeletePersona = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: personaService.deletePersona,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: QUERY_KEYS.personas });
      toast.success('Persona deleted successfully!');
    },
    onError: (error: Error) => {
      console.error('Failed to delete persona:', error);
      toast.error('Failed to delete persona. Please try again.');
    },
  });
};

// Set active persona
export const useSetActivePersona = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: personaService.setActivePersona,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: QUERY_KEYS.personas });
      toast.success('Active persona updated!');
    },
    onError: (error: Error) => {
      console.error('Failed to set active persona:', error);
      toast.error('Failed to update active persona. Please try again.');
    },
  });
};
