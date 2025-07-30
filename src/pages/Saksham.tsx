import { useLanguage } from "@/contexts/LanguageContext";
import {
  ArrowRightLeft,
  Award,
  Clock,
  Info,
  Target,
  Users,
  FileBadge
} from "lucide-react";
import SakshamDetails from "./sakshamDetails";
import { useState } from "react";
import SakshamCard from "@/components/SakshamCard";

function Saksham() {
  const [saksham, setSaksham] = useState();
  const { language,t } = useLanguage();
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-orange-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in">
            <div className="flex justify-center mb-6">
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-full border border-white/20">
                <FileBadge className="w-12 h-12 text-orange-300" />
              </div>
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold pt-3 mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              {t("saksham.title")}
            </h1>
            <p className="text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed mb-8">
              {t("saksham.subtitle")}
            </p>
            <div className="flex flex-wrap justify-center gap-6 mt-8">
              <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
                <span className="text-orange-300 font-bold text-lg">
                  {/* {totalCareer} */}---
                </span>
                <span className="text-blue-200 ml-2">
                  {language === "en" ? "Saksham Initiatives" : "सक्षम पहल"}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Saksham Grid */}
        <div className="mb-12">
          <div className="text-center mb-12">
            {/* 1 */}
            <div className="inline-flex items-center justify-center p-2 bg-blue-100 rounded-full mb-8">
              <div className="flex items-center space-x-2 bg-white px-6 py-3 rounded-full shadow-lg">
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-semibold text-blue-700 uppercase tracking-wider">
                  {language === "en" ? "Browse Saksham" : "सक्षम ब्राउज़ करें"}
                </span>
              </div>
            </div>
            {/* 2 */}
            <h2 className="text-3xl font-bold text-blue-900 mb-4">
              {language === "en" ? "Browse Saksham" : "सक्षम ब्राउज़ करें"}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {language === "en"
                ? "'Saksham' is an initiative that provides guidance to youth for education, career, and self-employment."
                : "'सक्षम' एक ऐसा प्रयास है जो युवाओं को शिक्षा, करियर और स्वरोजगार के लिए मार्गदर्शन प्रदान करता है।"}
            </p>
          </div>
        </div>
        <SakshamDetails />
      </div>
    </div>
  );
}

export default Saksham;
