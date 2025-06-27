
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const Contact = () => {
  const { language } = useLanguage();

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-blue-900 mb-4">
            {language === 'en' ? 'Contact Us' : 'संपर्क करें'}
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {language === 'en' 
              ? 'Get in touch with us for any queries, support, or feedback regarding government services.'
              : 'सरकारी सेवाओं के संबंध में किसी भी प्रश्न, सहायता या फीडबैक के लिए हमसे संपर्क करें।'
            }
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold text-blue-900 mb-6">
              {language === 'en' ? 'Get in Touch' : 'संपर्क में रहें'}
            </h2>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="bg-blue-100 p-2 rounded-full">
                  <Phone className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">
                    {language === 'en' ? 'Phone' : 'फोन'}
                  </h3>
                  <p className="text-gray-600">+91-11-2345-6789</p>
                  <p className="text-gray-600">1800-123-4567 (Toll Free)</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="bg-orange-100 p-2 rounded-full">
                  <Mail className="w-5 h-5 text-orange-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">
                    {language === 'en' ? 'Email' : 'ईमेल'}
                  </h3>
                  <p className="text-gray-600">support@oneapponecitizen.gov.in</p>
                  <p className="text-gray-600">grievance@oneapponecitizen.gov.in</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="bg-green-100 p-2 rounded-full">
                  <MapPin className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">
                    {language === 'en' ? 'Address' : 'पता'}
                  </h3>
                  <p className="text-gray-600">
                    {language === 'en' 
                      ? 'Ministry of Electronics & IT, Electronics Niketan, 6 CGO Complex, Lodhi Road, New Delhi - 110003'
                      : 'इलेक्ट्रॉनिक्स और सूचना प्रौद्योगिकी मंत्रालय, इलेक्ट्रॉनिक्स निकेतन, 6 सीजीओ कॉम्प्लेक्स, लोधी रोड, नई दिल्ली - 110003'
                    }
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="bg-purple-100 p-2 rounded-full">
                  <Clock className="w-5 h-5 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">
                    {language === 'en' ? 'Office Hours' : 'कार्यालय समय'}
                  </h3>
                  <p className="text-gray-600">
                    {language === 'en' 
                      ? 'Monday to Friday: 9:00 AM - 6:00 PM'
                      : 'सोमवार से शुक्रवार: सुबह 9:00 - शाम 6:00'
                    }
                  </p>
                  <p className="text-gray-600">
                    {language === 'en' 
                      ? 'Saturday: 9:00 AM - 1:00 PM'
                      : 'शनिवार: सुबह 9:00 - दोपहर 1:00'
                    }
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold text-blue-900 mb-6">
              {language === 'en' ? 'Frequently Asked Questions' : 'अक्सर पूछे जाने वाले प्रश्न'}
            </h2>
            
            <div className="space-y-4">
              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="font-semibold text-gray-800 mb-2">
                  {language === 'en' 
                    ? 'How do I track my application status?'
                    : 'मैं अपने आवेदन की स्थिति कैसे ट्रैक करूं?'
                  }
                </h3>
                <p className="text-gray-600 text-sm">
                  {language === 'en' 
                    ? 'You can track your application using the reference number provided after submission.'
                    : 'आप सबमिशन के बाद दिए गए संदर्भ संख्या का उपयोग करके अपने आवेदन को ट्रैक कर सकते हैं।'
                  }
                </p>
              </div>

              <div className="border-l-4 border-orange-500 pl-4">
                <h3 className="font-semibold text-gray-800 mb-2">
                  {language === 'en' 
                    ? 'What documents are required for schemes?'
                    : 'योजनाओं के लिए कौन से दस्तावेज आवश्यक हैं?'
                  }
                </h3>
                <p className="text-gray-600 text-sm">
                  {language === 'en' 
                    ? 'Required documents vary by scheme. Please check the specific scheme details for exact requirements.'
                    : 'आवश्यक दस्तावेज योजना के अनुसार अलग होते हैं। सटीक आवश्यकताओं के लिए कृपया विशिष्ट योजना विवरण देखें।'
                  }
                </p>
              </div>

              <div className="border-l-4 border-green-500 pl-4">
                <h3 className="font-semibold text-gray-800 mb-2">
                  {language === 'en' 
                    ? 'How long does application processing take?'
                    : 'आवेदन प्रसंस्करण में कितना समय लगता है?'
                  }
                </h3>
                <p className="text-gray-600 text-sm">
                  {language === 'en' 
                    ? 'Processing time varies by department and scheme complexity. Typically 15-30 working days.'
                    : 'प्रसंस्करण समय विभाग और योजना की जटिलता के अनुसार अलग होता है। आमतौर पर 15-30 कार्य दिवस।'
                  }
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
