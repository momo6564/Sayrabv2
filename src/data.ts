import hoodieHero from './assets/hoodie-hero.jpg';
import varsityJacket from './assets/varsity-jacket.jpg';
import hoodieGreen from './assets/hoodie-green.jpg';
import crewneckNavy from './assets/crewneck-navy.jpg';

import { Product, Campaign, Transaction, Order } from './types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Golden Yellow Zipup with Pearls',
    price: 38.00,
    image: hoodieHero,
    creator: 'Zeta Xi Chapter',
    category: 'Outerwear',
    progress: 82,
    daysRemaining: 18,
    description: 'Order for Zeta Xi Chapter of SGRHO INC @ Hampton NU.',
  },
  {
    id: '2',
    name: 'Screen Printed Zipups',
    price: 64.00,
    image: varsityJacket,
    creator: 'Beta Gamma Chapter',
    category: 'Outerwear',
    progress: 45,
    daysRemaining: 12,
    description: 'Order for Beta Gamma Chapter of Phi Beta Sigma Fraternity, Inc. @ Hampton NU.',
  },
  {
    id: '3',
    name: 'Zipup for Commencement Event',
    price: 24.00,
    image: hoodieGreen,
    creator: 'Hampton University',
    category: 'Outerwear',
    progress: 98,
    daysRemaining: 2,
    description: 'Zipups for Hampton University outgoing class of 2025.',
  },
  {
    id: '4',
    name: 'Home by Sea Rugby Polos',
    price: 52.00,
    image: crewneckNavy,
    creator: 'Hampton University',
    category: 'Polos',
    progress: 76,
    daysRemaining: 9,
    description: 'Order for Hampton University, aka the Pirates.',
  }
];

export const userCampaigns: Campaign[] = [
  {
    id: 'c1',
    title: 'Youth Summer Arts Fundraiser',
    goal: 5000,
    raised: 3750,
    daysRemaining: 24,
    status: 'active',
    image: hoodieHero,
  },
  {
    id: 'c2',
    title: 'Varsity Alumni Collection',
    goal: 10000,
    raised: 9200,
    daysRemaining: 3,
    status: 'ending-soon',
    image: varsityJacket,
  }
];

export const recentTransactions: Transaction[] = [
  { id: 't1', buyer: 'John Doe', amount: 125.00, campaign: 'Save the Reef', status: 'success', timestamp: '2 mins ago' },
  { id: 't2', buyer: 'Alice Smith', amount: 45.99, campaign: 'Urban Forest', status: 'success', timestamp: '15 mins ago' },
  { id: 't3', buyer: 'Mike Kelly', amount: 200.00, campaign: 'Water Aid', status: 'pending', timestamp: '1 hour ago' },
];

export const productionQueue: Order[] = [
  {
    id: 'ORD-92841',
    productType: 'Premium Cotton Tee (White)',
    quantity: 150,
    designFile: 'SAYRAB_D_92841.ai',
    status: 'In Production',
    receivedAt: '2h ago',
    image: hoodieGreen
  },
  {
    id: 'ORD-92845',
    productType: 'Heavyweight Hoodie (Grey)',
    quantity: 45,
    designFile: 'CREATOR_H_92845.pdf',
    status: 'Shipped',
    receivedAt: '5h ago',
    image: crewneckNavy
  }
];
