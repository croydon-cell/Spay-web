import React from 'react';
import { Smartphone, CreditCard, Check, X, Activity } from 'lucide-react';

const RecentTransactions: React.FC = () => {
  const transactions = [
    {
      id: 1,
      customer: 'Rajesh Kumar',
      method: 'UPI',
      status: 'success',
      amount: '₹649',
      time: '2 min ago',
    },
    {
      id: 2,
      customer: 'Priya Sharma',
      method: 'Card',
      status: 'success',
      amount: '₹119',
      time: '5 min ago',
    },
    {
      id: 3,
      customer: 'Amit Patel',
      method: 'UPI',
      status: 'failed',
      amount: '₹1,675',
      time: '12 min ago',
    },
    {
      id: 4,
      customer: 'Sneha Reddy',
      method: 'Card',
      status: 'success',
      amount: '₹1,200',
      time: '18 min ago',
    },
    {
      id: 5,
      customer: 'Vikram Singh',
      method: 'UPI',
      status: 'success',
      amount: '₹500',
      time: '25 min ago',
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
    <div className="glassmorphic rounded-2xl p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg flex items-center justify-center">
            <Activity className="h-5 w-5 text-primary" strokeWidth={1.5} />
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-900">Recent Transactions</h3>
            <p className="text-gray-600 text-sm">Latest payment activities</p>
          </div>
        </div>
        
        <button className="text-primary hover:text-primary-dark text-sm font-medium">
          View All
        </button>
      </div>
      
      <div className="space-y-4">
        {transactions.map((transaction) => (
          <div
            key={transaction.id}
            className="flex items-center justify-between p-4 hover:bg-gray-50 rounded-lg transition-colors duration-200"
          >
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                {getPaymentIcon(transaction.method)}
              </div>
              
              <div>
                <p className="font-medium text-gray-900">{transaction.customer}</p>
                <p className="text-sm text-gray-600">{transaction.method} • {transaction.time}</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <span className="font-semibold text-gray-900">{transaction.amount}</span>
              {getStatusIcon(transaction.status)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentTransactions;