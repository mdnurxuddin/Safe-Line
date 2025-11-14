import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Search, CheckCircle, Clock, AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";

interface ReportStatus {
  id: string;
  type: string;
  location: string;
  status: "Pending" | "Under Review" | "Resolved";
  submittedDate: string;
  lastUpdated: string;
  details: string;
}

const MOCK_REPORTS: Record<string, ReportStatus> = {
  "SL123456ABC123": {
    id: "SL123456ABC123",
    type: "Theft",
    location: "Downtown Shopping District",
    status: "Under Review",
    submittedDate: "2024-01-15",
    lastUpdated: "2024-01-16",
    details: "Report has been verified and assigned to investigation team.",
  },
  "SL987654XYZ789": {
    id: "SL987654XYZ789",
    type: "Harassment",
    location: "Community Park",
    status: "Pending",
    submittedDate: "2024-01-17",
    lastUpdated: "2024-01-17",
    details: "Your report has been received and is pending initial review.",
  },
  "SL456789DEF456": {
    id: "SL456789DEF456",
    type: "Cybercrime",
    location: "Online",
    status: "Resolved",
    submittedDate: "2024-01-10",
    lastUpdated: "2024-01-14",
    details: "Investigation completed. Evidence has been forwarded to relevant authorities.",
  },
};

