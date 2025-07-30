import { useLanguage } from "@/contexts/LanguageContext";
import {
  ArrowRightLeft,
  Award,
  Clock,
  Info,
  Target,
  Users,
} from "lucide-react";

function Saksham() {
  const { language } = useLanguage();
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-orange-50">
      {/* Hero Section */}
      {/* <div className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-4 pt-2.5 bg-gradient-to-r from-white to-orange-200 bg-clip-text text-transparent">
            {language === "en" ? "Career Guidance" : "करियर मार्गदर्शन"}
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed mb-8">
              {language === "en"
        ? "‘Saksham’ is an initiative to make youth capable through proper training, education, and mentoring. It supports individuals in becoming self-reliant and future-ready."
        : "‘सक्षम’ एक ऐसी पहल है जो युवाओं को उचित प्रशिक्षण, शिक्षा और मार्गदर्शन के माध्यम से सक्षम बनाती है। यह उन्हें आत्मनिर्भर और भविष्य के लिए तैयार बनने में सहायता करती है।"}
          </p>
          <div className="flex justify-center space-x-4">
            <div className="flex items-center text-blue-200">
              <Users className="w-5 h-5 mr-2" />
              <span>
                {language === "en" ? "Expert Guidance" : "विशेषज्ञ मार्गदर्शन"}
              </span>
            </div>
            <div className="flex items-center text-blue-200">
              <Target className="w-5 h-5 mr-2" />
              <span>
                {language === "en" ? "Goal-Oriented" : "लक्ष्य-उन्मुख"}
              </span>
            </div>
            <div className="flex items-center text-blue-200">
              <Award className="w-5 h-5 mr-2" />
              <span>
                {language === "en" ? "Success Focused" : "सफलता केंद्रित"}
              </span>
            </div>
          </div>
        </div>
      </div> */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-4 pt-2.5 bg-gradient-to-r from-white to-orange-200 bg-clip-text text-transparent">
            {language === "en" ? "Aao Saksham Banein" : "आओ सक्षम बनें"}
          </h1>
          <h5 className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed mb-0">
            {language === "en"
              ? "Jahaan har yojana hai ab aapke haath mein!"
              : "जहां हर योजना है अब आपके हाथ में!"}
          </h5>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed mb-8">
            {language === "en"
              ? "Sarkari yojanaon ki jankari, patrata, aur seedhe labh — ab ek hi manch par, saral aur paardarshi tareeke se."
              : "सरकारी योजनाओं की जानकारी, पात्रता, और सीधे लाभ — अब एक ही मंच पर, सरल और पारदर्शी तरीके से।"}
          </p>
          <div className="flex justify-center space-x-4">
            <div className="flex items-center text-blue-200">
              {/* <Users className="w-5 h-5 mr-2" /> */}
              <Clock className="w-6 h-6 mr-2 text-orange-400" />
              <span>
                {language === "en"
                  ? "Samay aur paise ki bachat"
                  : "समय और पैसे की बचत"}
              </span>
            </div>
            <div className="flex items-center text-blue-200">
              {/* <Target className="w-5 h-5 mr-2" /> */}
              <ArrowRightLeft className="w-6 h-6 mr-2 text-orange-400" />
              <span>
                {language === "en"
                  ? "Sarkari yojanaon tak seedha pahunch"
                  : "सरकारी योजनाओं तक सीधा पहुंच"}
              </span>
            </div>
            <div className="flex items-center text-blue-200">
              {/* <Award className="w-5 h-5 mr-2" /> */}
              <Info className="w-6 h-6 mr-2 text-orange-400" />
              <span>
                {language === "en"
                  ? "Updated aur vishwasniya jankari"
                  : "अपडेटेड और विश्वसनीय जानकारी"}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Saksham;
