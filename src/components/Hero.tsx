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
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16 xs:pt-18 sm:pt-20 md:pt-24">
      {/* Background com padrão diagonal inspirado na identidade visual */}
      <div className="absolute inset-0 section-pattern"></div>
      
      {/* Elementos decorativos de fundo responsivos */}
      <div className="absolute top-10 xs:top-16 sm:top-20 left-4 xs:left-6 sm:left-10 w-48 xs:w-56 sm:w-64 md:w-72 h-48 xs:h-56 sm:h-64 md:h-72 bg-primary-500/10 rounded-full blur-2xl xs:blur-3xl"></div>
      <div className="absolute bottom-10 xs:bottom-16 sm:bottom-20 right-4 xs:right-6 sm:right-10 w-64 xs:w-72 sm:w-80 md:w-96 h-64 xs:h-72 sm:h-80 md:h-96 bg-accent-500/10 rounded-full blur-2xl xs:blur-3xl"></div>
      
      <div className="section-container relative z-10 mt-4 xs:mt-6 sm:mt-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center max-w-4xl mx-auto"
        >
          {/* Avatar/Logo */}
          <motion.div
            variants={itemVariants}
            className="mb-6 xs:mb-8 flex justify-center"
          >
            <div className="relative">
              <div className="w-24 h-24 xs:w-28 xs:h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 lg:w-40 lg:h-40 bg-gradient-to-br from-primary-900 to-primary-500 rounded-full flex items-center justify-center shadow-2xl overflow-hidden">
                <img 
                  src={logoImage} 
                  alt="Logo Lucas Machado" 
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              {/* Indicador de status online */}
              <div className="absolute bottom-1 xs:bottom-2 right-1 xs:right-2 w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6 bg-green-500 border-2 xs:border-3 sm:border-4 border-white rounded-full"></div>
            </div>
          </motion.div>

          {/* Saudação */}
          <motion.div
            variants={itemVariants}
            className="mb-3 xs:mb-4"
          >
            <span className="inline-block px-3 xs:px-4 py-1.5 xs:py-2 bg-primary-500 text-white rounded-full text-xs xs:text-sm font-medium">
              {t.hero.greeting}
            </span>
          </motion.div>

          {/* Nome */}
          <motion.h1
            variants={itemVariants}
            className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-3 xs:mb-4 bg-gradient-to-r from-primary-900 via-primary-500 to-accent-500 bg-clip-text text-transparent leading-tight"
          >
            {developerInfo.name}
          </motion.h1>

          {/* Título */}
          <motion.h2
            variants={itemVariants}
            className="text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-primary-500 mb-2"
          >
            {developerInfo.title}
          </motion.h2>

          {/* Subtítulo */}
          <motion.h3
            variants={itemVariants}
            className="text-base xs:text-lg sm:text-xl md:text-2xl text-secondary-600 mb-4 xs:mb-6"
          >
            {developerInfo.subtitle}
          </motion.h3>

          {/* Descrição */}
          <motion.p
            variants={itemVariants}
            className="text-sm xs:text-base sm:text-lg md:text-xl text-secondary-700 mb-6 xs:mb-8 max-w-3xl mx-auto leading-relaxed px-4 xs:px-0"
          >
            {developerInfo.description}
          </motion.p>

          {/* Informações adicionais */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center items-center gap-4 xs:gap-6 mb-6 xs:mb-8 text-secondary-600 text-sm xs:text-base"
          >
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 xs:w-2 xs:h-2 bg-primary-500 rounded-full"></div>
              <span>{developerInfo.location}</span>
            </div>
          </motion.div>

          {/* Botões de ação */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col xs:flex-row gap-3 xs:gap-4 justify-center mb-8 xs:mb-12 px-4 xs:px-0"
          >
            <motion.a
              href="#projects"
              className="btn-primary inline-flex items-center justify-center gap-2 text-sm xs:text-base"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {t.hero.ctaProjects}
            </motion.a>
            <motion.button
              onClick={handleDownloadCVEN}
              className="btn-secondary inline-flex items-center justify-center gap-2 text-sm xs:text-base"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaDownload className="w-3 h-3 xs:w-4 xs:h-4" />
              {t.hero.ctaCVEN}
            </motion.button>
            <motion.button
              onClick={handleDownloadCVPT}
              className="btn-secondary inline-flex items-center justify-center gap-2 text-sm xs:text-base"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaDownload className="w-3 h-3 xs:w-4 xs:h-4" />
              {t.hero.ctaCVPT}
            </motion.button>
          </motion.div>

          {/* Links sociais */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center gap-4 xs:gap-6 mb-12 xs:mb-16"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-10 h-10 xs:w-12 xs:h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-secondary-600 ${social.color} transition-all duration-300 hover:shadow-xl hover:-translate-y-1`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + index * 0.1 }}
              >
                <social.icon className="w-4 h-4 xs:w-5 xs:h-5" />
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
        className="absolute bottom-4 xs:bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-5 h-8 xs:w-6 xs:h-10 border-2 border-primary-500 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-0.5 xs:w-1 h-2 xs:h-3 bg-primary-500 rounded-full mt-1.5 xs:mt-2"
          ></motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
