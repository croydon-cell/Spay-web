import React from 'react';
import { Building, CreditCard, MoreHorizontal, Check, X, Pause } from 'lucide-react';

const MerchantPanel: React.FC = () => {
  const merchants = [
    {
      id: 1,
      name: 'Netflix India Pvt Ltd',
      businessType: 'OTT Platform',
      status: 'active',
      kycStatus: 'verified',
      joinedDate: '2024-01-15',
    },
    {
      id: 2,
      name: 'Byju\'s Learning App',
      businessType: 'EdTech',
      status: 'active',
      kycStatus: 'verified',
      joinedDate: '2024-01-12',
    },
    {
      id: 3,
      name: 'Cult.fit Wellness',
      businessType: 'Fitness',
      status: 'pending',
      kycStatus: 'pending',
      joinedDate: '2024-01-20',
    },
    {
      id: 4,
      name: 'Zoom Technologies',
      businessType: 'SaaS',
      status: 'suspended',
      kycStatus: 'rejected',
      joinedDate: '2024-01-08',
    },
  ];

  const getStatusBadge = (status: string) => {
    const styles = {
      active: 'bg-green-100 text-green-800',
      pending: 'bg-yellow-100 text-yellow-800',
      suspended: 'bg-red-100 text-red-800',
    };
    
    return (
      <span className={`px-2 py-1 rounded-full text-xs font-medium ${styles[status as keyof typeof styles]}`}>
        {status.charAt(0).toUpperCase() + status.slice(1)}
      </span>
    );
  };

  const getKycBadge = (status: string) => {
    const styles = {
      verified: 'bg-green-100 text-green-800',
      pending: 'bg-yellow-100 text-yellow-800',
      rejected: 'bg-red-100 text-red-800',
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
            <Building className="h-5 w-5 text-primary" strokeWidth={1.5} />
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-900">Merchant Management</h3>
            <p className="text-gray-600 text-sm">Monitor and manage merchant accounts</p>
          </div>
        </div>
        
        <button className="bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200">
          Add Merchant
        </button>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="text-left py-3 px-4 font-semibold text-gray-700">Merchant</th>
              <th className="text-left py-3 px-4 font-semibold text-gray-700">Business Type</th>
              <th className="text-left py-3 px-4 font-semibold text-gray-700">Status</th>
              <th className="text-left py-3 px-4 font-semibold text-gray-700">KYC Status</th>
              <th className="text-left py-3 px-4 font-semibold text-gray-700">Joined Date</th>
              <th className="text-left py-3 px-4 font-semibold text-gray-700">Actions</th>
            </tr>
          </thead>
          <tbody>
            {merchants.map((merchant) => (
              <tr key={merchant.id} className="border-b border-gray-100 hover:bg-gray-50 transition-colors duration-200">
                <td className="py-4 px-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-primary/20 to-primary/10 rounded-lg flex items-center justify-center">
                      <Building className="h-4 w-4 text-primary" strokeWidth={1.5} />
                    </div>
                    <span className="font-medium text-gray-900">{merchant.name}</span>
                  </div>
                </td>
                <td className="py-4 px-4 text-gray-600">{merchant.businessType}</td>
                <td className="py-4 px-4">{getStatusBadge(merchant.status)}</td>
                <td className="py-4 px-4">{getKycBadge(merchant.kycStatus)}</td>
                <td className="py-4 px-4 text-gray-600">{merchant.joinedDate}</td>
                <td className="py-4 px-4">
                  <div className="flex items-center space-x-2">
                    <button className="p-1 hover:bg-green-100 rounded text-green-600 transition-colors duration-200">
                      <Check className="h-4 w-4" strokeWidth={1.5} />
                    </button>
                    <button className="p-1 hover:bg-yellow-100 rounded text-yellow-600 transition-colors duration-200">
                      <Pause className="h-4 w-4" strokeWidth={1.5} />
                    </button>
                    <button className="p-1 hover:bg-red-100 rounded text-red-600 transition-colors duration-200">
                      <X className="h-4 w-4" strokeWidth={1.5} />
                    </button>
                    <button className="p-1 hover:bg-gray-200 rounded transition-colors duration-200">
                      <MoreHorizontal className="h-4 w-4 text-gray-400" strokeWidth={1.5} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MerchantPanel;