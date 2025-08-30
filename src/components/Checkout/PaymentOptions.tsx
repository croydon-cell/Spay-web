import React, { useState } from 'react';
import { Smartphone, CreditCard, Coins } from 'lucide-react';

interface PaymentOptionsProps {
  onPaymentMethodChange: (method: string) => void;
}

const PaymentOptions: React.FC<PaymentOptionsProps> = ({ onPaymentMethodChange }) => {
  const [activeTab, setActiveTab] = useState('upi');

  const paymentMethods = [
    { id: 'upi', label: 'UPI Autopay', icon: Smartphone },
    { id: 'card', label: 'Cards', icon: CreditCard },
    { id: 'cbdc', label: 'Digital Rupee', icon: Coins },
  ];

  const handleTabChange = (method: string) => {
    setActiveTab(method);
    onPaymentMethodChange(method);
  };

  return (
    <div className="glassmorphic rounded-2xl p-6 mb-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Payment Options</h3>
      
      <div className="flex bg-gray-100 rounded-lg p-1 mb-6">
        {paymentMethods.map((method) => (
          <button
            key={method.id}
            onClick={() => handleTabChange(method.id)}
            className={`flex-1 flex items-center justify-center space-x-2 py-3 px-4 rounded-md text-sm font-medium transition-all duration-200 ${
              activeTab === method.id
                ? 'bg-white text-primary shadow-sm'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            <method.icon className="h-4 w-4" strokeWidth={1.5} />
            <span>{method.label}</span>
          </button>
        ))}
      </div>
      
      {activeTab === 'upi' && (
        <div className="space-y-4">
          <div className="relative">
            <Smartphone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-primary" strokeWidth={1.5} />
            <input
              type="text"
              placeholder="Enter UPI ID (e.g., user@paytm)"
              className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200"
            />
          </div>
          <div className="text-sm text-gray-600">
            Your UPI app will be used for automatic recurring payments
          </div>
        </div>
      )}
      
      {activeTab === 'card' && (
        <div className="space-y-4">
          <div className="relative">
            <CreditCard className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-primary" strokeWidth={1.5} />
            <input
              type="text"
              placeholder="Card Number"
              className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="MM/YY"
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200"
            />
            <input
              type="text"
              placeholder="CVV"
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200"
            />
          </div>
          <input
            type="text"
            placeholder="Cardholder Name"
            className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200"
          />
        </div>
      )}
      
      {activeTab === 'cbdc' && (
        <div className="space-y-4">
          <div className="relative">
            <Coins className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-primary" strokeWidth={1.5} />
            <input
              type="text"
              placeholder="Digital Rupee Wallet ID"
              className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200"
            />
          </div>
          <div className="text-sm text-gray-600">
            Connect your CBDC wallet for future-ready payments
          </div>
        </div>
      )}
    </div>
  );
};

export default PaymentOptions;