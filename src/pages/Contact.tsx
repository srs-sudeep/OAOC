
import { useLanguage } from '@/contexts/LanguageContext';
import { Clock, FileText, Mail, MapPin, MessageCircle, Phone, Shield, Users } from 'lucide-react';

const Contact = () => {
  const { language } = useLanguage();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-orange-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-white to-orange-200 bg-clip-text text-transparent">
              {language === 'en' ? 'Contact Us' : 'संपर्क करें'}
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              {language === 'en' 
                ? 'Connect with Chhattisgarh Government for digital services, support, and assistance. We are here to serve you 24/7.'
                : 'डिजिटल सेवाओं, सहायता और सहारे के लिए छत्तीसगढ़ सरकार से जुड़ें। हम आपकी सेवा के लिए 24/7 यहाँ हैं।'
              }
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Quick Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-blue-500 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            <div className="flex items-center mb-4">
              <div className="bg-blue-100 p-3 rounded-full">
                <Phone className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="ml-3 text-lg font-semibold text-gray-800">
                {language === 'en' ? 'Call Us' : 'कॉल करें'}
              </h3>
            </div>
            <p className="text-gray-600 font-medium">1800-233-4567</p>
            <p className="text-sm text-gray-500">
              {language === 'en' ? 'Toll Free 24/7' : 'टोल फ्री 24/7'}
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-orange-500 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            <div className="flex items-center mb-4">
              <div className="bg-orange-100 p-3 rounded-full">
                <Mail className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="ml-3 text-lg font-semibold text-gray-800">
                {language === 'en' ? 'Email Us' : 'ईमेल करें'}
              </h3>
            </div>
            <p className="text-gray-600 font-medium text-sm">help@cg.gov.in</p>
            <p className="text-sm text-gray-500">
              {language === 'en' ? 'Quick Response' : 'त्वरित उत्तर'}
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-green-500 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            <div className="flex items-center mb-4">
              <div className="bg-green-100 p-3 rounded-full">
                <MessageCircle className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="ml-3 text-lg font-semibold text-gray-800">
                {language === 'en' ? 'Live Chat' : 'लाइव चैट'}
              </h3>
            </div>
            <p className="text-gray-600 font-medium">
              {language === 'en' ? 'Available Now' : 'अभी उपलब्ध'}
            </p>
            <p className="text-sm text-gray-500">
              {language === 'en' ? 'Instant Help' : 'तुरंत सहायता'}
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-purple-500 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            <div className="flex items-center mb-4">
              <div className="bg-purple-100 p-3 rounded-full">
                <FileText className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="ml-3 text-lg font-semibold text-gray-800">
                {language === 'en' ? 'Submit Ticket' : 'टिकट जमा करें'}
              </h3>
            </div>
            <p className="text-gray-600 font-medium">
              {language === 'en' ? 'Track Issues' : 'समस्या ट्रैक करें'}
            </p>
            <p className="text-sm text-gray-500">
              {language === 'en' ? 'Priority Support' : 'प्राथमिकता सहायता'}
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Contact Information */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
              <div className="flex items-center mb-8">
                <div className="bg-gradient-to-r from-blue-600 to-orange-500 p-3 rounded-full">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <div className="ml-4">
                  <h2 className="text-3xl font-bold text-blue-900">
                    {language === 'en' ? 'Get in Touch' : 'संपर्क में रहें'}
                  </h2>
                  <p className="text-gray-600 mt-1">
                    {language === 'en' ? 'Chhattisgarh Government Digital Services' : 'छत्तीसगढ़ सरकार डिजिटल सेवाएं'}
                  </p>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="flex items-start space-x-4 p-4 bg-blue-50 rounded-lg">
                    <div className="bg-blue-500 p-2 rounded-full flex-shrink-0">
                      <Phone className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-2">
                        {language === 'en' ? 'Phone Numbers' : 'फोन नंबर'}
                      </h3>
                      <p className="text-gray-700 font-medium">+91-771-2221-234</p>
                      <p className="text-gray-700 font-medium">1800-233-4567 (Toll Free)</p>
                      <p className="text-sm text-gray-600 mt-1">
                        {language === 'en' ? 'Available 24/7 for emergencies' : 'आपातकाल के लिए 24/7 उपलब्ध'}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 p-4 bg-orange-50 rounded-lg">
                    <div className="bg-orange-500 p-2 rounded-full flex-shrink-0">
                      <Mail className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-2">
                        {language === 'en' ? 'Email Addresses' : 'ईमेल पते'}
                      </h3>
                      <p className="text-gray-700 font-medium">support@cg.gov.in</p>
                      <p className="text-gray-700 font-medium">grievance@cg.gov.in</p>
                      <p className="text-gray-700 font-medium">cm@cg.gov.in</p>
                      <p className="text-sm text-gray-600 mt-1">
                        {language === 'en' ? 'Response within 24 hours' : '24 घंटे में उत्तर'}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4 p-4 bg-green-50 rounded-lg">
                    <div className="bg-green-500 p-2 rounded-full flex-shrink-0">
                      <MapPin className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-2">
                        {language === 'en' ? 'Office Address' : 'कार्यालय का पता'}
                      </h3>
                      <p className="text-gray-700 text-sm leading-relaxed">
                        {language === 'en' 
                          ? 'Chhattisgarh State Electronics Development Corporation, Collectorate Complex, Civil Lines, Raipur, Chhattisgarh - 492001'
                          : 'छत्तीसगढ़ राज्य इलेक्ट्रॉनिक्स विकास निगम, कलेक्टोरेट कॉम्प्लेक्स, सिविल लाइन्स, रायपुर, छत्तीसगढ़ - 492001'
                        }
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 p-4 bg-purple-50 rounded-lg">
                    <div className="bg-purple-500 p-2 rounded-full flex-shrink-0">
                      <Clock className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-2">
                        {language === 'en' ? 'Office Hours' : 'कार्यालय समय'}
                      </h3>
                      <p className="text-gray-700 text-sm">
                        {language === 'en' 
                          ? 'Monday to Friday: 10:00 AM - 6:00 PM'
                          : 'सोमवार से शुक्रवार: सुबह 10:00 - शाम 6:00'
                        }
                      </p>
                      <p className="text-gray-700 text-sm">
                        {language === 'en' 
                          ? 'Saturday: 10:00 AM - 2:00 PM'
                          : 'शनिवार: सुबह 10:00 - दोपहर 2:00'
                        }
                      </p>
                      <p className="text-red-600 text-sm mt-1">
                        {language === 'en' ? 'Closed on Sundays & Holidays' : 'रविवार और छुट्टियों में बंद'}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced FAQ Section */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-r from-orange-500 to-red-500 p-3 rounded-full">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h2 className="ml-3 text-2xl font-bold text-blue-900">
                  {language === 'en' ? 'Quick Help' : 'त्वरित सहायता'}
                </h2>
              </div>
              
              <div className="space-y-4">
                <div className="border-l-4 border-blue-500 pl-4 py-3 bg-blue-50 rounded-r-lg">
                  <h3 className="font-semibold text-gray-800 mb-2">
                    {language === 'en' 
                      ? 'How to track application status?'
                      : 'आवेदन की स्थिति कैसे ट्रैक करें?'
                    }
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {language === 'en' 
                      ? 'Use your application reference number in the tracking portal or call our helpline.'
                      : 'ट्रैकिंग पोर्टल में अपने आवेदन संदर्भ संख्या का उपयोग करें या हमारी हेल्पलाइन पर कॉल करें।'
                    }
                  </p>
                </div>

                <div className="border-l-4 border-orange-500 pl-4 py-3 bg-orange-50 rounded-r-lg">
                  <h3 className="font-semibold text-gray-800 mb-2">
                    {language === 'en' 
                      ? 'Required documents for schemes?'
                      : 'योजनाओं के लिए आवश्यक दस्तावेज?'
                    }
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {language === 'en' 
                      ? 'Aadhaar, Income Certificate, Residence Proof, Caste Certificate (if applicable).'
                      : 'आधार, आय प्रमाण पत्र, निवास प्रमाण, जाति प्रमाण पत्र (यदि लागू हो)।'
                    }
                  </p>
                </div>

                <div className="border-l-4 border-green-500 pl-4 py-3 bg-green-50 rounded-r-lg">
                  <h3 className="font-semibold text-gray-800 mb-2">
                    {language === 'en' 
                      ? 'Processing time for applications?'
                      : 'आवेदन प्रसंस्करण समय?'
                    }
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {language === 'en' 
                      ? 'Typically 7-21 working days depending on the scheme and verification requirements.'
                      : 'योजना और सत्यापन आवश्यकताओं के आधार पर आमतौर पर 7-21 कार्य दिवस।'
                    }
                  </p>
                </div>

                <div className="border-l-4 border-purple-500 pl-4 py-3 bg-purple-50 rounded-r-lg">
                  <h3 className="font-semibold text-gray-800 mb-2">
                    {language === 'en' 
                      ? 'How to register complaints?'
                      : 'शिकायत कैसे दर्ज करें?'
                    }
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {language === 'en' 
                      ? 'Use online grievance portal, call helpline, or visit nearest citizen service center.'
                      : 'ऑनलाइन शिकायत पोर्टल का उपयोग करें, हेल्पलाइन पर कॉल करें, या निकटतम नागरिक सेवा केंद्र जाएं।'
                    }
                  </p>
                </div>
              </div>
            </div>

            {/* Emergency Contacts */}
            <div className="bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-2xl shadow-xl p-6">
              <h3 className="text-xl font-bold mb-4">
                {language === 'en' ? 'Emergency Contacts' : 'आपातकालीन संपर्क'}
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span>{language === 'en' ? 'Police Emergency' : 'पुलिस आपातकाल'}</span>
                  <span className="font-bold">100</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>{language === 'en' ? 'Medical Emergency' : 'चिकित्सा आपातकाल'}</span>
                  <span className="font-bold">108</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>{language === 'en' ? 'Fire Emergency' : 'अग्निशमन आपातकाल'}</span>
                  <span className="font-bold">101</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>{language === 'en' ? 'Women Helpline' : 'महिला हेल्पलाइन'}</span>
                  <span className="font-bold">1091</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Department Contacts Section */}
        <div className="mt-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">
              {language === 'en' ? 'Department Contacts' : 'विभाग संपर्क'}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {language === 'en' 
                ? 'Direct contact information for specific government departments in Chhattisgarh'
                : 'छत्तीसगढ़ में विशिष्ट सरकारी विभागों की प्रत्यक्ष संपर्क जानकारी'
              }
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: language === 'en' ? 'Revenue Department' : 'राजस्व विभाग',
                phone: '0771-2234-567',
                email: 'revenue@cg.gov.in',
                color: 'blue'
              },
              {
                name: language === 'en' ? 'Social Welfare' : 'समाज कल्याण',
                phone: '0771-2235-678',
                email: 'welfare@cg.gov.in',
                color: 'green'
              },
              {
                name: language === 'en' ? 'Agriculture Department' : 'कृषि विभाग',
                phone: '0771-2236-789',
                email: 'agriculture@cg.gov.in',
                color: 'orange'
              },
              {
                name: language === 'en' ? 'Health Department' : 'स्वास्थ्य विभाग',
                phone: '0771-2237-890',
                email: 'health@cg.gov.in',
                color: 'red'
              },
              {
                name: language === 'en' ? 'Education Department' : 'शिक्षा विभाग',
                phone: '0771-2238-901',
                email: 'education@cg.gov.in',
                color: 'purple'
              },
              {
                name: language === 'en' ? 'Transport Department' : 'परिवहन विभाग',
                phone: '0771-2239-012',
                email: 'transport@cg.gov.in',
                color: 'indigo'
              }
            ].map((dept, index) => (
              <div key={index} className={`bg-white rounded-xl shadow-lg p-6 border-l-4 border-${dept.color}-500 hover:shadow-xl transition-all duration-300 hover:-translate-y-1`}>
                <h3 className="font-bold text-gray-800 mb-3">{dept.name}</h3>
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-gray-600">
                    <Phone className="w-4 h-4 mr-2" />
                    {dept.phone}
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Mail className="w-4 h-4 mr-2" />
                    {dept.email}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
