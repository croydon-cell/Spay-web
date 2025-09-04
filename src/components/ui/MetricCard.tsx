import React from 'react';
import { LucideIcon } from 'lucide-react';
import Card from './Card';
import Badge from './Badge';

interface MetricCardProps {
  title: string;
  value: string;
  description?: string;
  icon?: LucideIcon;
  trend?: {
    value: string;
    positive: boolean;
  };
  color?: 'blue' | 'green' | 'purple' | 'orange' | 'red' | 'indigo' | 'teal' | 'pink';
  variant?: 'default' | 'glass';
  className?: string;
}

const MetricCard: React.FC<MetricCardProps> = ({
  title,
  value,
  description,
  icon: Icon,
  trend,
  color = 'blue',
  variant = 'glass',
  className = ''
}) => {
  const colorClasses = {
    blue: 'from-blue-50 to-blue-100 border-blue-200 text-blue-900',
    green: 'from-green-50 to-green-100 border-green-200 text-green-900',
    purple: 'from-purple-50 to-purple-100 border-purple-200 text-purple-900',
    orange: 'from-orange-50 to-orange-100 border-orange-200 text-orange-900',
    red: 'from-red-50 to-red-100 border-red-200 text-red-900',
    indigo: 'from-indigo-50 to-indigo-100 border-indigo-200 text-indigo-900',
    teal: 'from-teal-50 to-teal-100 border-teal-200 text-teal-900',
    pink: 'from-pink-50 to-pink-100 border-pink-200 text-pink-900'
  };

  const iconColorClasses = {
    blue: 'text-blue-600',
    green: 'text-green-600',
    purple: 'text-purple-600',
    orange: 'text-orange-600',
    red: 'text-red-600',
    indigo: 'text-indigo-600',
    teal: 'text-teal-600',
    pink: 'text-pink-600'
  };

  return (
    <Card 
      variant={variant} 
      padding="lg" 
      hover 
      className={`bg-gradient-to-br ${colorClasses[color]} border-2 ${className}`}
    >
      <div className="flex items-start justify-between mb-4">
        {Icon && (
          <div className="w-12 h-12 bg-white/80 rounded-xl flex items-center justify-center shadow-sm">
            <Icon className={`h-6 w-6 ${iconColorClasses[color]}`} />
          </div>
        )}
        {trend && (
          <Badge 
            variant={trend.positive ? 'success' : 'error'} 
            size="sm"
            className="font-bold"
          >
            {trend.value}
          </Badge>
        )}
      </div>
      
      <div className="space-y-2">
        <div className="text-3xl font-bold">{value}</div>
        <div className="font-semibold text-sm">{title}</div>
        {description && (
          <div className="text-xs opacity-75">{description}</div>
        )}
      </div>
    </Card>
  );
};

export default MetricCard;