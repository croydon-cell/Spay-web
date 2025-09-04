import React from 'react';
import { LucideIcon } from 'lucide-react';
import Card from './Card';
import Badge from './Badge';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  badge?: {
    text: string;
    variant?: 'default' | 'success' | 'warning' | 'error' | 'info' | 'purple';
  };
  color?: 'blue' | 'green' | 'purple' | 'orange' | 'red' | 'indigo' | 'teal' | 'pink';
  className?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon: Icon,
  title,
  description,
  badge,
  color = 'blue',
  className = ''
}) => {
  const colorClasses = {
    blue: 'from-blue-500 to-blue-600',
    green: 'from-green-500 to-green-600',
    purple: 'from-purple-500 to-purple-600',
    orange: 'from-orange-500 to-orange-600',
    red: 'from-red-500 to-red-600',
    indigo: 'from-indigo-500 to-indigo-600',
    teal: 'from-teal-500 to-teal-600',
    pink: 'from-pink-500 to-pink-600'
  };

  return (
    <Card variant="default" padding="lg" hover className={`group cursor-pointer ${className}`}>
      <div className="space-y-4">
        {/* Icon */}
        <div className="flex items-center justify-between">
          <div className={`w-14 h-14 bg-gradient-to-br ${colorClasses[color]} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
            <Icon className="h-7 w-7 text-white" strokeWidth={2} />
          </div>
          {badge && (
            <Badge variant={badge.variant || 'default'} size="sm">
              {badge.text}
            </Badge>
          )}
        </div>
        
        {/* Content */}
        <div className="space-y-2">
          <h3 className="text-xl font-bold text-gray-900 group-hover:text-gray-700 transition-colors">
            {title}
          </h3>
          <p className="text-gray-600 leading-relaxed text-sm">
            {description}
          </p>
        </div>
      </div>
      
      {/* Hover Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
    </Card>
  );
};

export default FeatureCard;