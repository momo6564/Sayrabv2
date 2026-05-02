import React from 'react';

import Audience from '../components/landing/Audience';
import BookDemo from '../components/landing/BookDemo';
import Features from '../components/landing/Features';
import Footer from '../components/landing/Footer';
import Hero from '../components/landing/Hero';
import HowItWorks from '../components/landing/HowItWorks';
import Navbar from '../components/landing/Navbar';
import PainPoints from '../components/landing/PainPoints';
import Products from '../components/landing/Products';
import SocialProof from '../components/landing/SocialProof';
import USP from '../components/landing/USP';

export const LandingPage: React.FC = () => {
  React.useEffect(() => {
    document.title = 'Sayrab Fundraising | Premium Fundraising Apparel';
  }, []);

  return (
    <div className="sayrabv2-theme">
      <main className="min-h-screen">
        <Navbar />
        <Hero />
        <USP />
        <PainPoints />
        <HowItWorks />
        <Products />
        <Features />
        <Audience />
        <SocialProof />
        <BookDemo />
        <Footer />
      </main>
    </div>
  );
};
