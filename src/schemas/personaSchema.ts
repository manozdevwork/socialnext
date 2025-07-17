
import { z } from 'zod';

export const personaSchema = z.object({
  title: z.string().min(1, 'Persona title is required'),
  ageGroup: z.string().min(1, 'Age group is required'),
  primaryInterests: z.string().min(1, 'Primary interests are required'),
  professionalRole: z.string().min(1, 'Professional role is required'),
  goals: z.string().optional(),
  preferredContentTypes: z.array(z.string()).default([]),
  personalityTraits: z.array(z.string()).default([]),
  seniorityLevel: z.string().optional(),
  geographicRegion: z.string().optional(),
  industry: z.string().optional(),
  isPrimary: z.boolean().default(false),
  remarks: z.string().optional(),
});

export type PersonaSchemaType = z.infer<typeof personaSchema>;
