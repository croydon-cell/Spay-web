import React, { useState, useEffect } from 'react';

interface FraudResult {
  amount: number;
  method: string;
  hour: number;
  is_fraud: boolean;
}

interface ChurnResult {
  merchant_name: string;
  tenure_days: number;
  avg_amount: number;
  failure_rate: number;
  churn_probability: number;
}

interface RetryResult {
  scenario: string;
  failed_hour: number;
  attempts: number;
  method: string;
  retry_window: string;
  success_score: number;
}

const AIAnalyticsDashboard: React.FC = () => {
  const [fraudResults, setFraudResults] = useState<FraudResult[]>([]);
  const [churnResults, setChurnResults] = useState<ChurnResult[]>([]);
  const [retryResults, setRetryResults] = useState<RetryResult[]>([]);
  const [loading, setLoading] = useState(false);

  const runFraudTests = async () => {
    setLoading(true);
    const results: FraudResult[] = [];
    
    const testCases = [
      { amount_paise: 50000, method: "UPI", tx_hour: 14 },
      { amount_paise: 25000, method: "CARD", tx_hour: 10 },
      { amount_paise: 500000, method: "UPI", tx_hour: 3 },
      { amount_paise: 1000000, method: "CARD", tx_hour: 2 },
      { amount_paise: 750000, method: "CBDC", tx_hour: 23 },
      { amount_paise: 100000, method: "UPI", tx_hour: 15 },
      { amount_paise: 300000, method: "CARD", tx_hour: 1 },
    ];

    for (const testCase of testCases) {
      try {
        const response = await fetch('http://localhost:8000/api/v1/ai/fraud', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(testCase)
        });
        
        if (response.ok) {
          const result = await response.json();
          results.push({
            amount: testCase.amount_paise / 100,
            method: testCase.method,
            hour: testCase.tx_hour,
            is_fraud: result.is_fraud
          });
        }
      } catch (error) {
        console.error('Fraud test error:', error);
      }
    }
    
    setFraudResults(results);
    setLoading(false);
  };

  const runChurnTests = async () => {
    setLoading(true);
    const results: ChurnResult[] = [];
    
    const merchants = [
      { name: "CableTV Pro", tenure_days: 365, avg_tx_value_paise: 35000, failed_tx_ratio: 0.05 },
      { name: "QuickISP", tenure_days: 180, avg_tx_value_paise: 150000, failed_tx_ratio: 0.08 },
      { name: "FitGym", tenure_days: 90, avg_tx_value_paise: 200000, failed_tx_ratio: 0.12 },
      { name: "NewStartup", tenure_days: 30, avg_tx_value_paise: 50000, failed_tx_ratio: 0.25 },
      { name: "OldReliable", tenure_days: 720, avg_tx_value_paise: 80000, failed_tx_ratio: 0.03 },
    ];

    for (const merchant of merchants) {
      try {
        const response = await fetch('http://localhost:8000/api/v1/ai/churn', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            merchant_tenure_days: merchant.tenure_days,
            avg_tx_value_paise: merchant.avg_tx_value_paise,
            failed_tx_ratio: merchant.failed_tx_ratio
          })
        });
        
        if (response.ok) {
          const result = await response.json();
          results.push({
            merchant_name: merchant.name,
            tenure_days: merchant.tenure_days,
            avg_amount: merchant.avg_tx_value_paise / 100,
            failure_rate: merchant.failed_tx_ratio,
            churn_probability: result.churn_probability
          });
        }
      } catch (error) {
        console.error('Churn test error:', error);
      }
    }
    
    setChurnResults(results);
    setLoading(false);
  };

  const runRetryTests = async () => {
    setLoading(true);
    const results: RetryResult[] = [];
    
    const scenarios = [
      { desc: "Early morning failure", hour: 3, attempts: 1, method: "UPI" },
      { desc: "Late night failure", hour: 23, attempts: 2, method: "CARD" },
      { desc: "Business hours failure", hour: 14, attempts: 3, method: "UPI" },
      { desc: "Multiple failures", hour: 10, attempts: 5, method: "CARD" },
      { desc: "Excessive failures", hour: 16, attempts: 8, method: "UPI" },
      { desc: "CBDC failure", hour: 12, attempts: 2, method: "CBDC" },
    ];

    for (const scenario of scenarios) {
      try {
        const response = await fetch('http://localhost:8000/api/v1/ai/retry', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            last_failed_hour: scenario.hour,
            failed_attempts: scenario.attempts,
            payment_method: scenario.method
          })
        });
        
        if (response.ok) {
          const result = await response.json();
          results.push({
            scenario: scenario.desc,
            failed_hour: scenario.hour,
            attempts: scenario.attempts,
            method: scenario.method,
            retry_window: result.retry_window,
            success_score: result.success_score
          });
        }
      } catch (error) {
        console.error('Retry test error:', error);
      }
    }
    
    setRetryResults(results);
    setLoading(false);
  };

  const runAllTests = async () => {
    await runFraudTests();
    await runChurnTests();
    await runRetryTests();
  };

  return (
    <div className="max-w-7xl mx-auto p-6 space-y-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-4">🤖 AI Analytics Dashboard</h1>
        <button
          onClick={runAllTests}
          disabled={loading}
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 font-semibold"
        >
          {loading ? "Running Tests..." : "🚀 Run All AI Tests"}
        </button>
      </div>

      {/* Fraud Detection Results */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-red-600">🔍 Fraud Detection Results</h2>
          <button
            onClick={runFraudTests}
            disabled={loading}
            className="px-4 py-2 bg-red-100 text-red-600 rounded hover:bg-red-200 disabled:opacity-50"
          >
            Test Fraud Detection
          </button>
        </div>
        
        {fraudResults.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-3">Amount</th>
                  <th className="text-left p-3">Method</th>
                  <th className="text-left p-3">Hour</th>
                  <th className="text-left p-3">Result</th>
                </tr>
              </thead>
              <tbody>
                {fraudResults.map((result, index) => (
                  <tr key={index} className="border-b hover:bg-gray-50">
                    <td className="p-3">₹{result.amount.toFixed(0)}</td>
                    <td className="p-3">{result.method}</td>
                    <td className="p-3">{result.hour}:00</td>
                    <td className="p-3">
                      <span className={`px-2 py-1 rounded text-sm font-semibold ${
                        result.is_fraud 
                          ? 'bg-red-100 text-red-800' 
                          : 'bg-green-100 text-green-800'
                      }`}>
                        {result.is_fraud ? '🚨 FRAUD' : '✅ SAFE'}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p className="text-gray-500 text-center py-8">No fraud detection results yet. Click "Test Fraud Detection" to run tests.</p>
        )}
      </div>

      {/* Churn Prediction Results */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-orange-600">📊 Churn Prediction Results</h2>
          <button
            onClick={runChurnTests}
            disabled={loading}
            className="px-4 py-2 bg-orange-100 text-orange-600 rounded hover:bg-orange-200 disabled:opacity-50"
          >
            Test Churn Prediction
          </button>
        </div>
        
        {churnResults.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {churnResults.map((result, index) => (
              <div key={index} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-lg mb-2">{result.merchant_name}</h3>
                <div className="space-y-1 text-sm">
                  <p><span className="font-medium">Tenure:</span> {result.tenure_days} days</p>
                  <p><span className="font-medium">Avg Amount:</span> ₹{result.avg_amount.toFixed(0)}</p>
                  <p><span className="font-medium">Failure Rate:</span> {(result.failure_rate * 100).toFixed(1)}%</p>
                </div>
                <div className="mt-3">
                  <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                    result.churn_probability > 0.7 
                      ? 'bg-red-100 text-red-800' 
                      : result.churn_probability > 0.3
                      ? 'bg-yellow-100 text-yellow-800'
                      : 'bg-green-100 text-green-800'
                  }`}>
                    {result.churn_probability > 0.7 ? '🔴 HIGH' : 
                     result.churn_probability > 0.3 ? '🟡 MEDIUM' : '🟢 LOW'} 
                    ({result.churn_probability.toFixed(2)})
                  </span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-500 text-center py-8">No churn prediction results yet. Click "Test Churn Prediction" to run tests.</p>
        )}
      </div>

      {/* Retry Optimization Results */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-blue-600">🔄 Retry Optimization Results</h2>
          <button
            onClick={runRetryTests}
            disabled={loading}
            className="px-4 py-2 bg-blue-100 text-blue-600 rounded hover:bg-blue-200 disabled:opacity-50"
          >
            Test Retry Optimization
          </button>
        </div>
        
        {retryResults.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-3">Scenario</th>
                  <th className="text-left p-3">Failed At</th>
                  <th className="text-left p-3">Attempts</th>
                  <th className="text-left p-3">Method</th>
                  <th className="text-left p-3">Recommendation</th>
                  <th className="text-left p-3">Success Score</th>
                </tr>
              </thead>
              <tbody>
                {retryResults.map((result, index) => (
                  <tr key={index} className="border-b hover:bg-gray-50">
                    <td className="p-3">{result.scenario}</td>
                    <td className="p-3">{result.failed_hour}:00</td>
                    <td className="p-3">{result.attempts}</td>
                    <td className="p-3">{result.method}</td>
                    <td className="p-3">
                      <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-sm font-semibold">
                        {result.retry_window}
                      </span>
                    </td>
                    <td className="p-3">
                      <span className={`px-2 py-1 rounded text-sm font-semibold ${
                        result.success_score > 0.7 
                          ? 'bg-green-100 text-green-800' 
                          : result.success_score > 0.4
                          ? 'bg-yellow-100 text-yellow-800'
                          : 'bg-red-100 text-red-800'
                      }`}>
                        {result.success_score.toFixed(1)}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p className="text-gray-500 text-center py-8">No retry optimization results yet. Click "Test Retry Optimization" to run tests.</p>
        )}
      </div>

      {/* Summary Stats */}
      {(fraudResults.length > 0 || churnResults.length > 0 || retryResults.length > 0) && (
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-6">
          <h2 className="text-xl font-bold mb-4">📈 AI Performance Summary</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-red-600">{fraudResults.length}</div>
              <div className="text-sm text-gray-600">Fraud Tests Run</div>
              <div className="text-xs text-gray-500">
                {fraudResults.filter(r => !r.is_fraud).length} Safe, {fraudResults.filter(r => r.is_fraud).length} Fraud
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-orange-600">{churnResults.length}</div>
              <div className="text-sm text-gray-600">Merchants Analyzed</div>
              <div className="text-xs text-gray-500">
                Avg Risk: {churnResults.length > 0 ? (churnResults.reduce((sum, r) => sum + r.churn_probability, 0) / churnResults.length).toFixed(2) : '0.00'}
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">{retryResults.length}</div>
              <div className="text-sm text-gray-600">Retry Scenarios</div>
              <div className="text-xs text-gray-500">
                Avg Score: {retryResults.length > 0 ? (retryResults.reduce((sum, r) => sum + r.success_score, 0) / retryResults.length).toFixed(1) : '0.0'}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AIAnalyticsDashboard;