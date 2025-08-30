import React from 'react';
import { ArrowRight, Zap, Shield, Repeat } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              India's First{' '}
              <span className="bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
                Subscription
              </span>
              -Focused Payment Gateway
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed">
              Seamlessly manage recurring payments across OTT, EdTech, SaaS, Fitness, and more with our intelligent retry system and UPI Autopay integration.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200 hover:scale-105 flex items-center justify-center group">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </button>
              <button className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200">
                Book a Demo
              </button>
            </div>
          </div>
          
          <div className="relative animate-slide-up">
            <div className="glassmorphic rounded-3xl p-8 shadow-2xl">
              <div className="space-y-6">
                <div className="flex items-center justify-between p-4 bg-white/50 rounded-xl">
                  <div className="flex items-center space-x-3">
                    <Zap className="h-6 w-6 text-primary" strokeWidth={1.5} />
                    <span className="font-semibold">Smart Retry</span>
                  </div>
                  <span className="text-green-600 font-bold">98.5%</span>
                </div>
                
                <div className="flex items-center justify-between p-4 bg-white/50 rounded-xl">
                  <div className="flex items-center space-x-3">
                    <Shield className="h-6 w-6 text-primary" strokeWidth={1.5} />
                    <span className="font-semibold">Security</span>
                  </div>
                  <span className="text-green-600 font-bold">PCI DSS</span>
                </div>
                
                <div className="flex items-center justify-between p-4 bg-white/50 rounded-xl">
                  <div className="flex items-center space-x-3">
                    <Repeat className="h-6 w-6 text-primary" strokeWidth={1.5} />
                    <span className="font-semibold">Success Rate</span>
                  </div>
                  <span className="text-green-600 font-bold">99.2%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;