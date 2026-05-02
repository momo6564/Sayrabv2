import {ArrowRight} from 'lucide-react';
import {Link} from 'react-router';

import {Button} from '../ui/button';

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="border-b border-primary-foreground/10">
        <div className="container py-20 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6">Ready to Raise More?</h2>
          <p className="text-lg text-primary-foreground/70 max-w-2xl mx-auto mb-8">
            Launch a merch fundraiser your community will love - with zero upfront cost and 50% earnings.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 rounded-full px-8 py-6 text-base group">
              <Link to="/login?mode=signup&next=%2Flaunch">
                Start Your Fundraiser
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </div>

      <div className="container py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-2xl font-bold">Sayrab</p>
            <p className="text-sm text-primary-foreground/60 mt-1">Sayrab Fundraising</p>
          </div>

          <div className="flex items-center gap-8 text-sm text-primary-foreground/60">
            <a href="mailto:ceo@sayrab.com" className="hover:text-primary-foreground transition-colors">
              ceo@sayrab.com
            </a>
            <a href="#" className="hover:text-primary-foreground transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-primary-foreground transition-colors">
              Terms
            </a>
            <a href="#" className="hover:text-primary-foreground transition-colors">
              Contact
            </a>
          </div>

          <p className="text-sm text-primary-foreground/60">(c) {new Date().getFullYear()} Sayrab. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
