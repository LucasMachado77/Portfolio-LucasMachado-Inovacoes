import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaHeart, FaCode, FaInstagram } from 'react-icons/fa';
import cvFileEN from '../assets/CV-EN.pdf';
import cvFilePT from '../assets/CV-PT.pdf';
import { useTranslation } from '../hooks/useTranslation';

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
        <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Conteúdo principal do footer */}
        <div className="py-16">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
            {/* Informações da marca */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-accent-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">LM</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">{developerName}</h3>
                  <p className="text-white-300">{t.footer.brand.tagline}</p>
                </div>
              </div>
              
              <p className="text-white-200 mb-6 max-w-md leading-relaxed">
                {t.footer.brand.description}
              </p>

              {/* Links sociais */}
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center text-primary-200 ${social.color} transition-all duration-300 hover:bg-white/20 hover:scale-110`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Links de navegação */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
               <h4 className="text-lg font-semibold mb-6 text-white">{t.footer.navigation.title}</h4>
              <ul className="space-y-3">
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
                      className="text-primary-200 hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block"
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
               <h4 className="text-lg font-semibold mb-6 text-white">{t.footer.usefulLinks.title}</h4>
              <ul className="space-y-3">
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
                        className="text-primary-200 hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block text-left"
                      >
                        {link.name}
                      </button>
                    ) : (
                      <a
                        href={link.href}
                        target={link.href.startsWith('http') ? '_blank' : undefined}
                        rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="text-primary-200 hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block"
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
          className="py-8 flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <div className="flex items-center gap-2 text-primary-300">
            <span>{t.footer.copyright}</span>
          </div>

          <div className="flex items-center gap-2 text-primary-300">
            <span>{t.footer.madeWith}</span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <FaHeart className="w-4 h-4 text-red-500" />
            </motion.div>
            <span>{t.footer.and}</span>
            <FaCode className="w-4 h-4 text-primary-500" />
            <span>{t.footer.by}</span>
          </div>
        </motion.div>
      </div>

      {/* Botão de voltar ao topo */}
      <motion.button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 w-12 h-12 bg-primary-500 hover:bg-primary-600 text-white rounded-full shadow-lg flex items-center justify-center z-40 transition-all duration-300"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
      >
        <svg
          className="w-5 h-5"
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
