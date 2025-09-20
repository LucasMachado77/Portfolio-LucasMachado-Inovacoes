import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { pt } from '../locales/pt';
import { en } from '../locales/en';
import { es } from '../locales/es';

/**
 * Tipos de idiomas suportados
 */
export type Language = 'pt' | 'en' | 'es';

/**
 * Configuração dos idiomas disponíveis
 */
export const languages = {
  pt: { code: 'pt', name: 'Português', flag: '🇧🇷' },
  en: { code: 'en', name: 'English', flag: '🇺🇸' },
  es: { code: 'es', name: 'Español', flag: '🇪🇸' },
} as const;

/**
 * Interface para o contexto de idioma
 */
interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  isDropdownOpen: boolean;
  toggleDropdown: () => void;
  currentLanguage: typeof languages[Language];
  availableLanguages: Array<typeof languages[Language]>;
  t: typeof pt;
}

/**
 * Contexto de idioma para compartilhar estado entre componentes
 */
const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

/**
 * Props do provider do contexto de idioma
 */
interface LanguageProviderProps {
  children: ReactNode;
}

/**
 * Provider do contexto de idioma
 * Gerencia o estado global do idioma da aplicação
 */
export default function LanguageProvider({ children }: LanguageProviderProps) {
  // Estado do idioma atual, padrão é português
  const [language, setLanguageState] = useState<Language>('pt');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Carrega idioma salvo do localStorage na inicialização
  useEffect(() => {
    const savedLanguage = localStorage.getItem('portfolio-language') as Language;
    if (savedLanguage && (savedLanguage === 'pt' || savedLanguage === 'en' || savedLanguage === 'es')) {
      setLanguageState(savedLanguage);
    }
  }, []);

  // Função para definir idioma específico
  const setLanguage = (lang: Language) => {
    console.log('LanguageContext - Trocando idioma para:', lang);
    setLanguageState(lang);
    localStorage.setItem('portfolio-language', lang);
    setIsDropdownOpen(false);
  };

  // Função para alternar dropdown
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Mapeamento dos idiomas para seus respectivos arquivos de tradução
  const translations = {
    pt,
    en,
    es,
  };

  // Retorna as traduções do idioma atual
  const t = translations[language] || pt;

  const value: LanguageContextType = {
    language,
    setLanguage,
    isDropdownOpen,
    toggleDropdown,
    currentLanguage: languages[language],
    availableLanguages: Object.values(languages),
    t,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

/**
 * Hook para usar o contexto de idioma
 */
export function useLanguageContext() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguageContext deve ser usado dentro de um LanguageProvider');
  }
  return context;
}