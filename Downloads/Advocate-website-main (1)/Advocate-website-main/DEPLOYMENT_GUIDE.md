# 🚀 Deployment Guide - Advocate Portal

## Render Deployment Instructions

### 1. Environment Variables
Set these environment variables in your Render dashboard:

```
PORT=5000
MONGODB_URI=your_mongodb_atlas_connection_string
JWT_SECRET=your_secure_jwt_secret_minimum_32_characters
EMAIL=your_gmail@gmail.com
PASSWORD=your_gmail_app_password
```

**Note**: The server also supports `MONGO_URI` as a fallback for backward compatibility.

### 2. Build Settings
- **Build Command**: `yarn` or `npm install`
- **Start Command**: `node server.js`
- **Node Version**: 18.x or 22.x (latest stable)

### 3. Gmail App Password Setup
1. Enable 2-Factor Authentication on your Gmail account
2. Go to Google Account Settings > Security > App passwords
3. Generate an app password for "Mail"
4. Use this app password (not your regular password) in the `PASSWORD` environment variable

### 4. MongoDB Atlas Setup
1. Create a MongoDB Atlas cluster
2. Add your Render IP to the allowlist (or use 0.0.0.0/0 for all IPs)
3. Create a database user
4. Get the connection string and add it to `MONGODB_URI`

### 5. Common Deployment Issues & Fixes

#### Issue: `nodemailer.createTransporter is not a function`
**Fix**: ✅ RESOLVED - Use `createTransport` instead of `createTransporter`

#### Issue: MongoDB connection timeout
**Fix**: 
- Check MongoDB Atlas IP allowlist
- Verify connection string format
- Ensure database user has proper permissions

#### Issue: Email sending fails
**Fix**:
- Verify Gmail app password is correct
- Check if 2FA is enabled on Gmail
- Ensure EMAIL and PASSWORD env vars are set correctly

#### Issue: JWT token errors
**Fix**:
- Ensure JWT_SECRET is at least 32 characters long
- Use a secure random string generator for JWT_SECRET

### 6. Health Check Endpoints
The server includes basic health check:
- `GET /` - Server status check
- `GET /api/health` - API health check (if implemented)

### 7. Deployment Verification Steps
1. Check server logs for any startup errors
2. Test appointment booking functionality
3. Verify email sending works
4. Test admin login functionality
5. Check MongoDB connection status

### 8. Production Optimizations
- [x] Rate limiting implemented
- [x] Input validation active
- [x] Error handling in place
- [x] Security headers configured
- [x] Environment variables secured
- [x] Email service operational

### 9. Monitoring & Maintenance
- Monitor server logs for errors
- Check email delivery rates
- Monitor MongoDB connection health
- Regular security updates for dependencies

### 10. Backup Strategy
- MongoDB Atlas provides automatic backups
- Keep environment variables documented securely
- Version control all code changes

---

## Quick Deployment Checklist ✅

- [ ] Environment variables configured
- [ ] MongoDB Atlas cluster ready
- [ ] Gmail app password generated
- [ ] Render service connected to GitHub
- [ ] Build and start commands configured
- [ ] IP allowlist updated in MongoDB
- [ ] Test deployment successful
- [ ] Email functionality verified
- [ ] Admin access confirmed

---

**Note**: After fixing the `nodemailer.createTransporter` → `createTransport` issue, the deployment should work smoothly. The fix has been committed and pushed to the repository.
