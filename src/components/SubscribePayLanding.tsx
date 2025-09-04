import React from 'react';
import HeroSection from './HeroSection';
import KeyFeatures from './KeyFeatures';
import Footer from './Footer';
import Card from './ui/Card';
import Button from './ui/Button';
import Badge from './ui/Badge';
import { 
  Play, 
  CheckCircle, 
  ArrowRight, 
  Zap, 
  Shield, 
  Users, 
  BarChart3, 
  Smartphone,
  Globe,
  TrendingUp,
  Brain,
  Target
} from 'lucide-react';

const SubscribePayLanding: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <KeyFeatures />
      
      {/* Use Cases Section */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="info" size="md" className="mb-4">Industry Solutions</Badge>
            <h2 className="heading-2 text-gray-900 mb-6">
              Powering Subscriptions Across <span className="text-gradient">Industries</span>
            </h2>
            <p className="body-large text-gray-600 max-w-3xl mx-auto">
              From OTT platforms to SaaS applications, our payment gateway adapts to your business needs.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Play, title: 'OTT Platforms', desc: 'Netflix, Prime Video, Disney+', color: 'red' },
              { icon: Globe, title: 'SaaS Applications', desc: 'Zoom, Slack, Adobe Creative', color: 'blue' },
              { icon: Users, title: 'EdTech Platforms', desc: 'Coursera, Udemy, Skillshare', color: 'green' },
              { icon: Target, title: 'Fitness Apps', desc: 'Cult.fit, Nike Training', color: 'purple' }
            ].map((useCase, index) => (
              <Card key={index} variant="default" padding="lg" hover className="text-center group">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl flex items-center justify-center bg-gradient-to-br ${
                  useCase.color === 'red' ? 'from-red-500 to-pink-500' :
                  useCase.color === 'blue' ? 'from-blue-500 to-cyan-500' :
                  useCase.color === 'green' ? 'from-green-500 to-emerald-500' :
                  'from-purple-500 to-indigo-500'
                } shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <useCase.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{useCase.title}</h3>
                <p className="text-gray-600 text-sm">{useCase.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <Badge variant="success" size="md" className="mb-4">Why SubscribePay?</Badge>
                <h2 className="heading-2 text-gray-900 mb-6">
                  Built for the Future of <span className="text-gradient">Recurring Payments</span>
                </h2>
                <p className="body-large text-gray-600">
                  Experience next-generation payment processing with AI-powered insights and seamless integrations.
                </p>
              </div>
              
              <div className="space-y-6">
                {[
                  { icon: Zap, title: 'Lightning Fast', desc: '5-minute integration with comprehensive APIs' },
                  { icon: Shield, title: 'Bank-Grade Security', desc: 'PCI DSS certified with end-to-end encryption' },
                  { icon: TrendingUp, title: 'Smart Analytics', desc: 'AI-powered insights to optimize revenue' }
                ].map((feature, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <feature.icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">{feature.title}</h3>
                      <p className="text-gray-600 text-sm">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <Card variant="glass" padding="lg" className="shadow-2xl">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-700">Success Rate</span>
                    <Badge variant="success" size="sm">99.2%</Badge>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div className="bg-gradient-to-r from-green-500 to-blue-500 h-3 rounded-full" style={{ width: '99.2%' }}></div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 pt-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-gray-900">₹500Cr+</div>
                      <div className="text-xs text-gray-500">Processed</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-gray-900">10K+</div>
                      <div className="text-xs text-gray-500">Merchants</div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* AI Insights Section */}
      <section className="py-24 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Brain className="h-6 w-6 text-purple-600" />
              <Badge variant="purple" size="md">AI-Powered</Badge>
            </div>
            <h2 className="heading-2 text-gray-900 mb-6">
              Intelligent Payment <span className="text-gradient">Optimization</span>
            </h2>
            <p className="body-large text-gray-600 max-w-3xl mx-auto">
              Our AI engine continuously learns from payment patterns to maximize success rates and minimize failures.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {[
              { title: 'Smart Retry Logic', desc: 'AI determines optimal retry timing', metric: '98.5%', color: 'blue' },
              { title: 'Fraud Detection', desc: 'Real-time transaction monitoring', metric: '99.9%', color: 'red' },
              { title: 'Revenue Insights', desc: 'Predictive analytics for growth', metric: '+15%', color: 'green' }
            ].map((insight, index) => (
              <Card key={index} variant="glass" padding="lg" hover className="text-center">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl flex items-center justify-center bg-gradient-to-br ${
                  insight.color === 'blue' ? 'from-blue-500 to-purple-500' :
                  insight.color === 'red' ? 'from-red-500 to-pink-500' :
                  'from-green-500 to-emerald-500'
                } shadow-lg`}>
                  <Brain className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{insight.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{insight.desc}</p>
                <div className={`text-3xl font-bold ${
                  insight.color === 'blue' ? 'text-blue-600' :
                  insight.color === 'red' ? 'text-red-600' :
                  'text-green-600'
                }`}>
                  {insight.metric}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="info" size="md" className="mb-4">Simple Process</Badge>
            <h2 className="heading-2 text-gray-900 mb-6">
              Get Started in <span className="text-gradient">3 Simple Steps</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: '01', title: 'Sign Up', desc: 'Create your account and complete KYC verification' },
              { step: '02', title: 'Integrate', desc: 'Use our APIs and SDKs for quick integration' },
              { step: '03', title: 'Go Live', desc: 'Start processing payments with full support' }
            ].map((step, index) => (
              <div key={index} className="text-center relative">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <span className="text-white font-bold text-lg">{step.step}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.desc}</p>
                {index < 2 && (
                  <ArrowRight className="hidden md:block absolute top-8 -right-4 h-6 w-6 text-gray-400" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-24 bg-gradient-to-br from-blue-600 to-purple-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="heading-2 text-white mb-6">
            Ready to Transform Your Payment Experience?
          </h2>
          <p className="body-large text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of businesses already using SubscribePay to power their subscription revenue.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg" className="bg-white text-blue-600 hover:bg-gray-50">
              Start Free Trial
            </Button>
            <Button variant="ghost" size="lg" className="text-white border-white hover:bg-white/10">
              Schedule Demo
            </Button>
          </div>
          <div className="flex items-center justify-center space-x-8 mt-8 text-sm text-blue-200">
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-4 w-4" />
              <span>No setup fees</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-4 w-4" />
              <span>Free migration</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-4 w-4" />
              <span>24/7 support</span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SubscribePayLanding;