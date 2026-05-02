import React from 'react';
import { Link, useLocation } from 'react-router';
import { Menu, X, ShoppingCart, User, Search, Heart, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import {getStoredUser, subscribeToAuthChanges} from '../auth';

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [user, setUser] = React.useState(() => getStoredUser());
  const location = useLocation();

  React.useEffect(() => {
    return subscribeToAuthChanges(() => {
      setUser(getStoredUser());
    });
  }, []);

  const navLinks = [
    { name: 'Store', path: '/store' },
    { name: 'Launch', path: '/launch' },
    { name: 'Dashboard', path: '/dashboard' },
    { name: 'Admin', path: '/admin' },
    { name: 'Production', path: '/manufacturer' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-editorial-bg border-b border-editorial-ink px-4 md:px-8 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-4">
          <div className="w-10 h-10 border border-editorial-ink flex items-center justify-center">
            <span className="font-serif font-bold text-xl">S</span>
          </div>
          <span className="text-2xl font-serif font-black tracking-tighter text-editorial-ink">SAYRAB</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-[10px] font-bold uppercase tracking-[0.2em] transition-colors hover:text-editorial-accent ${
                location.pathname === link.path ? 'text-editorial-ink underline underline-offset-8' : 'text-editorial-ink/60'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <button id="search-btn" className="p-2 hover:bg-editorial-muted transition-colors hidden sm:block">
            <Search className="w-4 h-4" />
          </button>
          <Link to="/cart" id="cart-btn" className="p-2 hover:bg-editorial-muted transition-colors relative">
            <ShoppingCart className="w-4 h-4" />
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-editorial-ink text-white text-[8px] flex items-center justify-center font-bold">2</span>
          </Link>
          <Link 
            to={user ? '/dashboard' : '/login'} 
            id="login-btn"
            className="hidden sm:flex items-center gap-2 px-6 py-2 border border-editorial-ink text-[10px] uppercase font-bold tracking-widest hover:bg-editorial-ink hover:text-white transition-all"
          >
            {user ? `Hi ${user.givenName ?? user.fullName.split(' ')[0]}` : 'Sign In'}
          </Link>
          
          {/* Mobile Menu Toggle */}
          <button 
            id="mobile-menu-toggle"
            className="md:hidden p-2 hover:bg-editorial-muted transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full left-0 w-full bg-editorial-bg border-b border-editorial-ink md:hidden p-8 shadow-2xl"
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-2xl font-serif text-editorial-ink hover:text-editorial-accent transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to={user ? '/dashboard' : '/login'}
                className="w-full py-4 border border-editorial-ink text-center text-xs font-bold uppercase tracking-widest mt-4 hover:bg-editorial-ink hover:text-white transition-all"
                onClick={() => setIsOpen(false)}
              >
                {user ? 'Dashboard' : 'Sign In'}
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export const Footer: React.FC = () => {
  return (
    <footer className="bg-editorial-bg text-editorial-ink py-20 px-4 md:px-8 border-t-2 border-editorial-ink mt-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20 text-center md:text-left">
          <div className="md:col-span-4">
            <Link to="/" className="flex items-center justify-center md:justify-start gap-4 mb-8">
              <div className="w-10 h-10 border border-editorial-ink flex items-center justify-center">
                <span className="font-serif font-bold text-xl">S</span>
              </div>
              <span className="text-3xl font-serif font-black tracking-tighter">SAYRAB</span>
            </Link>
            <p className="font-serif text-lg leading-relaxed italic text-editorial-ink/70 max-w-sm mx-auto md:mx-0">
              "Fueling vision through premium apparel fundraising for the modern era."
            </p>
          </div>
          
          <div className="md:col-span-2">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] mb-8 text-editorial-ink/40">Shop</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><Link to="/store" className="hover:underline underline-offset-4">Trending</Link></li>
              <li><Link to="/store" className="hover:underline underline-offset-4">New Arrivals</Link></li>
              <li><Link to="/store" className="hover:underline underline-offset-4">Creators</Link></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] mb-8 text-editorial-ink/40">Launch</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><Link to="/launch" className="hover:underline underline-offset-4">Start Campaign</Link></li>
              <li><Link to="/launch" className="hover:underline underline-offset-4">Design Tools</Link></li>
              <li><Link to="/launch" className="hover:underline underline-offset-4">Pricing</Link></li>
            </ul>
          </div>

          <div className="md:col-span-4 flex flex-col items-center md:items-end">
             <div className="w-full max-w-xs border border-editorial-ink p-8">
                <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] mb-4">The Journal</h4>
                <p className="text-xs italic mb-6">Stay updated with the latest in movement-driven apparel.</p>
                <div className="flex border-b border-editorial-ink pb-2">
                   <input type="text" placeholder="EMAIL" className="bg-transparent border-none outline-none text-[10px] font-bold w-full uppercase" />
                   <ChevronRight className="w-4 h-4" />
                </div>
             </div>
          </div>
        </div>
        
        <div className="pt-10 border-t border-editorial-ink/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-[9px] font-bold uppercase tracking-widest text-editorial-ink/40">© 2024 SAYRAB / Est. London</p>
          <div className="flex gap-8">
            <a href="#" className="text-editorial-ink/40 hover:text-editorial-ink transition-colors"><Search className="w-4 h-4" /></a>
            <a href="#" className="text-editorial-ink/40 hover:text-editorial-ink transition-colors font-bold text-[9px] uppercase tracking-widest">Instagram</a>
            <a href="#" className="text-editorial-ink/40 hover:text-editorial-ink transition-colors font-bold text-[9px] uppercase tracking-widest">Twitter</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
