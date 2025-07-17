
import { create } from 'zustand';
import { Persona } from '@/types/persona';

interface PersonaStore {
  // UI State
  isCreateDialogOpen: boolean;
  isEditDialogOpen: boolean;
  isDeleteDialogOpen: boolean;
  selectedPersona: Persona | null;
  
  // View State
  viewMode: 'grid' | 'list';
  searchTerm: string;
  filterBy: {
    industry: string;
    ageGroup: string;
    seniorityLevel: string;
  };
  
  // Actions
  openCreateDialog: () => void;
  closeCreateDialog: () => void;
  openEditDialog: (persona: Persona) => void;
  closeEditDialog: () => void;
  openDeleteDialog: (persona: Persona) => void;
  closeDeleteDialog: () => void;
  setSelectedPersona: (persona: Persona | null) => void;
  setViewMode: (mode: 'grid' | 'list') => void;
  setSearchTerm: (term: string) => void;
  setFilter: (filterType: keyof PersonaStore['filterBy'], value: string) => void;
  clearFilters: () => void;
  reset: () => void;
}

const initialState = {
  isCreateDialogOpen: false,
  isEditDialogOpen: false,
  isDeleteDialogOpen: false,
  selectedPersona: null,
  viewMode: 'grid' as const,
  searchTerm: '',
  filterBy: {
    industry: 'all',
    ageGroup: 'all',
    seniorityLevel: 'all',
  },
};

export const usePersonaStore = create<PersonaStore>((set, get) => ({
  ...initialState,
  
  // Dialog Actions
  openCreateDialog: () => set({ 
    isCreateDialogOpen: true,
    selectedPersona: null 
  }),
  
  closeCreateDialog: () => set({ 
    isCreateDialogOpen: false,
    selectedPersona: null 
  }),
  
  openEditDialog: (persona) => set({ 
    isEditDialogOpen: true,
    selectedPersona: persona 
  }),
  
  closeEditDialog: () => set({ 
    isEditDialogOpen: false,
    selectedPersona: null 
  }),
  
  openDeleteDialog: (persona) => set({ 
    isDeleteDialogOpen: true,
    selectedPersona: persona 
  }),
  
  closeDeleteDialog: () => set({ 
    isDeleteDialogOpen: false,
    selectedPersona: null 
  }),
  
  setSelectedPersona: (persona) => set({ selectedPersona: persona }),
  
  // View Actions
  setViewMode: (mode) => set({ viewMode: mode }),
  
  setSearchTerm: (term) => set({ searchTerm: term }),
  
  setFilter: (filterType, value) => set((state) => ({
    filterBy: {
      ...state.filterBy,
      [filterType]: value
    }
  })),
  
  clearFilters: () => set({
    searchTerm: '',
    filterBy: {
      industry: 'all',
      ageGroup: 'all',
      seniorityLevel: 'all',
    }
  }),
  
  reset: () => set(initialState),
}));
