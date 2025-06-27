
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import DepartmentCard from '@/components/DepartmentCard';
import departmentsData from '@/data/departments.json';

const Departments = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-blue-900 mb-4">
            {t('departments.title')}
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {t('departments.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {departmentsData.departments.map((department) => (
            <DepartmentCard key={department.id} department={department} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Departments;
