// Professional experience data based on Wilson's real career history

export interface Experience {
  id: number;
  title: string;
  company: string;
  companyType: string;
  period: string;
  duration: string;
  location: string;
  workType: string;
  description: string;
  responsibilities: string[];
  technologies?: string[];
  achievements?: string[];
  companyLogo?: string;
  linkedinHelped?: boolean;
  startDate?: string; // Format: YYYY-MM-DD for current positions
  isCurrentPosition?: boolean;
}

// Function to calculate duration from start date to current date
function calculateDuration(startDate: string): string {
  const start = new Date(startDate);
  const now = new Date();

  const totalMonths =
    (now.getFullYear() - start.getFullYear()) * 12 +
    (now.getMonth() - start.getMonth());
  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;

  if (years === 0) {
    return `${months} ${months === 1 ? 'mes' : 'meses'}`;
  } else if (months === 0) {
    return `${years} ${years === 1 ? 'año' : 'años'}`;
  } else {
    return `${years} ${years === 1 ? 'año' : 'años'} ${months} ${
      months === 1 ? 'mes' : 'meses'
    }`;
  }
}

// Function to get dynamic duration
function getDynamicDuration(experience: Experience): string {
  if (experience.isCurrentPosition && experience.startDate) {
    return calculateDuration(experience.startDate);
  }
  return experience.duration;
}

// Function to calculate total years of experience from career start (February 2012)
function calculateTotalExperienceYears(): number {
  const careerStart = new Date('2012-02-01'); // February 2012
  const now = new Date();

  const totalMonths =
    (now.getFullYear() - careerStart.getFullYear()) * 12 +
    (now.getMonth() - careerStart.getMonth());
  return Math.floor(totalMonths / 12);
}

// Function to get total experience as string with + sign
function getTotalExperienceDisplay(): string {
  const years = calculateTotalExperienceYears();
  return `${years}`;
}

