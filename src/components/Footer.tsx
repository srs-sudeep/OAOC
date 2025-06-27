
import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  const { language, t } = useLanguage();

  return (
    <footer className="bg-gradient-to-r from-blue-900 to-blue-800 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-orange-400 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">🇮🇳</span>
              </div>
              <div className="text-xl font-bold">
                {t('hero.title')}
              </div>
            </div>
            <p className="text-blue-100 text-sm leading-relaxed">
              {language === 'en' 
                ? 'Digital governance platform providing seamless access to all government services for Indian citizens.'
                : 'भारतीय नागरिकों के लिए सभी सरकारी सेवाओं तक निर्बाध पहुंच प्रदान करने वाला डिजिटल गवर्नेंस प्लेटफॉर्म।'
              }
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-orange-300">
              {language === 'en' ? 'Quick Links' : 'त्वरित लिंक'}
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-blue-100 hover:text-orange-300 transition-colors duration-200">
                  {t('nav.home')}
                </Link>
              </li>
              <li>
                <Link to="/departments" className="text-blue-100 hover:text-orange-300 transition-colors duration-200">
                  {t('nav.departments')}
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-blue-100 hover:text-orange-300 transition-colors duration-200">
                  {t('nav.about')}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-blue-100 hover:text-orange-300 transition-colors duration-200">
                  {t('nav.contact')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-orange-300">
              {language === 'en' ? 'Services' : 'सेवाएं'}
            </h3>
            <ul className="space-y-2 text-sm">
              <li className="text-blue-100">
                {language === 'en' ? 'Online Application' : 'ऑनलाइन आवेदन'}
              </li>
              <li className="text-blue-100">
                {language === 'en' ? 'Document Verification' : 'दस्तावेज सत्यापन'}
              </li>
              <li className="text-blue-100">
                {language === 'en' ? 'Status Tracking' : 'स्थिति ट्रैकिंग'}
              </li>
              <li className="text-blue-100">
                {language === 'en' ? 'Grievance Redressal' : 'शिकायत निवारण'}
              </li>
              <li className="text-blue-100">
                {language === 'en' ? 'Digital Payments' : 'डिजिटल भुगतान'}
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-orange-300">
              {language === 'en' ? 'Contact Us' : 'संपर्क करें'}
            </h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-orange-300" />
                <span className="text-blue-100">1800-123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-orange-300" />
                <span className="text-blue-100">help@oneapponecitizen.gov.in</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-orange-300 mt-0.5" />
                <span className="text-blue-100">
                  {language === 'en' 
                    ? 'Ministry of Electronics & IT, Electronics Niketan, 6 CGO Complex, New Delhi - 110003'
                    : 'इलेक्ट्रॉनिक्स और सूचना प्रौद्योगिकी मंत्रालय, इलेक्ट्रॉनिक्स निकेतन, 6 सीजीओ कॉम्प्लेक्स, नई दिल्ली - 110003'
                  }
                </span>
              </div>
            </div>

            {/* Social Media */}
            <div className="pt-4">
              <h4 className="text-sm font-medium text-orange-300 mb-3">
                {language === 'en' ? 'Follow Us' : 'हमें फॉलो करें'}
              </h4>
              <div className="flex space-x-3">
                <a href="#" className="w-8 h-8 bg-blue-700 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors duration-200">
                  <Facebook className="w-4 h-4" />
                </a>
                <a href="#" className="w-8 h-8 bg-blue-700 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors duration-200">
                  <Twitter className="w-4 h-4" />
                </a>
                <a href="#" className="w-8 h-8 bg-blue-700 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors duration-200">
                  <Instagram className="w-4 h-4" />
                </a>
                <a href="#" className="w-8 h-8 bg-blue-700 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors duration-200">
                  <Youtube className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-blue-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-blue-100">
              © 2024 {language === 'en' ? 'Government of India. All rights reserved.' : 'भारत सरकार। सभी अधिकार सुरक्षित।'}
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-blue-100 hover:text-orange-300 transition-colors duration-200">
                {language === 'en' ? 'Privacy Policy' : 'गोपनीयता नीति'}
              </a>
              <a href="#" className="text-blue-100 hover:text-orange-300 transition-colors duration-200">
                {language === 'en' ? 'Terms of Service' : 'सेवा नियम'}
              </a>
              <a href="#" className="text-blue-100 hover:text-orange-300 transition-colors duration-200">
                {language === 'en' ? 'Accessibility' : 'सुगम्यता'}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
