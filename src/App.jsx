import { ThemeProvider } from './components/ThemeProvider'
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Skills } from './components/Skills'
import { Experience } from './components/Experience'
import { Projects } from './components/Projects'
import { Contact } from './components/Contact'
import { Certifications } from './components/Certifications'
import { Achievements } from './components/Achievements'
import { Education } from './components/Education'
import { motion, useScroll, useSpring } from 'framer-motion'

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <ThemeProvider>
      <div className="min-h-screen flex flex-col font-sans selection:bg-primary-500/30 selection:text-primary-500 relative overflow-hidden">
        
        {/* Animated Background blobs */}
        <div className="absolute top-0 left-[-20%] w-[60%] h-[600px] bg-primary-500/20 dark:bg-primary-500/10 rounded-full mix-blend-multiply filter blur-[120px] opacity-70 animate-blob pointer-events-none"></div>
        <div className="absolute top-[20%] right-[-10%] w-[50%] h-[500px] bg-purple-500/20 dark:bg-purple-500/10 rounded-full mix-blend-multiply filter blur-[120px] opacity-70 animate-blob animation-delay-2000 pointer-events-none"></div>
        <div className="absolute bottom-[-20%] left-[20%] w-[60%] h-[600px] bg-cyan-500/20 dark:bg-cyan-500/10 rounded-full mix-blend-multiply filter blur-[120px] opacity-70 animate-blob animation-delay-4000 pointer-events-none"></div>

        {/* Scroll Progress Bar */}
        <motion.div
          className="fixed top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-primary-500 via-purple-500 to-cyan-500 origin-[0%] z-[60]"
          style={{ scaleX }}
        />

        <Navbar />
        <main className="flex-grow relative z-10">
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Certifications />
          <Achievements />
          <Education />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default App
