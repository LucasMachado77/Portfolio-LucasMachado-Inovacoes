/**
 * English translations
 */
export const en = {
  // Navigation
  nav: {
    home: 'Home',
    about: 'About',
    skills: 'Skills',
    projects: 'Projects',
    contact: 'Contact',
  },

  // Hero Section
  hero: {
    greeting: 'Hello, I am',
    name: 'Lucas Machado',
    title: 'Full Stack Developer',
    subtitle: 'Developer & Systems Engineer',
    description: 'Developer & Systems Engineer with experience in critical infrastructure, automation, and web/mobile development. Built SaaS with React, TypeScript, Vite, Tailwind and Supabase/PostgreSQL (RLS, Auth, Storage, Edge Functions); hands-on with Ruby on Rails and Kotlin/Android projects. Proven ability to deliver end-to-end solutions, from backend to frontend, also operating in high-availability environments. Hands-on experience with webhooks/API integrations, Docker, and observability. Currently pursuing an MSc in Computer Engineering (Portugal) and seeking developer roles to apply and expand these skills.',
    location: 'Portugal',
    email: 'eng.lucasmachador@gmail.com',
    ctaProjects: 'View My Projects',
    ctaCV: 'Download CV',
  },

  // About Section
  about: {
    title: 'About Me',
    subtitle: 'My Journey',
    description: 'A trajectory dedicated to developing innovative technological solutions and constant professional evolution.',
    
    experience: {
      title: 'Professional Experience',
      items: [
        {
          title: 'SysOps Analyst',
          company: 'Kyndryl',
          period: 'Dec 2024 - Present',
          description: 'Monitored and managed critical production systems (Linux, Flexcube, Sifox, VMware, Dynatrace). Automated routines and incident handling using scripting and IBM Workload Scheduler (IWS).',
          technologies: ['Linux', 'VMware', 'Dynatrace', 'IBM IWS', 'Automation'],
        },
        {
          title: 'Windows Server Specialist',
          company: 'Prefeitura Municipal de Maricá',
          period: 'Mar 2018 - Sep 2023',
          description: 'Implementation of ITIL as manager in 4 processes: Request Management; Incident Management; Problem Management and Service Desk. Administered Windows Server and VMware vCenter environments.',
          technologies: ['Windows Server', 'VMware vCenter', 'ITIL', 'Active Directory', 'Zabbix', 'Grafana'],
        },
        {
          title: 'IT Technician',
          company: 'Perfil X Construtora',
          period: 'Jul 2015 - Aug 2017',
          description: 'Provided user support, computer maintenance, and local network administration.',
          technologies: ['Network Administration', 'User Support', 'Computer Maintenance'],
        },
      ],
    },

    education: {
      title: 'Education',
      items: [
        {
          degree: 'MSc in Computer Engineering (IoT)',
          institution: 'Instituto Politécnico de Tomar, Portugal',
          period: '2024 - 2026',
          description: 'Master\'s degree in Computer Engineering with focus on IoT and emerging technologies.',
        },
        {
          degree: 'IT and Systems Technician',
          institution: 'IEFP, Portugal',
          period: '2023 - 2024',
          description: 'Technical training in IT and systems, preparing for a career in technology.',
        },
        {
          degree: 'BSc in Mechanical Engineering',
          institution: 'Estácio, Brazil',
          period: '2016 - 2023',
          description: 'Bachelor\'s degree in Mechanical Engineering with solid foundation in problem solving and technical analysis.',
        },
      ],
    },

    values: {
      title: 'Goals & Values',
      items: [
        {
          title: 'Innovation',
          description: 'I constantly seek new technologies and methodologies to create more efficient and impactful solutions.',
        },
        {
          title: 'Excellence',
          description: 'Commitment to code quality, following industry best practices and standards.',
        },
        {
          title: 'Collaboration',
          description: 'I believe in the power of teamwork and the importance of sharing knowledge.',
        },
      ],
    },
  },

  // Skills Section
  skills: {
    title: 'Technical Skills',
    subtitle: 'Technologies & Tools',
    description: 'Mastery in various modern technologies, always updated with the latest trends and industry best practices.',
    
    categories: {
      frontend: 'Frontend',
      backend: 'Backend & Database',
      mobile: 'Mobile & Languages',
      devops: 'DevOps & Infrastructure',
    },

    stats: {
      experience: 'Years of Experience',
      projects: 'Projects Developed',
      technologies: 'Technologies Mastered',
      available: 'Available for New Projects',
    },

    certifications: {
      title: 'Certifications & Courses',
    },
  },

  // Projects Section
  projects: {
    title: 'My Projects',
    subtitle: 'Development Portfolio',
    description: 'A selection of my most recent projects, demonstrating different technologies and approaches.',
    
    filters: {
      all: 'All',
      web: 'Web',
      mobile: 'Mobile',
      other: 'Others',
    },

    buttons: {
      viewCode: 'View Code',
      viewLive: 'View Project',
      close: 'Close',
    },

    status: {
      completed: 'Completed',
      inProgress: 'In Development',
      planned: 'Planned',
    },
  },

  // Contact Section
  contact: {
    title: 'Get in Touch',
    subtitle: 'Let\'s Talk',
    description: 'I\'m always open to new opportunities and interesting projects. Get in touch!',
    
    form: {
      name: 'Name',
      namePlaceholder: 'Your full name',
      email: 'Email',
      emailPlaceholder: 'your@email.com',
      subject: 'Subject',
      subjectPlaceholder: 'What\'s the subject?',
      message: 'Message',
      messagePlaceholder: 'Tell me about your project...',
      required: '*',
      submit: 'Send Message',
      submitting: 'Sending...',
      success: 'Message sent successfully!',
      error: 'Error sending message. Please try again.',
    },

    info: {
      title: 'Contact Information',
      subtitle: 'Connect with me',
    },

    social: {
      title: 'Social Networks',
      subtitle: 'Follow me on social media',
    },
  },

  // Footer
  footer: {
    copyright: '© 2025 Lucas Machado. All rights reserved.',
    builtWith: 'Built with React, TypeScript and Tailwind CSS',
  },
};
