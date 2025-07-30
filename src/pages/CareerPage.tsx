import { useLanguage } from "@/contexts/LanguageContext";
import { GraduationCap,Layers, Award, Target, Users } from "lucide-react";
import CareerCard from "@/components/CareerCard";
import CareerList from "./CareerList";
import { useEffect, useState } from "react";
import axios from "axios";

const CareerPage = () => {
  const { language, t } = useLanguage();
  const [totalCareer, srtTotalCareer] = useState(0)

   useEffect(() => {
      axios
        .get(`http://localhost:8000/api/careers?id=Education`)
        .then((res) => {
          srtTotalCareer(res.data.length)
        })
        .catch((err) => {
          console.error("Error fetching career:", err);
        });
    }, []);
  

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-orange-50">
        {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in">
            <div className="flex justify-center mb-6">
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-full border border-white/20">
                <Layers className="w-12 h-12 text-orange-300" />
              </div>
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold pt-3 mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              {t("career.title")}
            </h1>
            <p className="text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed mb-8">
              {t("career.subtitle")}
            </p>
            <div className="flex flex-wrap justify-center gap-6 mt-8">
              <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
                <span className="text-orange-300 font-bold text-lg">
                  {totalCareer}
                </span>
                <span className="text-blue-200 ml-2">
                  {language === "en" ? "Opportunities" : "अवसर"}
                </span>
              </div>
              
            </div>
          </div>
        </div>
      </div>

      {/* Guidance Options */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Tab Section */}
        <div className="grid gap-6 md:grid-cols-1 mx-auto max-w-7xl">
         <CareerCard/>
        </div>

        {/* Tab-wise Content */}
        <div className="mt-10">
          
            <CareerList
              id="Education"
            />
        </div>
      </div>
    </div>
  );
};

export default CareerPage;
