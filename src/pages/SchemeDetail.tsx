
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import departmentsData from '@/data/departments.json';
import { ArrowLeft, CheckCircle, Users, FileText, Settings } from 'lucide-react';

const SchemeDetail = () => {
  const { departmentId, schemeId } = useParams();
  const { language, t } = useLanguage();
  
  const department = departmentsData.departments.find(dept => dept.id === departmentId);
  const scheme = department?.schemes.find(s => s.id === schemeId);

  if (!department || !scheme) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">
            {language === 'en' ? 'Scheme Not Found' : 'योजना नहीं मिली'}
          </h1>
          <Link to="/departments">
            <Button className="bg-blue-900 hover:bg-blue-800 text-white">
              {t('button.backToDepartments')}
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-8">
          <Link 
            to={`/department/${departmentId}`} 
            className="inline-flex items-center text-blue-900 hover:text-blue-800 mb-4"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            {language === 'en' ? 'Back to Schemes' : 'योजनाओं पर वापस जाएं'}
          </Link>
          
          <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-l-orange-500">
            <h1 className="text-3xl font-bold text-blue-900 mb-2">
              {scheme.name[language]}
            </h1>
            <p className="text-gray-600 text-lg mb-4">
              {scheme.description[language]}
            </p>
            <div className="flex items-center text-sm text-gray-500">
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
                {department.name[language]}
              </span>
            </div>
          </div>
        </div>

        {/* Scheme Details */}
        <div className="grid gap-6">
          {/* Benefits */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-green-700">
                <CheckCircle className="w-5 h-5 mr-2" />
                {t('scheme.benefits')}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {scheme.benefits[language].map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-green-500 mr-3 mt-1">✓</span>
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Eligibility */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-blue-700">
                <Users className="w-5 h-5 mr-2" />
                {t('scheme.eligibility')}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {scheme.eligibility[language].map((criteria, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-blue-500 mr-3 mt-1">•</span>
                    <span className="text-gray-700">{criteria}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Application Process */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-orange-700">
                <Settings className="w-5 h-5 mr-2" />
                {t('scheme.process')}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ol className="space-y-3">
                {scheme.process[language].map((step, index) => (
                  <li key={index} className="flex items-start">
                    <span className="bg-orange-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-1">
                      {index + 1}
                    </span>
                    <span className="text-gray-700">{step}</span>
                  </li>
                ))}
              </ol>
            </CardContent>
          </Card>
        </div>

        {/* Apply Button */}
        <div className="mt-8 text-center">
          <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3">
            <FileText className="w-5 h-5 mr-2" />
            {t('button.applyNow')}
          </Button>
          <p className="text-sm text-gray-500 mt-2">
            {language === 'en' 
              ? 'Application will redirect to the official government portal' 
              : 'आवेदन आपको आधिकारिक सरकारी पोर्टल पर भेज देगा'
            }
          </p>
        </div>
      </div>
    </div>
  );
};

export default SchemeDetail;
