
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { ChevronRight } from 'lucide-react';

interface Department {
  id: string;
  name: {
    en: string;
    hi: string;
  };
  icon: string;
  description: {
    en: string;
    hi: string;
  };
  schemes: any[];
}

interface DepartmentCardProps {
  department: Department;
}

const DepartmentCard: React.FC<DepartmentCardProps> = ({ department }) => {
  const { language, t } = useLanguage();

  return (
    <Card className="h-full transition-all duration-300 hover:shadow-lg hover:scale-105 border-l-4 border-l-orange-500">
      <CardHeader>
        <div className="flex items-center space-x-3">
          <div className="text-4xl">{department.icon}</div>
          <div>
            <CardTitle className="text-xl text-blue-900">
              {department.name[language]}
            </CardTitle>
            <CardDescription className="text-gray-600 mt-1">
              {department.description[language]}
            </CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="text-sm text-gray-500">
            {department.schemes.length} {language === 'en' ? 'schemes available' : 'योजनाएं उपलब्ध'}
          </div>
          <Link to={`/department/${department.id}`}>
            <Button className="w-full bg-blue-900 hover:bg-blue-800 text-white">
              {t('button.viewSchemes')}
              <ChevronRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
};

export default DepartmentCard;
