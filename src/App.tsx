import Header from './components/Header';
import Hero from './components/Hero';


import Testimonials from './components/Testimonials';
import RecentProjects from './components/RecentProjects';
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
        <RecentProjects />
        <QuoteForm />
      </main>
      <Footer onOpenPrivacy={() => setIsPrivacyOpen(true)} />
      <CookieBanner onOpenPrivacy={() => setIsPrivacyOpen(true)} />
    </>
  );
}

export default App;
