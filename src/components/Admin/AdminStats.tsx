import React, { useEffect, useState } from 'react';
import { Building, CreditCard, AlertTriangle, IndianRupee } from 'lucide-react';

const AdminStats: React.FC = () => {
  const [counters, setCounters] = useState({
    merchants: 0,
    transactions: 0,
    failedPayments: 0,
    revenue: 0,
  });

  useEffect(() => {
    const targets = {
      merchants: 2847,
      transactions: 15634,
      failedPayments: 234,
      revenue: 12847000,
    };

    const duration = 2000;
    const steps = 60;
    const intervals: NodeJS.Timeout[] = [];

    Object.keys(targets).forEach((key) => {
      const target = targets[key as keyof typeof targets];
      const increment = target / steps;
      let current = 0;

      const intervalId = setInterval(() => {
        current += increment;
        if (current >= target) {
          current = target;
          clearInterval(intervalId);
        }
        setCounters(prev => ({
          ...prev,
          [key]: Math.floor(current)
        }));
      }, duration / steps);

      intervals.push(intervalId);
    });

    return () => intervals.forEach(clearInterval);
  }, []);

  const stats = [
    {
      title: 'Total Merchants',
      value: counters.merchants.toLocaleString(),
      icon: Building,
      change: '+12.5%',
      positive: true,
    },
    {
      title: "Today's Transactions",
      value: counters.transactions.toLocaleString(),
      icon: CreditCard,
      change: '+8.2%',
      positive: true,
    },
    {
      title: 'Failed Payments',
      value: counters.failedPayments.toLocaleString(),
      icon: AlertTriangle,
      change: '-3.1%',
      positive: true,
    },
    {
      title: 'Revenue Collected',
      value: `₹${(counters.revenue / 100000).toFixed(1)}L`,
      icon: IndianRupee,
      change: '+15.3%',
      positive: true,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="glassmorphic rounded-2xl p-6 hover:scale-105 hover:shadow-xl transition-all duration-300 cursor-pointer group"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl flex items-center justify-center group-hover:from-primary/20 group-hover:to-primary/10 transition-all duration-300">
              <stat.icon className="h-6 w-6 text-primary" strokeWidth={1.5} />
            </div>
            <span className={`text-sm font-semibold px-2 py-1 rounded-full ${
              stat.positive 
                ? 'text-green-600 bg-green-50' 
                : 'text-red-600 bg-red-50'
            }`}>
              {stat.change}
            </span>
          </div>
          
          <div className="space-y-1">
            <h3 className="text-3xl font-bold text-gray-900">{stat.value}</h3>
            <p className="text-gray-600 text-sm">{stat.title}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AdminStats;