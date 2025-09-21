import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaDownload } from 'react-icons/fa';
import logoImage from '../assets/Logo.png';
import cvFileEN from '../assets/CV-EN.pdf';
import cvFilePT from '../assets/CV-PT.pdf';
import { useTranslation } from '../hooks/useTranslation';

/**
 * Componente da seção principal (Hero)
 * Apresenta o desenvolvedor com call-to-action e links sociais
 */
const Hero: React.FC = () => {
  const { t } = useTranslation();

  // Dados do desenvolvedor usando traduções - recriados quando o idioma muda
  const developerInfo = useMemo(() => ({
    name: t.hero.name,
    title: t.hero.title,
    subtitle: t.hero.subtitle,
    description: t.hero.description,
    location: t.hero.location,
    email: t.hero.email,
  }), [t.hero]);

  // Links sociais
  const socialLinks = [
    { name: 'GitHub', icon: FaGithub, href: 'https://github.com/LucasMachado77', color: 'hover:text-gray-900' },
    { name: 'LinkedIn', icon: FaLinkedin, href: 'https://linkedin.com/in/lucas-machado-/', color: 'hover:text-blue-600' },
  ];

  // Função genérica para fazer download do CV
  const handleDownloadCV = (cvFile: string, fileName: string) => {
    const link = document.createElement('a');
    link.href = cvFile;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Funções específicas para cada idioma
  const handleDownloadCVEN = () => {
    handleDownloadCV(cvFileEN, 'Lucas_Machado_CV_English.pdf');
  };

  const handleDownloadCVPT = () => {
    handleDownloadCV(cvFilePT, 'Lucas_Machado_CV_Portugues.pdf');
  };

  // Animações para os elementos
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 md:pt-24">
      {/* Background com padrão diagonal inspirado na identidade visual */}
      <div className="absolute inset-0 section-pattern"></div>
      
      {/* Logo como watermark - no topo */}
      <div className="absolute top-0 left-0 w-full h-1/2 flex items-start justify-center pt-8 opacity-5 pointer-events-none">
        <img 
          src={logoImage} 
          alt="Logo Lucas Machado" 
          className="w-full h-full max-w-4xl max-h-4xl object-contain"
        />
      </div>
      
      {/* Elementos decorativos de fundo */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mt-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center max-w-4xl mx-auto"
        >
          {/* Avatar/Logo */}
          <motion.div
            variants={itemVariants}
            className="mb-8 flex justify-center"
          >
            <div className="relative">
              <div className="w-32 h-32 md:w-40 md:h-40 bg-gradient-to-br from-primary-900 to-primary-500 rounded-full flex items-center justify-center shadow-2xl overflow-hidden">
                <img 
                  src={logoImage} 
                  alt="Logo Lucas Machado" 
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              {/* Indicador de status online */}
              <div className="absolute bottom-2 right-2 w-6 h-6 bg-green-500 border-4 border-white rounded-full"></div>
            </div>
          </motion.div>

          {/* Saudação */}
          <motion.div
            variants={itemVariants}
            className="mb-4"
          >
            <span className="inline-block px-4 py-2 bg-primary-500 text-white rounded-full text-sm font-medium mb-4">
              {t.hero.greeting}
            </span>
          </motion.div>

          {/* Nome */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-primary-900 via-primary-500 to-accent-500 bg-clip-text text-transparent"
          >
            {developerInfo.name}
          </motion.h1>

          {/* Título */}
          <motion.h2
            variants={itemVariants}
            className="text-2xl md:text-3xl font-semibold text-primary-500 mb-2"
          >
            {developerInfo.title}
          </motion.h2>

          {/* Subtítulo */}
          <motion.h3
            variants={itemVariants}
            className="text-lg md:text-xl text-secondary-600 mb-6"
          >
            {developerInfo.subtitle}
          </motion.h3>

          {/* Descrição */}
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-secondary-700 mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            {developerInfo.description}
          </motion.p>

          {/* Informações adicionais */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center items-center gap-6 mb-8 text-secondary-600"
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
              <span>{developerInfo.location}</span>
            </div>
          </motion.div>

          {/* Botões de ação */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <motion.a
              href="#projects"
              className="btn-primary inline-flex items-center justify-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {t.hero.ctaProjects}
            </motion.a>
            <motion.button
              onClick={handleDownloadCVEN}
              className="btn-secondary inline-flex items-center justify-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaDownload className="w-4 h-4" />
              {t.hero.ctaCVEN}
            </motion.button>
            <motion.button
              onClick={handleDownloadCVPT}
              className="btn-secondary inline-flex items-center justify-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaDownload className="w-4 h-4" />
              {t.hero.ctaCVPT}
            </motion.button>
          </motion.div>

          {/* Links sociais */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center gap-6 mb-16"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-secondary-600 ${social.color} transition-all duration-300 hover:shadow-xl hover:-translate-y-1`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + index * 0.1 }}
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Indicador de scroll */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-primary-500 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-primary-500 rounded-full mt-2"
          ></motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
