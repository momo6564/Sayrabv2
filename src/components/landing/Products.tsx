import hoodieHero from '../../assets/hoodie-hero.jpg';
import varsityJacket from '../../assets/varsity-jacket.jpg';
import hoodieGreen from '../../assets/hoodie-green.jpg';
import crewneckNavy from '../../assets/crewneck-navy.jpg';

const products = [
  {
    image: hoodieHero,
    name: 'Golden Yellow Zipup with Pearls',
    description: 'Order for Zeta Xi Chapter of SGRHO INC @ Hampton NU',
    tag: null,
  },
  {
    image: varsityJacket,
    name: 'Screen Printed Zipups',
    description: 'Order for Beta Gamma Chapter of Phi Beta Sigma Fraternity, Inc. @ Hampton NU',
    tag: null,
  },
  {
    image: hoodieGreen,
    name: 'Zipup for commencement event',
    description: 'Zipups for Hampton University Outgoing Class of 2025',
    tag: null,
  },
  {
    image: crewneckNavy,
    name: 'Home by Sea Rugby Polos',
    description: 'Order for Hampton University aka the Pirates',
    tag: null,
  },
];

const Products = () => {
  return (
    <section className="py-24 lg:py-32 bg-secondary/30">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/20 text-accent-foreground text-sm font-medium mb-4">
            Recent Projects
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">Fundraising With Real Results</h2>
          <p className="text-lg text-muted-foreground">
            Raise more with merch people are proud to wear. Fashion-quality apparel creates higher engagement.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="relative aspect-square rounded-2xl overflow-hidden bg-muted mb-4">
                <img src={product.image} alt={product.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                {product.tag && (
                  <span className="absolute top-4 left-4 px-3 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full">
                    {product.tag}
                  </span>
                )}
              </div>
              <h3 className="font-semibold text-lg group-hover:text-accent-foreground transition-colors">{product.name}</h3>
              <p className="text-sm text-muted-foreground">{product.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
