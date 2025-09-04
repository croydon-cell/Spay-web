import React from 'react';
import Button from './ui/Button';
import { Menu, ArrowRight } from 'lucide-react';

const Navigation: React.FC = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-xl border-b border-gray-200/50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <img src={`${process.env.PUBLIC_URL}/logo.png`} alt="SubscribePay" className="h-10 w-10 rounded-xl shadow-md" />
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">
              Features
            </a>
            <a href="#pricing" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">
              Pricing
            </a>
            <a href="#docs" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">
              Docs
            </a>
            <a href="#support" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">
              Support
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="hidden sm:inline-flex">
              Sign In
            </Button>
            <Button variant="primary" size="sm" icon={ArrowRight} iconPosition="right">
              Get Started
            </Button>
            <Button variant="ghost" size="sm" icon={Menu} className="md:hidden" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
