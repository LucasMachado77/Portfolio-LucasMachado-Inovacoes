import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

/**
 * Tipos para o contexto de tema
 */
type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
}

/**
 * Contexto para gerenciar o tema da aplicação
 */
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

/**
 * Props do provider do contexto de tema
 */
interface ThemeProviderProps {
  children: ReactNode;
}

/**
 * Provider do contexto de tema
 * Gerencia o estado global do tema da aplicação
 */
export default function ThemeProvider({ children }: ThemeProviderProps) {
  // Estado do tema atual, padrão é light
  const [theme, setThemeState] = useState<Theme>('light');

  // Carrega tema salvo do localStorage na inicialização
  useEffect(() => {
    const savedTheme = localStorage.getItem('portfolio-theme') as Theme;
    if (savedTheme && (savedTheme === 'light' || savedTheme === 'dark')) {
      setThemeState(savedTheme);
      // Aplica o tema ao documento
      document.documentElement.classList.toggle('dark', savedTheme === 'dark');
    } else {
      // Se não há tema salvo, verifica a preferência do sistema
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      const systemTheme = prefersDark ? 'dark' : 'light';
      setThemeState(systemTheme);
      document.documentElement.classList.toggle('dark', systemTheme === 'dark');
    }
  }, []);

  // Função para definir tema específico
  const setTheme = (newTheme: Theme) => {
    console.log('ThemeContext - Trocando tema para:', newTheme);
    setThemeState(newTheme);
    localStorage.setItem('portfolio-theme', newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
  };

  // Função para alternar entre temas
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  };

  const value: ThemeContextType = {
    theme,
    toggleTheme,
    setTheme,
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}

/**
 * Hook para usar o contexto de tema
 */
export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme deve ser usado dentro de um ThemeProvider');
  }
  return context;
}
