
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { ROUTES } from '@/constants/routes';
import { Button } from '@/components/ui/enhanced-button';

const LandingHeader: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-xl py-3 shadow-sm border-b border-gray-200' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-6 max-w-7xl flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <Link to={ROUTES.LANDING} className="flex items-center transition-opacity duration-300 hover:opacity-80">
            <img
              src="/sn-logo.png"
              alt="SocialNext"
              className="h-10 w-auto"
            />
          </Link>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-2">
          <a href="#features" className="px-4 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-all duration-200">
            Features
          </a>
          <a href="#testimonials" className="px-4 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-all duration-200">
            Stories
          </a>
          <a href="#pricing" className="px-4 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-all duration-200">
            Pricing
          </a>
          
          <div className="ml-6 pl-6 border-l border-gray-300">
            <Link to={ROUTES.SIGNIN}>
              <Button 
                variant="ghost"
                size="sm"
                className="mr-3 text-gray-700 hover:text-gray-900 hover:bg-gray-50 font-medium"
              >
                Sign In
              </Button>
            </Link>
            <Link to={ROUTES.SIGNUP}>
              <Button 
                variant="primary"
                size="sm"
                className="bg-primary hover:bg-primary-700 text-white rounded-lg px-6 font-semibold shadow-md hover:shadow-lg transition-all duration-300"
              >
                Get Started
              </Button>
            </Link>
          </div>
        </nav>
        
        {/* Mobile menu button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden text-gray-700 hover:text-gray-900 hover:bg-gray-50 p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </Button>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-xl shadow-lg border-b border-gray-200 absolute top-full left-0 right-0 py-6 px-6 animate-accordion-down">
          <div className="flex flex-col space-y-4">
            <a 
              href="#features" 
              className="text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-lg px-4 py-3 text-lg font-medium transition-all duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </a>
            <a 
              href="#testimonials" 
              className="text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-lg px-4 py-3 text-lg font-medium transition-all duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Stories
            </a>
            <a 
              href="#pricing" 
              className="text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-lg px-4 py-3 text-lg font-medium transition-all duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Pricing
            </a>
            
            <div className="pt-4 border-t border-gray-200 space-y-3">
              <Link to={ROUTES.SIGNIN}>
                <Button 
                  variant="ghost"
                  size="lg"
                  fullWidth
                  className="justify-start text-gray-700 hover:text-gray-900 hover:bg-gray-50 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Sign In
                </Button>
              </Link>
              <Link to={ROUTES.SIGNUP}>
                <Button 
                  variant="primary"
                  size="lg"
                  fullWidth
                  className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold shadow-md"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default LandingHeader;
