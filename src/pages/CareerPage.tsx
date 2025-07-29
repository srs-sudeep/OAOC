import { useLanguage } from "@/contexts/LanguageContext";
import {
  GraduationCap,
  BriefcaseBusiness,
  Building2,
  Award,
  Target,
  Users,
} from "lucide-react";
import CareerCard from "@/components/CareerCard";
import CareerList from "./CareerList";
import { useState } from "react";

const CareerPage = () => {
  const { language } = useLanguage();
  const [activeTab, setActiveTab] = useState("education");

  const guidanceOptions = [
    {
      id: "education",
      title: language === "en" ? "Education" : "शिक्षा",
      description:
        language === "en"
          ? "Explore courses, scholarships, and exam options after Class 10/12/Graduation."
          : "कक्षा 10/12/स्नातक के बाद उपलब्ध पाठ्यक्रमों, छात्रवृत्तियों और परीक्षाओं की जानकारी प्राप्त करें।",
      icon: <GraduationCap className="w-10 h-10 text-blue-900" />,
    },
    // {
    //   id: "job",
    //   title: language === "en" ? "Job Opportunities" : "नौकरी के अवसर",
    //   description:
    //     language === "en"
    //       ? "Get guidance on government exams, private jobs, and skill development programs."
    //       : "सरकारी परीक्षाओं, निजी नौकरियों और कौशल विकास कार्यक्रमों पर मार्गदर्शन प्राप्त करें।",
    //   icon: <BriefcaseBusiness className="w-10 h-10 text-orange-600" />,
    // },
    // {
    //   id: "business",
    //   title: language === "en" ? "Business" : "व्यवसाय",
    //   description:
    //     language === "en"
    //       ? "Start your entrepreneurial journey with MSME schemes and startup support."
    //       : "एमएसएमई योजनाओं और स्टार्टअप सहायता के साथ अपना व्यवसाय शुरू करें।",
    //   icon: <Building2 className="w-10 h-10 text-green-700" />,
    // },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-orange-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-4 pt-2.5 bg-gradient-to-r from-white to-orange-200 bg-clip-text text-transparent">
            {language === "en" ? "Career Guidance" : "करियर मार्गदर्शन"}
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed mb-8">
            {language === "en"
              ? "Empower your future with comprehensive career guidance. Explore education, job opportunities, and business development paths tailored for success."
              : "व्यापक करियर मार्गदर्शन के साथ अपने भविष्य को सशक्त बनाएं। सफलता के लिए तैयार किए गए शिक्षा, नौकरी के अवसर और व्यापार विकास के पथों का अन्वेषण करें।"}
          </p>
          <div className="flex justify-center space-x-4">
            <div className="flex items-center text-blue-200">
              <Users className="w-5 h-5 mr-2" />
              <span>
                {language === "en" ? "Expert Guidance" : "विशेषज्ञ मार्गदर्शन"}
              </span>
            </div>
            <div className="flex items-center text-blue-200">
              <Target className="w-5 h-5 mr-2" />
              <span>
                {language === "en" ? "Goal-Oriented" : "लक्ष्य-उन्मुख"}
              </span>
            </div>
            <div className="flex items-center text-blue-200">
              <Award className="w-5 h-5 mr-2" />
              <span>
                {language === "en" ? "Success Focused" : "सफलता केंद्रित"}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Guidance Options */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Tab Section */}
        <div className="grid gap-6 md:grid-cols-1 mx-auto max-w-2xl">
          {guidanceOptions.map((option) => (
            <CareerCard
              key={option.id}
              id={option.id}
              title={option.title}
              description={option.description}
              icon={option.icon}
              active={activeTab === option.id}
              onClick={setActiveTab}
            />
          ))}
        </div>

        {/* Tab-wise Content */}
        {/* <div className="mt-10">
          {activeTab === "education" && (
            <CareerList
              id={activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}
            />
          )}
          {activeTab === "job" && (
            <div className="text-center text-gray-600 text-lg">
              {language === "en"
                ? "Job-related content coming soon..."
                : "नौकरी से संबंधित जानकारी शीघ्र आ रही है..."}
            </div>
          )}
          {activeTab === "business" && (
            <div className="text-center text-gray-600 text-lg">
              {language === "en"
                ? "Business-related content coming soon..."
                : "व्यापार से संबंधित जानकारी शीघ्र आ रही है..."}
            </div>
          )}
        </div> */}
        <div className="mt-10">
          {(activeTab === "education" ||
            activeTab === "job" ||
            activeTab === "business") && (
            <CareerList
              id={activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default CareerPage;
