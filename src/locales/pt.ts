/**
 * Traduções em português
 */
export const pt = {
  // Navegação
  nav: {
    home: 'Início',
    about: 'Sobre',
    skills: 'Habilidades',
    projects: 'Projetos',
    contact: 'Contato',
  },

  // Hero Section
  hero: {
    greeting: 'Olá, eu sou',
    name: 'Lucas Machado',
    title: 'Desenvolvedor Full Stack',
    subtitle: 'Desenvolvedor & Engenheiro de Sistemas',
    description: 'Desenvolvedor & Engenheiro de Sistemas com experiência em infraestrutura crítica, automação e desenvolvimento web/mobile. Desenvolvi um SaaS com React, TypeScript, Vite, Tailwind e Supabase/PostgreSQL (RLS, Auth, Storage, Edge Functions); experiência prática com projetos em Ruby on Rails e Kotlin/Android. Capacidade de entregar soluções end-to-end, do backend ao frontend, atuando também em ambientes de alta disponibilidade. Experiência prática com webhooks/integrações de API, Docker e observabilidade. Atualmente a frequentar um Mestrado em Engenharia Informática (Portugal) e à procura de funções de developer para aplicar e expandir estas competências.',
    location: 'Portugal',
    email: 'eng.lucasmachador@gmail.com',
    ctaProjects: 'Ver Meus Projetos',
    ctaCVEN: 'Baixar CV - English',
    ctaCVPT: 'Baixar CV - Português',
  },

  // About Section
  about: {
    title: 'Sobre Mim',
    subtitle: 'Minha Jornada',
    description: 'Uma trajetória dedicada ao desenvolvimento de soluções tecnológicas inovadoras e à constante evolução profissional.',
    
    experience: {
      title: 'Experiência Profissional',
      items: [
        {
          title: 'Analista SysOps',
          company: 'Kyndryl',
          period: 'Dez 2024 - Presente',
          description: 'Monitorei e gerenciei sistemas de produção críticos (Linux, Flexcube, Sifox, VMware, Dynatrace). Automatizei rotinas e tratamento de incidentes usando scripts e IBM Workload Scheduler (IWS).',
          technologies: ['Linux', 'VMware', 'Dynatrace', 'IBM IWS', 'Automação'],
        },
        {
          title: 'Especialista Windows Server',
          company: 'Prefeitura Municipal de Maricá',
          period: 'Mar 2018 - Set 2023',
          description: 'Implementação do ITIL como gerente em 4 processos: Gestão de Solicitações; Gestão de Incidentes; Gestão de Problemas e Service Desk. Administrei ambientes Windows Server e VMware vCenter.',
          technologies: ['Windows Server', 'VMware vCenter', 'ITIL', 'Active Directory', 'Zabbix', 'Grafana'],
        },
        {
          title: 'Técnico de TI',
          company: 'Perfil X Construtora',
          period: 'Jul 2015 - Ago 2017',
          description: 'Forneci suporte ao usuário, manutenção de computadores e administração de rede local.',
          technologies: ['Administração de Rede', 'Suporte ao Usuário', 'Manutenção de Computadores'],
        },
      ],
    },

    education: {
      title: 'Formação Acadêmica',
      items: [
        {
          degree: 'MSc em Engenharia de Computadores (IoT)',
          institution: 'Instituto Politécnico de Tomar, Portugal',
          period: '2024 - 2026',
          description: 'Mestrado em Engenharia de Computadores com foco em IoT e tecnologias emergentes.',
        },
        {
          degree: 'Técnico em TI e Sistemas',
          institution: 'IEFP, Portugal',
          period: '2023 - 2024',
          description: 'Formação técnica em TI e sistemas, preparando para carreira em tecnologia.',
        },
        {
          degree: 'BSc em Engenharia Mecânica',
          institution: 'Estácio, Brasil',
          period: '2016 - 2023',
          description: 'Graduação em Engenharia Mecânica com base sólida em resolução de problemas e análise técnica.',
        },
      ],
    },

    values: {
      title: 'Objetivos & Valores',
      items: [
        {
          title: 'Inovação',
          description: 'Busco constantemente novas tecnologias e metodologias para criar soluções mais eficientes e impactantes.',
        },
        {
          title: 'Excelência',
          description: 'Compromisso com a qualidade do código, seguindo as melhores práticas e padrões da indústria.',
        },
        {
          title: 'Colaboração',
          description: 'Acredito no poder do trabalho em equipe e na importância de compartilhar conhecimento.',
        },
      ],
    },
  },

  // Skills Section
  skills: {
    title: 'Habilidades Técnicas',
    subtitle: 'Tecnologias & Ferramentas',
    description: 'Domínio em diversas tecnologias modernas, sempre atualizado com as últimas tendências e melhores práticas do mercado.',
    
    categories: {
      frontend: 'Frontend',
      backend: 'Backend & Database',
      mobile: 'Mobile & Languages',
      devops: 'DevOps & Infrastructure',
    },

    stats: {
      experience: 'Anos de Experiência',
      projects: 'Projetos Desenvolvidos',
      technologies: 'Tecnologias Dominadas',
      available: 'Disponível para Novos Projetos',
    },

    certifications: {
      title: 'Certificações & Cursos',
    },

    // Descrições das habilidades por categoria
    skillDescriptions: {
      frontend: {
        React: 'Desenvolvimento de interfaces modernas e interativas',
        TypeScript: 'Tipagem estática para JavaScript',
        Vite: 'Build tool moderno e rápido',
        'Tailwind CSS': 'Framework CSS utilitário',
        JavaScript: 'Linguagem principal para desenvolvimento web',
        'HTML/CSS': 'Fundamentos do desenvolvimento web',
      },
      backend: {
        Supabase: 'Backend-as-a-Service com PostgreSQL',
        PostgreSQL: 'Banco de dados relacional robusto',
        MySQL: 'Sistema de gerenciamento de banco de dados',
        'Ruby on Rails': 'Framework web em Ruby',
        'API Integration': 'Integração de APIs e webhooks',
      },
      mobile: {
        Kotlin: 'Desenvolvimento Android nativo',
        Java: 'Linguagem versátil para múltiplas plataformas',
        Ruby: 'Linguagem elegante e produtiva',
        'C/C++': 'Linguagens de programação de sistema',
      },
      devops: {
        Docker: 'Containerização de aplicações',
        Linux: 'Sistema operacional para servidores',
        'Windows Server': 'Administração de servidores Windows',
        'VMware vCenter': 'Virtualização de infraestrutura',
        Dynatrace: 'Monitoramento e observabilidade',
        Zabbix: 'Sistema de monitoramento de rede',
        Grafana: 'Visualização de métricas e dados',
      },
    },
  },

  // Projects Section
  projects: {
    title: 'Meus Projetos',
    subtitle: 'Portfólio de Desenvolvimento',
    description: 'Uma seleção dos meus projetos mais recentes, demonstrando diferentes tecnologias e abordagens.',
    
    filters: {
      all: 'Todos',
      web: 'Web',
      mobile: 'Mobile',
      other: 'Outros',
    },

    buttons: {
      viewCode: 'Ver Código',
      viewLive: 'Ver Projeto',
      close: 'Fechar',
    },

    status: {
      completed: 'Concluído',
      inProgress: 'Em Desenvolvimento',
      planned: 'Planejado',
    },

    // Descrições dos projetos individuais
    projectDescriptions: {
      SIGNA: {
        title: 'SIGNA - SaaS Platform',
        description: 'Plataforma SaaS para cuidados primários de saúde com catálogo de cursos estilo Netflix e assistentes de IA.',
        longDescription: 'Plataforma SaaS completa para profissionais de saúde com catálogo de cursos estilo Netflix, recursos de comunidade e assistentes de IA especializados. Implementa autenticação Supabase com controle de acesso baseado em funções e RLS em tabelas e buckets de armazenamento.',
      },
      TimeCapsule: {
        title: 'Time Capsule - Mobile App',
        description: 'Aplicativo Android para gravação de fotos geolocalizadas com condições de desbloqueio baseadas em sensores de luz.',
        longDescription: 'Aplicativo móvel desenvolvido em Kotlin para Android que permite gravar fotos geolocalizadas com condições especiais de desbloqueio baseadas em sensores de luz ambiente. Integra câmera, sensores e armazenamento local.',
      },
      SIGQ: {
        title: 'SIGQ Document Management',
        description: 'Aplicação web para gestão, versionamento e catalogação de documentos institucionais.',
        longDescription: 'Sistema completo de gestão documental desenvolvido em Ruby on Rails para o Instituto Politécnico de Tomar. Inclui CRUD completo, controle de acesso, upload de arquivos e busca eficiente com versionamento de documentos.',
      },
      JavaCRUD: {
        title: 'Complete CRUD - Java',
        description: 'Projeto completo de CRUD em Java demonstrando boas práticas de desenvolvimento e arquitetura.',
        longDescription: 'Sistema CRUD completo desenvolvido em Java seguindo padrões de arquitetura MVC, com interface gráfica Swing, conexão com banco de dados MySQL e implementação de todas as operações básicas de persistência de dados.',
      },
      WebProjects: {
        title: 'Web Development Projects',
        description: 'Projetos de desenvolvimento web usando HTML e CSS com foco em design responsivo e moderno.',
        longDescription: 'Coleção de projetos web desenvolvidos com HTML e CSS, incluindo landing pages responsivas, portfólios interativos e interfaces modernas com animações CSS e layouts flexbox/grid.',
      },
    },

    // Call-to-action
    cta: {
      message: 'Interessado em ver mais projetos ou colaborar em algo novo?',
      button: 'Vamos Conversar',
    },
  },

  // Contact Section
  contact: {
    title: 'Entre em Contato',
    subtitle: 'Vamos Conversar',
    description: 'Estou sempre aberto a novas oportunidades e projetos interessantes. Entre em contato!',
    
    form: {
      name: 'Nome',
      namePlaceholder: 'Seu nome completo',
      email: 'E-mail',
      emailPlaceholder: 'seu@email.com',
      subject: 'Assunto',
      subjectPlaceholder: 'Qual é o assunto?',
      message: 'Mensagem',
      messagePlaceholder: 'Conte-me sobre seu projeto...',
      required: '*',
      submit: 'Enviar Mensagem',
      submitting: 'Enviando...',
      success: 'Mensagem enviada com sucesso!',
      error: 'Erro ao enviar mensagem. Tente novamente.',
    },

    info: {
      title: 'Informações de Contato',
      subtitle: 'Conecte-se comigo',
    },

    social: {
      title: 'Redes Sociais',
      subtitle: 'Siga-me nas redes sociais',
    },

    // Campos de contato
    fields: {
      email: 'Email',
      phone: 'Telefone',
      location: 'Localização',
    },

    // Disponibilidade
    availability: {
      title: 'Disponibilidade',
      message: 'Atualmente disponível para novos projetos e oportunidades. Resposta em até 24 horas.',
    },

    // Formulário
    formTitle: 'Envie uma Mensagem',
  },

  // Footer
  footer: {
    copyright: '© 2025 Lucas Machado - Inovações Tecnológicas. Todos os direitos reservados.',
    builtWith: 'Construído com React, TypeScript e Tailwind CSS',
    
    // Toggle de tema
    theme: {
      toggle: 'Alternar tema',
      light: 'Modo claro',
      dark: 'Modo escuro',
    },
    
    // Informações da marca
    brand: {
      tagline: 'Inovações Tecnológicas',
      description: 'Desenvolvedor Full Stack apaixonado por criar soluções tecnológicas inovadoras. Transformando ideias em realidade através de código limpo e design moderno.',
    },

    // Navegação
    navigation: {
      title: 'Navegação',
      links: {
        home: 'Início',
        about: 'Sobre',
        skills: 'Habilidades',
        projects: 'Projetos',
        contact: 'Contato',
      },
    },

    // Links úteis
    usefulLinks: {
      title: 'Links Úteis',
      links: {
        blog: 'Blog',
        cvEN: 'Baixar CV-EN',
        cvPT: 'Baixar CV-PT',
        portfolio: 'Portfolio',
        certifications: 'Certificações',
      },
    },

    // Newsletter
    newsletter: {
      title: 'Mantenha-se Atualizado',
      description: 'Receba atualizações sobre novos projetos e tecnologias.',
      placeholder: 'Seu email',
      button: 'Inscrever',
    },

    // Copyright
    madeWith: 'Feito com',
    and: 'e',
    by: 'por Lucas Machado',
  },
};
