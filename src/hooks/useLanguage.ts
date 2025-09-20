import { useLanguageContext, type Language, languages } from '../contexts/LanguageContext';

/**
 * Hook personalizado para gerenciar o idioma da aplicação
 * Agora usa o contexto React para compartilhar estado
 */
export const useLanguage = () => {
  return useLanguageContext();
};

// Re-exportar tipos e constantes para compatibilidade
export type { Language };
export { languages };
