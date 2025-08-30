import React, { useEffect, useState } from 'react';
import { Calendar, Users, IndianRupee, RotateCcw } from 'lucide-react';

const MetricsCards: React.FC = () => {
  const [counters, setCounters] = useState({
    subscriptions: 0,
    customers: 0,
    revenue: 0,
    retryRate: 0,
  });

  useEffect(() => {
    const targets = {
      subscriptions: 12847,
      customers: 8934,
      revenue: 2847000,
      retryRate: 98.5,
    };

    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;
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
          [key]: key === 'revenue' ? Math.floor(current) : parseFloat(current.toFixed(1))
        }));
      }, stepDuration);

      intervals.push(intervalId);
    });

    return () => intervals.forEach(clearInterval);
  }, []);

  const metrics = [
    {
      title: 'Total Subscriptions',
      value: counters.subscriptions.toLocaleString(),
      icon: Calendar,
      change: '+12.5%',
      positive: true,
    },
    {
      title: 'Active Customers',
      value: counters.customers.toLocaleString(),
      icon: Users,
      change: '+8.2%',
      positive: true,
    },
    {
      title: 'Monthly Revenue',
      value: `₹${(counters.revenue / 100000).toFixed(1)}L`,
      icon: IndianRupee,
      change: '+15.3%',
      positive: true,
    },
    {
      title: 'Retry Success Rate',
      value: `${counters.retryRate}%`,
      icon: RotateCcw,
      change: '+2.1%',
      positive: true,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {metrics.map((metric, index) => (
        <div
          key={index}
          className="glassmorphic rounded-2xl p-6 hover:scale-105 hover:shadow-xl transition-all duration-300 cursor-pointer group"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl flex items-center justify-center group-hover:from-primary/20 group-hover:to-primary/10 transition-all duration-300">
              <metric.icon className="h-6 w-6 text-primary" strokeWidth={1.5} />
            </div>
            <span className={`text-sm font-semibold px-2 py-1 rounded-full ${
              metric.positive 
                ? 'text-green-600 bg-green-50' 
                : 'text-red-600 bg-red-50'
            }`}>
              {metric.change}
            </span>
          </div>
          
          <div className="space-y-1">
            <h3 className="text-3xl font-bold text-gray-900">{metric.value}</h3>
            <p className="text-gray-600 text-sm">{metric.title}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MetricsCards;