
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import { ExternalLink } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router-dom';

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
    <Card className="h-full transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border-0 bg-white rounded-xl overflow-hidden group">
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 h-2"></div>
      <CardHeader className="pb-4">
        <div className="flex items-start justify-between mb-3">
          <div className="bg-blue-100 p-3 rounded-full group-hover:bg-blue-200 transition-colors duration-300">
            <ExternalLink className="w-6 h-6 text-blue-600" />
          </div>
          <div className="bg-orange-100 text-orange-600 text-xs font-semibold px-3 py-1 rounded-full">
            {language === 'en' ? 'ACTIVE' : 'सक्रिय'}
          </div>
        </div>
        <CardTitle className="text-xl text-blue-900 mb-3 group-hover:text-blue-700 transition-colors duration-300 leading-tight">
          {scheme.name[language]}
        </CardTitle>
        <CardDescription className="text-gray-600 line-clamp-3 leading-relaxed">
          {scheme.description[language]}
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="space-y-6">
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
              <h4 className="font-semibold text-sm text-orange-600 uppercase tracking-wide">
                {t('scheme.benefits')}
              </h4>
            </div>
            <ul className="text-sm text-gray-700 space-y-2">
              {scheme.benefits[language].slice(0, 2).map((benefit, index) => (
                <li key={index} className="flex items-start space-x-2">
                  <span className="text-green-500 mt-1 flex-shrink-0">✓</span>
                  <span className="leading-relaxed">{benefit}</span>
                </li>
              ))}
            </ul>
            {scheme.benefits[language].length > 2 && (
              <p className="text-xs text-gray-500 italic">
                +{scheme.benefits[language].length - 2} {language === 'en' ? 'more benefits' : 'और लाभ'}
              </p>
            )}
          </div>
          
          <div className="border-t border-gray-100 pt-6">
            <Link to={`/scheme/${departmentId}/${scheme.id}`}>
              <Button className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-medium py-3 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300">
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
