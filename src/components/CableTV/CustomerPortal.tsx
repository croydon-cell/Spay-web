import React, { useState } from 'react';
import { 
  User, 
  CreditCard, 
  Receipt, 
  Settings, 
  Bell, 
  Download, 
  Calendar,
  Tv,
  Phone,
  Mail,
  MapPin,
  CheckCircle,
  Clock,
  AlertCircle,
  Edit3
} from 'lucide-react';
import Card from '../ui/Card';
import Button from '../ui/Button';
import Badge from '../ui/Badge';
import Input from '../ui/Input';
import { mockQuery } from '../../cableTVMockData';

const CustomerPortal: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [isEditing, setIsEditing] = useState(false);

  const customer = mockQuery.customers[0]; // Using first customer as example

  const tabs = [
    { id: 'overview', label: 'Overview', icon: User },
    { id: 'billing', label: 'Billing & Payments', icon: Receipt },
    { id: 'plan', label: 'My Plan', icon: Tv },
    { id: 'support', label: 'Support', icon: Phone }
  ];

  const recentPayments = [
    { date: '2024-01-15', amount: 450, status: 'success', method: 'UPI Autopay' },
    { date: '2023-12-15', amount: 450, status: 'success', method: 'UPI Autopay' },
    { date: '2023-11-15', amount: 450, status: 'success', method: 'UPI Autopay' },
    { date: '2023-10-15', amount: 450, status: 'failed', method: 'UPI Autopay' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="heading-2 text-gray-900 mb-2">My Account</h1>
            <p className="body-medium text-gray-600">Manage your cable TV subscription and payments</p>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="md" icon={Bell} />
            <Button variant="ghost" size="md" icon={Settings} />
          </div>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Card variant="default" padding="md">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <User className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-bold text-gray-900">{customer.name}</h3>
                <p className="text-sm text-gray-500">{customer.customerId}</p>
                <Badge 
                  variant={customer.serviceDetails.status === 'active' ? 'success' : 'warning'} 
                  size="sm" 
                  className="mt-2"
                >
                  {customer.serviceDetails.status}
                </Badge>
              </div>
              
              <nav className="space-y-2">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                      activeTab === tab.id
                        ? 'bg-green-100 text-green-700 font-semibold'
                        : 'text-gray-600 hover:bg-gray-50 hover:text-green-600'
                    }`}
                  >
                    <tab.icon className="h-5 w-5" />
                    <span>{tab.label}</span>
                  </button>
                ))}
              </nav>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {activeTab === 'overview' && (
              <div className="space-y-6">
                {/* Account Summary */}
                <div className="grid md:grid-cols-3 gap-6">
                  <Card variant="glass" padding="lg" className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-2xl font-bold text-blue-900">₹{customer.paymentDetails.amount}</div>
                        <div className="text-sm text-blue-700">Next Payment</div>
                      </div>
                      <Calendar className="h-8 w-8 text-blue-600" />
                    </div>
                    <div className="mt-2 text-xs text-blue-600">
                      Due: {new Date(customer.paymentDetails.nextDueDate).toLocaleDateString()}
                    </div>
                  </Card>
                  
                  <Card variant="glass" padding="lg" className="bg-gradient-to-br from-green-50 to-green-100 border-green-200">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-2xl font-bold text-green-900">{customer.serviceDetails.planName}</div>
                        <div className="text-sm text-green-700">Current Plan</div>
                      </div>
                      <Tv className="h-8 w-8 text-green-600" />
                    </div>
                    <div className="mt-2 text-xs text-green-600">
                      {customer.serviceDetails.connectionType.toUpperCase()} Connection
                    </div>
                  </Card>
                  
                  <Card variant="glass" padding="lg" className="bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-2xl font-bold text-purple-900">
                          {customer.paymentDetails.autopayEnabled ? 'ON' : 'OFF'}
                        </div>
                        <div className="text-sm text-purple-700">Autopay Status</div>
                      </div>
                      <CreditCard className="h-8 w-8 text-purple-600" />
                    </div>
                    <div className="mt-2 text-xs text-purple-600">
                      {customer.paymentDetails.paymentMethod}
                    </div>
                  </Card>
                </div>

                {/* Personal Information */}
                <Card variant="default" padding="lg">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-lg font-semibold text-gray-900">Personal Information</h3>
                    <Button
                      variant="ghost"
                      size="sm"
                      icon={Edit3}
                      onClick={() => setIsEditing(!isEditing)}
                    >
                      {isEditing ? 'Cancel' : 'Edit'}
                    </Button>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <User className="h-5 w-5 text-gray-400" />
                        <div>
                          <div className="text-sm text-gray-500">Full Name</div>
                          {isEditing ? (
                            <Input value={customer.name} variant="modern" />
                          ) : (
                            <div className="font-medium text-gray-900">{customer.name}</div>
                          )}
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-3">
                        <Mail className="h-5 w-5 text-gray-400" />
                        <div>
                          <div className="text-sm text-gray-500">Email</div>
                          {isEditing ? (
                            <Input value={customer.email} variant="modern" />
                          ) : (
                            <div className="font-medium text-gray-900">{customer.email}</div>
                          )}
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-3">
                        <Phone className="h-5 w-5 text-gray-400" />
                        <div>
                          <div className="text-sm text-gray-500">Phone</div>
                          {isEditing ? (
                            <Input value={customer.phone} variant="modern" />
                          ) : (
                            <div className="font-medium text-gray-900">{customer.phone}</div>
                          )}
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <MapPin className="h-5 w-5 text-gray-400 mt-1" />
                        <div>
                          <div className="text-sm text-gray-500">Address</div>
                          {isEditing ? (
                            <Input 
                              value={`${customer.address.street}, ${customer.address.area}, ${customer.address.city} - ${customer.address.pincode}`} 
                              variant="modern" 
                            />
                          ) : (
                            <div className="font-medium text-gray-900">
                              {customer.address.street}, {customer.address.area}<br />
                              {customer.address.city} - {customer.address.pincode}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {isEditing && (
                    <div className="flex items-center justify-end space-x-4 mt-6 pt-6 border-t border-gray-200">
                      <Button variant="secondary" onClick={() => setIsEditing(false)}>
                        Cancel
                      </Button>
                      <Button variant="primary">
                        Save Changes
                      </Button>
                    </div>
                  )}
                </Card>
              </div>
            )}

            {activeTab === 'billing' && (
              <div className="space-y-6">
                {/* Payment Summary */}
                <Card variant="default" padding="lg">
                  <h3 className="text-lg font-semibold text-gray-900 mb-6">Payment Summary</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-gray-600">Monthly Plan</span>
                        <span className="font-semibold">₹{customer.paymentDetails.amount}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-600">GST (18%)</span>
                        <span className="font-semibold">₹{Math.round(customer.paymentDetails.amount * 0.18)}</span>
                      </div>
                      <div className="flex items-center justify-between font-bold text-lg pt-2 border-t border-gray-200">
                        <span>Total Amount</span>
                        <span>₹{customer.paymentDetails.amount + Math.round(customer.paymentDetails.amount * 0.18)}</span>
                      </div>
                    </div>
                    <div className="bg-green-50 rounded-xl p-4">
                      <div className="flex items-center space-x-2 mb-2">
                        <CheckCircle className="h-5 w-5 text-green-600" />
                        <span className="font-semibold text-green-900">Autopay Active</span>
                      </div>
                      <p className="text-sm text-green-700">
                        Your next payment will be automatically deducted on{' '}
                        {new Date(customer.paymentDetails.nextDueDate).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                </Card>

                {/* Payment History */}
                <Card variant="default" padding="lg">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-lg font-semibold text-gray-900">Payment History</h3>
                    <Button variant="secondary" size="sm" icon={Download}>
                      Download Statement
                    </Button>
                  </div>
                  
                  <div className="space-y-3">
                    {recentPayments.map((payment, index) => (
                      <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                        <div className="flex items-center space-x-4">
                          <div className={`w-3 h-3 rounded-full ${
                            payment.status === 'success' ? 'bg-green-500' : 'bg-red-500'
                          }`}></div>
                          <div>
                            <div className="font-medium text-gray-900">
                              {new Date(payment.date).toLocaleDateString('en-IN', { 
                                day: 'numeric', 
                                month: 'short', 
                                year: 'numeric' 
                              })}
                            </div>
                            <div className="text-sm text-gray-500">{payment.method}</div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="font-semibold text-gray-900">₹{payment.amount}</div>
                          <Badge 
                            variant={payment.status === 'success' ? 'success' : 'error'} 
                            size="sm"
                          >
                            {payment.status}
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>
              </div>
            )}

            {activeTab === 'plan' && (
              <div className="space-y-6">
                {/* Current Plan */}
                <Card variant="default" padding="lg">
                  <h3 className="text-lg font-semibold text-gray-900 mb-6">Current Plan Details</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <div className="text-center mb-6">
                        <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                          <Tv className="h-10 w-10 text-white" />
                        </div>
                        <h4 className="text-xl font-bold text-gray-900">{customer.serviceDetails.planName}</h4>
                        <p className="text-gray-600">₹{customer.paymentDetails.amount}/month</p>
                      </div>
                      
                      <div className="space-y-3">
                        <div className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span className="text-sm">250+ HD Channels</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span className="text-sm">Premium Content</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span className="text-sm">Movie Channels</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span className="text-sm">Kids Channels</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="bg-blue-50 rounded-xl p-4">
                        <h5 className="font-semibold text-blue-900 mb-2">Connection Details</h5>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span>STB Number:</span>
                            <span className="font-mono">{customer.serviceDetails.stbNumber.slice(0, 4)}-****-****-{customer.serviceDetails.stbNumber.slice(-4)}</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Connection Type:</span>
                            <span className="font-semibold">{customer.serviceDetails.connectionType.toUpperCase()}</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Installation Date:</span>
                            <span>{new Date(customer.serviceDetails.installationDate).toLocaleDateString()}</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="space-y-3">
                        <Button variant="primary" size="md" className="w-full">
                          Upgrade Plan
                        </Button>
                        <Button variant="outline" size="md" className="w-full">
                          Request Service
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            )}

            {activeTab === 'support' && (
              <div className="space-y-6">
                {/* Quick Actions */}
                <div className="grid md:grid-cols-3 gap-6">
                  <Card variant="default" padding="lg" hover className="text-center cursor-pointer">
                    <Phone className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                    <h4 className="font-semibold text-gray-900 mb-2">Call Support</h4>
                    <p className="text-sm text-gray-600 mb-3">Get instant help from our team</p>
                    <Badge variant="success" size="sm">24/7 Available</Badge>
                  </Card>
                  
                  <Card variant="default" padding="lg" hover className="text-center cursor-pointer">
                    <AlertCircle className="h-8 w-8 text-orange-600 mx-auto mb-3" />
                    <h4 className="font-semibold text-gray-900 mb-2">Report Issue</h4>
                    <p className="text-sm text-gray-600 mb-3">Technical problems or complaints</p>
                    <Badge variant="warning" size="sm">Quick Response</Badge>
                  </Card>
                  
                  <Card variant="default" padding="lg" hover className="text-center cursor-pointer">
                    <Clock className="h-8 w-8 text-green-600 mx-auto mb-3" />
                    <h4 className="font-semibold text-gray-900 mb-2">Service Request</h4>
                    <p className="text-sm text-gray-600 mb-3">Plan changes or new connections</p>
                    <Badge variant="info" size="sm">Track Status</Badge>
                  </Card>
                </div>

                {/* Contact Information */}
                <Card variant="default" padding="lg">
                  <h3 className="text-lg font-semibold text-gray-900 mb-6">Contact Information</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <Phone className="h-5 w-5 text-blue-600" />
                        <div>
                          <div className="font-medium text-gray-900">Customer Care</div>
                          <div className="text-sm text-gray-600">+91 98765 43210</div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Mail className="h-5 w-5 text-blue-600" />
                        <div>
                          <div className="font-medium text-gray-900">Email Support</div>
                          <div className="text-sm text-gray-600">support@cityvision.com</div>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <Clock className="h-5 w-5 text-blue-600" />
                        <div>
                          <div className="font-medium text-gray-900">Business Hours</div>
                          <div className="text-sm text-gray-600">Mon-Sat: 9 AM - 8 PM</div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <AlertCircle className="h-5 w-5 text-blue-600" />
                        <div>
                          <div className="font-medium text-gray-900">Emergency</div>
                          <div className="text-sm text-gray-600">24/7 Technical Support</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerPortal;