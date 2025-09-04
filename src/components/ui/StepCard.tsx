import React from 'react';
import { ArrowRight } from 'lucide-react';

interface StepCardProps {
  step: string;
  title: string;
  description: string;
  isLast?: boolean;
  className?: string;
}

const StepCard: React.FC<StepCardProps> = ({
  step,
  title,
  description,
  isLast = false,
  className = ''
}) => {
  return (
    <div className={`text-center relative ${className}`}>
      <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg hover:scale-105 transition-transform duration-200">
        <span className="text-white font-bold text-lg">{step}</span>
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
      {!isLast && (
        <ArrowRight className="hidden md:block absolute top-8 -right-4 h-6 w-6 text-gray-400" />
      )}
    </div>
  );
};

export default StepCard;