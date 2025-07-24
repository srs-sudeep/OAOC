// // import { useLanguage } from "@/contexts/LanguageContext";

// // const CareerPage = () => {
// //   const { language } = useLanguage();

// //   return (
// //     <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-orange-50">
// //       {/* Hero Section */}
// //       <div className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-16">
// //         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
// //           <div className="animate-fade-in">
// //             <h1 className="text-5xl font-bold mb-4 pt-2.5 bg-gradient-to-r from-white to-orange-200 bg-clip-text text-transparent">
// //               {language === "en" ? "Career Guidance	" : "करियर मार्गदर्शन"}
// //             </h1>

// //             {/* <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
// //               {language === "en"
// //                 ? "Connect with Chhattisgarh Government for digital services, support, and assistance. We are here to serve you 24/7."
// //                 : "डिजिटल सेवाओं, सहायता और सहारे के लिए छत्तीसगढ़ सरकार से जुड़ें। हम आपकी सेवा के लिए 24/7 यहाँ हैं।"}
// //             </p> */}
// //           </div>
// //         </div>
// //       </div>

// //       {/* ,, */}
// //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">jjj</div>
// //     </div>
// //   );
// // };

// // export default CareerPage;

// import { useLanguage } from "@/contexts/LanguageContext";
// import { GraduationCap, BriefcaseBusiness, Building2 } from "lucide-react";

// const CareerPage = () => {
//   const { language } = useLanguage();

//   const guidanceOptions = [
//     {
//       id: "education",
//       title: language === "en" ? "Education" : "शिक्षा",
//       description:
//         language === "en"
//           ? "Explore courses, scholarships, and exam options after Class 10/12/Graduation."
//           : "कक्षा 10/12/स्नातक के बाद उपलब्ध पाठ्यक्रमों, छात्रवृत्तियों और परीक्षाओं की जानकारी प्राप्त करें।",
//       icon: <GraduationCap className="w-10 h-10 text-blue-900" />,
//     },
//     {
//       id: "job",
//       title: language === "en" ? "Job Opportunities" : "नौकरी के अवसर",
//       description:
//         language === "en"
//           ? "Get guidance on government exams, private jobs, and skill development programs."
//           : "सरकारी परीक्षाओं, निजी नौकरियों और कौशल विकास कार्यक्रमों पर मार्गदर्शन प्राप्त करें।",
//       icon: <BriefcaseBusiness className="w-10 h-10 text-orange-600" />,
//     },
//     {
//       id: "business",
//       title: language === "en" ? "Business" : "व्यवसाय",
//       description:
//         language === "en"
//           ? "Start your entrepreneurial journey with MSME schemes and startup support."
//           : "एमएसएमई योजनाओं और स्टार्टअप सहायता के साथ अपना व्यवसाय शुरू करें।",
//       icon: <Building2 className="w-10 h-10 text-green-700" />,
//     },
//   ];

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-orange-50">
//       {/* Hero Section */}
//       <div className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-16">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-white to-orange-200 bg-clip-text text-transparent">
//             {language === "en" ? "Career Guidance" : "करियर मार्गदर्शन"}
//           </h1>
//         </div>
//       </div>

//       {/* Guidance Options */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
//         <div className="grid gap-8 md:grid-cols-3">
//           {guidanceOptions.map((option) => (
//             <div
//               key={option.id}
//               className="bg-white border border-gray-200 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6 group"
//             >
//               <div className="flex items-center space-x-4 mb-4">
//                 <div className="p-2 bg-blue-50 rounded-full group-hover:scale-110 transition-transform duration-200">
//                   {option.icon}
//                 </div>
//                 <h3 className="text-xl font-semibold text-blue-900 group-hover:text-orange-600 transition-colors">
//                   {option.title}
//                 </h3>
//               </div>
//               <p className="text-sm text-gray-700">{option.description}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CareerPage;

import React, { useState, createContext, useContext } from "react";
import {
  GraduationCap,
  Briefcase,
  TrendingUp,
  Users,
  BookOpen,
  Target,
  ArrowRight,
  ChevronDown,
  ChevronUp,
  Star,
  Award,
  Building,
  Globe,
} from "lucide-react";

// Create a simple language context
const LanguageContext = createContext<{
  language: "en" | "hi";
  setLanguage: (lang: "en" | "hi") => void;
}>({
  language: "en",
  setLanguage: () => {},
});

