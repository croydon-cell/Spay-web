import React from 'react';
import Navigation from './Navigation';
import HeroSection from './HeroSection';
import KeyFeatures from './KeyFeatures';
import UseCases from './UseCases';
import WhyChoose from './WhyChoose';
import AIInsights from './AIInsights';
import HowItWorks from './HowItWorks';
import CallToAction from './CallToAction';
import Footer from './Footer';

const SubscribePayLanding: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <HeroSection />
      <KeyFeatures />
      <UseCases />
      <WhyChoose />
      <AIInsights />
      <HowItWorks />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default SubscribePayLanding;