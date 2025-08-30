import React from 'react';
import { CheckCircle, XCircle, RotateCcw } from 'lucide-react';

interface PaymentStatusProps {
  status: 'success' | 'failed' | 'processing';
  amount?: number;
  currency?: string;
  onRetry?: () => void;
  onReturn?: () => void;
}

const PaymentStatus: React.FC<PaymentStatusProps> = ({ 
  status, 
  amount, 
  currency, 
  onRetry, 
  onReturn 
}) => {
  if (status === 'success') {
    return (
      <div className="text-center py-12">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 animate-scale-in">
          <CheckCircle className="h-12 w-12 text-green-600" strokeWidth={1.5} />
        </div>
        
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Payment Successful!</h2>
        <p className="text-gray-600 mb-6">
          Your subscription has been activated successfully.
        </p>
        
        {amount && currency && (
          <div className="glassmorphic rounded-lg p-4 mb-6 inline-block">
            <span className="text-lg font-semibold text-gray-900">
              {currency}{amount} paid
            </span>
          </div>
        )}
        
        <button
          onClick={onReturn}
          className="bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200 hover:scale-105"
        >
          Continue to Service
        </button>
      </div>
    );
  }

  if (status === 'failed') {
    return (
      <div className="text-center py-12">
        <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6 animate-scale-in">
          <XCircle className="h-12 w-12 text-red-600" strokeWidth={1.5} />
        </div>
        
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Payment Failed</h2>
        <p className="text-gray-600 mb-6">
          We couldn't process your payment. Please try again.
        </p>
        
        <div className="space-y-3">
          <button
            onClick={onRetry}
            className="bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200 hover:scale-105 flex items-center space-x-2 mx-auto"
          >
            <RotateCcw className="h-4 w-4" strokeWidth={1.5} />
            <span>Try Again</span>
          </button>
          
          <button
            onClick={onReturn}
            className="text-gray-600 hover:text-gray-900 text-sm transition-colors duration-200 block mx-auto"
          >
            Return to merchant
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="text-center py-12">
      <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
        <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
      </div>
      
      <h2 className="text-2xl font-bold text-gray-900 mb-2">Processing Payment</h2>
      <p className="text-gray-600">
        Please wait while we process your payment...
      </p>
    </div>
  );
};

export default PaymentStatus;