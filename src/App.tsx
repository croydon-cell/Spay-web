import React, { useEffect, useState } from 'react';
import SubscribePayLanding from './components/SubscribePayLanding';
import DashboardMain from './components/Dashboard/DashboardMain';
import AdminDashboard from './components/Admin/AdminDashboard';
import CheckoutPage from './components/Checkout/CheckoutPage';
import './index.css';

import { apiGet } from './api';
import Login from './components/Login';
import TransactionsDashboard from './components/TransactionsDashboard';
import PaymentDemo from './components/PaymentDemo';
import RefundDemo from './components/RefundDemo';
import TopNavBar from './components/TopNavBar';
import AnalyticsComingSoon from './components/AnalyticsComingSoon';
import CustomersPlaceholder from './components/CustomersPlaceholder';

import { View } from './types/View';

function App() {
  const [currentView, setCurrentView] = useState<View>('landing');
  const [token, setToken] = useState<string | null>(null);

  // Sync navigation with browser history
  useEffect(() => {
    window.history.replaceState({ view: currentView }, '', `#${currentView}`);
  }, []);

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
    <div className="App">
      <TopNavBar
        onNavigate={handleNavigate}
        onLogout={() => { setToken(null); handleNavigate('login'); }}
        currentView={currentView}
      />
      {currentView === 'landing' && <SubscribePayLanding />}
      {currentView === 'dashboard' && <DashboardMain />}
      {currentView === 'login' && <Login onLogin={setToken} />}
      {currentView === 'transactions' && <TransactionsDashboard token={token || undefined} />}
      {currentView === 'payment' && <PaymentDemo token={token || undefined} />}
      {currentView === 'refund' && <RefundDemo token={token || undefined} />}
      {currentView === 'admin' && <AdminDashboard />}
      {currentView === 'checkout' && <CheckoutPage />}
      {currentView === 'customers' && <CustomersPlaceholder />}
      {currentView === 'analytics' && <AnalyticsComingSoon />}
    </div>
  );
}

export default App;