# ⚖️ Advocate Portal - Professional Legal Services Website

A modern, full-stack web application for Advocate Anil Kumar Singh's legal services. Built with **React.js**, **Tailwind CSS**, **Node.js**, **Express.js**, and **MongoDB**. 

## 🏗️ **Restructured Architecture**
This project has been **completely restructured** with clean separation between frontend and backend for better maintainability, deployment flexibility, and development experience.

---

## 🌐 Live Preview (Optional)

> *Available for hosting on Render, Vercel, or Netlify.*

---

## 📁 Clean Project Structure

```
advocate-website/
├── 📁 backend/                        # 🔥 BACKEND API SERVER
│   ├── src/
│   │   ├── controllers/              # Admin utilities & setup scripts
│   │   ├── middleware/               # Express middleware (auth, logging, rate limiting)
│   │   ├── models/                   # Mongoose models (Admin, Appointment, Contact)
│   │   ├── routes/                   # API endpoints (admin, appointment, contact)
│   │   ├── services/                 # Business logic (email service & templates)
│   │   └── server.js                 # Main server file (API-only, no static serving)
│   ├── tests/                        # Backend tests
│   ├── .env                          # Backend environment variables
│   └── package.json                  # Backend dependencies
│
├── 📁 frontend/                       # 🎨 FRONTEND REACT APP
│   ├── src/
│   │   ├── components/               # Reusable React components
│   │   │   ├── Home/                 # Home page specific components
│   │   │   ├── ui/                   # UI components (Button, etc.)
│   │   │   ├── Navbar.jsx            # Navigation component
│   │   │   └── Footer.jsx            # Footer component
│   │   ├── pages/                    # Page components
│   │   │   ├── Home.jsx              # Landing page
│   │   │   ├── About.jsx             # About page
│   │   │   ├── Services.jsx          # Services page
│   │   │   ├── Contact.jsx           # Contact form
│   │   │   ├── Appointment.jsx       # Appointment booking
│   │   │   ├── AdminLogin.jsx        # Admin authentication
│   │   │   └── AdminDashboard.jsx    # Admin management panel
│   │   ├── services/                 # API communication layer
│   │   │   ├── api.js                # Axios configuration with interceptors
│   │   │   └── index.js              # Service functions for API calls
│   │   ├── App.js                    # Main app component
│   │   └── index.js                  # React entry point
│   ├── public/                       # Static assets
│   │   ├── assets/                   # Images and icons
│   │   ├── favicon.ico               # Site favicon
│   │   └── index.html                # HTML template
│   ├── .env                          # Frontend environment variables
│   ├── package.json                  # Frontend dependencies
│   ├── tailwind.config.js            # Tailwind CSS configuration
│   └── postcss.config.js             # PostCSS configuration
│
├── 📄 package.json                    # Root package.json with dev scripts
├── 📚 DOCUMENTATION/
│   ├── PROJECT_STRUCTURE.md          # Detailed architecture guide
│   ├── DEPLOYMENT_GUIDE.md           # Production deployment instructions
│   ├── ERROR_FIXES_REPORT.md         # Fixed issues documentation
│   ├── WARNINGS_GUIDE.md             # Development warnings explained
│   └── FINAL_CLEAN_STRUCTURE.md      # Clean structure overview
└── 📄 README.md                       # This file
```

---

## ✨ Features

### �️ **Architecture Features**
* ✅ **Complete Frontend/Backend Separation** - Independent deployment and scaling
* ✅ **API-Only Backend** - Pure JSON API server (no static file serving)
* ✅ **Clean Project Structure** - Organized, maintainable, and production-ready
* ✅ **Development Workflow** - Concurrent frontend/backend development
* ✅ **Modern Tooling** - Latest React, Express, and development practices

### 🎨 **Frontend Features**
* ✅ **React 19** - Latest React with modern hooks and patterns
* ✅ **Responsive Design** - Mobile-first approach with Tailwind CSS
* ✅ **Component Architecture** - Reusable, organized component structure
* ✅ **API Service Layer** - Centralized HTTP communication with interceptors
* ✅ **Professional UI** - Legal-themed design with animations
* ✅ **Admin Dashboard** - Secure management interface
* ✅ **Form Validation** - Real-time validation and user feedback

### 🔧 **Backend Features**
* ✅ **RESTful API** - Clean, documented API endpoints
* ✅ **MongoDB Integration** - Scalable database with Mongoose ODM
* ✅ **JWT Authentication** - Secure token-based authentication
* ✅ **Rate Limiting** - Request throttling and abuse prevention
* ✅ **Comprehensive Logging** - Request logging and error tracking
* ✅ **Email Notifications** - Professional HTML email templates
* ✅ **Input Validation** - Server-side validation and sanitization
* ✅ **Error Handling** - Graceful error responses and logging

### 📧 Email System
* ✅ **Professional HTML Templates**: Modern, responsive email designs
* ✅ **Appointment Confirmations**: Branded emails with appointment details
* ✅ **Admin Notifications**: Real-time alerts for new bookings
* ✅ **Contact Form Confirmations**: Thank you emails for contact submissions
* ✅ **Email Management**: Admin tools for testing and resending emails
* ✅ **Template Customization**: Centralized email template management

