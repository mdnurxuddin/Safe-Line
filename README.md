# SafeLine — Smart Crime Report Management System

**Theme:** Smart Solutions, Simple Codes

A modern, secure, and user-friendly web application for anonymous crime reporting and tracking. SafeLine enables users to report crimes safely while allowing authorities to manage and investigate reports efficiently.

---

## 🎯 Project Overview

SafeLine is a full-stack crime report management system built with React, Express, and TypeScript. The application prioritizes user privacy and security while providing a clean, intuitive interface for reporting incidents and tracking their status.

### Problem Summary

Communities face challenges with crime reporting due to:
- Fear of retaliation affecting reporting willingness
- Complex reporting procedures discouraging participation
- Lack of transparency in case status
- Limited ways to provide evidence securely

### Solution Description

SafeLine addresses these challenges by providing:
- **Anonymous Reporting:** Users report crimes without revealing their identity
- **Unique Tracking IDs:** Every report gets a unique ID for status tracking
- **Secure Evidence Upload:** Safe media submission (photos/videos)
- **Real-time Status Updates:** Users can track investigation progress
- **Admin Dashboard:** Law enforcement can manage and verify reports

---

## ✨ Key Features

### For Citizens
1. **Easy Crime Reporting**
   - Simple form with multiple crime type categories
   - Location input with map integration ready
   - Detailed description textarea
   - Evidence upload support (photos/videos)
   - Automatic unique tracking ID generation

2. **Report Tracking**
   - Search reports by tracking ID
   - Real-time status updates
   - Progress timeline visualization
   - Three status levels: Pending, Under Review, Resolved

3. **User Privacy**
   - 100% anonymous reporting
   - No personal data collection
   - End-to-end encrypted submissions
   - Secure evidence storage

### For Law Enforcement
1. **Admin Dashboard**
   - View all submitted reports
   - Filter by status or sort by priority
   - Detailed report information modal
   - Update report status
   - Statistics overview (total, pending, under review, resolved)

2. **Report Management**
   - Verify report authenticity
   - Categorize by crime type
   - Assign priority levels
   - Add investigation notes

---

## 🛠 Tech Stack

### Frontend
- **Framework:** React 18 + React Router 6 (SPA)
- **Language:** TypeScript
- **Build Tool:** Vite
- **Styling:** TailwindCSS 3
- **UI Components:** Radix UI
- **Icons:** Lucide React
- **Form Handling:** React Hook Form
- **Data Fetching:** TanStack React Query

### Backend
- **Server:** Express.js
- **Language:** TypeScript
- **Database:** SQLite (mock in-memory for demo)
- **Environment:** Node.js

### Deployment Ready
- **Frontend:** Vercel, Netlify, or any static hosting
- **Backend:** Render, Railway, Heroku, or any Node.js host

---

## 📁 Project Structure

```
safeline/
├── client/                          # React frontend
│   ├── components/
│   │   ├── ui/                      # Pre-built UI components (Radix UI)
│   │   ├── Navigation.tsx           # Top navigation bar
│   │   └── Footer.tsx               # Footer with contact info
│   ├── pages/
│   │   ├── Index.tsx                # Home page with hero section
│   │   ├── Report.tsx               # Crime report form
│   │   ├── Track.tsx                # Track report status
│   │   ├── Login.tsx                # Admin login
│   │   ├── Dashboard.tsx            # Admin dashboard
│   │   └── NotFound.tsx             # 404 page
│   ├── hooks/                       # Custom React hooks
│   ├── lib/
│   │   └── utils.ts                 # Utility functions (cn, etc.)
│   ├── App.tsx                      # App entry & routing setup
│   ├── global.css                   # TailwindCSS theming & globals
│   └── vite-env.d.ts                # Vite type definitions
│
├── server/                          # Express backend
│   ├── routes/
│   │   ├── reports.ts               # Crime report API handlers
│   │   └── demo.ts                  # Example route
│   └── index.ts                     # Express app setup & routes
│
├── shared/                          # Shared types & interfaces
│   └── api.ts                       # API interfaces
│
├── public/                          # Static assets
├── index.html                       # HTML entry point
├── package.json                     # Dependencies & scripts
├── tailwind.config.ts               # TailwindCSS configuration
├── tsconfig.json                    # TypeScript configuration
├── vite.config.ts                   # Vite configuration
├── vite.config.server.ts            # Server build configuration
└── README.md                        # This file
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js 16+ and npm/pnpm
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd safeline
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   # or: npm install
   ```

3. **Start development server**
   ```bash
   pnpm dev
   # or: npm run dev
   ```

   The app will be available at `http://localhost:5173` (Vite default)
   - Frontend: http://localhost:5173
   - Backend API: http://localhost:5173/api/*

### Development Commands

```bash
pnpm dev           # Start development server
pnpm build         # Production build
pnpm build:client  # Build only client
pnpm build:server  # Build only server
pnpm start         # Start production server
pnpm typecheck     # TypeScript type checking
pnpm test          # Run tests (Vitest)
```

---

## 📋 Pages & Routes

### Public Routes

| Route | Component | Purpose |
|-------|-----------|---------|
| `/` | Index.tsx | Home page with hero section and features |
| `/report` | Report.tsx | Submit a new crime report |
| `/track` | Track.tsx | Track report status by ID |
| `/login` | Login.tsx | Admin authentication |

### Protected Routes

