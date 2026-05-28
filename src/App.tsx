import { useState } from 'react';
import ParticleBackground from './components/ParticleBackground';
import LoadingScreen from './components/LoadingScreen';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Achievements from './components/Achievements';
import Education from './components/Education';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className={`min-h-screen relative ${darkMode ? 'bg-dark-900' : 'bg-slate-50'}`}>
        <div className="scan-line" />
        {!loading && <ParticleBackground />}
        <LoadingScreen onComplete={() => setLoading(false)} />
        {!loading && (
          <>
            <Navbar darkMode={darkMode} toggleDark={() => setDarkMode(d => !d)} />
            <main className="relative z-10">
              <Hero />
              <About />
              <Experience />
              <Skills />
              <Projects />
              <Certifications />
              <Achievements />
              <Education />
              <Resume />
              <Contact />
            </main>
            <Footer />
          </>
        )}
      </div>
    </div>
  );
}
