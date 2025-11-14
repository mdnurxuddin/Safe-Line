import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { AlertCircle, Upload, CheckCircle, Copy, Shield } from "lucide-react";
import { cn } from "@/lib/utils";

const CITIES = [
  {
    id: "dhaka",
    name: "Dhaka",
    nameInBengali: "ঢাকা",
    stations: [
      { id: "motijheel", name: "Motijheel", area: "Motijheel, Paltan" },
      { id: "gulshan", name: "Gulshan", area: "Gulshan, Banani" },
      { id: "dhanmondi", name: "Dhanmondi", area: "Dhanmondi, Adabor" },
      { id: "mirpur", name: "Mirpur", area: "Mirpur, Siddeshwari" },
    ],
  },
  {
    id: "chittagong",
    name: "Chittagong",
    nameInBengali: "চট্টগ্রাম",
    stations: [
      { id: "kotwali", name: "Kotwali", area: "Kotwali, Port Area" },
      { id: "halishahar", name: "Halishahar", area: "Halishahar, Nasirabad" },
      { id: "bayazid", name: "Bayazid", area: "Bayazid, Agrabad" },
    ],
  },
  {
    id: "sylhet",
    name: "Sylhet",
    nameInBengali: "সিলেট",
    stations: [
      { id: "kotwali_sylhet", name: "Kotwali", area: "Main City" },
      { id: "osmani_nagar", name: "Osmani Nagar", area: "Osmani Nagar" },
    ],
  },
];

const CRIME_TYPES = [
  "Theft",
  "Harassment",
  "Cybercrime",
  "Violence",
  "Fraud",
  "Robbery",
  "Assault",
  "Other"
];

