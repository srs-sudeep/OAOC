import { useState } from "react";

const EducationStepForm = () => {
  const [step, setStep] = useState(1);
  const [educationStatus, setEducationStatus] = useState("");
  const [branch, setBranch] = useState("");
  const [interest, setInterest] = useState("");

  const handleNext = () => {
    if (step < 3) setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-xl shadow-md space-y-6">
      {step === 1 && (
        <div>
          <label className="block text-lg font-medium text-gray-700 mb-2">
            आपने किस स्तर की शिक्षा प्राप्त की है?
          </label>
          <select
            value={educationStatus}
            onChange={(e) => setEducationStatus(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md"
          >
            <option value="">-- चयन करें --</option>
            <option value="10th">10वीं तक</option>
            <option value="12th">12वीं पास</option>
            <option value="graduation">स्नातक</option>
            <option value="postGraduation">स्नातकोत्तर</option>
            <option value="diploma">डिप्लोमा</option>
          </select>
        </div>
      )}

      {step === 2 && (
        <div>
          <label className="block text-lg font-medium text-gray-700 mb-2">
            आपकी शाखा या विषय
          </label>
          <select
            value={branch}
            onChange={(e) => setBranch(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md"
          >
            <option value="">-- चयन करें --</option>
            <option value="science">विज्ञान</option>
            <option value="commerce">वाणिज्य</option>
            <option value="arts">कला</option>
            <option value="engineering">इंजीनियरिंग</option>
            <option value="medical">मेडिकल</option>
            <option value="other">अन्य</option>
          </select>
        </div>
      )}

      {step === 3 && (
        <div>
          <label className="block text-lg font-medium text-gray-700 mb-2">
            आपकी रुचि
          </label>
          <select
            value={interest}
            onChange={(e) => setInterest(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md"
          >
            <option value="">-- चयन करें --</option>
            <option value="govt">सरकारी नौकरी</option>
            <option value="private">प्राइवेट सेक्टर</option>
            <option value="entrepreneurship">उद्यमिता</option>
            <option value="research">अनुसंधान</option>
            <option value="higherStudies">उच्च अध्ययन</option>
          </select>
        </div>
      )}

      {/* Navigation buttons */}
      <div className="flex justify-between pt-4">
        {step > 1 && (
          <button
            onClick={handleBack}
            className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300"
          >
            पीछे जाएं
          </button>
        )}
        {step < 3 && (
          <button
            onClick={handleNext}
            disabled={!educationStatus && step === 1}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            आगे बढ़ें
          </button>
        )}
        {step === 3 && interest && (
          <button
            onClick={() => alert("अब Career Guidance दिखाएं")}
            className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
          >
            करियर विकल्प देखें
          </button>
        )}
      </div>
    </div>
  );
};

export default EducationStepForm;
