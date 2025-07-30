import { useLanguage } from "@/contexts/LanguageContext";
import { Mail, Shield, Phone , MapPin} from "lucide-react";
import { useState } from "react";
import axios from "axios";

const Contact = () => {
  const { language } = useLanguage();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    description: "",
    attachment: null,
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { id, value, files } = e.target;

    setFormData((prev) => ({
      ...prev,
      [id]: files ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const form = new FormData();
      form.append("name", formData.name);
      form.append("email", formData.email);
      form.append("description", formData.description);
      if (formData.attachment) {
        form.append("attachment", formData.attachment);
      }

      // const response = await axios.post("https://your-api-endpoint.com/grievance", form, {
      //   headers: {
      //     "Content-Type": "multipart/form-data",
      //   },
      // });

      setMessage("success");

      setFormData({
        name: "",
        email: "",
        description: "",
        attachment: null,
      });
    } catch (error) {
      console.error(error);
      setMessage("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-orange-50">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold p-3 mb-4 bg-gradient-to-r from-white to-orange-200 bg-clip-text text-transparent">
            {language === "en" ? "Grievance Redressal" : "शिकायत निवारण"}
          </h1>
          <p className="text-xl text-blue-100">
            {language === "en"
              ? "Reach out to us for any issues, concerns, or feedback regarding government digital services in Chhattisgarh."
              : "छत्तीसगढ़ की सरकारी डिजिटल सेवाओं से संबंधित किसी भी समस्या, चिंता या प्रतिक्रिया के लिए हमसे संपर्क करें।"}
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-16 grid lg:grid-cols-3 gap-10">
        {/* Grievance Form */}
        <div className="lg:col-span-2 bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
          <h2 className="text-2xl font-bold text-blue-900 mb-6">
            {language === "en"
              ? "Submit Your Grievance"
              : "अपनी शिकायत दर्ज करें"}
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                {language === "en" ? "Name" : "नाम"}
              </label>
              <input
                id="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder={
                  language === "en" ? "Enter your name" : "अपना नाम दर्ज करें"
                }
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                {language === "en" ? "Email" : "ईमेल"}
              </label>
              <input
                id="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder={
                  language === "en" ? "Enter your email" : "अपना ईमेल दर्ज करें"
                }
              />
            </div>

            <div>
              <label
                htmlFor="description"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                {language === "en" ? "Description" : "विवरण"}
              </label>
              <textarea
                id="description"
                rows={5}
                value={formData.description}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder={
                  language === "en"
                    ? "Describe your grievance..."
                    : "अपनी शिकायत का विवरण लिखें..."
                }
              ></textarea>
            </div>

            <div>
              <label
                htmlFor="attachment"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                {language === "en"
                  ? "Attach a File (optional)"
                  : "फ़ाइल संलग्न करें (वैकल्पिक)"}
              </label>
              <input
                id="attachment"
                type="file"
                onChange={handleChange}
                className="block w-full text-sm text-gray-700 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="bg-gradient-to-r from-blue-800 to-blue-600 text-white px-6 py-2 rounded-lg hover:from-blue-600 hover:to-blue-800 transition"
            >
              {loading
                ? language === "en"
                  ? "Submitting..."
                  : "जमा किया जा रहा है..."
                : language === "en"
                ? "Submit"
                : "जमा करें"}
            </button>

            {message && (
              <p
                className={`text-sm mt-2 ${
                  message === "success" ? "text-green-600" : "text-red-600"
                }`}
              >
                {message === "success"
                  ? language === "en"
                    ? "Grievance submitted successfully."
                    : "शिकायत सफलतापूर्वक जमा की गई।"
                  : language === "en"
                  ? "Submission failed. Try again."
                  : "जमा करना विफल रहा। कृपया पुनः प्रयास करें।"}
              </p>
            )}
          </form>
        </div>

        {/* Right Panel */}
        <div className="space-y-0">
          <div className="bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-2xl shadow-xl p-6">
            <h3 className="text-xl font-bold mb-4">
              {language === "en" ? "Emergency Contacts" : "आपातकालीन संपर्क"}
            </h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span>{language === "en" ? "Police" : "पुलिस"}</span>
                <span className="font-bold">100</span>
              </div>
              <div className="flex justify-between">
                <span>{language === "en" ? "Ambulance" : "एम्बुलेंस"}</span>
                <span className="font-bold">108</span>
              </div>
              <div className="flex justify-between">
                <span>{language === "en" ? "Fire" : "फायर ब्रिगेड"}</span>
                <span className="font-bold">101</span>
              </div>
              <div className="flex justify-between">
                <span>
                  {language === "en" ? "Women Helpline" : "महिला हेल्पलाइन"}
                </span>
                <span className="font-bold">1091</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
