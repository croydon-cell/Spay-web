import React, { useState } from 'react';
import { 
  User, 
  FileText, 
  CreditCard, 
  CheckCircle, 
  ArrowRight, 
  ArrowLeft,
  Upload,
  MapPin,
  Phone,
  Mail,
  Tv
} from 'lucide-react';
import Card from '../ui/Card';
import Button from '../ui/Button';
import Badge from '../ui/Badge';
import Input from '../ui/Input';
import StepCard from '../ui/StepCard';
import { mockQuery, mockRootProps } from '../../cableTVMockData';

const CustomerOnboarding: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    personalInfo: {
      name: '',
      email: '',
      phone: '',
      address: '',
      city: '',
      pincode: ''
    },
    selectedPlan: '',
    documents: {
      aadhaar: null,
      addressProof: null,
      photo: null
    },
    autopayConsent: false
  });

  const steps = [
    { id: 1, title: 'Personal Details', icon: User },
    { id: 2, title: 'Choose Plan', icon: Tv },
    { id: 3, title: 'Upload Documents', icon: FileText },
    { id: 4, title: 'Setup Autopay', icon: CreditCard }
  ];

  const handleNext = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrev = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handlePlanSelect = (planId: string) => {
    setFormData(prev => ({ ...prev, selectedPlan: planId }));
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      personalInfo: { ...prev.personalInfo, [field]: value }
    }));
  };

  const isStepValid = (step: number) => {
    switch (step) {
      case 1:
        return formData.personalInfo.name && formData.personalInfo.email && formData.personalInfo.phone;
      case 2:
        return formData.selectedPlan;
      case 3:
        return true; // Documents are optional for demo
      case 4:
        return formData.autopayConsent;
      default:
        return false;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <img 
              src={mockRootProps.operatorInfo.logo} 
              alt="CityVision Cable Network logo by Javier Esteban on Unsplash"
              className="h-12 w-12 rounded-xl shadow-md"
              width={48}
              height={48}
            />
            <h1 className="heading-2 text-gray-900">{mockRootProps.operatorInfo.name}</h1>
          </div>
          <p className="body-large text-gray-600">Welcome! Let's set up your cable TV connection with autopay</p>
        </div>

        {/* Progress Steps */}
        <div className="flex items-center justify-center mb-8">
          {steps.map((step, index) => (
            <div key={step.id} className="flex items-center">
              <div className={`flex items-center justify-center w-10 h-10 rounded-full border-2 transition-all duration-200 ${
                currentStep >= step.id 
                  ? 'bg-blue-600 border-blue-600 text-white' 
                  : 'border-gray-300 text-gray-400'
              }`}>
                {currentStep > step.id ? (
                  <CheckCircle className="h-5 w-5" />
                ) : (
                  <step.icon className="h-5 w-5" />
                )}
              </div>
              {index < steps.length - 1 && (
                <div className={`w-16 h-0.5 mx-2 transition-all duration-200 ${
                  currentStep > step.id ? 'bg-blue-600' : 'bg-gray-300'
                }`}></div>
              )}
            </div>
          ))}
        </div>

        {/* Step Content */}
        <Card variant="glass" padding="xl" className="mb-8">
          {currentStep === 1 && (
            <div className="space-y-6">
              <div className="text-center mb-6">
                <User className="h-12 w-12 text-blue-600 mx-auto mb-3" />
                <h2 className="heading-3 text-gray-900 mb-2">Personal Information</h2>
                <p className="body-medium text-gray-600">Please provide your basic details</p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <Input
                  label="Full Name"
                  placeholder="Enter your full name"
                  value={formData.personalInfo.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  variant="modern"
                />
                <Input
                  label="Email Address"
                  type="email"
                  placeholder="your.email@example.com"
                  value={formData.personalInfo.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  variant="modern"
                  icon={Mail}
                  iconPosition="left"
                />
                <Input
                  label="Phone Number"
                  placeholder="+91 98765 43210"
                  value={formData.personalInfo.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  variant="modern"
                  icon={Phone}
                  iconPosition="left"
                />
                <Input
                  label="PIN Code"
                  placeholder="110001"
                  value={formData.personalInfo.pincode}
                  onChange={(e) => handleInputChange('pincode', e.target.value)}
                  variant="modern"
                  icon={MapPin}
                  iconPosition="left"
                />
              </div>
              
              <div>
                <Input
                  label="Complete Address"
                  placeholder="House/Flat No, Street, Area, City"
                  value={formData.personalInfo.address}
                  onChange={(e) => handleInputChange('address', e.target.value)}
                  variant="modern"
                />
              </div>
            </div>
          )}

          {currentStep === 2 && (
            <div className="space-y-6">
              <div className="text-center mb-6">
                <Tv className="h-12 w-12 text-blue-600 mx-auto mb-3" />
                <h2 className="heading-3 text-gray-900 mb-2">Choose Your Plan</h2>
                <p className="body-medium text-gray-600">Select the perfect cable TV package for you</p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6">
                {mockQuery.servicePlans.map((plan) => (
                  <Card
                    key={plan.id}
                    variant="default"
                    padding="lg"
                    hover
                    className={`cursor-pointer transition-all duration-200 ${
                      formData.selectedPlan === plan.id 
                        ? 'border-2 border-blue-500 bg-blue-50' 
                        : 'border-2 border-gray-200 hover:border-blue-300'
                    }`}
                    onClick={() => handlePlanSelect(plan.id)}
                  >
                    <div className="text-center">
                      <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl flex items-center justify-center ${
                        plan.type === 'basic' ? 'bg-gradient-to-br from-green-500 to-emerald-500' :
                        plan.type === 'premium' ? 'bg-gradient-to-br from-blue-500 to-purple-500' :
                        'bg-gradient-to-br from-orange-500 to-red-500'
                      } shadow-lg`}>
                        <Tv className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                      <div className="text-3xl font-bold text-blue-600 mb-2">₹{plan.price}</div>
                      <div className="text-sm text-gray-500 mb-4">{plan.channelCount} channels</div>
                      <div className="space-y-2">
                        {plan.features.map((feature, index) => (
                          <div key={index} className="flex items-center space-x-2">
                            <CheckCircle className="h-4 w-4 text-green-500" />
                            <span className="text-sm text-gray-600">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {currentStep === 3 && (
            <div className="space-y-6">
              <div className="text-center mb-6">
                <FileText className="h-12 w-12 text-blue-600 mx-auto mb-3" />
                <h2 className="heading-3 text-gray-900 mb-2">Upload Documents</h2>
                <p className="body-medium text-gray-600">Upload required documents for verification</p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6">
                {mockRootProps.customerOnboarding.requiredDocuments.map((doc, index) => (
                  <Card key={index} variant="default" padding="lg" className="text-center">
                    <Upload className="h-8 w-8 text-gray-400 mx-auto mb-3" />
                    <h3 className="font-semibold text-gray-900 mb-2">{doc}</h3>
                    <Button variant="outline" size="sm" className="w-full">
                      Upload File
                    </Button>
                  </Card>
                ))}
              </div>
              
              <div className="bg-blue-50 rounded-xl p-4">
                <h4 className="font-semibold text-blue-900 mb-2">Additional Charges</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Installation Charges:</span>
                    <span>₹{mockRootProps.customerOnboarding.installationCharges}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Security Deposit:</span>
                    <span>₹{mockRootProps.customerOnboarding.securityDeposit}</span>
                  </div>
                  <div className="flex justify-between font-semibold text-blue-900">
                    <span>Activation Time:</span>
                    <span>{mockRootProps.customerOnboarding.activationTime}</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {currentStep === 4 && (
            <div className="space-y-6">
              <div className="text-center mb-6">
                <CreditCard className="h-12 w-12 text-blue-600 mx-auto mb-3" />
                <h2 className="heading-3 text-gray-900 mb-2">Setup Autopay</h2>
                <p className="body-medium text-gray-600">Enable automatic payments for hassle-free experience</p>
              </div>
              
              <Card variant="default" padding="lg" className="bg-gradient-to-br from-green-50 to-emerald-50 border-green-200">
                <div className="flex items-center space-x-4 mb-4">
                  <CheckCircle className="h-8 w-8 text-green-600" />
                  <div>
                    <h3 className="font-bold text-green-900">UPI Autopay Benefits</h3>
                    <p className="text-sm text-green-700">Never miss a payment, get exclusive discounts</p>
                  </div>
                </div>
                <div className="space-y-3 text-sm text-green-800">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4" />
                    <span>Automatic monthly payments</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4" />
                    <span>No late fees or service interruption</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4" />
                    <span>Cancel anytime from your UPI app</span>
                  </div>
                </div>
              </Card>
              
              <div className="flex items-center space-x-3 p-4 border-2 border-gray-200 rounded-xl">
                <input
                  type="checkbox"
                  id="autopay-consent"
                  checked={formData.autopayConsent}
                  onChange={(e) => setFormData(prev => ({ ...prev, autopayConsent: e.target.checked }))}
                  className="w-5 h-5 text-blue-600 rounded focus:ring-blue-500"
                />
                <label htmlFor="autopay-consent" className="text-sm text-gray-700">
                  I agree to enable UPI Autopay for automatic monthly payments and accept the terms and conditions
                </label>
              </div>
            </div>
          )}
        </Card>

        {/* Navigation */}
        <div className="flex items-center justify-between">
          <Button
            variant="secondary"
            size="lg"
            icon={ArrowLeft}
            iconPosition="left"
            onClick={handlePrev}
            disabled={currentStep === 1}
          >
            Previous
          </Button>
          
          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-500">Step {currentStep} of {steps.length}</span>
          </div>
          
          {currentStep < 4 ? (
            <Button
              variant="primary"
              size="lg"
              icon={ArrowRight}
              iconPosition="right"
              onClick={handleNext}
              disabled={!isStepValid(currentStep)}
            >
              Next Step
            </Button>
          ) : (
            <Button
              variant="primary"
              size="lg"
              icon={CheckCircle}
              iconPosition="right"
              disabled={!isStepValid(currentStep)}
            >
              Complete Setup
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default CustomerOnboarding;