import {ArrowRight, BarChart3, Link2, Percent, Sparkles, Store} from 'lucide-react';
import {Link} from 'react-router';

import {Button} from '../ui/button';

const usps = [
  {
    icon: Sparkles,
    title: 'Premium Quality Merch',
    description: 'Premium hoodies, crewnecks, tees & embroidered Greek letters - designed specifically for schools & Greek organizations.',
  },
  {
    icon: Store,
    title: 'No Stock, No Minimums',
    description: 'No inventory to buy upfront. We handle everything so you can focus on what matters.',
  },
  {
    icon: Link2,
    title: 'Personal Fundraising Links',
    description: 'Every member gets their own safe, shareable store link to share via text, Instagram, WhatsApp, or email.',
  },
  {
    icon: BarChart3,
    title: 'Real-Time Tracking',
    description: 'Track sales in real time and see exactly how your fundraiser is performing.',
  },
  {
    icon: Percent,
    title: '50% Profit Guaranteed',
    description: 'Your group earns a fixed 50% profit on every sale. No hidden fees, no surprises.',
  },
];

const USP = () => {
  return (
    <section className="py-24 lg:py-32 bg-secondary/30">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/20 text-accent-foreground text-sm font-medium mb-4">
            Why Sayrab
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            Fundraising that actually works.<br />Merch people actually want.
          </h2>
          <p className="text-lg text-muted-foreground">
            Traditional fundraisers feel awkward and outdated. Sayrab gives you a modern, digital-first way to raise money - with merch that boosts pride, loyalty, and visibility.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {usps.map((usp, index) => (
            <div
              key={index}
              className={`group bg-card border border-border rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${
                index === 4 ? 'lg:col-span-1 lg:col-start-2' : ''
              }`}
            >
              <div className="w-14 h-14 rounded-xl bg-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <usp.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{usp.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{usp.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" asChild className="text-base px-8 py-6 rounded-full group">
            <Link to="/login?mode=signup&next=%2Flaunch">
              Start a Fundraiser
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default USP;
