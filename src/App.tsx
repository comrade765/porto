import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Contact } from './components/Contact';
import { CustomCursor } from './components/CustomCursor';
import { GrainEffect } from './components/GrainEffect';

function App() {
  return (
    <div className="bg-black text-gray-100 cursor-none">
      {/* Global Effects */}
      <CustomCursor />
      <GrainEffect />

      {/* Navigation */}
      <Navigation />

      {/* Sections */}
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>

      {/* Global Styles */}
      <style>{`
        * {
          scrollbar-width: thin;
          scrollbar-color: #333333 #0a0a0a;
        }

        *::-webkit-scrollbar {
          width: 8px;
        }

        *::-webkit-scrollbar-track {
          background: #0a0a0a;
        }

        *::-webkit-scrollbar-thumb {
          background: #333333;
          border-radius: 4px;
        }

        *::-webkit-scrollbar-thumb:hover {
          background: #3a3a3a;
        }

        html {
          scroll-behavior: smooth;
        }

        body {
          font-family: 'Inter', sans-serif;
        }

        code, pre {
          font-family: 'JetBrains Mono', monospace;
        }

        /* Selection styling */
        ::selection {
          background-color: #3a3a3a;
          color: #f5f5f5;
        }

        /* Smooth transitions */
        button, a {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
      `}</style>
    </div>
  );
}

export default App;
