import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { Globe, Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const { language, setLanguage, t } = useLanguage();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isActive = (path: string) => location.pathname === path;

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/98 backdrop-blur-md shadow-lg border-b-4 border-orange-500 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link
              to="/"
              className="flex items-center space-x-3 group"
              onClick={closeMobileMenu}
            >
              <img
                src="/logo.png"
                alt="Logo"
                className="w-8 h-8 border-2 border-orange-500 rounded-full"
              />
              <div className="text-xl font-bold text-blue-900 group-hover:text-orange-600 transition-colors duration-200">
                {t("hero.title")}
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center space-x-8">
              <Link
                to="/"
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 transform hover:scale-105 ${
                  isActive("/")
                    ? "text-white bg-blue-900 shadow-lg border border-blue-700"
                    : "text-gray-700 hover:text-blue-900 hover:bg-blue-50 border border-transparent hover:border-blue-200"
                }`}
              >
                {t("nav.home")}
              </Link>
              <Link
                to="/departments"
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 transform hover:scale-105 ${
                  isActive("/departments")
                    ? "text-white bg-blue-900 shadow-lg border border-blue-700"
                    : "text-gray-700 hover:text-blue-900 hover:bg-blue-50 border border-transparent hover:border-blue-200"
                }`}
              >
                {t("nav.departments")}
              </Link>
              <Link
                to="/about"
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 transform hover:scale-105 ${
                  isActive("/about")
                    ? "text-white bg-blue-900 shadow-lg border border-blue-700"
                    : "text-gray-700 hover:text-blue-900 hover:bg-blue-50 border border-transparent hover:border-blue-200"
                }`}
              >
                {t("nav.about")}
              </Link>
              <Link
                to="/contact"
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 transform hover:scale-105 ${
                  isActive("/contact")
                    ? "text-white bg-blue-900 shadow-lg border border-blue-700"
                    : "text-gray-700 hover:text-blue-900 hover:bg-blue-50 border border-transparent hover:border-blue-200"
                }`}
              >
                {t("nav.contact")}
              </Link>

              <Link
                to="/career"
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 transform hover:scale-105 ${
                  isActive("/career")
                    ? "text-white bg-blue-900 shadow-lg border border-blue-700"
                    : "text-gray-700 hover:text-blue-900 hover:bg-blue-50 border border-transparent hover:border-blue-200"
                }`}
              >
                {t("nav.career") ?? (language === "en" ? "Career" : "करियर")}
              </Link>
            </div>

            {/* Desktop Language Toggle & Mobile Menu Button */}
            <div className="flex items-center space-x-4">
              {/* Desktop Language Toggle */}
              <div className="hidden md:block">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setLanguage(language === "en" ? "hi" : "en")}
                  className="flex items-center space-x-2 border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white transform hover:scale-105 transition-all duration-200 shadow-md"
                >
                  <Globe className="w-4 h-4" />
                  <span className="font-medium">
                    {language === "en" ? "हिंदी" : "English"}
                  </span>
                </Button>
              </div>

              {/* Mobile Menu Button */}
              <div className="md:hidden">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={toggleMobileMenu}
                  className="border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white transition-all duration-200 p-2"
                >
                  {isMobileMenuOpen ? (
                    <X className="w-5 h-5" />
                  ) : (
                    <Menu className="w-5 h-5" />
                  )}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black bg-opacity-50 md:hidden transition-opacity duration-300"
          onClick={closeMobileMenu}
        />
      )}

      {/* Mobile Menu Panel */}
      <div
        className={`fixed top-16 right-0 z-50 w-80 max-w-sm bg-white shadow-2xl border-l-4 h-[100vh] border-orange-500 transform transition-transform duration-300 ease-in-out md:hidden ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6 space-y-6">
          {/* Mobile Navigation Links */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-blue-900 border-b border-gray-200 pb-2">
              {language === "en" ? "Navigation" : "नेवीगेशन"}
            </h3>
            <Link
              to="/"
              onClick={closeMobileMenu}
              className={`block px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 ${
                isActive("/")
                  ? "text-white bg-blue-900 shadow-lg"
                  : "text-gray-700 hover:text-blue-900 hover:bg-blue-50 border border-transparent hover:border-blue-200"
              }`}
            >
              {t("nav.home")}
            </Link>
            <Link
              to="/departments"
              onClick={closeMobileMenu}
              className={`block px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 ${
                isActive("/departments")
                  ? "text-white bg-blue-900 shadow-lg"
                  : "text-gray-700 hover:text-blue-900 hover:bg-blue-50 border border-transparent hover:border-blue-200"
              }`}
            >
              {t("nav.departments")}
            </Link>
            <Link
              to="/about"
              onClick={closeMobileMenu}
              className={`block px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 ${
                isActive("/about")
                  ? "text-white bg-blue-900 shadow-lg"
                  : "text-gray-700 hover:text-blue-900 hover:bg-blue-50 border border-transparent hover:border-blue-200"
              }`}
            >
              {t("nav.about")}
            </Link>
            <Link
              to="/contact"
              onClick={closeMobileMenu}
              className={`block px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 ${
                isActive("/contact")
                  ? "text-white bg-blue-900 shadow-lg"
                  : "text-gray-700 hover:text-blue-900 hover:bg-blue-50 border border-transparent hover:border-blue-200"
              }`}
            >
              {t("nav.contact")}
            </Link>
          </div>

          {/* Mobile Language Toggle */}
          <div className="border-t border-gray-200 pt-4">
            <h3 className="text-lg font-semibold text-blue-900 mb-3">
              {language === "en" ? "Language" : "भाषा"}
            </h3>
            <Button
              variant="outline"
              onClick={() => {
                setLanguage(language === "en" ? "hi" : "en");
                closeMobileMenu();
              }}
              className="w-full flex items-center justify-center space-x-2 border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white transition-all duration-200 py-3"
            >
              <Globe className="w-5 h-5" />
              <span className="font-medium text-base">
                {language === "en" ? "हिंदी में बदलें" : "Switch to English"}
              </span>
            </Button>
          </div>

          {/* Government Badge */}
          <div className="border-t border-gray-200 pt-4">
            <div className="bg-gradient-to-r from-blue-50 to-orange-50 p-4 rounded-lg border border-blue-200">
              <div className="flex items-center space-x-2 mb-2">
                <span className="text-xl">🇮🇳</span>
                <span className="text-sm font-semibold text-blue-900">
                  {language === "en"
                    ? "Government of Chhattisgarh"
                    : "छत्तीसगढ़ सरकार"}
                </span>
              </div>
              <p className="text-xs text-gray-600">
                {language === "en"
                  ? "Official Digital Platform"
                  : "आधिकारिक डिजिटल प्लेटफॉर्म"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
