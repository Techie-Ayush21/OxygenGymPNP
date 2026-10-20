import React from 'react';
import UtilityBar from './components/UtilityBar';
import Header from './components/Header';
import Hero from './components/Hero';
import QuickFacts from './components/QuickFacts';
import About from './components/About';
import Facilities from './components/Facilities';
import MembershipOffers from './components/MembershipOffers';
import WhyOxygen from './components/WhyOxygen';
import Gallery from './components/Gallery';
import FAQ from './components/FAQ';
import LocationHours from './components/LocationHours';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

export default function App() {
  return (
    <div className="app-layout" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* 1. Slim Utility Bar */}
      <UtilityBar />

      {/* 2. Main Sticky Navigation Header */}
      <Header />

      {/* 3. Main Content Landmark */}
      <main id="main-content" style={{ flex: 1 }}>
        <Hero />
        <QuickFacts />
        <About />
        <Facilities />
        <MembershipOffers />
        <WhyOxygen />
        <Gallery />
        <FAQ />
        <LocationHours />
        <FinalCTA />
      </main>

      {/* 4. Structured Footer */}
      <Footer />

      {/* 5. Persistent Floating WhatsApp Action */}
      <FloatingWhatsApp />
    </div>
  );
}
