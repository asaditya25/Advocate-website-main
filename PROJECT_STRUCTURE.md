# Advocate Website - Restructured

This project has been restructured to separate frontend and backend for better maintainability and deployment flexibility.

## Project Structure

```
Advocate-website/
├── backend/                    # Backend API Server (Node.js/Express)
│   ├── src/
│   │   ├── controllers/        # Admin utility scripts
│   │   ├── models/            # Mongoose models
│   │   ├── routes/            # API routes
│   │   ├── middleware/        # Custom middleware
│   │   ├── services/          # Business logic services
│   │   └── server.js          # Main server file
│   ├── tests/                 # Backend tests
│   ├── package.json           # Backend dependencies
│   └── .env                   # Backend environment variables
│
├── frontend/                   # Frontend React App
│   ├── src/
│   │   ├── components/        # Reusable React components
│   │   │   ├── Home/         # Home page components
│   │   │   ├── ui/           # UI components
│   │   │   ├── Navbar.jsx    # Navigation component
│   │   │   └── Footer.jsx    # Footer component
│   │   ├── pages/            # Page components
│   │   ├── services/         # API service layer
│   │   └── ...              # Other React files
│   ├── public/               # Public static files
│   ├── package.json          # Frontend dependencies
│   └── .env                  # Frontend environment variables
│
└── package.json              # Root package.json with scripts
```

## Getting Started

### Prerequisites
- Node.js (v14 or later)
- MongoDB (local or cloud)
- npm or yarn

### Installation

1. **Install all dependencies:**
   ```bash
   npm run install:all
   ```

2. **Set up environment variables:**
   - Backend: Configure `backend/.env`
   - Frontend: Configure `frontend/.env`

### Development

**Start both frontend and backend:**
```bash
npm run dev
```

**Start individually:**
```bash
# Backend only (API server on http://localhost:5000)
npm run dev:backend

# Frontend only (React app on http://localhost:3000)
npm run dev:frontend
```

### Production

**Build and start:**
```bash
npm run start:production
```

## Key Changes

### Backend (API Only)
- **No static file serving** - Backend only serves JSON API endpoints
- **Proper CORS configuration** - Allows frontend to communicate from different origin
- **Health check endpoint** - `/api/health` for monitoring
- **All routes prefixed with `/api`** - Clear API structure

### Frontend (Separate React App)
- **API service layer** - Centralized API communication in `src/services/`
- **Environment-based configuration** - API URL configured via environment variables
- **Proxy configuration** - Development proxy to backend API

### Deployment Benefits
1. **Independent scaling** - Frontend and backend can scale separately
2. **Different deployment targets** - Frontend to CDN, backend to server
3. **Technology flexibility** - Can use different tech stacks
4. **Team collaboration** - Teams can work independently on each part

## API Endpoints

### Public Endpoints
- `POST /api/appointments` - Create appointment
- `POST /api/contact` - Submit contact form

### Admin Endpoints (Protected)
- `POST /api/admin/login` - Admin login
- `GET /api/appointments` - Get all appointments
- `DELETE /api/appointments/:id` - Delete appointment
- `GET /api/admin/profile` - Get admin profile

### Utility Endpoints
- `GET /api/health` - Health check

## Development Scripts

```bash
# Install dependencies
npm run install:all          # Install both frontend and backend
npm run install:backend      # Install backend only
npm run install:frontend     # Install frontend only

# Development
npm run dev                  # Start both frontend and backend
npm run dev:backend          # Start backend only
npm run dev:frontend         # Start frontend only

# Production
npm run build:frontend       # Build frontend for production
npm run start:backend        # Start backend in production mode
npm run start:production     # Build frontend and start backend
```

## Environment Variables

### Backend (.env)
```
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
EMAIL=your_smtp_email
PASSWORD=your_smtp_password
FRONTEND_URL=http://localhost:3000
```

### Frontend (.env)
```
REACT_APP_API_URL=http://localhost:5000/api
GENERATE_SOURCEMAP=false
```

## Testing

- Backend: Run `npm test` in the `backend/` directory
- Frontend: Run `npm test` in the `frontend/` directory

## Deployment

### Backend Deployment
- Deploy to any Node.js hosting service (Heroku, AWS, DigitalOcean, etc.)
- Ensure MongoDB connection and environment variables are configured
- API will be available at your backend URL

### Frontend Deployment
- Build: `npm run build` in the `frontend/` directory
- Deploy build folder to any static hosting (Netlify, Vercel, AWS S3, etc.)
- Update `REACT_APP_API_URL` to point to your production backend API

This new structure provides better separation of concerns, easier deployment, and improved maintainability.