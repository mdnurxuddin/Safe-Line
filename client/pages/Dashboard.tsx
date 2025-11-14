import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { LogOut, Eye, CheckCircle, Clock, AlertCircle, BarChart3, Users, FileText, TrendingUp } from "lucide-react";
import { cn } from "@/lib/utils";

interface Report {
  id: string;
  type: string;
  location: string;
  description: string;
  status: "Pending" | "Under Review" | "Resolved";
  submittedDate: string;
  priority: "Low" | "Medium" | "High";
}

const MOCK_REPORTS: Report[] = [
  {
    id: "SL123456ABC123",
    type: "Theft",
    location: "Downtown Shopping District",
    description: "Reported shoplifting incident at main store",
    status: "Under Review",
    submittedDate: "2024-01-15",
    priority: "Medium",
  },
  {
    id: "SL987654XYZ789",
    type: "Harassment",
    location: "Community Park",
    description: "Verbal harassment incident",
    status: "Pending",
    submittedDate: "2024-01-17",
    priority: "High",
  },
  {
    id: "SL456789DEF456",
    type: "Cybercrime",
    location: "Online",
    description: "Phishing email attack reported",
    status: "Resolved",
    submittedDate: "2024-01-10",
    priority: "High",
  },
  {
    id: "SL111111GHI111",
    type: "Vehicle Theft",
    location: "Residential Area - Oak Street",
    description: "Car stolen from driveway",
    status: "Under Review",
    submittedDate: "2024-01-16",
    priority: "High",
  },
  {
    id: "SL222222JKL222",
    type: "Fraud",
    location: "Online - E-commerce",
    description: "Unauthorized charges on account",
    status: "Pending",
    submittedDate: "2024-01-17",
    priority: "Medium",
  },
  {
    id: "SL333333MNO333",
    type: "Robbery",
    location: "Gas Station - Highway 101",
    description: "Armed robbery incident",
    status: "Resolved",
    submittedDate: "2024-01-12",
    priority: "High",
  },
];

