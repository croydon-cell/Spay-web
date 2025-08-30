import React from 'react';
import { Calendar, MoreHorizontal } from 'lucide-react';

const SubscriptionsTable: React.FC = () => {
  const subscriptions = [
    {
      id: 1,
      customer: 'Netflix India',
      plan: 'Premium',
      status: 'active',
      nextBilling: '2024-01-15',
      amount: '₹649',
    },
    {
      id: 2,
      customer: 'Spotify Premium',
      plan: 'Individual',
      status: 'active',
      nextBilling: '2024-01-18',
      amount: '₹119',
    },
    {
      id: 3,
      customer: 'Adobe Creative',
      plan: 'All Apps',
      status: 'failed',
      nextBilling: '2024-01-12',
      amount: '₹1,675',
    },
    {
      id: 4,
      customer: 'Zoom Pro',
      plan: 'Professional',
      status: 'active',
      nextBilling: '2024-01-20',
      amount: '₹1,200',
    },
    {
      id: 5,
      customer: 'Canva Pro',
      plan: 'Pro',
      status: 'pending',
      nextBilling: '2024-01-16',
      amount: '₹500',
    },
  ];

  const getStatusBadge = (status: string) => {
    const styles = {
      active: 'bg-green-100 text-green-800',
      failed: 'bg-red-100 text-red-800',
      pending: 'bg-yellow-100 text-yellow-800',
    };
    
    return (
      <span className={`px-2 py-1 rounded-full text-xs font-medium ${styles[status as keyof typeof styles]}`}>
        {status.charAt(0).toUpperCase() + status.slice(1)}
      </span>
    );
  };

  return (
    <div className="glassmorphic rounded-2xl p-6 mb-8">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg flex items-center justify-center">
            <Calendar className="h-5 w-5 text-primary" strokeWidth={1.5} />
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-900">Active Subscriptions</h3>
            <p className="text-gray-600 text-sm">Manage customer subscriptions</p>
          </div>
        </div>
        
        <button className="text-primary hover:text-primary-dark text-sm font-medium">
          View All
        </button>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="text-left py-3 px-4 font-semibold text-gray-700">Customer</th>
              <th className="text-left py-3 px-4 font-semibold text-gray-700">Plan</th>
              <th className="text-left py-3 px-4 font-semibold text-gray-700">Status</th>
              <th className="text-left py-3 px-4 font-semibold text-gray-700">Next Billing</th>
              <th className="text-left py-3 px-4 font-semibold text-gray-700">Amount</th>
              <th className="text-left py-3 px-4 font-semibold text-gray-700"></th>
            </tr>
          </thead>
          <tbody>
            {subscriptions.map((subscription) => (
              <tr key={subscription.id} className="border-b border-gray-100 hover:bg-gray-50 transition-colors duration-200">
                <td className="py-4 px-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-primary/20 to-primary/10 rounded-lg flex items-center justify-center">
                      <span className="text-primary text-xs font-bold">
                        {subscription.customer.charAt(0)}
                      </span>
                    </div>
                    <span className="font-medium text-gray-900">{subscription.customer}</span>
                  </div>
                </td>
                <td className="py-4 px-4 text-gray-600">{subscription.plan}</td>
                <td className="py-4 px-4">{getStatusBadge(subscription.status)}</td>
                <td className="py-4 px-4 text-gray-600">{subscription.nextBilling}</td>
                <td className="py-4 px-4 font-semibold text-gray-900">{subscription.amount}</td>
                <td className="py-4 px-4">
                  <button className="p-1 hover:bg-gray-200 rounded transition-colors duration-200">
                    <MoreHorizontal className="h-4 w-4 text-gray-400" strokeWidth={1.5} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SubscriptionsTable;