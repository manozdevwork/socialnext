
import React from 'react';
import { Loader2, Grid3X3, List } from 'lucide-react';
import PersonaCard from './PersonaCard';
import PersonaDeleteDialog from './PersonaDeleteDialog';
import PersonaEditDialog from './PersonaEditDialog';
import { Button } from '@/components/ui/enhanced-button';
import { SearchInput } from '@/components/ui/forms/SearchInput';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Text } from '@/components/ui/text';
import { useGetPersonas, useDeletePersona, useCreatePersona, useUpdatePersona, useSetActivePersona } from '@/hooks/usePersonas';
import { usePersonaStore } from '@/stores/usePersonaStore';
import { PersonaFormData } from '@/types/persona';
import { INDUSTRY_OPTIONS, AGE_GROUP_OPTIONS, SENIORITY_LEVEL_OPTIONS } from '@/types/persona';

interface PersonaManagementProps {
  className?: string;
}

const PersonaManagement: React.FC<PersonaManagementProps> = ({ className }) => {
  // React Query hooks
  const { data: personas = [], isLoading, error } = useGetPersonas();
  const createPersona = useCreatePersona();
  const updatePersona = useUpdatePersona();
  const deletePersona = useDeletePersona();
  const setActivePersona = useSetActivePersona();
  
  // Zustand store
  const {
    isCreateDialogOpen,
    isEditDialogOpen,
    isDeleteDialogOpen,
    selectedPersona,
    viewMode,
    searchTerm,
    filterBy,
    openCreateDialog,
    closeCreateDialog,
    openEditDialog,
    closeEditDialog,
    openDeleteDialog,
    closeDeleteDialog,
    setViewMode,
    setSearchTerm,
    setFilter,
  } = usePersonaStore();

  // Filter personas based on search and filters
  const filteredPersonas = personas.filter(persona => {
    const matchesSearch = persona.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         persona.primaryInterests.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         persona.professionalRole.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesIndustry = filterBy.industry === 'all' || persona.industry === filterBy.industry;
    const matchesAgeGroup = filterBy.ageGroup === 'all' || persona.ageGroup === filterBy.ageGroup;
    const matchesSeniority = filterBy.seniorityLevel === 'all' || persona.seniorityLevel === filterBy.seniorityLevel;
    
    return matchesSearch && matchesIndustry && matchesAgeGroup && matchesSeniority;
  });

  // Handlers
  const handleEdit = (personaId: string) => {
    const persona = personas.find(p => p.id === personaId);
    if (persona) {
      openEditDialog(persona);
    }
  };
  
  const handleDelete = (personaId: string) => {
    const persona = personas.find(p => p.id === personaId);
    if (persona) {
      openDeleteDialog(persona);
    }
  };
  
  const handleSetActive = (personaId: string) => {
    setActivePersona.mutate(personaId);
  };
  
  const handleSavePersona = (data: PersonaFormData) => {
    if (selectedPersona?.id) {
      updatePersona.mutate({ id: selectedPersona.id, data }, {
        onSuccess: () => closeEditDialog()
      });
    } else {
      createPersona.mutate(data, {
        onSuccess: () => closeCreateDialog()
      });
    }
  };
  
  const handleConfirmDelete = () => {
    if (selectedPersona?.id) {
      deletePersona.mutate(selectedPersona.id, {
        onSuccess: () => closeDeleteDialog()
      });
    }
  };

  if (error) {
    return (
      <div className="flex items-center justify-center p-8">
        <Text tone="error">Failed to load personas. Please try again.</Text>
      </div>
    );
  }

  return (
    <div className={`w-full ${className}`}>
      {/* Filters and Search */}
      <div className="mb-6 space-y-4">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1">
            <SearchInput
              placeholder="Search personas..."
              value={searchTerm}
              onSearch={setSearchTerm}
              onClear={() => setSearchTerm('')}
            />
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <Select value={filterBy.industry} onValueChange={(value) => setFilter('industry', value)}>
            <SelectTrigger className="w-full sm:w-48">
              <SelectValue placeholder="Filter by industry" />
            </SelectTrigger>
            <SelectContent>
              {INDUSTRY_OPTIONS.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          
          <Select value={filterBy.ageGroup} onValueChange={(value) => setFilter('ageGroup', value)}>
            <SelectTrigger className="w-full sm:w-48">
              <SelectValue placeholder="Filter by age group" />
            </SelectTrigger>
            <SelectContent>
              {AGE_GROUP_OPTIONS.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          
          <Select value={filterBy.seniorityLevel} onValueChange={(value) => setFilter('seniorityLevel', value)}>
            <SelectTrigger className="w-full sm:w-48">
              <SelectValue placeholder="Filter by seniority" />
            </SelectTrigger>
            <SelectContent>
              {SENIORITY_LEVEL_OPTIONS.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Loading State */}
      {isLoading && (
        <div className="flex items-center justify-center p-8">
          <Loader2 className="h-6 w-6 animate-spin mr-2" />
          <Text>Loading personas...</Text>
        </div>
      )}

      {/* Empty State */}
      {!isLoading && filteredPersonas.length === 0 && (
        <div className="flex flex-col items-center justify-center p-8 text-center">
          <Text tone="muted" className="mb-4">
            {searchTerm || filterBy.industry !== 'all' || filterBy.ageGroup !== 'all' || filterBy.seniorityLevel !== 'all'
              ? 'No personas match your search criteria.'
              : 'No personas created yet.'
            }
          </Text>
          <Button onClick={openCreateDialog}>
            Create Your First Persona
          </Button>
        </div>
      )}

      {/* Personas Grid/List */}
      {!isLoading && filteredPersonas.length > 0 && (
        <div className={
          viewMode === 'grid'
            ? 'grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6'
            : 'space-y-4'
        }>
          {filteredPersonas.map((persona) => (
            <PersonaCard 
              key={persona.id}
              persona={persona}
              isActive={persona.isActive}
              onEdit={() => handleEdit(persona.id)}
              onDelete={() => handleDelete(persona.id)}
              onSetActive={() => handleSetActive(persona.id)}
              className={viewMode === 'list' ? 'w-full' : ''}
            />
          ))}
        </div>
      )}
      
      {/* Create/Edit Persona Dialog */}
      <PersonaEditDialog
        isOpen={isEditDialogOpen || isCreateDialogOpen}
        onClose={() => {
          closeEditDialog();
          closeCreateDialog();
        }}
        onSave={handleSavePersona}
        initialData={selectedPersona || undefined}
      />
      
      {/* Delete Persona Dialog */}
      {selectedPersona && (
        <PersonaDeleteDialog
          isOpen={isDeleteDialogOpen}
          onClose={closeDeleteDialog}
          onConfirm={handleConfirmDelete}
          personaData={selectedPersona}
        />
      )}
    </div>
  );
};

export default PersonaManagement;
