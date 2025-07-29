// import React from "react";

// interface GalleryItem {
//   id: number;
//   title: string;
//   image: string;
//   className: string;
// }

// const Gallery: React.FC = () => {
//   const galleryItems: GalleryItem[] = [
//     {
//       id: 1,
//       title: "Portfolio",
//       image:
//         "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=300&fit=crop",
//       className: "col-span-2 row-span-2",
//     },
//     {
//       id: 2,
//       title: "Photography",
//       image:
//         "https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=500&h=250&fit=crop",
//       className: "col-span-2 row-span-1",
//     },
//     {
//       id: 3,
//       title: "Design",
//       image:
//         "https://images.unsplash.com/photo-1558655146-d09347e92766?w=250&h=300&fit=crop",
//       className: "col-span-1 row-span-2",
//     },
//     {
//       id: 4,
//       title: "Branding",
//       image:
//         "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=250&fit=crop",
//       className: "col-span-2 row-span-1",
//     },
//     {
//       id: 5,
//       title: "Creative",
//       image:
//         "https://images.unsplash.com/photo-1542744094-3a31f272c490?w=250&h=250&fit=crop",
//       className: "col-span-1 row-span-1",
//     },
//   ];

//   return (
//     <div className="w-full max-w-6xl mx-auto p-6">
//       <div className="grid grid-cols-5 grid-rows-3 gap-4 h-[600px]">
//         {galleryItems.map((item) => (
//           <div
//             key={item.id}
//             className={`${item.className} relative group overflow-hidden rounded-2xl cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl`}
//           >
//             <img
//               src={item.image}
//               alt={item.title}
//               className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
//             />
//             <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 via-blue-900/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
//             <div className="absolute bottom-0 left-0 right-0 p-6">
//               <h3 className="text-white text-2xl font-bold tracking-wide drop-shadow-lg">
//                 {item.title}
//               </h3>
//             </div>
//             <div className="absolute inset-0 bg-blue-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Gallery;

import React, { useState, useEffect } from "react";
import { X, ChevronLeft, ChevronRight, Play, Pause } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

// interface GalleryItem {
//   id: number;
//   title: string;
//   image: string;
//   className: string;
//   modalImages: string[];
// }

interface GalleryItem {
  id: number;
  title: {
    en: string;
    hi: string;
  };
  image: string;
  className: string;
  modalImages: string[];
  description?: {
    en: string;
    hi: string;
  };
}

