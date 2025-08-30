import React from 'react';
import { Calendar, Smartphone, Plug, Box } from 'lucide-react';

const KeyFeatures: React.FC = () => {
  const features = [
    {
      icon: Calendar,
      title: 'Subscription-First Design',
      description: 'Built specifically for recurring payments with intelligent billing cycles and automated renewals.',
    },
    {
      icon: Smartphone,
      title: 'UPI Autopay + Smart Retry',
      description: 'Seamless UPI Autopay integration with AI-powered retry logic to maximize success rates.',
    },
    {
      icon: Plug,
      title: 'Seamless Integrations',
      description: 'Easy-to-use APIs and SDKs for quick integration with your existing systems.',
    },
    {
      icon: Box,
      title: 'Future-Ready',
      description: 'CBDC-ready infrastructure designed to support the next generation of payment technologies.',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Why Choose SubscribePay?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the next generation of subscription payments with our cutting-edge features
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="glassmorphic rounded-2xl p-6 hover:scale-105 transition-all duration-300 hover:shadow-xl group cursor-pointer"
            >
              <div className="mb-4">
                <feature.icon className="h-12 w-12 text-primary group-hover:scale-110 transition-transform duration-300" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyFeatures;