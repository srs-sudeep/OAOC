
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { ExternalLink } from 'lucide-react';

interface Scheme {
  id: string;
  name: {
    en: string;
    hi: string;
  };
  description: {
    en: string;
    hi: string;
  };
  benefits: {
    en: string[];
    hi: string[];
  };
  eligibility: {
    en: string[];
    hi: string[];
  };
  process: {
    en: string[];
    hi: string[];
  };
}

interface SchemeCardProps {
  scheme: Scheme;
  departmentId: string;
}

const SchemeCard: React.FC<SchemeCardProps> = ({ scheme, departmentId }) => {
  const { language, t } = useLanguage();

  return (
    <Card className="h-full transition-all duration-300 hover:shadow-lg border-l-4 border-l-blue-900">
      <CardHeader>
        <CardTitle className="text-lg text-blue-900 mb-2">
          {scheme.name[language]}
        </CardTitle>
        <CardDescription className="text-gray-600 line-clamp-3">
          {scheme.description[language]}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="space-y-2">
            <h4 className="font-semibold text-sm text-orange-600">{t('scheme.benefits')}</h4>
            <ul className="text-sm text-gray-600 space-y-1">
              {scheme.benefits[language].slice(0, 2).map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  {benefit}
                </li>
              ))}
            </ul>
          </div>
          
          <div className="pt-4 border-t">
            <Link to={`/scheme/${departmentId}/${scheme.id}`}>
              <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">
                {t('button.applyNow')}
                <ExternalLink className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default SchemeCard;
