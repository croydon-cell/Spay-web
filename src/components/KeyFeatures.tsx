import React from 'react';
import { Calendar, Smartphone, Plug, Box, ArrowRight, Sparkles } from 'lucide-react';
import Card from './ui/Card';
import Button from './ui/Button';

const KeyFeatures: React.FC = () => {
  const features = [
    {
      icon: Calendar,
      title: 'Subscription-First Design',
      description: 'Built specifically for recurring payments with intelligent billing cycles and automated renewals.',
      color: 'blue',
      stats: '99.5% Uptime'
    },
    {
      icon: Smartphone,
      title: 'UPI Autopay + Smart Retry',
      description: 'Seamless UPI Autopay integration with AI-powered retry logic to maximize success rates.',
      color: 'green',
      stats: '98.5% Success'
    },
    {
      icon: Plug,
      title: 'Seamless Integrations',
      description: 'Easy-to-use APIs and SDKs for quick integration with your existing systems.',
      color: 'purple',
      stats: '5-min Setup'
    },
    {
      icon: Box,
      title: 'Future-Ready',
      description: 'CBDC-ready infrastructure designed to support the next generation of payment technologies.',
      color: 'orange',
      stats: 'CBDC Ready'
    },
  ];

  const colorClasses = {
    blue: {
      bg: 'from-blue-500 to-blue-600',
      light: 'from-blue-50 to-blue-100',
      text: 'text-blue-600',
      border: 'border-blue-200'
    },
    green: {
      bg: 'from-green-500 to-green-600',
      light: 'from-green-50 to-green-100',
      text: 'text-green-600',
      border: 'border-green-200'
    },
    purple: {
      bg: 'from-purple-500 to-purple-600',
      light: 'from-purple-50 to-purple-100',
      text: 'text-purple-600',
      border: 'border-purple-200'
    },
    orange: {
      bg: 'from-orange-500 to-orange-600',
      light: 'from-orange-50 to-orange-100',
      text: 'text-orange-600',
      border: 'border-orange-200'
    }
  };

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20 animate-fade-in-up">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Sparkles className="h-6 w-6 text-blue-600" />
            <span className="text-blue-600 font-semibold text-lg">Why Choose SubscribePay?</span>
          </div>
          <h2 className="heading-2 text-gray-900 mb-6">
            Experience the Next Generation of{' '}
            <span className="text-gradient">Subscription Payments</span>
          </h2>
          <p className="body-large text-gray-600 max-w-3xl mx-auto">
            Discover cutting-edge features designed to maximize your revenue and provide seamless payment experiences for your customers.
          </p>
        </div>
        
        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => {
            const colors = colorClasses[feature.color as keyof typeof colorClasses];
            return (
              <Card
                key={index}
                variant="default"
                padding="lg"
                hover={true}
                className={`group cursor-pointer relative overflow-hidden border-2 ${colors.border} bg-gradient-to-br ${colors.light}`}
              >
                {/* Background Decoration */}
                <div className="absolute top-0 right-0 w-24 h-24 opacity-10">
                  <feature.icon className="w-full h-full" />
                </div>
                
                <div className="relative space-y-6">
                  {/* Icon */}
                  <div className="flex items-center justify-between">
                    <div className={`w-14 h-14 bg-gradient-to-br ${colors.bg} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                      <feature.icon className="h-7 w-7 text-white" strokeWidth={2} />
                    </div>
                    <div className={`text-xs font-bold ${colors.text} bg-white/80 px-3 py-1 rounded-full border ${colors.border}`}>
                      {feature.stats}
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="space-y-3">
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-gray-700 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-sm">
                      {feature.description}
                    </p>
                  </div>
                  
                  {/* Learn More Link */}
                  <div className="flex items-center space-x-2 text-sm font-semibold text-gray-500 group-hover:text-blue-600 transition-colors">
                    <span>Learn more</span>
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
              </Card>
            );
          })}
        </div>
        
        {/* CTA Section */}
        <div className="text-center animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          <Card variant="glass" padding="xl" className="max-w-4xl mx-auto">
            <div className="space-y-6">
              <h3 className="heading-3 text-gray-900">
                Ready to Transform Your Payment Experience?
              </h3>
              <p className="body-medium text-gray-600 max-w-2xl mx-auto">
                Join thousands of businesses already using SubscribePay to power their subscription revenue.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="primary" size="lg" icon={ArrowRight} iconPosition="right">
                  Start Free Trial
                </Button>
                <Button variant="secondary" size="lg">
                  Schedule Demo
                </Button>
              </div>
              <div className="flex items-center justify-center space-x-8 text-sm text-gray-500">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>No setup fees</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Free migration</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>24/7 support</span>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default KeyFeatures;