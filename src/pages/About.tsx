
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import { Award, Building2, Calendar, Factory, Globe, MapPin, Shield, Star, Target, TreePine, Users, Zap } from 'lucide-react';

const About = () => {
  const { language } = useLanguage();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-orange-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <div className="mb-8">
              <div className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-md rounded-full text-sm font-medium border border-white/20 shadow-lg">
                <span className="text-2xl mr-3">🏛️</span>
                <span className="bg-gradient-to-r from-white to-orange-200 bg-clip-text text-transparent font-bold">
                  {language === 'en' ? 'State of Chhattisgarh' : 'छत्तीसगढ़ राज्य'}
                </span>
                <div className="ml-3 px-2 py-1 bg-orange-500 rounded-full">
                  <span className="text-xs font-bold">EST. 2000</span>
                </div>
              </div>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-white to-orange-200 bg-clip-text text-transparent">
              {language === 'en' ? 'About Chhattisgarh' : 'छत्तीसगढ़ के बारे में'}
            </h1>
            
            <p className="text-2xl md:text-3xl mb-6 opacity-90 font-light bg-gradient-to-r from-blue-100 to-orange-100 bg-clip-text text-transparent">
              {language === 'en' 
                ? 'The Heart of India - Rich in Culture, Resources, and Heritage' 
                : 'भारत का हृदय - संस्कृति, संसाधन और विरासत से भरपूर'
              }
            </p>

            <div className="flex flex-wrap justify-center gap-6 mt-8">
              <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
                <span className="text-orange-300 font-bold text-lg">2000</span>
                <span className="text-blue-200 ml-2">{language === 'en' ? 'Founded' : 'स्थापना'}</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
                <span className="text-orange-300 font-bold text-lg">25+</span>
                <span className="text-blue-200 ml-2">{language === 'en' ? 'Years Progress' : 'वर्षों की प्रगति'}</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
                <span className="text-orange-300 font-bold text-lg">#1</span>
                <span className="text-blue-200 ml-2">{language === 'en' ? 'Rice Production' : 'चावल उत्पादन'}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 mb-20">
            <div className="animate-slide-up">
              <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-8">
                {language === 'en' ? 'About Our State' : 'हमारे राज्य के बारे में'}
              </h2>
              <div className="prose prose-lg text-gray-700 space-y-6">
                <p className="text-xl leading-relaxed">
                  {language === 'en' 
                    ? 'Chhattisgarh, carved out of Madhya Pradesh in 2000, is known as the "Rice Bowl of India" and "Mineral Capital of India". The state is blessed with abundant natural resources, rich cultural heritage, and diverse tribal communities.'
                    : 'छत्तीसगढ़, जो 2000 में मध्य प्रदेश से अलग होकर बना, को "भारत का धान का कटोरा" और "भारत की खनिज राजधानी" के रूप में जाना जाता है। यह राज्य प्रचुर प्राकृतिक संसाधनों, समृद्ध सांस्कृतिक विरासत और विविध आदिवासी समुदायों से भरपूर है।'
                  }
                </p>
                <p className="text-lg leading-relaxed">
                  {language === 'en'
                    ? 'With a strong focus on digital governance and citizen-centric services, Chhattisgarh is leading the way in providing efficient and transparent government services to its people through innovative technology solutions.'
                    : 'डिजिटल गवर्नेंस और नागरिक-केंद्रित सेवाओं पर मजबूत फोकस के साथ, छत्तीसगढ़ अभिनव तकनीकी समाधानों के माध्यम से अपने लोगों को कुशल और पारदर्शी सरकारी सेवाएं प्रदान करने में अग्रणी है।'
                  }
                </p>

                {/* Key Highlights */}
                <div className="grid grid-cols-2 gap-4 mt-8">
                  <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                    <div className="flex items-center mb-2">
                      <Calendar className="w-5 h-5 text-blue-600 mr-2" />
                      <span className="font-bold text-blue-900">{language === 'en' ? 'Established' : 'स्थापना'}</span>
                    </div>
                    <p className="text-blue-700 font-medium">1 November 2000</p>
                  </div>
                  <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
                    <div className="flex items-center mb-2">
                      <Star className="w-5 h-5 text-orange-600 mr-2" />
                      <span className="font-bold text-orange-900">{language === 'en' ? 'Status' : 'स्थिति'}</span>
                    </div>
                    <p className="text-orange-700 font-medium">{language === 'en' ? '26th State of India' : 'भारत का 26वां राज्य'}</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="animate-slide-up stagger-delay-1">
              <Card className="h-full bg-gradient-to-br from-blue-50 to-orange-50 border-0 shadow-2xl rounded-2xl overflow-hidden">
                <div className="bg-gradient-to-r from-blue-600 to-blue-700 h-2"></div>
                <CardHeader className="pb-6">
                  <CardTitle className="text-3xl text-blue-900 flex items-center">
                    <Building2 className="w-8 h-8 mr-3" />
                    {language === 'en' ? 'Quick Facts' : 'त्वरित तथ्य'}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid gap-4">
                    <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm border border-gray-100">
                      <div className="flex items-center space-x-3">
                        <MapPin className="w-6 h-6 text-orange-500" />
                        <span className="text-gray-700 font-medium">{language === 'en' ? 'Capital' : 'राजधानी'}</span>
                      </div>
                      <span className="text-blue-900 font-bold">{language === 'en' ? 'Raipur' : 'रायपुर'}</span>
                    </div>
                    
                    <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm border border-gray-100">
                      <div className="flex items-center space-x-3">
                        <Users className="w-6 h-6 text-blue-500" />
                        <span className="text-gray-700 font-medium">{language === 'en' ? 'Population' : 'जनसंख्या'}</span>
                      </div>
                      <span className="text-blue-900 font-bold">2.55 {language === 'en' ? 'Crores' : 'करोड़'}</span>
                    </div>
                    
                    <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm border border-gray-100">
                      <div className="flex items-center space-x-3">
                        <TreePine className="w-6 h-6 text-green-500" />
                        <span className="text-gray-700 font-medium">{language === 'en' ? 'Forest Cover' : 'वन आवरण'}</span>
                      </div>
                      <span className="text-blue-900 font-bold">44%</span>
                    </div>
                    
                    <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm border border-gray-100">
                      <div className="flex items-center space-x-3">
                        <Factory className="w-6 h-6 text-purple-500" />
                        <span className="text-gray-700 font-medium">{language === 'en' ? 'Districts' : 'जिले'}</span>
                      </div>
                      <span className="text-blue-900 font-bold">28</span>
                    </div>

                    <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm border border-gray-100">
                      <div className="flex items-center space-x-3">
                        <Globe className="w-6 h-6 text-indigo-500" />
                        <span className="text-gray-700 font-medium">{language === 'en' ? 'Area' : 'क्षेत्रफल'}</span>
                      </div>
                      <span className="text-blue-900 font-bold">1,35,192 km²</span>
                    </div>
                  </div>

                  {/* Achievement Badge */}
                  <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white p-4 rounded-lg text-center">
                    <Award className="w-8 h-8 mx-auto mb-2" />
                    <p className="font-bold">{language === 'en' ? 'Rice Bowl of India' : 'भारत का धान का कटोरा'}</p>
                    <p className="text-sm opacity-90">{language === 'en' ? 'Largest rice producer' : 'सबसे बड़ा चावल उत्पादक'}</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Key Initiatives */}
          <div className="mb-20">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
                {language === 'en' ? 'Key Initiatives' : 'मुख्य पहल'}
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                {language === 'en' 
                  ? 'Leading the way in sustainable development, digital governance, and citizen welfare through innovative programs.'
                  : 'अभिनव कार्यक्रमों के माध्यम से सतत विकास, डिजिटल गवर्नेंस और नागरिक कल्याण में अग्रणी।'
                }
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="border-0 shadow-xl hover:shadow-2xl hover:-translate-y-3 transition-all duration-300 animate-scale-in rounded-2xl overflow-hidden group">
                <div className="bg-gradient-to-r from-blue-600 to-blue-700 h-2"></div>
                <CardHeader className="pb-4">
                  <div className="bg-blue-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Award className="w-8 h-8 text-blue-900" />
                  </div>
                  <CardTitle className="text-2xl text-blue-900">
                    {language === 'en' ? 'Digital Governance' : 'डिजिटल गवर्नेंस'}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 leading-relaxed">
                    {language === 'en'
                      ? 'Leading digital transformation with innovative e-governance solutions, making government services accessible to every citizen through technology.'
                      : 'अभिनव ई-गवर्नेंस समाधानों के साथ डिजिटल परिवर्तन का नेतृत्व, तकनीक के माध्यम से हर नागरिक को सरकारी सेवाएं सुलभ बनाना।'
                    }
                  </p>
                  <div className="mt-4 flex items-center text-sm text-blue-600">
                    <Zap className="w-4 h-4 mr-2" />
                    <span className="font-medium">{language === 'en' ? 'Tech-Driven Solutions' : 'तकनीकी समाधान'}</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-xl hover:shadow-2xl hover:-translate-y-3 transition-all duration-300 animate-scale-in stagger-delay-1 rounded-2xl overflow-hidden group">
                <div className="bg-gradient-to-r from-orange-600 to-orange-700 h-2"></div>
                <CardHeader className="pb-4">
                  <div className="bg-orange-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Target className="w-8 h-8 text-orange-600" />
                  </div>
                  <CardTitle className="text-2xl text-orange-600">
                    {language === 'en' ? 'Economic Growth' : 'आर्थिक विकास'}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 leading-relaxed">
                    {language === 'en'
                      ? 'Focused on sustainable development and economic prosperity for all citizens through strategic industrial development and job creation.'
                      : 'रणनीतिक औद्योगिक विकास और रोजगार सृजन के माध्यम से सभी नागरिकों के लिए सतत विकास और आर्थिक समृद्धि पर केंद्रित।'
                    }
                  </p>
                  <div className="mt-4 flex items-center text-sm text-orange-600">
                    <Building2 className="w-4 h-4 mr-2" />
                    <span className="font-medium">{language === 'en' ? 'Industrial Development' : 'औद्योगिक विकास'}</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-xl hover:shadow-2xl hover:-translate-y-3 transition-all duration-300 animate-scale-in stagger-delay-2 rounded-2xl overflow-hidden group">
                <div className="bg-gradient-to-r from-green-600 to-green-700 h-2"></div>
                <CardHeader className="pb-4">
                  <div className="bg-green-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <TreePine className="w-8 h-8 text-green-600" />
                  </div>
                  <CardTitle className="text-2xl text-green-600">
                    {language === 'en' ? 'Environmental Conservation' : 'पर्यावरण संरक्षण'}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 leading-relaxed">
                    {language === 'en'
                      ? 'Committed to preserving natural resources and maintaining ecological balance while promoting sustainable development practices.'
                      : 'सतत विकास प्रथाओं को बढ़ावा देते हुए प्राकृतिक संसाधनों के संरक्षण और पारिस्थितिक संतुलन बनाए रखने के लिए प्रतिबद्ध।'
                    }
                  </p>
                  <div className="mt-4 flex items-center text-sm text-green-600">
                    <Shield className="w-4 h-4 mr-2" />
                    <span className="font-medium">{language === 'en' ? 'Sustainable Practices' : 'सतत प्रथाएं'}</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Vision & Mission */}
          <div className="bg-gradient-to-r from-blue-900 to-indigo-800 text-white rounded-3xl p-12 text-center">
            <h2 className="text-4xl font-bold mb-8">
              {language === 'en' ? 'Our Vision & Mission' : 'हमारा दृष्टिकोण और मिशन'}
            </h2>
            
            <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20">
                <div className="bg-orange-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-orange-300">
                  {language === 'en' ? 'Vision' : 'दृष्टिकोण'}
                </h3>
                <p className="text-blue-100 leading-relaxed">
                  {language === 'en' 
                    ? 'To become a progressive, self-reliant, and digitally empowered state that ensures prosperity, equality, and sustainable development for all its citizens.'
                    : 'एक प्रगतिशील, आत्मनिर्भर और डिजिटल रूप से सशक्त राज्य बनना जो अपने सभी नागरिकों के लिए समृद्धि, समानता और सतत विकास सुनिश्चित करे।'
                  }
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20">
                <div className="bg-orange-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-orange-300">
                  {language === 'en' ? 'Mission' : 'मिशन'}
                </h3>
                <p className="text-blue-100 leading-relaxed">
                  {language === 'en' 
                    ? 'To deliver transparent, efficient, and citizen-centric governance through innovative technology while preserving our cultural heritage and natural resources.'
                    : 'हमारी सांस्कृतिक विरासत और प्राकृतिक संसाधनों का संरक्षण करते हुए अभिनव तकनीक के माध्यम से पारदर्शी, कुशल और नागरिक-केंद्रित शासन प्रदान करना।'
                  }
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
