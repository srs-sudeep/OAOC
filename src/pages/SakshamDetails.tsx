// import React, { useState } from "react";
// import {
//   Eye,
//   Phone,
//   Mail,
//   MapPin,
//   FileText,
//   Globe,
//   Calendar,
//   Bell,
//   User,
//   Star,
//   ChevronRight,
//   X,
// } from "lucide-react";

// interface SakshamScheme {
//   id: string;
//   name: {
//     en: string;
//     hi: string;
//   };
//   description: {
//     en: string;
//     hi: string;
//   };
//   benefits: {
//     en: string[];
//     hi: string[];
//   };
//   eligibility: {
//     en: string[];
//     hi: string[];
//   };
//   contact: {
//     phone: string[];
//     email: string;
//     office: {
//       en: string;
//       hi: string;
//     };
//   };
//   documents: {
//     en: string[];
//     hi: string[];
//   };
//   website: string;
//   status: string;
//   lastUpdated: string;
//   notices: {
//     en: string[];
//     hi: string[];
//   };
// }

// // Sample data
// const sampleSchemes: SakshamScheme[] = [
//   {
//     id: "1",
//     name: {
//       en: "Skill Development Program",
//       hi: "कौशल विकास कार्यक्रम",
//     },
//     description: {
//       en: "A comprehensive skill development program for youth empowerment and employment generation.",
//       hi: "युवा सशक्तिकरण और रोजगार सृजन के लिए एक व्यापक कौशल विकास कार्यक्रम।",
//     },
//     benefits: {
//       en: [
//         "Free training",
//         "Certification",
//         "Job placement assistance",
//         "Monthly stipend",
//       ],
//       hi: [
//         "मुफ्त प्रशिक्षण",
//         "प्रमाणन",
//         "नौकरी प्लेसमेंट सहायता",
//         "मासिक वजीफा",
//       ],
//     },
//     eligibility: {
//       en: [
//         "Age 18-35 years",
//         "10th pass minimum",
//         "Indian citizen",
//         "Family income < 2 lakhs",
//       ],
//       hi: [
//         "आयु 18-35 वर्ष",
//         "न्यूनतम 10वीं पास",
//         "भारतीय नागरिक",
//         "पारिवारिक आय < 2 लाख",
//       ],
//     },
//     contact: {
//       phone: ["+91-1234567890", "+91-9876543210"],
//       email: "info@saksham.gov.in",
//       office: {
//         en: "District Collectorate, Main Road, City Center",
//         hi: "जिला कलेक्टोरेट, मुख्य सड़क, सिटी सेंटर",
//       },
//     },
//     documents: {
//       en: [
//         "Aadhar Card",
//         "10th Certificate",
//         "Income Certificate",
//         "Bank Passbook",
//       ],
//       hi: [
//         "आधार कार्ड",
//         "10वीं का प्रमाण पत्र",
//         "आय प्रमाण पत्र",
//         "बैंक पासबुक",
//       ],
//     },
//     website: "https://saksham.gov.in",
//     status: "Active",
//     lastUpdated: "2024-12-15",
//     notices: {
//       en: [
//         "Application deadline extended till March 31st",
//         "New batch starting from April 1st",
//       ],
//       hi: [
//         "आवेदन की अंतिम तिथि 31 मार्च तक बढ़ाई गई",
//         "नया बैच 1 अप्रैल से शुरू",
//       ],
//     },
//   },
//   {
//     id: "2",
//     name: {
//       en: "Women Empowerment Scheme",
//       hi: "महिला सशक्तिकरण योजना",
//     },
//     description: {
//       en: "Empowering women through financial assistance and skill development programs.",
//       hi: "वित्तीय सहायता और कौशल विकास कार्यक्रमों के माध्यम से महिलाओं को सशक्त बनाना।",
//     },
//     benefits: {
//       en: [
//         "Financial assistance",
//         "Business training",
//         "Marketing support",
//         "Loan facilitation",
//       ],
//       hi: [
//         "वित्तीय सहायता",
//         "व्यापारिक प्रशिक्षण",
//         "विपणन सहायता",
//         "ऋण सुविधा",
//       ],
//     },
//     eligibility: {
//       en: [
//         "Women aged 21-45",
//         "BPL family",
//         "No existing business",
//         "Local resident",
//       ],
//       hi: [
//         "21-45 आयु की महिलाएं",
//         "बीपीएल परिवार",
//         "कोई मौजूदा व्यापार नहीं",
//         "स्थानीय निवासी",
//       ],
//     },
//     contact: {
//       phone: ["+91-1111222233"],
//       email: "women@saksham.gov.in",
//       office: {
//         en: "Women Development Office, Block A, Government Complex",
//         hi: "महिला विकास कार्यालय, ब्लॉक ए, सरकारी परिसर",
//       },
//     },
//     documents: {
//       en: ["Aadhar Card", "BPL Certificate", "Residence Proof", "Photo"],
//       hi: ["आधार कार्ड", "बीपीएल प्रमाण पत्र", "निवास प्रमाण", "फोटो"],
//     },
//     website: "https://women.saksham.gov.in",
//     status: "Active",
//     lastUpdated: "2024-12-10",
//     notices: {
//       en: [
//         "Special camp on December 25th",
//         "Training materials now available in local language",
//       ],
//       hi: [
//         "25 दिसंबर को विशेष शिविर",
//         "प्रशिक्षण सामग्री अब स्थानीय भाषा में उपलब्ध",
//       ],
//     },
//   },
// ];

