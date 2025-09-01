import React, { useState, useRef, useEffect } from 'react';

type View = 'landing' | 'dashboard' | 'admin' | 'checkout' | 'login' | 'transactions' | 'payment' | 'refund' | 'customers' | 'analytics' | 'settings';

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
  const dashboardRef = useRef<HTMLDivElement>(null);
  const paymentsRef = useRef<HTMLDivElement>(null);
  const merchantRef = useRef<HTMLDivElement>(null);

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
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);
  const [showProfile, setShowProfile] = useState(false);

  return (
    <React.Fragment>
      <nav className="w-full bg-white shadow-sm border-b border-gray-100 px-6 py-3 flex items-center justify-between z-50">
        {/* Left: Brand */}
        <div className="flex items-center space-x-2 cursor-pointer select-none" onClick={() => onNavigate('landing')}>
          <img src="/logo.png" alt="logo" className="h-8 w-8 rounded" />
          <span className="text-xl font-bold text-primary tracking-tight">SubscribePay</span>
        </div>
        {/* Center: Main Links */}
        <div className="flex items-center space-x-2">
          <div className="relative" ref={dashboardRef}>
            <button
              className={`px-4 py-2 rounded-lg font-medium hover:bg-primary/10 transition flex items-center ${['dashboard','customers','analytics'].includes(currentView) ? 'text-primary' : 'text-gray-700'}`}
              onClick={() => { setShowDashboard((v) => !v); setShowMerchant(false); }}
              aria-haspopup="true"
              aria-expanded={showDashboard}
              type="button"
            >
              Dashboard
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
            </button>
            {showDashboard && (
              <div className="absolute left-0 mt-2 w-56 bg-white border border-gray-200 rounded-lg shadow-lg z-30 py-2">
                <button
                  className={`block w-full text-left px-4 py-2 hover:bg-primary/10 transition ${currentView === 'dashboard' ? 'text-primary' : 'text-gray-700'}`}
                  onClick={() => { setShowDashboard(false); onNavigate('dashboard'); }}
                >
                  Overview
                </button>
                <div className="relative" ref={merchantRef}>
                  <button
                    className={`block w-full text-left px-4 py-2 hover:bg-primary/10 transition flex items-center ${['analytics','customers'].includes(currentView) ? 'text-primary' : 'text-gray-700'}`}
                    onClick={() => setShowMerchant((v) => !v)}
                    aria-haspopup="true"
                    aria-expanded={showMerchant}
                    type="button"
                  >
                    Merchant
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                  </button>
                  {showMerchant && (
                    <div className="absolute left-full top-0 ml-1 w-44 bg-white border border-gray-200 rounded-lg shadow-lg z-40 py-2">
                      <button
                        className={`block w-full text-left px-4 py-2 hover:bg-primary/10 transition ${currentView === 'analytics' ? 'text-primary' : 'text-gray-700'}`}
                        onClick={() => { setShowDashboard(false); setShowMerchant(false); onNavigate('analytics'); }}
                      >
                        Analytics
                      </button>
                      <button
                        className={`block w-full text-left px-4 py-2 hover:bg-primary/10 transition ${currentView === 'customers' ? 'text-primary' : 'text-gray-700'}`}
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
          <div className="relative" ref={paymentsRef}>
            <button
              className={`px-4 py-2 rounded-lg font-medium hover:bg-primary/10 transition flex items-center ${['transactions','refund'].includes(currentView) ? 'text-primary' : 'text-gray-700'}`}
              onClick={() => setShowPayments((v) => !v)}
              aria-haspopup="true"
              aria-expanded={showPayments}
              type="button"
            >
              Payments
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
            </button>
            {showPayments && (
              <div className="absolute left-0 mt-2 w-44 bg-white border border-gray-200 rounded-lg shadow-lg z-30 py-2">
                {paymentsDropdown.map((item) => (
                  <button
                    key={item.view}
                    className={`block w-full text-left px-4 py-2 hover:bg-primary/10 transition ${currentView === item.view ? 'text-primary' : 'text-gray-700'}`}
                    onClick={() => { setShowPayments(false); onNavigate(item.view); }}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            )}
          </div>
          <button
            className={`px-4 py-2 rounded-lg font-medium hover:bg-primary/10 transition ${currentView === 'settings' ? 'text-primary' : 'text-gray-700'}`}
            onClick={() => onNavigate('settings')}
          >
            Settings
          </button>
        </div>
        {/* Right: Search, Notifications, Profile */}
        <div className="flex items-center space-x-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="px-3 py-1.5 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary focus:outline-none transition text-sm bg-gray-50"
              style={{ minWidth: 120 }}
            />
            <svg className="w-4 h-4 absolute right-2 top-2 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8" /><path d="M21 21l-4.35-4.35" /></svg>
          </div>
          <button className="relative p-2 rounded-full hover:bg-primary/10 transition">
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full px-1.5">3</span>
          </button>
          <div className="relative">
            <button
              className="flex items-center space-x-2 px-2 py-1 rounded-lg hover:bg-primary/10 transition"
              onClick={() => setShowProfile((v) => !v)}
              onBlur={() => setTimeout(() => setShowProfile(false), 150)}
            >
              <span className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">SP</span>
              <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
            </button>
            {showProfile && (
              <div className="absolute right-0 mt-2 w-36 bg-white border border-gray-100 rounded-lg shadow-lg z-10">
                <button className="block w-full text-left px-4 py-2 hover:bg-primary/10 transition text-gray-700" onClick={onLogout}>Logout</button>
              </div>
            )}
          </div>
        </div>
      </nav>

    </React.Fragment>
  );
};

export default TopNavBar;
