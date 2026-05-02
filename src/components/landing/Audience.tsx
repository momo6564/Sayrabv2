import {GraduationCap, Heart, School, Trophy, Users} from 'lucide-react';

const audiences = [
  {icon: Users, name: 'Greek Chapters', description: 'Sororities & Fraternities'},
  {icon: School, name: 'University Societies & Clubs', description: 'Student Organizations'},
  {icon: Trophy, name: 'Sports Teams', description: 'School Athletics'},
  {icon: GraduationCap, name: 'Alumni Groups', description: 'Reunion & Events'},
  {icon: Heart, name: 'Charity Groups & NGOs', description: 'Community Organizations'},
];

const Audience = () => {
  return (
    <section className="py-24 lg:py-32 bg-secondary/30">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/20 text-accent-foreground text-sm font-medium mb-4">
            Who Is Sayrab For?
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            If Your Community Wears Merch - You Can Raise Money
          </h2>
          <p className="text-lg text-muted-foreground">
            Whether you're raising funds for philanthropy or building chapter spirit, we've got you covered.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 lg:gap-6 max-w-4xl mx-auto">
          {audiences.map((audience, index) => (
            <div key={index} className="flex items-center gap-4 bg-card border border-border rounded-full px-6 py-4 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <audience.icon className="w-6 h-6 text-foreground" />
              </div>
              <div className="text-left">
                <p className="font-semibold">{audience.name}</p>
                <p className="text-sm text-muted-foreground">{audience.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Audience;
