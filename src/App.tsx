import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { OurWork } from './components/OurWork';
import { Founders } from './components/Founders';
import { GetInvolved } from './components/GetInvolved';
import { Payment } from './components/Payment';
import { FAQ } from './components/FAQ';
import { CallToAction } from './components/CallToAction';
import { Footer } from './components/Footer';
import { LanguageProvider } from './contexts/LanguageContext';
import { ScrollProgress } from './components/ScrollProgress';
import { motion } from 'motion/react';

export default function App() {
  return (
    <LanguageProvider>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="min-h-[100dvh] flex flex-col font-sans selection:bg-ochre-500/30 selection:text-earth-900 relative"
      >
        <ScrollProgress />
        <Header />
        <main className="flex-grow">
          <Hero />
          <About />
          <OurWork />
          <Founders />
          <GetInvolved />
          <Payment />
          <FAQ />
          <CallToAction />
        </main>
        <Footer />
      </motion.div>
    </LanguageProvider>
  );
}
