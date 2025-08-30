import React from 'react';
import { Server, Wifi, AlertCircle, CheckCircle } from 'lucide-react';

const SystemHealth: React.FC = () => {
  const healthMetrics = [
    {
      service: 'Payment Gateway',
      status: 'healthy',
      uptime: '99.98%',
      responseTime: '120ms',
    },
    {
      service: 'UPI Service',
      status: 'healthy',
      uptime: '99.95%',
      responseTime: '85ms',
    },
    {
      service: 'Database',
      status: 'warning',
      uptime: '99.92%',
      responseTime: '45ms',
    },
    {
      service: 'Notification Service',
      status: 'healthy',
      uptime: '99.99%',
      responseTime: '200ms',
    },
  ];

  const getStatusIcon = (status: string) => {
    return status === 'healthy' ? (
      <CheckCircle className="h-5 w-5 text-green-500" strokeWidth={1.5} />
    ) : (
      <AlertCircle className="h-5 w-5 text-yellow-500" strokeWidth={1.5} />
    );
  };

  const getStatusBadge = (status: string) => {
    const styles = {
      healthy: 'bg-green-100 text-green-800',
      warning: 'bg-yellow-100 text-yellow-800',
      error: 'bg-red-100 text-red-800',
    };
    
    return (
      <span className={`px-2 py-1 rounded-full text-xs font-medium ${styles[status as keyof typeof styles]}`}>
        {status.charAt(0).toUpperCase() + status.slice(1)}
      </span>
    );
  };

  return (
    <div className="grid lg:grid-cols-2 gap-6 mb-8">
      <div className="glassmorphic rounded-2xl p-6">
        <div className="flex items-center space-x-3 mb-6">
          <div className="w-10 h-10 bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg flex items-center justify-center">
            <Server className="h-5 w-5 text-primary" strokeWidth={1.5} />
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-900">System Health</h3>
            <p className="text-gray-600 text-sm">Service status monitoring</p>
          </div>
        </div>
        
        <div className="space-y-4">
          {healthMetrics.map((metric, index) => (
            <div key={index} className="flex items-center justify-between p-4 bg-white/50 rounded-lg">
              <div className="flex items-center space-x-3">
                {getStatusIcon(metric.status)}
                <div>
                  <h4 className="font-medium text-gray-900">{metric.service}</h4>
                  <p className="text-sm text-gray-600">Uptime: {metric.uptime}</p>
                </div>
              </div>
              <div className="text-right">
                {getStatusBadge(metric.status)}
                <p className="text-sm text-gray-600 mt-1">{metric.responseTime}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="glassmorphic rounded-2xl p-6">
        <div className="flex items-center space-x-3 mb-6">
          <div className="w-10 h-10 bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg flex items-center justify-center">
            <Wifi className="h-5 w-5 text-primary" strokeWidth={1.5} />
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-900">API Performance</h3>
            <p className="text-gray-600 text-sm">Response time trends</p>
          </div>
        </div>
        
        <div className="h-48 flex items-end justify-between space-x-2">
          {[120, 85, 95, 110, 75, 90, 105, 80, 95, 85, 100, 90].map((height, index) => (
            <div
              key={index}
              className="bg-gradient-to-t from-primary to-primary-light rounded-t flex-1 transition-all duration-300 hover:opacity-80"
              style={{ height: `${(height / 120) * 100}%` }}
            ></div>
          ))}
        </div>
        
        <div className="flex justify-between text-xs text-gray-500 mt-2">
          <span>12h ago</span>
          <span>6h ago</span>
          <span>Now</span>
        </div>
      </div>
    </div>
  );
};

export default SystemHealth;