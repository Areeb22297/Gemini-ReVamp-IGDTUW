import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-devcation-blue/80 backdrop-blur-md shadow-lg' : 'bg-devcation-blue/50 backdrop-blur-sm'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <a href="/#home" className="flex items-center">
                <img alt="Google Developer Groups on Campus" className="h-8" src="/images/GDC.png" />
                <span className="ml-2 text-white font-medium hidden md:block">GDG IGDTUW</span>
              </a>
            </div>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <NavLink href="/#home">Home</NavLink>
              <NavLink href="/#about">About</NavLink>
              <NavLink href="/#devcation">Devcation'25</NavLink>
              <NavLink href="/#timeline">Timeline</NavLink>
              <div className="relative group">
                <button className="text-gray-200 hover:text-white px-3 py-2 rounded-md text-sm font-medium flex items-center">
                  More
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                <div className="absolute right-0 w-48 bg-card/90 backdrop-blur-md rounded-md shadow-lg py-1 mt-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <NavLink href="/#tracks" className="block px-4 py-2 text-sm">Tracks</NavLink>
                  <NavLink href="/#judges" className="block px-4 py-2 text-sm">Judges</NavLink>
                  <NavLink href="/#mentors" className="block px-4 py-2 text-sm">Mentors</NavLink>
                  <NavLink href="/#prizes" className="block px-4 py-2 text-sm">Prizes</NavLink>
                  <NavLink href="/#sponsors" className="block px-4 py-2 text-sm">Sponsors</NavLink>
                  <NavLink href="/#faq" className="block px-4 py-2 text-sm">FAQ</NavLink>
                </div>
              </div>
              <NavLink href="/#contact">Contact</NavLink>
            </div>
          </div>
          
          <div className="-mr-2 flex md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white hover:bg-devcation-teal/20 focus:outline-none">
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="block h-6 w-6" aria-hidden="true" /> : <Menu className="block h-6 w-6" aria-hidden="true" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-devcation-blue/95 backdrop-blur-md">
          <MobileNavLink href="/#home" onClick={() => setIsOpen(false)}>Home</MobileNavLink>
          <MobileNavLink href="/#about" onClick={() => setIsOpen(false)}>About</MobileNavLink>
          <MobileNavLink href="/#devcation" onClick={() => setIsOpen(false)}>Devcation'25</MobileNavLink>
          <MobileNavLink href="/#timeline" onClick={() => setIsOpen(false)}>Timeline</MobileNavLink>
          <MobileNavLink href="/#tracks" onClick={() => setIsOpen(false)}>Tracks</MobileNavLink>
          <MobileNavLink href="/#judges" onClick={() => setIsOpen(false)}>Judges</MobileNavLink>
          <MobileNavLink href="/#mentors" onClick={() => setIsOpen(false)}>Mentors</MobileNavLink>
          <MobileNavLink href="/#prizes" onClick={() => setIsOpen(false)}>Prizes</MobileNavLink>
          <MobileNavLink href="/#sponsors" onClick={() => setIsOpen(false)}>Sponsors</MobileNavLink>
          <MobileNavLink href="/#faq" onClick={() => setIsOpen(false)}>FAQ</MobileNavLink>
          <MobileNavLink href="/#contact" onClick={() => setIsOpen(false)}>Contact</MobileNavLink>
        </div>
      </div>
    </nav>
  );
};

const NavLink = ({ href, children, className = "" }) => (
  <a href={href} className={`text-gray-200 hover:text-white hover:bg-devcation-teal/20 px-3 py-2 rounded-md text-sm font-medium transition-colors ${className}`}>
    {children}
  </a>
);

const MobileNavLink = ({ href, onClick, children }) => (
  <a href={href} onClick={onClick} className="text-gray-200 hover:text-white hover:bg-devcation-teal/20 block px-3 py-2 rounded-md text-base font-medium">
    {children}
  </a>
);

export default Navbar;
