import React from 'react';
import { Calendar, IndianRupee } from 'lucide-react';

interface OrderSummaryProps {
  planName: string;
  price: number;
  currency: string;
  billingCycle: string;
  nextBillingDate: string;
}

const OrderSummary: React.FC<OrderSummaryProps> = ({ 
  planName, 
  price, 
  currency, 
  billingCycle, 
  nextBillingDate 
}) => {
  return (
    <div className="glassmorphic rounded-2xl p-6 mb-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Order Summary</h3>
      
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Calendar className="h-5 w-5 text-primary" strokeWidth={1.5} />
            <span className="font-medium text-gray-900">{planName}</span>
          </div>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <IndianRupee className="h-5 w-5 text-primary" strokeWidth={1.5} />
            <span className="text-gray-600">Price</span>
          </div>
          <span className="text-2xl font-bold text-gray-900">
            {currency}{price} / {billingCycle}
          </span>
        </div>
        
        <div className="border-t border-gray-200 pt-4">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Calendar className="h-4 w-4" strokeWidth={1.5} />
            <span>Renews on {nextBillingDate}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;