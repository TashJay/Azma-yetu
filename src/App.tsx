import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Features } from './components/Features';
import { Impact } from './components/Impact';
import { GetInvolved } from './components/GetInvolved';
import { CallToAction } from './components/CallToAction';
import { Footer } from './components/Footer';
import { AbstractCommunity3D } from './components/AbstractCommunity3D';
import { LanguageProvider } from './contexts/LanguageContext';
import { ScrollProgress } from './components/ScrollProgress';
import { FAQ } from './components/FAQ';

export default function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen font-sans selection:bg-ochre-500/30 selection:text-earth-900 relative">
        <ScrollProgress />
        <AbstractCommunity3D />
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
