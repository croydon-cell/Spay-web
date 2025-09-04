import React, { useState } from 'react';
import { 
  Tv, 
  Receipt, 
  BarChart3, 
  Users, 
  TrendingUp, 
  TrendingDown,
  Calendar,
  IndianRupee,
  RotateCcw,
  Filter,
  Search,
  Download,
  RefreshCw
} from 'lucide-react';
import Card from '../ui/Card';
import MetricCard from '../ui/MetricCard';
import Button from '../ui/Button';
import Badge from '../ui/Badge';
import Input from '../ui/Input';
import { mockQuery } from '../../cableTVMockData';

const CableDashboard: React.FC = () => {
  const [selectedArea, setSelectedArea] = useState('all');
  const [dateRange, setDateRange] = useState('30days');
  const [isRefreshing, setIsRefreshing] = useState(false);

  const handleRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => setIsRefreshing(false), 2000);
  };

  const metrics = [
    {
      title: 'Total Revenue',
      value: `₹${(mockQuery.dashboardMetrics.totalRevenue / 100000).toFixed(1)}L`,
      description: 'Monthly collection target',
      icon: IndianRupee,
      trend: { value: '+15.3%', positive: true },
      color: 'green' as const
    },
    {
      title: 'Collection Rate',
      value: `${mockQuery.dashboardMetrics.successRate}%`,
      description: 'Payment success rate',
      icon: Receipt,
      trend: { value: '+2.1%', positive: true },
      color: 'blue' as const
    },
    {
      title: 'Active Subscribers',
      value: '14,850',
      description: 'Currently active connections',
      icon: Tv,
      trend: { value: '+8.2%', positive: true },
      color: 'purple' as const
    },
    {
      title: 'Retry Success',
      value: `${mockQuery.dashboardMetrics.retrySuccessRate}%`,
      description: 'Smart retry effectiveness',
      icon: RotateCcw,
      trend: { value: '+5.4%', positive: true },
      color: 'orange' as const
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="heading-2 text-gray-900 mb-2">Cable TV Dashboard</h1>
            <p className="body-medium text-gray-600">Monitor your cable TV operations and payment collections</p>
          </div>
          <div className="flex items-center space-x-4">
            <Button 
              variant="secondary" 
              size="md" 
              icon={Download}
              iconPosition="left"
            >
              Export Report
            </Button>
            <Button 
              variant="primary" 
              size="md" 
              icon={RefreshCw}
              iconPosition="left"
              loading={isRefreshing}
              onClick={handleRefresh}
            >
              Refresh Data
            </Button>
          </div>
        </div>

        {/* Filters */}
        <Card variant="default" padding="md" className="mb-8">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="flex-1">
              <Input
                placeholder="Search customers, transactions..."
                icon={Search}
                iconPosition="left"
                variant="modern"
              />
            </div>
            <div className="flex items-center space-x-4">
              <select
                value={selectedArea}
                onChange={(e) => setSelectedArea(e.target.value)}
                className="px-4 py-2 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all duration-200"
              >
                <option value="all">All Areas</option>
                <option value="sector1">Sector 1</option>
                <option value="sector2">Sector 2</option>
                <option value="sector3">Sector 3</option>
              </select>
              <select
                value={dateRange}
                onChange={(e) => setDateRange(e.target.value)}
                className="px-4 py-2 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all duration-200"
              >
                <option value="7days">Last 7 days</option>
                <option value="30days">Last 30 days</option>
                <option value="90days">Last 90 days</option>
              </select>
              <Button variant="ghost" size="md" icon={Filter} />
            </div>
          </div>
        </Card>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {metrics.map((metric, index) => (
            <MetricCard
              key={index}
              title={metric.title}
              value={metric.value}
              description={metric.description}
              icon={metric.icon}
              trend={metric.trend}
              color={metric.color}
              variant="glass"
            />
          ))}
        </div>

        {/* Charts and Analytics */}
        <div className="grid lg:grid-cols-3 gap-6 mb-8">
          {/* Revenue Chart */}
          <div className="lg:col-span-2">
            <Card variant="default" padding="lg" className="h-80">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <BarChart3 className="h-6 w-6 text-blue-600" />
                  <h3 className="text-lg font-semibold text-gray-900">Revenue Trends</h3>
                </div>
                <Badge variant="success" size="sm">Live</Badge>
              </div>
              <div className="h-48 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl flex items-center justify-center">
                <div className="text-center">
                  <BarChart3 className="h-12 w-12 text-blue-400 mx-auto mb-3" />
                  <p className="text-gray-600">Revenue chart visualization</p>
                  <p className="text-sm text-gray-500">Monthly collection: ₹19.5L</p>
                </div>
              </div>
            </Card>
          </div>

          {/* Collection Efficiency */}
          <Card variant="glass" padding="lg" className="h-80">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center">
                <TrendingUp className="h-4 w-4 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Collection Efficiency</h3>
            </div>
            <div className="space-y-4">
              {[
                { area: 'Sector 1', efficiency: 96.5, color: 'green' },
                { area: 'Sector 2', efficiency: 94.2, color: 'blue' },
                { area: 'Sector 3', efficiency: 91.8, color: 'yellow' },
                { area: 'Downtown', efficiency: 88.3, color: 'orange' }
              ].map((item, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-700">{item.area}</span>
                    <span className="text-sm font-bold text-gray-900">{item.efficiency}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full bg-gradient-to-r ${
                        item.color === 'green' ? 'from-green-500 to-emerald-500' :
                        item.color === 'blue' ? 'from-blue-500 to-cyan-500' :
                        item.color === 'yellow' ? 'from-yellow-500 to-orange-500' :
                        'from-orange-500 to-red-500'
                      }`}
                      style={{ width: `${item.efficiency}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Recent Transactions */}
        <Card variant="default" padding="lg">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-3">
              <Receipt className="h-6 w-6 text-indigo-600" />
              <h3 className="text-lg font-semibold text-gray-900">Recent Transactions</h3>
            </div>
            <Button variant="secondary" size="sm">View All</Button>
          </div>
          <div className="space-y-3">
            {mockQuery.recentTransactions.map((txn, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                <div className="flex items-center space-x-4">
                  <div className={`w-3 h-3 rounded-full ${
                    txn.status === 'success' ? 'bg-green-500' : 
                    txn.status === 'retry' ? 'bg-yellow-500' : 'bg-red-500'
                  }`}></div>
                  <div>
                    <div className="font-medium text-gray-900">{txn.customerName}</div>
                    <div className="text-sm text-gray-500">{txn.planName} • {txn.customerId}</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-semibold text-gray-900">₹{txn.amount}</div>
                  <div className="flex items-center space-x-2">
                    <Badge 
                      variant={txn.status === 'success' ? 'success' : txn.status === 'retry' ? 'warning' : 'error'} 
                      size="sm"
                    >
                      {txn.status}
                    </Badge>
                    <span className="text-xs text-gray-500">
                      {new Date(txn.paymentDate).toLocaleDateString()}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default CableDashboard;