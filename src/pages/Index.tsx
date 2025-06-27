
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import DepartmentCard from '@/components/DepartmentCard';
import departmentsData from '@/data/departments.json';
import { ArrowRight, Users, Shield, Globe, MapPin, Phone, Mail } from 'lucide-react';

const Index = () => {
  const { language, t } = useLanguage();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-orange-500 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-900/30 to-transparent"></div>
        
        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-orange-400/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-blue-300/20 rounded-full blur-xl animate-pulse"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="text-center animate-fade-in">
            <div className="mb-6 animate-slide-up">
              <span className="inline-block px-4 py-2 bg-orange-500/20 backdrop-blur-sm rounded-full text-sm font-medium border border-orange-300/30">
                {language === 'en' ? '🏛️ Government of Chhattisgarh' : '🏛️ छत्तीसगढ़ सरकार'}
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-slide-up bg-gradient-to-r from-white via-orange-100 to-white bg-clip-text text-transparent">
              {t('hero.title')}
            </h1>
            
            <p className="text-xl md:text-3xl mb-4 opacity-90 animate-slide-up stagger-delay-1 font-light">
              {t('hero.subtitle')}
            </p>
            
            <p className="text-lg mb-12 opacity-80 max-w-4xl mx-auto animate-slide-up stagger-delay-2 leading-relaxed">
              {t('hero.description')}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center animate-slide-up stagger-delay-3">
              <Link to="/departments">
                <Button size="lg" className="bg-white text-blue-900 hover:bg-gray-100 px-10 py-4 text-lg font-semibold transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-white/20">
                  {t('nav.departments')}
                  <ArrowRight className="w-6 h-6 ml-3" />
                </Button>
              </Link>
              
              <Link to="/about">
                <Button size="lg" variant="outline" className="bg-white text-blue-900 hover:bg-gray-100 px-10 py-4 text-lg font-semibold transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-white/20">
                  {t('button.learnMore')}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Chhattisgarh Stats Section */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">
              {language === 'en' ? 'Chhattisgarh at a Glance' : 'छत्तीसगढ़ एक नज़र में'}
            </h2>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center p-8 rounded-2xl bg-white shadow-xl hover-lift animate-scale-in border-l-4 border-blue-900">
              <div className="text-3xl font-bold text-blue-900 mb-2">28</div>
              <p className="text-gray-600 font-medium">
                {language === 'en' ? 'Districts' : 'जिले'}
              </p>
            </div>
            
            <div className="text-center p-8 rounded-2xl bg-white shadow-xl hover-lift animate-scale-in stagger-delay-1 border-l-4 border-orange-500">
              <div className="text-3xl font-bold text-orange-600 mb-2">2.55 Cr</div>
              <p className="text-gray-600 font-medium">
                {language === 'en' ? 'Population' : 'जनसंख्या'}
              </p>
            </div>
            
            <div className="text-center p-8 rounded-2xl bg-white shadow-xl hover-lift animate-scale-in stagger-delay-2 border-l-4 border-green-500">
              <div className="text-3xl font-bold text-green-600 mb-2">44%</div>
              <p className="text-gray-600 font-medium">
                {language === 'en' ? 'Forest Cover' : 'वन आवरण'}
              </p>
            </div>
            
            <div className="text-center p-8 rounded-2xl bg-white shadow-xl hover-lift animate-scale-in stagger-delay-3 border-l-4 border-purple-500">
              <div className="text-3xl font-bold text-purple-600 mb-2">15%</div>
              <p className="text-gray-600 font-medium">
                {language === 'en' ? 'Mineral Production' : 'खनिज उत्पादन'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold text-blue-900 mb-6">
              {language === 'en' ? 'Digital Chhattisgarh Features' : 'डिजिटल छत्तीसगढ़ सुविधाएं'}
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              {language === 'en' 
                ? 'Empowering citizens of Chhattisgarh with seamless access to government services' 
                : 'छत्तीसगढ़ के नागरिकों को सरकारी सेवाओं तक निर्बाध पहुंच के साथ सशक्त बनाना'
              }
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-10">
            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200 hover-lift animate-scale-in group">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-900 to-blue-700 rounded-full flex items-center justify-center mx-auto mb-6 transform group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Users className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-blue-900 mb-4">
                {language === 'en' ? 'Citizen Centric' : 'नागरिक केंद्रित'}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {language === 'en' 
                  ? 'Services designed with Chhattisgarh citizen needs at the center' 
                  : 'छत्तीसगढ़ के नागरिक आवश्यकताओं को केंद्र में रखकर डिज़ाइन की गई सेवाएं'
                }
              </p>
            </div>
            
            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-orange-50 to-orange-100 border border-orange-200 hover-lift animate-scale-in stagger-delay-1 group">
              <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-400 rounded-full flex items-center justify-center mx-auto mb-6 transform group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Shield className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-orange-600 mb-4">
                {language === 'en' ? 'Secure & Reliable' : 'सुरक्षित और विश्वसनीय'}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {language === 'en' 
                  ? 'Bank-grade security for all your data and transactions in Chhattisgarh' 
                  : 'छत्तीसगढ़ में आपके सभी डेटा और लेनदेन के लिए बैंक-ग्रेड सुरक्षा'
                }
              </p>
            </div>
            
            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-green-50 to-green-100 border border-green-200 hover-lift animate-scale-in stagger-delay-2 group">
              <div className="w-20 h-20 bg-gradient-to-br from-green-600 to-green-500 rounded-full flex items-center justify-center mx-auto mb-6 transform group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Globe className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-green-600 mb-4">
                {language === 'en' ? 'Multi-lingual' : 'बहुभाषी'}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {language === 'en' 
                  ? 'Available in Hindi and English for better accessibility in Chhattisgarh' 
                  : 'छत्तीसगढ़ में बेहतर पहुंच के लिए हिंदी और अंग्रेजी में उपलब्ध'
                }
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Departments Preview */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold text-blue-900 mb-6">
              {t('departments.title')}
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              {t('departments.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {departmentsData.departments.slice(0, 6).map((department, index) => (
              <div key={department.id} className={`animate-scale-in stagger-delay-${Math.min(index + 1, 4)}`}>
                <DepartmentCard department={department} />
              </div>
            ))}
          </div>

          <div className="text-center animate-fade-in">
            <Link to="/departments">
              <Button size="lg" className="bg-gradient-to-r from-blue-900 to-blue-800 hover:from-blue-800 hover:to-blue-700 text-white px-12 py-4 text-lg font-semibold transform hover:scale-105 transition-all duration-300 hover-glow shadow-2xl">
                {language === 'en' ? 'View All Departments' : 'सभी विभाग देखें'}
                <ArrowRight className="w-6 h-6 ml-3" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="animate-scale-in">
              <MapPin className="w-12 h-12 mx-auto mb-4 text-orange-400" />
              <h3 className="text-xl font-semibold mb-2">
                {language === 'en' ? 'Address' : 'पता'}
              </h3>
              <p className="text-blue-100">
                {language === 'en' 
                  ? 'Secretariat, Raipur, Chhattisgarh - 492001' 
                  : 'सचिवालय, रायपुर, छत्तीसगढ़ - 492001'
                }
              </p>
            </div>
            
            <div className="animate-scale-in stagger-delay-1">
              <Phone className="w-12 h-12 mx-auto mb-4 text-orange-400" />
              <h3 className="text-xl font-semibold mb-2">
                {language === 'en' ? 'Helpline' : 'हेल्पलाइन'}
              </h3>
              <p className="text-blue-100">1800-233-4567</p>
            </div>
            
            <div className="animate-scale-in stagger-delay-2">
              <Mail className="w-12 h-12 mx-auto mb-4 text-orange-400" />
              <h3 className="text-xl font-semibold mb-2">
                {language === 'en' ? 'Email' : 'ईमेल'}
              </h3>
              <p className="text-blue-100">support@cgstate.gov.in</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
