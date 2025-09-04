import React from 'react';

const CustomersPlaceholder: React.FC = () => (
  <div className="flex flex-col items-center justify-center min-h-[60vh]">
    <h1 className="text-3xl font-bold text-primary mb-4">Customers</h1>
    <p className="text-gray-500 mb-2">Manage your customers here. You’ll be able to view, add, and edit customer profiles soon.</p>
    <div className="w-full max-w-xl mt-6">
      <div className="bg-white rounded-xl shadow p-6 border border-gray-100 flex flex-col items-center">
        <svg className="w-16 h-16 text-primary mb-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87m9-6.13a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
        <span className="text-gray-400">No customers to display yet.</span>
      </div>
    </div>
  </div>
);

export default CustomersPlaceholder;
