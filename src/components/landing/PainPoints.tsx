import {CheckCircle, XCircle} from 'lucide-react';

const painPoints = [
  {
    problem: 'Fundraising merch looks cheap and generic',
    solution: 'We offer stylish, high-quality apparel people actually want',
  },
  {
    problem: 'Low student engagement and participation',
    solution: 'Students actually want to wear and buy these items',
  },
  {
    problem: 'Organizers waste time on sizes, money, spreadsheets',
    solution: 'We automate everything from orders to payments',
  },
  {
    problem: 'Delivery issues and quality problems',
    solution: 'We produce in-house for better control and speed',
  },
];

const PainPoints = () => {
  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-secondary text-secondary-foreground text-sm font-medium mb-4">
            The Problem We Solve
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">Fundraising Merch Is Broken</h2>
          <p className="text-lg text-muted-foreground">Traditional fundraising apparel fails chapters. We fix that.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {painPoints.map((point, index) => (
            <div key={index} className="bg-card border border-border rounded-2xl p-6 lg:p-8 group hover:shadow-lg transition-all">
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-destructive/10 flex items-center justify-center">
                    <XCircle className="w-5 h-5 text-destructive" />
                  </div>
                  <p className="text-muted-foreground line-through decoration-destructive/50 pt-2">{point.problem}</p>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-emerald-600" />
                  </div>
                  <p className="font-medium pt-2">{point.solution}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PainPoints;
