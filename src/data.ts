import { Product, Campaign, Transaction, Order } from './types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Modernist Script Tee',
    price: 38.00,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDqXLCa1kQa7g5PvzVAVHniqJzen3p-a-RimPmZ1z7lxNf37n66WPmS2gt8noVOUZ0M7gQtUpiHvUZSIXJjWby1sSpWy1Vwv5geZZx35rWpr2t3IqoFNMKFcSjQxULNnpPDaNyy4iiL9Wuv24Fe4WBNFy_C_OWGe-P1s7zCoaeaW2xsMO8IOZOIqAnR6bVmtqfReukF_G3PbfHSbXgdy5_svu_AEdfWnxu_wL7xi3TqABOGdEEBHABkpE6fJvcDL-Xa9rJSdjl8cK0Y',
    creator: 'Studio SAYRAB',
    category: 'T-shirts',
    progress: 82,
    daysRemaining: 18,
    description: 'A premium heavyweight cotton t-shirt with a minimalist logo.',
  },
  {
    id: '2',
    name: 'Legacy Heavy Hoodie',
    price: 64.00,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBt-xpDMQ4v91Ocu1ZXgzvDfH2LstUdyOSPQ97CDXz1KNgHD2ntrXntGBVtULBiEYSG7kG51OOUGMkJD455LSWQTQAD4791xM9ZsoDi3cHPwnCTRKhcS1JEB7wPleTdlJWdSS2Dp4J7lQhXYgeqG_IT3TmMGrCORs3F4OXopZjg8PtfokBhi0XZ2-jpdFqX7A5hU6WNUX80LNCXz0b8JdwO2YSlPxa-Wfg3bpw6xZpvOAGzL4XwHDD9KPygurePxA_NSaLhy1ntiw9n',
    creator: 'Nordic Collective',
    category: 'Outerwear',
    progress: 45,
    daysRemaining: 12,
    description: 'Oversized premium black hoodie featuring an embroidered artistic graphic.',
  },
  {
    id: '3',
    name: 'Utility Canvas Tote',
    price: 24.00,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAQHOcyfdUv2B_p9n59CUPass2sImGBP7M5_va1RoNDGJNo_yLqAUZpnDpABny4vszM22XQCY8tVbgIWQbVlPqOlT67s0kG7RpWlO3cdvrfqbtOTDeDRbEL1ZDlFRkp12ygJ3nqFeF_fziYadLqUx9rT-MCj5eFhkwVWxcG1lsxIoI5OdhRDrcXhLzWD4gabMpD-eloqfN9idtTd-jiGb1040Cwpi8Kced4i8OJ6oweiCYrsG_sI2iDkC9PHptbwnQjwzmmlOzANRi4',
    creator: 'Everyday Goods',
    category: 'Accessories',
    progress: 98,
    daysRemaining: 2,
    description: 'Structured tote bag with bold black typographic print.',
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
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAnQDDtz5PrPvGOf_QcHQ26-jySW8jJ3AIHJY0ioJZpps-xNnYrzY776aozThmpsWxqP__5h94YVnBj9aeTtWKbofWXNZABlTD18ObCspLucKZ1u8d1puISlhjIC7OlkfhODHG8VP_biP8cI4Aht21sGgtGiirjLQYps6OR65UBhqO3wYIC0yHtpiQ16wVgUY64Wg8JOfOZree2N8nJpbEii1Bpxn-JoEAkNaNz8UbR9qv-5FNZW8PPCF3PchiPC2yLA49zvYvGRUhR',
  },
  {
    id: 'c2',
    title: 'Varsity Alumni Collection',
    goal: 10000,
    raised: 9200,
    daysRemaining: 3,
    status: 'ending-soon',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCsZxl9-MMlxdgKoTpjgh2JYs64PFyTttZPl_FLOzZCKw9ARhnfZGxte59R42ICn0H9RBBcK-Z5I4nPfl7YL6uqMyJBERfLcM76IpaSsjBK78bisLvBCp3nQbhCM9lz2_CasxbY2E6DtaA-bTH7ovRWJ3z66atRM0PVep4L_-M7Uo4rivvvZk8xUhFwZ1TZfSFPewPUJz3WQsMDMaWSA4v_Ns1a4NBwYPbBVAi5FRVfax_JLXgQDS--dEfCHevlUnafBbP5P0TM2vB3',
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
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCqETZPmnCCod1_LWEEDVWeXJrT7YX-L7rSMG_H6303Vd5wi95gdWGF-_ndjLXJtc3wzp7QmVhELTPDTVuGi4iIcP8IsiqUieP9bGh6Ej8HmXgIqQkjT3QAaRSir1SU4POkiwrEhTQf4PajXDDCmaIUB-reT8htv1ao6uvnL9zx-tpxziVeJPr0YoPpgnhWOkSrbBjLo9XcEEh6AG867FkGnzO-J40gJk91gUscH0LgRfGCpaNvBTxyc_1I1EFhPGb6mMyhs2lGfLwO'
  },
  {
    id: 'ORD-92845',
    productType: 'Heavyweight Hoodie (Grey)',
    quantity: 45,
    designFile: 'CREATOR_H_92845.pdf',
    status: 'Shipped',
    receivedAt: '5h ago',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDl_frp3kt1m2w0EpPaur7diGWllEdztbl9P6o8EQT9PTHAh9qrUuPS8EyfvqL6wm4Ol3ye2nQPv3aGNUYF-xpSpCVJ0vrJWy7PiY_cMdSuKue9_uCGtg9gk4wVP3QTCvQ0A_2zOWxmkCmILQH63N_VWRDXox3xWMUoQroH5Em0AmwD6tHW6bI2K9aTvEFC_OE6DxzByUtsROuGeNjimIWSzXG1slD9xcrhKGMNHxcNl4k9dBFaV-rlOBRF9-d77flEpXJOZXPu9Lhe'
  }
];
