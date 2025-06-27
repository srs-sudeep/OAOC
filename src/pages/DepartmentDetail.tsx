
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import SchemeCard from '@/components/SchemeCard';
import departmentsData from '@/data/departments.json';
import { ArrowLeft } from 'lucide-react';

const DepartmentDetail = () => {
  const { id } = useParams();
  const { language, t } = useLanguage();
  
  const department = departmentsData.departments.find(dept => dept.id === id);

  if (!department) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">
            {language === 'en' ? 'Department Not Found' : 'विभाग नहीं मिला'}
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-8">
          <Link to="/departments" className="inline-flex items-center text-blue-900 hover:text-blue-800 mb-4">
            <ArrowLeft className="w-4 h-4 mr-2" />
            {t('button.backToDepartments')}
          </Link>
          
          <div className="flex items-center space-x-4">
            <div className="text-6xl">{department.icon}</div>
            <div>
              <h1 className="text-4xl font-bold text-blue-900 mb-2">
                {department.name[language]}
              </h1>
              <p className="text-gray-600 text-lg">
                {department.description[language]}
              </p>
            </div>
          </div>
        </div>

        {/* Schemes Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-blue-900 mb-6">
            {t('schemes.title')}
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {department.schemes.map((scheme) => (
              <SchemeCard 
                key={scheme.id} 
                scheme={scheme} 
                departmentId={department.id}
              />
            ))}
          </div>
        </div>

        {/* No schemes message */}
        {department.schemes.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              {language === 'en' 
                ? 'No schemes available in this department currently.' 
                : 'वर्तमान में इस विभाग में कोई योजना उपलब्ध नहीं है।'
              }
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default DepartmentDetail;