export default function Track() {
  const [trackingId, setTrackingId] = useState("");
  const [report, setReport] = useState<ReportStatus | null>(null);
  const [searched, setSearched] = useState(false);
  const [notFound, setNotFound] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const id = trackingId.toUpperCase().trim();
    setSearched(true);

    if (MOCK_REPORTS[id]) {
      setReport(MOCK_REPORTS[id]);
      setNotFound(false);
    } else {
      setReport(null);
      setNotFound(true);
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Pending":
        return "text-yellow-600 bg-yellow-50 border-yellow-200";
      case "Under Review":
        return "text-blue-600 bg-blue-50 border-blue-200";
      case "Resolved":
        return "text-green-600 bg-green-50 border-green-200";
      default:
        return "text-slate-600 bg-slate-50 border-slate-200";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Pending":
        return <Clock className="w-5 h-5" />;
      case "Under Review":
        return <AlertCircle className="w-5 h-5" />;
      case "Resolved":
        return <CheckCircle className="w-5 h-5" />;
      default:
        return <Search className="w-5 h-5" />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navigation />
      <main className="flex-1 py-12 md:py-16">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-teal-100 p-3 rounded-lg">
                <Search className="w-6 h-6 text-teal-600" />
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-slate-900">
                Track Your Report
              </h1>
            </div>
            <p className="text-lg text-slate-600">
              Enter your tracking ID to check the status of your crime report.
            </p>
          </div>

          {/* Search Form */}
          <form onSubmit={handleSearch} className="mb-12 space-y-4">
            <div className="flex gap-3 flex-col sm:flex-row">
              <input
                type="text"
                value={trackingId}
                onChange={(e) => setTrackingId(e.target.value)}
                placeholder="Enter your Tracking ID (e.g., SL123456ABC123)"
                className="flex-1 px-4 py-3 rounded-lg border-2 border-slate-300 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 transition-all text-slate-900 placeholder-slate-500 font-mono"
              />
              <button
                type="submit"
                disabled={!trackingId.trim()}
                className={cn(
                  "px-8 py-3 rounded-lg font-semibold transition-all transform flex items-center justify-center gap-2 whitespace-nowrap",
                  trackingId.trim()
                    ? "bg-gradient-to-r from-teal-500 to-teal-600 text-white hover:shadow-lg hover:shadow-teal-500/40 hover:scale-105 active:scale-95"
                    : "bg-slate-300 text-slate-500 cursor-not-allowed"
                )}
              >
                <Search className="w-5 h-5" />
                Search
              </button>
            </div>
            <p className="text-sm text-slate-600">
              Your tracking ID was provided when you submitted your report. It starts with "SL" followed by alphanumeric characters.
            </p>
          </form>

          {/* Results */}
          {searched && (
            <>
              {notFound && (
                <div className="bg-red-50 border-2 border-red-200 rounded-2xl p-8 text-center space-y-4">
                  <div className="flex justify-center">
                    <div className="bg-red-100 p-3 rounded-lg">
                      <AlertCircle className="w-8 h-8 text-red-600" />
                    </div>
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-slate-900 mb-2">Report Not Found</h2>
                    <p className="text-slate-600">
                      We couldn't find a report with the ID <span className="font-mono font-bold">{trackingId.toUpperCase()}</span>. Please check the ID and try again.
                    </p>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-3 justify-center pt-4">
                    <button
                      onClick={() => {
                        setTrackingId("");
                        setSearched(false);
                        setNotFound(false);
                      }}
                      className="px-6 py-2 rounded-lg font-semibold border-2 border-red-200 text-red-600 hover:bg-red-50 transition-colors"
                    >
                      Try Again
                    </button>
                    <a
                      href="/report"
                      className="px-6 py-2 rounded-lg font-semibold bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:shadow-lg transition-all"
                    >
                      Submit New Report
                    </a>
                  </div>
                </div>
              )}
              {report && (
                <div className="space-y-8">
                  {/* Status Overview */}
                  <div className={cn(
                    "rounded-2xl p-8 border-2",
                    getStatusColor(report.status)
                  )}>
                    <div className="flex items-center gap-4">
                      {getStatusIcon(report.status)}
                      <div>
                        <p className="text-sm font-semibold opacity-75">Current Status</p>
                        <p className="text-2xl font-bold">{report.status}</p>
                      </div>
                    </div>
                  </div>

                  {/* Report Details */}
                  <div className="bg-slate-50 rounded-2xl p-8 space-y-6">
                    <div>
                      <p className="text-sm font-semibold text-slate-600 mb-1">Tracking ID</p>
                      <p className="text-lg font-mono font-bold text-slate-900 break-all">
                        {report.id}
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <p className="text-sm font-semibold text-slate-600 mb-1">Crime Type</p>
                        <p className="text-lg font-semibold text-slate-900">{report.type}</p>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-slate-600 mb-1">Location</p>
                        <p className="text-lg font-semibold text-slate-900">{report.location}</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-slate-300">
                      <div>
                        <p className="text-sm font-semibold text-slate-600 mb-1">Submitted</p>
                        <p className="text-slate-900">{report.submittedDate}</p>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-slate-600 mb-1">Last Updated</p>
                        <p className="text-slate-900">{report.lastUpdated}</p>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-slate-300">
                      <p className="text-sm font-semibold text-slate-600 mb-3">Status Details</p>
                      <p className="text-slate-700 leading-relaxed">{report.details}</p>
                    </div>
                  </div>

                  {/* Timeline */}
                  <div className="space-y-4">
                    <h3 className="font-semibold text-slate-900">Progress Timeline</h3>
                    <div className="space-y-4">
                      <div className="flex gap-4">
                        <div className="flex flex-col items-center">
                          <div className="w-4 h-4 bg-green-600 rounded-full"></div>
                          <div className="w-1 h-12 bg-green-200"></div>
                        </div>
                        <div className="pt-1">
                          <p className="font-semibold text-slate-900">Report Submitted</p>
                          <p className="text-sm text-slate-600">{report.submittedDate}</p>
                        </div>
                      </div>

                      <div className="flex gap-4">
                        <div className="flex flex-col items-center">
                          <div className={cn(
                            "w-4 h-4 rounded-full",
                            report.status === "Pending" ? "bg-yellow-500" : "bg-green-600"
                          )}></div>
                          <div className={cn(
                            "w-1 h-12",
                            ["Pending"].includes(report.status) ? "bg-slate-300" : "bg-green-200"
                          )}></div>
                        </div>
                        <div className="pt-1">
                          <p className="font-semibold text-slate-900">Initial Review</p>
                          <p className="text-sm text-slate-600">
                            {["Pending"].includes(report.status)
                              ? "Pending review"
                              : report.lastUpdated}
                          </p>
                        </div>
                      </div>

                      <div className="flex gap-4">
                        <div className="flex flex-col items-center">
                          <div className={cn(
                            "w-4 h-4 rounded-full",
                            ["Resolved"].includes(report.status) ? "bg-green-600" : "bg-slate-300"
                          )}></div>
                        </div>
                        <div className="pt-1">
                          <p className="font-semibold text-slate-900">Investigation</p>
                          <p className="text-sm text-slate-600">
                            {["Resolved"].includes(report.status)
                              ? "Completed"
                              : "In progress"}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Info Box */}
                  <div className="bg-blue-50 border-2 border-blue-200 rounded-2xl p-6">
                    <p className="text-slate-700">
                      Your report is being handled with the utmost confidentiality. Our team is working to ensure all information is verified and appropriate action is taken.
                    </p>
                  </div>

                  {/* Actions */}
                  <div className="flex flex-col sm:flex-row gap-3">
                    <button
                      onClick={() => {
                        setTrackingId("");
                        setSearched(false);
                        setReport(null);
                      }}
                      className="flex-1 px-6 py-3 rounded-lg font-semibold border-2 border-slate-300 text-slate-700 hover:bg-slate-50 transition-colors"
                    >
                      Track Another Report
                    </button>
                    <a
                      href="/report"
                      className="flex-1 px-6 py-3 rounded-lg font-semibold bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:shadow-lg transition-all text-center"
                    >
                      Submit New Report
                    </a>
                  </div>
                </div>
              )}
            </>
          )}

          {/* Demo Info */}
          {!searched && (
            <div className="bg-slate-50 rounded-2xl p-8 space-y-4">
              <h3 className="font-semibold text-slate-900">Demo Tracking IDs</h3>
              <p className="text-slate-600 text-sm">
                Try these sample IDs to see how the tracking system works:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {Object.keys(MOCK_REPORTS).map((id) => (
                  <button
                    key={id}
                    onClick={() => {
                      setTrackingId(id);
                      const mockReport = MOCK_REPORTS[id];
                      setReport(mockReport);
                      setSearched(true);
                      setNotFound(false);
                    }}
                    className="p-4 bg-white rounded-lg border border-slate-300 hover:border-blue-500 hover:shadow-md transition-all text-left group"
                  >
                    <p className="text-xs font-semibold text-slate-600 group-hover:text-blue-600 mb-2">
                      {MOCK_REPORTS[id].status}
                    </p>
                    <p className="font-mono font-semibold text-slate-900 text-sm break-all group-hover:text-blue-600">
                      {id}
                    </p>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
