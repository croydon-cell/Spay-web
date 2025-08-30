import React, { useState } from 'react';
import AdminSidebar from './AdminSidebar';
import AdminTopbar from './AdminTopbar';
import AdminStats from './AdminStats';
import MerchantPanel from './MerchantPanel';
import TransactionMonitor from './TransactionMonitor';
import SystemHealth from './SystemHealth';
import { Info } from 'lucide-react';

const AdminDashboard: React.FC = () => {
  const [activeItem, setActiveItem] = useState('dashboard');
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  const getPageTitle = () => {
    const titles = {
      dashboard: 'Admin Dashboard',
      merchants: 'Merchant Management',
      transactions: 'Transaction Monitor',
      settlements: 'Settlements',
      compliance: 'KYC & Compliance',
      system: 'System Health',
      support: 'Support Tickets',
      admins: 'Admin Users',
    };
    return titles[activeItem as keyof typeof titles] || 'Admin Dashboard';
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <AdminSidebar 
        activeItem={activeItem} 
        setActiveItem={setActiveItem} 
        isCollapsed={isCollapsed}
      />
      
      <AdminTopbar 
        pageTitle={getPageTitle()} 
        toggleSidebar={toggleSidebar}
        isCollapsed={isCollapsed}
      />
      
      <main className={`transition-all duration-300 pt-16 ${
        isCollapsed ? 'ml-16' : 'ml-64'
      }`}>
        <div className="p-6">
          {activeItem === 'dashboard' && (
            <>
              <AdminStats />
              <MerchantPanel />
              <TransactionMonitor />
              <SystemHealth />
            </>
          )}
          
          {activeItem === 'merchants' && (
            <div className="space-y-6">
              <MerchantPanel />
              <div className="glassmorphic rounded-2xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Merchant Analytics</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-white/50 rounded-lg p-4">
                    <div className="text-2xl font-bold text-primary">2,847</div>
                    <div className="text-sm text-gray-600">Total Merchants</div>
                  </div>
                  <div className="bg-white/50 rounded-lg p-4">
                    <div className="text-2xl font-bold text-green-600">2,634</div>
                    <div className="text-sm text-gray-600">Active Merchants</div>
                  </div>
                  <div className="bg-white/50 rounded-lg p-4">
                    <div className="text-2xl font-bold text-yellow-600">213</div>
                    <div className="text-sm text-gray-600">Pending KYC</div>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {activeItem === 'transactions' && (
            <div className="space-y-6">
              <TransactionMonitor />
              <div className="grid lg:grid-cols-2 gap-6">
                <div className="glassmorphic rounded-2xl p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Transaction Volume</h3>
                  <div className="h-32 bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg flex items-center justify-center">
                    <span className="text-gray-600">Chart Placeholder</span>
                  </div>
                </div>
                <div className="glassmorphic rounded-2xl p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Success Rate</h3>
                  <div className="h-32 bg-gradient-to-r from-green-100 to-green-50 rounded-lg flex items-center justify-center">
                    <span className="text-gray-600">98.5% Success Rate</span>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {activeItem === 'system' && (
            <div className="space-y-6">
              <SystemHealth />
              <div className="glassmorphic rounded-2xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Error Logs</h3>
                <div className="space-y-2">
                  <div className="flex items-center space-x-3 p-3 bg-red-50 rounded-lg">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <span className="text-sm text-gray-900">Database connection timeout - 2 min ago</span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-yellow-50 rounded-lg">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                    <span className="text-sm text-gray-900">High response time detected - 5 min ago</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        
        <footer className="mt-12 py-6 px-6 border-t border-gray-200 bg-white">
          <div className="flex items-center justify-between text-sm text-gray-600">
            <div className="flex items-center space-x-2">
              <Info className="h-4 w-4" strokeWidth={1.5} />
              <span>SubscribePay Admin v2.1.0</span>
            </div>
            <p>Last updated: 2 minutes ago</p>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default AdminDashboard;