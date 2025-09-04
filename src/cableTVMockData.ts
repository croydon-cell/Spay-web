// Mock data for Cable TV Autopay system

// Data for global state store
export const mockStore = {
  operator: {
    id: 'OP001',
    name: 'CityVision Cable Network',
    serviceAreas: ['Sector 1', 'Sector 2', 'Sector 3', 'Downtown', 'Uptown'],
    totalSubscribers: 15420,
    activeSubscribers: 14850,
    collectionEfficiency: 94.2
  },
  user: {
    id: 'USR001',
    name: 'Rajesh Kumar',
    role: 'area_manager' as const,
    serviceArea: 'Sector 1',
    permissions: ['view_dashboard', 'manage_customers', 'process_payments']
  }
};

// Data returned by API queries
export const mockQuery = {
  dashboardMetrics: {
    totalRevenue: 2847000,
    monthlyCollection: 1950000,
    pendingPayments: 125000,
    failedPayments: 45000,
    successRate: 94.2,
    retrySuccessRate: 78.5,
    newSubscriptions: 156,
    churnRate: 2.1
  },
  recentTransactions: [
    {
      id: 'TXN001',
      customerId: 'CTV-001234',
      customerName: 'Amit Sharma',
      amount: 450,
      status: 'success' as const,
      planName: 'Premium HD',
      paymentDate: '2024-01-15T10:30:00Z',
      nextDueDate: '2024-02-15T00:00:00Z'
    },
    {
      id: 'TXN002',
      customerId: 'CTV-001235',
      customerName: 'Priya Patel',
      amount: 299,
      status: 'failed' as const,
      planName: 'Basic SD',
      paymentDate: '2024-01-15T11:15:00Z',
      retryAttempts: 2
    },
    {
      id: 'TXN003',
      customerId: 'CTV-001236',
      customerName: 'Ravi Gupta',
      amount: 650,
      status: 'retry' as const,
      planName: 'Sports Premium',
      paymentDate: '2024-01-15T09:45:00Z',
      nextRetryDate: '2024-01-16T10:00:00Z'
    }
  ],
  servicePlans: [
    {
      id: 'PLAN001',
      name: 'Basic SD Package',
      type: 'basic' as const,
      connectionType: 'sd' as const,
      price: 299,
      channelCount: 180,
      validity: 30,
      features: ['Free to Air Channels', 'Regional Channels', 'News Channels']
    },
    {
      id: 'PLAN002',
      name: 'Premium HD Package',
      type: 'premium' as const,
      connectionType: 'hd' as const,
      price: 450,
      channelCount: 250,
      validity: 30,
      features: ['HD Channels', 'Premium Content', 'Movie Channels', 'Kids Channels']
    },
    {
      id: 'PLAN003',
      name: 'Sports Premium',
      type: 'sports' as const,
      connectionType: 'hd' as const,
      price: 650,
      channelCount: 280,
      validity: 30,
      features: ['All Sports Channels', 'Live Matches', 'HD Quality', 'Premium Content']
    }
  ],
  customers: [
    {
      id: 'CUST001',
      customerId: 'CTV-001234',
      name: 'Amit Sharma',
      email: 'amit.sharma@email.com',
      phone: '+91 98765 43210',
      address: {
        street: '123 Main Street',
        area: 'Sector 1',
        city: 'Tech City',
        pincode: '110001'
      },
      serviceDetails: {
        planId: 'PLAN002',
        planName: 'Premium HD Package',
        connectionType: 'hd' as const,
        stbNumber: '1234567890123456',
        installationDate: '2023-06-15T00:00:00Z',
        status: 'active' as const
      },
      paymentDetails: {
        autopayEnabled: true,
        lastPaymentDate: '2024-01-15T10:30:00Z',
        nextDueDate: '2024-02-15T00:00:00Z',
        amount: 450,
        paymentMethod: 'UPI Autopay'
      }
    },
    {
      id: 'CUST002',
      customerId: 'CTV-001235',
      name: 'Priya Patel',
      email: 'priya.patel@email.com',
      phone: '+91 87654 32109',
      address: {
        street: '456 Park Avenue',
        area: 'Sector 2',
        city: 'Tech City',
        pincode: '110002'
      },
      serviceDetails: {
        planId: 'PLAN001',
        planName: 'Basic SD Package',
        connectionType: 'sd' as const,
        stbNumber: '2345678901234567',
        installationDate: '2023-08-20T00:00:00Z',
        status: 'active' as const
      },
      paymentDetails: {
        autopayEnabled: false,
        lastPaymentDate: '2024-01-10T00:00:00Z',
        nextDueDate: '2024-02-10T00:00:00Z',
        amount: 299,
        paymentMethod: 'Manual'
      }
    }
  ]
};

// Data passed as props to the root component
export const mockRootProps = {
  operatorInfo: {
    name: 'CityVision Cable Network',
    logo: 'https://images.unsplash.com/photo-1633544325196-bcf8bf81ead0?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHwyfHxsb2dvJTIwdGVsZXZpc2lvbiUyMGNhYmxlJTIwYnJvYWRjYXN0fGVufDB8Mnx8Ymx1ZXwxNzU2OTc3MjIyfDA&ixlib=rb-4.1.0&q=85',
    serviceAreas: ['Sector 1', 'Sector 2', 'Sector 3'],
    contactInfo: {
      phone: '+91 98765 43210',
      email: 'support@cityvision.com',
      address: '123 Cable Street, Tech City'
    }
  },
  customerOnboarding: {
    requiredDocuments: ['Aadhaar Card', 'Address Proof', 'Photo'],
    installationCharges: 500,
    securityDeposit: 1000,
    activationTime: '24-48 hours'
  },
  paymentConfig: {
    supportedMethods: ['UPI Autopay', 'Net Banking', 'Debit Card', 'Credit Card'],
    processingFee: 0,
    lateFee: 50,
    gracePeriod: 7
  }
};