const Gallery: React.FC = () => {
  const [selectedGallery, setSelectedGallery] = useState<GalleryItem | null>(
    null
  );
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const { language } = useLanguage();

  // const galleryItems: GalleryItem[] = [
  //   {
  //     id: 1,
  //     title: "Bhoramdeo",
  //     image: "/bhoramdev1.png",
  //     className: "col-span-2 row-span-2",
  //     modalImages: [
  //       "/bhoramdev2.jpeg",
  //       "/bhoramdeo3.jpg",
  //       "/bhoramdev4.jpeg",
  //       "/bhoramdev5.jpg",
  //     ],
  //   },
  //   {
  //     id: 2,
  //     title: "Chitrakoot WaterFall",
  //     image: "/chitrakote1.jpg",
  //     className: "col-span-2 row-span-1",
  //     modalImages: ["/chitrakote2.jpg", "/chitrakote3.jpg"],
  //   },
  //   {
  //     id: 3,
  //     title: "Ghatarani",
  //     image: "/Ghatarani1.jpg",
  //     className: "col-span-1 row-span-2",
  //     modalImages: ["/Ghatarani2.jpg", "/Jatmai1.png", "/Jatmai2.jpg"],
  //   },
  //   {
  //     id: 4,
  //     title: "Girodpuri",
  //     image: "/girodpuri1.jpg",
  //     className: "col-span-2 row-span-1",
  //     modalImages: ["/girodpuri2.jpg"],
  //   },
  //   {
  //     id: 5,
  //     title: "Sirpur",
  //     image: "/sirpur1.jpg",
  //     className: "col-span-1 row-span-1",
  //     modalImages: ["/sirpur2.jpg", "/sirpur3.jpg", "/sirpur4.png"],
  //   },
  //   {
  //     id: 6,
  //     title: "Dongargarh",
  //     image: "/dongargarh1.jpeg",
  //     className: "col-span-1 row-span-1",
  //     modalImages: ["/dongargarh2.jpeg", "/dongargarh3.jpeg"],
  //   },
  // ];

  const galleryItems: GalleryItem[] = [
    {
      id: 1,
      title: {
        en: "Bhoramdeo Temple",
        hi: "भोरमदेव मंदिर",
      },
      image: "/bhoramdev1.png",
      className: "col-span-2 row-span-2",
      modalImages: [
        "/bhoramdev2.jpeg",
        "/bhoramdeo3.jpg",
        "/bhoramdev4.jpeg",
        "/bhoramdev5.jpg",
      ],
      description: {
        en: "Ancient temple complex known as the 'Khajuraho of Chhattisgarh'",
        hi: "प्राचीन मंदिर परिसर जो 'छत्तीसगढ़ का खजुराहो' के नाम से प्रसिद्ध है",
      },
    },
    {
      id: 2,
      title: {
        en: "Chitrakoot Waterfall",
        hi: "चित्रकोट जलप्रपात",
      },
      image: "/chitrakote1.jpg",
      className: "col-span-2 row-span-1",
      modalImages: ["/chitrakote2.jpg", "/chitrakote3.jpg"],
      description: {
        en: "India's broadest waterfall, also known as 'Niagara of India'",
        hi: "भारत का सबसे चौड़ा जलप्रपात, 'भारत का नियाग्रा' के नाम से प्रसिद्ध",
      },
    },
    {
      id: 3,
      title: {
        en: "Ghatarani Waterfalls",
        hi: "घटारानी जलप्रपात",
      },
      image: "/Ghatarani1.jpg",
      className: "col-span-1 row-span-2",
      modalImages: ["/Ghatarani2.jpg", "/Jatmai1.png", "/Jatmai2.jpg"],
      description: {
        en: "Scenic waterfall surrounded by dense forests",
        hi: "घने जंगलों से घिरा हुआ सुंदर जलप्रपात",
      },
    },
    {
      id: 4,
      title: {
        en: "Girodpuri Dham",
        hi: "गिरोदपुरी धाम",
      },
      image: "/girodpuri1.jpg",
      className: "col-span-2 row-span-1",
      modalImages: ["/girodpuri2.jpg"],
      description: {
        en: "Sacred pilgrimage site and religious center",
        hi: "पवित्र तीर्थ स्थल और धार्मिक केंद्र",
      },
    },
    {
      id: 5,
      title: {
        en: "Sirpur Archaeological Site",
        hi: "सिरपुर पुरातत्व स्थल",
      },
      image: "/sirpur1.jpg",
      className: "col-span-1 row-span-1",
      modalImages: ["/sirpur2.jpg", "/sirpur3.jpg", "/sirpur4.png"],
      description: {
        en: "Ancient Buddhist and Hindu archaeological remains",
        hi: "प्राचीन बौद्ध और हिंदू पुरातत्व अवशेष",
      },
    },
    {
      id: 6,
      title: {
        en: "Dongargarh Temple",
        hi: "डोंगरगढ़ मंदिर",
      },
      image: "/dongargarh1.jpeg",
      className: "col-span-1 row-span-1",
      modalImages: ["/dongargarh2.jpeg", "/dongargarh3.jpeg"],
      description: {
        en: "Hilltop temple dedicated to Maa Bamleshwari Devi",
        hi: "माता बम्लेश्वरी देवी को समर्पित पहाड़ी मंदिर",
      },
    },
  ];

  // Auto-scroll functionality
  useEffect(() => {
    if (!selectedGallery || !isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + 1) % selectedGallery.modalImages.length
      );
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [selectedGallery, isAutoPlaying]);

  const openModal = (gallery: GalleryItem) => {
    setSelectedGallery(gallery);
    setCurrentImageIndex(0);
    setIsAutoPlaying(true);
  };

  const closeModal = () => {
    setSelectedGallery(null);
    setCurrentImageIndex(0);
    setIsAutoPlaying(true);
  };

  const nextImage = () => {
    if (!selectedGallery) return;
    setCurrentImageIndex(
      (prevIndex) => (prevIndex + 1) % selectedGallery.modalImages.length
    );
  };

  const prevImage = () => {
    if (!selectedGallery) return;
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? selectedGallery.modalImages.length - 1 : prevIndex - 1
    );
  };

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying);
  };

  const goToImage = (index: number) => {
    setCurrentImageIndex(index);
  };

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (!selectedGallery) return;

      switch (e.key) {
        case "ArrowLeft":
          prevImage();
          break;
        case "ArrowRight":
          nextImage();
          break;
        case "Escape":
          closeModal();
          break;
        case " ":
          e.preventDefault();
          toggleAutoPlay();
          break;
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [selectedGallery]);

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-orange-50">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="animate-fade-in">
              <h1 className="text-5xl font-bold mb-4 pt-2.5 bg-gradient-to-r from-white to-orange-200 bg-clip-text text-transparent">
                {language === "en" ? "Gallery" : "गैलरी"}
              </h1>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
                {language === "en"
                  ? "Explore glimpses of government initiatives, events, and public services through our photo gallery."
                  : "सरकारी पहलों, आयोजनों और जनसेवाओं की झलकियाँ हमारी फोटो गैलरी के माध्यम से देखें।"}
              </p>
            </div>
          </div>
        </div>

        <div className="w-full max-w-6xl mx-auto p-6 ">
          <div className="text-center my-12">
            {/* 1 */}
            <div className="inline-flex items-center justify-center p-2 bg-blue-100 rounded-full mb-8">
              <div className="flex items-center space-x-2 bg-white px-6 py-3 rounded-full shadow-lg">
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-semibold text-blue-700 uppercase tracking-wider">
                  {language === "en" ? "Gallery" : "गैलरी"}
                </span>
              </div>
            </div>
            {/* 2 */}
            <h2 className="text-3xl font-bold text-blue-900 mb-4">
              {language === "en" ? "Browse Gallery" : "गैलरी ब्राउज़ करें"}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {language === "en"
                ? "Take a visual journey through the milestones of development and public welfare in Chhattisgarh. Our gallery showcases a wide range of government events, welfare schemes in action, cultural programs, health camps, rural development projects, and citizen services."
                : "फोटो गैलरी के माध्यम से छत्तीसगढ़ की विकास यात्रा की झलक पाएं। यहाँ आपको शासन की जनकल्याणकारी योजनाओं, सांस्कृतिक कार्यक्रमों, स्वास्थ्य शिविरों, ग्रामीण विकास परियोजनाओं और नागरिक सेवाओं से जुड़ी महत्वपूर्ण तस्वीरें देखने को मिलेंगी।"}
            </p>
          </div>
          <div className="grid grid-cols-5 grid-rows-3 gap-4 h-[600px]">
            {galleryItems.map((item) => (
              <div
                key={item.id}
                className={`${item.className} relative group overflow-hidden rounded-2xl cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl`}
                onClick={() => openModal(item)}
              >
                <img
                  src={item.image}
                  alt={item.title[language]}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 via-blue-900/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-white text-2xl font-bold tracking-wide drop-shadow-lg">
                    {item.title[language]}
                  </h3>
                </div>
                <div className="absolute inset-0 bg-blue-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>
        </div>

        {/* Modal */}
        {selectedGallery && (
          <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="relative max-w-4xl w-full h-full max-h-[80vh] bg-white rounded-2xl overflow-hidden shadow-2xl">
              {/* Header */}
              <div className="absolute top-0 left-0 right-0 bg-gradient-to-b from-blue-900/90 to-transparent z-10 p-6">
                <div className="flex justify-between items-center">
                  <h2 className="text-white text-2xl font-bold">
                    {selectedGallery.title[language]}
                  </h2>
                  <div className="flex items-center gap-4">
                    <button
                      onClick={toggleAutoPlay}
                      className="text-white hover:text-blue-300 transition-colors p-2 rounded-full hover:bg-white/20"
                    >
                      {isAutoPlaying ? <Pause size={20} /> : <Play size={20} />}
                    </button>
                    <button
                      onClick={closeModal}
                      className="text-white hover:text-red-400 transition-colors p-2 rounded-full hover:bg-white/20"
                    >
                      <X size={24} />
                    </button>
                  </div>
                </div>
              </div>

              {/* Main Image */}
              <div className="relative w-full h-full">
                <img
                  src={selectedGallery.modalImages[currentImageIndex]}
                  alt={`${selectedGallery.title} ${currentImageIndex + 1}`}
                  className="w-full h-full object-cover"
                />

                {/* Navigation Arrows */}
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-blue-900/80 hover:bg-blue-900 text-white p-3 rounded-full transition-all duration-200 hover:scale-110"
                >
                  <ChevronLeft size={24} />
                </button>

                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-blue-900/80 hover:bg-blue-900 text-white p-3 rounded-full transition-all duration-200 hover:scale-110"
                >
                  <ChevronRight size={24} />
                </button>
              </div>

              {/* Bottom Navigation Dots */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-blue-900/90 to-transparent p-6">
                <div className="flex justify-center items-center gap-2">
                  {selectedGallery.modalImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToImage(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-200 ${
                        index === currentImageIndex
                          ? "bg-white scale-125"
                          : "bg-white/50 hover:bg-white/75"
                      }`}
                    />
                  ))}
                </div>
                <div className="text-center mt-2">
                  <span className="text-white/80 text-sm">
                    {currentImageIndex + 1} /{" "}
                    {selectedGallery.modalImages.length}
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Gallery;
