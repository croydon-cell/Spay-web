import React, { useState } from 'react';
import { Play, BookOpen, Dumbbell, Settings, PieChart } from 'lucide-react';

const CustomerSegmentation: React.FC = () => {
  const [hoveredSegment, setHoveredSegment] = useState<number | null>(null);

  const segments = [
    { name: 'OTT & Entertainment', value: 35, color: '#1639a5', icon: Play },
    { name: 'EdTech Platforms', value: 28, color: '#2563eb', icon: BookOpen },
    { name: 'Fitness & Wellness', value: 22, color: '#3b82f6', icon: Dumbbell },
    { name: 'SaaS Tools', value: 15, color: '#60a5fa', icon: Settings },
  ];

  const total = segments.reduce((sum, segment) => sum + segment.value, 0);
  let cumulativePercentage = 0;

  return (
    <div className="glassmorphic rounded-2xl p-6">
      <div className="flex items-center space-x-3 mb-6">
        <div className="w-10 h-10 bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg flex items-center justify-center">
          <PieChart className="h-5 w-5 text-primary" strokeWidth={1.5} />
        </div>
        <div>
          <h3 className="text-xl font-bold text-gray-900">Customer Segmentation</h3>
          <p className="text-gray-600 text-sm">Distribution by industry</p>
        </div>
      </div>

      <div className="flex items-center justify-center mb-6">
        <div className="relative w-48 h-48">
          <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
            {segments.map((segment, index) => {
              const percentage = (segment.value / total) * 100;
              const strokeDasharray = `${percentage} ${100 - percentage}`;
              const strokeDashoffset = -cumulativePercentage;
              
              const result = (
                <circle
                  key={index}
                  cx="50"
                  cy="50"
                  r="40"
                  fill="transparent"
                  stroke={segment.color}
                  strokeWidth={hoveredSegment === index ? "6" : "4"}
                  strokeDasharray={strokeDasharray}
                  strokeDashoffset={strokeDashoffset}
                  className="transition-all duration-300 cursor-pointer"
                  onMouseEnter={() => setHoveredSegment(index)}
                  onMouseLeave={() => setHoveredSegment(null)}
                  style={{
                    filter: hoveredSegment === index ? 'drop-shadow(0 0 8px rgba(22, 57, 165, 0.3))' : 'none'
                  }}
                />
              );
              
              cumulativePercentage += percentage;
              return result;
            })}
          </svg>
          
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">{total}%</div>
              <div className="text-sm text-gray-600">Coverage</div>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-3">
        {segments.map((segment, index) => (
          <div
            key={index}
            className={`flex items-center justify-between p-3 rounded-lg transition-all duration-200 cursor-pointer ${
              hoveredSegment === index ? 'bg-gray-50 scale-105' : 'hover:bg-gray-50'
            }`}
            onMouseEnter={() => setHoveredSegment(index)}
            onMouseLeave={() => setHoveredSegment(null)}
          >
            <div className="flex items-center space-x-3">
              <div 
                className="w-8 h-8 rounded-lg flex items-center justify-center"
                style={{ backgroundColor: `${segment.color}20` }}
              >
                <segment.icon 
                  className="h-4 w-4" 
                  style={{ color: segment.color }}
                  strokeWidth={1.5} 
                />
              </div>
              <span className="font-medium text-gray-900">{segment.name}</span>
            </div>
            
            <div className="flex items-center space-x-2">
              <div 
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: segment.color }}
              ></div>
              <span className="font-semibold text-gray-900">{segment.value}%</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomerSegmentation;