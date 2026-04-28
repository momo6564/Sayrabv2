export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  creator: string;
  category: string;
  progress: number;
  daysRemaining: number;
  description: string;
}

export interface Campaign {
  id: string;
  title: string;
  goal: number;
  raised: number;
  daysRemaining: number;
  status: 'active' | 'ending-soon' | 'draft' | 'completed';
  image: string;
}

export interface Transaction {
  id: string;
  buyer: string;
  amount: number;
  campaign: string;
  status: 'success' | 'pending' | 'failed';
  timestamp: string;
}

export interface Order {
  id: string;
  productType: string;
  quantity: number;
  designFile: string;
  status: 'In Production' | 'Shipped' | 'Quality Hold' | 'Received';
  receivedAt: string;
  image: string;
}
