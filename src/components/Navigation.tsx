import React from 'react';
import { CreditCard } from 'lucide-react';

const Navigation: React.FC = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <CreditCard className="h-8 w-8 text-primary" strokeWidth={1.5} />
            <span className="text-xl font-bold">
              <span className="text-primary">Subscribe</span>
              <span className="text-gray-600">Pay</span>
            </span>
          </div>
          
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
          
          <button className="bg-primary hover:bg-primary-dark text-white px-6 py-2 rounded-lg transition-all duration-200 hover:scale-105">
            Start Free
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;