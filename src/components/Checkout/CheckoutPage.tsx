import React, { useState } from 'react';
import CheckoutHeader from './CheckoutHeader';
import OrderSummary from './OrderSummary';
import UserDetails from './UserDetails';
import PaymentOptions from './PaymentOptions';
import AutopayConsent from './AutopayConsent';
import PaymentButton from './PaymentButton';
import SecurityBadges from './SecurityBadges';
import PaymentStatus from './PaymentStatus';

const CheckoutPage: React.FC = () => {
  const [paymentStatus, setPaymentStatus] = useState<'form' | 'processing' | 'success' | 'failed'>('form');
  const [userDetails, setUserDetails] = useState({ name: '', email: '', mobile: '' });
  const [paymentMethod, setPaymentMethod] = useState('upi');
  const [autopayConsent, setAutopayConsent] = useState(false);

  const orderData = {
    merchantName: 'Planet Marathi Premium',
    planName: 'Premium Monthly',
    price: 499,
    currency: '₹',
    billingCycle: 'month',
    nextBillingDate: '30 Sep 2025',
  };

  const isFormValid = (): boolean => {
    return Boolean(userDetails.name && 
                   userDetails.email && 
                   userDetails.mobile && 
                   autopayConsent);
  };

  const handlePayment = () => {
    setPaymentStatus('processing');
    
    // Simulate payment processing
    setTimeout(() => {
      const success = Math.random() > 0.3; // 70% success rate
      setPaymentStatus(success ? 'success' : 'failed');
    }, 3000);
  };

  const handleRetry = () => {
    setPaymentStatus('form');
  };

  const handleReturn = () => {
    // Redirect to merchant site
    console.log('Redirecting to merchant...');
  };

  if (paymentStatus !== 'form') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
        <CheckoutHeader merchantName={orderData.merchantName} />
        <div className="max-w-md mx-auto px-4 py-8">
          <PaymentStatus
            status={paymentStatus}
            amount={paymentStatus === 'success' ? orderData.price : undefined}
            currency={paymentStatus === 'success' ? orderData.currency : undefined}
            onRetry={handleRetry}
            onReturn={handleReturn}
          />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <CheckoutHeader merchantName={orderData.merchantName} />
      
      <div className="max-w-md mx-auto px-4 py-8">
        <OrderSummary
          planName={orderData.planName}
          price={orderData.price}
          currency={orderData.currency}
          billingCycle={orderData.billingCycle}
          nextBillingDate={orderData.nextBillingDate}
        />
        
        <UserDetails
          initialData={{ name: 'John Doe', email: 'john@example.com', mobile: '+91 98765 43210' }}
          onUpdate={setUserDetails}
        />
        
        <PaymentOptions onPaymentMethodChange={setPaymentMethod} />
        
        <AutopayConsent onConsentChange={setAutopayConsent} />
        
        <PaymentButton
          amount={orderData.price}
          currency={orderData.currency}
          isEnabled={isFormValid()}
          onPayment={handlePayment}
        />
        
        <SecurityBadges />
      </div>
    </div>
  );
};

export default CheckoutPage;