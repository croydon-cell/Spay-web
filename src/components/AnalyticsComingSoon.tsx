import React, { useState, useEffect } from 'react';

interface AIMetrics {
  fraudDetected: number;
  fraudPrevented: number;
  churnRisk: { name: string; risk: number; }[];
  retrySuccess: number;
}

const AnalyticsDashboard: React.FC = () => {
  const [aiMetrics, setAiMetrics] = useState<AIMetrics | null>(null);
  const [loading, setLoading] = useState(false);

  const loadAIMetrics = async () => {
    setLoading(true);
    try {
      // Simulate AI data loading
      const fraudTests = await Promise.all([
        fetch('http://localhost:8000/api/v1/ai/fraud', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ amount_paise: 500000, method: 'UPI', tx_hour: 3 })
        }),
        fetch('http://localhost:8000/api/v1/ai/fraud', {
          method: 'POST', 
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ amount_paise: 50000, method: 'CARD', tx_hour: 14 })
        })
      ]);

      const churnTests = await Promise.all([
        fetch('http://localhost:8000/api/v1/ai/churn', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ merchant_tenure_days: 30, avg_tx_value_paise: 15000, failed_tx_ratio: 0.35 })
        }),
        fetch('http://localhost:8000/api/v1/ai/churn', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ merchant_tenure_days: 365, avg_tx_value_paise: 75000, failed_tx_ratio: 0.05 })
        })
      ]);

      const retryTest = await fetch('http://localhost:8000/api/v1/ai/retry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ last_failed_hour: 2, failed_attempts: 3, payment_method: 'UPI' })
      });

      const fraudResults = await Promise.all(fraudTests.map(r => r.json()));
      const churnResults = await Promise.all(churnTests.map(r => r.json()));
      const retryResult = await retryTest.json();

      setAiMetrics({
        fraudDetected: fraudResults.filter(r => r.is_fraud).length,
        fraudPrevented: fraudResults.filter(r => !r.is_fraud).length,
        churnRisk: [
          { name: 'NewStartup', risk: churnResults[0]?.churn_probability || 0.1 },
          { name: 'CableTV Pro', risk: churnResults[1]?.churn_probability || 0.1 }
        ],
        retrySuccess: retryResult.success_score || 0.8
      });
    } catch (error) {
      console.error('Error loading AI metrics:', error);
    }
    setLoading(false);
  };

  useEffect(() => {
    loadAIMetrics();
  }, []);

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Analytics Dashboard</h1>
          <p className="text-gray-600">AI-powered insights and performance metrics</p>
        </div>
        <button
          onClick={loadAIMetrics}
          disabled={loading}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50"
        >
          {loading ? 'Loading...' : 'Refresh Data'}
        </button>
      </div>

      {/* AI Metrics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-lg shadow border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Fraud Detection</p>
              <p className="text-2xl font-bold text-red-600">{aiMetrics?.fraudDetected || 0}</p>
              <p className="text-xs text-gray-500">Threats blocked</p>
            </div>
            <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
              <span className="text-red-600 text-xl">🛡️</span>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Safe Transactions</p>
              <p className="text-2xl font-bold text-green-600">{aiMetrics?.fraudPrevented || 0}</p>
              <p className="text-xs text-gray-500">Verified safe</p>
            </div>
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
              <span className="text-green-600 text-xl">✅</span>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Retry Success</p>
              <p className="text-2xl font-bold text-blue-600">{((aiMetrics?.retrySuccess || 0) * 100).toFixed(0)}%</p>
              <p className="text-xs text-gray-500">Optimization rate</p>
            </div>
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <span className="text-blue-600 text-xl">🔄</span>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">AI Models</p>
              <p className="text-2xl font-bold text-purple-600">3</p>
              <p className="text-xs text-gray-500">Active models</p>
            </div>
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
              <span className="text-purple-600 text-xl">🤖</span>
            </div>
          </div>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Fraud Detection Chart */}
        <div className="bg-white p-6 rounded-lg shadow border">
          <h3 className="text-lg font-semibold mb-4">Fraud Detection Performance</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Safe Transactions</span>
              <div className="flex items-center space-x-2">
                <div className="w-32 bg-gray-200 rounded-full h-2">
                  <div className="bg-green-500 h-2 rounded-full" style={{width: '85%'}}></div>
                </div>
                <span className="text-sm font-medium">85%</span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Fraud Detected</span>
              <div className="flex items-center space-x-2">
                <div className="w-32 bg-gray-200 rounded-full h-2">
                  <div className="bg-red-500 h-2 rounded-full" style={{width: '15%'}}></div>
                </div>
                <span className="text-sm font-medium">15%</span>
              </div>
            </div>
          </div>
        </div>

        {/* Churn Risk Chart */}
        <div className="bg-white p-6 rounded-lg shadow border">
          <h3 className="text-lg font-semibold mb-4">Merchant Churn Risk</h3>
          <div className="space-y-4">
            {aiMetrics?.churnRisk.map((merchant, index) => (
              <div key={index} className="flex items-center justify-between">
                <span className="text-sm text-gray-600">{merchant.name}</span>
                <div className="flex items-center space-x-2">
                  <div className="w-32 bg-gray-200 rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full ${
                        merchant.risk > 0.7 ? 'bg-red-500' : 
                        merchant.risk > 0.3 ? 'bg-yellow-500' : 'bg-green-500'
                      }`}
                      style={{width: `${merchant.risk * 100}%`}}
                    ></div>
                  </div>
                  <span className="text-sm font-medium">{(merchant.risk * 100).toFixed(0)}%</span>
                </div>
              </div>
            )) || []}
          </div>
        </div>
      </div>

      {/* Payment Methods Performance */}
      <div className="bg-white p-6 rounded-lg shadow border">
        <h3 className="text-lg font-semibold mb-4">Payment Methods Performance</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="w-20 h-20 mx-auto mb-3 bg-blue-100 rounded-full flex items-center justify-center">
              <span className="text-2xl">📱</span>
            </div>
            <h4 className="font-semibold">UPI</h4>
            <p className="text-2xl font-bold text-blue-600">92%</p>
            <p className="text-sm text-gray-500">Success Rate</p>
          </div>
          <div className="text-center">
            <div className="w-20 h-20 mx-auto mb-3 bg-green-100 rounded-full flex items-center justify-center">
              <span className="text-2xl">💳</span>
            </div>
            <h4 className="font-semibold">Cards</h4>
            <p className="text-2xl font-bold text-green-600">88%</p>
            <p className="text-sm text-gray-500">Success Rate</p>
          </div>
          <div className="text-center">
            <div className="w-20 h-20 mx-auto mb-3 bg-purple-100 rounded-full flex items-center justify-center">
              <span className="text-2xl">🪙</span>
            </div>
            <h4 className="font-semibold">CBDC</h4>
            <p className="text-2xl font-bold text-purple-600">95%</p>
            <p className="text-sm text-gray-500">Success Rate</p>
          </div>
        </div>
      </div>

      {/* AI Insights */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg border">
        <h3 className="text-lg font-semibold mb-4">🤖 AI Insights</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-lg">
            <h4 className="font-medium text-red-600 mb-2">🛡️ Fraud Prevention</h4>
            <p className="text-sm text-gray-600">AI detected suspicious patterns in late-night high-value transactions. Recommend enhanced verification for amounts {'>'}₹5000 after 11 PM.</p>
          </div>
          <div className="bg-white p-4 rounded-lg">
            <h4 className="font-medium text-orange-600 mb-2">📊 Churn Prediction</h4>
            <p className="text-sm text-gray-600">New merchants with {'>'}20% failure rates show 85% churn probability. Suggest proactive support and payment optimization.</p>
          </div>
          <div className="bg-white p-4 rounded-lg">
            <h4 className="font-medium text-blue-600 mb-2">🔄 Retry Optimization</h4>
            <p className="text-sm text-gray-600">Morning retry window (9-11 AM) shows 80% success rate. Recommend scheduling failed payment retries during this period.</p>
          </div>
          <div className="bg-white p-4 rounded-lg">
            <h4 className="font-medium text-green-600 mb-2">💡 Recommendations</h4>
            <p className="text-sm text-gray-600">CBDC payments show highest success rates. Consider promoting CBDC adoption for better conversion rates.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsDashboard;