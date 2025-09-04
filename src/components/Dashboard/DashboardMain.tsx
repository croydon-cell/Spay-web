import React, { useState } from 'react';
import Sidebar from './Sidebar';
import MetricsCards from './MetricsCards';
import Card from '../ui/Card';
import Button from '../ui/Button';
import Badge from '../ui/Badge';
import { Menu, TrendingUp, Users, Calendar, BarChart3, CreditCard, Settings } from 'lucide-react';

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
      
      {/* Modern Top Navigation */}
      <div className={`fixed top-0 right-0 h-16 bg-white/95 backdrop-blur-xl border-b border-gray-200/50 shadow-sm transition-all duration-300 z-30 ${
        isCollapsed ? 'left-20' : 'left-72'
      }`}>
        <div className="flex items-center justify-between h-full px-6">
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="sm"
              icon={Menu}
              onClick={toggleSidebar}
              className="lg:hidden"
            />
            <div>
              <h1 className="text-xl font-bold text-gray-900">{getPageTitle()}</h1>
              <p className="text-sm text-gray-500">Welcome back to your dashboard</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Badge variant="success" size="sm">
              All Systems Operational
            </Badge>
            <div className="text-sm text-gray-600">
              Last updated: 2 min ago
            </div>
          </div>
        </div>
      </div>
      
      <main className={`transition-all duration-300 pt-20 ${
        isCollapsed ? 'ml-20' : 'ml-72'
      }`}>
        <div className="p-6 space-y-8">
          {/* Metrics Cards */}
          <MetricsCards />
          
          {/* Revenue Chart & AI Insights */}
          <div className="grid lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <Card variant="default" padding="lg" className="h-80">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-3">
                    <TrendingUp className="h-6 w-6 text-blue-600" />
                    <h3 className="text-lg font-semibold text-gray-900">Revenue Chart</h3>
                  </div>
                  <Badge variant="success" size="sm">Live</Badge>
                </div>
                <div className="h-48 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl flex items-center justify-center">
                  <div className="text-center">
                    <BarChart3 className="h-12 w-12 text-blue-400 mx-auto mb-3" />
                    <p className="text-gray-600">Interactive revenue chart coming soon</p>
                  </div>
                </div>
              </Card>
            </div>
            <div>
              <Card variant="glass" padding="lg" className="h-80">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                    <BarChart3 className="h-4 w-4 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">AI Insights</h3>
                </div>
                <div className="space-y-4">
                  <div className="p-3 bg-green-50 rounded-xl border border-green-200">
                    <div className="text-sm font-medium text-green-900">Revenue Growth</div>
                    <div className="text-xs text-green-700">+15.3% vs last month</div>
                  </div>
                  <div className="p-3 bg-blue-50 rounded-xl border border-blue-200">
                    <div className="text-sm font-medium text-blue-900">Retry Success</div>
                    <div className="text-xs text-blue-700">Improved by 2.1%</div>
                  </div>
                  <div className="p-3 bg-purple-50 rounded-xl border border-purple-200">
                    <div className="text-sm font-medium text-purple-900">Customer Growth</div>
                    <div className="text-xs text-purple-700">+8.2% new signups</div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
          
          {/* Subscriptions & Customer Segmentation */}
          <div className="grid lg:grid-cols-2 gap-6">
            <Card variant="default" padding="lg">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <Calendar className="h-6 w-6 text-green-600" />
                  <h3 className="text-lg font-semibold text-gray-900">Subscriptions</h3>
                </div>
                <Button variant="secondary" size="sm">View All</Button>
              </div>
              <div className="space-y-3">
                {[
                  { name: 'Netflix Premium', users: '2,847', revenue: '₹18.4L', status: 'active' },
                  { name: 'Spotify Family', users: '1,923', revenue: '₹3.4L', status: 'active' },
                  { name: 'Adobe Creative', users: '847', revenue: '₹14.2L', status: 'active' }
                ].map((sub, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                    <div>
                      <div className="font-medium text-gray-900">{sub.name}</div>
                      <div className="text-sm text-gray-500">{sub.users} subscribers</div>
                    </div>
                    <div className="text-right">
                      <div className="font-semibold text-gray-900">{sub.revenue}</div>
                      <Badge variant="success" size="sm">{sub.status}</Badge>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
            
            <Card variant="default" padding="lg">
              <div className="flex items-center space-x-3 mb-6">
                <Users className="h-6 w-6 text-purple-600" />
                <h3 className="text-lg font-semibold text-gray-900">Customer Segmentation</h3>
              </div>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Premium Users</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-24 h-2 bg-gray-200 rounded-full">
                      <div className="w-16 h-2 bg-blue-500 rounded-full"></div>
                    </div>
                    <span className="text-sm font-medium">67%</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Standard Users</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-24 h-2 bg-gray-200 rounded-full">
                      <div className="w-8 h-2 bg-green-500 rounded-full"></div>
                    </div>
                    <span className="text-sm font-medium">28%</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Trial Users</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-24 h-2 bg-gray-200 rounded-full">
                      <div className="w-1 h-2 bg-orange-500 rounded-full"></div>
                    </div>
                    <span className="text-sm font-medium">5%</span>
                  </div>
                </div>
              </div>
            </Card>
          </div>
          
          {/* Recent Transactions */}
          <Card variant="default" padding="lg">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-3">
                <CreditCard className="h-6 w-6 text-indigo-600" />
                <h3 className="text-lg font-semibold text-gray-900">Recent Transactions</h3>
              </div>
              <Button variant="secondary" size="sm">View All</Button>
            </div>
            <div className="space-y-3">
              {[
                { id: 'TXN001', customer: 'John Doe', amount: '₹649', service: 'Netflix Premium', status: 'success', time: '2 min ago' },
                { id: 'TXN002', customer: 'Jane Smith', amount: '₹179', service: 'Spotify Family', status: 'success', time: '5 min ago' },
                { id: 'TXN003', customer: 'Mike Johnson', amount: '₹1,675', service: 'Adobe Creative', status: 'retry', time: '8 min ago' },
                { id: 'TXN004', customer: 'Sarah Wilson', amount: '₹299', service: 'Disney+ Hotstar', status: 'failed', time: '12 min ago' }
              ].map((txn, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                  <div className="flex items-center space-x-4">
                    <div className={`w-3 h-3 rounded-full ${
                      txn.status === 'success' ? 'bg-green-500' : 
                      txn.status === 'retry' ? 'bg-yellow-500' : 'bg-red-500'
                    }`}></div>
                    <div>
                      <div className="font-medium text-gray-900">{txn.customer}</div>
                      <div className="text-sm text-gray-500">{txn.service} • {txn.id}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-semibold text-gray-900">{txn.amount}</div>
                    <div className="flex items-center space-x-2">
                      <Badge 
                        variant={txn.status === 'success' ? 'success' : txn.status === 'retry' ? 'warning' : 'error'} 
                        size="sm"
                      >
                        {txn.status}
                      </Badge>
                      <span className="text-xs text-gray-500">{txn.time}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
        
        {/* Modern Footer */}
        <footer className="mt-12 py-8 px-6 border-t border-gray-200/50 bg-white/80 backdrop-blur-xl">
          <div className="flex items-center justify-between text-sm text-gray-600">
            <div className="flex space-x-6">
              <a href="#" className="hover:text-blue-600 transition-colors duration-200 font-medium">Privacy</a>
              <a href="#" className="hover:text-blue-600 transition-colors duration-200 font-medium">Terms</a>
              <a href="#" className="hover:text-blue-600 transition-colors duration-200 font-medium">Support</a>
            </div>
            <p className="font-medium">© 2024 SubscribePay. All rights reserved.</p>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default DashboardMain;