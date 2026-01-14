import { Project, Client } from './types';

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Residencia Bosque',
    category: 'Residencial',
    location: 'Valle de Bravo, México',
    year: '2023',
    imageUrl: 'https://picsum.photos/800/600?random=1',
    description: 'Una integración orgánica con el entorno natural, utilizando materiales locales y luz natural.'
  },
  {
    id: '2',
    title: 'Torre Horizon',
    category: 'Comercial',
    location: 'Madrid, España',
    year: '2022',
    imageUrl: 'https://picsum.photos/800/600?random=2',
    description: 'Espacios de oficina modernos y sostenibles con certificación LEED Platinum.'
  },
  {
    id: '3',
    title: 'Museo de Arte Moderno',
    category: 'Cultural',
    location: 'Bogotá, Colombia',
    year: '2024',
    imageUrl: 'https://picsum.photos/800/600?random=3',
    description: 'Estructura de concreto aparente que juega con las sombras y la monumentalidad.'
  },
  {
    id: '4',
    title: 'Casa del Lago',
    category: 'Residencial',
    location: 'Patagonia, Chile',
    year: '2023',
    imageUrl: 'https://picsum.photos/800/600?random=4',
    description: 'Refugio minimalista diseñado para resistir climas extremos sin sacrificar la estética.'
  },
  {
    id: '5',
    title: 'Pabellón Urbano',
    category: 'Público',
    location: 'Buenos Aires, Argentina',
    year: '2021',
    imageUrl: 'https://picsum.photos/800/600?random=5',
    description: 'Intervención urbana para revitalizar el espacio público y fomentar la comunidad.'
  },
  {
    id: '6',
    title: 'Loft Industrial',
    category: 'Interiorismo',
    location: 'New York, USA',
    year: '2022',
    imageUrl: 'https://picsum.photos/800/600?random=6',
    description: 'Renovación de antigua fábrica textil convertida en vivienda de lujo.'
  }
];

export const CLIENTS: Client[] = [
  {
    id: '1',
    name: 'Grupo Inmobiliario Norte',
    logoUrl: 'https://picsum.photos/200/100?random=10',
    testimonial: "La atención al detalle y la visión espacial transformaron completamente nuestro desarrollo."
  },
  {
    id: '2',
    name: 'Fundación Cultura Viva',
    logoUrl: 'https://picsum.photos/200/100?random=11',
    testimonial: "Un socio estratégico que entendió la importancia de la sostenibilidad en nuestro proyecto."
  },
  {
    id: '3',
    name: 'TechSpace Global',
    logoUrl: 'https://picsum.photos/200/100?random=12',
    testimonial: "Diseño innovador que refleja perfectamente nuestra cultura corporativa."
  },
  {
    id: '4',
    name: 'Urban Development Co.',
    logoUrl: 'https://picsum.photos/200/100?random=13',
    testimonial: "Eficiencia, elegancia y funcionalidad en cada entrega."
  }
];

export const NAV_LINKS = [
  { label: 'Inicio', href: '#home' },
  { label: 'Servicios', href: '#services' },
  { label: 'Proyectos', href: '#projects' },
  { label: 'Estudio', href: '#about' },
  { label: 'Clientes', href: '#clients' },
  { label: 'Contacto', href: '#contact' },
];