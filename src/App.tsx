import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Features } from './components/Features';
import { Impact } from './components/Impact';
import { ImageCarousel } from './components/ImageCarousel';
import { GetInvolved } from './components/GetInvolved';
import { Founders } from './components/Founders';
import { Payment } from './components/Payment';
import { CallToAction } from './components/CallToAction';
import { Footer } from './components/Footer';
import { LanguageProvider } from './contexts/LanguageContext';
import { ScrollProgress } from './components/ScrollProgress';
import { FAQ } from './components/FAQ';
import { motion, useScroll, useTransform } from 'motion/react';

export default function App() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 5000], [0, 2000]);

  return (
    <LanguageProvider>
      <motion.div 
        initial={{ opacity: 0, filter: "blur(10px)" }}
        animate={{ opacity: 1, filter: "blur(0px)" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="min-h-[100dvh] flex flex-col font-sans selection:bg-ochre-500/30 selection:text-earth-900 relative bg-[#fafafa]"
      >
        <ScrollProgress />
        
        {/* Background Watermark */}
        <div 
          className="fixed inset-0 z-0 pointer-events-none flex items-center justify-center overflow-hidden mix-blend-multiply"
        >
          <motion.img 
            style={{ y }}
            src="/logo/azmalogo.png" 
            alt="Watermark" 
            className="w-[90%] md:w-[60%] max-w-3xl object-contain opacity-[0.03]" 
          />
        </div>

        <Header />
        <main className="relative z-10 flex-grow">
          <Hero />
          <About />
          <Features />
          <ImageCarousel />
          <Impact />
          <Founders />
          <FAQ />
          <GetInvolved />
          <Payment />
          <CallToAction />
        </main>
        <Footer />
      </motion.div>
    </LanguageProvider>
  );
}