| Route | Component | Purpose |
|-------|-----------|---------|
| `/dashboard` | Dashboard.tsx | Admin report management (requires login) |

---

## 🔌 API Endpoints

### Crime Reports

**Submit Report**
```
POST /api/reports
Body: { crimeType, location, description }
Response: { success, trackingId }
```

**Get Report Status**
```
GET /api/reports/:id
Response: { id, type, location, status, submittedDate, ... }
```

**Get All Reports (Admin)**
```
GET /api/reports
Response: [{ id, type, location, status, ... }, ...]
```

**Update Report Status (Admin)**
```
PUT /api/reports/:id
Body: { status }
Response: { success, report }
```

---

## 🎨 Design & Theming

### Color Palette
- **Primary Blue:** `#3B82F6` (Reporting, Primary actions)
- **Accent Teal:** `#14B8A6` (Secondary actions, Accents)
- **Background:** `#FFFFFF` (Light theme default)
- **Text:** `#1F2937` (Dark slate for readability)

### Typography
- **Font Family:** Poppins (headers), Roboto (body)
- **Font Sizes:** Follow TailwindCSS scale
- **Font Weights:** 400, 500, 600, 700, 800

### UI Components
- Rounded corners (`rounded-lg`, `rounded-xl`, `rounded-2xl`)
- Soft shadows for depth
- Smooth transitions & hover states
- Gradient accents (blue to teal)
- Card-based layouts

---

## 🔐 Security Features

- **Anonymous Reporting:** No user identification required
- **Encrypted Submissions:** All data is securely transmitted
- **Admin Authentication:** Login required for dashboard access
- **CORS Protection:** Server-side CORS configuration
- **Input Validation:** Form validation on client and server

---

## 📊 Mock Data

The application includes pre-populated mock reports for demonstration:

### Demo Reports
- **SL123456ABC123:** Theft - Downtown Shopping District (Under Review)
- **SL987654XYZ789:** Harassment - Community Park (Pending)
- **SL456789DEF456:** Cybercrime - Online (Resolved)

### Admin Login
- **Username:** `admin`
- **Password:** `password123`

---

## 🔄 Workflow

### User Reporting Workflow
1. User navigates to "Report a Crime"
2. Fills out crime type, location, description
3. Optionally uploads evidence (photos/videos)
4. Submits report
5. Receives unique tracking ID (e.g., SL123456ABC123)
6. Can track status using the Track Report page

### Admin Workflow
1. Admin logs in with credentials
2. Views all reports on dashboard
3. Filters by status or sorts by priority
4. Clicks "View" to see report details
5. Updates status (Pending → Under Review → Resolved)
6. Can add investigation notes

---

## 🚀 Deployment

### Frontend Deployment (Vercel/Netlify)

1. Build the project:
   ```bash
   pnpm build
   ```

2. Deploy the `dist/spa` folder to your hosting provider

### Backend Deployment (Render/Railway/Heroku)

1. Build the project:
   ```bash
   pnpm build
   ```

2. Deploy using:
   ```bash
   pnpm start
   ```

3. Set environment variables as needed

### Environment Variables

Create a `.env` file:
```
PING_MESSAGE=SafeLine API
```

---

## 🔮 Future Improvements

### Phase 2
- [ ] Real database integration (SQLite/PostgreSQL)
- [ ] Email notifications for report updates
- [ ] Two-factor authentication for admins
- [ ] Advanced search and filtering
- [ ] Report export (PDF)
- [ ] Analytics dashboard
- [ ] Mobile app (React Native)

### Phase 3
- [ ] Google Maps API integration
- [ ] SMS notifications
- [ ] Video conferencing for interviews
- [ ] Multi-language support
- [ ] Voice-to-text reporting
- [ ] AI-powered report categorization
- [ ] Blockchain-based verification

### Phase 4
- [ ] Inter-agency collaboration
- [ ] Public crime statistics dashboard
- [ ] Community engagement features
- [ ] Machine learning for pattern detection
- [ ] Advanced security audits

---

## 🧪 Testing

Run tests with Vitest:
```bash
pnpm test
```

Tests are organized by feature and use React Testing Library for component tests.

---

## 📝 Best Practices

### Code Organization
- Components are organized by feature/page
- Shared utilities in `/lib` directory
- Type definitions in shared `/shared` directory
- API routes clearly separated in `/server/routes`

### Styling
- TailwindCSS utility classes for responsive design
- CSS variables for theming in `global.css`
- `cn()` utility for conditional classNames
- Mobile-first responsive approach

### TypeScript
- Strict type checking enabled
- Interface definitions for all data structures
- Proper generic typing for reusable functions

---

## 🤝 Contributing

1. Create a feature branch
2. Make your changes
3. Test thoroughly
4. Create a pull request with description

---

## 📄 License

This project is open source and available under the MIT License.

---

## 📞 Support & Contact

**SafeLine Support**
- **Email:** support@safeline.report
- **Phone:** +1 (555) 123-4567
- **Address:** 123 Safety Street, Security City, SC 12345

**Website:** safeline.report (coming soon)

---

## 🎯 Project Stats

- **Pages:** 5 (Home, Report, Track, Login, Dashboard)
- **Components:** 50+
- **API Endpoints:** 4
- **Mock Reports:** 3+
- **Supported Crime Types:** 8
- **Demo Tracking IDs:** 3

---

**Made with ❤️ for community safety.**

**Theme:** Smart Solutions, Simple Codes
