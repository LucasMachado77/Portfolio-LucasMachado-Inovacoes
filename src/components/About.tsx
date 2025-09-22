import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaBriefcase, FaAward, FaCode } from 'react-icons/fa';
import { useTranslation } from '../hooks/useTranslation';

/**
 * Interface para experiência profissional
 */
interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
  technologies: string[];
}

/**
 * Interface para formação acadêmica
 */
interface Education {
  degree: string;
  institution: string;
  period: string;
  description: string;
}

/**
 * Componente da seção Sobre Mim
 * Apresenta perfil acadêmico, experiência profissional e objetivos
 */
const About: React.FC = () => {
  const { t } = useTranslation();

  // Dados de experiência profissional usando traduções - recriados quando o idioma muda
  const experiences: Experience[] = useMemo(() => t.about.experience.items, [t.about.experience.items]);

  // Dados de formação acadêmica usando traduções - recriados quando o idioma muda
  const education: Education[] = useMemo(() => t.about.education.items, [t.about.education.items]);

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

  return (
    <section id="about" className="py-12 xs:py-16 sm:py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
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
              {t.about.title}
            </span>
            <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold text-primary-900 dark:text-white mb-4 xs:mb-6">
              {t.about.subtitle}
            </h2>
            <p className="text-base xs:text-lg sm:text-xl text-secondary-600 dark:text-gray-300 max-w-3xl mx-auto px-4 xs:px-0">
              {t.about.description}
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 xs:gap-10 sm:gap-12">
            {/* Experiência Profissional */}
            <motion.div variants={itemVariants}>
              <div className="flex items-center gap-2 xs:gap-3 mb-6 xs:mb-8">
                <div className="w-10 h-10 xs:w-12 xs:h-12 bg-primary-500 rounded-lg flex items-center justify-center">
                  <FaBriefcase className="w-5 h-5 xs:w-6 xs:h-6 text-white" />
                </div>
                <h3 className="text-xl xs:text-2xl font-bold text-primary-900 dark:text-white">{t.about.experience.title}</h3>
              </div>
              
              <div className="space-y-4 xs:space-y-6">
                {experiences.map((exp, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 }}
                    className="relative pl-6 xs:pl-8 border-l-2 border-primary-200 hover:border-primary-500 transition-colors duration-300"
                  >
                    <div className="absolute -left-1.5 xs:-left-2 top-0 w-3 h-3 xs:w-4 xs:h-4 bg-primary-500 rounded-full"></div>
                    <div className="card p-4 xs:p-6 dark:bg-gray-800">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2 xs:mb-3">
                        <h4 className="text-base xs:text-lg font-semibold text-primary-900 dark:text-white">{exp.title}</h4>
                        <span className="text-xs xs:text-sm text-primary-500 font-medium">{exp.period}</span>
                      </div>
                      <p className="text-primary-600 dark:text-primary-400 font-medium mb-2 xs:mb-3 text-sm xs:text-base">{exp.company}</p>
                      <p className="text-secondary-600 dark:text-gray-300 mb-3 xs:mb-4 text-sm xs:text-base">{exp.description}</p>
                      <div className="flex flex-wrap gap-1.5 xs:gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-2 xs:px-3 py-0.5 xs:py-1 bg-primary-500/20 text-primary-500 text-xs xs:text-sm rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Formação Acadêmica */}
            <motion.div variants={itemVariants}>
              <div className="flex items-center gap-2 xs:gap-3 mb-6 xs:mb-8">
                <div className="w-10 h-10 xs:w-12 xs:h-12 bg-accent-500 rounded-lg flex items-center justify-center">
                  <FaGraduationCap className="w-5 h-5 xs:w-6 xs:h-6 text-white" />
                </div>
                <h3 className="text-xl xs:text-2xl font-bold text-primary-900 dark:text-white">{t.about.education.title}</h3>
              </div>
              
              <div className="space-y-4 xs:space-y-6">
                {education.map((edu, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 }}
                    className="relative pl-6 xs:pl-8 border-l-2 border-accent-200 hover:border-accent-500 transition-colors duration-300"
                  >
                    <div className="absolute -left-1.5 xs:-left-2 top-0 w-3 h-3 xs:w-4 xs:h-4 bg-accent-500 rounded-full"></div>
                    <div className="card p-4 xs:p-6 dark:bg-gray-800">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2 xs:mb-3">
                        <h4 className="text-base xs:text-lg font-semibold text-primary-900 dark:text-white">{edu.degree}</h4>
                        <span className="text-xs xs:text-sm text-accent-500 font-medium">{edu.period}</span>
                      </div>
                      <p className="text-accent-600 dark:text-accent-400 font-medium mb-2 xs:mb-3 text-sm xs:text-base">{edu.institution}</p>
                      <p className="text-secondary-600 dark:text-gray-300 text-sm xs:text-base">{edu.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Seção de Objetivos e Valores */}
          <motion.div
            variants={itemVariants}
            className="mt-12 xs:mt-16 text-center"
          >
            <div className="flex items-center justify-center gap-2 xs:gap-3 mb-6 xs:mb-8">
              <div className="w-10 h-10 xs:w-12 xs:h-12 bg-gradient-to-r from-primary-500 to-accent-500 rounded-lg flex items-center justify-center">
                <FaAward className="w-5 h-5 xs:w-6 xs:h-6 text-white" />
              </div>
              <h3 className="text-xl xs:text-2xl font-bold text-primary-900 dark:text-white">{t.about.values.title}</h3>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 xs:gap-8 max-w-4xl mx-auto">
              {t.about.values.items.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="card p-4 xs:p-6 text-center bg-white dark:bg-gray-800"
                >
                  <div className={`w-12 h-12 xs:w-16 xs:h-16 ${
                    index === 0 ? 'bg-primary-500/20' : 
                    index === 1 ? 'bg-accent-500/20' : 
                    'bg-gradient-to-r from-primary-500/20 to-accent-500/20'
                  } rounded-full flex items-center justify-center mx-auto mb-3 xs:mb-4`}>
                    <span className="text-lg xs:text-2xl">
                      {index === 0 ? '🚀' : index === 1 ? '🎯' : '🤝'}
                    </span>
                  </div>
                  <h4 className="text-base xs:text-lg font-semibold text-primary-900 dark:text-white mb-2 xs:mb-3">{value.title}</h4>
                  <p className="text-secondary-600 dark:text-gray-300 text-sm xs:text-base">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
