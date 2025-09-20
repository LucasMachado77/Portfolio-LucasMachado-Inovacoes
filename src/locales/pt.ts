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
    ctaCV: 'Baixar CV',
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
  },

  // Footer
  footer: {
    copyright: '© 2025 Lucas Machado. Todos os direitos reservados.',
    builtWith: 'Construído com React, TypeScript e Tailwind CSS',
  },
};
