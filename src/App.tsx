import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Watermark from './components/Watermark';
import LanguageProvider from './contexts/LanguageContext';
import ThemeProvider from './contexts/ThemeContext';

/**
 * Componente principal do portfólio
 * Organiza todas as seções em uma página única com scroll suave
 */
function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="min-h-screen bg-secondary-50 dark:bg-gray-900 transition-colors duration-300">
          <Watermark />
          <Header />
          <main>
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Contact />
          </main>
          <Footer />
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
