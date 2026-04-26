import { Injectable, signal, computed } from '@angular/core';
import { Language, Translations } from '../models/portfolio.model';

@Injectable({ providedIn: 'root' })
export class TranslationService {
  private lang = signal<Language>('es');

  readonly language = this.lang.asReadonly();

  toggle(): void {
    this.lang.update(l => (l === 'es' ? 'en' : 'es'));
  }

  readonly t = computed<Translations>(() => DATA[this.lang()]);
}

const SKILLS = [
  'Java', 'Spring Boot', 'Spring Security', 'Spring MVC', 'Spring Data',
  'JPA / Hibernate', 'REST APIs', 'JWT', 'WebSockets', 'Maven', 'Microservices',
  'JavaScript', 'Angular', 'HTML5', 'CSS3',
  'MySQL', 'PostgreSQL', 'SQL Server',
  'Docker', 'Nginx', 'Oracle Cloud', 'Azure', 'Git', 'CI/CD',
  'Agile', 'Scrum', 'API-first',
];

const PROJECTS_ES = [
  {
    name: 'BacoDelivery',
    subtitle: 'Plataforma Full Stack de Delivery',
    description:
      'Plataforma de delivery con backend Spring Boot, autenticación JWT, WebSockets en tiempo real, integración de pasarela de pagos y despliegue en Oracle Cloud con Docker y Nginx.',
    stack: ['Java', 'Spring Boot', 'MySQL', 'Docker', 'Oracle Cloud'],
    hashtags: ['#SpringBoot', '#JWT', '#WebSockets', '#Docker', '#OracleCloud'],
    link: 'https://bacodelivery.com/inicio',
    linkType: 'live' as const,
    badge: 'En producción',
    bgColor: '#050e1f',
    imageUrl: 'images/baco-preview.png',
  },
  {
    name: 'DeCasa',
    subtitle: 'Plataforma de Pedidos Online',
    description:
      'Plataforma digital para un catering español artesano en Bruselas. API REST completa con JWT stateless, panel de admin protegido, migraciones Flyway y frontend Angular con standalone components.',
    stack: ['Java', 'Spring Boot', 'Angular', 'MySQL', 'JWT'],
    hashtags: ['#FullStack', '#Angular', '#JWT', '#Flyway', '#SpringBoot'],
    link: 'https://github.com/Albertocaen/DeCasa',
    linkType: 'github' as const,
    badge: 'Full Stack E2E',
    bgColor: '#150a00',
    imageUrl: 'images/decasa.png',
  },
  {
    name: 'AutoComponentGenerator',
    subtitle: 'Herramienta de Generación de Código',
    description:
      'Componente Spring Boot que escanea entidades JPA al arrancar y genera automáticamente DTOs, Mappers, Repositorios, Servicios y Controladores REST usando Java Reflection y JavaPoet.',
    stack: ['Java', 'Spring Boot', 'JavaPoet', 'Reflection', 'JPA'],
    hashtags: ['#CodeGeneration', '#Reflection', '#JavaPoet', '#DeveloperTools'],
    link: 'https://github.com/Albertocaen/AutoComponentGenerator',
    linkType: 'github' as const,
    badge: '5 ficheros por entidad',
    bgColor: '#001510',
    imageUrl: undefined,
  },
];

const PROJECTS_EN = [
  {
    ...PROJECTS_ES[0],
    subtitle: 'Full Stack Delivery Platform',
    description:
      'Delivery platform with Spring Boot backend, JWT authentication, real-time WebSockets, payment gateway integration, and deployment on Oracle Cloud with Docker and Nginx.',
    badge: 'Live in production',
  },
  {
    ...PROJECTS_ES[1],
    subtitle: 'Online Ordering Platform',
    description:
      'Digital platform for a Spanish artisan catering in Brussels. Full REST API with stateless JWT, protected admin panel, Flyway migrations, and Angular frontend with standalone components.',
    badge: 'Full Stack E2E',
  },
  {
    ...PROJECTS_ES[2],
    subtitle: 'Code Generation Tool',
    description:
      'Spring Boot component that scans JPA entities at startup and auto-generates DTOs, Mappers, Repositories, Services and REST Controllers using Java Reflection and JavaPoet.',
    badge: '5 files per entity',
  },
];

const DATA: Record<Language, Translations> = {
  es: {
    lang: 'es',
    header: { contact: 'Contacto' },
    hero: {
      role: 'Backend Developer / Full Stack Developer',
      description:
        'Desarrollador Backend con más de 2 años de experiencia en Java, Spring Boot y arquitecturas orientadas a microservicios y APIs REST. He construido y desplegado aplicaciones full stack desde cero hasta producción real, incluyendo autenticación JWT, WebSockets en tiempo real y Docker.',
      available: 'Abierto a nuevas oportunidades',
    },
    skills: { title: 'Skills', items: SKILLS },
    projects: { title: 'Proyectos Destacados', live: 'Ver Demo', repo: 'Ver Código', items: PROJECTS_ES },
    contact: {
      title: 'Hablemos',
      subtitle: 'Estoy abierto a nuevas oportunidades.',
      response: 'Tiempo de respuesta: < 24 horas.',
      emailBtn: 'Enviar email',
      linkedinBtn: 'Contactar en LinkedIn',
    },
  },
  en: {
    lang: 'en',
    header: { contact: 'Contact' },
    hero: {
      role: 'Backend Developer / Full Stack Developer',
      description:
        'Backend Developer with over 2 years of experience in Java, Spring Boot, and microservice-oriented architectures and REST APIs. I have built and deployed full stack applications from scratch to real production, including JWT authentication, real-time WebSockets, and Docker.',
      available: 'Open to new opportunities',
    },
    skills: { title: 'Skills', items: SKILLS },
    projects: { title: 'Featured Projects', live: 'Live Demo', repo: 'View Code', items: PROJECTS_EN },
    contact: {
      title: "Let's Talk",
      subtitle: "I'm open to new opportunities.",
      response: 'Response time: < 24 hours.',
      emailBtn: 'Send email',
      linkedinBtn: 'Contact on LinkedIn',
    },
  },
};
