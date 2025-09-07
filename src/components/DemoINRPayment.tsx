import React, { useState } from "react";

const DemoINRPayment: React.FC = () => {
  const [result, setResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const runDemo = async () => {
    setLoading(true);
    setError(null);
    setResult(null);
    try {
      const res = await fetch(
        "http://localhost:8000/api/v1/demo-inr-payment",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
        }
      );
      if (!res.ok) throw new Error("Failed to run demo payment");
      const data = await res.json();
      setResult(data);
    } catch (err: any) {
      setError(err.message || "Unknown error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto my-8 p-6 bg-white rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-6 text-center">🇮🇳 Demo INR Payment Gateway</h2>
      <div className="text-center mb-6">
        <button
          className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition font-semibold"
          onClick={runDemo}
          disabled={loading}
        >
          {loading ? "Processing Payment..." : "💰 Run Demo ₹500 Payment"}
        </button>
      </div>
      
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          ❌ Error: {error}
        </div>
      )}
      
      {result && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <div className="bg-blue-50 p-4 rounded-lg border">
            <h3 className="font-bold text-lg mb-3 text-blue-800">📄 Invoice</h3>
            <div className="space-y-2">
              <p><span className="font-semibold">Amount:</span> ₹{result.invoice?.amount}</p>
              <p><span className="font-semibold">Status:</span> <span className="text-green-600 font-semibold">{result.invoice?.status}</span></p>
              <p><span className="font-semibold">Description:</span> {result.invoice?.description}</p>
              <p><span className="font-semibold">Invoice ID:</span> {result.invoice?.invoice_id}</p>
            </div>
          </div>
          
          <div className="bg-green-50 p-4 rounded-lg border">
            <h3 className="font-bold text-lg mb-3 text-green-800">💳 Payment</h3>
            <div className="space-y-2">
              <p><span className="font-semibold">Status:</span> <span className="text-green-600 font-semibold">SUCCESS</span></p>
              <p><span className="font-semibold">Method:</span> Mock Bank Processing</p>
              <p><span className="font-semibold">Bank:</span> DemoBank</p>
              <p className="text-sm text-gray-600">{typeof result.payment === 'string' ? result.payment : JSON.stringify(result.payment)}</p>
            </div>
          </div>
          
          <div className="bg-purple-50 p-4 rounded-lg border">
            <h3 className="font-bold text-lg mb-3 text-purple-800">🏦 Settlement</h3>
            <div className="space-y-2">
              <p><span className="font-semibold">Amount:</span> ₹{result.settlement?.amount || result.invoice?.amount}</p>
              <p><span className="font-semibold">Status:</span> <span className="text-green-600 font-semibold">SETTLED</span></p>
              <p><span className="font-semibold">Merchant:</span> Credited to Account</p>
              <p className="text-sm text-gray-600">Money transferred to merchant account</p>
            </div>
          </div>
          
          <div className="bg-orange-50 p-4 rounded-lg border">
            <h3 className="font-bold text-lg mb-3 text-orange-800">↩️ Refund</h3>
            <div className="space-y-2">
              <p><span className="font-semibold">Amount:</span> ₹{result.refund?.amount}</p>
              <p><span className="font-semibold">Status:</span> <span className="text-green-600 font-semibold">{result.refund?.status}</span></p>
              <p><span className="font-semibold">Refund ID:</span> {result.refund?.refund_id}</p>
              <p className="text-sm text-gray-600">Partial refund processed successfully</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DemoINRPayment;