// const SakshamCard: React.FC<{
//   scheme: SakshamScheme;
//   onViewMore: () => void;
//   language: "en" | "hi";
// }> = ({ scheme, onViewMore, language }) => {
//   const getStatusColor = (status: string) => {
//     switch (status.toLowerCase()) {
//       case "active":
//         return "bg-green-100 text-green-800 border-green-200";
//       case "inactive":
//         return "bg-red-100 text-red-800 border-red-200";
//       case "pending":
//         return "bg-yellow-100 text-yellow-800 border-yellow-200";
//       default:
//         return "bg-gray-100 text-gray-800 border-gray-200";
//     }
//   };

//   return (
//     <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden group">
//       {/* Header with gradient */}
//       <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-4 text-white">
//         <div className="flex justify-between items-start">
//           <div className="flex-1">
//             <h3 className="text-xl font-bold mb-1 leading-tight">
//               {scheme.name[language]}
//             </h3>
//             <div className="flex items-center gap-2 text-blue-100">
//               <Calendar className="w-4 h-4" />
//               <span className="text-sm">Updated: {scheme.lastUpdated}</span>
//             </div>
//           </div>
//           <div
//             className={`px-3 py-1 rounded-full text-xs font-semibold border ${getStatusColor(
//               scheme.status
//             )}`}
//           >
//             {scheme.status}
//           </div>
//         </div>
//       </div>

//       {/* Content */}
//       <div className="p-6">
//         <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">
//           {scheme.description[language]}
//         </p>

//         {/* Key benefits preview */}
//         <div className="mb-4">
//           <h4 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
//             <Star className="w-4 h-4 text-yellow-500" />
//             {language === "en" ? "Key Benefits" : "मुख्य लाभ"}
//           </h4>
//           <div className="flex flex-wrap gap-2">
//             {scheme.benefits[language].slice(0, 3).map((benefit, index) => (
//               <span
//                 key={index}
//                 className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium"
//               >
//                 {benefit}
//               </span>
//             ))}
//             {scheme.benefits[language].length > 3 && (
//               <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm">
//                 +{scheme.benefits[language].length - 3} more
//               </span>
//             )}
//           </div>
//         </div>

//         {/* Contact info */}
//         <div className="mb-4 space-y-2">
//           <div className="flex items-center gap-2 text-gray-600">
//             <Phone className="w-4 h-4" />
//             <span className="text-sm">{scheme.contact.phone[0]}</span>
//           </div>
//           <div className="flex items-center gap-2 text-gray-600">
//             <Mail className="w-4 h-4" />
//             <span className="text-sm">{scheme.contact.email}</span>
//           </div>
//         </div>

//         {/* Notices */}
//         {scheme.notices[language].length > 0 && (
//           <div className="mb-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
//             <div className="flex items-center gap-2 text-yellow-800 mb-1">
//               <Bell className="w-4 h-4" />
//               <span className="font-semibold text-sm">
//                 {language === "en" ? "Latest Notice" : "नवीनतम सूचना"}
//               </span>
//             </div>
//             <p className="text-yellow-700 text-sm">
//               {scheme.notices[language][0]}
//             </p>
//           </div>
//         )}

//         {/* Action button */}
//         <button
//           onClick={onViewMore}
//           className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 group-hover:shadow-lg"
//         >
//           <Eye className="w-4 h-4" />
//           {language === "en" ? "View Full Details" : "पूरी जानकारी देखें"}
//           <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
//         </button>
//       </div>
//     </div>
//   );
// };

