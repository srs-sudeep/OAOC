import { useEffect, useState } from "react";
import axios from "axios";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  ExternalLink,
  Download,
  Phone,
  Globe,
  FileText,
  Users,
  Calendar,
  BookOpen,
  AlertCircle,
  Filter,
  X,
  ChevronDown,
  GraduationCap,
  Award,
  Target,
  Shield,
  Eye,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";

type ExamType = {
  hi: string;
  en: string;
};

type CareerType = {
  id: string;
  currentStatus: string;
  currentEducation: string;
  stream: string;
  interests: string[];
  examType: ExamType;
  title: string;
  websiteLink?: string;
  description: string;
  eligibility?: string;
  applicationProcess?: string;
  examPattern?: string;
  specialNotes?: string;
  reservation?: string;
  contact?: string;
  uploadFile?: string;
};

const CareerList = ({ id }) => {
  const { language } = useLanguage();
  const [selectedExam, setSelectedExam] = useState(null);
  const [careerItem, setCareerItem] = useState<CareerType[]>([]);
  const [filteredCareerItem, setFilteredCareerItem] = useState<CareerType[]>(
    []
  );
  const [loading, setLoading] = useState(true);

  // Filter states
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);
  const [selectedStream, setSelectedStream] = useState<string>("");
  const [selectedEducation, setSelectedEducation] = useState<string>("");

  // Dropdown states
  const [showInterestDropdown, setShowInterestDropdown] = useState(false);
  const [showStreamDropdown, setShowStreamDropdown] = useState(false);
  const [showEducationDropdown, setShowEducationDropdown] = useState(false);

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

  // Get unique values for filter options
  const getUniqueInterests = () => {
    const allInterests = careerItem.flatMap((item) => item.interests || []);
    return [...new Set(allInterests)].filter(Boolean);
  };

  const getUniqueStreams = () => {
    const streams = careerItem.map((item) => item.stream).filter(Boolean);
    return [...new Set(streams)];
  };

  const getUniqueEducations = () => {
    const educations = careerItem
      .map((item) => item.currentEducation)
      .filter(Boolean);
    return [...new Set(educations)];
  };

  // Filter function
  const applyFilters = () => {
    let filtered = [...careerItem];

    // Filter by interests
    if (selectedInterests.length > 0) {
      filtered = filtered.filter(
        (item) =>
          item.interests &&
          item.interests.some((interest) =>
            selectedInterests.includes(interest)
          )
      );
    }

    // Filter by stream
    if (selectedStream) {
      filtered = filtered.filter((item) => item.stream === selectedStream);
    }

    // Filter by education
    if (selectedEducation) {
      filtered = filtered.filter(
        (item) => item.currentEducation === selectedEducation
      );
    }

    setFilteredCareerItem(filtered);
  };

  // Handle interest selection
  const handleInterestToggle = (interest: string) => {
    setSelectedInterests((prev) =>
      prev.includes(interest)
        ? prev.filter((i) => i !== interest)
        : [...prev, interest]
    );
  };

  // Clear all filters
  const clearAllFilters = () => {
    setSelectedInterests([]);
    setSelectedStream("");
    setSelectedEducation("");
  };

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/careers?id=${id}`)
      .then((res) => {
        setCareerItem(res.data);
        setFilteredCareerItem(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching career:", err);
        setLoading(false);
      });
  }, [id]);

  // Apply filters when filter values change
  useEffect(() => {
    applyFilters();
  }, [selectedInterests, selectedStream, selectedEducation, careerItem]);

  if (loading) {
    return (
      <div className="text-center py-10 text-gray-500">
        {language === "en" ? "Loading..." : "लोड हो रहा है..."}
      </div>
    );
  }

  if (!careerItem || careerItem.length === 0) {
    return (
      <div className="text-center py-10 text-red-500">
        {language === "en"
          ? "No career data available."
          : "कोई करियर जानकारी उपलब्ध नहीं है।"}
      </div>
    );
  }

  const uniqueInterests = getUniqueInterests();
  const uniqueStreams = getUniqueStreams();
  const uniqueEducations = getUniqueEducations();

  return (
    <>
      {/* Filter Section */}
      <div className="max-w-7xl mx-auto mb-8">
        <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
          <div className="flex items-center gap-2 mb-4">
            <Filter className="w-5 h-5 text-blue-600" />
            <h3 className="text-lg font-semibold text-gray-800">
              {language === "en" ? "Filters" : "फ़िल्टर"}
            </h3>
            {(selectedInterests.length > 0 ||
              selectedStream ||
              selectedEducation) && (
              <button
                onClick={clearAllFilters}
                className="ml-auto text-sm text-red-600 hover:text-red-800 flex items-center gap-1"
              >
                <X className="w-4 h-4" />
                {language === "en" ? "Clear All" : "सभी साफ़ करें"}
              </button>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Interests Filter */}
            <div className="relative">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {language === "en" ? "Interests" : "रुचियां"}
              </label>
              <button
                onClick={() => setShowInterestDropdown(!showInterestDropdown)}
                className="w-full flex items-center justify-between px-4 py-2 border border-gray-300 rounded-lg bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <span className="text-gray-700">
                  {selectedInterests.length === 0
                    ? language === "en"
                      ? "Select interests"
                      : "रुचियां चुनें"
                    : `${selectedInterests.length} selected`}
                </span>
                <ChevronDown className="w-4 h-4 text-gray-500" />
              </button>

              {showInterestDropdown && (
                <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-48 overflow-y-auto">
                  {uniqueInterests.map((interest) => (
                    <label
                      key={interest}
                      className="flex items-center px-4 py-2 hover:bg-gray-50 cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        checked={selectedInterests.includes(interest)}
                        onChange={() => handleInterestToggle(interest)}
                        className="mr-2 text-blue-600"
                      />
                      <span className="text-sm text-gray-700">{interest}</span>
                    </label>
                  ))}
                </div>
              )}
            </div>

            {/* Stream Filter */}
            <div className="relative">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {language === "en" ? "Stream" : "स्ट्रीम"}
              </label>
              <button
                onClick={() => setShowStreamDropdown(!showStreamDropdown)}
                className="w-full flex items-center justify-between px-4 py-2 border border-gray-300 rounded-lg bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <span className="text-gray-700">
                  {selectedStream ||
                    (language === "en" ? "Select stream" : "स्ट्रीम चुनें")}
                </span>
                <ChevronDown className="w-4 h-4 text-gray-500" />
              </button>

              {showStreamDropdown && (
                <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-48 overflow-y-auto">
                  <button
                    onClick={() => {
                      setSelectedStream("");
                      setShowStreamDropdown(false);
                    }}
                    className="w-full text-left px-4 py-2 hover:bg-gray-50 text-sm text-gray-700"
                  >
                    {language === "en" ? "All Streams" : "सभी स्ट्रीम"}
                  </button>
                  {uniqueStreams.map((stream) => (
                    <button
                      key={stream}
                      onClick={() => {
                        setSelectedStream(stream);
                        setShowStreamDropdown(false);
                      }}
                      className="w-full text-left px-4 py-2 hover:bg-gray-50 text-sm text-gray-700"
                    >
                      {stream}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Education Filter */}
            <div className="relative">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {language === "en" ? "Education" : "शिक्षा"}
              </label>
              <button
                onClick={() => setShowEducationDropdown(!showEducationDropdown)}
                className="w-full flex items-center justify-between px-4 py-2 border border-gray-300 rounded-lg bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <span className="text-gray-700">
                  {selectedEducation ||
                    (language === "en" ? "Select education" : "शिक्षा चुनें")}
                </span>
                <ChevronDown className="w-4 h-4 text-gray-500" />
              </button>

              {showEducationDropdown && (
                <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-48 overflow-y-auto">
                  <button
                    onClick={() => {
                      setSelectedEducation("");
                      setShowEducationDropdown(false);
                    }}
                    className="w-full text-left px-4 py-2 hover:bg-gray-50 text-sm text-gray-700"
                  >
                    {language === "en"
                      ? "All Education Levels"
                      : "सभी शिक्षा स्तर"}
                  </button>
                  {uniqueEducations.map((education) => (
                    <button
                      key={education}
                      onClick={() => {
                        setSelectedEducation(education);
                        setShowEducationDropdown(false);
                      }}
                      className="w-full text-left px-4 py-2 hover:bg-gray-50 text-sm text-gray-700"
                    >
                      {education}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Active Filters Display */}
          {(selectedInterests.length > 0 ||
            selectedStream ||
            selectedEducation) && (
            <div className="mt-4 pt-4 border-t border-gray-200">
              <div className="flex flex-wrap gap-2">
                <span className="text-sm text-gray-600 font-medium">
                  {language === "en" ? "Active filters:" : "सक्रिय फ़िल्टर:"}
                </span>
                {selectedInterests.map((interest) => (
                  <span
                    key={interest}
                    className="inline-flex items-center gap-1 px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs"
                  >
                    {interest}
                    <X
                      className="w-3 h-3 cursor-pointer hover:text-blue-900"
                      onClick={() => handleInterestToggle(interest)}
                    />
                  </span>
                ))}
                {selectedStream && (
                  <span className="inline-flex items-center gap-1 px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs">
                    {selectedStream}
                    <X
                      className="w-3 h-3 cursor-pointer hover:text-green-900"
                      onClick={() => setSelectedStream("")}
                    />
                  </span>
                )}
                {selectedEducation && (
                  <span className="inline-flex items-center gap-1 px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-xs">
                    {selectedEducation}
                    <X
                      className="w-3 h-3 cursor-pointer hover:text-purple-900"
                      onClick={() => setSelectedEducation("")}
                    />
                  </span>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Results Count */}
        <div className="mt-4 text-sm text-gray-600">
          {language === "en"
            ? `Showing ${filteredCareerItem.length} of ${careerItem.length} careers`
            : `${careerItem.length} में से ${filteredCareerItem.length} करियर दिखाए जा रहे हैं`}
        </div>
      </div>

      {/* Cards Grid */}
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          {/* 1 */}
          <div className="inline-flex items-center justify-center p-2 bg-blue-100 rounded-full mb-8">
            <div className="flex items-center space-x-2 bg-white px-6 py-3 rounded-full shadow-lg">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-semibold text-blue-700 uppercase tracking-wider">
                {language === "en" ? "Career" : "करियर"}
              </span>
            </div>
          </div>
          {/* 2 */}
          <h2 className="text-3xl font-bold text-blue-900 mb-4">
            {language === "en" ? "Browse Career" : "करियर ब्राउज़ करें"}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {language === "en"
              ? "Discover the right path for your future through our detailed career guidance section."
              : "अपने भविष्य को सशक्त बनाएं करियर मार्गदर्शन की सम्पूर्ण जानकारी के साथ।"}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCareerItem?.map((item, i) => (
            <Card
              key={i}
              className="group relative h-full bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 overflow-hidden"
            >
              {/* Gradient Background Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-indigo-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Top Decorative Element */}
              <div className="relative">
                <div className="h-1.5 bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-600"></div>
                <div className="absolute -top-2 -right-2 w-20 h-20 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-xl group-hover:scale-150 transition-transform duration-700"></div>
              </div>

              {/* Card Header */}
              <div className="relative p-6 pb-4">
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl shadow-lg">
                    <GraduationCap className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-right">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-700 border border-green-200">
                      <Shield className="w-3 h-3 mr-1" />
                      {item.currentStatus}
                    </span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-800 mb-2 line-clamp-2 group-hover:text-indigo-700 transition-colors">
                  {item.title?.[language]}
                </h3>

                <div className="flex items-center gap-4 text-sm text-gray-600">
                  <span className="flex items-center gap-2 px-3 py-1.5 bg-blue-50 rounded-lg border border-blue-100">
                    <GraduationCap className="w-4 h-4 text-blue-600" />
                    <span className="font-medium">
                      {item.currentEducation.join(", ")}
                    </span>
                  </span>
                  <span className="flex items-center gap-2 px-3 py-1.5 bg-purple-50 rounded-lg border border-purple-100">
                    <BookOpen className="w-4 h-4 text-purple-600" />
                    <span className="font-medium">{item.stream}</span>
                  </span>
                </div>
              </div>

              {/* Description */}
              <div className="relative px-6 pb-4">
                <p className="text-sm text-gray-600 leading-relaxed line-clamp-3 mb-4">
                  {item.description?.[language]}
                </p>

                {/* Interest Tags */}
                <div className="mb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Award className="w-4 h-4 text-orange-500" />
                    <span className="font-semibold text-sm text-gray-700">
                      {language === "en" ? "Areas of Interest" : "रुचि क्षेत्र"}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {item.interests.slice(0, 3).map((interest, index) => (
                      <span
                        key={index}
                        className="px-3 py-1.5 bg-gradient-to-r from-orange-100 to-red-100 text-orange-700 rounded-full text-xs font-medium border border-orange-200 hover:shadow-sm transition-shadow"
                      >
                        {interest}
                      </span>
                    ))}
                    {item.interests.length > 3 && (
                      <span className="px-3 py-1.5 bg-gray-100 text-gray-600 rounded-full text-xs font-medium border border-gray-200">
                        +{item.interests.length - 3} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Exam ID */}
                <div className="flex items-center gap-2 text-sm mb-6">
                  <Target className="w-4 h-4 text-indigo-500" />
                  <span className="font-semibold text-gray-700">
                    {language === "en" ? "Exam ID:" : "परीक्षा ID:"}
                  </span>
                  <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded-md font-mono text-xs border">
                    {item.id}
                  </span>
                </div>
              </div>

              {/* Action Button */}
              <div className="relative px-6 pb-6">
                <Link
                  to={`/career/${item.id}`}
                  className="group/btn w-full flex items-center justify-center gap-3 px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white rounded-xl transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:scale-[1.02] active:scale-[0.98]"
                >
                  <Eye className="w-4 h-4 group-hover/btn:scale-110 transition-transform" />
                  <span>
                    {language === "en" ? "View Details" : "संपूर्ण विवरण देखें"}
                  </span>
                  <div className="w-2 h-2 bg-white/30 rounded-full group-hover/btn:translate-x-1 transition-transform"></div>
                </Link>
              </div>

              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 rounded-3xl ring-2 ring-transparent group-hover:ring-indigo-200 transition-all duration-300 pointer-events-none"></div>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
};

export default CareerList;
