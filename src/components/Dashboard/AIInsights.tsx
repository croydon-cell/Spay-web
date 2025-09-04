import React from 'react';
import { Brain, TrendingUp, AlertTriangle, Users } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';

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

  // Mock chart data for each insight
  const churnData = [
    { name: 'Jan', churn: 8 },
    { name: 'Feb', churn: 10 },
    { name: 'Mar', churn: 11 },
    { name: 'Apr', churn: 12 },
    { name: 'May', churn: 12 },
    { name: 'Jun', churn: 13 },
  ];
  const retryData = [
    { name: 'Mon', rate: 91 },
    { name: 'Tue', rate: 92 },
    { name: 'Wed', rate: 93 },
    { name: 'Thu', rate: 94 },
    { name: 'Fri', rate: 95 },
    { name: 'Sat', rate: 96 },
    { name: 'Sun', rate: 97 },
  ];
  const growthData = [
    { segment: 'EdTech', growth: 25 },
    { segment: 'SaaS', growth: 12 },
    { segment: 'Retail', growth: 8 },
  ];

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
      <div className="space-y-8">
        {/* Churn Risk Alert with chart */}
        <div className={`flex flex-col md:flex-row items-center border-l-4 p-4 rounded-xl shadow-sm ${getPriorityColor('high')}`}>
          <div className="mr-4 mb-4 md:mb-0">
            <AlertTriangle className="h-7 w-7 text-primary" />
          </div>
          <div className="flex-1 w-full">
            <div className="flex items-center mb-1">
              <span className={`w-2 h-2 rounded-full mr-2 ${getPriorityDot('high')}`}></span>
              <span className="font-semibold text-gray-900">Churn Risk Alert</span>
            </div>
            <div className="text-gray-700 mb-1">12% of premium users show churn indicators</div>
            <div className="text-xs text-gray-500 mb-2">Review retention strategy</div>
            <ResponsiveContainer width="100%" height={120}>
              <LineChart data={churnData} margin={{ left: -20, right: 10, top: 10, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" fontSize={12} />
                <YAxis fontSize={12} />
                <Tooltip />
                <Line type="monotone" dataKey="churn" stroke="#ef4444" strokeWidth={2} dot={{ r: 3 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
        {/* Retry Optimization with chart */}
        <div className={`flex flex-col md:flex-row items-center border-l-4 p-4 rounded-xl shadow-sm ${getPriorityColor('medium')}`}>
          <div className="mr-4 mb-4 md:mb-0">
            <TrendingUp className="h-7 w-7 text-primary" />
          </div>
          <div className="flex-1 w-full">
            <div className="flex items-center mb-1">
              <span className={`w-2 h-2 rounded-full mr-2 ${getPriorityDot('medium')}`}></span>
              <span className="font-semibold text-gray-900">Retry Optimization</span>
            </div>
            <div className="text-gray-700 mb-1">Success rate improved by 3.2% this week</div>
            <div className="text-xs text-gray-500 mb-2">Apply to all failed payments</div>
            <ResponsiveContainer width="100%" height={120}>
              <LineChart data={retryData} margin={{ left: -20, right: 10, top: 10, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" fontSize={12} />
                <YAxis fontSize={12} />
                <Tooltip />
                <Line type="monotone" dataKey="rate" stroke="#f59e42" strokeWidth={2} dot={{ r: 3 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
        {/* Growth Opportunity with chart */}
        <div className={`flex flex-col md:flex-row items-center border-l-4 p-4 rounded-xl shadow-sm ${getPriorityColor('low')}`}>
          <div className="mr-4 mb-4 md:mb-0">
            <Users className="h-7 w-7 text-primary" />
          </div>
          <div className="flex-1 w-full">
            <div className="flex items-center mb-1">
              <span className={`w-2 h-2 rounded-full mr-2 ${getPriorityDot('low')}`}></span>
              <span className="font-semibold text-gray-900">Growth Opportunity</span>
            </div>
            <div className="text-gray-700 mb-1">EdTech segment showing 25% growth</div>
            <div className="text-xs text-gray-500 mb-2">Expand marketing focus</div>
            <ResponsiveContainer width="100%" height={120}>
              <BarChart data={growthData} margin={{ left: -20, right: 10, top: 10, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="segment" fontSize={12} />
                <YAxis fontSize={12} />
                <Tooltip />
                <Bar dataKey="growth" fill="#22c55e" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
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