
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { Globe } from 'lucide-react';

const Navbar = () => {
  const location = useLocation();
  const { language, setLanguage, t } = useLanguage();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-lg border-b-4 border-orange-500 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-900 to-orange-500 rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform duration-200">
              <span className="text-white font-bold text-sm">🇮🇳</span>
            </div>
            <div className="text-xl font-bold text-blue-900 group-hover:text-orange-600 transition-colors duration-200">
              {t('hero.title')}
            </div>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 transform hover:scale-105 ${
                isActive('/') 
                  ? 'text-blue-900 bg-blue-50 border-b-2 border-blue-900 shadow-sm' 
                  : 'text-gray-700 hover:text-blue-900 hover:bg-blue-50'
              }`}
            >
              {t('nav.home')}
            </Link>
            <Link
              to="/departments"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 transform hover:scale-105 ${
                isActive('/departments') 
                  ? 'text-blue-900 bg-blue-50 border-b-2 border-blue-900 shadow-sm' 
                  : 'text-gray-700 hover:text-blue-900 hover:bg-blue-50'
              }`}
            >
              {t('nav.departments')}
            </Link>
            <Link
              to="/about"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 transform hover:scale-105 ${
                isActive('/about') 
                  ? 'text-blue-900 bg-blue-50 border-b-2 border-blue-900 shadow-sm' 
                  : 'text-gray-700 hover:text-blue-900 hover:bg-blue-50'
              }`}
            >
              {t('nav.about')}
            </Link>
            <Link
              to="/contact"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 transform hover:scale-105 ${
                isActive('/contact') 
                  ? 'text-blue-900 bg-blue-50 border-b-2 border-blue-900 shadow-sm' 
                  : 'text-gray-700 hover:text-blue-900 hover:bg-blue-50'
              }`}
            >
              {t('nav.contact')}
            </Link>
          </div>

          {/* Language Toggle */}
          <div className="flex items-center space-x-4">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setLanguage(language === 'en' ? 'hi' : 'en')}
              className="flex items-center space-x-2 border-blue-900 text-blue-900 hover:bg-blue-50 transform hover:scale-105 transition-all duration-200"
            >
              <Globe className="w-4 h-4" />
              <span>{language === 'en' ? 'हिंदी' : 'English'}</span>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
