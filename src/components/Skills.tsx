import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { 
  FaReact, 
  FaCheckSquare,
  FaDatabase,
  FaCloud,
  FaCode,
  FaTools
} from 'react-icons/fa';
import { useTranslation } from '../hooks/useTranslation';

/**
 * Interface para categorias de habilidades
 */
interface SkillCategory {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  skills: Skill[];
}

/**
 * Interface para habilidades individuais
 */
interface Skill {
  name: string;
  level: number; // 1-100
  description: string;
}

/**
 * Componente da seção de habilidades técnicas
 * Organiza habilidades por categorias com barras de progresso animadas
 */
const Skills: React.FC = () => {
  const { t } = useTranslation();

  // Categorias de habilidades usando traduções - recriadas quando o idioma muda
  const skillCategories: SkillCategory[] = useMemo(() => [
    {
      name: t.skills.categories.frontend,
      icon: FaReact,
      color: 'from-blue-400 to-blue-600',
      skills: [
        { name: 'React', level: 80, description: t.skills.skillDescriptions.frontend.React },
        { name: 'TypeScript', level: 80, description: t.skills.skillDescriptions.frontend.TypeScript },
        { name: 'Vite', level: 80, description: t.skills.skillDescriptions.frontend.Vite },
        { name: 'Tailwind CSS', level: 80, description: t.skills.skillDescriptions.frontend['Tailwind CSS'] },
        { name: 'JavaScript', level: 80, description: t.skills.skillDescriptions.frontend.JavaScript },
        { name: 'HTML/CSS', level: 85, description: t.skills.skillDescriptions.frontend['HTML/CSS'] },
      ],
    },
    {
      name: t.skills.categories.backend,
      icon: FaDatabase,
      color: 'from-green-400 to-green-600',
      skills: [
        { name: 'Supabase', level: 90, description: t.skills.skillDescriptions.backend.Supabase },
        { name: 'PostgreSQL', level: 80, description: t.skills.skillDescriptions.backend.PostgreSQL },
        { name: 'MySQL', level: 80, description: t.skills.skillDescriptions.backend.MySQL },
        { name: 'Ruby on Rails', level: 75, description: t.skills.skillDescriptions.backend['Ruby on Rails'] },
        { name: 'API Integration', level: 70, description: t.skills.skillDescriptions.backend['API Integration'] },
      ],
    },
    {
      name: t.skills.categories.mobile,
      icon: FaCode,
      color: 'from-purple-400 to-purple-600',
      skills: [
        { name: 'Kotlin', level: 80, description: t.skills.skillDescriptions.mobile.Kotlin },
        { name: 'Java', level: 70, description: t.skills.skillDescriptions.mobile.Java },
        { name: 'Ruby', level: 75, description: t.skills.skillDescriptions.mobile.Ruby },
        { name: 'C/C++', level: 70, description: t.skills.skillDescriptions.mobile['C/C++'] },
      ],
    },
    {
      name: t.skills.categories.devops,
      icon: FaCloud,
      color: 'from-orange-400 to-orange-600',
      skills: [
        { name: 'Windows Server', level: 85, description: t.skills.skillDescriptions.devops['Windows Server'] },
        { name: 'Docker', level: 80, description: t.skills.skillDescriptions.devops.Docker },
        { name: 'Linux', level: 75, description: t.skills.skillDescriptions.devops.Linux },
        { name: 'VMware vCenter', level: 80, description: t.skills.skillDescriptions.devops['VMware vCenter'] },
        { name: 'Dynatrace', level: 80, description: t.skills.skillDescriptions.devops.Dynatrace },
        { name: 'Zabbix', level: 80, description: t.skills.skillDescriptions.devops.Zabbix },
        { name: 'Grafana', level: 80, description: t.skills.skillDescriptions.devops.Grafana },
      ],
    },
  ], [t.skills.categories, t.skills.skillDescriptions]);

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

  // Componente para barra de progresso animada
  const ProgressBar: React.FC<{ level: number; delay?: number }> = ({ level, delay = 0 }) => (
    <div className="w-full bg-secondary-200 rounded-full h-2 overflow-hidden">
      <motion.div
        className="h-full bg-gradient-to-r from-primary-500 to-accent-500 rounded-full"
        initial={{ width: 0 }}
        whileInView={{ width: `${level}%` }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, delay }}
      />
    </div>
  );

  return (
    <section id="skills" className="py-20 bg-white">
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
              {t.skills.title}
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-primary-900 mb-6">
              {t.skills.subtitle}
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              {t.skills.description}
            </p>
          </motion.div>

          {/* Grid de categorias */}
          <div className="grid lg:grid-cols-2 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.name}
                variants={itemVariants}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: categoryIndex * 0.2 }}
                className="card p-8 bg-white"
              >
                {/* Cabeçalho da categoria */}
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center`}>
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-primary-900">{category.name}</h3>
                </div>

                {/* Lista de habilidades */}
                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: skillIndex * 0.1 }}
                      className="group"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-semibold text-primary-900 group-hover:text-primary-500 transition-colors duration-300">
                          {skill.name}
                        </h4>
                        <span className="text-sm text-primary-500 font-medium">
                          {skill.level}%
                        </span>
                      </div>
                      <ProgressBar level={skill.level} delay={skillIndex * 0.1} />
                      <p className="text-sm text-secondary-600 mt-2">{skill.description}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Seção de estatísticas */}
          <motion.div
            variants={itemVariants}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {[
              { number: '9+', label: t.skills.stats.experience, icon: FaCode },
              { number: '10+', label: t.skills.stats.projects, icon: FaTools },
              { number: '10+', label: t.skills.stats.technologies, icon: FaDatabase },
              { number: '100%', label: t.skills.stats.available, icon: FaCheckSquare },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-primary-900 mb-2">
                  {stat.number}
                </div>
                <p className="text-secondary-600 font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Seção de certificações - COMENTADA */}
          {/* 
          <motion.div
            variants={itemVariants}
            className="mt-16 text-center"
          >
            <h3 className="text-2xl font-bold text-primary-900 mb-8">
              Certificações & Cursos
            </h3>
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {[
                { name: 'Java', issuer: 'EISnt, Portugal', year: '2024' },
                { name: 'HTML', issuer: 'EISnt, Portugal', year: '2024' },
                { name: 'C/C++', issuer: 'EISnt, Portugal', year: '2024' },
              ].map((cert, index) => (
                <motion.div
                  key={cert.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="card p-6 text-center hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="w-12 h-12 bg-primary-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🏆</span>
                  </div>
                  <h4 className="font-semibold text-primary-900 mb-2">{cert.name}</h4>
                  <p className="text-secondary-600 text-sm mb-1">{cert.issuer}</p>
                  <p className="text-primary-500 text-sm font-medium">{cert.year}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
          */}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
