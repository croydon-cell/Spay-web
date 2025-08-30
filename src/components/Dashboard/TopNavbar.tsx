import React from 'react';
import { Search, Bell, Menu } from 'lucide-react';

interface TopNavbarProps {
  pageTitle: string;
  toggleSidebar: () => void;
  isCollapsed: boolean;
}

const TopNavbar: React.FC<TopNavbarProps> = ({ pageTitle, toggleSidebar, isCollapsed }) => {
  return (
    <div className={`fixed top-0 right-0 h-16 bg-white/80 backdrop-blur-md border-b border-gray-200 z-30 transition-all duration-300 ${
      isCollapsed ? 'left-16' : 'left-64'
    }`}>
      <div className="flex items-center justify-between h-full px-6">
        <div className="flex items-center space-x-4">
          <button
            onClick={toggleSidebar}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200 lg:hidden"
          >
            <Menu className="h-5 w-5 text-gray-600" strokeWidth={1.5} />
          </button>
          <h1 className="text-2xl font-bold text-gray-900">{pageTitle}</h1>
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" strokeWidth={1.5} />
            <input
              type="text"
              placeholder="Search..."
              className="pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200"
            />
          </div>
          
          <div className="relative">
            <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200 relative">
              <Bell className="h-5 w-5 text-gray-600" strokeWidth={1.5} />
              <span className="absolute -top-1 -right-1 h-4 w-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                3
              </span>
            </button>
          </div>
          
          <div className="w-8 h-8 bg-gradient-to-br from-primary to-primary-light rounded-full flex items-center justify-center text-white font-semibold text-sm">
            SP
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNavbar;