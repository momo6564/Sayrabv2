import {useEffect} from 'react';

const BookDemo = () => {
  useEffect(() => {
    if (!document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]')) {
      const script = document.createElement('script');
      script.src = 'https://assets.calendly.com/assets/external/widget.js';
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <section id="book-demo" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-primary/5 to-muted/20" />

      <div className="container relative z-10 max-w-4xl mx-auto text-center">
        <div className="mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/20 text-accent-foreground text-sm font-medium mb-4">
            Schedule a Call
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">Book a Demo</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            See how Sayrab can help your organization raise more money with premium fundraising apparel. Schedule a 30-minute demo to learn more.
          </p>
        </div>
        <div className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-6 shadow-xl">
          <div className="calendly-inline-widget" data-url="https://calendly.com/mohidzahid/30min" style={{minWidth: '320px', height: '700px'}} />
        </div>
      </div>
    </section>
  );
};

export default BookDemo;
