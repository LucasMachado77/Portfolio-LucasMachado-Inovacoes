import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import LanguageProvider from './contexts/LanguageContext';

/**
 * Componente principal do portfólio
 * Organiza todas as seções em uma página única com scroll suave
 */
function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-secondary-50">
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
  );
}

export default App;