export default function Dashboard() {
  const navigate = useNavigate();
  const [reports, setReports] = useState<Report[]>(MOCK_REPORTS);
  const [selectedReport, setSelectedReport] = useState<Report | null>(null);
  const [filterStatus, setFilterStatus] = useState<"All" | "Pending" | "Under Review" | "Resolved">("All");
  const [sortBy, setSortBy] = useState<"date" | "priority">("date");

  // Check if logged in
  useEffect(() => {
    const isLoggedIn = localStorage.getItem("adminLoggedIn") === "true";
    if (!isLoggedIn) {
      navigate("/login");
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("adminLoggedIn");
    navigate("/login");
  };

  const filteredReports = reports.filter((report) => {
    if (filterStatus === "All") return true;
    return report.status === filterStatus;
  });

  const sortedReports = [...filteredReports].sort((a, b) => {
    if (sortBy === "date") {
      return new Date(b.submittedDate).getTime() - new Date(a.submittedDate).getTime();
    } else {
      const priorityOrder = { High: 3, Medium: 2, Low: 1 };
      return priorityOrder[b.priority as keyof typeof priorityOrder] - priorityOrder[a.priority as keyof typeof priorityOrder];
    }
  });

  const stats = {
    totalReports: reports.length,
    pending: reports.filter((r) => r.status === "Pending").length,
    underReview: reports.filter((r) => r.status === "Under Review").length,
    resolved: reports.filter((r) => r.status === "Resolved").length,
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Pending":
        return "bg-yellow-100 text-yellow-800 border-yellow-300";
      case "Under Review":
        return "bg-blue-100 text-blue-800 border-blue-300";
      case "Resolved":
        return "bg-green-100 text-green-800 border-green-300";
      default:
        return "bg-slate-100 text-slate-800 border-slate-300";
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "High":
        return "bg-red-100 text-red-800";
      case "Medium":
        return "bg-orange-100 text-orange-800";
      case "Low":
        return "bg-green-100 text-green-800";
      default:
        return "bg-slate-100 text-slate-800";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Pending":
        return <Clock className="w-4 h-4" />;
      case "Under Review":
        return <AlertCircle className="w-4 h-4" />;
      case "Resolved":
        return <CheckCircle className="w-4 h-4" />;
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <Navigation />
      <main className="flex-1 py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="flex justify-between items-start md:items-center gap-4 mb-12 flex-col md:flex-row">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">
                Admin Dashboard
              </h1>
              <p className="text-slate-600">
                View, verify, and manage crime reports
              </p>
            </div>
            <button
              onClick={handleLogout}
              className={cn(
                "flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all",
                "bg-red-100 text-red-700 hover:bg-red-200"
              )}
            >
              <LogOut className="w-5 h-5" />
              Logout
            </button>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="bg-white rounded-xl shadow-md p-6 space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-slate-900">Total Reports</h3>
                <FileText className="w-6 h-6 text-blue-600" />
              </div>
              <p className="text-4xl font-bold text-slate-900">{stats.totalReports}</p>
              <p className="text-sm text-slate-600">All submissions</p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-slate-900">Pending</h3>
                <Clock className="w-6 h-6 text-yellow-600" />
              </div>
              <p className="text-4xl font-bold text-slate-900">{stats.pending}</p>
              <p className="text-sm text-slate-600">Awaiting review</p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-slate-900">Under Review</h3>
                <AlertCircle className="w-6 h-6 text-blue-600" />
              </div>
              <p className="text-4xl font-bold text-slate-900">{stats.underReview}</p>
              <p className="text-sm text-slate-600">Being investigated</p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-slate-900">Resolved</h3>
                <CheckCircle className="w-6 h-6 text-green-600" />
              </div>
              <p className="text-4xl font-bold text-slate-900">{stats.resolved}</p>
              <p className="text-sm text-slate-600">Completed</p>
            </div>
          </div>

          {/* Filters and Controls */}
          <div className="flex flex-col md:flex-row gap-4 mb-8 justify-between">
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="space-y-1">
                <label className="text-sm font-semibold text-slate-700">Filter by Status</label>
                <select
                  value={filterStatus}
                  onChange={(e) => setFilterStatus(e.target.value as any)}
                  className="px-4 py-2 rounded-lg border-2 border-slate-300 focus:border-blue-500 transition-colors bg-white text-slate-900"
                >
                  <option>All</option>
                  <option>Pending</option>
                  <option>Under Review</option>
                  <option>Resolved</option>
                </select>
              </div>
              <div className="space-y-1">
                <label className="text-sm font-semibold text-slate-700">Sort by</label>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  className="px-4 py-2 rounded-lg border-2 border-slate-300 focus:border-blue-500 transition-colors bg-white text-slate-900"
                >
                  <option value="date">Recent First</option>
                  <option value="priority">Priority</option>
                </select>
              </div>
            </div>
            <div className="text-sm text-slate-600 flex items-center">
              Showing <span className="font-bold text-slate-900 mx-1">{sortedReports.length}</span> report{sortedReports.length !== 1 ? "s" : ""}
            </div>
          </div>

          {/* Reports Table */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200">
                    <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">ID</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">Type</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">Location</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">Status</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">Priority</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">Date</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-slate-900">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {sortedReports.length > 0 ? (
                    sortedReports.map((report) => (
                      <tr key={report.id} className="hover:bg-slate-50 transition-colors">
                        <td className="px-6 py-4">
                          <p className="font-mono text-sm font-semibold text-blue-600">{report.id}</p>
                        </td>
                        <td className="px-6 py-4">
                          <p className="font-medium text-slate-900">{report.type}</p>
                        </td>
                        <td className="px-6 py-4">
                          <p className="text-slate-600 text-sm">{report.location}</p>
                        </td>
                        <td className="px-6 py-4">
                          <div className={cn(
                            "inline-flex items-center gap-2 px-3 py-1 rounded-full border text-sm font-medium",
                            getStatusColor(report.status)
                          )}>
                            {getStatusIcon(report.status)}
                            {report.status}
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <span className={cn(
                            "inline-block px-3 py-1 rounded-full text-sm font-medium",
                            getPriorityColor(report.priority)
                          )}>
                            {report.priority}
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <p className="text-slate-600 text-sm">{report.submittedDate}</p>
                        </td>
                        <td className="px-6 py-4 text-center">
                          <button
                            onClick={() => setSelectedReport(report)}
                            className="flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-blue-100 text-blue-600 hover:bg-blue-200 transition-colors font-medium text-sm mx-auto"
                          >
                            <Eye className="w-4 h-4" />
                            View
                          </button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={7} className="px-6 py-12 text-center">
                        <p className="text-slate-600">No reports found with selected filters</p>
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>

      {/* Report Detail Modal */}
      {selectedReport && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-96 overflow-y-auto">
            <div className="sticky top-0 bg-gradient-to-r from-blue-500 to-teal-500 text-white p-6 flex justify-between items-start">
              <h2 className="text-2xl font-bold">Report Details</h2>
              <button
                onClick={() => setSelectedReport(null)}
                className="text-white hover:opacity-80 transition-opacity text-2xl"
              >
                ✕
              </button>
            </div>

            <div className="p-8 space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <p className="text-sm font-semibold text-slate-600 mb-1">Tracking ID</p>
                  <p className="font-mono font-bold text-slate-900">{selectedReport.id}</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-600 mb-1">Status</p>
                  <div className={cn(
                    "inline-flex items-center gap-2 px-3 py-1 rounded-full border text-sm font-medium",
                    getStatusColor(selectedReport.status)
                  )}>
                    {getStatusIcon(selectedReport.status)}
                    {selectedReport.status}
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div>
                  <p className="text-sm font-semibold text-slate-600 mb-1">Crime Type</p>
                  <p className="font-semibold text-slate-900">{selectedReport.type}</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-600 mb-1">Priority</p>
                  <span className={cn(
                    "inline-block px-3 py-1 rounded-full text-sm font-medium",
                    getPriorityColor(selectedReport.priority)
                  )}>
                    {selectedReport.priority}
                  </span>
                </div>
              </div>

              <div>
                <p className="text-sm font-semibold text-slate-600 mb-1">Location</p>
                <p className="text-slate-900">{selectedReport.location}</p>
              </div>

              <div>
                <p className="text-sm font-semibold text-slate-600 mb-1">Description</p>
                <p className="text-slate-700 leading-relaxed">{selectedReport.description}</p>
              </div>

              <div className="border-t border-slate-300 pt-6">
                <p className="text-sm font-semibold text-slate-600 mb-3">Update Status</p>
                <div className="flex gap-3 flex-wrap">
                  {["Pending", "Under Review", "Resolved"].map((status) => (
                    <button
                      key={status}
                      onClick={() => {
                        setReports(reports.map((r) =>
                          r.id === selectedReport.id
                            ? { ...r, status: status as any }
                            : r
                        ));
                        setSelectedReport(null);
                      }}
                      className={cn(
                        "px-4 py-2 rounded-lg font-medium transition-colors",
                        selectedReport.status === status
                          ? "bg-blue-600 text-white"
                          : "bg-slate-200 text-slate-800 hover:bg-slate-300"
                      )}
                    >
                      {status}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