export const experiences: Experience[] = [
  {
    id: 1,
    title: 'Problem Management Analyst',
    company: 'Stefanini Group',
    companyType: 'Multinational Technology Company',
    period: 'Oct 2024 - Present',
    duration: '9+ months', // This will be overridden by dynamic calculation
    location: 'Chile, Hybrid',
    workType: 'Full-time',
    description: 'Problem manager corp for the holding company falabella',
    startDate: '2024-10-01', // Start date for automatic calculation
    isCurrentPosition: true,
    responsibilities: [
      'Análisis y gestión de problemas corporativos para el holding Falabella',
      'Coordinación de equipos técnicos para resolución de incidentes críticos',
      'Implementación de mejores prácticas en gestión de problemas',
      'Documentación y seguimiento de casos de alto impacto',
      'Colaboración con diferentes áreas del holding para continuidad del negocio',
    ],
    technologies: [
      'ITIL',
      'ServiceNow',
      'Problem Management',
      'Incident Management',
    ],
    achievements: [
      'Gestión exitosa de problemas críticos del holding',
      'Mejora en tiempos de resolución de incidentes',
    ],
    companyLogo: '/images/stefanini-logo.png',
  },
  {
    id: 2,
    title: 'Field Support',
    company: 'Cencosud S.A.',
    companyType: 'Retail Corporation',
    period: 'Jun 2023 - Sep 2024',
    duration: '1 year 4 months',
    location: 'Coquimbo Region, Chile',
    workType: 'On-site',
    description:
      'IT Support, in charge of the Coquimbo and Copiapo region. Operational continuity in Jumbo, Easy, Paris and Santa Isabel branches.',
    responsibilities: [
      'Soporte IT regional para sucursales de Jumbo, Easy, Paris y Santa Isabel',
      'Garantizar continuidad operacional en tiendas de retail',
      'Mantenimiento preventivo y correctivo de equipos',
      'Gestión de incidentes y resolución de problemas técnicos',
      'Coordinación con equipos centrales para escalamiento de casos',
      'Soporte a usuarios finales y capacitación en sistemas',
    ],
    technologies: [
      'Windows',
      'POS Systems',
      'Network Support',
      'Hardware Maintenance',
      'Remote Support',
    ],
    achievements: [
      'Mantenimiento exitoso de operaciones en múltiples sucursales',
      'Reducción significativa de downtime en sistemas críticos',
      'Mejora en satisfacción de usuarios internos',
    ],
    linkedinHelped: true,
    companyLogo: '/images/cencosud-logo.png',
  },
  {
    id: 3,
    title: 'IT Support Specialist',
    company: 'GlobalData',
    companyType: 'Data Analytics Company',
    period: 'Jan 2023 - Jun 2023',
    duration: '6 months',
    location: 'Coquimbo Region, Chile',
    workType: 'On-site',
    description:
      'IT support for CENCOSUD branches La Serena, Ovalle Y Coquimbo. SW, HW, PR, Networks...',
    responsibilities: [
      'Soporte técnico integral para sucursales CENCOSUD',
      'Mantenimiento de software y hardware',
      'Administración y soporte de redes',
      'Resolución de problemas técnicos en punto de venta',
      'Gestión de impresoras y periféricos',
      'Documentación de incidentes y procedimientos',
    ],
    technologies: [
      'Windows',
      'Network Administration',
      'Hardware Support',
      'POS Systems',
      'Printer Management',
    ],
    achievements: [
      'Soporte eficiente a múltiples sucursales',
      'Mejora en estabilidad de sistemas de red',
      'Optimización de procesos de soporte técnico',
    ],
    companyLogo: '/images/globaldata-logo.png',
  },
  {
    id: 4,
    title: 'Assistant Specialist Technician',
    company: 'TRES60',
    companyType: 'Telecommunications Company',
    period: 'Jul 2022 - Jan 2023',
    duration: '7 months',
    location: 'Santiago Metropolitan Region, Chile',
    workType: 'On-site',
    description:
      'Telecommunications Technical Support, in charge of maintaining Dispatch and CAS equipment, for the Los Bronces site at Anglo American.',
    responsibilities: [
      'Soporte técnico especializado en telecomunicaciones',
      'Mantenimiento de equipos Dispatch y CAS',
      'Gestión técnica para sitio Los Bronces de Anglo American',
      'Monitoreo y mantenimiento preventivo de sistemas críticos',
      'Resolución de incidentes en sistemas de comunicación',
      'Coordinación con equipos de minería para continuidad operacional',
    ],
    technologies: [
      'Telecommunications Systems',
      'Dispatch Equipment',
      'CAS Systems',
      'Radio Communications',
      'Mining Technology',
    ],
    achievements: [
      'Mantenimiento exitoso de sistemas críticos de comunicación',
      'Cero interrupciones en servicios críticos de seguridad',
      'Implementación de mejoras en procesos de mantenimiento',
    ],
    companyLogo: '/images/tres60-logo.png',
  },
];

// Export the function to get experiences with dynamic durations
export function getExperiencesWithDynamicDuration(): Experience[] {
  return experiences.map(exp => ({
    ...exp,
    duration: getDynamicDuration(exp),
  }));
}

// Dynamic statistics with calculated total years
export function getExperienceStats() {
  return {
    totalYears: calculateTotalExperienceYears(),
    totalYearsDisplay: getTotalExperienceDisplay(),
    totalPositions: 10,
    companiesWorked: 9,
    industriesCovered: 3,
    currentPosition: 'Problem Management Analyst',
  };
}

// Static statistics (for backward compatibility)
export const experienceStats = {
  totalYears: 13,
  totalPositions: 10,
  companiesWorked: 9,
  industriesCovered: 3,
  currentPosition: 'Problem Management Analyst',
};

// Categories of experience
export const experienceCategories = [
  {
    name: 'Problem Management',
    icon: '🔧',
    description: 'Análisis y resolución de problemas corporativos',
  },
  {
    name: 'IT Support',
    icon: '💻',
    description: 'Soporte técnico integral y gestión de infraestructura',
  },
  {
    name: 'Retail Operations',
    icon: '🏪',
    description: 'Continuidad operacional en entornos de retail',
  },
  {
    name: 'Telecommunications',
    icon: '📡',
    description: 'Sistemas de comunicación y telecomunicaciones',
  },
];
