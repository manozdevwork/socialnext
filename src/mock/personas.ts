
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
    title: 'Healthcare Professional',
    ageGroup: '35-44',
    primaryInterests: 'Patient Care, Medical Technology, Work-Life Balance',
    professionalRole: 'Nurse, Healthcare Administrator',
    goals: 'Improving patient outcomes while managing stress and burnout',
    preferredContentTypes: ['stories', 'tips'],
    personalityTraits: ['curious', 'analytical'],
    seniorityLevel: 'mid-level',
    geographicRegion: 'North America',
    industry: 'healthcare',
    isActive: false,
    isPrimary: false,
    remarks: 'Values work-life balance and patient-centered care approaches.'
  },
  {
    id: '3',
    title: 'Marketing Executive',
    ageGroup: '25-34',
    primaryInterests: 'Digital Marketing, Brand Strategy, Leadership',
    professionalRole: 'Marketing Manager, Brand Manager',
    goals: 'Building effective marketing campaigns and advancing to senior leadership',
    preferredContentTypes: ['case-studies', 'tips', 'stories'],
    personalityTraits: ['creative', 'analytical'],
    seniorityLevel: 'mid-level',
    geographicRegion: 'Europe',
    industry: 'marketing',
    isActive: false,
    isPrimary: false,
    remarks: 'Interested in innovative marketing strategies and leadership development.'
  },
  {
    id: '4',
    title: 'Tech Startup Founder',
    ageGroup: '35-44',
    primaryInterests: 'Entrepreneurship, Innovation, Fundraising',
    professionalRole: 'CEO, Founder',
    goals: 'Scaling the business and securing funding for growth',
    preferredContentTypes: ['stories', 'case-studies'],
    personalityTraits: ['creative', 'curious'],
    seniorityLevel: 'executive',
    geographicRegion: 'Silicon Valley',
    industry: 'tech',
    isActive: false,
    isPrimary: false,
    remarks: 'Focuses on growth strategies and investor relations.'
  }
];
