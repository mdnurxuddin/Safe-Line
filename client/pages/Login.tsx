import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Lock, Eye, EyeOff, AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Demo credentials
  const DEMO_USERNAME = "admin";
  const DEMO_PASSWORD = "password123";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    // Simulate login delay
    setTimeout(() => {
      if (username === DEMO_USERNAME && password === DEMO_PASSWORD) {
        // Store login state
        localStorage.setItem("adminLoggedIn", "true");
        navigate("/dashboard");
      } else {
        setError("Invalid username or password. Try admin / password123");
      }
      setIsLoading(false);
    }, 500);
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navigation />
      <main className="flex-1 flex items-center justify-center py-12 md:py-16">
        <div className="max-w-md w-full px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12 space-y-4">
            <div className="flex justify-center">
              <div className="bg-gradient-to-br from-blue-500 to-teal-500 p-4 rounded-lg">
                <Lock className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900">
              Admin Login
            </h1>
            <p className="text-slate-600">
              Authorized personnel only. Access restricted.
            </p>
          </div>

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Error Message */}
            {error && (
              <div className="bg-red-50 border-2 border-red-200 rounded-lg p-4 flex gap-3">
                <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-red-700">{error}</p>
              </div>
            )}

            {/* Username */}
            <div className="space-y-2">
              <label className="block font-semibold text-slate-900">
                Username
              </label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter username"
                className="w-full px-4 py-3 rounded-lg border-2 border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all text-slate-900 placeholder-slate-500"
                disabled={isLoading}
              />
            </div>

            {/* Password */}
            <div className="space-y-2">
              <label className="block font-semibold text-slate-900">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter password"
                  className="w-full px-4 py-3 rounded-lg border-2 border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all text-slate-900 placeholder-slate-500 pr-12"
                  disabled={isLoading}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-slate-600 hover:text-slate-900 transition-colors"
                >
                  {showPassword ? (
                    <EyeOff className="w-5 h-5" />
                  ) : (
                    <Eye className="w-5 h-5" />
                  )}
                </button>
              </div>
            </div>

            {/* Remember Me */}
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="remember"
                defaultChecked
                className="w-4 h-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
                disabled={isLoading}
              />
              <label htmlFor="remember" className="text-sm text-slate-600">
                Remember me
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading || !username || !password}
              className={cn(
                "w-full py-3 rounded-lg font-semibold transition-all transform text-white flex items-center justify-center gap-2",
                isLoading || !username || !password
                  ? "bg-slate-300 cursor-not-allowed"
                  : "bg-gradient-to-r from-blue-500 to-teal-500 hover:shadow-xl hover:shadow-blue-500/40 hover:scale-105 active:scale-95"
              )}
            >
              {isLoading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Logging in...
                </>
              ) : (
                <>
                  <Lock className="w-5 h-5" />
                  Login to Dashboard
                </>
              )}
            </button>
          </form>

          {/* Demo Credentials Box */}
          <div className="mt-12 bg-blue-50 border-2 border-blue-200 rounded-lg p-6 space-y-4">
            <h3 className="font-semibold text-slate-900">Demo Credentials</h3>
            <div className="space-y-3 text-sm">
              <div>
                <p className="text-slate-600">Username:</p>
                <p className="font-mono font-bold text-blue-600">admin</p>
              </div>
              <div>
                <p className="text-slate-600">Password:</p>
                <p className="font-mono font-bold text-blue-600">password123</p>
              </div>
            </div>
            <p className="text-xs text-slate-600 italic">
              This is a demo system. In production, use strong authentication with proper security measures.
            </p>
          </div>

          {/* Back Link */}
          <div className="mt-8 text-center">
            <a href="/" className="text-blue-600 hover:text-blue-700 font-medium transition-colors">
              Back to Home
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
