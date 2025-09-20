import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaEye, FaCode } from 'react-icons/fa';
import signaLogo from '../assets/signa-logo.svg';
import timeCapsuleLogo from '../assets/timecapsule-logo.svg';

/**
 * Interface para projetos
 */
interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  technologies: string[];
  category: string;
  githubUrl: string;
  liveUrl: string;
  featured: boolean;
  status: 'completed' | 'in-progress' | 'planned';
}

/**
 * Componente da seção de projetos
 * Exibe projetos em grid responsivo com filtros e modais detalhados
 */
const Projects: React.FC = () => {
  // Estado para filtro de categorias
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Dados dos projetos
  const projects: Project[] = [
    {
      id: 1,
      title: 'SIGNA - SaaS Platform',
      description: 'Plataforma SaaS para cuidados primários de saúde com catálogo de cursos estilo Netflix e assistentes de IA.',
      longDescription: 'Plataforma SaaS completa para profissionais de saúde com catálogo de cursos estilo Netflix, recursos de comunidade e assistentes de IA especializados. Implementa autenticação Supabase com controle de acesso baseado em funções e RLS em tabelas e buckets de armazenamento.',
      image: signaLogo,
      technologies: ['React', 'TypeScript', 'Vite', 'Tailwind', 'Supabase', 'PostgreSQL'],
      category: 'web',
      githubUrl: 'https://github.com/LucasMachado77/SIGNA',
      liveUrl: 'https://signa-healthcare.vercel.app',
      featured: true,
      status: 'completed',
    },
    {
      id: 2,
      title: 'SIGQ Document Management',
      description: 'Aplicação web para gestão, versionamento e catalogação de documentos institucionais.',
      longDescription: 'Sistema completo de gestão documental desenvolvido em Ruby on Rails para o Instituto Politécnico de Tomar. Inclui CRUD completo, controle de acesso, upload de arquivos e busca eficiente com versionamento de documentos.',
      image: '/api/placeholder/600/400',
      technologies: ['Ruby on Rails', 'PostgreSQL', 'Bootstrap', 'JavaScript'],
      category: 'web',
      githubUrl: 'https://github.com/LucasMachado77/SIGQ',
      liveUrl: 'https://sigq-documentos.herokuapp.com',
      featured: true,
      status: 'completed',
    },
    {
      id: 3,
      title: 'Time Capsule - Mobile App',
      description: 'Aplicativo Android para gravação de fotos geolocalizadas com condições de desbloqueio baseadas em sensores de luz.',
      longDescription: 'Aplicativo móvel desenvolvido em Kotlin para Android que permite gravar fotos geolocalizadas com condições especiais de desbloqueio baseadas em sensores de luz ambiente. Integra câmera, sensores e armazenamento local.',
      image: timeCapsuleLogo,
      technologies: ['Kotlin', 'Android SDK', 'SQLite', 'Camera API', 'Sensors'],
      category: 'mobile',
      githubUrl: 'https://github.com/LucasMachado77/TimeCapsule',
      liveUrl: 'https://play.google.com/store/apps/details?id=com.lucasmachado.timecapsule',
      featured: true,
      status: 'completed',
    },
    {
      id: 4,
      title: 'Complete CRUD - Java',
      description: 'Projeto completo de CRUD em Java demonstrando boas práticas de desenvolvimento e arquitetura.',
      longDescription: 'Sistema CRUD completo desenvolvido em Java seguindo padrões de arquitetura MVC, com interface gráfica Swing, conexão com banco de dados MySQL e implementação de todas as operações básicas de persistência de dados.',
      image: '/api/placeholder/600/400',
      technologies: ['Java', 'Swing', 'MySQL', 'JDBC', 'MVC Pattern'],
      category: 'web',
      githubUrl: 'https://github.com/LucasMachado77/Java-CRUD',
      liveUrl: 'https://github.com/LucasMachado77/Java-CRUD',
      featured: false,
      status: 'completed',
    },
    {
      id: 5,
      title: 'Web Development Projects',
      description: 'Projetos de desenvolvimento web usando HTML e CSS com foco em design responsivo e moderno.',
      longDescription: 'Coleção de projetos web desenvolvidos com HTML e CSS, incluindo landing pages responsivas, portfólios interativos e interfaces modernas com animações CSS e layouts flexbox/grid.',
      image: '/api/placeholder/600/400',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Responsive Design'],
      category: 'web',
      githubUrl: 'https://github.com/LucasMachado77/web-projects',
      liveUrl: 'https://lucasmachado77.github.io/web-projects',
      featured: false,
      status: 'completed',
    },
  ];

  // Categorias disponíveis
  const categories = [
    { id: 'all', name: 'Todos' },
    { id: 'web', name: 'Web' },
    { id: 'mobile', name: 'Mobile' },
  ];

  // Filtrar projetos baseado na categoria selecionada
  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  // Animações
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  // Componente do modal de projeto
  const ProjectModal: React.FC<{ project: Project; onClose: () => void }> = ({ project, onClose }) => (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header do modal */}
          <div className="relative">
            <div className="h-64 bg-gradient-to-r from-primary-500 to-accent-500 rounded-t-2xl"></div>
            <button
              onClick={onClose}
              className="absolute top-4 right-4 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors duration-300"
            >
              <span className="text-xl">×</span>
            </button>
          </div>

          {/* Conteúdo do modal */}
          <div className="p-8">
            <div className="flex items-start justify-between mb-6">
              <div>
                <h3 className="text-3xl font-bold text-primary-900 mb-2">{project.title}</h3>
                <div className="flex items-center gap-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    project.status === 'completed' ? 'bg-green-100 text-green-700' :
                    project.status === 'in-progress' ? 'bg-blue-100 text-blue-700' :
                    'bg-gray-100 text-gray-700'
                  }`}>
                    {project.status === 'completed' ? 'Concluído' :
                     project.status === 'in-progress' ? 'Em Desenvolvimento' : 'Planejado'}
                  </span>
                  <span className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium">
                    {categories.find(cat => cat.id === project.category)?.name}
                  </span>
                </div>
              </div>
            </div>

            <p className="text-lg text-secondary-600 mb-6">{project.longDescription}</p>

            {/* Tecnologias */}
            <div className="mb-8">
              <h4 className="text-lg font-semibold text-primary-900 mb-4">Tecnologias Utilizadas</h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-primary-500/10 text-primary-500 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Links */}
            <div className="flex gap-4">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary inline-flex items-center gap-2"
              >
                <FaGithub className="w-4 h-4" />
                Ver Código
              </a>
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center gap-2"
              >
                <FaExternalLinkAlt className="w-4 h-4" />
                Ver Projeto
              </a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          {/* Cabeçalho da seção */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-primary-500/10 text-primary-500 rounded-full text-sm font-medium mb-4">
              <FaCode className="inline w-4 h-4 mr-2" />
              Projetos
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-primary-900 mb-6">
              Meus Projetos
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Uma seleção dos meus projetos mais recentes e relevantes, 
              demonstrando minha experiência em diversas tecnologias e domínios.
            </p>
          </motion.div>

          {/* Filtros de categoria */}
          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-primary-500 text-white shadow-lg'
                    : 'bg-secondary-100 text-secondary-600 hover:bg-primary-500/10 hover:text-primary-500'
                }`}
              >
                {category.name}
              </button>
            ))}
          </motion.div>

          {/* Grid de projetos */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="wait">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  variants={itemVariants}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ delay: index * 0.1 }}
                  className="group cursor-pointer"
                  onClick={() => setSelectedProject(project)}
                >
                  <div className="card overflow-hidden h-full">
                    {/* Imagem do projeto */}
                    <div className="relative h-48 bg-gradient-to-br from-primary-500 to-accent-500 overflow-hidden">
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        {project.id === 1 || project.id === 3 ? (
                          <img 
                            src={project.image} 
                            alt={project.title}
                            className="w-24 h-24 object-contain"
                          />
                        ) : (
                          <FaEye className="w-12 h-12 text-white opacity-80" />
                        )}
                      </div>
                      {project.featured && (
                        <div className="absolute top-4 left-4 px-3 py-1 bg-accent-500 text-white text-sm font-medium rounded-full">
                          Destaque
                        </div>
                      )}
                    </div>

                    {/* Conteúdo do card */}
                    <div className="p-6">
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="text-xl font-bold text-primary-900 group-hover:text-primary-500 transition-colors duration-300">
                          {project.title}
                        </h3>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          project.status === 'completed' ? 'bg-green-100 text-green-700' :
                          project.status === 'in-progress' ? 'bg-blue-100 text-blue-700' :
                          'bg-gray-100 text-gray-700'
                        }`}>
                          {project.status === 'completed' ? 'Concluído' :
                           project.status === 'in-progress' ? 'Em Dev' : 'Planejado'}
                        </span>
                      </div>

                      <p className="text-secondary-600 mb-4 line-clamp-3">
                        {project.description}
                      </p>

                      {/* Tecnologias */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.slice(0, 3).map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-2 py-1 bg-primary-500/10 text-primary-500 text-xs rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 3 && (
                          <span className="px-2 py-1 bg-secondary-100 text-secondary-600 text-xs rounded-full">
                            +{project.technologies.length - 3}
                          </span>
                        )}
                      </div>

                      {/* Links */}
                      <div className="flex gap-3">
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="flex-1 py-2 px-4 bg-secondary-100 hover:bg-primary-500 hover:text-white text-secondary-600 text-center rounded-lg transition-all duration-300 flex items-center justify-center gap-2"
                        >
                          <FaGithub className="w-4 h-4" />
                          Código
                        </a>
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="flex-1 py-2 px-4 bg-primary-500 hover:bg-primary-600 text-white text-center rounded-lg transition-all duration-300 flex items-center justify-center gap-2"
                        >
                          <FaExternalLinkAlt className="w-4 h-4" />
                          Demo
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Call to action */}
          <motion.div
            variants={itemVariants}
            className="text-center mt-16"
          >
            <p className="text-lg text-secondary-600 mb-6">
              Interessado em ver mais projetos ou colaborar em algo novo?
            </p>
            <motion.a
              href="#contact"
              className="btn-primary inline-flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Vamos Conversar
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Modal de projeto */}
      {selectedProject && (
        <ProjectModal 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      )}
    </section>
  );
};

export default Projects;
