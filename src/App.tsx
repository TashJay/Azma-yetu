import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Features } from './components/Features';
import { Impact } from './components/Impact';
import { GetInvolved } from './components/GetInvolved';
import { CallToAction } from './components/CallToAction';
import { Footer } from './components/Footer';
import { LanguageProvider } from './contexts/LanguageContext';
import { ScrollProgress } from './components/ScrollProgress';
import { FAQ } from './components/FAQ';
import { motion } from 'motion/react';

export default function App() {
  return (
    <LanguageProvider>
      <motion.div 
        initial={{ opacity: 0, filter: "blur(10px)" }}
        animate={{ opacity: 1, filter: "blur(0px)" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="min-h-screen font-sans selection:bg-ochre-500/30 selection:text-earth-900 relative"
      >
        <ScrollProgress />
        
        {/* Background Watermark */}
        <div 
          className="absolute inset-0 z-0 pointer-events-none opacity-10 mix-blend-multiply"
          style={{
            backgroundImage: 'url("/logo/azmalogo.png")',
            backgroundRepeat: 'repeat',
            backgroundSize: '500px',
            backgroundPosition: 'center top'
          }}
        />

        <Header />
        <main className="relative z-10">
          <Hero />
          <About />
          <Features />
          <Impact />
          <FAQ />
          <GetInvolved />
          <CallToAction />
        </main>
        <Footer />
      </motion.div>
    </LanguageProvider>
  );
}