const useLanguage = () => useContext(LanguageContext);

interface CareerPath {
  id: string;
  title: { en: string; hi: string };
  description: { en: string; hi: string };
  icon: React.ReactNode;
  color: string;
  gradient: string;
}

interface GuideSection {
  id: string;
  title: { en: string; hi: string };
  content: { en: string; hi: string };
  tips: { en: string[]; hi: string[] };
}

const CareerPageContent: React.FC = () => {
  const { language, setLanguage } = useLanguage();
  const [activeTab, setActiveTab] = useState<"education" | "job" | "business">(
    "education"
  );
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const careerPaths: CareerPath[] = [
    {
      id: "education",
      title: { en: "Education Guidance", hi: "शिक्षा मार्गदर्शन" },
      description: {
        en: "Explore academic paths, courses, and skill development opportunities",
        hi: "शैक्षणिक पथ, कोर्स और कौशल विकास के अवसरों का अन्वेषण करें",
      },
      icon: <GraduationCap className="w-8 h-8" />,
      color: "from-blue-600 to-purple-600",
      gradient: "bg-gradient-to-br from-blue-50 to-purple-50",
    },
    {
      id: "job",
      title: { en: "Job Opportunities", hi: "नौकरी के अवसर" },
      description: {
        en: "Find government jobs, private sector opportunities, and career advancement",
        hi: "सरकारी नौकरियां, निजी क्षेत्र के अवसर और कैरियर उन्नति खोजें",
      },
      icon: <Briefcase className="w-8 h-8" />,
      color: "from-green-600 to-teal-600",
      gradient: "bg-gradient-to-br from-green-50 to-teal-50",
    },
    {
      id: "business",
      title: { en: "Business Development", hi: "व्यापार विकास" },
      description: {
        en: "Start your own business, access funding, and entrepreneurial support",
        hi: "अपना व्यवसाय शुरू करें, वित्त पोषण और उद्यमिता सहायता प्राप्त करें",
      },
      icon: <TrendingUp className="w-8 h-8" />,
      color: "from-orange-600 to-red-600",
      gradient: "bg-gradient-to-br from-orange-50 to-red-50",
    },
  ];

  const educationSections: GuideSection[] = [
    {
      id: "higher-education",
      title: { en: "Higher Education Options", hi: "उच्च शिक्षा विकल्प" },
      content: {
        en: "Explore universities, colleges, and specialized institutions in Chhattisgarh and beyond. Find the right course that matches your interests and career goals.",
        hi: "छत्तीसगढ़ और उससे बाहर विश्वविद्यालयों, कॉलेजों और विशेष संस्थानों का अन्वेषण करें। अपनी रुचियों और करियर लक्ष्यों से मेल खाता सही कोर्स खोजें।",
      },
      tips: {
        en: [
          "Research admission requirements early",
          "Consider both public and private institutions",
          "Look for scholarship opportunities",
          "Evaluate course curriculum and faculty",
        ],
        hi: [
          "प्रवेश आवश्यकताओं की जल्दी खोज करें",
          "सरकारी और निजी दोनों संस्थानों पर विचार करें",
          "छात्रवृत्ति के अवसरों की तलाश करें",
          "पाठ्यक्रम और शिक्षकों का मूल्यांकन करें",
        ],
      },
    },
    {
      id: "skill-development",
      title: { en: "Skill Development Programs", hi: "कौशल विकास कार्यक्रम" },
      content: {
        en: "Access government and private skill development programs to enhance your employability and prepare for the modern job market.",
        hi: "आधुनिक नौकरी बाजार के लिए अपनी रोजगार क्षमता बढ़ाने और तैयारी करने के लिए सरकारी और निजी कौशल विकास कार्यक्रमों तक पहुंच प्राप्त करें।",
      },
      tips: {
        en: [
          "Focus on digital skills",
          "Get industry-recognized certifications",
          "Practice hands-on learning",
          "Network with professionals",
        ],
        hi: [
          "डिजिटल कौशल पर ध्यान दें",
          "उद्योग-मान्यता प्राप्त प्रमाणन प्राप्त करें",
          "व्यावहारिक सीखने का अभ्यास करें",
          "पेशेवरों के साथ नेटवर्क बनाएं",
        ],
      },
    },
    {
      id: "competitive-exams",
      title: {
        en: "Competitive Exam Preparation",
        hi: "प्रतियोगी परीक्षा की तैयारी",
      },
      content: {
        en: "Get guidance for various competitive exams including UPSC, state services, banking, and technical entrance exams.",
        hi: "यूपीएससी, राज्य सेवा, बैंकिंग और तकनीकी प्रवेश परीक्षाओं सहित विभिन्न प्रतियोगी परीक्षाओं के लिए मार्गदर्शन प्राप्त करें।",
      },
      tips: {
        en: [
          "Create a structured study plan",
          "Take regular mock tests",
          "Stay updated with current affairs",
          "Join study groups",
        ],
        hi: [
          "संरचित अध्ययन योजना बनाएं",
          "नियमित मॉक टेस्ट लें",
          "समसामयिक घटनाओं से अपडेट रहें",
          "अध्ययन समूहों में शामिल हों",
        ],
      },
    },
  ];

  const jobSections: GuideSection[] = [
    {
      id: "government-jobs",
      title: { en: "Government Job Opportunities", hi: "सरकारी नौकरी के अवसर" },
      content: {
        en: "Explore various government job openings in Chhattisgarh state departments, central government, and public sector undertakings.",
        hi: "छत्तीसगढ़ राज्य विभागों, केंद्र सरकार और सार्वजनिक क्षेत्र के उपक्रमों में विभिन्न सरकारी नौकरी के अवसरों का अन्वेषण करें।",
      },
      tips: {
        en: [
          "Check official government portals regularly",
          "Prepare for written exams and interviews",
          "Keep documents ready",
          "Follow application deadlines strictly",
        ],
        hi: [
          "आधिकारिक सरकारी पोर्टल नियमित रूप से चेक करें",
          "लिखित परीक्षा और साक्षात्कार की तैयारी करें",
          "दस्तावेज तैयार रखें",
          "आवेदन की अंतिम तिथि का सख्ती से पालन करें",
        ],
      },
    },
    {
      id: "private-sector",
      title: { en: "Private Sector Careers", hi: "निजी क्षेत्र करियर" },
      content: {
        en: "Discover opportunities in growing industries like IT, healthcare, manufacturing, and services in Chhattisgarh and across India.",
        hi: "छत्तीसगढ़ और पूरे भारत में आईटी, स्वास्थ्य सेवा, विनिर्माण और सेवाओं जैसे बढ़ते उद्योगों में अवसरों की खोज करें।",
      },
      tips: {
        en: [
          "Build a strong professional network",
          "Keep your resume updated",
          "Develop relevant skills",
          "Use job portals effectively",
        ],
        hi: [
          "मजबूत पेशेवर नेटवर्क बनाएं",
          "अपना रिज्यूमे अपडेट रखें",
          "प्रासंगिक कौशल विकसित करें",
          "जॉब पोर्टल का प्रभावी उपयोग करें",
        ],
      },
    },
    {
      id: "self-employment",
      title: { en: "Self-Employment Options", hi: "स्व-रोजगार विकल्प" },
      content: {
        en: "Learn about freelancing, consulting, and other self-employment opportunities that can provide flexibility and growth.",
        hi: "फ्रीलांसिंग, परामर्श और अन्य स्व-रोजगार अवसरों के बारे में जानें जो लचीलापन और विकास प्रदान कर सकते हैं।",
      },
      tips: {
        en: [
          "Identify your marketable skills",
          "Build an online presence",
          "Start with small projects",
          "Manage finances properly",
        ],
        hi: [
          "अपने बिक्री योग्य कौशल की पहचान करें",
          "ऑनलाइन उपस्थिति बनाएं",
          "छोटे प्रोजेक्ट से शुरू करें",
          "वित्त का उचित प्रबंधन करें",
        ],
      },
    },
  ];

  const businessSections: GuideSection[] = [
    {
      id: "startup-ecosystem",
      title: { en: "Startup Ecosystem", hi: "स्टार्टअप पारिस्थितिकी तंत्र" },
      content: {
        en: "Connect with incubators, accelerators, and startup communities in Chhattisgarh to turn your business ideas into reality.",
        hi: "अपने व्यावसायिक विचारों को वास्तविकता में बदलने के लिए छत्तीसगढ़ में इनक्यूबेटर, एक्सेलेरेटर और स्टार्टअप समुदायों से जुड़ें।",
      },
      tips: {
        en: [
          "Validate your business idea",
          "Create a solid business plan",
          "Build a minimum viable product",
          "Network with other entrepreneurs",
        ],
        hi: [
          "अपने व्यावसायिक विचार को सत्यापित करें",
          "ठोस व्यावसायिक योजना बनाएं",
          "न्यूनतम व्यावहारिक उत्पाद बनाएं",
          "अन्य उद्यमियों के साथ नेटवर्क बनाएं",
        ],
      },
    },
    {
      id: "funding-options",
      title: {
        en: "Funding and Financial Support",
        hi: "वित्त पोषण और वित्तीय सहायता",
      },
      content: {
        en: "Explore various funding options including government schemes, bank loans, venture capital, and angel investors.",
        hi: "सरकारी योजनाओं, बैंक ऋण, वेंचर कैपिटल और एंजेल निवेशकों सहित विभिन्न वित्त पोषण विकल्पों का अन्वेषण करें।",
      },
      tips: {
        en: [
          "Prepare detailed financial projections",
          "Research government subsidies",
          "Build relationships with investors",
          "Maintain good credit history",
        ],
        hi: [
          "विस्तृत वित्तीय प्रक्षेपण तैयार करें",
          "सरकारी सब्सिडी की खोज करें",
          "निवेशकों के साथ संबंध बनाएं",
          "अच्छा क्रेडिट इतिहास बनाए रखें",
        ],
      },
    },
    {
      id: "business-registration",
      title: {
        en: "Business Registration & Compliance",
        hi: "व्यापार पंजीकरण और अनुपालन",
      },
      content: {
        en: "Get guidance on business registration, licenses, permits, and regulatory compliance for starting your business legally.",
        hi: "अपने व्यवसाय को कानूनी रूप से शुरू करने के लिए व्यापार पंजीकरण, लाइसेंस, परमिट और नियामक अनुपालन पर मार्गदर्शन प्राप्त करें।",
      },
      tips: {
        en: [
          "Choose the right business structure",
          "Get necessary licenses and permits",
          "Understand tax obligations",
          "Maintain proper documentation",
        ],
        hi: [
          "सही व्यावसायिक संरचना चुनें",
          "आवश्यक लाइसेंस और परमिट प्राप्त करें",
          "कर दायित्वों को समझें",
          "उचित दस्तावेज़ीकरण बनाए रखें",
        ],
      },
    },
  ];

  const getCurrentSections = () => {
    switch (activeTab) {
      case "education":
        return educationSections;
      case "job":
        return jobSections;
      case "business":
        return businessSections;
      default:
        return educationSections;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-orange-50">
      {/* Language Toggle */}
      <div className="absolute top-4 right-4 z-20">
        <button
          onClick={() => setLanguage(language === "en" ? "hi" : "en")}
          className="bg-white bg-opacity-20 backdrop-blur-sm text-white px-4 py-2 rounded-lg hover:bg-opacity-30 transition-all duration-300 border border-white border-opacity-20"
        >
          {language === "en" ? "हिंदी" : "English"}
        </button>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="animate-fade-in">
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
                  {language === "en"
                    ? "Expert Guidance"
                    : "विशेषज्ञ मार्गदर्शन"}
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
      </div>

      {/* Career Path Selection */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {language === "en" ? "Choose Your Path" : "अपना पथ चुनें"}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {language === "en"
              ? "Select the area where you need guidance and explore personalized recommendations"
              : "उस क्षेत्र का चयन करें जहाँ आपको मार्गदर्शन चाहिए और व्यक्तिगत सिफारिशों का अन्वेषण करें"}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {careerPaths.map((path) => (
            <div
              key={path.id}
              className={`${
                path.gradient
              } rounded-xl p-8 cursor-pointer transition-all duration-300 transform hover:scale-105 hover:shadow-xl border-2 ${
                activeTab === path.id
                  ? "border-blue-500 ring-4 ring-blue-100"
                  : "border-transparent"
              }`}
              onClick={() =>
                setActiveTab(path.id as "education" | "job" | "business")
              }
            >
              <div
                className={`w-16 h-16 rounded-full bg-gradient-to-r ${path.color} flex items-center justify-center text-white mb-6 mx-auto`}
              >
                {path.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                {path.title[language]}
              </h3>
              <p className="text-gray-700 text-center mb-6 leading-relaxed">
                {path.description[language]}
              </p>
              <div className="flex justify-center">
                <button
                  className={`bg-gradient-to-r ${path.color} text-white px-6 py-3 rounded-lg font-semibold flex items-center hover:shadow-lg transition-all duration-300`}
                >
                  {language === "en" ? "Explore" : "अन्वेषण करें"}
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Detailed Guidance Sections */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="bg-gradient-to-r from-gray-50 to-blue-50 p-6 border-b">
            <h3 className="text-3xl font-bold text-gray-900 mb-2">
              {careerPaths.find((p) => p.id === activeTab)?.title[language]}
            </h3>
            <p className="text-gray-600">
              {language === "en"
                ? "Comprehensive guidance and resources to help you succeed"
                : "सफल होने में आपकी सहायता के लिए व्यापक मार्गदर्शन और संसाधन"}
            </p>
          </div>

          <div className="p-8">
            {getCurrentSections().map((section, index) => (
              <div key={section.id} className="mb-6">
                <div
                  className="flex justify-between items-center cursor-pointer p-4 bg-gradient-to-r from-gray-50 to-blue-50 rounded-lg hover:from-blue-50 hover:to-purple-50 transition-all duration-300"
                  onClick={() =>
                    setExpandedSection(
                      expandedSection === section.id ? null : section.id
                    )
                  }
                >
                  <h4 className="text-xl font-semibold text-gray-900 flex items-center">
                    <div
                      className={`w-8 h-8 rounded-full ${
                        activeTab === "education"
                          ? "bg-blue-500"
                          : activeTab === "job"
                          ? "bg-green-500"
                          : "bg-orange-500"
                      } text-white flex items-center justify-center text-sm font-bold mr-3`}
                    >
                      {index + 1}
                    </div>
                    {section.title[language]}
                  </h4>
                  {expandedSection === section.id ? (
                    <ChevronUp className="w-6 h-6 text-gray-500" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-gray-500" />
                  )}
                </div>

                {expandedSection === section.id && (
                  <div className="mt-4 p-6 bg-white border border-gray-200 rounded-lg">
                    <p className="text-gray-700 mb-6 leading-relaxed text-lg">
                      {section.content[language]}
                    </p>

                    <div className="bg-gradient-to-r from-yellow-50 to-orange-50 p-6 rounded-lg border-l-4 border-yellow-400">
                      <h5 className="font-semibold text-gray-900 mb-3 flex items-center">
                        <Star className="w-5 h-5 text-yellow-500 mr-2" />
                        {language === "en" ? "Key Tips" : "मुख्य सुझाव"}
                      </h5>
                      <div className="grid md:grid-cols-2 gap-3">
                        {section.tips[language].map((tip, tipIndex) => (
                          <div key={tipIndex} className="flex items-start">
                            <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            <span className="text-gray-700">{tip}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mt-6 flex justify-end">
                      <button
                        className={`bg-gradient-to-r ${
                          activeTab === "education"
                            ? "from-blue-600 to-purple-600"
                            : activeTab === "job"
                            ? "from-green-600 to-teal-600"
                            : "from-orange-600 to-red-600"
                        } text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 flex items-center`}
                      >
                        {language === "en"
                          ? "Get Detailed Guidance"
                          : "विस्तृत मार्गदर्शन प्राप्त करें"}
                        <ArrowRight className="w-5 h-5 ml-2" />
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 bg-gradient-to-r from-blue-900 to-purple-900 rounded-2xl p-12 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">
            {language === "en"
              ? "Ready to Start Your Journey?"
              : "अपनी यात्रा शुरू करने के लिए तैयार हैं?"}
          </h3>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            {language === "en"
              ? "Get personalized guidance from our experts and take the next step towards your successful career"
              : "हमारे विशेषज्ञों से व्यक्तिगत मार्गदर्शन प्राप्त करें और अपने सफल करियर की दिशा में अगला कदम उठाएं"}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-900 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-colors duration-300 flex items-center justify-center">
              <BookOpen className="w-5 h-5 mr-2" />
              {language === "en" ? "Book Consultation" : "परामर्श बुक करें"}
            </button>
            <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white hover:text-blue-900 transition-colors duration-300 flex items-center justify-center">
              <Globe className="w-5 h-5 mr-2" />
              {language === "en" ? "Explore Resources" : "संसाधन खोजें"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const CareerPage: React.FC = () => {
  const [language, setLanguage] = useState<"en" | "hi">("en");

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      <CareerPageContent />
    </LanguageContext.Provider>
  );
};

export default CareerPage;
