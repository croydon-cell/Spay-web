import React, { useState } from 'react';
import Card from '../ui/Card';
import Button from '../ui/Button';
import Badge from '../ui/Badge';
import { Info, Shield, Users, Activity, AlertTriangle, CheckCircle, Menu, Settings } from 'lucide-react';

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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Modern Admin Sidebar */}
      <div className={`fixed left-0 top-0 h-full bg-gray-900 text-white transition-all duration-300 z-40 ${
        isCollapsed ? 'w-20' : 'w-72'
      }`}>
        <div className="p-6">
          <div className="flex items-center space-x-3 mb-10">
            <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-orange-500 rounded-xl flex items-center justify-center">
              <Shield className="h-5 w-5 text-white" />
            </div>
            {!isCollapsed && (
              <div>
                <span className="text-xl font-bold">Admin Panel</span>
                <div className="text-xs text-gray-400">SubscribePay v2.0</div>
              </div>
            )}
          </div>
          
          <nav className="space-y-2">
            {[
              { id: 'dashboard', label: 'Dashboard', icon: Activity },
              { id: 'merchants', label: 'Merchants', icon: Users },
              { id: 'transactions', label: 'Transactions', icon: Activity },
              { id: 'system', label: 'System Health', icon: CheckCircle }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveItem(item.id)}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                  activeItem === item.id
                    ? 'bg-white/10 text-white'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                <item.icon className="h-5 w-5" />
                {!isCollapsed && <span className="font-medium">{item.label}</span>}
              </button>
            ))}
          </nav>
        </div>
      </div>
      
      {/* Top Navigation */}
      <div className={`fixed top-0 right-0 h-16 bg-white/95 backdrop-blur-xl border-b border-gray-200 shadow-sm transition-all duration-300 z-30 ${
        isCollapsed ? 'left-20' : 'left-72'
      }`}>
        <div className="flex items-center justify-between h-full px-6">
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" icon={Menu} onClick={toggleSidebar} />
            <div>
              <h1 className="text-xl font-bold text-gray-900">{getPageTitle()}</h1>
              <p className="text-sm text-gray-500">System administration panel</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Badge variant="success" size="sm">All Systems Online</Badge>
            <Button variant="ghost" size="sm" icon={Settings} />
          </div>
        </div>
      </div>
      
      <main className={`transition-all duration-300 pt-20 ${
        isCollapsed ? 'ml-20' : 'ml-72'
      }`}>
        <div className="p-6 space-y-8">
          {activeItem === 'dashboard' && (
            <>
              {/* Admin Stats */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card variant="glass" padding="lg" className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-3xl font-bold text-blue-900">2,847</div>
                      <div className="text-sm text-blue-700">Total Merchants</div>
                    </div>
                    <Users className="h-8 w-8 text-blue-600" />
                  </div>
                </Card>
                <Card variant="glass" padding="lg" className="bg-gradient-to-br from-green-50 to-green-100 border-green-200">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-3xl font-bold text-green-900">₹47.2Cr</div>
                      <div className="text-sm text-green-700">Total Volume</div>
                    </div>
                    <Activity className="h-8 w-8 text-green-600" />
                  </div>
                </Card>
                <Card variant="glass" padding="lg" className="bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-3xl font-bold text-purple-900">98.5%</div>
                      <div className="text-sm text-purple-700">Success Rate</div>
                    </div>
                    <CheckCircle className="h-8 w-8 text-purple-600" />
                  </div>
                </Card>
                <Card variant="glass" padding="lg" className="bg-gradient-to-br from-orange-50 to-orange-100 border-orange-200">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-3xl font-bold text-orange-900">99.9%</div>
                      <div className="text-sm text-orange-700">Uptime</div>
                    </div>
                    <Shield className="h-8 w-8 text-orange-600" />
                  </div>
                </Card>
              </div>
              
              {/* System Health */}
              <Card variant="default" padding="lg">
                <div className="flex items-center space-x-3 mb-6">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                  <h3 className="text-lg font-semibold text-gray-900">System Health</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4 bg-green-50 rounded-xl border border-green-200">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-green-900">API Gateway</span>
                      <Badge variant="success" size="sm">Online</Badge>
                    </div>
                  </div>
                  <div className="p-4 bg-green-50 rounded-xl border border-green-200">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-green-900">Database</span>
                      <Badge variant="success" size="sm">Online</Badge>
                    </div>
                  </div>
                  <div className="p-4 bg-green-50 rounded-xl border border-green-200">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-green-900">Payment Processor</span>
                      <Badge variant="success" size="sm">Online</Badge>
                    </div>
                  </div>
                </div>
              </Card>
            </>
          )}
          
          {activeItem === 'merchants' && (
            <div className="space-y-6">
              <Card variant="default" padding="lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Merchant Analytics</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="p-4 bg-blue-50 rounded-xl border border-blue-200">
                    <div className="text-2xl font-bold text-blue-900">2,847</div>
                    <div className="text-sm text-blue-700">Total Merchants</div>
                  </div>
                  <div className="p-4 bg-green-50 rounded-xl border border-green-200">
                    <div className="text-2xl font-bold text-green-900">2,634</div>
                    <div className="text-sm text-green-700">Active Merchants</div>
                  </div>
                  <div className="p-4 bg-yellow-50 rounded-xl border border-yellow-200">
                    <div className="text-2xl font-bold text-yellow-900">213</div>
                    <div className="text-sm text-yellow-700">Pending KYC</div>
                  </div>
                </div>
              </Card>
            </div>
          )}
          
          {activeItem === 'transactions' && (
            <div className="space-y-6">
              <div className="grid lg:grid-cols-2 gap-6">
                <Card variant="glass" padding="lg">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Transaction Volume</h3>
                  <div className="h-32 bg-gradient-to-r from-blue-100 to-blue-50 rounded-lg flex items-center justify-center">
                    <span className="text-gray-600">Chart Placeholder</span>
                  </div>
                </Card>
                <Card variant="glass" padding="lg">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Success Rate</h3>
                  <div className="h-32 bg-gradient-to-r from-green-100 to-green-50 rounded-lg flex items-center justify-center">
                    <span className="text-gray-600">98.5% Success Rate</span>
                  </div>
                </Card>
              </div>
            </div>
          )}
          
          {activeItem === 'system' && (
            <div className="space-y-6">
              <Card variant="glass" padding="lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Error Logs</h3>
                <div className="space-y-2">
                  <div className="flex items-center space-x-3 p-3 bg-red-50 rounded-lg">
                    <AlertTriangle className="h-4 w-4 text-red-500" />
                    <span className="text-sm text-gray-900">Database connection timeout - 2 min ago</span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-yellow-50 rounded-lg">
                    <AlertTriangle className="h-4 w-4 text-yellow-500" />
                    <span className="text-sm text-gray-900">High response time detected - 5 min ago</span>
                  </div>
                </div>
              </Card>
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