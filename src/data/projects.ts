// Projects data based on the original portfolio
export const projects = [
  {
    id: 1,
    title: 'Reposteria AbuShole',
    description: 'Landing page para un negocio de repostería.',
    longDescription:
      'Landing page diseñada para mostrar los productos y servicios de Reposteria AbuShole. Incluye un catálogo de productos, información sobre la empresa y un formulario de contacto.',
    image: '/images/reposteriaabu.jpg',
    imagePreview: '/images/reposteriaabu.jpg', // Imagen optimizada para preview
    imageFull: '/images/reposteriaabu.jpg', // Imagen completa para modal
    url: 'https://proyectofront.vercel.app/',
    technologies: ['Javascript', 'Tailwind', 'Supabase'],
    category: 'Business Website',
    featured: true,
  },
  {
    id: 2,
    title: 'Cabañas Olmué',
    description:
      'Proyecto de arriendo de cabañas para el negocio familiar de mis padres.',
    longDescription:
      'Sitio web completo para la reserva y cotización de cabañas en Olmué. Incluye galería de imágenes, calendario de disponibilidad y sistema de cotizaciones automáticas.',
    image: '/images/cabaniasolmue.jpg',
    imagePreview: '/images/cabaniasolmue.jpg',
    imageFull: '/images/cabaniasolmue.jpg',
    url: 'https://wilsondelcanto.dev/cabaniasOlmue/',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap'],
    category: 'Business Website',
    featured: true,
  },
  {
    id: 3,
    title: 'Portfolio Personal',
    description:
      'Mi portafolio personal desarrollado con tecnologías modernas.',
    longDescription:
      'Portafolio personal que muestra mis habilidades, proyectos y experiencia como desarrollador. Construido con Astro para máximo rendimiento.',
    image: '/images/portfolio.jpg',
    imagePreview: '/images/portfolio.jpg',
    imageFull: '/images/portfolio.jpg',
    url: 'https://wilsondelcanto.dev/',
    technologies: ['Astro', 'TypeScript', 'Tailwind CSS', 'GitHub Actions'],
    category: 'Portfolio',
    featured: false,
  },
  {
    id: 4,
    title: 'PokeGOCL',
    description:
      'Web de registro de entrenadores para la comunidad Pokémon de Limache.',
    longDescription:
      'Plataforma comunitaria para registrar entrenadores de Pokémon GO en Limache. Incluye perfiles de usuarios, estadísticas y eventos locales.',
    image: '/images/pokegoCL.jpg',
    imagePreview: '/images/pokegoCL.jpg',
    imageFull: '/images/pokegoCL.jpg',
    url: 'http://wilsondelcanto.dev/PokeGoCL',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap'],
    category: 'Community Platform',
    featured: false,
  },
  {
    id: 5,
    title: 'E-Commerce',
    description: 'Tienda online desarrollada en React y Firebase.',
    longDescription:
      'E-commerce completo con carrito de compras, procesamiento de pagos, gestión de inventario y panel administrativo. Construido con React y Firebase.',
    image: '/images/wstore.jpg',
    imagePreview: '/images/wstore.jpg',
    imageFull: '/images/wstore.jpg',
    url: 'https://wdelcant.vercel.app/',
    technologies: ['React', 'Firebase', 'Sass', 'JavaScript'],
    category: 'E-Commerce',
    featured: true,
  },
];
