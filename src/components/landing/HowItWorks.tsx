import {ArrowRight, Package, Share2, Store} from 'lucide-react';
import {Link} from 'react-router';

import {Button} from '../ui/button';

const steps = [
  {
    number: '01',
    icon: Store,
    title: 'Create Your Campaign Store',
    description: 'Pick your merch from our premium catalog or send us your design. We prepare your campaign-ready product lineup.',
  },
  {
    number: '02',
    icon: Share2,
    title: 'Your Members Share the Link',
    description: 'Every team or chapter member gets their own personal fundraising link to share via text, Instagram, WhatsApp, or email.',
  },
  {
    number: '03',
    icon: Package,
    title: 'We Produce & Ship Everything',
    description: 'We handle manufacturing, packaging, and delivery. You get 50% of every sale - automatically.',
  },
];

const HowItWorks = () => {
  return (
    <section className="py-24 lg:py-32 bg-primary text-primary-foreground">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary-foreground/10 text-primary-foreground text-sm font-medium mb-4">
            3 Simple Steps
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">How It Works</h2>
          <p className="text-lg text-primary-foreground/70">From setup to success in three simple steps.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="relative text-center group">
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-[60%] w-[80%] h-px bg-primary-foreground/20" />
              )}

              <div className="relative mb-6">
                <span className="text-7xl lg:text-8xl font-bold text-primary-foreground/10 absolute -top-4 left-1/2 -translate-x-1/2">
                  {step.number}
                </span>
                <div className="relative w-20 h-20 mx-auto rounded-2xl bg-primary-foreground/10 flex items-center justify-center group-hover:bg-primary-foreground/20 transition-colors">
                  <step.icon className="w-10 h-10 text-primary-foreground" />
                </div>
              </div>

              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-primary-foreground/70 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" asChild className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 rounded-full px-8 py-6 text-base group">
            <Link to="/login?mode=signup&next=%2Flaunch">
              Launch Your Campaign
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
