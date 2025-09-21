/**
 * Traducciones en español
 */
export const es = {
  // Navegación
  nav: {
    home: 'Inicio',
    about: 'Acerca',
    skills: 'Habilidades',
    projects: 'Proyectos',
    contact: 'Contacto',
  },

  // Hero Section
  hero: {
    greeting: 'Hola, soy',
    name: 'Lucas Machado',
    title: 'Desarrollador Full Stack',
    subtitle: 'Desarrollador e Ingeniero de Sistemas',
    description: 'Desarrollador e Ingeniero de Sistemas con experiencia en infraestructura crítica, automatización y desarrollo web/móvil. Construí SaaS con React, TypeScript, Vite, Tailwind y Supabase/PostgreSQL. Especializado en integraciones webhook/API, Docker y observabilidad.',
    location: 'Portugal',
    email: 'eng.lucasmachador@gmail.com',
    ctaProjects: 'Ver Mis Proyectos',
    ctaCVEN: 'Descargar CV - English',
    ctaCVPT: 'Descargar CV - Portugués',
  },

  // About Section
  about: {
    title: 'Acerca de Mí',
    subtitle: 'Mi Trayectoria',
    description: 'Una trayectoria dedicada al desarrollo de soluciones tecnológicas innovadoras y a la constante evolución profesional.',
    
    experience: {
      title: 'Experiencia Profesional',
      items: [
        {
          title: 'Analista SysOps',
          company: 'Kyndryl',
          period: 'Dic 2024 - Presente',
          description: 'Monitoreé y gestioné sistemas de producción críticos (Linux, Flexcube, Sifox, VMware, Dynatrace). Automaticé rutinas y manejo de incidentes usando scripts e IBM Workload Scheduler (IWS).',
          technologies: ['Linux', 'VMware', 'Dynatrace', 'IBM IWS', 'Automatización'],
        },
        {
          title: 'Especialista Windows Server',
          company: 'Prefeitura Municipal de Maricá',
          period: 'Mar 2018 - Sep 2023',
          description: 'Implementación de ITIL como gerente en 4 procesos: Gestión de Solicitudes; Gestión de Incidentes; Gestión de Problemas y Service Desk. Administré entornos Windows Server y VMware vCenter.',
          technologies: ['Windows Server', 'VMware vCenter', 'ITIL', 'Active Directory', 'Zabbix', 'Grafana'],
        },
        {
          title: 'Técnico de TI',
          company: 'Perfil X Construtora',
          period: 'Jul 2015 - Ago 2017',
          description: 'Proporcioné soporte al usuario, mantenimiento de computadoras y administración de red local.',
          technologies: ['Administración de Red', 'Soporte al Usuario', 'Mantenimiento de Computadoras'],
        },
      ],
    },

    education: {
      title: 'Formación Académica',
      items: [
        {
          degree: 'MSc en Ingeniería de Computadores (IoT)',
          institution: 'Instituto Politécnico de Tomar, Portugal',
          period: '2024 - 2026',
          description: 'Maestría en Ingeniería de Computadores con enfoque en IoT y tecnologías emergentes.',
        },
        {
          degree: 'Técnico en TI y Sistemas',
          institution: 'IEFP, Portugal',
          period: '2023 - 2024',
          description: 'Formación técnica en TI y sistemas, preparando para carrera en tecnología.',
        },
        {
          degree: 'BSc en Ingeniería Mecánica',
          institution: 'Estácio, Brasil',
          period: '2016 - 2023',
          description: 'Licenciatura en Ingeniería Mecánica con base sólida en resolución de problemas y análisis técnico.',
        },
      ],
    },

    values: {
      title: 'Objetivos y Valores',
      items: [
        {
          title: 'Innovación',
          description: 'Busco constantemente nuevas tecnologías y metodologías para crear soluciones más eficientes e impactantes.',
        },
        {
          title: 'Excelencia',
          description: 'Compromiso con la calidad del código, siguiendo las mejores prácticas y estándares de la industria.',
        },
        {
          title: 'Colaboración',
          description: 'Creo en el poder del trabajo en equipo y en la importancia de compartir conocimiento.',
        },
      ],
    },
  },

  // Skills Section
  skills: {
    title: 'Habilidades Técnicas',
    subtitle: 'Tecnologías y Herramientas',
    description: 'Dominio en diversas tecnologías modernas, siempre actualizado con las últimas tendencias y mejores prácticas del mercado.',
    
    categories: {
      frontend: 'Frontend',
      backend: 'Backend y Base de Datos',
      mobile: 'Móvil y Lenguajes',
      devops: 'DevOps e Infraestructura',
    },

    stats: {
      experience: 'Años de Experiencia',
      projects: 'Proyectos Desarrollados',
      technologies: 'Tecnologías Dominadas',
      available: 'Disponible para Nuevos Proyectos',
    },

    certifications: {
      title: 'Certificaciones y Cursos',
    },

    // Descripciones de habilidades por categoría
    skillDescriptions: {
      frontend: {
        React: 'Desarrollo de interfaces modernas e interactivas',
        TypeScript: 'Tipado estático para JavaScript',
        Vite: 'Herramienta de construcción moderna y rápida',
        'Tailwind CSS': 'Framework CSS utilitario',
        JavaScript: 'Lenguaje principal para desarrollo web',
        'HTML/CSS': 'Fundamentos del desarrollo web',
      },
      backend: {
        Supabase: 'Backend-as-a-Service con PostgreSQL',
        PostgreSQL: 'Base de datos relacional robusta',
        MySQL: 'Sistema de gestión de base de datos',
        'Ruby on Rails': 'Framework web en Ruby',
        'API Integration': 'Integración de APIs y webhooks',
      },
      mobile: {
        Kotlin: 'Desarrollo Android nativo',
        Java: 'Lenguaje versátil para múltiples plataformas',
        Ruby: 'Lenguaje elegante y productivo',
        'C/C++': 'Lenguajes de programación de sistema',
      },
      devops: {
        Docker: 'Containerización de aplicaciones',
        Linux: 'Sistema operativo para servidores',
        'Windows Server': 'Administración de servidores Windows',
        'VMware vCenter': 'Virtualización de infraestructura',
        Dynatrace: 'Monitoreo y observabilidad',
        Zabbix: 'Sistema de monitoreo de red',
        Grafana: 'Visualización de métricas y datos',
      },
    },
  },

  // Projects Section
  projects: {
    title: 'Mis Proyectos',
    subtitle: 'Portafolio de Desarrollo',
    description: 'Una selección de mis proyectos más recientes, demostrando diferentes tecnologías y enfoques.',
    
    filters: {
      all: 'Todos',
      web: 'Web',
      mobile: 'Móvil',
      other: 'Otros',
    },

    buttons: {
      viewCode: 'Ver Código',
      viewLive: 'Ver Proyecto',
      close: 'Cerrar',
    },

    status: {
      completed: 'Completado',
      inProgress: 'En Desarrollo',
      planned: 'Planeado',
    },

    // Descripciones de proyectos individuales
    projectDescriptions: {
      SIGNA: {
        title: 'SIGNA - Plataforma SaaS',
        description: 'Plataforma SaaS para atención primaria de salud con catálogo de cursos estilo Netflix y asistentes de IA.',
        longDescription: 'Plataforma SaaS completa para profesionales de la salud con catálogo de cursos estilo Netflix, características de comunidad y asistentes de IA especializados. Implementa autenticación Supabase con control de acceso basado en roles y RLS en tablas y buckets de almacenamiento.',
      },
      TimeCapsule: {
        title: 'Time Capsule - App Móvil',
        description: 'Aplicación Android para grabación de fotos geolocalizadas con condiciones de desbloqueo basadas en sensores de luz.',
        longDescription: 'Aplicación móvil desarrollada en Kotlin para Android que permite grabar fotos geolocalizadas con condiciones especiales de desbloqueo basadas en sensores de luz ambiente. Integra cámara, sensores y almacenamiento local.',
      },
      SIGQ: {
        title: 'SIGQ Gestión de Documentos',
        description: 'Aplicación web para gestión, versionado y catalogación de documentos institucionales.',
        longDescription: 'Sistema completo de gestión documental desarrollado en Ruby on Rails para el Instituto Politécnico de Tomar. Incluye CRUD completo, control de acceso, carga de archivos y búsqueda eficiente con versionado de documentos.',
      },
      JavaCRUD: {
        title: 'CRUD Completo - Java',
        description: 'Proyecto completo de CRUD en Java demostrando buenas prácticas de desarrollo y arquitectura.',
        longDescription: 'Sistema CRUD completo desarrollado en Java siguiendo patrones de arquitectura MVC, con interfaz gráfica Swing, conexión a base de datos MySQL e implementación de todas las operaciones básicas de persistencia de datos.',
      },
      WebProjects: {
        title: 'Proyectos de Desarrollo Web',
        description: 'Proyectos de desarrollo web usando HTML y CSS con enfoque en diseño responsivo y moderno.',
        longDescription: 'Colección de proyectos web desarrollados con HTML y CSS, incluyendo landing pages responsivas, portafolios interactivos e interfaces modernas con animaciones CSS y layouts flexbox/grid.',
      },
    },

    // Call-to-action
    cta: {
      message: '¿Interesado en ver más proyectos o colaborar en algo nuevo?',
      button: 'Hablemos',
    },
  },

  // Contact Section
  contact: {
    title: 'Ponte en Contacto',
    subtitle: 'Hablemos',
    description: 'Siempre estoy abierto a nuevas oportunidades y proyectos interesantes. ¡Ponte en contacto!',
    
    form: {
      name: 'Nombre',
      namePlaceholder: 'Tu nombre completo',
      email: 'Correo',
      emailPlaceholder: 'tu@email.com',
      subject: 'Asunto',
      subjectPlaceholder: '¿Cuál es el asunto?',
      message: 'Mensaje',
      messagePlaceholder: 'Cuéntame sobre tu proyecto...',
      required: '*',
      submit: 'Enviar Mensaje',
      submitting: 'Enviando...',
      success: '¡Mensaje enviado con éxito!',
      error: 'Error al enviar mensaje. Inténtalo de nuevo.',
    },

    info: {
      title: 'Información de Contacto',
      subtitle: 'Conéctate conmigo',
    },

    social: {
      title: 'Redes Sociales',
      subtitle: 'Sígueme en redes sociales',
    },

    // Campos de contacto
    fields: {
      email: 'Correo',
      phone: 'Teléfono',
      location: 'Ubicación',
    },

    // Disponibilidad
    availability: {
      title: 'Disponibilidad',
      message: 'Actualmente disponible para nuevos proyectos y oportunidades. Respuesta en hasta 24 horas.',
    },

    // Formulario
    formTitle: 'Enviar un Mensaje',
  },

  // Footer
  footer: {
    copyright: '© 2025 Lucas Machado - Inovações Tecnológicas. Todos los derechos reservados.',
    builtWith: 'Construido con React, TypeScript y Tailwind CSS',
    
    // Información de la marca
    brand: {
      tagline: 'Innovaciones Tecnológicas',
      description: 'Desarrollador Full Stack apasionado por crear soluciones tecnológicas innovadoras. Transformando ideas en realidad a través de código limpio y diseño moderno.',
    },

    // Navegación
    navigation: {
      title: 'Navegación',
      links: {
        home: 'Inicio',
        about: 'Acerca',
        skills: 'Habilidades',
        projects: 'Proyectos',
        contact: 'Contacto',
      },
    },

    // Enlaces útiles
    usefulLinks: {
      title: 'Enlaces Útiles',
      links: {
        blog: 'Blog',
        cvEN: 'Descargar CV-EN',
        cvPT: 'Descargar CV-PT',
        portfolio: 'Portafolio',
        certifications: 'Certificaciones',
      },
    },

    // Newsletter
    newsletter: {
      title: 'Mantente Actualizado',
      description: 'Recibe actualizaciones sobre nuevos proyectos y tecnologías.',
      placeholder: 'Tu correo',
      button: 'Suscribirse',
    },

    // Copyright
    madeWith: 'Hecho con',
    and: 'y',
    by: 'por Lucas Machado',
  },
};
