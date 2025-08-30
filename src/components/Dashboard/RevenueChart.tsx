import React, { useState } from 'react';
import { TrendingUp } from 'lucide-react';

const RevenueChart: React.FC = () => {
  const [activeTab, setActiveTab] = useState('Monthly');
  
  const tabs = ['Daily', 'Weekly', 'Monthly'];
  
  // Mock data points for the chart
  const chartData = [
    { month: 'Jan', revenue: 45, subscriptions: 120 },
    { month: 'Feb', revenue: 52, subscriptions: 140 },
    { month: 'Mar', revenue: 48, subscriptions: 130 },
    { month: 'Apr', revenue: 61, subscriptions: 160 },
    { month: 'May', revenue: 55, subscriptions: 150 },
    { month: 'Jun', revenue: 67, subscriptions: 180 },
    { month: 'Jul', revenue: 72, subscriptions: 195 },
    { month: 'Aug', revenue: 69, subscriptions: 185 },
    { month: 'Sep', revenue: 78, subscriptions: 210 },
    { month: 'Oct', revenue: 85, subscriptions: 230 },
    { month: 'Nov', revenue: 82, subscriptions: 220 },
    { month: 'Dec', revenue: 94, subscriptions: 250 },
  ];

  return (
    <div className="glassmorphic rounded-2xl p-6 mb-8">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg flex items-center justify-center">
            <TrendingUp className="h-5 w-5 text-primary" strokeWidth={1.5} />
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-900">Revenue Analytics</h3>
            <p className="text-gray-600 text-sm">Subscription growth over time</p>
          </div>
        </div>
        
        <div className="flex bg-gray-100 rounded-lg p-1">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                activeTab === tab
                  ? 'bg-white text-primary shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>
      
      <div className="relative h-80">
        <svg className="w-full h-full" viewBox="0 0 800 300">
          {/* Grid lines */}
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <line
              key={i}
              x1="60"
              y1={50 + i * 40}
              x2="750"
              y2={50 + i * 40}
              stroke="#f3f4f6"
              strokeWidth="1"
            />
          ))}
          
          {/* Revenue line */}
          <polyline
            fill="none"
            stroke="#1639a5"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            points={chartData.map((point, index) => 
              `${60 + (index * 57)},${250 - (point.revenue * 2)}`
            ).join(' ')}
            className="animate-pulse"
          />
          
          {/* Data points */}
          {chartData.map((point, index) => (
            <circle
              key={index}
              cx={60 + (index * 57)}
              cy={250 - (point.revenue * 2)}
              r="4"
              fill="#1639a5"
              className="hover:r-6 transition-all duration-200 cursor-pointer"
            />
          ))}
          
          {/* X-axis labels */}
          {chartData.map((point, index) => (
            <text
              key={index}
              x={60 + (index * 57)}
              y="280"
              textAnchor="middle"
              className="text-xs fill-gray-600"
            >
              {point.month}
            </text>
          ))}
        </svg>
      </div>
      
      <div className="flex items-center justify-center space-x-8 mt-4">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-primary rounded-full"></div>
          <span className="text-sm text-gray-600">Revenue (₹L)</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-primary/50 rounded-full"></div>
          <span className="text-sm text-gray-600">Subscriptions</span>
        </div>
      </div>
    </div>
  );
};

export default RevenueChart;