---

## 🛠️ Tech Stack

* **Frontend**: React.js 18, Tailwind CSS, React Router DOM
* **Backend**: Node.js, Express.js, MongoDB Atlas
* **Email Service**: Nodemailer with professional HTML templates
* **Authentication**: JWT tokens, bcrypt password hashing
* **Security**: Rate limiting, input validation, error handling
* **Database**: MongoDB with Mongoose ODM

---

## 🧠 Advanced Concepts Used

* **React Hooks**: `useState`, `useEffect`, custom hooks
* **Async Operations**: `async/await`, Promise handling
* **API Integration**: Axios for HTTP requests
* **Email Templates**: Modern HTML with inline CSS
* **Security**: JWT authentication, rate limiting, input sanitization
* **Error Handling**: Comprehensive error management
* **Separation of Concerns**: Modular code architecture
* **Professional Email Design**: Responsive HTML templates

---

## � Quick Start

### 1. **Clone the Repository**
```bash
git clone https://github.com/asaditya25/Advocate-website-main.git
cd Advocate-website-main
```

### 2. **Install All Dependencies**
```bash
# Install root dependencies (for concurrent script management)
npm install

# Install both frontend and backend dependencies
npm run install:all
```

### 3. **Environment Configuration**

**Backend Environment** (`backend/.env`):
```env
PORT=5000
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/database
JWT_SECRET=your_secure_jwt_secret_minimum_32_characters
EMAIL=your_gmail@gmail.com
PASSWORD=your_gmail_app_password
FRONTEND_URL=http://localhost:3000
```

**Frontend Environment** (`frontend/.env`):
```env
REACT_APP_API_URL=http://localhost:5000/api
GENERATE_SOURCEMAP=false
```

### 4. **Run Development Servers**

**🎯 One Command (Recommended):**
```bash
npm run dev
```
This starts both frontend and backend concurrently.

**🔧 Individual Commands:**
```bash
# Backend only (API server on port 5000)
npm run dev:backend

# Frontend only (React app on port 3000)
npm run dev:frontend
```

### 5. **Access Your Application**
- **🎨 Frontend**: http://localhost:3000
- **🔥 Backend API**: http://localhost:5000/api
- **📋 Health Check**: http://localhost:5000/api/health
- **👤 Admin Dashboard**: http://localhost:3000/admin

---

## 📧 Email Templates

The application includes 4 professional email templates:

1. **Appointment Confirmation** (Client): Modern confirmation with appointment details
2. **Admin Notification** (Appointment): Detailed alert with client information
3. **Contact Confirmation** (Client): Thank you message with response expectations  
4. **Contact Admin Notification**: Contact form details with quick reply options

