export type Language = 'es' | 'en';

export interface Project {
  name: string;
  subtitle: string;
  description: string;
  stack: string[];
  hashtags: string[];
  link: string;
  linkType: 'live' | 'github';
  badge: string;
  bgColor: string;
  imageUrl?: string;
}

export interface Translations {
  lang: Language;
  header: { contact: string };
  hero: { role: string; description: string; available: string };
  skills: { title: string; items: string[] };
  projects: { title: string; live: string; repo: string; items: Project[] };
  contact: {
    title: string;
    subtitle: string;
    response: string;
    emailBtn: string;
    linkedinBtn: string;
  };
}
