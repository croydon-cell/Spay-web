import React, { useEffect, useState } from 'react';
import { Calendar, Users, IndianRupee, RotateCcw } from 'lucide-react';
import MetricCard from '../ui/MetricCard';

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
      color: 'blue',
      description: 'Active recurring payments'
    },
    {
      title: 'Active Customers',
      value: counters.customers.toLocaleString(),
      icon: Users,
      change: '+8.2%',
      positive: true,
      color: 'green',
      description: 'Verified customer accounts'
    },
    {
      title: 'Monthly Revenue',
      value: `₹${(counters.revenue / 100000).toFixed(1)}L`,
      icon: IndianRupee,
      change: '+15.3%',
      positive: true,
      color: 'purple',
      description: 'Total revenue this month'
    },
    {
      title: 'Retry Success Rate',
      value: `${counters.retryRate}%`,
      icon: RotateCcw,
      change: '+2.1%',
      positive: true,
      color: 'orange',
      description: 'Smart retry effectiveness'
    },
  ];

  const colorClasses = {
    blue: {
      bg: 'from-blue-50 to-blue-100',
      icon: 'bg-blue-500',
      text: 'text-blue-900',
      border: 'border-blue-200'
    },
    green: {
      bg: 'from-green-50 to-green-100',
      icon: 'bg-green-500',
      text: 'text-green-900',
      border: 'border-green-200'
    },
    purple: {
      bg: 'from-purple-50 to-purple-100',
      icon: 'bg-purple-500',
      text: 'text-purple-900',
      border: 'border-purple-200'
    },
    orange: {
      bg: 'from-orange-50 to-orange-100',
      icon: 'bg-orange-500',
      text: 'text-orange-900',
      border: 'border-orange-200'
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {metrics.map((metric, index) => (
        <MetricCard
          key={index}
          title={metric.title}
          value={metric.value}
          description={metric.description}
          icon={metric.icon}
          trend={{
            value: metric.change,
            positive: metric.positive
          }}
          color={metric.color as any}
          variant="glass"
        />
      ))}
    </div>
  );
};

export default MetricsCards;