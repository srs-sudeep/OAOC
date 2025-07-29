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
  Home,
  Layers,
  Mail,
  MapPin,
  Network,
  Phone,
  Shield,
  Users,
  Zap,
} from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ServerError from "../components/ServerError";
import HeroSection from "./HeroSection";
import ImageSlideshow from "@/components/ui/ImageSlideshow";
import HomeSlider from "@/components/HomeSlider";

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
      <HomeSlider />

      {/* middle slider section */}
      <section className="py-10 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center p-2 bg-blue-100 rounded-full mb-8">
              <div className="flex items-center space-x-2 bg-white px-6 py-3 rounded-full shadow-lg">
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-semibold text-blue-700 uppercase tracking-wider">
                  {language === "en"
                    ? "Chhattisgarh Tourism and Culture"
                    : "छत्तीसगढ़ पर्यटन और संस्कृति"}
                </span>
              </div>
            </div>

            <div className="text-center mb-6 animate-fade-in ">
              <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
                {language === "en"
                  ? "Chhattisgarh Tourism and Culture"
                  : "छत्तीसगढ़ पर्यटन और संस्कृति"}
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {language === "en"
                  ? "Chhattisgarh is an Indian state rich in cultural heritage and diverse natural beauty. Its tourism and culture are symbols of the state's identity and pride."
                  : "छत्तीसगढ़ एक समृद्ध सांस्कृतिक विरासत और विविध प्राकृतिक सौंदर्य से भरपूर भारतीय राज्य है। यहां का पर्यटन और संस्कृति राज्य की पहचान और गर्व का प्रतीक हैं।"}
              </p>
            </div>
          </div>

          {/* Enhanced Slideshow Container */}
          <div className="relative ">
            {/* Glow Effect Background */}
            {/* <div className="absolute  -inset-8 bg-gradient-to-r from-blue-200/30 via-blue-200/30 to-blue-200/30 rounded-3xl blur-2xl"></div> */}

            {/* Main Slideshow */}
            <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-4 shadow-2xl border border-blue-100/50">
              <ImageSlideshow />
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-6 -right-6 w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-500 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-gradient-to-br from-blue-400 to-blue-500 rounded-full opacity-30 animate-pulse delay-1000"></div>
          </div>
        </div>
      </section>

      {/* raipur Stats Section */}
      <section className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* 1 */}
          <div className="inline-flex items-center justify-center p-2 bg-blue-100 rounded-full mb-8">
            <div className="flex items-center space-x-2 bg-white px-6 py-3 rounded-full shadow-lg">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-semibold text-blue-700 uppercase tracking-wider">
                {language === "en"
                  ? "Raipur at a Glance"
                  : "रायपुर एक नज़र में"}
              </span>
            </div>
          </div>

          {/* 2 */}
          <div className="text-center mb-6 animate-fade-in ">
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
              {language === "en" ? "Raipur at a Glance" : "रायपुर एक नज़र में"}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {language === "en"
                ? "Raipur at a glance – where culture meets development, and every step tells a story."
                : "एक नजर में रायपुर — जहां संस्कृति और विकास एक साथ चलते हैं और हर कदम एक कहानी कहता है।"}
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 p-6 mx-20 ">
            {/* Blocks */}
            <div className="p-8 rounded-2xl bg-gray-100 hover:bg-gray-200 transition-all duration-300 hover:scale-105">
              <div className="flex flex-col items-start">
                <div className="mb-6">
                  <Layers className="w-8 h-8 text-gray-600" />
                </div>
                <div className="text-3xl font-bold text-gray-800 mb-2">15</div>
                <p className="text-gray-700 text-sm font-medium">
                  {language === "en" ? "Blocks" : "विकासखंड"}
                </p>
              </div>
            </div>

            {/* Clusters */}
            <div className="p-8 rounded-2xl bg-orange-100 hover:bg-orange-200 transition-all duration-300 hover:scale-105">
              <div className="flex flex-col items-start">
                <div className="mb-6">
                  <Network className="w-8 h-8 text-orange-600" />
                </div>
                <div className="text-3xl font-bold text-gray-800 mb-2">132</div>
                <p className="text-gray-700 text-sm font-medium">
                  {language === "en" ? "Clusters" : "संकुल"}
                </p>
              </div>
            </div>

            {/* Gram Panchayats */}
            <div className="p-8 rounded-2xl bg-teal-100 hover:bg-teal-200 transition-all duration-300 hover:scale-105">
              <div className="flex flex-col items-start">
                <div className="mb-6">
                  <Users className="w-8 h-8 text-teal-600" />
                </div>
                <div className="text-3xl font-bold text-gray-800 mb-2">489</div>
                <p className="text-gray-700 text-sm font-medium">
                  {language === "en" ? "Gram Panchayats" : "ग्राम पंचायत"}
                </p>
              </div>
            </div>

            {/* Villages */}
            <div className="p-8 rounded-2xl bg-red-100 hover:bg-red-200 transition-all duration-300 hover:scale-105">
              <div className="flex flex-col items-start">
                <div className="mb-6">
                  <Home className="w-8 h-8 text-red-600" />
                </div>
                <div className="text-3xl font-bold text-gray-800 mb-2">
                  1625
                </div>
                <p className="text-gray-700 text-sm font-medium">
                  {language === "en" ? "Villages" : "गांव"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Departments Preview */}
      <section className="py-10 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* 1 */}
          <div className="inline-flex items-center justify-center p-2 bg-blue-100 rounded-full mb-8">
            <div className="flex items-center space-x-2 bg-white px-6 py-3 rounded-full shadow-lg">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-semibold text-blue-700 uppercase tracking-wider">
                {t("departments.title")}
              </span>
            </div>
          </div>
          {/* 2 */}
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
      <section className="py-10 bg-gradient-to-r from-blue-900 to-indigo-900 text-white">
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
