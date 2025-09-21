import React, { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import LanguageSelector from './LanguageSelector';
import { useTranslation } from '../hooks/useTranslation';

/**
 * Interface para os itens do menu de navegação
 */
interface NavItem {
  name: string;
  href: string;
}

/**
 * Componente de cabeçalho com navegação responsiva
 * Inclui menu mobile e efeitos de scroll
 */
const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { t } = useTranslation();

  // Itens do menu de navegação - recriados quando o idioma muda
  const navItems: NavItem[] = useMemo(() => [
    { name: t.nav.home, href: '#hero' },
    { name: t.nav.about, href: '#about' },
    { name: t.nav.skills, href: '#skills' },
    { name: t.nav.projects, href: '#projects' },
    { name: t.nav.contact, href: '#contact' },
  ], [t.nav]);

  // Efeito de scroll para mudar aparência do header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Função para fechar menu ao clicar em um link
  const handleNavClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <nav className="section-container">
        <div className="flex items-center justify-between h-14 xs:h-16 sm:h-18 md:h-20">
          {/* Logo */}
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-1 xs:space-x-2 relative z-10 cursor-pointer"
          >
            <div className="w-7 h-7 xs:w-8 xs:h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 bg-gradient-to-br from-primary-900 to-primary-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xs xs:text-sm sm:text-sm md:text-base">LM</span>
            </div>
            <span className="font-bold text-primary-900 text-sm xs:text-base sm:text-lg md:text-xl hover:text-primary-500 transition-colors duration-300 hidden xs:block">
              Lucas Machado
            </span>
          </motion.a>

          {/* Menu Desktop */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                className="text-primary-900 hover:text-primary-500 font-medium transition-colors duration-300 relative group text-sm xl:text-base"
                whileHover={{ y: -2 }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-500 transition-all duration-300 group-hover:w-full"></span>
              </motion.a>
            ))}
          </div>

          {/* Botões de Ação Desktop */}
          <div className="hidden lg:flex items-center space-x-3 xl:space-x-4">
            {/* Seletor de Idioma */}
            <LanguageSelector />

            {/* Botão de Contato */}
            <motion.a
              href="#contact"
              className="btn-primary text-sm xl:text-base"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {t.contact.subtitle}
            </motion.a>
          </div>

          {/* Botões Mobile/Tablet */}
          <div className="lg:hidden flex items-center space-x-2 xs:space-x-3">
            {/* Seletor de Idioma Mobile/Tablet */}
            <LanguageSelector />

            {/* Botão Menu Mobile/Tablet */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-1.5 xs:p-2 rounded-lg text-primary-900 hover:bg-secondary-100 transition-colors duration-300"
              aria-label="Toggle menu"
            >
              <svg
                className={`w-5 h-5 xs:w-6 xs:h-6 transition-transform duration-300 ${
                  isMenuOpen ? 'rotate-90' : ''
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Menu Mobile/Tablet */}
        <motion.div
          initial={false}
          animate={{
            height: isMenuOpen ? 'auto' : 0,
            opacity: isMenuOpen ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
          className="lg:hidden overflow-hidden"
        >
          <div className="py-3 xs:py-4 space-y-1 xs:space-y-2">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                onClick={handleNavClick}
                className="block px-3 xs:px-4 py-2 text-primary-900 hover:bg-secondary-100 rounded-lg transition-colors duration-300 text-sm xs:text-base"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: isMenuOpen ? 1 : 0, x: isMenuOpen ? 0 : -20 }}
                transition={{ delay: index * 0.1 }}
              >
                {item.name}
              </motion.a>
            ))}

            {/* Botão de Contato Mobile/Tablet */}
            <motion.a
              href="#contact"
              onClick={handleNavClick}
              className="block mx-3 xs:mx-4 mt-2 btn-primary text-center text-sm xs:text-base"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isMenuOpen ? 1 : 0, y: isMenuOpen ? 0 : 20 }}
              transition={{ delay: (navItems.length + 1) * 0.1 }}
            >
              {t.contact.subtitle}
            </motion.a>
          </div>
        </motion.div>
      </nav>
    </motion.header>
  );
};

export default Header;
