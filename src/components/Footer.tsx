import React from 'react';
import { CreditCard, Linkedin, Twitter, Send } from 'lucide-react';

const Footer: React.FC = () => {
  const footerLinks = {
    Products: ['Payment Gateway', 'UPI Autopay', 'Smart Retry', 'Analytics'],
    Docs: ['API Reference', 'Integration Guide', 'SDKs', 'Webhooks'],
    Pricing: ['Starter', 'Growth', 'Enterprise', 'Custom'],
    Contact: ['Support', 'Sales', 'Partnerships', 'Careers'],
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Logo and description */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <img src={`${process.env.PUBLIC_URL}/logo.png`} alt="SubscribePay Logo" className="h-10 w-10 rounded-xl" />
              <span className="text-xl font-bold">
                <span className="text-gray-400">Subscribe</span>
                <span className="text-primary">Pay</span>
              </span>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6">
              India's first subscription-focused payment gateway. Powering the future of recurring payments with AI-driven insights and seamless integrations.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary transition-colors duration-200 group">
                <Linkedin className="h-6 w-6 group-hover:scale-110 transition-transform" strokeWidth={1.5} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors duration-200 group">
                <Twitter className="h-6 w-6 group-hover:scale-110 transition-transform" strokeWidth={1.5} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors duration-200 group">
                <Send className="h-6 w-6 group-hover:scale-110 transition-transform" strokeWidth={1.5} />
              </a>
            </div>
          </div>

          {/* Footer links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-lg font-semibold mb-4">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors duration-200 relative group"
                    >
                      {link}
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-primary-light transition-all duration-300 group-hover:w-full"></span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom section */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 SubscribePay. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
              Terms of Service
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
              Security
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
