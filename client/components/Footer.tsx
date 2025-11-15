import { Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gradient-to-b from-slate-50 to-slate-100 border-t border-slate-200 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="font-bold text-lg text-slate-900 mb-4">SafeLine</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Smart Crime Report Management System. Report crimes safely and anonymously with our secure platform.
            </p>
            <p className="text-slate-500 text-xs mt-4">
              <strong>Theme:</strong> Smart Solutions, Simple Codes
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-slate-900 mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-slate-600 hover:text-blue-600 transition-colors text-sm">
                  Home
                </a>
              </li>
              <li>
                <a href="/report" className="text-slate-600 hover:text-blue-600 transition-colors text-sm">
                  Report a Crime
                </a>
              </li>
              <li>
                <a href="/track" className="text-slate-600 hover:text-blue-600 transition-colors text-sm">
                  Track Report
                </a>
              </li>
              <li>
                <a href="/login" className="text-slate-600 hover:text-blue-600 transition-colors text-sm">
                  Admin Access
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-slate-900 mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                <span className="text-slate-600 text-sm">+880183017****</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-teal-500 mt-0.5 flex-shrink-0" />
                <span className="text-slate-600 text-sm">mdnurddin2002@gmail.com</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                <span className="text-slate-600 text-sm">Dhaka</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-300 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-600 text-sm">
              © 2024 SafeLine. All rights reserved. | <span className="font-semibold">Smart Solutions, Simple Codes</span>
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-slate-600 hover:text-blue-600 transition-colors text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-slate-600 hover:text-blue-600 transition-colors text-sm">
                Terms of Service
              </a>
              <a href="#" className="text-slate-600 hover:text-blue-600 transition-colors text-sm">
                Security
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
