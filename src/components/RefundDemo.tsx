import React, { useState } from 'react';
import { apiPost } from '../api';

const RefundDemo: React.FC<{ token?: string }> = ({ token }) => {
  const [transactionId, setTransactionId] = useState('');
  const [amount, setAmount] = useState('');
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleRefund = async () => {
    setLoading(true);
    setStatus('');
    setSuccess(false);
    try {
      const res = await apiPost('/refunds', { transaction_id: transactionId, amount: Number(amount) });
      setStatus(`Refund: ${res.status || 'Success'}`);
      setSuccess(res.status === 'success' || !res.status);
    } catch (err) {
      setStatus('Refund failed');
    }
    setLoading(false);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-yellow-50 to-gray-100">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
        <div className="flex flex-col items-center mb-6">
          <div className="bg-yellow-500 text-white rounded-full p-3 mb-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9 9 4.03 9 9z" /></svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-800">Refund Transaction</h2>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-1">Transaction ID</label>
          <input type="text" placeholder="Transaction ID" value={transactionId} onChange={e => setTransactionId(e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:outline-none transition" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-1">Amount (INR)</label>
          <input type="number" placeholder="Amount" value={amount} onChange={e => setAmount(e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:outline-none transition" />
        </div>
        <button onClick={handleRefund} className="w-full bg-yellow-500 hover:bg-yellow-600 text-white py-2.5 rounded-lg font-semibold shadow-md transition-all duration-150 disabled:opacity-60" disabled={loading}>{loading ? 'Processing...' : 'Refund'}</button>
        {status && (
          <div className={`mt-4 text-center text-lg flex items-center justify-center ${success ? 'text-yellow-600' : 'text-red-500'}`}>
            {success ? (
              <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
            ) : (
              <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
            )}
            {status}
          </div>
        )}
      </div>
    </div>
  );
};

export default RefundDemo;
