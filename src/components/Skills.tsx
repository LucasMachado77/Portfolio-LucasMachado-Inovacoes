import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaReact, 
  FaNodeJs, 
  FaAws,
  FaDatabase,
  FaCloud,
  FaCode,
  FaTools
} from 'react-icons/fa';

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
  // Categorias de habilidades
  const skillCategories: SkillCategory[] = [
    {
      name: 'Frontend',
      icon: FaReact,
      color: 'from-blue-400 to-blue-600',
      skills: [
        { name: 'React', level: 95, description: 'Desenvolvimento de interfaces modernas e interativas' },
        { name: 'TypeScript', level: 90, description: 'Tipagem estática para JavaScript' },
        { name: 'Vite', level: 85, description: 'Build tool moderno e rápido' },
        { name: 'Tailwind CSS', level: 92, description: 'Framework CSS utilitário' },
        { name: 'JavaScript', level: 88, description: 'Linguagem principal para desenvolvimento web' },
        { name: 'HTML/CSS', level: 95, description: 'Fundamentos do desenvolvimento web' },
      ],
    },
    {
      name: 'Backend & Database',
      icon: FaDatabase,
      color: 'from-green-400 to-green-600',
      skills: [
        { name: 'Supabase', level: 90, description: 'Backend-as-a-Service com PostgreSQL' },
        { name: 'PostgreSQL', level: 87, description: 'Banco de dados relacional robusto' },
        { name: 'MySQL', level: 80, description: 'Sistema de gerenciamento de banco de dados' },
        { name: 'Ruby on Rails', level: 75, description: 'Framework web em Ruby' },
        { name: 'API Integration', level: 88, description: 'Integração de APIs e webhooks' },
      ],
    },
    {
      name: 'Mobile & Languages',
      icon: FaCode,
      color: 'from-purple-400 to-purple-600',
      skills: [
        { name: 'Kotlin', level: 80, description: 'Desenvolvimento Android nativo' },
        { name: 'Java', level: 85, description: 'Linguagem versátil para múltiplas plataformas' },
        { name: 'Ruby', level: 75, description: 'Linguagem elegante e produtiva' },
        { name: 'C/C++', level: 70, description: 'Linguagens de programação de sistema' },
      ],
    },
    {
      name: 'DevOps & Infrastructure',
      icon: FaCloud,
      color: 'from-orange-400 to-orange-600',
      skills: [
        { name: 'Docker', level: 88, description: 'Containerização de aplicações' },
        { name: 'Linux', level: 90, description: 'Sistema operacional para servidores' },
        { name: 'Windows Server', level: 85, description: 'Administração de servidores Windows' },
        { name: 'VMware vCenter', level: 82, description: 'Virtualização de infraestrutura' },
        { name: 'Dynatrace', level: 80, description: 'Monitoramento e observabilidade' },
        { name: 'Zabbix', level: 78, description: 'Sistema de monitoramento de rede' },
        { name: 'Grafana', level: 75, description: 'Visualização de métricas e dados' },
      ],
    },
  ];

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
    <section id="skills" className="py-20 bg-secondary-50">
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
              Habilidades Técnicas
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-primary-900 mb-6">
              Tecnologias & Ferramentas
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Domínio em diversas tecnologias modernas, sempre atualizado com as últimas tendências 
              e melhores práticas do mercado.
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
                className="card p-8"
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
              { number: '9+', label: 'Anos de Experiência', icon: FaCode },
              { number: '15+', label: 'Projetos Desenvolvidos', icon: FaTools },
              { number: '20+', label: 'Tecnologias Dominadas', icon: FaDatabase },
              { number: '100%', label: 'Disponível para Novos Projetos', icon: FaAws },
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

          {/* Seção de certificações */}
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
                  <div className="w-12 h-12 bg-primary-500/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🏆</span>
                  </div>
                  <h4 className="font-semibold text-primary-900 mb-2">{cert.name}</h4>
                  <p className="text-secondary-600 text-sm mb-1">{cert.issuer}</p>
                  <p className="text-primary-500 text-sm font-medium">{cert.year}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
