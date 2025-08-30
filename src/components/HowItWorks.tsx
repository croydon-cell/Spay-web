import React, { useEffect, useState } from 'react';
import { FileText, Smartphone, RotateCcw, CreditCard } from 'lucide-react';

const HowItWorks: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 4);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const steps = [
    {
      icon: FileText,
      title: 'Merchant Signs Up',
      description: 'Quick onboarding with minimal documentation and instant account activation.',
    },
    {
      icon: Smartphone,
      title: 'User Subscribes via UPI Autopay',
      description: 'Seamless subscription setup with UPI Autopay for automated recurring payments.',
    },
    {
      icon: RotateCcw,
      title: 'Smart Retry & Billing',
      description: 'AI-powered retry logic ensures maximum success rates for failed transactions.',
    },
    {
      icon: CreditCard,
      title: 'Merchant Gets Paid',
      description: 'Fast T+1 settlements with real-time notifications and detailed analytics.',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Simple, secure, and seamless subscription payments in just four steps
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-200 transform -translate-y-1/2 hidden lg:block">
            <div 
              className="h-full bg-gradient-to-r from-primary to-primary-light transition-all duration-1000 ease-out"
              style={{ width: `${((activeStep + 1) / 4) * 100}%` }}
            ></div>
          </div>

          <div className="grid lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`relative text-center transition-all duration-500 ${
                  index <= activeStep ? 'opacity-100 scale-100' : 'opacity-60 scale-95'
                }`}
              >
                {/* Step number and icon */}
                <div className="relative mb-6">
                  <div className={`w-20 h-20 mx-auto rounded-full flex items-center justify-center transition-all duration-500 ${
                    index <= activeStep 
                      ? 'bg-gradient-to-br from-primary to-primary-light shadow-lg' 
                      : 'bg-gray-200'
                  }`}>
                    <step.icon 
                      className={`h-10 w-10 transition-colors duration-500 ${
                        index <= activeStep ? 'text-white' : 'text-gray-400'
                      }`} 
                      strokeWidth={1.5} 
                    />
                  </div>
                  <div className={`absolute -top-2 -right-2 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-500 ${
                    index <= activeStep 
                      ? 'bg-white text-primary shadow-md' 
                      : 'bg-gray-100 text-gray-400'
                  }`}>
                    {index + 1}
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Progress indicators for mobile */}
        <div className="flex justify-center mt-12 lg:hidden">
          <div className="flex space-x-2">
            {steps.map((_, index) => (
              <div
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index <= activeStep ? 'bg-primary' : 'bg-gray-300'
                }`}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;