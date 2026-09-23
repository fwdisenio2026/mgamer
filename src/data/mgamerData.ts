export interface TechExperience {
  id: string;
  name: string;
  tagline: string;
  description: string;
  badge: string;
  category: 'vr' | 'console' | 'interactive' | 'retro' | 'food';
  features: string[];
}

export const MGAMER_INFO = {
  name: 'MGAMER',
  location: 'DIAG 74 2730 e/22 y 64, La Plata, Buenos Aires',
  city: 'La Plata, Buenos Aires',
  phoneDisplay: '221 2000838',
  phoneRaw: '5492212000838',
  instagramUrl: 'https://www.instagram.com/mgamerlaplata',
  instagramUser: '@mgamerlaplata',
  tagline: 'VIDEOJUEGOS + TECNOLOGÍA = CUMPLES INOLVIDABLES',
  duration: '3 HORAS DE DIVERSIÓN TOTAL',
  targetClaim: '3 HORAS DE DIVERSIÓN PARA CHICOS Y GRANDES',
  capacity: 'Hasta 20 adultos + 20 chicos',
  capacityAdults: 20,
  capacityKids: 20,
  totalCapacity: 40,
  description:
    'Sumergite en un mundo donde los videojuegos, la tecnología y la diversión se unen para vivir un cumpleaños fuera de lo común. En MGAMER vas a encontrar experiencias interactivas, desafíos y mucha adrenalina para que cada festejo sea realmente inolvidable.',
};

export const TECH_EXPERIENCES: TechExperience[] = [
  {
    id: 'vr',
    name: 'Casco de Realidad Virtual',
    tagline: 'Inmersión Total 360°',
    description: 'Experiencia inmersiva de realidad virtual que transporta a los jugadores a nuevos mundos interactivos con gráficos envolventes y sensores 360°.',
    badge: 'VR IMMERSIVE',
    category: 'vr',
    features: ['Visión 360°', 'Sensores de movimiento', 'Juegos de aventura y simulación'],
  },
  {
    id: 'piso-led',
    name: 'Piso Neón Interactivo',
    tagline: 'Movimiento, reflejos y pura adrenalina',
    description: 'Experiencia dinámica de movimiento e interacción corporal sobre superficie luminosa inteligente donde el cuerpo es el control.',
    badge: 'INTERACTIVE FLOOR',
    category: 'interactive',
    features: ['Paneles Neón sensibles', 'Juegos grupales de reflejos', 'Diversión activa sin cables'],
  },
  {
    id: 'playstation',
    name: 'PlayStation 5, 4 y 3',
    tagline: 'La máxima potencia de consolas',
    description: 'Ecosistema completo con PS5, PS4 y PS3 con títulos de carreras, fútbol, aventuras y acción para todas las edades.',
    badge: 'NEXT-GEN CONSOLES',
    category: 'console',
    features: ['PlayStation 5 de última generación', 'PlayStation 4 multijugador', 'PlayStation 3 con joyas clásicas'],
  },
  {
    id: 'nintendo-switch',
    name: 'Nintendo Switch',
    tagline: 'Diversión cooperativa y fiesta grupal',
    description: 'Variedad de juegos dinámicos para disfrutar en grupo, competir amisotamente y compartir carcajadas en simultáneo.',
    badge: 'PARTY MULTIPLAYER',
    category: 'console',
    features: ['Controles Joy-Con compartidos', 'Títulos de fiesta en grupo', 'Ideal para chicos y jóvenes'],
  },
  {
    id: 'retro',
    name: 'Consolas Retro para Adultos',
    tagline: 'Revivan los clásicos que marcaron una época',
    description: 'Espacio dedicado a los nostálgicos y gamers de siempre: arcades, clásicos de 8, 16 y 32 bits para que los grandes también jueguen.',
    badge: 'ARCADE RETRO',
    category: 'retro',
    features: ['Clásicos de los 80s and 90s', 'Controles arcade tradicionales', 'Para papás, tíos y adultos'],
  },
  {
    id: 'comida',
    name: 'Comida, Pizzas & Bebidas',
    tagline: 'Nosotros nos encargamos del menú',
    description: '¡Despreocupate de cocinar o traer viandas! Servimos pizzas calientes, snacks, gaseosas y bebidas tanto para los chicos como para los adultos.',
    badge: 'MENÚ INCLUIDO',
    category: 'food',
    features: ['Pizzas recién horneadas', 'Snacks y bebidas libres', 'Atención para chicos y grandes'],
  },
];

export const GOOGLE_REVIEWS = [
  {
    author: 'Mariana Rossi',
    role: 'Cumpleaños de 10 años',
    rating: 5,
    time: 'Hace 2 semanas',
    content:
      '¡Increíble lugar! Festejamos los 10 de mi hijo y fue una locura total. El piso Neón y la realidad virtual los tuvieron entretenidísimos las 3 horas sin parar. Los coordinadores unos genios y las pizzas riquísimas. 100% recomendado.',
  },
  {
    author: 'Gonzalo Benítez',
    role: 'Cumpleaños de 12 años',
    rating: 5,
    time: 'Hace 1 mes',
    content:
      'Excelente alternativa a los salones tradicionales. Todo impecable, las PS5, los juegos de Nintendo y la zona retro para los adultos nos encantó a los grandes. La exclusividad del salón te da una tranquilidad bárbara.',
  },
  {
    author: 'Valeria Méndez',
    role: 'Cumpleaños de 8 años',
    rating: 5,
    time: 'Hace 3 semanas',
    content:
      'Superó nuestras expectativas. Todos los chicos jugaron a todo ordenados y sin pelearse por las consolas. Súper puntual, la comida caliente y la atención de 10. ¡Los chicos ya quieren volver!',
  },
];

export const PILLARS = [
  {
    title: '3 Horas de Diversión Total',
    desc: 'Un tiempo pensado al detalle para que la adrenalina nunca decaiga y el festejo sea completo.',
    highlight: '180 MINUTOS',
  },
  {
    title: 'Desafíos y Competencias',
    desc: 'Actividades pensadas para competir, superar desafíos y buscar nuevos récords en vivo.',
    highlight: 'NEW RÉCORD!',
  },
  {
    title: 'Juego Libre',
    desc: 'Variedad de juegos y libertad de elección en las diferentes consolas del salón.',
    highlight: 'FREE PLAY',
  },
  {
    title: 'Grupos Organizados',
    desc: 'Dinámica coordinada para que TODOS puedan usar TODO sin esperas interminables.',
    highlight: 'ROTACIÓN TOTAL',
  },
];

export const WHATSAPP_CTA_MESSAGES = {
  reserva: '¡Hola MGAMER! Quiero consultar disponibilidad para reservar una fecha de cumpleaños.',
  consulta: '¡Hola MGAMER! Me gustaría recibir información detallada sobre la propuesta de cumpleaños.',
  festejar: '¡Hola MGAMER! Quiero festejar un cumple con ustedes en La Plata. ¿Cómo coordinamos?',
};
