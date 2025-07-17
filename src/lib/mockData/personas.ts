
import { Persona } from '@/types/persona';

export const mockPersonas: Persona[] = [
  {
    id: '1',
    title: 'Aspiring Data Scientist',
    ageGroup: '25-34',
    primaryInterests: 'AI, Machine Learning, Career Growth',
    professionalRole: 'Junior Developer, Student',
    goals: 'Wants to transition into data science, looking for mentorship and learning opportunities',
    preferredContentTypes: ['tips', 'how-tos', 'case-studies'],
    personalityTraits: ['curious', 'analytical'],
    seniorityLevel: 'entry-level',
    geographicRegion: 'South Asia',
    industry: 'tech',
    isActive: true,
    isPrimary: true,
    remarks: 'Highly engaged with technical content and career advice posts.'
  },
  {
    id: '2',
    title: 'Startup Founders',
    ageGroup: '25-34',
    primaryInterests: 'AI, Growth Hacking, Technology',
    professionalRole: 'CEO, Founder',
    goals: 'Scaling the business and securing funding for growth',
    preferredContentTypes: ['stories', 'case-studies'],
    personalityTraits: ['analytical', 'creative'],
    seniorityLevel: 'executive',
    geographicRegion: 'Silicon Valley',
    industry: 'tech',
    isActive: false,
    isPrimary: false,
    remarks: 'Responds well to entrepreneurship success stories and funding insights.'
  },
  {
    id: '3',
    title: 'Creative Professionals',
    ageGroup: '25-34',
    primaryInterests: 'Design, Art, Photography',
    professionalRole: 'Designer, Photographer',
    goals: 'Building a personal brand and finding freelance opportunities',
    preferredContentTypes: ['stories', 'tips'],
    personalityTraits: ['creative', 'curious'],
    seniorityLevel: 'mid-level',
    geographicRegion: 'New York City',
    industry: 'marketing',
    isActive: false,
    isPrimary: false,
    remarks: 'Values authentic storytelling and creative process insights.'
  },
];
