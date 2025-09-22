import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaHeart, FaCode, FaInstagram } from 'react-icons/fa';
import cvFileEN from '../assets/CV-EN.pdf';
import cvFilePT from '../assets/CV-PT.pdf';
import { useTranslation } from '../hooks/useTranslation';
import ThemeToggle from './ThemeToggle';

/**
 * Componente do rodapé
 * Inclui links sociais, informações de copyright e elementos decorativos
 */
const Footer: React.FC = () => {
  const { t } = useTranslation();
  
  // Dados do desenvolvedor
  const developerName = 'Lucas Machado';

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

  // Links sociais
  const socialLinks = [
    { name: 'GitHub', icon: FaGithub, href: 'https://github.com/LucasMachado77', color: 'hover:text-gray-900' },
    { name: 'LinkedIn', icon: FaLinkedin, href: 'https://www.linkedin.com/in/lucas-machado-/', color: 'hover:text-blue-600' },
    { name: 'Instagram', icon: FaInstagram, href: 'https://www.instagram.com/lucasmachado___/', color: 'hover:text-blue-400' },
  ];

  // Links de navegação usando traduções - recriados quando o idioma muda
  const navLinks = useMemo(() => [
    { name: t.footer.navigation.links.home, href: '#hero' },
    { name: t.footer.navigation.links.about, href: '#about' },
    { name: t.footer.navigation.links.skills, href: '#skills' },
    { name: t.footer.navigation.links.projects, href: '#projects' },
    { name: t.footer.navigation.links.contact, href: '#contact' },
  ], [t.footer.navigation.links]);

  // Links úteis usando traduções - recriados quando o idioma muda
  const usefulLinks = useMemo(() => [
    { name: t.footer.usefulLinks.links.cvEN, href: '#', onClick: handleDownloadCVEN },
    { name: t.footer.usefulLinks.links.cvPT, href: '#', onClick: handleDownloadCVPT },
    { name: t.footer.usefulLinks.links.portfolio, href: 'https://github.com/LucasMachado777/Portfolio-LucasMachado-Inovacoes' },
  ], [t.footer.usefulLinks.links, handleDownloadCVEN, handleDownloadCVPT]);

  return (
    <footer className="bg-primary-900 text-white relative overflow-hidden">
      {/* Elementos decorativos de fundo */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="absolute top-6 xs:top-8 sm:top-10 left-6 xs:left-8 sm:left-10 w-24 xs:w-28 sm:w-32 h-24 xs:h-28 sm:h-32 bg-white rounded-full blur-2xl xs:blur-3xl"></div>
        <div className="absolute bottom-6 xs:bottom-8 sm:bottom-10 right-6 xs:right-8 sm:right-10 w-32 xs:w-40 sm:w-48 h-32 xs:h-40 sm:h-48 bg-white rounded-full blur-2xl xs:blur-3xl"></div>
      </div>

      <div className="section-container relative z-10">
        {/* Conteúdo principal do footer */}
        <div className="py-12 xs:py-14 sm:py-16">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 xs:gap-8">
            {/* Informações da marca */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="sm:col-span-2 lg:col-span-2"
            >
              <div className="flex items-center gap-2 xs:gap-3 mb-4 xs:mb-6">
                <div className="w-10 h-10 xs:w-12 xs:h-12 bg-gradient-to-br from-primary-500 to-accent-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg xs:text-xl">LM</span>
                </div>
                <div>
                  <h3 className="text-xl xs:text-2xl font-bold text-white">{developerName}</h3>
                  <p className="text-white-300 text-sm xs:text-base">{t.footer.brand.tagline}</p>
                </div>
              </div>
              
              <p className="text-white-200 mb-4 xs:mb-6 max-w-md leading-relaxed text-sm xs:text-base">
                {t.footer.brand.description}
              </p>

              {/* Links sociais e toggle de tema */}
              <div className="flex gap-3 xs:gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-10 h-10 xs:w-12 xs:h-12 bg-white/10 rounded-lg flex items-center justify-center text-primary-200 ${social.color} transition-all duration-300 hover:bg-white/20 hover:scale-110`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <social.icon className="w-4 h-4 xs:w-5 xs:h-5" />
                  </motion.a>
                ))}
                
                {/* Toggle de tema */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: socialLinks.length * 0.1 }}
                >
                  <ThemeToggle />
                </motion.div>
              </div>
            </motion.div>

            {/* Links de navegação */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
               <h4 className="text-base xs:text-lg font-semibold mb-4 xs:mb-6 text-white">{t.footer.navigation.title}</h4>
              <ul className="space-y-2 xs:space-y-3">
                {navLinks.map((link, index) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 + index * 0.05 }}
                  >
                    <a
                      href={link.href}
                      className="text-primary-200 hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block text-sm xs:text-base"
                    >
                      {link.name}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Links úteis */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
               <h4 className="text-base xs:text-lg font-semibold mb-4 xs:mb-6 text-white">{t.footer.usefulLinks.title}</h4>
              <ul className="space-y-2 xs:space-y-3">
                {usefulLinks.map((link, index) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + index * 0.05 }}
                  >
                    {link.onClick ? (
                      <button
                        onClick={link.onClick}
                        className="text-primary-200 hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block text-left text-sm xs:text-base"
                      >
                        {link.name}
                      </button>
                    ) : (
                      <a
                        href={link.href}
                        target={link.href.startsWith('http') ? '_blank' : undefined}
                        rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="text-primary-200 hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block text-sm xs:text-base"
                      >
                        {link.name}
                      </a>
                    )}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Linha divisória */}
        <div className="border-t border-primary-800"></div>

        {/* Copyright e informações finais */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="py-6 xs:py-8 flex flex-col sm:flex-row items-center justify-between gap-3 xs:gap-4"
        >
          <div className="flex items-center gap-2 text-primary-300 text-sm xs:text-base">
            <span>{t.footer.copyright}</span>
          </div>

          <div className="flex items-center gap-1.5 xs:gap-2 text-primary-300 text-sm xs:text-base">
            <span>{t.footer.madeWith}</span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <FaHeart className="w-3 h-3 xs:w-4 xs:h-4 text-red-500" />
            </motion.div>
            <span>{t.footer.and}</span>
            <FaCode className="w-3 h-3 xs:w-4 xs:h-4 text-primary-500" />
            <span>{t.footer.by}</span>
          </div>
        </motion.div>
      </div>

      {/* Botão de voltar ao topo */}
      <motion.button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-4 xs:bottom-6 sm:bottom-8 right-4 xs:right-6 sm:right-8 w-10 h-10 xs:w-11 xs:h-11 sm:w-12 sm:h-12 bg-primary-500 hover:bg-primary-600 text-white rounded-full shadow-lg flex items-center justify-center z-40 transition-all duration-300"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
      >
        <svg
          className="w-4 h-4 xs:w-4.5 xs:h-4.5 sm:w-5 sm:h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          />
        </svg>
      </motion.button>
    </footer>
  );
};

export default Footer;
