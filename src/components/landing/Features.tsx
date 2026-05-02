import {BarChart3, CreditCard, DollarSign, Scissors, Share2, ShoppingBag, Timer, Truck} from 'lucide-react';

const features = [
  {icon: Scissors, title: 'Premium Embroidery & Patchwork', description: 'High-quality stitching and custom patches'},
  {icon: Timer, title: 'Limited-Edition Drops', description: 'Create urgency with exclusive campaigns'},
  {icon: ShoppingBag, title: 'Pre-Order Model', description: 'No risk for chapters - we only produce what sells'},
  {icon: CreditCard, title: 'Automated Payments', description: 'Secure checkout and easy tracking'},
  {icon: Truck, title: 'Fast Production', description: 'In-house manufacturing via Retrohood'},
  {icon: BarChart3, title: 'Progress Tracking', description: 'Real-time orders and funds raised'},
  {icon: Share2, title: 'Easy Sharing Tools', description: 'One link to share everywhere'},
  {icon: DollarSign, title: 'No Upfront Costs', description: 'Zero investment required to start'},
];

const Features = () => {
  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-secondary text-secondary-foreground text-sm font-medium mb-4">
            Platform Features
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">Everything You Need</h2>
          <p className="text-lg text-muted-foreground">A complete platform designed to maximize your fundraising success.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="bg-card border border-border rounded-xl p-6 hover:shadow-md transition-shadow group">
              <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <feature.icon className="w-6 h-6" />
              </div>
              <h3 className="font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
