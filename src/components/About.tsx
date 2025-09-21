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
    <section id="about" className="py-20 bg-white">
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
              {t.about.title}
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-primary-900 mb-6">
              {t.about.subtitle}
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              {t.about.description}
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Experiência Profissional */}
            <motion.div variants={itemVariants}>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-primary-500 rounded-lg flex items-center justify-center">
                  <FaBriefcase className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-primary-900">{t.about.experience.title}</h3>
              </div>
              
              <div className="space-y-6">
                {experiences.map((exp, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 }}
                    className="relative pl-8 border-l-2 border-primary-200 hover:border-primary-500 transition-colors duration-300"
                  >
                    <div className="absolute -left-2 top-0 w-4 h-4 bg-primary-500 rounded-full"></div>
                    <div className="card p-6">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                        <h4 className="text-lg font-semibold text-primary-900">{exp.title}</h4>
                        <span className="text-sm text-primary-500 font-medium">{exp.period}</span>
                      </div>
                      <p className="text-primary-600 font-medium mb-3">{exp.company}</p>
                      <p className="text-secondary-600 mb-4">{exp.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 bg-primary-500/10 text-primary-500 text-sm rounded-full"
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
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-accent-500 rounded-lg flex items-center justify-center">
                  <FaGraduationCap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-primary-900">{t.about.education.title}</h3>
              </div>
              
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 }}
                    className="relative pl-8 border-l-2 border-accent-200 hover:border-accent-500 transition-colors duration-300"
                  >
                    <div className="absolute -left-2 top-0 w-4 h-4 bg-accent-500 rounded-full"></div>
                    <div className="card p-6">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                        <h4 className="text-lg font-semibold text-primary-900">{edu.degree}</h4>
                        <span className="text-sm text-accent-500 font-medium">{edu.period}</span>
                      </div>
                      <p className="text-accent-600 font-medium mb-3">{edu.institution}</p>
                      <p className="text-secondary-600">{edu.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Seção de Objetivos e Valores */}
          <motion.div
            variants={itemVariants}
            className="mt-16 text-center"
          >
            <div className="flex items-center justify-center gap-3 mb-8">
              <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-accent-500 rounded-lg flex items-center justify-center">
                <FaAward className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-primary-900">{t.about.values.title}</h3>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {t.about.values.items.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="card p-6 text-center"
                >
                  <div className={`w-16 h-16 ${
                    index === 0 ? 'bg-primary-500/10' : 
                    index === 1 ? 'bg-accent-500/10' : 
                    'bg-gradient-to-r from-primary-500/10 to-accent-500/10'
                  } rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <span className="text-2xl">
                      {index === 0 ? '🚀' : index === 1 ? '🎯' : '🤝'}
                    </span>
                  </div>
                  <h4 className="text-lg font-semibold text-primary-900 mb-3">{value.title}</h4>
                  <p className="text-secondary-600">{value.description}</p>
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
