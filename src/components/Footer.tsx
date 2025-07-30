import { useLanguage } from "@/contexts/LanguageContext";
import { Mail, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const { language, t } = useLanguage();

  return (
    <footer className="bg-blue-900 text-white bg-[url('/footer-pattern.svg')] bg-bottom bg-repeat-x bg-center">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 ">
        <div className="flex flex-col items-center text-center space-y-3 border-b border-gray-500 pb-3 mb-4">
          {/* Logo and Description */}
          <div className="flex items-center space-x-4">
            <img
              src="/logo.png"
              alt="Logo"
              className="w-16 h-16 border-2 border-orange-500 rounded-full"
            />
            <div className="text-3xl font-bold">{t("hero.title")}</div>
            <img
              src="/iitLogo.png"
              alt="Logo"
              className="w-16 h-16 bg-white border-2 border-orange-500 rounded-full p-1"
            />
          </div>

          <p className="text-blue-100 text-md leading-relaxed">
            {language === "en"
              ? "Digital governance platform providing seamless access to all government services for Indian citizens."
              : "भारतीय नागरिकों के लिए सभी सरकारी सेवाओं तक निर्बाध पहुंच प्रदान करने वाला डिजिटल गवर्नेंस प्लेटफॉर्म।"}
          </p>
          <div className="text-sm font-bold">{t("footer.proud")}</div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 bg-slate-800/60 rounded-xl text-sm text-blue-100">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold text-orange-300 underline underline-offset-4 mb-3">
                {language === "en" ? "Quick Links" : "त्वरित लिंक"}
              </h3>
              <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                {[
                  { to: "/", label: t("nav.home") },
                  { to: "/about", label: t("nav.about") },
                  { to: "/departments", label: t("nav.departments") },
                  { to: "/career", label: t("nav.career") },
                  { to: "/gallery", label: t("nav.gallery") },
                  { to: "/contact", label: t("nav.contact") },
                ].map((item, idx, arr) => (
                  <span key={idx} className="flex items-center">
                    <Link
                      to={item.to}
                      className="hover:text-orange-300 transition-colors duration-200 px-1"
                    >
                      {item.label}
                    </Link>
                    {idx < arr.length - 1 && (
                      <span className="text-blue-300 px-1">|</span>
                    )}
                  </span>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold text-orange-300 underline underline-offset-4 mb-3">
                {language === "en" ? "Contact Us" : "संपर्क करें"}
              </h3>
              <div className="flex flex-wrap items-center gap-x-3 gap-y-2 break-words max-w-full">
                <div className="flex items-center space-x-1">
                  <Phone className="w-4 h-4 text-orange-300" />
                  <span>1800-123-4567</span>
                </div>
                <span className="text-blue-300">|</span>

                <div className="flex items-center space-x-1">
                  <Mail className="w-4 h-4 text-orange-300" />
                  <span className="break-all">
                    help@oneapponecitizen.gov.in
                  </span>
                </div>

                <div className="flex items-start space-x-1 max-w-full">
                  <MapPin className="w-4 h-4 text-orange-300 mt-0.5 shrink-0" />
                  <span className="break-words">
                    {language === "en"
                      ? "Chhattisgarh State Electronics Development Corporation, Collectorate Complex, Civil Lines, Raipur, Chhattisgarh - 492001"
                      : "छत्तीसगढ़ राज्य इलेक्ट्रॉनिक्स विकास निगम, कलेक्टोरेट कॉम्प्लेक्स, सिविल लाइन्स, रायपुर, छत्तीसगढ़ - 492001"}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
