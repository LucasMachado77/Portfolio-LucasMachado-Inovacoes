import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaEye, FaCode } from 'react-icons/fa';
import signaLogo from '../assets/signa-logo.svg';
import timeCapsuleLogo from '../assets/timecapsule-logo.svg';
import { useTranslation } from '../hooks/useTranslation';

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
  const { t } = useTranslation();
  
  // Estado para filtro de categorias
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Dados dos projetos usando traduções - recriados quando o idioma muda
  const projects: Project[] = useMemo(() => [
    {
      id: 1,
      title: t.projects.projectDescriptions.SIGNA.title,
      description: t.projects.projectDescriptions.SIGNA.description,
      longDescription: t.projects.projectDescriptions.SIGNA.longDescription,
      image: signaLogo,
      technologies: ['React', 'TypeScript', 'Vite', 'Tailwind', 'Supabase', 'PostgreSQL'],
      category: 'web',
      githubUrl: 'https://github.com/LucasMachado77/SIGNA',
      liveUrl: 'https://signa.dominandoaaps.com.br/',
      featured: true,
      status: 'in-progress',
    },
    {
      id: 3,
      title: t.projects.projectDescriptions.TimeCapsule.title,
      description: t.projects.projectDescriptions.TimeCapsule.description,
      longDescription: t.projects.projectDescriptions.TimeCapsule.longDescription,
      image: timeCapsuleLogo,
      technologies: ['Kotlin', 'Android SDK', 'SQLite', 'Camera API', 'Sensors'],
      category: 'mobile',
      githubUrl: 'https://github.com/LucasMachado77/TimeCapsule',
      liveUrl: 'https://play.google.com/store/apps/details?id=com.lucasmachado.timecapsule',
      featured: true,
      status: 'completed',
    },
    {
      id: 2,
      title: t.projects.projectDescriptions.SIGQ.title,
      description: t.projects.projectDescriptions.SIGQ.description,
      longDescription: t.projects.projectDescriptions.SIGQ.longDescription,
      image: '/api/placeholder/600/400',
      technologies: ['Ruby on Rails', 'PostgreSQL', 'Bootstrap', 'JavaScript'],
      category: 'web',
      githubUrl: 'https://github.com/LucasMachado77/SIGQ',
      liveUrl: 'https://sigq-documentos.vercel.app',
      featured: false,
      status: 'completed',
    },
    {
      id: 4,
      title: t.projects.projectDescriptions.JavaCRUD.title,
      description: t.projects.projectDescriptions.JavaCRUD.description,
      longDescription: t.projects.projectDescriptions.JavaCRUD.longDescription,
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
      title: t.projects.projectDescriptions.WebProjects.title,
      description: t.projects.projectDescriptions.WebProjects.description,
      longDescription: t.projects.projectDescriptions.WebProjects.longDescription,
      image: '/api/placeholder/600/400',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Responsive Design'],
      category: 'web',
      githubUrl: 'https://github.com/LucasMachado77/web-projects',
      liveUrl: 'https://lucasmachado77.github.io/web-projects',
      featured: false,
      status: 'completed',
    },
  ], [t.projects.projectDescriptions]);

  // Categorias disponíveis usando traduções - recriadas quando o idioma muda
  const categories = useMemo(() => [
    { id: 'all', name: t.projects.filters.all },
    { id: 'web', name: t.projects.filters.web },
    { id: 'mobile', name: t.projects.filters.mobile },
  ], [t.projects.filters]);

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
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-2 xs:p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          className="bg-white rounded-xl xs:rounded-2xl max-w-4xl w-full max-h-[95vh] xs:max-h-[90vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header do modal */}
          <div className="relative">
            <div className="h-48 xs:h-56 sm:h-64 bg-gradient-to-r from-primary-500 to-accent-500 rounded-t-xl xs:rounded-t-2xl"></div>
            <button
              onClick={onClose}
              className="absolute top-2 xs:top-3 sm:top-4 right-2 xs:right-3 sm:right-4 w-8 h-8 xs:w-9 xs:h-9 sm:w-10 sm:h-10 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors duration-300"
            >
              <span className="text-lg xs:text-xl">×</span>
            </button>
          </div>

          {/* Conteúdo do modal */}
          <div className="p-4 xs:p-6 sm:p-8">
            <div className="flex flex-col xs:flex-row xs:items-start xs:justify-between mb-4 xs:mb-6">
              <div className="mb-3 xs:mb-0">
                <h3 className="text-xl xs:text-2xl sm:text-3xl font-bold text-primary-900 mb-2">{project.title}</h3>
                <div className="flex flex-col xs:flex-row xs:items-center gap-2 xs:gap-4">
                  <span className={`px-2 xs:px-3 py-1 rounded-full text-xs xs:text-sm font-medium ${
                    project.status === 'completed' ? 'bg-green-100 text-green-700' :
                    project.status === 'in-progress' ? 'bg-blue-100 text-blue-700' :
                    'bg-gray-100 text-gray-700'
                  }`}>
                    {project.status === 'completed' ? t.projects.status.completed :
                     project.status === 'in-progress' ? t.projects.status.inProgress : t.projects.status.planned}
                  </span>
                  <span className="px-2 xs:px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-xs xs:text-sm font-medium">
                    {categories.find(cat => cat.id === project.category)?.name}
                  </span>
                </div>
              </div>
            </div>

            <p className="text-sm xs:text-base sm:text-lg text-secondary-600 mb-4 xs:mb-6">{project.longDescription}</p>

            {/* Tecnologias */}
            <div className="mb-6 xs:mb-8">
              <h4 className="text-base xs:text-lg font-semibold text-primary-900 mb-3 xs:mb-4">Tecnologias Utilizadas</h4>
              <div className="flex flex-wrap gap-1.5 xs:gap-2">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-2 xs:px-3 py-1 bg-primary-500/10 text-primary-500 rounded-full text-xs xs:text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Links */}
            <div className="flex flex-col xs:flex-row gap-3 xs:gap-4">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary inline-flex items-center justify-center gap-2 text-sm xs:text-base"
              >
                <FaGithub className="w-3 h-3 xs:w-4 xs:h-4" />
                {t.projects.buttons.viewCode}
              </a>
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center justify-center gap-2 text-sm xs:text-base"
              >
                <FaExternalLinkAlt className="w-3 h-3 xs:w-4 xs:h-4" />
                {t.projects.buttons.viewLive}
              </a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );

  return (
    <section id="projects" className="py-12 xs:py-16 sm:py-20 bg-white">
      <div className="section-container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          {/* Cabeçalho da seção */}
          <motion.div variants={itemVariants} className="text-center mb-12 xs:mb-16">
            <span className="inline-block px-3 xs:px-4 py-1.5 xs:py-2 bg-primary-500/10 text-primary-500 rounded-full text-xs xs:text-sm font-medium mb-3 xs:mb-4">
              <FaCode className="inline w-3 h-3 xs:w-4 xs:h-4 mr-1.5 xs:mr-2" />
              {t.projects.title}
            </span>
            <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold text-primary-900 mb-4 xs:mb-6">
              {t.projects.subtitle}
            </h2>
            <p className="text-base xs:text-lg sm:text-xl text-secondary-600 max-w-3xl mx-auto px-4 xs:px-0">
              {t.projects.description}
            </p>
          </motion.div>

          {/* Filtros de categoria */}
          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-2 xs:gap-3 sm:gap-4 mb-8 xs:mb-10 sm:mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 xs:px-5 sm:px-6 py-2 xs:py-2.5 sm:py-3 rounded-full font-medium transition-all duration-300 text-sm xs:text-base ${
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
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 xs:gap-6 sm:gap-8">
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
                    <div className="relative h-36 xs:h-40 sm:h-48 bg-gradient-to-br from-primary-500 to-accent-500 overflow-hidden">
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        {project.id === 1 || project.id === 3 ? (
                          <img 
                            src={project.image} 
                            alt={project.title}
                            className="w-16 h-16 xs:w-20 xs:h-20 sm:w-24 sm:h-24 object-contain"
                          />
                        ) : (
                          <FaEye className="w-8 h-8 xs:w-10 xs:h-10 sm:w-12 sm:h-12 text-white opacity-80" />
                        )}
                      </div>
                      {project.featured && (
                        <div className="absolute top-2 xs:top-3 sm:top-4 left-2 xs:left-3 sm:left-4 px-2 xs:px-3 py-0.5 xs:py-1 bg-accent-500 text-white text-xs xs:text-sm font-medium rounded-full">
                          Destaque
                        </div>
                      )}
                    </div>

                    {/* Conteúdo do card */}
                    <div className="p-4 xs:p-5 sm:p-6">
                      <div className="flex items-start justify-between mb-2 xs:mb-3">
                        <h3 className="text-lg xs:text-xl font-bold text-primary-900 group-hover:text-primary-500 transition-colors duration-300">
                          {project.title}
                        </h3>
                        <span className={`px-1.5 xs:px-2 py-0.5 xs:py-1 rounded-full text-xs font-medium ${
                          project.status === 'completed' ? 'bg-green-100 text-green-700' :
                          project.status === 'in-progress' ? 'bg-blue-100 text-blue-700' :
                          'bg-gray-100 text-gray-700'
                        }`}>
                          {project.status === 'completed' ? t.projects.status.completed :
                           project.status === 'in-progress' ? t.projects.status.inProgress : t.projects.status.planned}
                        </span>
                      </div>

                      <p className="text-secondary-600 mb-3 xs:mb-4 line-clamp-3 text-sm xs:text-base">
                        {project.description}
                      </p>

                      {/* Tecnologias */}
                      <div className="flex flex-wrap gap-1.5 xs:gap-2 mb-3 xs:mb-4">
                        {project.technologies.slice(0, 3).map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-1.5 xs:px-2 py-0.5 xs:py-1 bg-primary-500/10 text-primary-500 text-xs rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 3 && (
                          <span className="px-1.5 xs:px-2 py-0.5 xs:py-1 bg-secondary-100 text-secondary-600 text-xs rounded-full">
                            +{project.technologies.length - 3}
                          </span>
                        )}
                      </div>

                      {/* Links */}
                      <div className="flex gap-2 xs:gap-3">
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="flex-1 py-1.5 xs:py-2 px-3 xs:px-4 bg-secondary-100 hover:bg-primary-500 hover:text-white text-secondary-600 text-center rounded-lg transition-all duration-300 flex items-center justify-center gap-1.5 xs:gap-2 text-xs xs:text-sm"
                        >
                          <FaGithub className="w-3 h-3 xs:w-4 xs:h-4" />
                          {t.projects.buttons.viewCode}
                        </a>
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="flex-1 py-1.5 xs:py-2 px-3 xs:px-4 bg-primary-500 hover:bg-primary-600 text-white text-center rounded-lg transition-all duration-300 flex items-center justify-center gap-1.5 xs:gap-2 text-xs xs:text-sm"
                        >
                          <FaExternalLinkAlt className="w-3 h-3 xs:w-4 xs:h-4" />
                          {t.projects.buttons.viewLive}
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
            className="text-center mt-12 xs:mt-16"
          >
            <p className="text-base xs:text-lg text-secondary-600 mb-4 xs:mb-6 px-4 xs:px-0">
              {t.projects.cta.message}
            </p>
            <motion.a
              href="#contact"
              className="btn-primary inline-flex items-center gap-2 text-sm xs:text-base"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {t.projects.cta.button}
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
