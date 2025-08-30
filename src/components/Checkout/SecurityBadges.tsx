import React from 'react';
import { Shield, CheckCircle } from 'lucide-react';

const SecurityBadges: React.FC = () => {
  const badges = [
    {
      icon: Shield,
      title: 'RBI Compliant',
      description: 'Regulated by Reserve Bank of India',
    },
    {
      icon: CheckCircle,
      title: 'NPCI Certified',
      description: 'UPI payments via NPCI network',
    },
    {
      icon: Shield,
      title: 'PCI DSS',
      description: 'Secure card data handling',
    },
  ];

  return (
    <div className="glassmorphic rounded-2xl p-6 mb-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Security & Compliance</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {badges.map((badge, index) => (
          <div key={index} className="flex items-center space-x-3 p-3 bg-white/50 rounded-lg">
            <div className="w-8 h-8 bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg flex items-center justify-center">
              <badge.icon className="h-4 w-4 text-primary" strokeWidth={1.5} />
            </div>
            <div>
              <div className="font-medium text-gray-900 text-sm">{badge.title}</div>
              <div className="text-xs text-gray-600">{badge.description}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SecurityBadges;