// const SakshamDetailView: React.FC<{
//   scheme: SakshamScheme;
//   onClose: () => void;
//   language: "en" | "hi";
// }> = ({ scheme, onClose, language }) => {
//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
//       <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
//         {/* Header */}
//         <div className="sticky top-0 bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 flex justify-between items-start">
//           <div>
//             <h2 className="text-2xl font-bold mb-2">{scheme.name[language]}</h2>
//             <div className="flex items-center gap-4 text-blue-100">
//               <div className="flex items-center gap-1">
//                 <Calendar className="w-4 h-4" />
//                 <span className="text-sm">Updated: {scheme.lastUpdated}</span>
//               </div>
//               <span
//                 className={`px-3 py-1 rounded-full text-xs font-semibold ${
//                   scheme.status === "Active"
//                     ? "bg-green-500 text-white"
//                     : "bg-yellow-500 text-white"
//                 }`}
//               >
//                 {scheme.status}
//               </span>
//             </div>
//           </div>
//           <button
//             onClick={onClose}
//             className="text-white hover:bg-white hover:bg-opacity-20 p-2 rounded-full transition-colors"
//           >
//             <X className="w-6 h-6" />
//           </button>
//         </div>

//         <div className="p-6 space-y-8">
//           {/* Description */}
//           <section>
//             <h3 className="text-xl font-bold text-gray-800 mb-3 flex items-center gap-2">
//               <FileText className="w-5 h-5 text-blue-600" />
//               {language === "en" ? "Description" : "विवरण"}
//             </h3>
//             <p className="text-gray-600 leading-relaxed bg-gray-50 p-4 rounded-lg">
//               {scheme.description[language]}
//             </p>
//           </section>

//           {/* Benefits */}
//           <section>
//             <h3 className="text-xl font-bold text-gray-800 mb-3 flex items-center gap-2">
//               <Star className="w-5 h-5 text-yellow-500" />
//               {language === "en" ? "Benefits" : "लाभ"}
//             </h3>
//             <div className="grid md:grid-cols-2 gap-3">
//               {scheme.benefits[language].map((benefit, index) => (
//                 <div
//                   key={index}
//                   className="flex items-center gap-3 bg-green-50 p-3 rounded-lg border border-green-200"
//                 >
//                   <div className="w-2 h-2 bg-green-500 rounded-full"></div>
//                   <span className="text-green-800">{benefit}</span>
//                 </div>
//               ))}
//             </div>
//           </section>

//           {/* Eligibility */}
//           <section>
//             <h3 className="text-xl font-bold text-gray-800 mb-3 flex items-center gap-2">
//               <User className="w-5 h-5 text-purple-600" />
//               {language === "en" ? "Eligibility Criteria" : "पात्रता मानदंड"}
//             </h3>
//             <div className="grid md:grid-cols-2 gap-3">
//               {scheme.eligibility[language].map((criteria, index) => (
//                 <div
//                   key={index}
//                   className="flex items-center gap-3 bg-purple-50 p-3 rounded-lg border border-purple-200"
//                 >
//                   <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
//                   <span className="text-purple-800">{criteria}</span>
//                 </div>
//               ))}
//             </div>
//           </section>

//           {/* Required Documents */}
//           <section>
//             <h3 className="text-xl font-bold text-gray-800 mb-3 flex items-center gap-2">
//               <FileText className="w-5 h-5 text-red-600" />
//               {language === "en" ? "Required Documents" : "आवश्यक दस्तावेज"}
//             </h3>
//             <div className="grid md:grid-cols-2 gap-3">
//               {scheme.documents[language].map((doc, index) => (
//                 <div
//                   key={index}
//                   className="flex items-center gap-3 bg-red-50 p-3 rounded-lg border border-red-200"
//                 >
//                   <FileText className="w-4 h-4 text-red-600" />
//                   <span className="text-red-800">{doc}</span>
//                 </div>
//               ))}
//             </div>
//           </section>

//           {/* Contact Information */}
//           <section>
//             <h3 className="text-xl font-bold text-gray-800 mb-3">
//               {language === "en" ? "Contact Information" : "संपर्क जानकारी"}
//             </h3>
//             <div className="bg-blue-50 p-6 rounded-lg space-y-4">
//               <div className="grid md:grid-cols-2 gap-4">
//                 <div>
//                   <div className="flex items-center gap-2 text-blue-800 mb-2">
//                     <Phone className="w-5 h-5" />
//                     <span className="font-semibold">
//                       {language === "en" ? "Phone Numbers" : "फोन नंबर"}
//                     </span>
//                   </div>
//                   {scheme.contact.phone.map((phone, index) => (
//                     <p key={index} className="text-blue-700 ml-7">
//                       {phone}
//                     </p>
//                   ))}
//                 </div>
//                 <div>
//                   <div className="flex items-center gap-2 text-blue-800 mb-2">
//                     <Mail className="w-5 h-5" />
//                     <span className="font-semibold">
//                       {language === "en" ? "Email" : "ईमेल"}
//                     </span>
//                   </div>
//                   <p className="text-blue-700 ml-7">{scheme.contact.email}</p>
//                 </div>
//               </div>
//               <div>
//                 <div className="flex items-center gap-2 text-blue-800 mb-2">
//                   <MapPin className="w-5 h-5" />
//                   <span className="font-semibold">
//                     {language === "en" ? "Office Address" : "कार्यालय का पता"}
//                   </span>
//                 </div>
//                 <p className="text-blue-700 ml-7">
//                   {scheme.contact.office[language]}
//                 </p>
//               </div>
//               <div>
//                 <div className="flex items-center gap-2 text-blue-800 mb-2">
//                   <Globe className="w-5 h-5" />
//                   <span className="font-semibold">
//                     {language === "en" ? "Website" : "वेबसाइट"}
//                   </span>
//                 </div>
//                 <a
//                   href={scheme.website}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="text-blue-600 hover:text-blue-800 underline ml-7"
//                 >
//                   {scheme.website}
//                 </a>
//               </div>
//             </div>
//           </section>

