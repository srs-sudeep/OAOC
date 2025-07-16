import SchemeCard from "@/components/SchemeCard";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  Department,
  fetchSchemes,
  getDepartmentById,
  Scheme,
} from "@/lib/departmentUtils";
import { ArrowLeft, Clock, FileText, MapPin, Phone, Users } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const DepartmentDetail = () => {
  const { id } = useParams();
  const { language, t } = useLanguage();
  const [department, setDepartment] = useState<Department | null>(null);
  const [schemes, setSchemes] = useState<Scheme[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      if (!id) return;

      try {
        const [departmentData, schemesData] = await Promise.all([
          getDepartmentById(id),
          fetchSchemes(id),
        ]);

        setDepartment(departmentData);
        setSchemes(schemesData.schemes);
      } catch (error) {
        console.error("Error loading department data:", error);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-orange-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-900 mx-auto"></div>
          <p className="mt-4 text-blue-900 font-medium">
            {language === "en"
              ? "Loading department details..."
              : "विभाग विवरण लोड हो रहे हैं..."}
          </p>
        </div>
      </div>
    );
  }

  if (!department) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-orange-50 flex items-center justify-center">
        <div className="text-center p-8 bg-white rounded-2xl shadow-2xl border border-gray-100 max-w-md mx-4">
          <div className="text-6xl mb-6">🏛️</div>
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            {language === "en" ? "Department Not Found" : "विभाग नहीं मिला"}
          </h1>
          <p className="text-gray-600 mb-6">
            {language === "en"
              ? "The requested department could not be found."
              : "अनुरोधित विभाग नहीं मिल सका।"}
          </p>
          <Link to="/departments">
            <Button className="bg-gradient-to-r from-blue-900 to-blue-800 hover:from-blue-800 hover:to-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl">
              {t("button.backToDepartments")}
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-orange-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/departments"
            className="inline-flex items-center text-blue-200 hover:text-white mb-6 transition-colors duration-200 group"
          >
            <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform duration-200" />
            <span className="font-medium">{t("button.backToDepartments")}</span>
          </Link>

          <div className="flex flex-col lg:flex-row items-start lg:items-center space-y-6 lg:space-y-0 lg:space-x-8">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
              <div className="text-7xl lg:text-8xl">{department.icon}</div>
            </div>
            <div className="flex-1">
              <h1 className="text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                {department.name[language]}
              </h1>
              <p className="text-xl text-blue-100 leading-relaxed mb-6 max-w-3xl">
                {department.description[language]}
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                  <span className="text-blue-200 font-medium">
                    {schemes.length}{" "}
                    {language === "en" ? "Schemes Available" : "योजनाएं उपलब्ध"}
                  </span>
                </div>
                <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                  <span className="text-blue-200 font-medium">
                    {language === "en"
                      ? "Government of Chhattisgarh"
                      : "छत्तीसगढ़ सरकार"}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Department Info Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-blue-500 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="flex items-center mb-4">
              <div className="bg-blue-100 p-3 rounded-full">
                <Phone className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="ml-3 text-lg font-semibold text-gray-800">
                {language === "en" ? "Contact Information" : "संपर्क जानकारी"}
              </h3>
            </div>
            <div className="space-y-2 text-sm text-gray-600">
              <p className="font-medium">📞 {department.contact.phone}</p>
              <p className="font-medium">✉️ {department.contact.email}</p>
              <p className="font-medium">
                ☎️ {language === "en" ? "Helpline:" : "हेल्पलाइन:"}{" "}
                {department.contact.helpline}
              </p>
              <p>
                {language === "en"
                  ? "Available: Mon-Fri 10AM-6PM"
                  : "उपलब्ध: सोम-शुक्र 10AM-6PM"}
              </p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-orange-500 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="flex items-center mb-4">
              <div className="bg-orange-100 p-3 rounded-full">
                <MapPin className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="ml-3 text-lg font-semibold text-gray-800">
                {language === "en" ? "Office Location" : "कार्यालय स्थान"}
              </h3>
            </div>
            <div className="text-sm text-gray-600">
              <p>{department.office.address[language]}</p>
              <p>
                {language === "en" ? "Pincode:" : "पिन कोड:"}{" "}
                {department.office.pincode}
              </p>
              <a
                href={department.website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                {language === "en" ? "Visit Website" : "वेबसाइट देखें"}
              </a>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-green-500 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="flex items-center mb-4">
              <div className="bg-green-100 p-3 rounded-full">
                <Users className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="ml-3 text-lg font-semibold text-gray-800">
                {language === "en" ? "Department Head" : "विभागाध्यक्ष"}
              </h3>
            </div>
            <div className="text-sm text-gray-600">
              {department.personsOfContact.length > 0 && (
                <>
                  <p className="font-medium">
                    {department.personsOfContact[0].designation[language]}
                  </p>
                  <p>{department.personsOfContact[0].name}</p>
                  <p>📞 {department.personsOfContact[0].phone}</p>
                  <p>✉️ {department.personsOfContact[0].email}</p>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Schemes Section */}
        <div className="mb-12">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">
              {t("schemes.title")}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {language === "en"
                ? "Explore government schemes and services offered by this department. Click on any scheme to learn more and apply."
                : "इस विभाग द्वारा प्रदान की जाने वाली सरकारी योजनाओं और सेवाओं का अन्वेषण करें। अधिक जानने और आवेदन करने के लिए किसी भी योजना पर क्लिक करें।"}
            </p>
          </div>

          {schemes.length > 0 ? (
            <>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {schemes.map((scheme) => (
                  <SchemeCard
                    key={scheme.id}
                    scheme={scheme}
                    departmentId={department.id}
                  />
                ))}
              </div>

              {/* Statistics */}
              <div className="mt-16 bg-gradient-to-r from-blue-900 to-indigo-800 text-white rounded-2xl p-8">
                <div className="grid md:grid-cols-4 gap-6 text-center">
                  <div>
                    <div className="text-3xl font-bold text-orange-300 mb-2">
                      {schemes.length}
                    </div>
                    <div className="text-blue-200">
                      {language === "en" ? "Active Schemes" : "सक्रिय योजनाएं"}
                    </div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-orange-300 mb-2">
                      24/7
                    </div>
                    <div className="text-blue-200">
                      {language === "en" ? "Online Support" : "ऑनलाइन सहायता"}
                    </div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-orange-300 mb-2">
                      100%
                    </div>
                    <div className="text-blue-200">
                      {language === "en"
                        ? "Digital Process"
                        : "डिजिटल प्रक्रिया"}
                    </div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-orange-300 mb-2">
                      7-21
                    </div>
                    <div className="text-blue-200">
                      {language === "en" ? "Days Processing" : "दिन प्रसंस्करण"}
                    </div>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <div className="text-center py-16">
              <div className="bg-white rounded-2xl shadow-xl p-12 max-w-2xl mx-auto border border-gray-100">
                <div className="text-6xl mb-6">📋</div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  {language === "en"
                    ? "No Schemes Available"
                    : "कोई योजना उपलब्ध नहीं"}
                </h3>
                <p className="text-gray-600 text-lg mb-8">
                  {language === "en"
                    ? "This department currently has no active schemes. Please check back later or contact the department directly for more information."
                    : "इस विभाग में वर्तमान में कोई सक्रिय योजना नहीं है। कृपया बाद में वापस देखें या अधिक जानकारी के लिए विभाग से सीधे संपर्क करें।"}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/departments">
                    <Button className="bg-blue-900 hover:bg-blue-800 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300">
                      {language === "en"
                        ? "Browse Other Departments"
                        : "अन्य विभाग देखें"}
                    </Button>
                  </Link>
                  <Link to="/contact">
                    <Button
                      variant="outline"
                      className="border-blue-900 text-blue-900 hover:bg-blue-50 px-8 py-3 rounded-lg font-medium transition-all duration-300"
                    >
                      {language === "en" ? "Contact Support" : "सहायता संपर्क"}
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Additional Resources */}
        <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
          <h3 className="text-2xl font-bold text-blue-900 mb-6 text-center">
            {language === "en" ? "Additional Resources" : "अतिरिक्त संसाधन"}
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors duration-300">
              <FileText className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h4 className="font-semibold text-gray-800 mb-2">
                {language === "en" ? "Documents Required" : "आवश्यक दस्तावेज"}
              </h4>
              <p className="text-sm text-gray-600">
                {language === "en"
                  ? "Download checklist of required documents"
                  : "आवश्यक दस्तावेजों की चेकलिस्ट डाउनलोड करें"}
              </p>
            </div>
            <div className="text-center p-6 bg-orange-50 rounded-xl hover:bg-orange-100 transition-colors duration-300">
              <Clock className="w-12 h-12 text-orange-600 mx-auto mb-4" />
              <h4 className="font-semibold text-gray-800 mb-2">
                {language === "en"
                  ? "Processing Timeline"
                  : "प्रसंस्करण समयसीमा"}
              </h4>
              <p className="text-sm text-gray-600">
                {language === "en"
                  ? "View estimated processing times"
                  : "अनुमानित प्रसंस्करण समय देखें"}
              </p>
            </div>
            <div className="text-center p-6 bg-green-50 rounded-xl hover:bg-green-100 transition-colors duration-300">
              <Users className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h4 className="font-semibold text-gray-800 mb-2">
                {language === "en" ? "Help & Support" : "सहायता और समर्थन"}
              </h4>
              <p className="text-sm text-gray-600">
                {language === "en"
                  ? "Get assistance from our support team"
                  : "हमारी सहायता टीम से सहायता प्राप्त करें"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DepartmentDetail;
