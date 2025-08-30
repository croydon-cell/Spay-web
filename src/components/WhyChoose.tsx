import React, { useEffect, useState } from 'react';
import { Shield, Laptop, Zap, RotateCcw } from 'lucide-react';

const WhyChoose: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('why-choose');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const benefits = [
    {
      icon: Shield,
      title: 'Secure & Compliant',
      description: 'Bank-grade security with PCI DSS compliance and advanced fraud protection.',
    },
    {
      icon: Laptop,
      title: 'Simple Onboarding',
      description: 'Get started in minutes with our streamlined KYC process and easy integration.',
    },
    {
      icon: Zap,
      title: 'Fast Settlements',
      description: 'Lightning-fast settlements with T+1 processing and real-time notifications.',
    },
    {
      icon: RotateCcw,
      title: 'Smart Retry',
      description: 'AI-powered retry logic that learns from patterns to maximize success rates.',
    },
  ];

  return (
    <section id="why-choose" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            The SubscribePay Advantage
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience unmatched reliability, security, and performance for your subscription business
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className={`flex items-start space-x-6 p-6 rounded-2xl transition-all duration-700 ${
                isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-light rounded-2xl flex items-center justify-center">
                  <benefit.icon className="h-8 w-8 text-white" strokeWidth={1.5} />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;