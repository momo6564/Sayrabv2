import {useEffect, useState} from 'react';
import {Menu, X} from 'lucide-react';

import {Button} from '../ui/button';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToDemo = () => {
    document.getElementById('book-demo')?.scrollIntoView({behavior: 'smooth'});
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/95 backdrop-blur-md border-b border-border shadow-sm' : 'bg-transparent'
      }`}
    >
      <nav className="container flex items-center justify-between h-20">
        <a href="/" className="text-xl font-bold tracking-tight">
          Sayrab Fundraising
        </a>

        <div className="hidden md:flex items-center gap-4">
          <Button onClick={scrollToDemo} className="rounded-full px-6">
            Book Demo
          </Button>
        </div>

        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-background border-b border-border">
          <div className="container py-6 space-y-4">
            <Button onClick={scrollToDemo} className="w-full rounded-full">
              Book Demo
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
