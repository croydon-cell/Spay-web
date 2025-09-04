import React, { useState, useRef, useEffect } from 'react';
import { Search, Bell, ChevronDown, User } from 'lucide-react';
import Button from './ui/Button';
import Badge from './ui/Badge';

import { View } from '../types/View';

const paymentsDropdown = [
  { label: 'Transactions', view: 'transactions' as View },
  { label: 'Refund', view: 'refund' as View },
];

const TopNavBar: React.FC<{
  onNavigate: (view: View) => void;
  onLogout: () => void;
  currentView: View;
}> = ({ onNavigate, onLogout, currentView }) => {
  const [showPayments, setShowPayments] = useState(false);
  const [showDashboard, setShowDashboard] = useState(false);
  const [showMerchant, setShowMerchant] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const dashboardRef = useRef<HTMLDivElement>(null);
  const paymentsRef = useRef<HTMLDivElement>(null);
  const merchantRef = useRef<HTMLDivElement>(null);
  const profileRef = useRef<HTMLDivElement>(null);

  // Close dropdowns on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dashboardRef.current && !dashboardRef.current.contains(event.target as Node)) {
        setShowDashboard(false);
        setShowMerchant(false);
      }
      if (paymentsRef.current && !paymentsRef.current.contains(event.target as Node)) {
        setShowPayments(false);
      }
      if (merchantRef.current && !merchantRef.current.contains(event.target as Node)) {
        setShowMerchant(false);
      }
      if (profileRef.current && !profileRef.current.contains(event.target as Node)) {
        setShowProfile(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-xl border-b border-gray-200/50 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Left: Brand */}
          <div 
            className="flex items-center space-x-3 cursor-pointer group transition-all duration-200 hover:scale-105" 
            onClick={() => onNavigate('landing')}
          >
            <div className="relative">
              <img 
                src={`${process.env.PUBLIC_URL}/logo.png`} 
                alt="logo" 
                className="h-10 w-10 rounded-xl shadow-md group-hover:shadow-lg transition-shadow" 
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  const fallback = document.createElement('div');
                  fallback.className = 'h-10 w-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-md';
                  fallback.textContent = 'SP';
                  target.parentNode?.appendChild(fallback);
                }}
              />
            </div>
            <span className="text-2xl font-bold tracking-tight">
              <span className="text-blue-600">Subscribe</span>
              <span className="text-gray-700">Pay</span>
            </span>
          </div>

          {/* Center: Main Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {/* Dashboard Dropdown */}
            <div className="relative" ref={dashboardRef}>
              <button
                className={`flex items-center space-x-2 px-4 py-2.5 rounded-xl font-semibold transition-all duration-200 ${
                  ['dashboard','customers','analytics'].includes(currentView) 
                    ? 'text-blue-600 bg-blue-50 shadow-sm' 
                    : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50/50'
                }`}
                onClick={() => { setShowDashboard(!showDashboard); setShowMerchant(false); }}
              >
                <span>Dashboard</span>
                <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${showDashboard ? 'rotate-180' : ''}`} />
              </button>
              
              {showDashboard && (
                <div className="absolute left-0 top-full mt-2 w-64 bg-white/95 backdrop-blur-xl border border-gray-200/50 rounded-2xl shadow-2xl py-2 animate-fade-in-scale">
                  <button
                    className={`block w-full text-left px-4 py-3 transition-all duration-200 ${
                      currentView === 'dashboard' 
                        ? 'text-blue-600 bg-blue-50 font-semibold' 
                        : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50/50'
                    }`}
                    onClick={() => { setShowDashboard(false); onNavigate('dashboard'); }}
                  >
                    <div className="font-medium">Overview</div>
                    <div className="text-sm text-gray-500">Main dashboard view</div>
                  </button>
                  
                  <div className="relative" ref={merchantRef}>
                    <button
                      className={`block w-full text-left px-4 py-3 transition-all duration-200 flex items-center justify-between ${
                        ['analytics','customers'].includes(currentView) 
                          ? 'text-blue-600 bg-blue-50 font-semibold' 
                          : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50/50'
                      }`}
                      onClick={() => setShowMerchant(!showMerchant)}
                    >
                      <div>
                        <div className="font-medium">Merchant</div>
                        <div className="text-sm text-gray-500">Analytics & customers</div>
                      </div>
                      <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${showMerchant ? 'rotate-180' : ''}`} />
                    </button>
                    
                    {showMerchant && (
                      <div className="absolute left-full top-0 ml-2 w-48 bg-white/95 backdrop-blur-xl border border-gray-200/50 rounded-xl shadow-xl py-2">
                        <button
                          className={`block w-full text-left px-4 py-2.5 transition-all duration-200 ${
                            currentView === 'analytics' 
                              ? 'text-blue-600 bg-blue-50 font-semibold' 
                              : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50/50'
                          }`}
                          onClick={() => { setShowDashboard(false); setShowMerchant(false); onNavigate('analytics'); }}
                        >
                          Analytics
                        </button>
                        <button
                          className={`block w-full text-left px-4 py-2.5 transition-all duration-200 ${
                            currentView === 'customers' 
                              ? 'text-blue-600 bg-blue-50 font-semibold' 
                              : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50/50'
                          }`}
                          onClick={() => { setShowDashboard(false); setShowMerchant(false); onNavigate('customers'); }}
                        >
                          Customers
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* Payments Dropdown */}
            <div className="relative" ref={paymentsRef}>
              <button
                className={`flex items-center space-x-2 px-4 py-2.5 rounded-xl font-semibold transition-all duration-200 ${
                  ['transactions','refund'].includes(currentView) 
                    ? 'text-blue-600 bg-blue-50 shadow-sm' 
                    : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50/50'
                }`}
                onClick={() => setShowPayments(!showPayments)}
              >
                <span>Payments</span>
                <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${showPayments ? 'rotate-180' : ''}`} />
              </button>
              
              {showPayments && (
                <div className="absolute left-0 top-full mt-2 w-48 bg-white/95 backdrop-blur-xl border border-gray-200/50 rounded-xl shadow-xl py-2 animate-fade-in-scale">
                  {paymentsDropdown.map((item) => (
                    <button
                      key={item.view}
                      className={`block w-full text-left px-4 py-2.5 transition-all duration-200 ${
                        currentView === item.view 
                          ? 'text-blue-600 bg-blue-50 font-semibold' 
                          : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50/50'
                      }`}
                      onClick={() => { setShowPayments(false); onNavigate(item.view); }}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Settings */}
            <button
              className={`px-4 py-2.5 rounded-xl font-semibold transition-all duration-200 ${
                currentView === 'settings' 
                  ? 'text-blue-600 bg-blue-50 shadow-sm' 
                  : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50/50'
              }`}
              onClick={() => onNavigate('settings')}
            >
              Settings
            </button>
          </div>

          {/* Right: Actions */}
          <div className="flex items-center space-x-4">
            {/* Search */}
            <div className="relative hidden md:block">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search..."
                className="pl-10 pr-4 py-2.5 w-64 bg-gray-50/80 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-200"
              />
            </div>

            {/* Notifications */}
            <button className="relative p-2.5 rounded-xl text-gray-600 hover:text-blue-600 hover:bg-blue-50/50 transition-all duration-200">
              <Bell className="h-5 w-5" />
              <Badge variant="error" size="sm" className="absolute -top-1 -right-1 px-1.5 py-0.5 text-xs">
                3
              </Badge>
            </button>

            {/* Profile Dropdown */}
            <div className="relative" ref={profileRef}>
              <button
                className="flex items-center space-x-3 p-2 rounded-xl hover:bg-gray-50/80 transition-all duration-200"
                onClick={() => setShowProfile(!showProfile)}
              >
                <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center text-white font-bold text-sm shadow-md">
                  SP
                </div>
                <ChevronDown className={`h-4 w-4 text-gray-500 transition-transform duration-200 ${showProfile ? 'rotate-180' : ''}`} />
              </button>
              
              {showProfile && (
                <div className="absolute right-0 top-full mt-2 w-48 bg-white/95 backdrop-blur-xl border border-gray-200/50 rounded-xl shadow-xl py-2 animate-fade-in-scale">
                  <div className="px-4 py-3 border-b border-gray-100">
                    <div className="font-semibold text-gray-900">John Doe</div>
                    <div className="text-sm text-gray-500">john@subscribepay.com</div>
                  </div>
                  <button 
                    className="block w-full text-left px-4 py-2.5 text-gray-700 hover:text-red-600 hover:bg-red-50/50 transition-all duration-200"
                    onClick={onLogout}
                  >
                    Sign out
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default TopNavBar;