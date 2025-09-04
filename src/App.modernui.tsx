import React, { useEffect, useState } from 'react';
import SubscribePayLanding from './components/SubscribePayLanding';
import DashboardMain from './components/Dashboard/DashboardMain';
import AdminDashboard from './components/Admin/AdminDashboard';
import CheckoutPage from './components/Checkout/CheckoutPage';
import TopNavBar from './components/TopNavBar';
import Card from './components/ui/Card';
import Button from './components/ui/Button';
import Badge from './components/ui/Badge';
import CableDashboard from './components/CableTV/CableDashboard';
import CustomerOnboarding from './components/CableTV/CustomerOnboarding';
import ServicePlanManager from './components/CableTV/ServicePlanManager';
import CustomerPortal from './components/CableTV/CustomerPortal';
import { User, Settings, CreditCard, BarChart3, Users, AlertCircle, Tv, UserPlus, Package, UserCheck } from 'lucide-react';
import './index.css';

import { View } from './types/View';

function App() {
  const [currentView, setCurrentView] = useState<View>('landing');
  const [token, setToken] = useState<string | null>(null);

  // Sync navigation with browser history
  useEffect(() => {
    window.history.replaceState({ view: currentView }, '', `#${currentView}`);
  }, [currentView]);

  useEffect(() => {
    const onPopState = (e: PopStateEvent) => {
      if (e.state && e.state.view) {
        setCurrentView(e.state.view);
      }
    };
    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);

  const handleNavigate = (view: View) => {
    setCurrentView(view);
    window.history.pushState({ view }, '', `#${view}`);
  };

  return (
    <div className="App min-h-screen bg-gray-50">
      <TopNavBar
        onNavigate={handleNavigate}
        onLogout={() => { setToken(null); handleNavigate('login'); }}
        currentView={currentView}
      />
      
      <main className="transition-all duration-300 ease-in-out">
        {currentView === 'landing' && (
          <div className="animate-fade-in-up">
            <SubscribePayLanding />
          </div>
        )}
        {currentView === 'dashboard' && (
          <div className="animate-fade-in-scale">
            <DashboardMain />
          </div>
        )}
        {currentView === 'login' && (
          <div className="animate-fade-in-up">
            <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 flex items-center justify-center px-4">
              <Card variant="glass" padding="xl" className="w-full max-w-md">
                <div className="text-center space-y-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto shadow-lg">
                    <User className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h1 className="heading-3 text-gray-900 mb-2">Welcome Back</h1>
                    <p className="body-medium text-gray-600">Sign in to your SubscribePay account</p>
                  </div>
                  <div className="space-y-4">
                    <input
                      type="email"
                      placeholder="Email address"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all duration-200"
                    />
                    <input
                      type="password"
                      placeholder="Password"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all duration-200"
                    />
                    <Button 
                      variant="primary" 
                      size="lg" 
                      className="w-full"
                      onClick={() => {setToken('demo-token'); handleNavigate('dashboard');}}
                    >
                      Sign In
                    </Button>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        )}
        {currentView === 'transactions' && (
          <div className="animate-slide-in-right">
            <div className="max-w-7xl mx-auto px-6 py-12">
              <Card variant="default" padding="xl">
                <div className="flex items-center space-x-3 mb-6">
                  <CreditCard className="h-8 w-8 text-blue-600" />
                  <h1 className="heading-2 text-gray-900">Transactions</h1>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <Card variant="glass" padding="lg" className="bg-gradient-to-br from-green-50 to-green-100 border-green-200">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-green-900">₹24.7L</div>
                      <div className="text-sm text-green-700">Total Volume</div>
                    </div>
                  </Card>
                  <Card variant="glass" padding="lg" className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-blue-900">1,247</div>
                      <div className="text-sm text-blue-700">Transactions</div>
                    </div>
                  </Card>
                  <Card variant="glass" padding="lg" className="bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-purple-900">98.5%</div>
                      <div className="text-sm text-purple-700">Success Rate</div>
                    </div>
                  </Card>
                </div>
                <p className="body-medium text-gray-600 text-center">
                  Transaction management interface is being modernized with enhanced filtering and real-time updates.
                </p>
              </Card>
            </div>
          </div>
        )}
        {currentView === 'payment' && (
          <div className="animate-fade-in-scale">
            <div className="max-w-4xl mx-auto px-6 py-12">
              <Card variant="glass" padding="xl">
                <div className="text-center space-y-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto shadow-xl">
                    <CreditCard className="h-10 w-10 text-white" />
                  </div>
                  <div>
                    <h1 className="heading-2 text-gray-900 mb-4">Payment Demo</h1>
                    <p className="body-large text-gray-600">Experience our seamless payment processing</p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Card variant="default" padding="lg" className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
                      <h3 className="font-semibold text-blue-900 mb-2">UPI Autopay</h3>
                      <p className="text-sm text-blue-700">Seamless recurring payments with UPI</p>
                      <Badge variant="success" size="sm" className="mt-2">Active</Badge>
                    </Card>
                    <Card variant="default" padding="lg" className="bg-gradient-to-br from-green-50 to-green-100 border-green-200">
                      <h3 className="font-semibold text-green-900 mb-2">Smart Retry</h3>
                      <p className="text-sm text-green-700">AI-powered payment retry logic</p>
                      <Badge variant="info" size="sm" className="mt-2">98.5% Success</Badge>
                    </Card>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        )}
        {currentView === 'refund' && (
          <div className="animate-fade-in-up">
            <div className="max-w-4xl mx-auto px-6 py-12">
              <Card variant="default" padding="xl">
                <div className="flex items-center space-x-3 mb-6">
                  <AlertCircle className="h-8 w-8 text-orange-600" />
                  <h1 className="heading-2 text-gray-900">Refund Management</h1>
                </div>
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Card variant="glass" padding="lg" className="bg-gradient-to-br from-orange-50 to-orange-100 border-orange-200">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-orange-900">₹1.2L</div>
                        <div className="text-sm text-orange-700">Refunds Processed</div>
                      </div>
                    </Card>
                    <Card variant="glass" padding="lg" className="bg-gradient-to-br from-red-50 to-red-100 border-red-200">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-red-900">24h</div>
                        <div className="text-sm text-red-700">Average Processing</div>
                      </div>
                    </Card>
                  </div>
                  <p className="body-medium text-gray-600 text-center">
                    Automated refund processing with real-time status updates and customer notifications.
                  </p>
                </div>
              </Card>
            </div>
          </div>
        )}
        {currentView === 'admin' && (
          <div className="animate-slide-in-right">
            <AdminDashboard />
          </div>
        )}
        {currentView === 'checkout' && (
          <div className="animate-fade-in-scale">
            <CheckoutPage />
          </div>
        )}
        {currentView === 'customers' && (
          <div className="animate-fade-in-up">
            <div className="max-w-7xl mx-auto px-6 py-12">
              <Card variant="default" padding="xl">
                <div className="flex items-center space-x-3 mb-6">
                  <Users className="h-8 w-8 text-purple-600" />
                  <h1 className="heading-2 text-gray-900">Customer Management</h1>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                  <Card variant="glass" padding="lg" className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-900">8,934</div>
                      <div className="text-sm text-blue-700">Total Customers</div>
                    </div>
                  </Card>
                  <Card variant="glass" padding="lg" className="bg-gradient-to-br from-green-50 to-green-100 border-green-200">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-900">7,821</div>
                      <div className="text-sm text-green-700">Active Subscriptions</div>
                    </div>
                  </Card>
                  <Card variant="glass" padding="lg" className="bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-purple-900">₹2,847</div>
                      <div className="text-sm text-purple-700">Avg. Revenue</div>
                    </div>
                  </Card>
                  <Card variant="glass" padding="lg" className="bg-gradient-to-br from-orange-50 to-orange-100 border-orange-200">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-orange-900">92%</div>
                      <div className="text-sm text-orange-700">Retention Rate</div>
                    </div>
                  </Card>
                </div>
                <p className="body-medium text-gray-600 text-center">
                  Advanced customer segmentation and lifecycle management tools coming soon.
                </p>
              </Card>
            </div>
          </div>
        )}
        {currentView === 'analytics' && (
          <div className="animate-slide-in-right">
            <div className="max-w-7xl mx-auto px-6 py-12">
              <Card variant="default" padding="xl">
                <div className="flex items-center space-x-3 mb-6">
                  <BarChart3 className="h-8 w-8 text-green-600" />
                  <h1 className="heading-2 text-gray-900">Analytics Dashboard</h1>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <Card variant="glass" padding="lg" className="bg-gradient-to-br from-indigo-50 to-indigo-100 border-indigo-200">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-indigo-900">₹47.2L</div>
                      <div className="text-sm text-indigo-700">Monthly Revenue</div>
                      <Badge variant="success" size="sm" className="mt-2">+15.3%</Badge>
                    </div>
                  </Card>
                  <Card variant="glass" padding="lg" className="bg-gradient-to-br from-teal-50 to-teal-100 border-teal-200">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-teal-900">12,847</div>
                      <div className="text-sm text-teal-700">Active Subscriptions</div>
                      <Badge variant="info" size="sm" className="mt-2">+8.2%</Badge>
                    </div>
                  </Card>
                  <Card variant="glass" padding="lg" className="bg-gradient-to-br from-pink-50 to-pink-100 border-pink-200">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-pink-900">98.5%</div>
                      <div className="text-sm text-pink-700">Success Rate</div>
                      <Badge variant="success" size="sm" className="mt-2">+2.1%</Badge>
                    </div>
                  </Card>
                </div>
                <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-8 text-center">
                  <h3 className="heading-3 text-gray-900 mb-4">Advanced Analytics</h3>
                  <p className="body-medium text-gray-600 mb-6">
                    Comprehensive reporting with AI-powered insights, cohort analysis, and predictive analytics.
                  </p>
                  <Button variant="primary" size="lg">
                    Explore Analytics
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        )}
        {currentView === 'settings' && (
          <div className="animate-fade-in-up">
            <div className="max-w-6xl mx-auto px-6 py-12">
              <Card variant="default" padding="xl">
                <h1 className="heading-2 text-gray-900 mb-6">Settings & Cable TV Solutions</h1>
                <p className="body-medium text-gray-600 mb-8">
                  Explore our Cable TV Autopay solutions and manage platform settings.
                </p>
                
                {/* Cable TV Solutions */}
                <div className="mb-12">
                  <h2 className="heading-3 text-gray-900 mb-6">Cable TV Autopay Solutions</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <Card 
                      variant="default" 
                      padding="lg" 
                      hover 
                      className="cursor-pointer bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200"
                      onClick={() => handleNavigate('cable-dashboard')}
                    >
                      <div className="text-center">
                        <Tv className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                        <h3 className="font-semibold text-blue-900 mb-2">Operator Dashboard</h3>
                        <p className="text-sm text-blue-700">Manage subscribers and collections</p>
                      </div>
                    </Card>
                    
                    <Card 
                      variant="default" 
                      padding="lg" 
                      hover 
                      className="cursor-pointer bg-gradient-to-br from-green-50 to-green-100 border-green-200"
                      onClick={() => handleNavigate('cable-onboarding')}
                    >
                      <div className="text-center">
                        <UserPlus className="h-12 w-12 text-green-600 mx-auto mb-4" />
                        <h3 className="font-semibold text-green-900 mb-2">Customer Onboarding</h3>
                        <p className="text-sm text-green-700">Digital signup with autopay</p>
                      </div>
                    </Card>
                    
                    <Card 
                      variant="default" 
                      padding="lg" 
                      hover 
                      className="cursor-pointer bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200"
                      onClick={() => handleNavigate('cable-plans')}
                    >
                      <div className="text-center">
                        <Package className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                        <h3 className="font-semibold text-purple-900 mb-2">Service Plans</h3>
                        <p className="text-sm text-purple-700">Manage TV packages & pricing</p>
                      </div>
                    </Card>
                    
                    <Card 
                      variant="default" 
                      padding="lg" 
                      hover 
                      className="cursor-pointer bg-gradient-to-br from-orange-50 to-orange-100 border-orange-200"
                      onClick={() => handleNavigate('cable-portal')}
                    >
                      <div className="text-center">
                        <UserCheck className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                        <h3 className="font-semibold text-orange-900 mb-2">Customer Portal</h3>
                        <p className="text-sm text-orange-700">Self-service customer account</p>
                      </div>
                    </Card>
                  </div>
                </div>

                {/* Platform Settings */}
                <div>
                  <h2 className="heading-3 text-gray-900 mb-6">Platform Settings</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl border border-blue-200">
                      <h3 className="font-semibold text-blue-900 mb-2">Account Settings</h3>
                      <p className="text-sm text-blue-700">Manage your account preferences and security settings.</p>
                    </div>
                    <div className="p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-xl border border-green-200">
                      <h3 className="font-semibold text-green-900 mb-2">Payment Configuration</h3>
                      <p className="text-sm text-green-700">Configure payment gateways and processing options.</p>
                    </div>
                    <div className="p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl border border-purple-200">
                      <h3 className="font-semibold text-purple-900 mb-2">API & Webhooks</h3>
                      <p className="text-sm text-purple-700">Manage API keys and webhook configurations.</p>
                    </div>
                    <div className="p-6 bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl border border-orange-200">
                      <h3 className="font-semibold text-orange-900 mb-2">Notifications</h3>
                      <p className="text-sm text-orange-700">Configure email and SMS notification preferences.</p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        )}
        {currentView === 'cable-dashboard' && (
          <div className="animate-fade-in-scale">
            <CableDashboard />
          </div>
        )}
        {currentView === 'cable-onboarding' && (
          <div className="animate-fade-in-up">
            <CustomerOnboarding />
          </div>
        )}
        {currentView === 'cable-plans' && (
          <div className="animate-slide-in-right">
            <ServicePlanManager />
          </div>
        )}
        {currentView === 'cable-portal' && (
          <div className="animate-fade-in-scale">
            <CustomerPortal />
          </div>
        )}
      </main>
    </div>
  );
}

export default App;