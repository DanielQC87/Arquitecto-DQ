export interface Project {
  id: string;
  title: string;
  category: string;
  location: string;
  year: string;
  imageUrl: string;
  description: string;
}

export interface Client {
  id: string;
  name: string;
  logoUrl: string;
  testimonial?: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

export enum SectionId {
  HOME = 'home',
  PROJECTS = 'projects',
  ABOUT = 'about',
  CLIENTS = 'clients',
  CONTACT = 'contact',
}