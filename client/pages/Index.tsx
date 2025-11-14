import { Link } from "react-router-dom";
import { Shield, AlertCircle, Search, CheckCircle, Lock, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

export default function Index() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navigation />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-32">
          {/* Background Gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-teal-50"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-200 to-transparent rounded-full blur-3xl opacity-20"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-teal-200 to-transparent rounded-full blur-3xl opacity-20"></div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div className="space-y-8">
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full">
                    <Shield className="w-4 h-4 text-blue-600" />
                    <span className="text-sm font-semibold text-blue-600">নিরাপদ • সুরক্ষিত • গোপনীয়</span>
                  </div>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
                    অপরাধ প্রতিবেদন করুন<br />
                    <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                      নিরাপদে এবং গোপনীয়ভাবে
                    </span>
                  </h1>
                  <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
                    SafeLine বাংলাদেশের জন্য একটি স্মার্ট অপরাধ প্রতিবেদন ব্যবস্থাপনা সিস্টেম। আপনার পরিচয় গোপনীয় রেখে প্রতিবেদন করুন এবং রিয়েল-টাইমে ট্র্যাক করুন।
                  </p>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    to="/report"
                    className={cn(
                      "flex items-center justify-center gap-2 px-8 py-3 rounded-lg font-semibold transition-all transform hover:scale-105",
                      "bg-gradient-to-r from-blue-500 to-blue-600 text-white",
                      "hover:shadow-xl hover:shadow-blue-500/40 active:scale-95"
                    )}
                  >
                    <AlertCircle className="w-5 h-5" />
                    Report a Crime
                  </Link>
                  <Link
                    to="/track"
                    className={cn(
                      "flex items-center justify-center gap-2 px-8 py-3 rounded-lg font-semibold transition-all transform hover:scale-105",
                      "border-2 border-teal-500 text-teal-600",
                      "hover:bg-teal-50 active:scale-95"
                    )}
                  >
                    <Search className="w-5 h-5" />
                    Track Report
                  </Link>
                </div>

                {/* Trust Indicators */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 pt-8">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="font-semibold text-slate-900">100% Secure</span>
                    </div>
                    <p className="text-sm text-slate-600">End-to-end encrypted</p>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Lock className="w-5 h-5 text-blue-500" />
                      <span className="font-semibold text-slate-900">Anonymous</span>
                    </div>
                    <p className="text-sm text-slate-600">Your privacy matters</p>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-5 h-5 text-teal-500" />
                      <span className="font-semibold text-slate-900">24/7 Tracked</span>
                    </div>
                    <p className="text-sm text-slate-600">Real-time updates</p>
                  </div>
                </div>
              </div>

              {/* Right - Illustration Area */}
              <div className="relative h-96 md:h-full min-h-96 flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-teal-100 rounded-2xl opacity-50"></div>
                <div className="relative z-10 space-y-4 w-full px-6">
                  {/* Card 1 */}
                  <div className="bg-white p-6 rounded-xl shadow-lg transform hover:scale-105 transition-transform">
                    <div className="flex items-start gap-4">
                      <div className="bg-blue-100 p-3 rounded-lg">
                        <AlertCircle className="w-6 h-6 text-blue-600" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-slate-900">Easy Reporting</h3>
                        <p className="text-sm text-slate-600">Submit reports in seconds</p>
                      </div>
                    </div>
                  </div>

                  {/* Card 2 */}
                  <div className="bg-white p-6 rounded-xl shadow-lg transform hover:scale-105 transition-transform ml-8">
                    <div className="flex items-start gap-4">
                      <div className="bg-teal-100 p-3 rounded-lg">
                        <Search className="w-6 h-6 text-teal-600" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-slate-900">Track Status</h3>
                        <p className="text-sm text-slate-600">Monitor your case progress</p>
                      </div>
                    </div>
                  </div>

                  {/* Card 3 */}
                  <div className="bg-white p-6 rounded-xl shadow-lg transform hover:scale-105 transition-transform">
                    <div className="flex items-start gap-4">
                      <div className="bg-green-100 p-3 rounded-lg">
                        <CheckCircle className="w-6 h-6 text-green-600" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-slate-900">Verified Cases</h3>
                        <p className="text-sm text-slate-600">Professional review process</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 md:py-24 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Smart Crime Management System
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Comprehensive tools designed to make crime reporting accessible, secure, and effective for everyone.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Feature 1 */}
              <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-shadow">
                <div className="bg-gradient-to-br from-blue-100 to-blue-50 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                  <AlertCircle className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Multiple Crime Types</h3>
                <p className="text-slate-600">
                  Report various crimes: Theft, Harassment, Cybercrime, Violence, and more. Categorized for efficient processing.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-shadow">
                <div className="bg-gradient-to-br from-teal-100 to-teal-50 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                  <Lock className="w-6 h-6 text-teal-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Complete Privacy</h3>
                <p className="text-slate-600">
                  Your identity remains anonymous. No personal data is shared. Secure encryption protects all information.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-shadow">
                <div className="bg-gradient-to-br from-green-100 to-green-50 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                  <Search className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Unique Tracking ID</h3>
                <p className="text-slate-600">
                  Every report gets a unique ID. Track your case status anytime without revealing your identity.
                </p>
              </div>

              {/* Feature 4 */}
              <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-shadow">
                <div className="bg-gradient-to-br from-purple-100 to-purple-50 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                  <MapPin className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Location Support</h3>
                <p className="text-slate-600">
                  Include location details with your report. Our system integrates with mapping tools for accurate crime data.
                </p>
              </div>

              {/* Feature 5 */}
              <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-shadow">
                <div className="bg-gradient-to-br from-orange-100 to-orange-50 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                  <Shield className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Media Evidence</h3>
                <p className="text-slate-600">
                  Upload photos and videos as evidence. All media is securely stored and never shared without authorization.
                </p>
              </div>

              {/* Feature 6 */}
              <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-shadow">
                <div className="bg-gradient-to-br from-blue-100 to-teal-50 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                  <CheckCircle className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Professional Review</h3>
                <p className="text-slate-600">
                  Admin team verifies all reports. Get real-time status updates throughout the investigation process.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-r from-blue-600 to-teal-600 rounded-2xl p-8 md:p-16 text-white text-center space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold">
                Ready to Report?
              </h2>
              <p className="text-lg text-blue-100 max-w-2xl mx-auto">
                Your safety matters. Report incidents anonymously and help make your community safer. It takes just a few minutes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Link
                  to="/report"
                  className={cn(
                    "flex items-center justify-center gap-2 px-8 py-3 rounded-lg font-semibold transition-all transform hover:scale-105",
                    "bg-white text-blue-600 hover:shadow-xl active:scale-95"
                  )}
                >
                  <AlertCircle className="w-5 h-5" />
                  Start Report Now
                </Link>
                <Link
                  to="/track"
                  className={cn(
                    "flex items-center justify-center gap-2 px-8 py-3 rounded-lg font-semibold transition-all transform hover:scale-105",
                    "border-2 border-white text-white hover:bg-white/10 active:scale-95"
                  )}
                >
                  <Search className="w-5 h-5" />
                  Track Existing Report
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