//           {/* Notices */}
//           {scheme.notices[language].length > 0 && (
//             <section>
//               <h3 className="text-xl font-bold text-gray-800 mb-3 flex items-center gap-2">
//                 <Bell className="w-5 h-5 text-orange-600" />
//                 {language === "en" ? "Important Notices" : "महत्वपूर्ण सूचनाएं"}
//               </h3>
//               <div className="space-y-3">
//                 {scheme.notices[language].map((notice, index) => (
//                   <div
//                     key={index}
//                     className="bg-orange-50 border-l-4 border-orange-400 p-4 rounded-r-lg"
//                   >
//                     <p className="text-orange-800">{notice}</p>
//                   </div>
//                 ))}
//               </div>
//             </section>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// const SakshamDetails: React.FC = () => {
//   const [selectedScheme, setSelectedScheme] = useState<SakshamScheme | null>(
//     null
//   );
//   const [language, setLanguage] = useState<"en" | "hi">("en");

//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* Header */}
//       <div className="bg-white shadow-sm border-b">
//         <div className="max-w-7xl mx-auto px-4 py-6">
//           <div className="flex justify-between items-center">
//             <div>
//               <h1 className="text-3xl font-bold text-gray-900">
//                 {language === "en" ? "Saksham Schemes" : "सक्षम योजनाएं"}
//               </h1>
//               <p className="text-gray-600 mt-1">
//                 {language === "en"
//                   ? "Empowering communities through government schemes"
//                   : "सरकारी योजनाओं के माध्यम से समुदायों को सशक्त बनाना"}
//               </p>
//             </div>
//             <div className="flex items-center gap-4">
//               <button
//                 onClick={() => setLanguage(language === "en" ? "hi" : "en")}
//                 className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors"
//               >
//                 {language === "en" ? "हिन्दी" : "English"}
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Cards Grid */}
//       <div className="max-w-7xl mx-auto px-4 py-8">
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {sampleSchemes.map((scheme) => (
//             <SakshamCard
//               key={scheme.id}
//               scheme={scheme}
//               language={language}
//               onViewMore={() => setSelectedScheme(scheme)}
//             />
//           ))}
//         </div>
//       </div>

//       {/* Modal */}
//       {selectedScheme && (
//         <SakshamDetailView
//           scheme={selectedScheme}
//           language={language}
//           onClose={() => setSelectedScheme(null)}
//         />
//       )}
//     </div>
//   );
// };

// export default SakshamDetails;

import React, { useState } from "react";
import {
  Eye,
  Phone,
  Mail,
  MapPin,
  FileText,
  Globe,
  Calendar,
  Bell,
  User,
  Star,
  ChevronRight,
  ArrowLeft,
  Home,
} from "lucide-react";

interface SakshamScheme {
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
  contact: {
    phone: string[];
    email: string;
    office: {
      en: string;
      hi: string;
    };
  };
  documents: {
    en: string[];
    hi: string[];
  };
  website: string;
  status: string;
  lastUpdated: string;
  notices: {
    en: string[];
    hi: string[];
  };
}

// Sample data
const sampleSchemes: SakshamScheme[] = [
  {
    id: "1",
    name: {
      en: "Skill Development Program",
      hi: "कौशल विकास कार्यक्रम",
    },
    description: {
      en: "A comprehensive skill development program for youth empowerment and employment generation. This program focuses on providing industry-relevant skills to young people, helping them become job-ready and contributing to the nation's economic growth.",
      hi: "युवा सशक्तिकरण और रोजगार सृजन के लिए एक व्यापक कौशल विकास कार्यक्रम। यह कार्यक्रम युवाओं को उद्योग-प्रासंगिक कौशल प्रदान करने पर केंद्रित है, जो उन्हें नौकरी के लिए तैयार बनाने और राष्ट्र की आर्थिक वृद्धि में योगदान देने में मदद करता है।",
    },
    benefits: {
      en: [
        "Free training",
        "Certification",
        "Job placement assistance",
        "Monthly stipend",
        "Industry exposure",
        "Soft skills development",
      ],
      hi: [
        "मुफ्त प्रशिक्षण",
        "प्रमाणन",
        "नौकरी प्लेसमेंट सहायता",
        "मासिक वजीफा",
        "उद्योग अनुभव",
        "सॉफ्ट स्किल विकास",
      ],
    },
    eligibility: {
      en: [
        "Age 18-35 years",
        "10th pass minimum",
        "Indian citizen",
        "Family income < 2 lakhs",
        "Unemployed youth",
        "Valid Aadhar card",
      ],
      hi: [
        "आयु 18-35 वर्ष",
        "न्यूनतम 10वीं पास",
        "भारतीय नागरिक",
        "पारिवारिक आय < 2 लाख",
        "बेरोजगार युवा",
        "वैध आधार कार्ड",
      ],
    },
    contact: {
      phone: ["+91-1234567890", "+91-9876543210"],
      email: "info@saksham.gov.in",
      office: {
        en: "District Collectorate, Main Road, City Center, Pin: 123456",
        hi: "जिला कलेक्टोरेट, मुख्य सड़क, सिटी सेंटर, पिन: 123456",
      },
    },
    documents: {
      en: [
        "Aadhar Card",
        "10th Certificate",
        "Income Certificate",
        "Bank Passbook",
        "Passport Size Photo",
        "Caste Certificate (if applicable)",
      ],
      hi: [
        "आधार कार्ड",
        "10वीं का प्रमाण पत्र",
        "आय प्रमाण पत्र",
        "बैंक पासबुक",
        "पासपोर्ट साइज फोटो",
        "जाति प्रमाण पत्र (यदि लागू हो)",
      ],
    },
    website: "https://saksham.gov.in",
    status: "Active",
    lastUpdated: "2024-12-15",
    notices: {
      en: [
        "Application deadline extended till March 31st",
        "New batch starting from April 1st",
        "Online application portal now available",
      ],
      hi: [
        "आवेदन की अंतिम तिथि 31 मार्च तक बढ़ाई गई",
        "नया बैच 1 अप्रैल से शुरू",
        "ऑनलाइन आवेदन पोर्टल अब उपलब्ध",
      ],
    },
  },
  {
    id: "2",
    name: {
      en: "Women Empowerment Scheme",
      hi: "महिला सशक्तिकरण योजना",
    },
    description: {
      en: "Empowering women through financial assistance and skill development programs. This scheme aims to promote entrepreneurship among women and provide them with the necessary tools and resources to start their own businesses.",
      hi: "वित्तीय सहायता और कौशल विकास कार्यक्रमों के माध्यम से महिलाओं को सशक्त बनाना। इस योजना का उद्देश्य महिलाओं के बीच उद्यमिता को बढ़ावा देना और उन्हें अपना व्यापार शुरू करने के लिए आवश्यक उपकरण और संसाधन प्रदान करना है।",
    },
    benefits: {
      en: [
        "Financial assistance up to ₹50,000",
        "Business training",
        "Marketing support",
        "Loan facilitation",
        "Mentor support",
        "Market linkage",
      ],
      hi: [
        "₹50,000 तक वित्तीय सहायता",
        "व्यापारिक प्रशिक्षण",
        "विपणन सहायता",
        "ऋण सुविधा",
        "मेंटर सहायता",
        "बाजार संपर्क",
      ],
    },
    eligibility: {
      en: [
        "Women aged 21-45",
        "BPL family",
        "No existing business",
        "Local resident",
        "Basic literacy required",
        "Valid bank account",
      ],
      hi: [
        "21-45 आयु की महिलाएं",
        "बीपीएल परिवार",
        "कोई मौजूदा व्यापार नहीं",
        "स्थानीय निवासी",
        "बुनियादी साक्षरता आवश्यक",
        "वैध बैंक खाता",
      ],
    },
    contact: {
      phone: ["+91-1111222233", "+91-4444555566"],
      email: "women@saksham.gov.in",
      office: {
        en: "Women Development Office, Block A, Government Complex, Pin: 123457",
        hi: "महिला विकास कार्यालय, ब्लॉक ए, सरकारी परिसर, पिन: 123457",
      },
    },
    documents: {
      en: [
        "Aadhar Card",
        "BPL Certificate",
        "Residence Proof",
        "Photo",
        "Bank Account Details",
        "Business Plan (if any)",
      ],
      hi: [
        "आधार कार्ड",
        "बीपीएल प्रमाण पत्र",
        "निवास प्रमाण",
        "फोटो",
        "बैंक खाता विवरण",
        "व्यापार योजना (यदि कोई हो)",
      ],
    },
    website: "https://women.saksham.gov.in",
    status: "Active",
    lastUpdated: "2024-12-10",
    notices: {
      en: [
        "Special camp on December 25th",
        "Training materials now available in local language",
        "New partnership with local banks announced",
      ],
      hi: [
        "25 दिसंबर को विशेष शिविर",
        "प्रशिक्षण सामग्री अब स्थानीय भाषा में उपलब्ध",
        "स्थानीय बैंकों के साथ नई साझेदारी की घोषणा",
      ],
    },
  },
  {
    id: "3",
    name: {
      en: "Digital Literacy Program",
      hi: "डिजिटल साक्षरता कार्यक्रम",
    },
    description: {
      en: "A comprehensive digital literacy program aimed at bridging the digital divide and empowering citizens with essential computer and internet skills for the modern digital age.",
      hi: "डिजिटल विभाजन को पाटने और आधुनिक डिजिटल युग के लिए आवश्यक कंप्यूटर और इंटरनेट कौशल के साथ नागरिकों को सशक्त बनाने के उद्देश्य से एक व्यापक डिजिटल साक्षरता कार्यक्रम।",
    },
    benefits: {
      en: [
        "Free computer training",
        "Internet usage guidance",
        "Digital payment training",
        "Online services access",
        "E-governance awareness",
        "Certificate on completion",
      ],
      hi: [
        "मुफ्त कंप्यूटर प्रशिक्षण",
        "इंटरनेट उपयोग मार्गदर्शन",
        "डिजिटल भुगतान प्रशिक्षण",
        "ऑनलाइन सेवाओं तक पहुंच",
        "ई-गवर्नेंस जागरूकता",
        "पूर्णता पर प्रमाण पत्र",
      ],
    },
    eligibility: {
      en: [
        "Age 16-60 years",
        "Basic reading ability",
        "Indian citizen",
        "No prior computer knowledge required",
        "Commitment to complete course",
        "Valid ID proof",
      ],
      hi: [
        "आयु 16-60 वर्ष",
        "बुनियादी पढ़ने की क्षमता",
        "भारतीय नागरिक",
        "पूर्व कंप्यूटर ज्ञान आवश्यक नहीं",
        "कोर्स पूरा करने की प्रतिबद्धता",
        "वैध पहचान प्रमाण",
      ],
    },
    contact: {
      phone: ["+91-7777888899"],
      email: "digital@saksham.gov.in",
      office: {
        en: "Digital Center, Technology Park, Sector 5, Pin: 123458",
        hi: "डिजिटल केंद्र, टेक्नोलॉजी पार्क, सेक्टर 5, पिन: 123458",
      },
    },
    documents: {
      en: [
        "Aadhar Card",
        "Any valid ID proof",
        "Address proof",
        "Passport size photo",
      ],
      hi: [
        "आधार कार्ड",
        "कोई वैध पहचान प्रमाण",
        "पता प्रमाण",
        "पासपोर्ट साइज फोटो",
      ],
    },
    website: "https://digital.saksham.gov.in",
    status: "Active",
    lastUpdated: "2024-12-08",
    notices: {
      en: [
        "Weekend batches now available",
        "Mobile app launched for practice",
        "Free tablets for top performers",
      ],
      hi: [
        "अब सप्ताहांत बैच उपलब्ध",
        "अभ्यास के लिए मोबाइल ऐप लॉन्च",
        "शीर्ष प्रदर्शनकर्ताओं के लिए मुफ्त टैबलेट",
      ],
    },
  },
];

const SakshamCard: React.FC<{
  scheme: SakshamScheme;
  onViewDetails: (id: string) => void;
  language: "en" | "hi";
}> = ({ scheme, onViewDetails, language }) => {
  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "active":
        return "bg-green-100 text-green-800 border-green-200";
      case "inactive":
        return "bg-red-100 text-red-800 border-red-200";
      case "pending":
        return "bg-yellow-100 text-yellow-800 border-yellow-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden group">
      {/* Header with gradient */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-4 text-white">
        <div className="flex justify-between items-start">
          <div className="flex-1">
            <h3 className="text-xl font-bold mb-1 leading-tight">
              {scheme.name[language]}
            </h3>
            <div className="flex items-center gap-2 text-blue-100">
              <Calendar className="w-4 h-4" />
              <span className="text-sm">Updated: {scheme.lastUpdated}</span>
            </div>
          </div>
          <div
            className={`px-3 py-1 rounded-full text-xs font-semibold border ${getStatusColor(
              scheme.status
            )}`}
          >
            {scheme.status}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">
          {scheme.description[language].substring(0, 150)}...
        </p>

        {/* Key benefits preview */}
        <div className="mb-4">
          <h4 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
            <Star className="w-4 h-4 text-yellow-500" />
            {language === "en" ? "Key Benefits" : "मुख्य लाभ"}
          </h4>
          <div className="flex flex-wrap gap-2">
            {scheme.benefits[language].slice(0, 3).map((benefit, index) => (
              <span
                key={index}
                className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium"
              >
                {benefit}
              </span>
            ))}
            {scheme.benefits[language].length > 3 && (
              <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm">
                +{scheme.benefits[language].length - 3} more
              </span>
            )}
          </div>
        </div>

        {/* Contact info */}
        <div className="mb-4 space-y-2">
          <div className="flex items-center gap-2 text-gray-600">
            <Phone className="w-4 h-4" />
            <span className="text-sm">{scheme.contact.phone[0]}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <Mail className="w-4 h-4" />
            <span className="text-sm">{scheme.contact.email}</span>
          </div>
        </div>

        {/* Notices */}
        {scheme.notices[language].length > 0 && (
          <div className="mb-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
            <div className="flex items-center gap-2 text-yellow-800 mb-1">
              <Bell className="w-4 h-4" />
              <span className="font-semibold text-sm">
                {language === "en" ? "Latest Notice" : "नवीनतम सूचना"}
              </span>
            </div>
            <p className="text-yellow-700 text-sm">
              {scheme.notices[language][0]}
            </p>
          </div>
        )}

        {/* Action button */}
        <button
          onClick={() => onViewDetails(scheme.id)}
          className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 group-hover:shadow-lg"
        >
          <Eye className="w-4 h-4" />
          {language === "en" ? "View Full Details" : "पूरी जानकारी देखें"}
          <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
};

const SakshamDetailPage: React.FC<{
  scheme: SakshamScheme;
  onBack: () => void;
  language: "en" | "hi";
}> = ({ scheme, onBack, language }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={onBack}
              className="flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              {language === "en" ? "Back to Schemes" : "योजनाओं पर वापस"}
            </button>
            <div className="flex items-center gap-2">
              <span
                className={`px-3 py-1 rounded-full text-sm font-semibold ${
                  scheme.status === "Active"
                    ? "bg-green-100 text-green-800 border border-green-200"
                    : "bg-yellow-100 text-yellow-800 border border-yellow-200"
                }`}
              >
                {scheme.status}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-6xl mx-auto px-4 py-12">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">{scheme.name[language]}</h1>
            <div className="flex items-center justify-center gap-4 text-blue-100">
              <div className="flex items-center gap-1">
                <Calendar className="w-5 h-5" />
                <span>Last Updated: {scheme.lastUpdated}</span>
              </div>
              <div className="flex items-center gap-1">
                <Globe className="w-5 h-5" />
                <a
                  href={scheme.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white underline"
                >
                  Official Website
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Description */}
            <section className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <FileText className="w-6 h-6 text-blue-600" />
                {language === "en" ? "Description" : "विवरण"}
              </h2>
              <p className="text-gray-600 leading-relaxed text-lg">
                {scheme.description[language]}
              </p>
            </section>

            {/* Benefits */}
            <section className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                <Star className="w-6 h-6 text-yellow-500" />
                {language === "en" ? "Benefits" : "लाभ"}
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {scheme.benefits[language].map((benefit, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 bg-green-50 p-4 rounded-lg border border-green-200"
                  >
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-green-800 font-medium">
                      {benefit}
                    </span>
                  </div>
                ))}
              </div>
            </section>

            {/* Eligibility */}
            <section className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                <User className="w-6 h-6 text-purple-600" />
                {language === "en" ? "Eligibility Criteria" : "पात्रता मानदंड"}
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {scheme.eligibility[language].map((criteria, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 bg-purple-50 p-4 rounded-lg border border-purple-200"
                  >
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-purple-800 font-medium">
                      {criteria}
                    </span>
                  </div>
                ))}
              </div>
            </section>

            {/* Required Documents */}
            <section className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                <FileText className="w-6 h-6 text-red-600" />
                {language === "en" ? "Required Documents" : "आवश्यक दस्तावेज"}
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {scheme.documents[language].map((doc, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 bg-red-50 p-4 rounded-lg border border-red-200"
                  >
                    <FileText className="w-5 h-5 text-red-600 flex-shrink-0" />
                    <span className="text-red-800 font-medium">{doc}</span>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Contact Information */}
            <div className="bg-white rounded-xl shadow-sm p-6 sticky top-24">
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                {language === "en" ? "Contact Information" : "संपर्क जानकारी"}
              </h2>
              <div className="space-y-4">
                <div>
                  <div className="flex items-center gap-2 text-blue-800 mb-2">
                    <Phone className="w-5 h-5" />
                    <span className="font-semibold">
                      {language === "en" ? "Phone" : "फोन"}
                    </span>
                  </div>
                  {scheme.contact.phone.map((phone, index) => (
                    <p key={index} className="text-blue-700 ml-7 mb-1">
                      <a href={`tel:${phone}`} className="hover:underline">
                        {phone}
                      </a>
                    </p>
                  ))}
                </div>

                <div>
                  <div className="flex items-center gap-2 text-blue-800 mb-2">
                    <Mail className="w-5 h-5" />
                    <span className="font-semibold">
                      {language === "en" ? "Email" : "ईमेल"}
                    </span>
                  </div>
                  <p className="text-blue-700 ml-7">
                    <a
                      href={`mailto:${scheme.contact.email}`}
                      className="hover:underline"
                    >
                      {scheme.contact.email}
                    </a>
                  </p>
                </div>

                <div>
                  <div className="flex items-center gap-2 text-blue-800 mb-2">
                    <MapPin className="w-5 h-5" />
                    <span className="font-semibold">
                      {language === "en" ? "Office" : "कार्यालय"}
                    </span>
                  </div>
                  <p className="text-blue-700 ml-7 text-sm leading-relaxed">
                    {scheme.contact.office[language]}
                  </p>
                </div>

                <div>
                  <div className="flex items-center gap-2 text-blue-800 mb-2">
                    <Globe className="w-5 h-5" />
                    <span className="font-semibold">
                      {language === "en" ? "Website" : "वेबसाइट"}
                    </span>
                  </div>
                  <a
                    href={scheme.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 underline ml-7 text-sm break-all"
                  >
                    {scheme.website}
                  </a>
                </div>
              </div>

              {/* Apply Button */}
              <div className="mt-6 pt-6 border-t border-gray-200">
                <a
                  href={scheme.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-bold py-3 px-4 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
                >
                  <Globe className="w-5 h-5" />
                  {language === "en" ? "Apply Online" : "ऑनलाइन आवेदन करें"}
                </a>
              </div>
            </div>

            {/* Important Notices */}
            {scheme.notices[language].length > 0 && (
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                  <Bell className="w-5 h-5 text-orange-600" />
                  {language === "en"
                    ? "Important Notices"
                    : "महत्वपूर्ण सूचनाएं"}
                </h2>
                <div className="space-y-3">
                  {scheme.notices[language].map((notice, index) => (
                    <div
                      key={index}
                      className="bg-orange-50 border-l-4 border-orange-400 p-3 rounded-r-lg"
                    >
                      <p className="text-orange-800 text-sm font-medium">
                        {notice}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const SakshamUI: React.FC = () => {
  const [currentView, setCurrentView] = useState<"list" | "detail">("list");
  const [selectedSchemeId, setSelectedSchemeId] = useState<string | null>(null);
  const [language, setLanguage] = useState<"en" | "hi">("en");

  const handleViewDetails = (id: string) => {
    setSelectedSchemeId(id);
    setCurrentView("detail");
  };

  const handleBackToList = () => {
    setCurrentView("list");
    setSelectedSchemeId(null);
  };

  const selectedScheme = selectedSchemeId
    ? sampleSchemes.find((s) => s.id === selectedSchemeId)
    : null;

  if (currentView === "detail" && selectedScheme) {
    return (
      <SakshamDetailPage
        scheme={selectedScheme}
        language={language}
        onBack={handleBackToList}
      />
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Stats Section */}
      {/* <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="bg-white bg-opacity-10 rounded-lg p-6">
              <div className="text-3xl font-bold mb-2">
                {sampleSchemes.length}
              </div>
              <div className="text-blue-100">
                {language === "en" ? "Active Schemes" : "सक्रिय योजनाएं"}
              </div>
            </div>
            <div className="bg-white bg-opacity-10 rounded-lg p-6">
              <div className="text-3xl font-bold mb-2">50,000+</div>
              <div className="text-blue-100">
                {language === "en" ? "Beneficiaries" : "लाभार्थी"}
              </div>
            </div>
            <div className="bg-white bg-opacity-10 rounded-lg p-6">
              <div className="text-3xl font-bold mb-2">₹10Cr+</div>
              <div className="text-blue-100">
                {language === "en" ? "Funds Disbursed" : "वितरित धनराशि"}
              </div>
            </div>
          </div>
        </div>
      </div> */}

      {/* Cards Grid */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sampleSchemes.map((scheme) => (
            <SakshamCard
              key={scheme.id}
              scheme={scheme}
              language={language}
              onViewDetails={handleViewDetails}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SakshamUI;
