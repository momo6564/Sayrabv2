import {Star} from 'lucide-react';

const testimonials = [
  {
    quote: 'Fundraising with Sayrab felt so much more professional than sending payment links. Our team was confident sharing it, and people trusted it instantly.',
    title: 'A better way than sending random links.',
    author: 'Chapter Member',
    rating: 5,
  },
  {
    quote: "A lot of our supporters and alumni can't attend events. Sayrab gave them a way to feel included and support us. It built chapter pride and raised real money.",
    title: 'Finally - a way to include everyone.',
    author: 'Greek Life Leader',
    rating: 5,
  },
  {
    quote: "We didn't want cheap tees. The hoodies and embroidery looked amazing - people bought them because they genuinely wanted to wear them. Best fundraiser we've ever done.",
    title: 'Gorgeous merch = higher sales.',
    author: 'Philanthropy Chair',
    rating: 5,
  },
];

const SocialProof = () => {
  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-secondary text-secondary-foreground text-sm font-medium mb-4">
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">What Our Community Says</h2>
          <p className="text-lg text-muted-foreground">
            Hear from students and organizations who have raised funds with Sayrab.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-card border border-border rounded-2xl p-8 hover:shadow-lg transition-shadow">
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <h3 className="font-semibold text-lg mb-3">"{testimonial.title}"</h3>
              <blockquote className="text-muted-foreground mb-6 leading-relaxed">"{testimonial.quote}"</blockquote>
              <div>
                <p className="font-semibold">{testimonial.author}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
