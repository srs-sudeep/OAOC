import { useLanguage } from "@/contexts/LanguageContext";
import {
  ArrowRightLeft,
  Award,
  Clock,
  Info,
  Target,
  Users,
} from "lucide-react";
import SakshamDetails from "./sakshamDetails";
import { useState } from "react";
import SakshamCard from "@/components/SakshamCard";

function Saksham() {
  const [saksham, setSaksham] = useState();
  const { language } = useLanguage();
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-orange-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-4 pt-2.5 bg-gradient-to-r from-white to-orange-200 bg-clip-text text-transparent">
            {language === "en" ? "Aao Saksham Banein" : "आओ सक्षम बनें"}
          </h1>
          <h5 className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed mb-0">
            {language === "en"
              ? "Jahaan har yojana hai ab aapke haath mein!"
              : "जहां हर योजना है अब आपके हाथ में!"}
          </h5>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed mb-8">
            {language === "en"
              ? "Sarkari yojanaon ki jankari, patrata, aur seedhe labh — ab ek hi manch par, saral aur paardarshi tareeke se."
              : "सरकारी योजनाओं की जानकारी, पात्रता, और सीधे लाभ — अब एक ही मंच पर, सरल और पारदर्शी तरीके से।"}
          </p>
          <div className="flex justify-center space-x-4">
            <div className="flex items-center text-blue-200">
              {/* <Users className="w-5 h-5 mr-2" /> */}
              <Clock className="w-6 h-6 mr-2 text-orange-400" />
              <span>
                {language === "en"
                  ? "Samay aur paise ki bachat"
                  : "समय और पैसे की बचत"}
              </span>
            </div>
            <div className="flex items-center text-blue-200">
              {/* <Target className="w-5 h-5 mr-2" /> */}
              <ArrowRightLeft className="w-6 h-6 mr-2 text-orange-400" />
              <span>
                {language === "en"
                  ? "Sarkari yojanaon tak seedha pahunch"
                  : "सरकारी योजनाओं तक सीधा पहुंच"}
              </span>
            </div>
            <div className="flex items-center text-blue-200">
              {/* <Award className="w-5 h-5 mr-2" /> */}
              <Info className="w-6 h-6 mr-2 text-orange-400" />
              <span>
                {language === "en"
                  ? "Updated aur vishwasniya jankari"
                  : "अपडेटेड और विश्वसनीय जानकारी"}
              </span>
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
