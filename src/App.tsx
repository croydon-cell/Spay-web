import React, { useState } from 'react';
import SubscribePayLanding from './components/SubscribePayLanding';
import DashboardMain from './components/Dashboard/DashboardMain';
import AdminDashboard from './components/Admin/AdminDashboard';
import CheckoutPage from './components/Checkout/CheckoutPage';
import './index.css';

function App() {
  const [currentView, setCurrentView] = useState<'landing' | 'dashboard' | 'admin' | 'checkout'>('landing');

  return (
    <div className="App">
      {currentView === 'landing' && (
        <div>
          <SubscribePayLanding />
          <div className="fixed bottom-6 right-6 space-y-2">
            <div>
              <button
                onClick={() => setCurrentView('dashboard')}
                className="bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 block w-full"
              >
                Merchant Dashboard
              </button>
            </div>
            <div>
              <button
                onClick={() => setCurrentView('admin')}
                className="bg-gray-800 hover:bg-gray-900 text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 block w-full"
              >
                Admin Dashboard
              </button>
            </div>
            <div>
              <button
                onClick={() => setCurrentView('checkout')}
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 block w-full"
              >
                Payment Checkout
              </button>
            </div>
          </div>
        </div>
      )}
      
      {currentView === 'dashboard' && (
        <div>
          <DashboardMain />
          <div className="fixed bottom-6 right-6 space-y-2">
            <div>
              <button
                onClick={() => setCurrentView('landing')}
                className="bg-white hover:bg-gray-50 text-primary border-2 border-primary px-6 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 block w-full"
              >
                Back to Landing
              </button>
            </div>
            <div>
              <button
                onClick={() => setCurrentView('admin')}
                className="bg-gray-800 hover:bg-gray-900 text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 block w-full"
              >
                Admin Dashboard
              </button>
            </div>
          </div>
        </div>
      )}
      
      {currentView === 'admin' && (
        <div>
          <AdminDashboard />
          <div className="fixed bottom-6 right-6 space-y-2">
            <div>
              <button
                onClick={() => setCurrentView('landing')}
                className="bg-white hover:bg-gray-50 text-primary border-2 border-primary px-6 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 block w-full"
              >
                Back to Landing
              </button>
            </div>
            <div>
              <button
                onClick={() => setCurrentView('dashboard')}
                className="bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 block w-full"
              >
                Merchant Dashboard
              </button>
            </div>
          </div>
        </div>
      )}
      
      {currentView === 'checkout' && (
        <div>
          <CheckoutPage />
          <div className="fixed bottom-6 right-6">
            <button
              onClick={() => setCurrentView('landing')}
              className="bg-white hover:bg-gray-50 text-primary border-2 border-primary px-6 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105"
            >
              Back to Landing
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;