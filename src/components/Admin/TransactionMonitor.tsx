import React from 'react';
import { Activity, Smartphone, CreditCard, Check, X } from 'lucide-react';

const TransactionMonitor: React.FC = () => {
  const transactions = [
    {
      id: 1,
      merchant: 'Netflix India',
      customer: 'Rajesh Kumar',
      method: 'UPI',
      status: 'success',
      amount: '₹649',
      timestamp: '2 min ago',
    },
    {
      id: 2,
      merchant: 'Byju\'s App',
      customer: 'Priya Sharma',
      method: 'Card',
      status: 'success',
      amount: '₹2,999',
      timestamp: '5 min ago',
    },
    {
      id: 3,
      merchant: 'Cult.fit',
      customer: 'Amit Patel',
      method: 'UPI',
      status: 'failed',
      amount: '₹1,200',
      timestamp: '8 min ago',
    },
    {
      id: 4,
      merchant: 'Zoom Pro',
      customer: 'Sneha Reddy',
      method: 'Card',
      status: 'success',
      amount: '₹1,675',
      timestamp: '12 min ago',
    },
    {
      id: 5,
      merchant: 'Canva Pro',
      customer: 'Vikram Singh',
      method: 'UPI',
      status: 'success',
      amount: '₹500',
      timestamp: '15 min ago',
    },
  ];

  const getPaymentIcon = (method: string) => {
    return method === 'UPI' ? (
      <Smartphone className="h-4 w-4 text-primary" strokeWidth={1.5} />
    ) : (
      <CreditCard className="h-4 w-4 text-primary" strokeWidth={1.5} />
    );
  };

  const getStatusIcon = (status: string) => {
    return status === 'success' ? (
      <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
        <Check className="h-3 w-3 text-green-600" strokeWidth={2} />
      </div>
    ) : (
      <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center">
        <X className="h-3 w-3 text-red-600" strokeWidth={2} />
      </div>
    );
  };

  return (
    <div className="glassmorphic rounded-2xl p-6 mb-8">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg flex items-center justify-center">
            <Activity className="h-5 w-5 text-primary" strokeWidth={1.5} />
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-900">Transaction Monitor</h3>
            <p className="text-gray-600 text-sm">Real-time payment activities</p>
          </div>
        </div>
        
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          <span className="text-sm text-gray-600">Live</span>
        </div>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="text-left py-3 px-4 font-semibold text-gray-700">Merchant</th>
              <th className="text-left py-3 px-4 font-semibold text-gray-700">Customer</th>
              <th className="text-left py-3 px-4 font-semibold text-gray-700">Method</th>
              <th className="text-left py-3 px-4 font-semibold text-gray-700">Status</th>
              <th className="text-left py-3 px-4 font-semibold text-gray-700">Amount</th>
              <th className="text-left py-3 px-4 font-semibold text-gray-700">Time</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction) => (
              <tr key={transaction.id} className="border-b border-gray-100 hover:bg-gray-50 transition-colors duration-200">
                <td className="py-4 px-4">
                  <span className="font-medium text-gray-900">{transaction.merchant}</span>
                </td>
                <td className="py-4 px-4 text-gray-600">{transaction.customer}</td>
                <td className="py-4 px-4">
                  <div className="flex items-center space-x-2">
                    {getPaymentIcon(transaction.method)}
                    <span className="text-sm text-gray-600">{transaction.method}</span>
                  </div>
                </td>
                <td className="py-4 px-4">
                  {getStatusIcon(transaction.status)}
                </td>
                <td className="py-4 px-4 font-semibold text-gray-900">{transaction.amount}</td>
                <td className="py-4 px-4 text-gray-500 text-sm">{transaction.timestamp}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TransactionMonitor;