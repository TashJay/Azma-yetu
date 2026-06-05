import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Features } from './components/Features';
import { CallToAction } from './components/CallToAction';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-ochre-500/30 selection:text-forest-900">
      <Header />
      <main>
        <Hero />
        <About />
        <Features />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}
