import React from 'react';
import { motion } from 'framer-motion';
import { FaSun, FaMoon } from 'react-icons/fa';
import { useTheme } from '../contexts/ThemeContext';
import { useTranslation } from '../hooks/useTranslation';

/**
 * Componente toggle para alternar entre tema claro e escuro
 * Exibe ícone de sol para modo claro e lua para modo escuro
 */
const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const { t } = useTranslation();

  return (
    <motion.button
      onClick={toggleTheme}
      className="w-10 h-10 xs:w-11 xs:h-11 sm:w-12 sm:h-12 bg-white/10 hover:bg-white/20 text-primary-200 hover:text-white rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      title={theme === 'light' ? t.footer.theme.dark : t.footer.theme.light}
      aria-label={t.footer.theme.toggle}
    >
      <motion.div
        key={theme}
        initial={{ rotate: -180, opacity: 0 }}
        animate={{ rotate: 0, opacity: 1 }}
        exit={{ rotate: 180, opacity: 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="w-4 h-4 xs:w-5 xs:h-5"
      >
        {theme === 'light' ? (
          <FaSun className="w-full h-full" />
        ) : (
          <FaMoon className="w-full h-full" />
        )}
      </motion.div>
    </motion.button>
  );
};

export default ThemeToggle;
