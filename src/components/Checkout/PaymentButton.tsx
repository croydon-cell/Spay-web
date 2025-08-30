import React, { useState } from 'react';
import { Lock, Loader } from 'lucide-react';

interface PaymentButtonProps {
  amount: number;
  currency: string;
  isEnabled: boolean;
  onPayment: () => void;
}

const PaymentButton: React.FC<PaymentButtonProps> = ({ amount, currency, isEnabled, onPayment }) => {
  const [isProcessing, setIsProcessing] = useState(false);

  const handleClick = () => {
    if (!isEnabled || isProcessing) return;
    
    setIsProcessing(true);
    setTimeout(() => {
      onPayment();
      setIsProcessing(false);
    }, 2000);
  };

  return (
    <div className="space-y-4">
      <button
        onClick={handleClick}
        disabled={!isEnabled || isProcessing}
        className={`w-full py-4 px-6 rounded-lg font-semibold text-lg transition-all duration-200 flex items-center justify-center space-x-3 ${
          isEnabled && !isProcessing
            ? 'bg-primary hover:bg-primary-dark text-white hover:scale-105 hover:shadow-lg'
            : 'bg-gray-300 text-gray-500 cursor-not-allowed'
        }`}
      >
        {isProcessing ? (
          <>
            <Loader className="h-5 w-5 animate-spin" strokeWidth={2} />
            <span>Processing...</span>
          </>
        ) : (
          <>
            <Lock className="h-5 w-5" strokeWidth={1.5} />
            <span>Pay Securely {currency}{amount}</span>
          </>
        )}
      </button>
      
      <div className="text-center text-sm text-gray-600">
        <div className="flex items-center justify-center space-x-2">
          <Lock className="h-4 w-4" strokeWidth={1.5} />
          <span>256-bit encrypted • Secure payment</span>
        </div>
      </div>
    </div>
  );
};

export default PaymentButton;