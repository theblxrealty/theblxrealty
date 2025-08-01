# Setup Guide

## Environment Variables

Create a `.env.local` file in the client directory with the following variables:

```env
# Database
DATABASE_URL="postgresql://username:password@localhost:5432/your_database_name"

# JWT Secret
JWT_SECRET="your-super-secret-jwt-key-here"

# Email Configuration (Gmail)
EMAIL_USER="your-email@gmail.com"
EMAIL_PASS="your-app-password"

# Next.js
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your-nextauth-secret"
```

## Database Setup

1. Set up a PostgreSQL database
2. Update the DATABASE_URL in your .env.local file
3. Run the following commands:

```bash
# Generate Prisma client
pnpm db:generate

# Push the schema to your database
pnpm db:push

# (Optional) Open Prisma Studio to view your database
pnpm db:studio
```

## Email Setup

For Gmail:
1. Enable 2-factor authentication on your Gmail account
2. Generate an App Password
3. Use the App Password as EMAIL_PASS in your .env.local file

## Admin Setup

1. Start the development server: `pnpm dev`
2. Navigate to `/admin`
3. Register an admin account using the API endpoint: `/api/auth/admin/register`
4. Login with your admin credentials

## Features Implemented

### ✅ Completed
- User registration system with email and phone verification
- Admin authentication system with JWT tokens
- Property view request form with email notifications
- Contact form with email notifications
- Complete admin dashboard for property management
- Database schema with all required tables
- Email functionality for notifications (Gmail SMTP)
- Property creation and management
- JWT-based security for admin routes
- Automatic user creation when forms are submitted
- Comprehensive API endpoints for all functionality

### 🔄 In Progress
- Property view requests management table in admin dashboard
- Contact requests management table in admin dashboard
- Property editing and deletion functionality
- Image upload functionality for properties

### 📋 TODO
- Maps integration with latitude/longitude data
- Property search and filtering capabilities
- User profile management system
- Advanced admin features (bulk operations, analytics)
- Email templates customization
- File upload for property images
- Property view request status management
- Contact request status management
- Property image gallery management
- Advanced property filtering and search

## Current Status ✅

### Backend Testing Results
All API endpoints have been tested and are working correctly:

- ✅ **Admin Registration**: Working
- ✅ **Admin Login**: Working (returns JWT token)
- ✅ **Admin Verification**: Working
- ✅ **Property Creation**: Working
- ✅ **Property View Request**: Working (with email sent!)
- ✅ **Contact Request**: Working (with email sent!)
- ✅ **Property Listing**: Working
- ✅ **User Registration**: Working

### Email System Status
- ✅ Property view request emails are being sent to `spreethamkumar5@gmail.com`
- ✅ Contact request emails are being sent to `spreethamkumar5@gmail.com`
- ✅ Email formatting is working correctly

### Database Status
- ✅ All tables created successfully
- ✅ Data is being stored properly
- ✅ Relationships between tables are working

## API Endpoints

### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `POST /api/auth/admin/register` - Admin registration
- `POST /api/auth/admin/login` - Admin login
- `GET /api/auth/admin/me` - Admin verification

### Property Management
- `GET /api/admin/properties` - Get all properties (admin only)
- `POST /api/admin/properties` - Create new property (admin only)

### Form Submissions
- `POST /api/property-view-request` - Submit property view request
- `POST /api/contact-request` - Submit contact form

## Database Schema

### Tables
- `users` - User information
- `admins` - Admin users
- `properties` - Property listings
- `property_view_requests` - Property viewing requests
- `contact_requests` - Contact form submissions

### Key Features
- Automatic user creation when forms are submitted
- Email notifications to spreethamkumar5@gmail.com
- JWT-based authentication
- Admin-only property management
- Location data support for future map integration 