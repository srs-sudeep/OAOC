import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface SlideData {
  id: number;
  title: string;
  subtitle: string;
  image: string;
  overlayColor: string;
}

const HomeSlider: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const slides: SlideData[] = [
    {
      id: 1,
      title: "Chhattisgarh",
      subtitle: "a Story in every corner",
      image:
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1200&h=600&fit=crop",
      overlayColor: "from-teal-600/70 via-orange-400/50 to-yellow-500/60",
    },
    {
      id: 2,
      title: "Cultural Heritage",
      subtitle: "traditions that inspire",
      image:
        "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=1200&h=600&fit=crop",
      overlayColor: "from-green-600/70 via-blue-400/50 to-purple-500/60",
    },
    {
      id: 3,
      title: "Natural Beauty",
      subtitle: "landscapes that mesmerize",
      image:
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=600&fit=crop",
      overlayColor: "from-blue-600/70 via-green-400/50 to-teal-500/60",
    },
    {
      id: 4,
      title: "Tribal Art",
      subtitle: "creativity in every stroke",
      image:
        "https://images.unsplash.com/photo-1578662015637-88d3380dd3bc?w=1200&h=600&fit=crop",
      overlayColor: "from-purple-600/70 via-pink-400/50 to-red-500/60",
    },
  ];

  const nextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const goToSlide = (index: number) => {
    if (isTransitioning || index === currentSlide) return;
    setIsTransitioning(true);
    setCurrentSlide(index);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  // Auto-play functionality
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[80vh] overflow-hidden bg-gray-900">
      {/* Main Slider Container */}
      <div className="relative w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-all duration-500 ease-in-out ${
              index === currentSlide
                ? "opacity-100 scale-100"
                : "opacity-0 scale-105"
            }`}
          >
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${slide.image})` }}
            />

            {/* Overlay Gradient */}
            <div
              className={`absolute inset-0 bg-gradient-to-r ${slide.overlayColor}`}
            />

            {/* Content Container */}
            <div className="relative z-10 flex items-center justify-center h-full px-4">
              <div className="text-center text-white max-w-4xl mx-auto">
                <h1 className="text-6xl md:text-8xl font-bold mb-4 tracking-wider">
                  {slide.title}
                </h1>
                <p className="text-2xl md:text-3xl font-light italic opacity-90">
                  {slide.subtitle}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        disabled={isTransitioning}
        className="absolute left-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 disabled:opacity-50"
      >
        <ChevronLeft size={24} />
      </button>

      <button
        onClick={nextSlide}
        disabled={isTransitioning}
        className="absolute right-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 disabled:opacity-50"
      >
        <ChevronRight size={24} />
      </button>

      {/* Pagination Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            disabled={isTransitioning}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "bg-white scale-125"
                : "bg-white/50 hover:bg-white/70"
            }`}
          />
        ))}
      </div>

      {/* Decorative Border */}
      <div className="absolute bottom-0 left-0 right-0 h-4 bg-gradient-to-r from-teal-500 via-orange-400 to-yellow-500 opacity-80">
        <div className="w-full h-full flex items-center justify-center">
          <div className="flex space-x-1">
            {Array.from({ length: 50 }, (_, i) => (
              <div
                key={i}
                className="w-1 h-2 bg-white/60 transform rotate-45"
              />
            ))}
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-white/20">
        <div
          className="h-full bg-gradient-to-r from-teal-400 to-orange-400 transition-all duration-5000 ease-linear"
          style={{
            width: `${((currentSlide + 1) / slides.length) * 100}%`,
          }}
        />
      </div>
    </div>
  );
};

export default HomeSlider;