All templates feature:
- Responsive design for all devices
- Professional brand colors (Navy #0a1a2f, Gold #d4af37)
- Interactive elements (mailto, tel links)
- Modern styling with gradients and shadows

---

## 🔐 API Endpoints

### 🏥 **Health & Monitoring**
- `GET /api/health` - Server health check and status

### 🔐 **Authentication**
- `POST /api/admin/login` - Admin authentication with JWT
- `POST /api/admin/verify-token` - Validate JWT token
- `GET /api/admin/profile` - Get admin profile (protected)

### 📅 **Appointments**
- `GET /api/appointments` - Get all appointments (admin only)
- `POST /api/appointments` - Create appointment with email notifications
- `DELETE /api/appointments/:id` - Delete specific appointment (admin only)
- `POST /api/appointments/resend-email/:id` - Resend confirmation email (admin only)
- `GET /api/appointments/email-templates` - List available email templates (admin only)
- `POST /api/appointments/test-email` - Send test email (admin only)

### 📞 **Contact**
- `POST /api/contact` - Submit contact form with dual email notifications

### 🔒 **Admin Features**
- `POST /api/admin/forgot-password` - Request password reset
- `POST /api/admin/reset-password` - Reset password with token

All protected endpoints require `Authorization: Bearer <jwt_token>` header.

---

## � **Major Restructuring (Latest)**

### 🏗️ **Complete Architecture Overhaul**
- ✅ **Frontend/Backend Separation** - Complete decoupling for independent deployment
- ✅ **API-Only Backend** - Pure JSON API server (removed static file serving)
- ✅ **Clean Directory Structure** - Organized components, pages, and services
- ✅ **Modern Development Workflow** - Concurrent development with hot reloading
- ✅ **Production-Ready Setup** - Optimized for deployment to different platforms

### 🧹 **Project Cleanup**
- ✅ **Removed Empty Directories** - Cleaned up unused folders
- ✅ **Organized Components** - Proper component hierarchy and structure
- ✅ **Updated Documentation** - Comprehensive guides and explanations
- ✅ **Fixed Import Paths** - Resolved all module resolution issues
- ✅ **Eliminated Redundancy** - Removed duplicate and outdated files

### ⚙️ **Technical Improvements**
- ✅ **Rate Limiter Configuration** - Fixed proxy trust settings
- ✅ **Updated Dependencies** - Latest package versions with security fixes
- ✅ **Environment Configuration** - Separate env files for frontend/backend
- ✅ **API Service Layer** - Centralized HTTP communication with error handling
- ✅ **Development Scripts** - Simplified development workflow

---

## 🛡️ Security Features

- **JWT Authentication**: Secure admin access with token validation
- **Rate Limiting**: Prevents spam and abuse
- **Input Validation**: Comprehensive sanitization and validation
- **Error Handling**: Graceful error responses without data leaks
- **Environment Variables**: Secure configuration management

---

## 🚀 Development Scripts

```bash
# Development
npm run dev                    # Start both frontend and backend
npm run dev:backend           # Start backend only (port 5000)
npm run dev:frontend          # Start frontend only (port 3000)

# Installation
npm run install:all           # Install both frontend and backend dependencies
npm run install:backend       # Install backend dependencies only
npm run install:frontend      # Install frontend dependencies only

# Production
npm run build:frontend        # Build frontend for production
npm run start:backend         # Start backend in production mode
npm run start:production      # Build frontend and start backend
```

## 🌟 Deployment Options

### **Frontend Deployment**
- **Netlify/Vercel**: Deploy `frontend/build` folder
- **AWS S3/CloudFront**: Static hosting with CDN
- **GitHub Pages**: Free static hosting

### **Backend Deployment**
- **Render/Railway**: Node.js hosting with MongoDB
- **Heroku**: Cloud platform with add-ons
- **DigitalOcean/AWS**: VPS or container deployment

### **Full-Stack Deployment**
- **Render**: Both frontend and backend on same platform
- **AWS**: Frontend on S3/CloudFront, backend on EC2/ECS
- **Docker**: Containerized deployment for any platform

## 🔮 Future Enhancements

* 📅 **Calendar Integration** - Advanced appointment scheduling
* 📄 **Document Management** - Case file uploads and organization
* 🌐 **Multi-language Support** - Internationalization
* 📊 **Analytics Dashboard** - Email and appointment analytics
* 🔔 **Real-time Notifications** - WebSocket-based live updates
* 💳 **Payment Integration** - Online consultation fees
* 👥 **Client Portal** - Case tracking and communication
* 📱 **Mobile App** - React Native companion app

---

## � Recent Changes

### Version 2.0.0 - Complete Architecture Restructure
- ✅ **Clean Separation**: Frontend and backend now in separate directories
- ✅ **API-Only Backend**: Backend serves only JSON endpoints, no frontend serving
- ✅ **Modern Structure**: Organized components, pages, services, and API layers
- ✅ **Warning Fixes**: Resolved rate limiter and dependency warnings
- ✅ **Production Ready**: Optimized for deployment with proper configurations
- ✅ **Documentation**: Comprehensive README with new structure

### What Changed
- 📁 **Backend**: Moved to `backend/` with organized MVC structure
- 📁 **Frontend**: Moved to `frontend/` with clean component architecture
- 🔧 **API Layer**: Created dedicated service layer for frontend-backend communication
- 🚀 **Scripts**: Updated development and build scripts for new structure
- 🧹 **Cleanup**: Removed unnecessary files and empty directories

---

## 📄 Documentation

- [Project Structure](FINAL_CLEAN_STRUCTURE.md) - Updated project organization
- [Error Fixes Report](ERROR_FIXES_REPORT.md) - Resolved warnings and issues
- [Deployment Guide](DEPLOYMENT_GUIDE.md) - Production deployment instructions
- [Warnings Guide](WARNINGS_GUIDE.md) - Common issues and solutions

---

## 🤝 Contributing

1. **Fork** the repository
2. **Create** your feature branch (`git checkout -b feature/AmazingFeature`)
3. **Commit** your changes (`git commit -m 'Add some AmazingFeature'`)
4. **Push** to the branch (`git push origin feature/AmazingFeature`)
5. **Open** a Pull Request

## � Support

If you encounter any issues or have questions:

- 🐛 **Issues**: [GitHub Issues](https://github.com/asaditya25/advocate-website/issues)
- 💬 **Discussions**: [GitHub Discussions](https://github.com/asaditya25/advocate-website/discussions)
- 📧 **Email**: Contact through the website's contact form

---

## �🙋‍♂️ Author

**Aditya Singh**
- [GitHub](https://github.com/asaditya25)
- [LinkedIn](https://linkedin.com/in/adii25)

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---

<div align="center">

**🏛️ Built with ❤️ for Legal Professionals**

*Empowering advocates with modern web technology*

[![Made with React](https://img.shields.io/badge/Made%20with-React-61DAFB?style=flat-square&logo=react)](https://reactjs.org/)
[![Powered by Node.js](https://img.shields.io/badge/Powered%20by-Node.js-339933?style=flat-square&logo=node.js)](https://nodejs.org/)
[![MongoDB](https://img.shields.io/badge/Database-MongoDB-47A248?style=flat-square&logo=mongodb)](https://mongodb.com/)

> ⚖️ A professional website designed for advocates and legal advisors to enhance their digital presence with modern technology and seamless client communication.

</div>
