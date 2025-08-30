import React, { useState } from 'react';
import { RotateCcw } from 'lucide-react';

interface AutopayConsentProps {
  onConsentChange: (consent: boolean) => void;
}

const AutopayConsent: React.FC<AutopayConsentProps> = ({ onConsentChange }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = (checked: boolean) => {
    setIsChecked(checked);
    onConsentChange(checked);
  };

  return (
    <div className="glassmorphic rounded-2xl p-6 mb-6">
      <div className="flex items-start space-x-3">
        <div className="flex items-center h-5">
          <input
            type="checkbox"
            checked={isChecked}
            onChange={(e) => handleChange(e.target.checked)}
            className="w-4 h-4 text-primary bg-gray-100 border-gray-300 rounded focus:ring-primary focus:ring-2"
          />
        </div>
        <div className="flex-1">
          <div className="flex items-center space-x-2 mb-2">
            <RotateCcw className="h-5 w-5 text-primary" strokeWidth={1.5} />
            <span className="font-medium text-gray-900">Autopay Authorization</span>
          </div>
          <p className="text-sm text-gray-600 leading-relaxed">
            I authorize recurring auto-debit via UPI Autopay for this subscription. 
            You can cancel anytime from your account settings or UPI app.
          </p>
          <div className="mt-2 text-xs text-gray-500">
            * Required for subscription-based payments
          </div>
        </div>
      </div>
    </div>
  );
};

export default AutopayConsent;