import React, { useState } from 'react';
import { 
  Tv, 
  Plus, 
  Edit3, 
  Trash2, 
  Search, 
  Filter, 
  MoreHorizontal,
  CheckCircle,
  Users,
  IndianRupee,
  Calendar
} from 'lucide-react';
import Card from '../ui/Card';
import Button from '../ui/Button';
import Badge from '../ui/Badge';
import Input from '../ui/Input';
import { mockQuery } from '../../cableTVMockData';

const ServicePlanManager: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('all');
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  const handleCreatePlan = () => {
    setShowCreateModal(true);
  };

  const handleEditPlan = (planId: string) => {
    setSelectedPlan(planId);
  };

  const handleDeletePlan = (planId: string) => {
    // Handle delete logic
    console.log('Delete plan:', planId);
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'basic': return 'green';
      case 'premium': return 'blue';
      case 'sports': return 'orange';
      default: return 'gray';
    }
  };

  const getConnectionTypeLabel = (type: string) => {
    switch (type) {
      case 'sd': return 'SD';
      case 'hd': return 'HD';
      case 'uhd': return 'UHD';
      default: return type.toUpperCase();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="heading-2 text-gray-900 mb-2">Service Plan Management</h1>
            <p className="body-medium text-gray-600">Create and manage cable TV packages and pricing</p>
          </div>
          <Button
            variant="primary"
            size="lg"
            icon={Plus}
            iconPosition="left"
            onClick={handleCreatePlan}
          >
            Create New Plan
          </Button>
        </div>

        {/* Filters and Search */}
        <Card variant="default" padding="md" className="mb-8">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="flex-1">
              <Input
                placeholder="Search plans by name, type, or features..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                icon={Search}
                iconPosition="left"
                variant="modern"
              />
            </div>
            <div className="flex items-center space-x-4">
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="px-4 py-2 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:ring-4 focus:ring-purple-500/10 transition-all duration-200"
              >
                <option value="all">All Types</option>
                <option value="basic">Basic Plans</option>
                <option value="premium">Premium Plans</option>
                <option value="sports">Sports Plans</option>
              </select>
              <Button variant="ghost" size="md" icon={Filter} />
            </div>
          </div>
        </Card>

        {/* Plans Grid */}
        <div className="grid lg:grid-cols-3 gap-6 mb-8">
          {mockQuery.servicePlans.map((plan) => (
            <Card
              key={plan.id}
              variant="default"
              padding="lg"
              hover
              className="relative group"
            >
              {/* Plan Header */}
              <div className="flex items-center justify-between mb-4">
                <Badge 
                  variant={getTypeColor(plan.type) as any} 
                  size="sm"
                  className="uppercase"
                >
                  {plan.type}
                </Badge>
                <div className="flex items-center space-x-2">
                  <Badge variant="info" size="sm">
                    {getConnectionTypeLabel(plan.connectionType)}
                  </Badge>
                  <div className="relative">
                    <Button
                      variant="ghost"
                      size="sm"
                      icon={MoreHorizontal}
                      onClick={() => setSelectedPlan(selectedPlan === plan.id ? null : plan.id)}
                    />
                    {selectedPlan === plan.id && (
                      <div className="absolute right-0 top-full mt-2 w-48 bg-white border border-gray-200 rounded-xl shadow-xl py-2 z-10">
                        <button
                          className="block w-full text-left px-4 py-2 hover:bg-gray-50 transition-colors"
                          onClick={() => handleEditPlan(plan.id)}
                        >
                          <div className="flex items-center space-x-2">
                            <Edit3 className="h-4 w-4 text-blue-600" />
                            <span>Edit Plan</span>
                          </div>
                        </button>
                        <button
                          className="block w-full text-left px-4 py-2 hover:bg-gray-50 transition-colors text-red-600"
                          onClick={() => handleDeletePlan(plan.id)}
                        >
                          <div className="flex items-center space-x-2">
                            <Trash2 className="h-4 w-4" />
                            <span>Delete Plan</span>
                          </div>
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Plan Icon */}
              <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl flex items-center justify-center bg-gradient-to-br ${
                plan.type === 'basic' ? 'from-green-500 to-emerald-500' :
                plan.type === 'premium' ? 'from-blue-500 to-purple-500' :
                'from-orange-500 to-red-500'
              } shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                <Tv className="h-8 w-8 text-white" />
              </div>

              {/* Plan Details */}
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <div className="text-3xl font-bold text-purple-600 mb-2">
                  ₹{plan.price}
                  <span className="text-sm font-normal text-gray-500">/month</span>
                </div>
                <div className="text-sm text-gray-600 mb-4">
                  {plan.channelCount} channels • {plan.validity} days validity
                </div>
              </div>

              {/* Features */}
              <div className="space-y-2 mb-6">
                {plan.features.slice(0, 3).map((feature, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                    <span className="text-sm text-gray-600">{feature}</span>
                  </div>
                ))}
                {plan.features.length > 3 && (
                  <div className="text-xs text-gray-500">
                    +{plan.features.length - 3} more features
                  </div>
                )}
              </div>

              {/* Plan Stats */}
              <div className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-200">
                <div className="text-center">
                  <Users className="h-4 w-4 text-gray-400 mx-auto mb-1" />
                  <div className="text-sm font-semibold text-gray-900">1,247</div>
                  <div className="text-xs text-gray-500">Subscribers</div>
                </div>
                <div className="text-center">
                  <IndianRupee className="h-4 w-4 text-gray-400 mx-auto mb-1" />
                  <div className="text-sm font-semibold text-gray-900">₹5.6L</div>
                  <div className="text-xs text-gray-500">Revenue</div>
                </div>
                <div className="text-center">
                  <Calendar className="h-4 w-4 text-gray-400 mx-auto mb-1" />
                  <div className="text-sm font-semibold text-gray-900">94%</div>
                  <div className="text-xs text-gray-500">Retention</div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Create New Plan Card */}
        <Card
          variant="default"
          padding="xl"
          hover
          className="border-2 border-dashed border-gray-300 hover:border-purple-400 cursor-pointer transition-all duration-200"
          onClick={handleCreatePlan}
        >
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-indigo-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Plus className="h-8 w-8 text-purple-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Create New Plan</h3>
            <p className="text-gray-600 mb-4">Add a new cable TV package with custom pricing and features</p>
            <Button variant="outline" size="lg">
              Get Started
            </Button>
          </div>
        </Card>

        {/* Plan Creation Modal */}
        {showCreateModal && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <Card variant="default" padding="xl" className="w-full max-w-2xl max-h-[90vh] overflow-y-auto">
              <div className="flex items-center justify-between mb-6">
                <h2 className="heading-3 text-gray-900">Create New Plan</h2>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setShowCreateModal(false)}
                >
                  ✕
                </Button>
              </div>
              
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <Input
                    label="Plan Name"
                    placeholder="e.g., Premium HD Package"
                    variant="modern"
                  />
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Plan Type</label>
                    <select className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:ring-4 focus:ring-purple-500/10 transition-all duration-200">
                      <option value="basic">Basic</option>
                      <option value="premium">Premium</option>
                      <option value="sports">Sports</option>
                      <option value="custom">Custom</option>
                    </select>
                  </div>
                  <Input
                    label="Monthly Price (₹)"
                    type="number"
                    placeholder="299"
                    variant="modern"
                  />
                  <Input
                    label="Channel Count"
                    type="number"
                    placeholder="180"
                    variant="modern"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Connection Type</label>
                  <div className="grid grid-cols-3 gap-4">
                    {['SD', 'HD', 'UHD'].map((type) => (
                      <label key={type} className="flex items-center space-x-2 p-3 border-2 border-gray-200 rounded-xl hover:border-purple-300 cursor-pointer transition-colors">
                        <input type="radio" name="connectionType" value={type.toLowerCase()} className="text-purple-600" />
                        <span className="font-medium">{type}</span>
                      </label>
                    ))}
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Features</label>
                  <div className="space-y-2">
                    {['Free to Air Channels', 'Regional Channels', 'News Channels', 'Movie Channels', 'Sports Channels', 'Kids Channels'].map((feature) => (
                      <label key={feature} className="flex items-center space-x-2">
                        <input type="checkbox" className="text-purple-600 rounded" />
                        <span className="text-sm">{feature}</span>
                      </label>
                    ))}
                  </div>
                </div>
                
                <div className="flex items-center justify-end space-x-4 pt-6 border-t border-gray-200">
                  <Button
                    variant="secondary"
                    size="lg"
                    onClick={() => setShowCreateModal(false)}
                  >
                    Cancel
                  </Button>
                  <Button variant="primary" size="lg">
                    Create Plan
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
};

export default ServicePlanManager;