import {ArrowRight} from 'lucide-react';
import {Link} from 'react-router';

import {Button} from '../ui/button';
import {Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious} from '../ui/carousel';
import hoodieHero from '../../assets/hoodie-hero.jpg';
import varsityJacket from '../../assets/varsity-jacket.jpg';
import hoodieGreen from '../../assets/hoodie-green.jpg';
import crewneckNavy from '../../assets/crewneck-navy.jpg';

const projects = [
  {image: hoodieHero, title: 'Golden Yellow Zipup with Pearls', description: 'Order for Zeta Xi Chapter of SGRHO INC @ Hampton NU'},
  {image: varsityJacket, title: 'Screen Printed Zipups', description: 'Order for Beta Gamma Chapter of Phi Beta Sigma Fraternity, Inc. @ Hampton NU'},
  {image: hoodieGreen, title: 'Golden Yellow Zipup with Red Rhinestones', description: 'Order for BETA TAU Chapter of SGRHO Sorority Inc @ MSU'},
  {image: crewneckNavy, title: 'Home by Sea Rugby Polos', description: 'Order for Hampton University aka the Pirates'},
];

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-background overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-muted/50 via-background to-background" />

      <div className="container relative z-10 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="space-y-8 text-center lg:text-left">
            <div className="space-y-4">
              <span className="inline-block px-4 py-1.5 rounded-full bg-secondary text-secondary-foreground text-sm font-medium tracking-wide">
                Premium Merch. Zero Hassle. 50% Back to You.
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-[1.1]">
                Fundraising Made
                <span className="block mt-2 bg-gradient-to-r from-foreground via-foreground/80 to-foreground bg-clip-text">
                  Stylish.
                </span>
              </h1>
            </div>

            <p className="text-lg sm:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Raise more money for your school, society, or Greek chapter with custom-designed, fashion-quality apparel. We design it, manufacture it, ship it and your group keeps 50% of every sale.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" asChild className="text-base px-8 py-6 rounded-full group">
                <Link to="/login?mode=signup&next=%2Flaunch">
                  Launch Your Campaign
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="text-base px-8 py-6 rounded-full">
                <Link to="/campaign">Sample Campaign Page</Link>
              </Button>
            </div>

            <div className="flex items-center justify-center lg:justify-start gap-8 pt-4">
              <div className="text-center">
                <p className="text-3xl font-bold">200+</p>
                <p className="text-sm text-muted-foreground">Premium Items Produced through Retrohood</p>
              </div>
              <div className="h-12 w-px bg-border" />
              <div className="text-center">
                <p className="text-3xl font-bold">15-20</p>
                <p className="text-sm text-muted-foreground">Day Delivery</p>
              </div>
              <div className="h-12 w-px bg-border" />
              <div className="text-center">
                <p className="text-3xl font-bold">50%</p>
                <p className="text-sm text-muted-foreground">Profit to You</p>
              </div>
            </div>
          </div>

          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md lg:max-w-lg xl:max-w-xl">
              <div className="absolute -inset-4 bg-gradient-to-br from-accent/20 via-transparent to-muted/30 rounded-3xl blur-2xl" />
              <Carousel className="w-full" opts={{loop: true}}>
                <CarouselContent>
                  {projects.map((project, index) => (
                    <CarouselItem key={index}>
                      <div className="relative">
                        <img
                          src={project.image}
                          alt={`${project.title} - ${project.description}`}
                          className="relative w-full rounded-2xl shadow-2xl aspect-square object-cover"
                        />
                        <div className="absolute bottom-4 left-4 right-4 bg-card/90 backdrop-blur-sm border border-border rounded-xl p-4 shadow-lg">
                          <p className="text-sm font-medium">{project.title}</p>
                          <p className="text-xs text-muted-foreground">{project.description}</p>
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="left-2" />
                <CarouselNext className="right-2" />
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