export default function Report() {
  const [isAnonymous, setIsAnonymous] = useState(true);
  const [selectedCity, setSelectedCity] = useState("");
  const [formData, setFormData] = useState({
    crimeType: "",
    city: "",
    policeStation: "",
    location: "",
    description: "",
    fileName: "",
    // Non-anonymous fields
    fullName: "",
    nidNumber: "",
    phoneNumber: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [trackingId, setTrackingId] = useState("");
  const [copied, setCopied] = useState(false);

  const generateTrackingId = () => {
    const prefix = "SL";
    const timestamp = Date.now().toString().slice(-6);
    const random = Math.random().toString(36).substring(2, 8).toUpperCase();
    return `${prefix}${timestamp}${random}`;
  };

  const currentStations = selectedCity
    ? CITIES.find((c) => c.id === selectedCity)?.stations || []
    : [];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validation
    const isValid =
      formData.crimeType &&
      formData.city &&
      formData.policeStation &&
      formData.location &&
      formData.description &&
      (isAnonymous || (formData.fullName && formData.phoneNumber));

    if (isValid) {
      const id = generateTrackingId();
      setTrackingId(id);
      setSubmitted(true);
      // Reset form
      setFormData({
        crimeType: "",
        city: "",
        policeStation: "",
        location: "",
        description: "",
        fileName: "",
        fullName: "",
        nidNumber: "",
        phoneNumber: "",
      });
    }
  };

  const handleCopyId = () => {
    navigator.clipboard.writeText(trackingId);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (submitted) {
    return (
      <div className="flex flex-col min-h-screen bg-white">
        <Navigation />
        <main className="flex-1 py-16 md:py-24">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-8">
              <div className="flex justify-center">
                <div className="bg-gradient-to-br from-green-100 to-teal-100 p-6 rounded-full">
                  <CheckCircle className="w-16 h-16 text-green-600" />
                </div>
              </div>
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl font-bold text-slate-900">
                  Report Submitted!
                </h1>
                <p className="text-lg text-slate-600">
                  Thank you for your courage in reporting this incident. Your identity remains completely {isAnonymous ? "anonymous" : "confidential"}.
                </p>
              </div>

              <div className="bg-blue-50 border-2 border-blue-200 rounded-2xl p-8 space-y-4">
                <h2 className="text-xl font-semibold text-slate-900">Your Tracking ID</h2>
                <div className="flex items-center gap-4 justify-center flex-wrap">
                  <div className="text-4xl font-bold text-blue-600 font-mono">
                    {trackingId}
                  </div>
                  <button
                    onClick={handleCopyId}
                    className={cn(
                      "flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all",
                      copied
                        ? "bg-green-500 text-white"
                        : "bg-blue-500 text-white hover:bg-blue-600"
                    )}
                  >
                    <Copy className="w-5 h-5" />
                    {copied ? "Copied!" : "Copy ID"}
                  </button>
                </div>
                <p className="text-sm text-slate-600 text-center">
                  Save this ID to track your report status anytime. You can use it on our "Track Report" page.
                </p>
              </div>

              <div className="bg-slate-50 rounded-2xl p-8 space-y-4 text-left">
                <h3 className="font-semibold text-slate-900">What Happens Next?</h3>
                <ol className="space-y-3 text-slate-600">
                  <li className="flex gap-4">
                    <span className="font-bold text-blue-600 flex-shrink-0">1.</span>
                    <span>Your report will be forwarded to {formData.city || "the selected"} police station</span>
                  </li>
                  <li className="flex gap-4">
                    <span className="font-bold text-blue-600 flex-shrink-0">2.</span>
                    <span>Our team will review your report within 24 hours</span>
                  </li>
                  <li className="flex gap-4">
                    <span className="font-bold text-blue-600 flex-shrink-0">3.</span>
                    <span>You can track the status anytime using your ID</span>
                  </li>
                  <li className="flex gap-4">
                    <span className="font-bold text-blue-600 flex-shrink-0">4.</span>
                    <span>All information remains secure and confidential</span>
                  </li>
                </ol>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => setSubmitted(false)}
                  className={cn(
                    "flex items-center justify-center gap-2 px-8 py-3 rounded-lg font-semibold transition-all transform hover:scale-105",
                    "bg-gradient-to-r from-blue-500 to-blue-600 text-white"
                  )}
                >
                  <AlertCircle className="w-5 h-5" />
                  Submit Another Report
                </button>
                <a
                  href="/"
                  className={cn(
                    "flex items-center justify-center gap-2 px-8 py-3 rounded-lg font-semibold transition-all",
                    "border-2 border-slate-300 text-slate-600 hover:bg-slate-50"
                  )}
                >
                  Return to Home
                </a>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navigation />
      <main className="flex-1 py-12 md:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-blue-100 p-3 rounded-lg">
                <AlertCircle className="w-6 h-6 text-blue-600" />
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-slate-900">
                Report a Crime
              </h1>
            </div>
            <p className="text-lg text-slate-600">
              Report incidents securely. You can choose to remain anonymous or provide your details for follow-up.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Anonymous Toggle */}
            <div className="bg-gradient-to-r from-blue-50 to-teal-50 rounded-2xl p-6 border-2 border-blue-100">
              <h3 className="font-semibold text-slate-900 mb-4">Reporting Method</h3>
              <div className="flex gap-4">
                <label className="flex items-center gap-3 cursor-pointer p-4 rounded-lg hover:bg-white transition-colors flex-1">
                  <input
                    type="radio"
                    checked={isAnonymous}
                    onChange={() => setIsAnonymous(true)}
                    className="w-5 h-5 text-blue-600"
                  />
                  <div>
                    <p className="font-semibold text-slate-900">Anonymous</p>
                    <p className="text-sm text-slate-600">Report without revealing identity</p>
                  </div>
                </label>
                <label className="flex items-center gap-3 cursor-pointer p-4 rounded-lg hover:bg-white transition-colors flex-1">
                  <input
                    type="radio"
                    checked={!isAnonymous}
                    onChange={() => setIsAnonymous(false)}
                    className="w-5 h-5 text-teal-600"
                  />
                  <div>
                    <p className="font-semibold text-slate-900">Named Report</p>
                    <p className="text-sm text-slate-600">Provide your details for follow-up</p>
                  </div>
                </label>
              </div>
            </div>

            {/* Personal Information (if not anonymous) */}
            {!isAnonymous && (
              <div className="space-y-4 bg-slate-50 rounded-2xl p-6">
                <h3 className="font-semibold text-slate-900 flex items-center gap-2">
                  <Shield className="w-5 h-5 text-blue-600" />
                  Your Information
                </h3>

                <div>
                  <label className="block text-lg font-semibold text-slate-900 mb-3">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="Enter your full name"
                    className="w-full px-4 py-3 rounded-lg border-2 border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all text-slate-900 placeholder-slate-500"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-lg font-semibold text-slate-900 mb-3">
                      NID Number <span className="text-slate-500">(Optional)</span>
                    </label>
                    <input
                      type="text"
                      value={formData.nidNumber}
                      onChange={(e) => setFormData({ ...formData, nidNumber: e.target.value })}
                      placeholder="Enter your NID"
                      className="w-full px-4 py-3 rounded-lg border-2 border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all text-slate-900 placeholder-slate-500"
                    />
                  </div>

                  <div>
                    <label className="block text-lg font-semibold text-slate-900 mb-3">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      value={formData.phoneNumber}
                      onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                      placeholder="01XXXXXXXXX"
                      className="w-full px-4 py-3 rounded-lg border-2 border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all text-slate-900 placeholder-slate-500"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Police Station Selection */}
            <div className="space-y-4">
              <h3 className="font-semibold text-slate-900 text-lg">Report Location</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <label className="block font-semibold text-slate-900">
                    City <span className="text-red-500">*</span>
                  </label>
                  <select
                    value={selectedCity}
                    onChange={(e) => {
                      setSelectedCity(e.target.value);
                      setFormData({
                        ...formData,
                        city: e.target.value,
                        policeStation: "",
                      });
                    }}
                    className="w-full px-4 py-3 rounded-lg border-2 border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all font-medium text-slate-900 bg-white"
                  >
                    <option value="">Select a city...</option>
                    {CITIES.map((city) => (
                      <option key={city.id} value={city.id}>
                        {city.name} ({city.nameInBengali})
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-3">
                  <label className="block font-semibold text-slate-900">
                    Police Station <span className="text-red-500">*</span>
                  </label>
                  <select
                    value={formData.policeStation}
                    onChange={(e) => setFormData({ ...formData, policeStation: e.target.value })}
                    disabled={!selectedCity}
                    className="w-full px-4 py-3 rounded-lg border-2 border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all font-medium text-slate-900 bg-white disabled:bg-slate-100"
                  >
                    <option value="">
                      {selectedCity ? "Select a police station..." : "Select city first"}
                    </option>
                    {currentStations.map((station) => (
                      <option key={station.id} value={station.id}>
                        {station.name} - {station.area}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {formData.policeStation && (
                <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-4">
                  <p className="text-sm text-slate-600">
                    <strong>Selected:</strong> Your report will be forwarded to{" "}
                    <span className="font-semibold text-blue-600">
                      {CITIES.find((c) => c.id === selectedCity)
                        ?.stations.find((s) => s.id === formData.policeStation)
                        ?.name || ""}{" "}
                      Police Station
                    </span>
                  </p>
                </div>
              )}
            </div>

            {/* Crime Type */}
            <div className="space-y-3">
              <label className="block text-lg font-semibold text-slate-900">
                Crime Type <span className="text-red-500">*</span>
              </label>
              <select
                value={formData.crimeType}
                onChange={(e) => setFormData({ ...formData, crimeType: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border-2 border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all font-medium text-slate-900 bg-white"
              >
                <option value="">Select a crime type...</option>
                {CRIME_TYPES.map((type) => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
              <p className="text-sm text-slate-600">
                Choose the category that best describes the incident
              </p>
            </div>

            {/* Location */}
            <div className="space-y-3">
              <label className="block text-lg font-semibold text-slate-900">
                Detailed Location <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={formData.location}
                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                placeholder="Enter the exact location where the incident occurred"
                className="w-full px-4 py-3 rounded-lg border-2 border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all text-slate-900 placeholder-slate-500"
              />
              <p className="text-sm text-slate-600">
                Be as specific as possible (street name, building, landmark)
              </p>
            </div>

            {/* Description */}
            <div className="space-y-3">
              <label className="block text-lg font-semibold text-slate-900">
                Description <span className="text-red-500">*</span>
              </label>
              <textarea
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                placeholder="Provide detailed information about the incident. Include date, time, people involved, and what happened."
                rows={6}
                className="w-full px-4 py-3 rounded-lg border-2 border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all text-slate-900 placeholder-slate-500 resize-none"
              ></textarea>
              <p className="text-sm text-slate-600">
                {formData.description.length} characters
              </p>
            </div>

            {/* File Upload */}
            <div className="space-y-3">
              <label className="block text-lg font-semibold text-slate-900">
                Evidence (Photos/Videos) <span className="text-slate-500">(Optional)</span>
              </label>
              <div className="border-2 border-dashed border-slate-300 rounded-lg p-8 text-center hover:border-blue-500 hover:bg-blue-50 transition-all cursor-pointer group">
                <input
                  type="file"
                  multiple
                  accept="image/*,video/*"
                  onChange={(e) => {
                    const fileList = e.target.files;
                    if (fileList && fileList.length > 0) {
                      const names = Array.from(fileList).map(f => f.name).join(", ");
                      setFormData({ ...formData, fileName: names });
                    }
                  }}
                  className="hidden"
                  id="file-upload"
                />
                <label htmlFor="file-upload" className="cursor-pointer space-y-3">
                  <div className="flex justify-center">
                    <div className="bg-blue-100 p-3 rounded-lg group-hover:bg-blue-200 transition-colors">
                      <Upload className="w-6 h-6 text-blue-600" />
                    </div>
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">Click to upload or drag and drop</p>
                    <p className="text-sm text-slate-600">PNG, JPG, MP4 up to 20MB</p>
                  </div>
                  {formData.fileName && (
                    <p className="text-sm text-green-600 font-medium">
                      {formData.fileName}
                    </p>
                  )}
                </label>
              </div>
              <p className="text-sm text-slate-600">
                All media is encrypted and never shared without authorization
              </p>
            </div>

            {/* Terms Agreement */}
            <div className="bg-slate-50 rounded-lg p-4 space-y-3">
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  defaultChecked
                  className="w-5 h-5 rounded border-slate-300 text-blue-600 focus:ring-blue-500 mt-1"
                />
                <span className="text-sm text-slate-600">
                  I agree that my report will be handled confidentially and used to improve community safety. {isAnonymous ? "My identity will remain anonymous." : "I have provided accurate information."}
                </span>
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={
                !formData.crimeType ||
                !formData.city ||
                !formData.policeStation ||
                !formData.location ||
                !formData.description ||
                (!isAnonymous && (!formData.fullName || !formData.phoneNumber))
              }
              className={cn(
                "w-full py-4 rounded-lg font-semibold transition-all transform text-white flex items-center justify-center gap-2",
                formData.crimeType &&
                  formData.city &&
                  formData.policeStation &&
                  formData.location &&
                  formData.description &&
                  (isAnonymous || (formData.fullName && formData.phoneNumber))
                  ? "bg-gradient-to-r from-blue-500 to-teal-500 hover:shadow-xl hover:shadow-blue-500/40 hover:scale-105 active:scale-95"
                  : "bg-slate-300 cursor-not-allowed"
              )}
            >
              <AlertCircle className="w-5 h-5" />
              Submit Report
            </button>
          </form>

          {/* Info Box */}
          <div className="mt-12 bg-teal-50 border-2 border-teal-200 rounded-2xl p-8 space-y-4">
            <h3 className="font-semibold text-slate-900 flex items-center gap-2">
              <Shield className="w-5 h-5 text-teal-600" />
              Your Safety & Privacy
            </h3>
            <ul className="space-y-2 text-slate-600 text-sm">
              <li className="flex gap-3">
                <CheckCircle className="w-5 h-5 text-teal-600 flex-shrink-0" />
                <span>Complete protection of your personal information</span>
              </li>
              <li className="flex gap-3">
                <CheckCircle className="w-5 h-5 text-teal-600 flex-shrink-0" />
                <span>Reports forwarded directly to selected police station</span>
              </li>
              <li className="flex gap-3">
                <CheckCircle className="w-5 h-5 text-teal-600 flex-shrink-0" />
                <span>Anonymous option available for all reports</span>
              </li>
              <li className="flex gap-3">
                <CheckCircle className="w-5 h-5 text-teal-600 flex-shrink-0" />
                <span>Fast investigation and real-time tracking</span>
              </li>
            </ul>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
