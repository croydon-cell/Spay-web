import React from 'react';

const Navigation: React.FC = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo Section */}
          <div className="flex items-center space-x-2 cursor-pointer">
            <img 
              src="/logo.png"   // place your logo file inside public/logo.png
              alt="SubscribePay Logo"
              width={40}
              height={40}
              className="rounded-md"
            />
            <span className="text-xl font-bold">
              <span className="text-primary">Subscribe</span>
              <span className="text-gray-600">Pay</span>
            </span>
          </div>
          
          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            {['Products', 'Docs', 'Pricing', 'Dashboard'].map((item) => (
              <a
                key={item}
                href="#"
                className="text-gray-600 hover:text-primary transition-colors duration-200 relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-primary-light transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>
          
          {/* CTA Button */}
          <button className="bg-primary hover:bg-primary-dark text-white px-6 py-2 rounded-lg transition-all duration-200 hover:scale-105">
            Start Free
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
