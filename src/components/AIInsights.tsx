import React, { useEffect, useState } from 'react';
import { Brain, TrendingUp, Users, Target } from 'lucide-react';

const AIInsights: React.FC = () => {
  const [counters, setCounters] = useState({
    churnPrediction: 0,
    retrySuccess: 0,
    userSegmentation: 0,
    revenueOptimization: 0,
  });

  useEffect(() => {
    const targets = {
      churnPrediction: 94,
      retrySuccess: 98,
      userSegmentation: 87,
      revenueOptimization: 92,
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
          [key]: Math.floor(current)
        }));
      }, stepDuration);
      
      intervals.push(intervalId);
    });

    return () => intervals.forEach(clearInterval);
  }, []);

  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 via-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <Brain className="h-12 w-12 text-primary mr-4" strokeWidth={1.5} />
            <h2 className="text-4xl font-bold text-gray-900">
              AI-Powered Analytics for Smarter Subscriptions
            </h2>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Leverage machine learning insights to optimize your subscription business and maximize revenue
          </p>
        </div>

        <div className="glassmorphic rounded-3xl p-8 shadow-2xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <TrendingUp className="h-12 w-12 text-primary mx-auto mb-4" strokeWidth={1.5} />
              <div className="text-4xl font-bold text-gray-900 mb-2">
                {counters.churnPrediction}%
              </div>
              <h3 className="text-lg font-semibold text-gray-700 mb-2">Churn Prediction</h3>
              <p className="text-sm text-gray-600">Accuracy in predicting customer churn</p>
            </div>

            <div className="text-center">
              <Target className="h-12 w-12 text-primary mx-auto mb-4" strokeWidth={1.5} />
              <div className="text-4xl font-bold text-gray-900 mb-2">
                {counters.retrySuccess}%
              </div>
              <h3 className="text-lg font-semibold text-gray-700 mb-2">Retry Success</h3>
              <p className="text-sm text-gray-600">Smart retry optimization rate</p>
            </div>

            <div className="text-center">
              <Users className="h-12 w-12 text-primary mx-auto mb-4" strokeWidth={1.5} />
              <div className="text-4xl font-bold text-gray-900 mb-2">
                {counters.userSegmentation}%
              </div>
              <h3 className="text-lg font-semibold text-gray-700 mb-2">User Segmentation</h3>
              <p className="text-sm text-gray-600">Behavioral analysis accuracy</p>
            </div>

            <div className="text-center">
              <TrendingUp className="h-12 w-12 text-primary mx-auto mb-4" strokeWidth={1.5} />
              <div className="text-4xl font-bold text-gray-900 mb-2">
                {counters.revenueOptimization}%
              </div>
              <h3 className="text-lg font-semibold text-gray-700 mb-2">Revenue Optimization</h3>
              <p className="text-sm text-gray-600">Average revenue increase</p>
            </div>
          </div>

          <div className="mt-12 grid md:grid-cols-3 gap-6">
            <div className="bg-white/50 rounded-xl p-6">
              <h4 className="font-semibold text-gray-900 mb-2">Predictive Analytics</h4>
              <p className="text-sm text-gray-600">Forecast subscription trends and customer behavior</p>
            </div>
            <div className="bg-white/50 rounded-xl p-6">
              <h4 className="font-semibold text-gray-900 mb-2">Real-time Insights</h4>
              <p className="text-sm text-gray-600">Monitor performance metrics as they happen</p>
            </div>
            <div className="bg-white/50 rounded-xl p-6">
              <h4 className="font-semibold text-gray-900 mb-2">Automated Optimization</h4>
              <p className="text-sm text-gray-600">AI automatically adjusts strategies for better results</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIInsights;