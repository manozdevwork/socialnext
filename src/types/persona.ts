
export interface Persona {
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
  isActive: boolean;
  isPrimary: boolean;
  remarks?: string;
}

export interface PersonaFormData {
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
}

export const AGE_GROUP_OPTIONS = [
  { value: 'all', label: 'All' },
  { value: '18-24', label: '18–24' },
  { value: '25-34', label: '25–34' },
  { value: '35-44', label: '35–44' },
  { value: '45-54', label: '45–54' },
  { value: '55+', label: '55+' }
];

export const SENIORITY_LEVEL_OPTIONS = [
  { value: 'all', label: 'All' },
  { value: 'student', label: 'Student' },
  { value: 'entry-level', label: 'Entry-Level' },
  { value: 'mid-level', label: 'Mid-Level' },
  { value: 'senior', label: 'Senior' },
  { value: 'executive', label: 'Executive' }
];

export const CONTENT_TYPE_OPTIONS = [
  { value: 'tips', label: 'Tips' },
  { value: 'stories', label: 'Stories' },
  { value: 'how-tos', label: 'How-Tos' },
  { value: 'case-studies', label: 'Case Studies' },
  { value: 'memes', label: 'Memes' }
];

export const PERSONALITY_TRAIT_OPTIONS = [
  { value: 'curious', label: 'Curious' },
  { value: 'analytical', label: 'Analytical' },
  { value: 'creative', label: 'Creative' }
];

export const INDUSTRY_OPTIONS = [
  { value: 'all', label: 'All' },
  { value: 'tech', label: 'Tech' },
  { value: 'education', label: 'Education' },
  { value: 'healthcare', label: 'Healthcare' },
  { value: 'finance', label: 'Finance' },
  { value: 'marketing', label: 'Marketing' },
  { value: 'consulting', label: 'Consulting' },
  { value: 'retail', label: 'Retail' },
  { value: 'manufacturing', label: 'Manufacturing' },
  { value: 'government', label: 'Government' },
  { value: 'nonprofit', label: 'Non-Profit' },
  { value: 'other', label: 'Other' }
];
