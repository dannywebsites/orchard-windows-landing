import Header from './components/Header';
import Hero from './components/Hero';
import ProblemSection from './components/ProblemSection';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import QuoteForm from './components/QuoteForm';
import Footer from './components/Footer';
import CookieBanner from './components/CookieBanner';
import PrivacyPolicy from './components/PrivacyPolicy';
import { useState } from 'react';

function App() {
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);

  return (
    <>
      <PrivacyPolicy isOpen={isPrivacyOpen} onClose={() => setIsPrivacyOpen(false)} />
      <Header />
      <main>
        <Hero />
        <Testimonials />
        <ProblemSection />
        <HowItWorks />
        <QuoteForm />
      </main>
      <Footer onOpenPrivacy={() => setIsPrivacyOpen(true)} />
      <CookieBanner onOpenPrivacy={() => setIsPrivacyOpen(true)} />
    </>
  );
}

export default App;
