
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin, Users, TreePine, Factory, Award, Target } from 'lucide-react';

const About = () => {
  const { language } = useLanguage();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-orange-500 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              {language === 'en' ? 'About Chhattisgarh' : 'छत्तीसगढ़ के बारे में'}
            </h1>
            <p className="text-xl md:text-2xl mb-4 opacity-90">
              {language === 'en' 
                ? 'The Heart of India - Rich in Culture, Resources, and Heritage' 
                : 'भारत का हृदय - संस्कृति, संसाधन और विरासत से भरपूर'
              }
            </p>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <div className="animate-slide-up">
              <h2 className="text-3xl font-bold text-blue-900 mb-6">
                {language === 'en' ? 'About Our State' : 'हमारे राज्य के बारे में'}
              </h2>
              <div className="prose prose-lg text-gray-700">
                <p className="mb-4">
                  {language === 'en' 
                    ? 'Chhattisgarh, carved out of Madhya Pradesh in 2000, is known as the "Rice Bowl of India" and "Mineral Capital of India". The state is blessed with abundant natural resources, rich cultural heritage, and diverse tribal communities.'
                    : 'छत्तीसगढ़, जो 2000 में मध्य प्रदेश से अलग होकर बना, को "भारत का धान का कटोरा" और "भारत की खनिज राजधानी" के रूप में जाना जाता है। यह राज्य प्रचुर प्राकृतिक संसाधनों, समृद्ध सांस्कृतिक विरासत और विविध आदिवासी समुदायों से भरपूर है।'
                  }
                </p>
                <p>
                  {language === 'en'
                    ? 'With a strong focus on digital governance and citizen-centric services, Chhattisgarh is leading the way in providing efficient and transparent government services to its people.'
                    : 'डिजिटल गवर्नेंस और नागरिक-केंद्रित सेवाओं पर मजबूत फोकस के साथ, छत्तीसगढ़ अपने लोगों को कुशल और पारदर्शी सरकारी सेवाएं प्रदान करने में अग्रणी है।'
                  }
                </p>
              </div>
            </div>
            
            <div className="animate-slide-up stagger-delay-1">
              <Card className="h-full bg-gradient-to-br from-blue-50 to-orange-50 border-none shadow-xl">
                <CardHeader>
                  <CardTitle className="text-2xl text-blue-900">
                    {language === 'en' ? 'Quick Facts' : 'त्वरित तथ्य'}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-orange-500" />
                    <span className="text-gray-700">
                      {language === 'en' ? 'Capital: Raipur' : 'राजधानी: रायपुर'}
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Users className="w-5 h-5 text-blue-500" />
                    <span className="text-gray-700">
                      {language === 'en' ? 'Population: 2.55 Crores' : 'जनसंख्या: 2.55 करोड़'}
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <TreePine className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">
                      {language === 'en' ? 'Forest Cover: 44%' : 'वन आवरण: 44%'}
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Factory className="w-5 h-5 text-purple-500" />
                    <span className="text-gray-700">
                      {language === 'en' ? 'Districts: 28' : 'जिले: 28'}
                    </span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Key Initiatives */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover-lift animate-scale-in">
              <CardHeader>
                <Award className="w-12 h-12 text-blue-900 mb-4" />
                <CardTitle className="text-xl text-blue-900">
                  {language === 'en' ? 'Digital Governance' : 'डिजिटल गवर्नेंस'}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  {language === 'en'
                    ? 'Leading digital transformation with innovative e-governance solutions for citizen welfare.'
                    : 'नागरिक कल्याण के लिए अभिनव ई-गवर्नेंस समाधानों के साथ डिजिटल परिवर्तन का नेतृत्व।'
                  }
                </p>
              </CardContent>
            </Card>

            <Card className="hover-lift animate-scale-in stagger-delay-1">
              <CardHeader>
                <Target className="w-12 h-12 text-orange-500 mb-4" />
                <CardTitle className="text-xl text-orange-600">
                  {language === 'en' ? 'Economic Growth' : 'आर्थिक विकास'}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  {language === 'en'
                    ? 'Focused on sustainable development and economic prosperity for all citizens.'
                    : 'सभी नागरिकों के लिए सतत विकास और आर्थिक समृद्धि पर केंद्रित।'
                  }
                </p>
              </CardContent>
            </Card>

            <Card className="hover-lift animate-scale-in stagger-delay-2">
              <CardHeader>
                <TreePine className="w-12 h-12 text-green-500 mb-4" />
                <CardTitle className="text-xl text-green-600">
                  {language === 'en' ? 'Environmental Conservation' : 'पर्यावरण संरक्षण'}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  {language === 'en'
                    ? 'Committed to preserving natural resources and maintaining ecological balance.'
                    : 'प्राकृतिक संसाधनों के संरक्षण और पारिस्थितिक संतुलन बनाए रखने के लिए प्रतिबद्ध।'
                  }
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
