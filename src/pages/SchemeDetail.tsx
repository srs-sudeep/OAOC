
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import departmentsData from '@/data/departments.json';
import { AlertCircle, ArrowLeft, CheckCircle, Clock, Download, FileText, Mail, Phone, Settings, Star, Users } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';

const SchemeDetail = () => {
  const { departmentId, schemeId } = useParams();
  const { language, t } = useLanguage();
  
  const department = departmentsData.departments.find(dept => dept.id === departmentId);
  const scheme = department?.schemes.find(s => s.id === schemeId);

  if (!department || !scheme) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-orange-50 flex items-center justify-center pt-16">
        <div className="text-center p-8 bg-white rounded-2xl shadow-2xl border border-gray-100 max-w-md mx-4">
          <div className="text-6xl mb-6">📄</div>
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            {language === 'en' ? 'Scheme Not Found' : 'योजना नहीं मिली'}
          </h1>
          <p className="text-gray-600 mb-6">
            {language === 'en' 
              ? 'The requested scheme could not be found or may have been discontinued.' 
              : 'अनुरोधित योजना नहीं मिल सकी या बंद हो सकती है।'
            }
          </p>
          <div className="flex flex-col gap-3">
            <Link to="/departments">
              <Button className="w-full bg-gradient-to-r from-blue-900 to-blue-800 hover:from-blue-800 hover:to-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl">
                {t('button.backToDepartments')}
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" className="w-full border-blue-900 text-blue-900 hover:bg-blue-50 px-8 py-3 rounded-lg font-medium transition-all duration-300">
                {language === 'en' ? 'Contact Support' : 'सहायता संपर्क'}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-orange-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link 
            to={`/department/${departmentId}`} 
            className="inline-flex items-center text-blue-200 hover:text-white mb-6 transition-colors duration-200 group"
          >
            <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform duration-200" />
            <span className="font-medium">{language === 'en' ? 'Back to Department' : 'विभाग पर वापस जाएं'}</span>
          </Link>
          
          <div className="grid lg:grid-cols-3 gap-8 items-start">
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-orange-500 px-3 py-1 rounded-full text-sm font-semibold">
                  {language === 'en' ? 'GOVERNMENT SCHEME' : 'सरकारी योजना'}
                </div>
                <div className="bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full text-sm border border-white/20">
                  {department.name[language]}
                </div>
              </div>
              
              <h1 className="text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                {scheme.name[language]}
              </h1>
              
              <p className="text-xl text-blue-100 leading-relaxed mb-6">
                {scheme.description[language]}
              </p>
              
              <div className="flex flex-wrap gap-4">
                <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20 flex items-center">
                  <Star className="w-4 h-4 mr-2 text-orange-300" />
                  <span className="text-blue-200 font-medium text-sm">
                    {language === 'en' ? 'Active Scheme' : 'सक्रिय योजना'}
                  </span>
                </div>
                <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20 flex items-center">
                  <Clock className="w-4 h-4 mr-2 text-orange-300" />
                  <span className="text-blue-200 font-medium text-sm">
                    {language === 'en' ? '7-21 Days Processing' : '7-21 दिन प्रसंस्करण'}
                  </span>
                </div>
              </div>
            </div>
            
            {/* Quick Action Card */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6">
              <h3 className="text-xl font-bold mb-4 text-center">
                {language === 'en' ? 'Quick Actions' : 'त्वरित कार्य'}
              </h3>
              <div className="space-y-3">
                <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300">
                  <FileText className="w-5 h-5 mr-2" />
                  {t('button.applyNow')}
                </Button>
                <Button variant="outline" className="w-full border-white/30 text-black hover:bg-white/10 py-3 rounded-lg font-medium transition-all duration-300">
                  <Download className="w-5 h-5 mr-2" />
                  {language === 'en' ? 'Download Form' : 'फॉर्म डाउनलोड'}
                </Button>
                <Button variant="outline" className="w-full border-white/30 text-black hover:bg-white/10 py-3 rounded-lg font-medium transition-all duration-300">
                  <Phone className="w-5 h-5 mr-2" />
                  {language === 'en' ? 'Contact Help' : 'सहायता संपर्क'}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Key Information Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-green-500 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="flex items-center mb-4">
              <div className="bg-green-100 p-3 rounded-full">
                <CheckCircle className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="ml-3 text-lg font-semibold text-gray-800">
                {language === 'en' ? 'Key Benefits' : 'मुख्य लाभ'}
              </h3>
            </div>
            <p className="text-sm text-gray-600">
              {scheme.benefits[language].length} {language === 'en' ? 'benefits available' : 'लाभ उपलब्ध'}
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-blue-500 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="flex items-center mb-4">
              <div className="bg-blue-100 p-3 rounded-full">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="ml-3 text-lg font-semibold text-gray-800">
                {language === 'en' ? 'Eligibility' : 'पात्रता'}
              </h3>
            </div>
            <p className="text-sm text-gray-600">
              {scheme.eligibility[language].length} {language === 'en' ? 'criteria to meet' : 'मापदंड पूरे करें'}
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-orange-500 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="flex items-center mb-4">
              <div className="bg-orange-100 p-3 rounded-full">
                <Settings className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="ml-3 text-lg font-semibold text-gray-800">
                {language === 'en' ? 'Application Steps' : 'आवेदन चरण'}
              </h3>
            </div>
            <p className="text-sm text-gray-600">
              {scheme.process[language].length} {language === 'en' ? 'simple steps' : 'आसान चरण'}
            </p>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Benefits */}
            <Card className="border-0 shadow-xl rounded-2xl overflow-hidden">
              <div className="bg-gradient-to-r from-green-600 to-green-700 h-2"></div>
              <CardHeader className="bg-green-50">
                <CardTitle className="flex items-center text-green-700 text-2xl">
                  <CheckCircle className="w-7 h-7 mr-3" />
                  {t('scheme.benefits')}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <div className="grid gap-4">
                  {scheme.benefits[language].map((benefit, index) => (
                    <div key={index} className="flex items-start space-x-4 p-4 bg-green-50 rounded-lg border border-green-100 hover:bg-green-100 transition-colors duration-300">
                      <div className="bg-green-500 rounded-full p-1 mt-1">
                        <CheckCircle className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-gray-700 leading-relaxed font-medium">{benefit}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Eligibility */}
            <Card className="border-0 shadow-xl rounded-2xl overflow-hidden">
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 h-2"></div>
              <CardHeader className="bg-blue-50">
                <CardTitle className="flex items-center text-blue-700 text-2xl">
                  <Users className="w-7 h-7 mr-3" />
                  {t('scheme.eligibility')}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <div className="grid gap-4">
                  {scheme.eligibility[language].map((criteria, index) => (
                    <div key={index} className="flex items-start space-x-4 p-4 bg-blue-50 rounded-lg border border-blue-100 hover:bg-blue-100 transition-colors duration-300">
                      <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mt-1">
                        {index + 1}
                      </div>
                      <span className="text-gray-700 leading-relaxed font-medium">{criteria}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Application Process */}
            <Card className="border-0 shadow-xl rounded-2xl overflow-hidden">
              <div className="bg-gradient-to-r from-orange-600 to-orange-700 h-2"></div>
              <CardHeader className="bg-orange-50">
                <CardTitle className="flex items-center text-orange-700 text-2xl">
                  <Settings className="w-7 h-7 mr-3" />
                  {t('scheme.process')}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <div className="relative">
                  <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-orange-300 to-orange-500"></div>
                  <div className="space-y-6">
                    {scheme.process[language].map((step, index) => (
                      <div key={index} className="relative flex items-start space-x-6">
                        <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-lg font-bold shadow-lg z-10">
                          {index + 1}
                        </div>
                        <div className="flex-1 bg-orange-50 p-6 rounded-lg border border-orange-100 hover:bg-orange-100 transition-colors duration-300">
                          <span className="text-gray-700 leading-relaxed font-medium">{step}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Important Notice */}
            <Card className="border-0 shadow-xl rounded-2xl overflow-hidden">
              <div className="bg-gradient-to-r from-red-500 to-pink-500 h-2"></div>
              <CardHeader className="bg-red-50">
                <CardTitle className="flex items-center text-red-700">
                  <AlertCircle className="w-6 h-6 mr-3" />
                  {language === 'en' ? 'Important Notice' : 'महत्वपूर्ण सूचना'}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-3 text-sm text-gray-700">
                  <p className="font-medium">
                    {language === 'en' 
                      ? 'Please ensure all documents are valid and up-to-date before applying.'
                      : 'कृपया आवेदन करने से पहले सुनिश्चित करें कि सभी दस्तावेज वैध और अद्यतन हैं।'
                    }
                  </p>
                  <p>
                    {language === 'en' 
                      ? 'Incomplete applications will be rejected automatically.'
                      : 'अधूरे आवेदन स्वचालित रूप से अस्वीकार कर दिए जाएंगे।'
                    }
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Contact Support */}
            <Card className="border-0 shadow-xl rounded-2xl overflow-hidden">
              <div className="bg-gradient-to-r from-purple-600 to-purple-700 h-2"></div>
              <CardHeader className="bg-purple-50">
                <CardTitle className="flex items-center text-purple-700">
                  <Phone className="w-6 h-6 mr-3" />
                  {language === 'en' ? 'Need Help?' : 'सहायता चाहिए?'}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 text-sm">
                    <Phone className="w-4 h-4 text-purple-600" />
                    <span className="text-gray-700 font-medium">1800-233-4567</span>
                  </div>
                  <div className="flex items-center space-x-3 text-sm">
                    <Mail className="w-4 h-4 text-purple-600" />
                    <span className="text-gray-700 font-medium">{department.id}@cg.gov.in</span>
                  </div>
                  <Button variant="outline" className="w-full mt-4 border-purple-600 text-purple-600 hover:bg-purple-50">
                    {language === 'en' ? 'Contact Support' : 'सहायता संपर्क'}
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Download Documents */}
            <Card className="border-0 shadow-xl rounded-2xl overflow-hidden">
              <div className="bg-gradient-to-r from-indigo-600 to-indigo-700 h-2"></div>
              <CardHeader className="bg-indigo-50">
                <CardTitle className="flex items-center text-indigo-700">
                  <Download className="w-6 h-6 mr-3" />
                  {language === 'en' ? 'Downloads' : 'डाउनलोड'}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-3">
                  <Button variant="outline" className="w-full justify-start border-indigo-200 text-indigo-600 hover:bg-indigo-50">
                    <FileText className="w-4 h-4 mr-2" />
                    {language === 'en' ? 'Application Form' : 'आवेदन फॉर्म'}
                  </Button>
                  <Button variant="outline" className="w-full justify-start border-indigo-200 text-indigo-600 hover:bg-indigo-50">
                    <FileText className="w-4 h-4 mr-2" />
                    {language === 'en' ? 'Document Checklist' : 'दस्तावेज सूची'}
                  </Button>
                  <Button variant="outline" className="w-full justify-start border-indigo-200 text-indigo-600 hover:bg-indigo-50">
                    <FileText className="w-4 h-4 mr-2" />
                    {language === 'en' ? 'Guidelines' : 'दिशानिर्देश'}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Bottom Action Section */}
        <div className="mt-16 bg-gradient-to-r from-blue-900 to-indigo-800 text-white rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">
            {language === 'en' ? 'Ready to Apply?' : 'आवेदन के लिए तैयार हैं?'}
          </h3>
          <p className="text-blue-200 mb-6 max-w-2xl mx-auto">
            {language === 'en' 
              ? 'Your application will be processed by the Chhattisgarh Government. Make sure you have all required documents ready.'
              : 'आपका आवेदन छत्तीसगढ़ सरकार द्वारा संसाधित किया जाएगा। सुनिश्चित करें कि आपके पास सभी आवश्यक दस्तावेज तैयार हैं।'
            }
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-medium shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300">
              <FileText className="w-5 h-5 mr-2" />
              {t('button.applyNow')}
            </Button>
            <Button size="lg" variant="outline" className="border-white/30 text-black hover:bg-white/10 px-8 py-4 rounded-lg font-medium transition-all duration-300">
              <Download className="w-5 h-5 mr-2" />
              {language === 'en' ? 'Download Form' : 'फॉर्म डाउनलोड'}
            </Button>
          </div>
          <p className="text-xs text-blue-300 mt-4">
            {language === 'en' 
              ? 'Application will redirect to the official Chhattisgarh Government portal' 
              : 'आवेदन आपको आधिकारिक छत्तीसगढ़ सरकार पोर्टल पर भेज देगा'
            }
          </p>
        </div>
      </div>
    </div>
  );
};

export default SchemeDetail;
