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
        "https://subscribepay-prototype.onrender.com/api/v1/demo-inr-payment",
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
    <div className="max-w-xl mx-auto my-8 p-6 bg-white rounded-lg shadow">
      <h2 className="text-xl font-bold mb-4">Demo INR Payment Flow</h2>
      <button
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        onClick={runDemo}
        disabled={loading}
      >
        {loading ? "Running..." : "Run Demo INR Payment"}
      </button>
      {error && <div className="text-red-600 mt-4">{error}</div>}
      {result && (
        <div className="mt-6 space-y-4">
          <div>
            <h3 className="font-semibold">Invoice</h3>
            <pre className="bg-gray-100 p-2 rounded text-xs overflow-x-auto">{JSON.stringify(result.invoice, null, 2)}</pre>
          </div>
          <div>
            <h3 className="font-semibold">Payment</h3>
            <pre className="bg-gray-100 p-2 rounded text-xs overflow-x-auto">{JSON.stringify(result.payment, null, 2)}</pre>
          </div>
          <div>
            <h3 className="font-semibold">Settlement</h3>
            <pre className="bg-gray-100 p-2 rounded text-xs overflow-x-auto">{JSON.stringify(result.settlement, null, 2)}</pre>
          </div>
          <div>
            <h3 className="font-semibold">Refund</h3>
            <pre className="bg-gray-100 p-2 rounded text-xs overflow-x-auto">{JSON.stringify(result.refund, null, 2)}</pre>
          </div>
        </div>
      )}
    </div>
  );
};

export default DemoINRPayment;
