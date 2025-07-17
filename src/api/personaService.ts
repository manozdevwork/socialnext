
import { Persona, PersonaFormData } from '@/types/persona';
import { mockPersonas } from '@/mock/personas';

// Simulate a simple in-memory database
let personas: Persona[] = [...mockPersonas];
let nextId = 5;

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const personaService = {
  // Get all personas
  async getPersonas(): Promise<Persona[]> {
    await delay(800); // Simulate network latency
    console.log('API: Fetching personas');
    return [...personas];
  },

  // Get persona by ID
  async getPersonaById(id: string): Promise<Persona | null> {
    await delay(300);
    console.log('API: Fetching persona by ID:', id);
    return personas.find(p => p.id === id) || null;
  },

  // Create new persona
  async createPersona(data: PersonaFormData): Promise<Persona> {
    await delay(1000);
    console.log('API: Creating persona:', data);
    
    const newPersona: Persona = {
      ...data,
      id: String(nextId++),
      isActive: false
    };
    
    // If this is set as primary, unset other primary personas
    if (newPersona.isPrimary) {
      personas = personas.map(p => ({ ...p, isPrimary: false }));
    }
    
    personas.push(newPersona);
    return newPersona;
  },

  // Update existing persona
  async updatePersona(id: string, data: PersonaFormData): Promise<Persona> {
    await delay(800);
    console.log('API: Updating persona:', id, data);
    
    const index = personas.findIndex(p => p.id === id);
    if (index === -1) {
      throw new Error('Persona not found');
    }
    
    // If this is set as primary, unset other primary personas
    if (data.isPrimary) {
      personas = personas.map(p => ({ ...p, isPrimary: false }));
    }
    
    const updatedPersona: Persona = {
      ...personas[index],
      ...data
    };
    
    personas[index] = updatedPersona;
    return updatedPersona;
  },

  // Delete persona
  async deletePersona(id: string): Promise<void> {
    await delay(600);
    console.log('API: Deleting persona:', id);
    
    const index = personas.findIndex(p => p.id === id);
    if (index === -1) {
      throw new Error('Persona not found');
    }
    
    personas.splice(index, 1);
  },

  // Set persona as active (only one can be active)
  async setActivePersona(id: string): Promise<Persona> {
    await delay(400);
    console.log('API: Setting active persona:', id);
    
    // Deactivate all personas
    personas = personas.map(p => ({ ...p, isActive: false }));
    
    // Activate the selected one
    const index = personas.findIndex(p => p.id === id);
    if (index === -1) {
      throw new Error('Persona not found');
    }
    
    personas[index].isActive = true;
    return personas[index];
  }
};
