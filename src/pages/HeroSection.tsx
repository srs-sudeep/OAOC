import React, { useState, useEffect } from "react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

const HeroSection = () => {
  const [language, setLanguage] = useState("en");
  const [currentSlide, setCurrentSlide] = useState(0);

  // Hero content data for different slides
  const heroSlides = [
    {
      badge: {
        en: "Government of Chhattisgarh",
        hi: "छत्तीसगढ़ सरकार",
      },
      title: {
        en: "Digital Chhattisgarh",
        hi: "डिजिटल छत्तीसगढ़",
      },
      subtitle: {
        en: "Progressive • Inclusive • Digital",
        hi: "प्रगतिशील • समावेशी • डिजिटल",
      },
      description: {
        en: "Building a modern, transparent, and citizen-centric government through innovative digital solutions and progressive policies for sustainable development.",
        hi: "नवाचार डिजिटल समाधान और सतत विकास के लिए प्रगतिशील नीतियों के माध्यम से एक आधुनिक, पारदर्शी और नागरिक-केंद्रित सरकार का निर्माण।",
      },
      primaryBtn: {
        en: "Explore Departments",
        hi: "विभागों का अन्वेषण करें",
      },
      secondaryBtn: {
        en: "Learn More",
        hi: "और जानें",
      },
      bgGradient: "from-blue-900 via-blue-800 to-indigo-900",
    },
    {
      badge: {
        en: "Government of Chhattisgarh",
        hi: "छत्तीसगढ़ सरकार",
      },
      title: {
        en: "Empowering Citizens",
        hi: "नागरिक सशक्तिकरण",
      },
      subtitle: {
        en: "Transparent • Accessible • Efficient",
        hi: "पारदर्शी • सुगम • कुशल",
      },
      description: {
        en: "Transforming governance through technology-driven initiatives, ensuring every citizen has access to quality services and opportunities for growth.",
        hi: "प्रौद्योगिकी-संचालित पहलों के माध्यम से शासन में परिवर्तन, यह सुनिश्चित करते हुए कि हर नागरिक को गुणवत्तापूर्ण सेवाओं और विकास के अवसरों तक पहुंच हो।",
      },
      primaryBtn: {
        en: "Citizen Services",
        hi: "नागरिक सेवाएं",
      },
      secondaryBtn: {
        en: "View Schemes",
        hi: "योजनाएं देखें",
      },
      bgGradient: "from-green-900 via-green-800 to-teal-900",
    },
    {
      badge: {
        en: "Government of Chhattisgarh",
        hi: "छत्तीसगढ़ सरकार",
      },
      title: {
        en: "Sustainable Growth",
        hi: "सतत विकास",
      },
      subtitle: {
        en: "Innovation • Environment • Future",
        hi: "नवाचार • पर्यावरण • भविष्य",
      },
      description: {
        en: "Leading the way in sustainable development with eco-friendly policies, renewable energy initiatives, and conservation programs for future generations.",
        hi: "पारिस्थितिकी-अनुकूल नीतियों, नवीकरणीय ऊर्जा पहलों और भावी पीढ़ियों के लिए संरक्षण कार्यक्रमों के साथ सतत विकास में अग्रणी।",
      },
      primaryBtn: {
        en: "Green Initiatives",
        hi: "हरित पहल",
      },
      secondaryBtn: {
        en: "Learn More",
        hi: "और जानें",
      },
      bgGradient: "from-purple-900 via-purple-800 to-indigo-900",
    },
  ];

  // Auto scroll functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % heroSlides.length);
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, [heroSlides.length]);

  const goToPrevious = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? heroSlides.length - 1 : prevSlide - 1
    );
  };

  const goToNext = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % heroSlides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const currentContent = heroSlides[currentSlide];

  return (
    <section
      className={`relative bg-gradient-to-br ${currentContent.bgGradient} text-white overflow-hidden pt-16 min-h-screen transition-all duration-1000`}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-black opacity-30"></div>
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-orange-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-blue-300/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-orange-500/5 to-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      {/* Language Toggle */}
      {/* <div className="absolute top-20 right-8 z-10">
        <button
          onClick={() => setLanguage(language === "en" ? "hi" : "en")}
          className="px-4 py-2 bg-white/10 backdrop-blur-md text-white rounded-lg hover:bg-white/20 transition-colors border border-white/20"
        >
          {language === "en" ? "हिंदी" : "English"}
        </button>
      </div> */}

      {/* Navigation Arrows */}
      <button
        onClick={goToPrevious}
        className="absolute left-8 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full p-3 transition-all duration-200 border border-white/20 z-10"
      >
        <ChevronLeft className="w-6 h-6 text-white" />
      </button>
      <button
        onClick={goToNext}
        className="absolute right-8 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full p-3 transition-all duration-200 border border-white/20 z-10"
      >
        <ChevronRight className="w-6 h-6 text-white" />
      </button>

      {/* Main Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 flex flex-col justify-center min-h-screen">
        <div className="text-center animate-fade-in">
          <div className="mb-8 animate-slide-up">
            <div className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-md rounded-full text-sm font-medium border border-white/20 shadow-lg transition-all duration-500">
              <span className="text-2xl mr-3">🏛️</span>
              <span className="bg-gradient-to-r from-white to-orange-200 bg-clip-text text-transparent font-bold">
                {currentContent.badge[language]}
              </span>
              <div className="ml-3 px-2 py-1 bg-orange-500 rounded-full">
                <span className="text-xs font-bold">OFFICIAL</span>
              </div>
            </div>
          </div>

          <h1 className="text-6xl md:text-8xl font-bold mb-8 animate-slide-up bg-gradient-to-r from-white via-orange-200 to-white bg-clip-text text-transparent leading-tight transition-all duration-500">
            {currentContent.title[language]}
          </h1>

          <p className="text-2xl md:text-4xl mb-6 opacity-90 animate-slide-up stagger-delay-1 font-light bg-gradient-to-r from-blue-100 to-orange-100 bg-clip-text text-transparent transition-all duration-500">
            {currentContent.subtitle[language]}
          </p>

          <p className="text-lg mb-12 opacity-80 max-w-4xl mx-auto animate-slide-up stagger-delay-2 leading-relaxed text-blue-100 transition-all duration-500">
            {currentContent.description[language]}
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-slide-up stagger-delay-3 mb-12">
            <button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-12 py-6 text-xl font-semibold transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-orange-500/25 rounded-xl">
              {currentContent.primaryBtn[language]}
              <ArrowRight className="w-6 h-6 ml-3 inline" />
            </button>

            <button className="border-2 border-white/30 text-white hover:bg-white/10 backdrop-blur-sm px-12 py-6 text-xl font-semibold transform hover:scale-105 transition-all duration-300 shadow-2xl rounded-xl">
              {currentContent.secondaryBtn[language]}
            </button>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-10">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-4 h-4 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "bg-orange-500 scale-125 shadow-lg"
                : "bg-white/40 hover:bg-white/60"
            }`}
          />
        ))}
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-white/20">
        <div
          className="h-full bg-gradient-to-r from-orange-500 to-orange-600 transition-all duration-100"
          style={{
            width: `${((currentSlide + 1) / heroSlides.length) * 100}%`,
          }}
        />
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }

        .animate-slide-up {
          animation: slide-up 0.8s ease-out;
        }

        .stagger-delay-1 {
          animation-delay: 0.2s;
          animation-fill-mode: both;
        }

        .stagger-delay-2 {
          animation-delay: 0.4s;
          animation-fill-mode: both;
        }

        .stagger-delay-3 {
          animation-delay: 0.6s;
          animation-fill-mode: both;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
