import React, { useState } from 'react';
import Sidebar from './Sidebar';
import TopNavbar from './TopNavbar';
import MetricsCards from './MetricsCards';
import RevenueChart from './RevenueChart';
import SubscriptionsTable from './SubscriptionsTable';
import RecentTransactions from './RecentTransactions';
import AIInsights from './AIInsights';
import CustomerSegmentation from './CustomerSegmentation';

const DashboardMain: React.FC = () => {
  const [activeItem, setActiveItem] = useState('dashboard');
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  const getPageTitle = () => {
    const titles = {
      dashboard: 'Dashboard',
      subscriptions: 'Subscriptions',
      payments: 'Payments',
      analytics: 'Analytics',
      customers: 'Customers',
      settings: 'Settings',
    };
    return titles[activeItem as keyof typeof titles] || 'Dashboard';
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar 
        activeItem={activeItem} 
        setActiveItem={setActiveItem} 
        isCollapsed={isCollapsed}
      />
      
      <TopNavbar 
        pageTitle={getPageTitle()} 
        toggleSidebar={toggleSidebar}
        isCollapsed={isCollapsed}
      />
      
      <main className={`transition-all duration-300 pt-16 ${
        isCollapsed ? 'ml-16' : 'ml-64'
      }`}>
        <div className="p-6">
          <MetricsCards />
          
          <div className="grid lg:grid-cols-3 gap-6 mb-8">
            <div className="lg:col-span-2">
              <RevenueChart />
            </div>
            <div>
              <AIInsights />
            </div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-6 mb-8">
            <SubscriptionsTable />
            <CustomerSegmentation />
          </div>
          
          <div className="grid lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <RecentTransactions />
            </div>
          </div>
        </div>
        
        <footer className="mt-12 py-6 px-6 border-t border-gray-200 bg-white">
          <div className="flex items-center justify-between text-sm text-gray-600">
            <div className="flex space-x-6">
              <a href="#" className="hover:text-primary transition-colors duration-200">Privacy</a>
              <a href="#" className="hover:text-primary transition-colors duration-200">Terms</a>
              <a href="#" className="hover:text-primary transition-colors duration-200">Support</a>
            </div>
            <p>© 2024 SubscribePay. All rights reserved.</p>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default DashboardMain;