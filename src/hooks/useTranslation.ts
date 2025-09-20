import { useLanguageContext } from '../contexts/LanguageContext';

/**
 * Hook para usar traduções baseado no idioma atual
 * Agora usa o contexto React para compartilhar estado
 */
export const useTranslation = () => {
  const { t, language } = useLanguageContext();
  
  return {
    t,
    language,
  };
};
