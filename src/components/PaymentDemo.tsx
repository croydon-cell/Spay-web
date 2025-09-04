import React, { useState } from 'react';
import { apiPost } from '../api';

const PaymentDemo: React.FC<{ token?: string }> = ({ token }) => {
  const [amount, setAmount] = useState(500);
  const [customerId, setCustomerId] = useState('');
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handlePay = async () => {
    setLoading(true);
    setStatus('');
    setSuccess(false);
    try {
      const res = await apiPost('/payments', { amount, currency: 'INR', customer_id: customerId });
      setStatus(`Payment: ${res.status}`);
      setSuccess(res.status === 'success');
    } catch (err) {
      setStatus('Payment failed');
    }
    setLoading(false);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-green-50 to-gray-100">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
        <div className="flex flex-col items-center mb-6">
          <div className="bg-green-600 text-white rounded-full p-3 mb-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3zm0 0V4m0 7v7" /></svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-800">Demo Payment</h2>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-1">Amount (INR)</label>
          <input type="number" value={amount} onChange={e => setAmount(Number(e.target.value))} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none transition" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-1">Customer ID</label>
          <input type="text" placeholder="Customer ID" value={customerId} onChange={e => setCustomerId(e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none transition" />
        </div>
        <button onClick={handlePay} className="w-full bg-green-600 hover:bg-green-700 text-white py-2.5 rounded-lg font-semibold shadow-md transition-all duration-150 disabled:opacity-60" disabled={loading}>{loading ? 'Processing...' : 'Pay'}</button>
        {status && (
          <div className={`mt-4 text-center text-lg flex items-center justify-center ${success ? 'text-green-600' : 'text-red-500'}`}>
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

export default PaymentDemo;
