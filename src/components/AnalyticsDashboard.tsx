import React from 'react';
import RevenueChart from './Dashboard/RevenueChart';
import AIInsights from './Dashboard/AIInsights';

const AnalyticsDashboard: React.FC = () => (
  <div className="min-h-[60vh] flex flex-col items-center justify-center px-4 py-8">
    <div className="w-full max-w-3xl mb-8">
      <RevenueChart />
    </div>
    <div className="w-full max-w-3xl">
      <AIInsights />
    </div>
  </div>
);

export default AnalyticsDashboard;
