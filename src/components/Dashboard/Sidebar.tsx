import React from 'react';
import { Home, Calendar, CreditCard, BarChart3, Users, Settings, CreditCard as Logo } from 'lucide-react';

interface SidebarProps {
  activeItem: string;
  setActiveItem: (item: string) => void;
  isCollapsed: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ activeItem, setActiveItem, isCollapsed }) => {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: Home, description: 'Overview & metrics' },
    { id: 'subscriptions', label: 'Subscriptions', icon: Calendar, description: 'Manage subscriptions' },
    { id: 'payments', label: 'Payments', icon: CreditCard, description: 'Payment history' },
    { id: 'analytics', label: 'Analytics', icon: BarChart3, description: 'Insights & reports' },
    { id: 'customers', label: 'Customers', icon: Users, description: 'Customer management' },
    { id: 'settings', label: 'Settings', icon: Settings, description: 'Account settings' },
  ];

  return (
    <div className={`fixed left-0 top-0 h-full bg-white/95 backdrop-blur-xl border-r border-gray-200/50 transition-all duration-300 z-40 shadow-xl ${
      isCollapsed ? 'w-20' : 'w-72'
    }`}>
      <div className="p-6">
        {/* Logo */}
        <div className="flex items-center space-x-3 mb-10">
          <div className="relative">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
              <Logo className="h-5 w-5 text-white" strokeWidth={2} />
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-xl blur-lg"></div>
          </div>
          {!isCollapsed && (
            <div className="space-y-1">
              <span className="text-xl font-bold text-gray-900">
                <span className="text-blue-600">Subscribe</span>
                <span className="text-gray-700">Pay</span>
              </span>
              <div className="text-xs text-gray-500 font-medium">Dashboard v2.0</div>
            </div>
          )}
        </div>
        
        {/* Navigation */}
        <nav className="space-y-2">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveItem(item.id)}
              className={`w-full group relative transition-all duration-200 ${
                activeItem === item.id
                  ? 'text-blue-600'
                  : 'text-gray-600 hover:text-blue-600'
              }`}
            >
              <div className={`flex items-center space-x-4 px-4 py-3.5 rounded-2xl transition-all duration-200 ${
                activeItem === item.id
                  ? 'bg-gradient-to-r from-blue-50 to-blue-100/50 shadow-sm border border-blue-200/50'
                  : 'hover:bg-gray-50/80 hover:shadow-sm'
              }`}>
                <div className={`relative transition-all duration-200 ${
                  activeItem === item.id ? 'scale-110' : 'group-hover:scale-105'
                }`}>
                  <item.icon 
                    className={`h-5 w-5 transition-all duration-200 ${
                      activeItem === item.id ? 'text-blue-600' : 'text-gray-500 group-hover:text-blue-600'
                    }`} 
                    strokeWidth={activeItem === item.id ? 2 : 1.5}
                  />
                  {activeItem === item.id && (
                    <div className="absolute inset-0 bg-blue-400/20 rounded-lg blur-md"></div>
                  )}
                </div>
                
                {!isCollapsed && (
                  <div className="flex-1 text-left">
                    <div className={`font-semibold transition-all duration-200 ${
                      activeItem === item.id ? 'text-blue-900' : 'text-gray-700 group-hover:text-gray-900'
                    }`}>
                      {item.label}
                    </div>
                    <div className="text-xs text-gray-500 mt-0.5">
                      {item.description}
                    </div>
                  </div>
                )}
              </div>
              
              {/* Active indicator */}
              {activeItem === item.id && (
                <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-1 h-8 bg-gradient-to-b from-blue-500 to-blue-600 rounded-l-full"></div>
              )}
            </button>
          ))}
        </nav>
        
        {/* Bottom Section */}
        {!isCollapsed && (
          <div className="absolute bottom-6 left-6 right-6">
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-4 border border-blue-200/50">
              <div className="text-sm font-semibold text-gray-900 mb-2">Need Help?</div>
              <div className="text-xs text-gray-600 mb-3">Check our documentation and guides</div>
              <button className="w-full bg-white text-blue-600 text-sm font-semibold py-2 px-3 rounded-xl hover:bg-blue-50 transition-colors duration-200 border border-blue-200">
                View Docs
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;