import React from 'react';
import { ArrowRight, Zap, Shield, Repeat, Play, Star } from 'lucide-react';
import Button from './ui/Button';
import Card from './ui/Card';
import Badge from './ui/Badge';

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-100/20 to-purple-100/20 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in-up">
            {/* Badge */}
            <div className="flex items-center space-x-3">
              <Badge variant="info" size="md" className="bg-blue-50 text-blue-700 border-blue-200">
                <Star className="h-3 w-3 mr-1" />
                #1 Subscription Gateway
              </Badge>
              <Badge variant="success" size="md">
                99.2% Success Rate
              </Badge>
            </div>
            
            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="heading-1 text-gray-900 leading-tight">
                <span className="text-gradient bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
                  Smart Subscription
                </span>
                <br />
                Payment Gateway
              </h1>
              
              <p className="body-large text-gray-600 leading-relaxed max-w-lg">
                Seamlessly manage recurring payments across OTT, EdTech, SaaS, Fitness, Cable TV, and ISPs powered by UPI AutoPay and an intelligent retry system.
              </p>
            </div>
            
            {/* Stats */}
            <div className="flex items-center space-x-8 py-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">10K+</div>
                <div className="text-sm text-gray-500">Merchants</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">₹500Cr+</div>
                <div className="text-sm text-gray-500">Processed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">99.2%</div>
                <div className="text-sm text-gray-500">Uptime</div>
              </div>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="primary" 
                size="lg" 
                icon={ArrowRight} 
                iconPosition="right"
                className="group"
              >
                Get Started Free
              </Button>
              <Button 
                variant="secondary" 
                size="lg" 
                icon={Play} 
                iconPosition="left"
              >
                Watch Demo
              </Button>
            </div>
            
            {/* Trust Indicators */}
            <div className="flex items-center space-x-6 pt-4">
              <div className="flex items-center space-x-2">
                <Shield className="h-5 w-5 text-green-600" />
                <span className="text-sm font-medium text-gray-700">PCI DSS Certified</span>
              </div>
              <div className="flex items-center space-x-2">
                <Zap className="h-5 w-5 text-blue-600" />
                <span className="text-sm font-medium text-gray-700">5-min Integration</span>
              </div>
            </div>
          </div>
          
          {/* Right Content - Interactive Dashboard Preview */}
          <div className="relative animate-fade-in-scale" style={{ animationDelay: '0.2s' }}>
            <Card variant="glass" padding="lg" className="shadow-2xl">
              <div className="space-y-6">
                {/* Header */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <Badge variant="success" size="sm">Live</Badge>
                </div>
                
                {/* Metrics Cards */}
                <div className="grid grid-cols-2 gap-4">
                  <Card variant="default" padding="md" className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200 hover:shadow-lg transition-all duration-300">
                    <div className="flex items-center justify-between">
                      <div>
                        <Zap className="h-6 w-6 text-blue-600 mb-2" />
                        <div className="text-2xl font-bold text-blue-900">98.5%</div>
                        <div className="text-sm text-blue-700">Smart Retry</div>
                      </div>
                      <div className="text-green-600 text-sm font-semibold">+2.1%</div>
                    </div>
                  </Card>
                  
                  <Card variant="default" padding="md" className="bg-gradient-to-br from-green-50 to-green-100 border-green-200 hover:shadow-lg transition-all duration-300">
                    <div className="flex items-center justify-between">
                      <div>
                        <Shield className="h-6 w-6 text-green-600 mb-2" />
                        <div className="text-2xl font-bold text-green-900">100%</div>
                        <div className="text-sm text-green-700">Security</div>
                      </div>
                      <Badge variant="success" size="sm">PCI DSS</Badge>
                    </div>
                  </Card>
                  
                  <Card variant="default" padding="md" className="bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200 hover:shadow-lg transition-all duration-300 col-span-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <Repeat className="h-6 w-6 text-purple-600" />
                        <div>
                          <div className="text-2xl font-bold text-purple-900">₹2.4Cr</div>
                          <div className="text-sm text-purple-700">Monthly Volume</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-green-600 text-sm font-semibold">+15.3%</div>
                        <div className="text-xs text-gray-500">vs last month</div>
                      </div>
                    </div>
                  </Card>
                </div>
                
                {/* Transaction Flow */}
                <div className="space-y-3">
                  <div className="text-sm font-semibold text-gray-700 mb-3">Recent Transactions</div>
                  {[
                    { name: 'Netflix Premium', amount: '₹649', status: 'success', time: '2m ago' },
                    { name: 'Spotify Family', amount: '₹179', status: 'success', time: '5m ago' },
                    { name: 'Adobe Creative', amount: '₹1,675', status: 'retry', time: '8m ago' }
                  ].map((transaction, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-white/60 rounded-xl border border-white/40 hover:bg-white/80 transition-all duration-200">
                      <div className="flex items-center space-x-3">
                        <div className={`w-2 h-2 rounded-full ${
                          transaction.status === 'success' ? 'bg-green-500' : 
                          transaction.status === 'retry' ? 'bg-yellow-500' : 'bg-red-500'
                        }`}></div>
                        <div>
                          <div className="font-medium text-gray-900 text-sm">{transaction.name}</div>
                          <div className="text-xs text-gray-500">{transaction.time}</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-semibold text-gray-900">{transaction.amount}</div>
                        <Badge 
                          variant={transaction.status === 'success' ? 'success' : transaction.status === 'retry' ? 'warning' : 'error'} 
                          size="sm"
                        >
                          {transaction.status}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-blue-400 to-purple-500 rounded-2xl flex items-center justify-center shadow-xl animate-pulse">
              <Zap className="h-8 w-8 text-white" />
            </div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-green-400 to-blue-500 rounded-xl flex items-center justify-center shadow-lg animate-pulse" style={{ animationDelay: '1s' }}>
              <Shield className="h-6 w-6 text-white" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;