import React from 'react';
import logoImage from '../assets/Logo.png';

/**
 * Componente de watermark fixo
 * Exibe o logo como fundo fixo durante toda a rolagem da página
 */
const Watermark: React.FC = () => {
  return (
    <div className="fixed inset-0 w-full h-full flex items-center justify-center opacity-10 dark:opacity-8 pointer-events-none z-0">
      <img 
        src={logoImage} 
        alt="Logo Lucas Machado" 
        className="w-full h-full max-w-6xl max-h-6xl object-contain dark:invert transition-all duration-300"
      />
    </div>
  );
};

export default Watermark;
