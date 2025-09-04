import React, { useEffect, useState } from 'react';
import { apiGet } from '../api';

const TransactionsDashboard: React.FC<{ token?: string }> = ({ token }) => {
  const [transactions, setTransactions] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    setLoading(true);
    apiGet('/transactions')
      .then(setTransactions)
      .catch(() => setError('Failed to fetch transactions'))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-gray-100">
      <div className="w-full max-w-3xl bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
        <div className="flex items-center mb-6">
          <div className="bg-blue-600 text-white rounded-full p-3 mr-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h2l1 2h13l1-2h2M5 12v6a2 2 0 002 2h10a2 2 0 002-2v-6" /></svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-800">Transactions</h2>
        </div>
        {loading && <div className="text-gray-500 mb-4">Loading...</div>}
        {error && <div className="text-red-500 mb-4">{error}</div>}
        <div className="overflow-x-auto">
          <table className="w-full text-left border border-gray-200 rounded-lg overflow-hidden shadow-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-2 font-semibold">ID</th>
                <th className="px-4 py-2 font-semibold">Amount</th>
                <th className="px-4 py-2 font-semibold">Status</th>
                <th className="px-4 py-2 font-semibold">Date</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((t, i) => (
                <tr key={i} className="border-t border-gray-100 hover:bg-gray-50 transition">
                  <td className="px-4 py-2">{t.id}</td>
                  <td className="px-4 py-2">₹{t.amount}</td>
                  <td className={`px-4 py-2 font-semibold ${t.status === 'success' ? 'text-green-600' : t.status === 'failed' ? 'text-red-500' : 'text-gray-700'}`}>{t.status}</td>
                  <td className="px-4 py-2">{t.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TransactionsDashboard;
