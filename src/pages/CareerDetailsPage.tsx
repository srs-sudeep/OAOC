import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  AlertCircle,
  BookOpen,
  Calendar,
  Clock,
  Download,
  ExternalLink,
  FileText,
  Globe,
  Phone,
  Target,
  Users,
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function CareerDetailsPage() {
  const { id } = useParams();
  const [exam, setExam] = useState(null);
  const [loading, setLoading] = useState(true);
  const { language, t } = useLanguage();

  const getIcon = (type) => {
    const iconMap = {
      examType: <BookOpen className="w-4 h-4" />,
      eligibility: <Users className="w-4 h-4" />,
      applicationProcess: <FileText className="w-4 h-4" />,
      examPattern: <Calendar className="w-4 h-4" />,
      reservation: <AlertCircle className="w-4 h-4" />,
      specialNotes: <AlertCircle className="w-4 h-4" />,
      contact: <Phone className="w-4 h-4" />,
      website: <Globe className="w-4 h-4" />,
      download: <Download className="w-4 h-4" />,
    };
    return iconMap[type] || <FileText className="w-4 h-4" />;
  };

  useEffect(() => {
    const fetchExam = async () => {
      try {
        const res = await fetch(`http://localhost:8000/api/careers/${id}`);
        console.log("res", res);

        const data = await res.json();
        console.log("data---", data);

        setExam(data);
      } catch (error) {
        console.error("Error fetching exam details:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchExam();
  }, [id]);

  if (loading)
    return (
      <div className="p-10 text-center">
        {language === "en" ? "Loading..." : "लोड हो रहा है..."}
      </div>
    );
  if (!exam)
    return (
      <div className="p-10 text-center">
        {language === "en" ? "No data found." : "डेटा नहीं मिला।"}
      </div>
    );

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-orange-50">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl font-bold mb-4 py-1.5 bg-gradient-to-r from-white to-orange-200 bg-clip-text text-transparent">
              {exam.title?.[language]}
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed mb-2">
              {exam.examType?.[language]}
            </p>
            <div className="flex justify-center space-x-4">
              <div className="flex items-center text-blue-200">
                {/* <Target className="w-5 h-5 mr-2" /> */}
                <span>ID : {exam.id}</span>
              </div>
              <div className="flex items-center text-blue-200">
                {/* <Clock className="w-5 h-5 mr-2" /> */}
                <span>
                  {language === "en" ? "Updated:" : "अपडेट:"} {exam.updatedAt}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* details......***** */}
        <div className=" flex items-center justify-center p-4 z-50">
          <div className="bg-white max-w-5xl rounded-xl  w-full h-auto overflow-y-auto">
            {/* Modal Header */}
            {/* <div className="sticky top-0 bg-white bg-gradient-to-r from-blue-600 to-indigo-600 p-6 text-white flex justify-between items-start">
              <div className="flex-1">
                <h2 className="text-xl font-bold mb-2">
                  {exam.title?.[language]}
                </h2>
                <div className="flex flex-wrap gap-4 text-blue-100 text-sm">
                  <span>ID : {exam.id}</span>{" "}
                  <span>
                    {language === "en" ? "Updated:" : "अपडेट:"} {exam.updatedAt}
                  </span>
                </div>
              </div>
            </div> */}

            {/* all content */}
            <div className="p-6">
              <div className="space-y-6">
                {/* Description */}
                <div className="p-4 bg-blue-50 rounded-lg border-l-4 border-blue-400">
                  <h3 className="font-semibold text-blue-800 mb-2">
                    {language === "en" ? "Exam Details" : "परीक्षा विवरण"}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {exam.description?.[language]}
                  </p>
                </div>

                {/* Student Info */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 bg-green-50 rounded-lg border-l-4 border-green-400">
                    <h3 className="font-semibold text-green-800 mb-2">
                      {language === "en"
                        ? "Student Information"
                        : "छात्र जानकारी"}
                    </h3>
                    <div className="space-y-2 text-sm">
                      <div>
                        <span className="font-medium">
                          {language === "en"
                            ? "Current Status:"
                            : "वर्तमान स्थिति:"}
                        </span>{" "}
                        {exam.currentStatus}
                      </div>
                      <div>
                        <span className="font-medium">
                          {language === "en"
                            ? "Current Education:"
                            : "वर्तमान शिक्षा:"}
                        </span>{" "}
                        {exam.currentEducation}
                      </div>
                      <div>
                        <span className="font-medium">
                          {language === "en" ? "Stream:" : "स्ट्रीम:"}
                        </span>{" "}
                        {exam.stream}
                      </div>
                      <div className="flex flex-wrap gap-1 mt-2">
                        <span className="font-medium">
                          {language === "en"
                            ? "Area of Interest:"
                            : "रुचि क्षेत्र:"}
                        </span>
                        {exam.interests.map((interest, index) => (
                          <span
                            key={index}
                            className="px-2 py-1 bg-green-200 text-green-800 rounded text-xs"
                          >
                            {interest}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="p-4 bg-purple-50 rounded-lg border-l-4 border-purple-400">
                    <h3 className="font-semibold text-purple-800 mb-2">
                      {language === "en"
                        ? "Contact Information"
                        : "संपर्क जानकारी"}
                    </h3>
                    <p className="text-gray-700 text-sm">
                      {exam.contact?.[language]}
                    </p>
                  </div>
                </div>

                {/* Eligibility */}
                <div className="p-4 bg-orange-50 rounded-lg border-l-4 border-orange-400">
                  <h3 className="font-semibold text-orange-800 mb-2 flex items-center gap-2">
                    {getIcon("eligibility")}{" "}
                    {language === "en"
                      ? "Eligibility Criteria"
                      : "पात्रता मानदंड"}
                  </h3>
                  <p className="text-gray-700">
                    {exam.eligibility?.[language]}
                  </p>
                </div>

                {/* Application Process */}
                <div className="p-4 bg-yellow-50 rounded-lg border-l-4 border-yellow-400">
                  <h3 className="font-semibold text-yellow-800 mb-2 flex items-center gap-2">
                    {getIcon("applicationProcess")}
                    {language === "en"
                      ? "Application Process"
                      : "आवेदन प्रक्रिया"}
                  </h3>
                  <p className="text-gray-700">
                    {exam.applicationProcess?.[language]}
                  </p>
                </div>

                {/* Exam Pattern */}
                <div className="p-4 bg-indigo-50 rounded-lg border-l-4 border-indigo-400">
                  <h3 className="font-semibold text-indigo-800 mb-2 flex items-center gap-2">
                    {getIcon("examPattern")}
                    {language === "en" ? "Exam Pattern" : "परीक्षा पैटर्न"}
                  </h3>
                  <p className="text-gray-700">
                    {exam.examPattern?.[language]}
                  </p>
                </div>

                {/* Exam Structure */}
                {exam.examStructure && exam.examStructure.length > 0 && (
                  <div className="p-4 bg-teal-50 rounded-lg border-l-4 border-teal-400">
                    <h3 className="font-semibold text-teal-800 mb-3 flex items-center gap-2">
                      {getIcon("examStructure")}
                      {language === "en" ? "Exam Structure" : "परीक्षा संरचना"}
                    </h3>
                    <div className="grid gap-4">
                      {exam.examStructure.map((item, index) => (
                        <div
                          key={item._id || index}
                          className="bg-white rounded-lg shadow border p-4 space-y-2 text-sm"
                        >
                          <div>
                            <span className="font-medium text-gray-800">
                              {language === "en" ? "Subject:" : "विषय:"}
                            </span>{" "}
                            {item.subject?.[language]}
                          </div>
                          <div>
                            <span className="font-medium text-gray-800">
                              {language === "en"
                                ? "Number of Questions:"
                                : "प्रश्नों की संख्या:"}
                            </span>{" "}
                            {item.questions}
                          </div>
                          <div>
                            <span className="font-medium text-gray-800">
                              {language === "en" ? "Total Marks:" : "कुल अंक:"}
                            </span>{" "}
                            {item.marks}
                          </div>
                          <div>
                            <span className="font-medium text-gray-800">
                              {language === "en" ? "Duration:" : "समय अवधि:"}
                            </span>{" "}
                            {item.duration}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Reservation */}
                <div className="p-4 bg-pink-50 rounded-lg border-l-4 border-pink-400">
                  <h3 className="font-semibold text-pink-800 mb-2 flex items-center gap-2">
                    {getIcon("reservation")}{" "}
                    {language === "en" ? "Reservation Policy" : "आरक्षण नीति"}
                  </h3>
                  <p className="text-gray-700">
                    {exam.reservation?.[language]}
                  </p>
                </div>

                {/* Special Notes */}
                <div className="p-4 bg-red-50 rounded-lg border-l-4 border-red-400">
                  <h3 className="font-semibold text-red-800 mb-2 flex items-center gap-2">
                    {getIcon("specialNotes")}{" "}
                    {language === "en"
                      ? "Special Instructions"
                      : "विशेष निर्देश"}
                  </h3>
                  <p className="text-gray-700">
                    {exam.specialNotes?.[language]}
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-8 pt-6 border-t border-gray-200 flex flex-wrap gap-3">
                {exam.websiteLink && (
                  <a
                    href={exam.websiteLink}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300 font-medium group"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Globe className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                    {language === "en"
                      ? "Official Website"
                      : "आधिकारिक वेबसाइट"}
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}

                {exam.uploadFile && (
                  <a
                    // href={exam.uploadFile}
                    target="_blank"
                    href={`http://localhost:8000${exam.uploadFile}`}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-300 font-medium group"
                    download
                    rel="noopener noreferrer"
                  >
                    <Download className="w-5 h-5 group-hover:translate-y-1 transition-transform duration-300" />
                    {language === "en" ? "Download File" : "फाइल डाउनलोड करें"}
                  </a>
                )}

                {/* <button
                  onClick={() =>
                    navigator.clipboard.writeText(
                      exam.contact?.[language] || ""
                    )
                  }
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors duration-300 font-medium"
                >
                  <Phone className="w-5 h-5" />
                  {language === "en" ? "Copy Contact" : "संपर्क कॉपी करें"}
                </button> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
