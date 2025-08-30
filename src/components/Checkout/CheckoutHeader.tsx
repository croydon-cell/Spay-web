import React from 'react';
import { Shield } from 'lucide-react';

interface CheckoutHeaderProps {
  merchantName: string;
  merchantLogo?: string;
}

const CheckoutHeader: React.FC<CheckoutHeaderProps> = ({ merchantName, merchantLogo }) => {
  return (
    <div className="flex items-center justify-between p-6 bg-white border-b border-gray-200">
      <div className="flex items-center space-x-3">
        <div className="w-10 h-10 bg-gradient-to-br from-primary/20 to-primary/10 rounded-lg flex items-center justify-center">
          <span className="text-primary font-bold text-sm">{merchantName.charAt(0)}</span>
        </div>
        <span className="text-lg font-semibold text-gray-900">{merchantName}</span>
      </div>
      
      <div className="flex items-center space-x-2 text-gray-600">
        <Shield className="h-4 w-4 text-primary" strokeWidth={1.5} />
        <span className="text-sm">Powered by</span>
        <span className="font-semibold">
          <span className="text-primary">Subscribe</span>
          <span className="text-gray-600">Pay</span>
        </span>
      </div>
    </div>
  );
};

export default CheckoutHeader;