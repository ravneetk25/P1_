import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MenuIcon, XIcon } from 'lucide-react';
import { Button } from '../ui/Button';
export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };
    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);
  const navLinks = [{
    name: 'Features',
    path: '/'
  }, {
    name: 'Endpoint',
    path: '/endpoint-security'
  }, {
    name: 'Network',
    path: '/network-security'
  }, {
    name: 'Cloud',
    path: '/cloud-security'
  }, {
    name: 'Compliance',
    path: '/compliance-vapt'
  }, {
    name: 'About',
    path: '/about-us'
  }];
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#0A0A12]/90 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <div className="flex items-center">
              <span className="text-2xl font-bold bg-gradient-to-r from-[#29A8FF] to-[#6C63FF] text-transparent bg-clip-text font-montserrat">
                Osto.one
              </span>
            </div>
          </Link>
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navLinks.map(link => <Link key={link.name} to={link.path} className={`text-sm font-medium transition-colors hover:text-[#29A8FF] ${location.pathname === link.path ? 'text-[#29A8FF]' : 'text-[#B0B0B0]'}`}>
                {link.name}
              </Link>)}
          </nav>
          {/* CTA Button - Desktop */}
          <div className="hidden md:block">
            <Link to="/demo">
              <Button>Get Started</Button>
            </Link>
          </div>
          {/* Mobile Menu Button */}
          <button className="md:hidden text-white focus:outline-none" onClick={toggleMenu} aria-label="Toggle menu">
            {isMenuOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
          </button>
        </div>
        {/* Mobile Menu */}
        {isMenuOpen && <div className="md:hidden mt-4 py-4 bg-[#0A0A12]/95 backdrop-blur-sm rounded-lg">
            <nav className="flex flex-col space-y-4 px-4">
              {navLinks.map(link => <Link key={link.name} to={link.path} className={`text-sm font-medium transition-colors hover:text-[#29A8FF] ${location.pathname === link.path ? 'text-[#29A8FF]' : 'text-[#B0B0B0]'}`} onClick={() => setIsMenuOpen(false)}>
                  {link.name}
                </Link>)}
              <Link to="/demo" onClick={() => setIsMenuOpen(false)}>
                <Button fullWidth>Get Started</Button>
              </Link>
            </nav>
          </div>}
      </div>
    </header>;
};