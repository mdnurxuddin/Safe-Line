import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

export function Navigation() {
  return (
    <nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <div className="flex flex-col">
              <span className="font-bold text-lg text-slate-900">SafeLine</span>
              <span className="text-xs text-slate-600 font-medium">Crime Reports</span>
            </div>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              to="/"
              className="text-slate-700 hover:text-blue-600 font-medium transition-colors"
            >
              Home
            </Link>
            <Link
              to="/report"
              className="text-slate-700 hover:text-blue-600 font-medium transition-colors"
            >
              Report
            </Link>
            <Link
              to="/track"
              className="text-slate-700 hover:text-blue-600 font-medium transition-colors"
            >
              Track
            </Link>
            <Link
              to="/login"
              className={cn(
                "px-6 py-2 rounded-lg font-semibold transition-all",
                "bg-gradient-to-r from-blue-500 to-teal-500 text-white",
                "hover:shadow-lg hover:shadow-blue-500/40 hover:scale-105"
              )}
            >
              Admin
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2 hover:bg-slate-100 rounded-lg transition-colors">
            <div className="space-y-1.5">
              <div className="w-6 h-0.5 bg-slate-900"></div>
              <div className="w-6 h-0.5 bg-slate-900"></div>
              <div className="w-6 h-0.5 bg-slate-900"></div>
            </div>
          </button>
        </div>
      </div>
    </nav>
  );
}
