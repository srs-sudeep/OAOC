import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import { Department, fetchSchemes } from "@/lib/departmentUtils";
import {
  ChevronRight,
  Clock,
  FileText,
  Globe,
  MapPin,
  Phone,
  Star,
  Users,
} from "lucide-react";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

interface DepartmentCardProps {
  department: Department;
}

const DepartmentCard: React.FC<DepartmentCardProps> = ({ department }) => {
  const { language, t } = useLanguage();
  const [schemeCount, setSchemeCount] = useState(0);

  useEffect(() => {
    // Fetch scheme count for this department
    const fetchSchemeCount = async () => {
      try {
        const data = await fetchSchemes(department.id);
        setSchemeCount(data.schemes?.length || 0);
      } catch (error) {
        console.error(`Error fetching schemes for ${department.id}:`, error);
        setSchemeCount(0);
      }
    };

    fetchSchemeCount();
  }, [department.id]);

  return (
    <Card className="h-full transition-all duration-300 hover:shadow-2xl hover:-translate-y-3 border-0 bg-white rounded-2xl overflow-hidden group">
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 h-2"></div>

      <CardHeader className="pb-4 relative">
        <div className="absolute top-4 right-4 -mt-2.5">
          <div className="bg-orange-100 text-orange-600 text-xs font-bold px-3 py-1 rounded-full flex items-center">
            <Star className="w-3 h-3 mr-1" />
            {language === "en" ? "OFFICIAL" : "आधिकारिक"}
          </div>
        </div>

        <div className="flex items-start space-x-4 mt-2">
          <div className="bg-gradient-to-br from-blue-100 to-blue-200 p-4 rounded-2xl group-hover:scale-110 transition-transform duration-300 shadow-lg">
            <div className="text-5xl">{department.icon}</div>
          </div>
          <div className="flex-1 pt-2">
            <CardTitle className="text-xl text-blue-900 group-hover:text-blue-700 transition-colors duration-300 mb-2 leading-tight">
              {department.name[language]}
            </CardTitle>
            <CardDescription className="text-gray-600 leading-relaxed line-clamp-3">
              {department.description[language]}
            </CardDescription>
          </div>
        </div>
      </CardHeader>

      <CardContent className="pt-0 pb-6">
        <div className="space-y-6">
          {/* Department Stats */}
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center p-3 bg-blue-50 rounded-lg border border-blue-100">
              <div className="flex items-center justify-center mb-1">
                <FileText className="w-4 h-4 text-blue-600" />
              </div>
              <div className="text-lg font-bold text-blue-900">
                {schemeCount}
              </div>
              <div className="text-xs text-gray-600">
                {language === "en" ? "Schemes" : "योजनाएं"}
              </div>
            </div>

            <div className="text-center p-3 bg-green-50 rounded-lg border border-green-100">
              <div className="flex items-center justify-center mb-1">
                <Users className="w-4 h-4 text-green-600" />
              </div>
              <div className="text-lg font-bold text-green-900">24/7</div>
              <div className="text-xs text-gray-600">
                {language === "en" ? "Support" : "सहायता"}
              </div>
            </div>

            <div className="text-center p-3 bg-orange-50 rounded-lg border border-orange-100">
              <div className="flex items-center justify-center mb-1">
                <Clock className="w-4 h-4 text-orange-600" />
              </div>
              <div className="text-lg font-bold text-orange-900">7-21</div>
              <div className="text-xs text-gray-600">
                {language === "en" ? "Days" : "दिन"}
              </div>
            </div>
          </div>

          {/* Additional Contact Info */}
          <div className="space-y-2">
            <div className="flex items-center text-sm text-gray-600">
              <Phone className="w-4 h-4 mr-2 text-blue-500" />
              <span className="font-medium">{department.contact.phone}</span>
            </div>
            <div className="flex items-center text-sm text-gray-600">
              <Globe className="w-4 h-4 mr-2 text-orange-500" />
              <span className="font-medium">
                {language === "en" ? "Official Website" : "आधिकारिक वेबसाइट"}
              </span>
            </div>
            <div className="flex items-center text-sm text-gray-600">
              <MapPin className="w-4 h-4 mr-2 text-green-500" />
              <span className="font-medium">
                {department.office.address[language]}
              </span>
            </div>
          </div>

          {/* Action Button */}
          <div className="pt-4 border-t border-gray-100">
            <Link to={`/department/${department.id}`}>
              <Button className="w-full bg-gradient-to-r from-blue-900 to-blue-800 hover:from-blue-800 hover:to-blue-700 text-white font-medium py-3 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300 group">
                <span className="flex items-center justify-center">
                  {t("button.viewSchemes")}
                  <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </Button>
            </Link>
          </div>

          {/* Additional Info */}
          <div className="bg-gradient-to-r from-gray-50 to-blue-50 p-4 rounded-lg border border-gray-100">
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-600 font-medium">
                {language === "en" ? "Department Code:" : "विभाग कोड:"}
              </span>
              <span className="text-blue-900 font-bold uppercase max-w-[120px] truncate overflow-hidden whitespace-nowrap text-right">
                {department.id}
              </span>
            </div>
            <div className="flex items-center justify-between text-sm mt-2">
              <span className="text-gray-600 font-medium">
                {language === "en" ? "Last Updated:" : "अंतिम अपडेट:"}
              </span>
              <span className="text-green-600 font-medium">
                {language === "en" ? "Recently" : "हाल ही में"}
              </span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default DepartmentCard;
