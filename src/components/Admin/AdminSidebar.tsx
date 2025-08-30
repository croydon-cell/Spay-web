import React from 'react';
import { Home, Building, CreditCard, FileText, ShieldCheck, Settings, Headphones, UserCheck, CreditCard as Logo } from 'lucide-react';

interface AdminSidebarProps {
  activeItem: string;
  setActiveItem: (item: string) => void;
  isCollapsed: boolean;
}

const AdminSidebar: React.FC<AdminSidebarProps> = ({ activeItem, setActiveItem, isCollapsed }) => {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: Home },
    { id: 'merchants', label: 'Merchants', icon: Building },
    { id: 'transactions', label: 'Transactions', icon: CreditCard },
    { id: 'settlements', label: 'Settlements', icon: FileText },
    { id: 'compliance', label: 'KYC / Compliance', icon: ShieldCheck },
    { id: 'system', label: 'System Health', icon: Settings },
    { id: 'support', label: 'Support', icon: Headphones },
    { id: 'admins', label: 'Admin Users', icon: UserCheck },
  ];

  return (
    <div className={`fixed left-0 top-0 h-full bg-white border-r border-gray-200 transition-all duration-300 z-40 ${
      isCollapsed ? 'w-16' : 'w-64'
    }`}>
      <div className="p-4">
        <div className="flex items-center space-x-3 mb-8">
          <Logo className="h-8 w-8 text-primary" strokeWidth={1.5} />
          {!isCollapsed && (
            <div>
              <span className="text-lg font-bold">
                <span className="text-primary">Subscribe</span>
                <span className="text-gray-600">Pay</span>
              </span>
              <div className="text-xs text-gray-500">Admin</div>
            </div>
          )}
        </div>
        
        <nav className="space-y-2">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveItem(item.id)}
              className={`w-full flex items-center space-x-3 px-3 py-3 rounded-lg transition-all duration-200 group ${
                activeItem === item.id
                  ? 'bg-gradient-to-r from-primary/10 to-primary/5 text-primary border-r-2 border-primary'
                  : 'text-gray-600 hover:text-primary hover:bg-primary/5'
              }`}
            >
              <item.icon 
                className={`h-5 w-5 transition-all duration-200 ${
                  activeItem === item.id ? 'text-primary' : 'group-hover:text-primary'
                }`} 
                strokeWidth={1.5} 
              />
              {!isCollapsed && (
                <span className="font-medium text-sm">{item.label}</span>
              )}
            </button>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default AdminSidebar;