import { useLanguage } from "@/contexts/LanguageContext";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import { useEffect, useState } from "react";

// interface ImageSlide {
//   src: string;
//   title: string;
//   description?: string;
// }

type ImageSlide = {
  src: string;
  title: {
    en: string;
    hi: string;
  };
  description: {
    en: string;
    hi: string;
  };
};

const ImageSlideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const { language } = useLanguage();

  // Define the images with titles
  //   const slides: ImageSlide[] = [
  //     {
  //       src: "/chitrakote1.jpg",
  //       title: "Chitrakoot",
  //       description: "Advanced Laser Powder Bed Fusion Technology",
  //     },
  //     {
  //       src: "/bhoramdev1.png",
  //       title: "Bhoramdeo",
  //       description: "Directed Energy Deposition System",
  //     },
  //     {
  //       src: "/Ghatarani1.jpg",
  //       title: "Ghatarani",
  //       description: "Precision Tribological Testing Equipment",
  //     },
  //     {
  //       src: "/dongargarh1.jpeg",
  //       title: "Dongargarh",
  //       description: "Wire Arc Additive Manufacturing",
  //     },
  //     {
  //       src: "/sirpur1.jpg",
  //       title: "Sirpur",
  //       description: "Advanced Robotic Manufacturing System",
  //     },
  //     {
  //       src: "/girodpuri1.jpg",
  //       title: "Girodpuri",
  //       description: "Advanced Robotic Manufacturing System",
  //     },
  //   ];
  const slides: ImageSlide[] = [
    {
      src: "/chitrakote2.jpg",
      title: {
        en: "Chitrakoot",
        hi: "चित्रकोट",
      },
      description: {
        en: "Chitrakoot Waterfall is known as the Niagara Falls of Chhattisgarh.",
        hi: "चित्रकोट जलप्रपात को छत्तीसगढ़ का नियाग्रा फॉल कहा जाता है।",
      },
    },
    {
      src: "/bhoramdev5.jpg",
      title: {
        en: "Bhoramdeo",
        hi: "भोरमदेव",
      },
      description: {
        en: "Bhoramdeo Temple is known for Khajuraho-style sculptures.",
        hi: "भोरमदेव मंदिर अपनी खजुराहो जैसी मूर्तिकला के लिए प्रसिद्ध है।",
      },
    },
    {
      src: "/Ghatarani2.jpg",
      title: {
        en: "Ghatarani",
        hi: "घटारानी",
      },
      description: {
        en: "Ghatarani is a scenic waterfall and pilgrimage site.",
        hi: "घटारानी एक सुंदर जलप्रपात और धार्मिक स्थल है।",
      },
    },
    {
      src: "/dongargarh1.jpeg",
      title: {
        en: "Dongargarh",
        hi: "डोंगरगढ़",
      },
      description: {
        en: "Dongargarh is famous for Maa Bamleshwari Temple.",
        hi: "डोंगरगढ़ माँ बमलेश्वरी मंदिर के लिए प्रसिद्ध है।",
      },
    },
    {
      src: "/sirpur1.jpg",
      title: {
        en: "Sirpur",
        hi: "सिरपुर",
      },
      description: {
        en: "Sirpur is an archaeological site of Hindu, Buddhist, and Jain temples.",
        hi: "सिरपुर एक पुरातात्विक स्थल है जहाँ हिंदू, बौद्ध और जैन मंदिर हैं।",
      },
    },
    {
      src: "/girodpuri1.jpg",
      title: {
        en: "Girodpuri",
        hi: "गिरौदपुरी",
      },
      description: {
        en: "Girodpuri is the birthplace of Guru Ghasidas and a key Satnami pilgrimage site.",
        hi: "गिरौदपुरी गुरु घासीदास जी की जन्मस्थली और सतनामी संप्रदाय का प्रमुख तीर्थ स्थल है।",
      },
    },
  ];

  // Auto-advance slides
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying, slides.length]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        goToPrevious();
      } else if (e.key === "ArrowRight") {
        goToNext();
      } else if (e.key === " ") {
        e.preventDefault();
        setIsAutoPlaying((prev) => !prev);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    // Resume auto-play after 10 seconds
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  // Touch handlers for mobile swipe
  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      goToNext();
    } else if (isRightSwipe) {
      goToPrevious();
    }
  };

  return (
    <div
      className="relative w-full h-64 sm:h-80 md:h-96 lg:h-[500px] xl:h-[500px] overflow-hidden rounded-2xl shadow-2xl group"
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      {/* Background container */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20"></div>

      {/* Images */}
      <div className="relative w-full h-full">
        {/* {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
              index === currentSlide
                ? "opacity-100 scale-100"
                : "opacity-0 scale-110"
            }`}
          >
            <img
              src={slide.src}
              alt={slide.title}
              className="w-full h-full object-cover"
              loading={index === 0 ? "eager" : "lazy"}
            />
          </div>
        ))} */}
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
              index === currentSlide
                ? "opacity-100 scale-100"
                : "opacity-0 scale-110"
            }`}
          >
            <img
              src={slide.src}
              alt={slide.title[language]}
              className="w-full h-full object-cover"
              loading={index === 0 ? "eager" : "lazy"}
            />
            <h2>{slide.title[language]}</h2>
            <p>{slide.description[language]}</p>
          </div>
        ))}
      </div>

      {/* Content overlay */}
      <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 md:p-6 lg:p-8 bg-gradient-to-t from-black/80 to-transparent">
        <div className="transform transition-all duration-500 translate-y-0">
          <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white mb-1 sm:mb-2">
            {slides[currentSlide].title[language]}
          </h3>
          {slides[currentSlide].description && (
            <p className="text-blue-200 text-sm sm:text-base md:text-lg">
              {slides[currentSlide].description[language]}
            </p>
          )}
        </div>
      </div>

      {/* Navigation arrows */}
      <button
        onClick={goToPrevious}
        className="absolute left-2 sm:left-3 md:left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/30 text-white p-2 sm:p-2.5 md:p-3 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100 hover:scale-110 focus:opacity-100 focus:outline-none focus:ring-2 focus:ring-blue-400"
        aria-label="Previous image"
      >
        <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
      </button>

      <button
        onClick={goToNext}
        className="absolute right-2 sm:right-3 md:right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/30 text-white p-2 sm:p-2.5 md:p-3 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100 hover:scale-110 focus:opacity-100 focus:outline-none focus:ring-2 focus:ring-blue-400"
        aria-label="Next image"
      >
        <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
      </button>

      {/* Dot indicators */}
      <div className="absolute bottom-2 sm:bottom-3 md:bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-1.5 sm:space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400 ${
              index === currentSlide
                ? "bg-blue-400 scale-125"
                : "bg-white/50 hover:bg-white/70"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Auto-play indicator and control */}
      <div className="absolute top-2 sm:top-3 md:top-4 right-2 sm:right-3 md:right-4 flex items-center space-x-2">
        {/* Mobile play/pause button */}
        <button
          onClick={() => setIsAutoPlaying(!isAutoPlaying)}
          className="sm:hidden bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/30 text-white p-1.5 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
          aria-label={isAutoPlaying ? "Pause slideshow" : "Play slideshow"}
        >
          {isAutoPlaying ? (
            <Pause className="w-3 h-3" />
          ) : (
            <Play className="w-3 h-3" />
          )}
        </button>

        {/* Auto-play indicator */}
        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div
            className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full ${
              isAutoPlaying ? "bg-blue-400 animate-pulse" : "bg-gray-400"
            }`}
          />
        </div>
      </div>

      {/* Progress bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20">
        <div
          className="h-full bg-gradient-to-r from-blue-400 to-blue-400 transition-all duration-1000 ease-linear"
          style={{
            width: isAutoPlaying ? "100%" : "0%",
            animation: isAutoPlaying ? "progress 4s linear infinite" : "none",
          }}
        />
      </div>

      <style>{`
        @keyframes progress {
          0% { width: 0%; }
          100% { width: 100%; }
        }
      `}</style>
    </div>
  );
};

export default ImageSlideshow;
