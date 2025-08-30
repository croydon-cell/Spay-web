import React from 'react';
import { Brain, TrendingUp, AlertTriangle, Users } from 'lucide-react';

const AIInsights: React.FC = () => {
  const insights = [
    {
      icon: AlertTriangle,
      title: 'Churn Risk Alert',
      description: '12% of premium users show churn indicators',
      action: 'Review retention strategy',
      priority: 'high',
    },
    {
      icon: TrendingUp,
      title: 'Retry Optimization',
      description: 'Success rate improved by 3.2% this week',
      action: 'Apply to all failed payments',
      priority: 'medium',
    },
    {
      icon: Users,
      title: 'Growth Opportunity',
      description: 'EdTech segment showing 25% growth',
      action: 'Expand marketing focus',
      priority: 'low',
    },
  ];

  const getPriorityColor = (priority: string) => {
    const colors = {
      high: 'border-red-200 bg-red-50',
      medium: 'border-yellow-200 bg-yellow-50',
      low: 'border-green-200 bg-green-50',
    };
    return colors[priority as keyof typeof colors];
  };

  const getPriorityDot = (priority: string) => {
    const colors = {
      high: 'bg-red-500',
      medium: 'bg-yellow-500',
      low: 'bg-green-500',
    };
    return colors[priority as keyof typeof colors];
  };

  return (
    <div className="glassmorphic rounded-2xl p-6">
      <div className="flex items-center space-x-3 mb-6">
        <div className="w-10 h-10 bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg flex items-center justify-center">
          <Brain className="h-5 w-5 text-primary" strokeWidth={1.5} />
        </div>
        <div>
          <h3 className="text-xl font-bold text-gray-900">AI-Powered Insights</h3>
          <p className="text-gray-600 text-sm">Smart recommendations for your business</p>
        </div>
      </div>
      
      <div className="space-y-4">
        {insights.map((insight, index) => (
          <div
            key={index}
            className={`border rounded-lg p-4 transition-all duration-300 hover:shadow-md ${getPriorityColor(insight.priority)}`}
          >
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center shadow-sm">
                <insight.icon className="h-4 w-4 text-gray-600" strokeWidth={1.5} />
              </div>
              
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-1">
                  <h4 className="font-semibold text-gray-900">{insight.title}</h4>
                  <div className={`w-2 h-2 rounded-full ${getPriorityDot(insight.priority)}`}></div>
                </div>
                <p className="text-sm text-gray-600 mb-2">{insight.description}</p>
                <button className="text-xs text-primary hover:text-primary-dark font-medium">
                  {insight.action} →
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-6 p-4 bg-gradient-to-r from-primary/5 to-primary/10 rounded-lg">
        <div className="flex items-center space-x-2">
          <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center">
            <Brain className="h-3 w-3 text-primary" strokeWidth={2} />
          </div>
          <span className="text-sm font-medium text-gray-900">
            AI Analysis Complete
          </span>
        </div>
        <p className="text-xs text-gray-600 mt-1">
          Next update in 2 hours • Based on 10,000+ data points
        </p>
      </div>
    </div>
  );
};

export default AIInsights;