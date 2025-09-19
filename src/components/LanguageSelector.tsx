import React, { useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage, type Language } from '../hooks/useLanguage';

/**
 * Componente de seleção de idiomas com dropdown
 * Exibe o idioma atual e permite selecionar entre os disponíveis
 */
const LanguageSelector: React.FC = () => {
  const {
    currentLanguage,
    availableLanguages,
    setLanguage,
    isDropdownOpen,
    toggleDropdown,
  } = useLanguage();

  const dropdownRef = useRef<HTMLDivElement>(null);

  // Fecha o dropdown ao clicar fora dele
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        toggleDropdown();
      }
    };

    if (isDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isDropdownOpen, toggleDropdown]);

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Botão Principal */}
      <motion.button
        onClick={toggleDropdown}
        className="flex items-center justify-center w-12 h-10 rounded-lg bg-secondary-100 hover:bg-secondary-200 text-primary-900 transition-colors duration-300"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        title={`Idioma atual: ${currentLanguage.name}`}
      >
        <span className="text-lg">{currentLanguage.flag}</span>
        <motion.svg
          className="ml-1 w-3 h-3"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          animate={{ rotate: isDropdownOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </motion.svg>
      </motion.button>

      {/* Dropdown Menu */}
      <AnimatePresence>
        {isDropdownOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full right-0 mt-2 w-40 bg-white rounded-lg shadow-lg border border-secondary-200 overflow-hidden z-50"
          >
            {availableLanguages.map((lang) => (
              <motion.button
                key={lang.code}
                onClick={() => setLanguage(lang.code as Language)}
                className={`w-full flex items-center px-4 py-3 text-left hover:bg-secondary-50 transition-colors duration-200 ${
                  currentLanguage.code === lang.code
                    ? 'bg-primary-50 text-primary-900 font-medium'
                    : 'text-primary-700'
                }`}
                whileHover={{ x: 4 }}
              >
                <span className="text-lg mr-3">{lang.flag}</span>
                <span className="text-sm">{lang.name}</span>
                {currentLanguage.code === lang.code && (
                  <motion.svg
                    className="ml-auto w-4 h-4 text-primary-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.1 }}
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </motion.svg>
                )}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LanguageSelector;
