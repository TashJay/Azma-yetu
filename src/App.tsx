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

export default function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen font-sans selection:bg-ochre-500/30 selection:text-earth-900 relative">
        <ScrollProgress />
        
        {/* Background Watermark */}
        <div className="fixed inset-0 z-[-1] pointer-events-none flex items-center justify-center overflow-hidden opacity-[0.25]">
          <img 
            src="/logo/azmalogo.png" 
            alt="" 
            className="w-[90%] md:w-[60%] max-w-2xl object-contain" 
          />
        </div>

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
      </div>
    </LanguageProvider>
  );
}
