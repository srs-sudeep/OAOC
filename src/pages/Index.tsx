import DepartmentCard from "@/components/DepartmentCard";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { Department, fetchDepartments } from "@/lib/departmentUtils";
import {
  ArrowRight,
  Award,
  Building2,
  CheckCircle,
  Clock,
  Globe,
  Mail,
  MapPin,
  Phone,
  Shield,
  Users,
  Zap,
} from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ServerError from "../components/ServerError";

const Index = () => {
  const { language, t } = useLanguage();
  const [departments, setDepartments] = useState<Department[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadDepartments = async () => {
      try {
        const departmentsData = await fetchDepartments();
        setDepartments(departmentsData.departments || []);
      } catch (error) {
        console.error("Error loading departments:", error);
      } finally {
        setLoading(false);
      }
    };
    loadDepartments();
  }, []);

  // Loading state for departments
  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-orange-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-900 mx-auto"></div>
          <p className="mt-4 text-blue-900 font-medium">
            {language === "en"
              ? "Loading departments..."
              : "विभाग लोड हो रहे हैं..."}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-orange-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white overflow-hidden pt-16">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-96 h-96 bg-orange-400/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-blue-300/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-orange-500/5 to-blue-500/5 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center animate-fade-in">
            <div className="mb-8 animate-slide-up">
              <div className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-md rounded-full text-sm font-medium border border-white/20 shadow-lg">
                <span className="text-2xl mr-3">🏛️</span>
                <span className="bg-gradient-to-r from-white to-orange-200 bg-clip-text text-transparent font-bold">
                  {language === "en"
                    ? "Government of Chhattisgarh"
                    : "छत्तीसगढ़ सरकार"}
                </span>
                <div className="ml-3 px-2 py-1 bg-orange-500 rounded-full">
                  <span className="text-xs font-bold">OFFICIAL</span>
                </div>
              </div>
            </div>

            <h1 className="text-6xl md:text-8xl font-bold mb-8 animate-slide-up bg-gradient-to-r from-white via-orange-200 to-white bg-clip-text text-transparent leading-tight">
              {t("hero.title")}
            </h1>

            <p className="text-2xl md:text-4xl mb-6 opacity-90 animate-slide-up stagger-delay-1 font-light bg-gradient-to-r from-blue-100 to-orange-100 bg-clip-text text-transparent">
              {t("hero.subtitle")}
            </p>

            <p className="text-lg mb-12 opacity-80 max-w-4xl mx-auto animate-slide-up stagger-delay-2 leading-relaxed text-blue-100">
              {t("hero.description")}
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center animate-slide-up stagger-delay-3 mb-12">
              <Link to="/departments">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-12 py-6 text-xl font-semibold transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-orange-500/25 rounded-xl"
                >
                  {t("nav.departments")}
                  <ArrowRight className="w-6 h-6 ml-3" />
                </Button>
              </Link>

              <Link to="/about">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white/30 text-black hover:bg-white/10 backdrop-blur-sm px-12 py-6 text-xl font-semibold transform hover:scale-105 transition-all duration-300 shadow-2xl rounded-xl"
                >
                  {t("button.learnMore")}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Chhattisgarh Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
              {language === "en"
                ? "Chhattisgarh at a Glance"
                : "छत्तीसगढ़ एक नज़र में"}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {language === "en"
                ? "Discover the key statistics and achievements of our progressive state"
                : "हमारे प्रगतिशील राज्य के मुख्य आंकड़ों और उपलब्धियों की खोज करें"}
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 shadow-xl hover:shadow-2xl hover:-translate-y-3 transition-all duration-300 animate-scale-in border border-blue-200">
              <div className="bg-blue-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Building2 className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl font-bold text-blue-900 mb-2">28</div>
              <p className="text-gray-700 font-semibold">
                {language === "en" ? "Districts" : "जिले"}
              </p>
            </div>

            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-orange-50 to-orange-100 shadow-xl hover:shadow-2xl hover:-translate-y-3 transition-all duration-300 animate-scale-in stagger-delay-1 border border-orange-200">
              <div className="bg-orange-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Users className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl font-bold text-orange-600 mb-2">
                2.55 Cr
              </div>
              <p className="text-gray-700 font-semibold">
                {language === "en" ? "Population" : "जनसंख्या"}
              </p>
            </div>

            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-green-50 to-green-100 shadow-xl hover:shadow-2xl hover:-translate-y-3 transition-all duration-300 animate-scale-in stagger-delay-2 border border-green-200">
              <div className="bg-green-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl font-bold text-green-600 mb-2">44%</div>
              <p className="text-gray-700 font-semibold">
                {language === "en" ? "Forest Cover" : "वन आवरण"}
              </p>
            </div>

            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-purple-50 to-purple-100 shadow-xl hover:shadow-2xl hover:-translate-y-3 transition-all duration-300 animate-scale-in stagger-delay-3 border border-purple-200">
              <div className="bg-purple-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Award className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl font-bold text-purple-600 mb-2">15%</div>
              <p className="text-gray-700 font-semibold">
                {language === "en" ? "Mineral Production" : "खनिज उत्पादन"}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
              {language === "en"
                ? "Digital Chhattisgarh Features"
                : "डिजिटल छत्तीसगढ़ सुविधाएं"}
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              {language === "en"
                ? "Empowering citizens of Chhattisgarh with cutting-edge digital governance solutions for a better tomorrow"
                : "बेहतर कल के लिए अत्याधुनिक डिजिटल गवर्नेंस समाधानों के साथ छत्तीसगढ़ के नागरिकों को सशक्त बनाना"}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center group">
              <div className="bg-white p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-3 border border-gray-100 animate-scale-in">
                <div className="w-24 h-24 bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl flex items-center justify-center mx-auto mb-8 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-xl">
                  <Users className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-blue-900 mb-4">
                  {language === "en" ? "Citizen Centric" : "नागरिक केंद्रित"}
                </h3>
                <p className="text-gray-700 leading-relaxed text-lg">
                  {language === "en"
                    ? "Every service thoughtfully designed to meet the unique needs of Chhattisgarh citizens"
                    : "छत्तीसगढ़ के नागरिकों की अनूठी आवश्यकताओं को पूरा करने के लिए सोच-समझकर डिज़ाइन की गई हर सेवा"}
                </p>
              </div>
            </div>

            <div className="text-center group">
              <div className="bg-white p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-3 border border-gray-100 animate-scale-in stagger-delay-1">
                <div className="w-24 h-24 bg-gradient-to-br from-orange-500 to-orange-700 rounded-3xl flex items-center justify-center mx-auto mb-8 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-xl">
                  <Shield className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-orange-600 mb-4">
                  {language === "en"
                    ? "Secure & Reliable"
                    : "सुरक्षित और विश्वसनीय"}
                </h3>
                <p className="text-gray-700 leading-relaxed text-lg">
                  {language === "en"
                    ? "Enterprise-grade security ensuring your data and transactions are completely protected"
                    : "एंटरप्राइज़-ग्रेड सुरक्षा जो सुनिश्चित करती है कि आपका डेटा और लेनदेन पूरी तरह सुरक्षित है"}
                </p>
              </div>
            </div>

            <div className="text-center group">
              <div className="bg-white p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-3 border border-gray-100 animate-scale-in stagger-delay-2">
                <div className="w-24 h-24 bg-gradient-to-br from-green-600 to-green-800 rounded-3xl flex items-center justify-center mx-auto mb-8 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-xl">
                  <Globe className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-green-600 mb-4">
                  {language === "en" ? "Multi-lingual" : "बहुभाषी"}
                </h3>
                <p className="text-gray-700 leading-relaxed text-lg">
                  {language === "en"
                    ? "Seamlessly available in Hindi and English for inclusive accessibility across Chhattisgarh"
                    : "छत्तीसगढ़ में समावेशी पहुंच के लिए हिंदी और अंग्रेजी में निर्बाध रूप से उपलब्ध"}
                </p>
              </div>
            </div>
          </div>

          {/* Additional Features Row */}
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 animate-scale-in">
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 p-3 rounded-full">
                  <Clock className="w-6 h-6 text-blue-600" />
                </div>
                <h4 className="ml-3 font-bold text-gray-800">
                  {language === "en" ? "24/7 Availability" : "24/7 उपलब्धता"}
                </h4>
              </div>
              <p className="text-gray-600">
                {language === "en"
                  ? "Access services anytime, anywhere"
                  : "कभी भी, कहीं भी सेवाओं तक पहुंच"}
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 animate-scale-in stagger-delay-1">
              <div className="flex items-center mb-4">
                <div className="bg-orange-100 p-3 rounded-full">
                  <Zap className="w-6 h-6 text-orange-600" />
                </div>
                <h4 className="ml-3 font-bold text-gray-800">
                  {language === "en"
                    ? "Instant Processing"
                    : "तुरंत प्रसंस्करण"}
                </h4>
              </div>
              <p className="text-gray-600">
                {language === "en"
                  ? "Fast and efficient service delivery"
                  : "तेज़ और कुशल सेवा वितरण"}
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 animate-scale-in stagger-delay-2">
              <div className="flex items-center mb-4">
                <div className="bg-green-100 p-3 rounded-full">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                </div>
                <h4 className="ml-3 font-bold text-gray-800">
                  {language === "en"
                    ? "Real-time Tracking"
                    : "वास्तविक समय ट्रैकिंग"}
                </h4>
              </div>
              <p className="text-gray-600">
                {language === "en"
                  ? "Monitor your application status live"
                  : "अपने आवेदन की स्थिति लाइव देखें"}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Departments Preview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
              {t("departments.title")}
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              {t("departments.subtitle")}
            </p>
          </div>

          {departments.length === 0 ? (
            <ServerError />
          ) : (
            <>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                {departments.slice(0, 6).map((department, index) => (
                  <div
                    key={department.id}
                    className={`animate-scale-in stagger-delay-${Math.min(
                      index + 1,
                      4
                    )}`}
                  >
                    <DepartmentCard department={department} />
                  </div>
                ))}
              </div>

              <div className="text-center animate-fade-in">
                <Link to="/departments">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-blue-900 to-blue-800 hover:from-blue-800 hover:to-blue-700 text-white px-16 py-6 text-xl font-semibold transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-blue-500/25 rounded-xl text-wrap"
                  >
                    {language === "en"
                      ? "View All Departments"
                      : "सभी विभाग देखें"}
                    <ArrowRight className="w-6 h-6 ml-3" />
                  </Button>
                </Link>
              </div>
            </>
          )}
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-indigo-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              {language === "en" ? "Get in Touch" : "संपर्क में रहें"}
            </h2>
            <p className="text-blue-200 text-xl max-w-2xl mx-auto">
              {language === "en"
                ? "We are here to serve you. Reach out to us for any assistance or queries."
                : "हम आपकी सेवा के लिए यहां हैं। किसी भी सहायता या प्रश्न के लिए हमसे संपर्क करें।"}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-300 animate-scale-in">
              <div className="bg-orange-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4">
                {language === "en" ? "Visit Us" : "हमसे मिलें"}
              </h3>
              <p className="text-blue-100 leading-relaxed">
                {language === "en"
                  ? "Secretariat Complex, Civil Lines, Raipur, Chhattisgarh - 492001"
                  : "सचिवालय परिसर, सिविल लाइन्स, रायपुर, छत्तीसगढ़ - 492001"}
              </p>
            </div>

            <div className="text-center p-8 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-300 animate-scale-in stagger-delay-1">
              <div className="bg-orange-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4">
                {language === "en" ? "Call Us" : "कॉल करें"}
              </h3>
              <p className="text-blue-100 text-lg font-bold mb-2">
                1800-233-4567
              </p>
              <p className="text-blue-200 text-sm">
                {language === "en" ? "Toll Free 24/7" : "टोल फ्री 24/7"}
              </p>
            </div>

            <div className="text-center p-8 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-300 animate-scale-in stagger-delay-2">
              <div className="bg-orange-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4">
                {language === "en" ? "Email Us" : "ईमेल करें"}
              </h3>
              <p className="text-blue-100 font-medium">support@cg.gov.in</p>
              <p className="text-blue-200 text-sm mt-2">
                {language === "en"
                  ? "Quick Response Guaranteed"
                  : "त्वरित उत्तर की गारंटी"}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
