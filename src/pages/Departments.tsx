
import DepartmentCard from '@/components/DepartmentCard';
import { useLanguage } from '@/contexts/LanguageContext';
import { Department, fetchDepartments, getTotalSchemeCount } from '@/lib/departmentUtils';
import { Building2, FileText, Shield, Users } from 'lucide-react';
import { useEffect, useState } from 'react';

const Departments = () => {
  const { language, t } = useLanguage();
  const [departments, setDepartments] = useState<Department[]>([]);
  const [totalSchemes, setTotalSchemes] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        const [departmentsData, totalSchemesCount] = await Promise.all([
          fetchDepartments(),
          getTotalSchemeCount()
        ]);
        setDepartments(departmentsData.departments);
        setTotalSchemes(totalSchemesCount);
      } catch (error) {
        console.error('Error loading departments data:', error);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-orange-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-900 mx-auto"></div>
          <p className="mt-4 text-blue-900 font-medium">
            {language === 'en' ? 'Loading departments...' : 'विभाग लोड हो रहे हैं...'}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-orange-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in">
            <div className="flex justify-center mb-6">
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-full border border-white/20">
                <Building2 className="w-12 h-12 text-orange-300" />
              </div>
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              {t('departments.title')}
            </h1>
            <p className="text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed mb-8">
              {t('departments.subtitle')}
            </p>
            <div className="flex flex-wrap justify-center gap-6 mt-8">
              <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
                <span className="text-orange-300 font-bold text-lg">{departments.length}</span>
                <span className="text-blue-200 ml-2">{language === 'en' ? 'Departments' : 'विभाग'}</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
                <span className="text-orange-300 font-bold text-lg">{totalSchemes}</span>
                <span className="text-blue-200 ml-2">{language === 'en' ? 'Active Schemes' : 'सक्रिय योजनाएं'}</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
                <span className="text-orange-300 font-bold text-lg">24/7</span>
                <span className="text-blue-200 ml-2">{language === 'en' ? 'Digital Services' : 'डिजिटल सेवाएं'}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Features Section */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          <div className="text-center p-6 bg-white rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            <div className="bg-blue-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <Building2 className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="font-bold text-blue-900 mb-2">
              {language === 'en' ? 'Government Departments' : 'सरकारी विभाग'}
            </h3>
            <p className="text-sm text-gray-600">
              {language === 'en' ? 'Official departments of Chhattisgarh Government' : 'छत्तीसगढ़ सरकार के आधिकारिक विभाग'}
            </p>
          </div>

          <div className="text-center p-6 bg-white rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            <div className="bg-orange-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <FileText className="w-8 h-8 text-orange-600" />
            </div>
            <h3 className="font-bold text-blue-900 mb-2">
              {language === 'en' ? 'Digital Applications' : 'डिजिटल आवेदन'}
            </h3>
            <p className="text-sm text-gray-600">
              {language === 'en' ? 'Apply online for government schemes' : 'सरकारी योजनाओं के लिए ऑनलाइन आवेदन करें'}
            </p>
          </div>

          <div className="text-center p-6 bg-white rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            <div className="bg-green-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <Users className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="font-bold text-blue-900 mb-2">
              {language === 'en' ? 'Citizen Services' : 'नागरिक सेवाएं'}
            </h3>
            <p className="text-sm text-gray-600">
              {language === 'en' ? 'Comprehensive services for all citizens' : 'सभी नागरिकों के लिए व्यापक सेवाएं'}
            </p>
          </div>

          <div className="text-center p-6 bg-white rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            <div className="bg-purple-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <Shield className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="font-bold text-blue-900 mb-2">
              {language === 'en' ? 'Secure & Verified' : 'सुरक्षित और सत्यापित'}
            </h3>
            <p className="text-sm text-gray-600">
              {language === 'en' ? 'Government verified and secure platform' : 'सरकारी सत्यापित और सुरक्षित प्लेटफॉर्म'}
            </p>
          </div>
        </div>

        {/* Department Grid */}
        <div className="mb-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">
              {language === 'en' ? 'Browse Departments' : 'विभाग ब्राउज़ करें'}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {language === 'en' 
                ? 'Explore various government departments and their schemes designed to serve the citizens of Chhattisgarh.'
                : 'छत्तीसगढ़ के नागरिकों की सेवा के लिए डिज़ाइन किए गए विभिन्न सरकारी विभागों और उनकी योजनाओं का अन्वेषण करें।'
              }
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {departments.map((department) => (
              <DepartmentCard key={department.id} department={department} />
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-900 to-indigo-800 text-white rounded-2xl p-12 text-center">
          <h3 className="text-3xl font-bold mb-4">
            {language === 'en' ? 'Need Help Finding a Department?' : 'विभाग खोजने में सहायता चाहिए?'}
          </h3>
          <p className="text-blue-200 mb-8 text-lg max-w-2xl mx-auto">
            {language === 'en' 
              ? 'Our support team is available 24/7 to help you navigate government services and find the right department for your needs.'
              : 'हमारी सहायता टीम सरकारी सेवाओं में नेविगेट करने और आपकी आवश्यकताओं के लिए सही विभाग खोजने में आपकी सहायता के लिए 24/7 उपलब्ध है।'
            }
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-medium shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300 inline-flex items-center justify-center"
            >
              {language === 'en' ? 'Contact Support' : 'सहायता संपर्क'}
            </a>
            <a 
              href="tel:1800-233-4567" 
              className="border border-white/30 text-white hover:bg-white/10 px-8 py-4 rounded-lg font-medium transition-all duration-300 inline-flex items-center justify-center"
            >
              {language === 'en' ? 'Call: 1800-233-4567' : 'कॉल: 1800-233-4567'}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Departments;
