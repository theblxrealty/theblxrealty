# 11Square - Real Estate Website

A modern real estate website built with Next.js, featuring property listings, contact forms, admin dashboard, and email notifications.

## 🚀 Features

### ✅ Implemented Features
- **Property Listings**: Browse and view property details
- **Property View Requests**: Users can request property viewings with detailed forms
- **Contact Forms**: Contact form with email notifications
- **Admin Dashboard**: Complete admin interface for property management
- **User Registration**: User registration with email and phone verification
- **Admin Authentication**: Secure admin login with JWT tokens
- **Email Notifications**: Automatic email notifications for all form submissions
- **Database Integration**: PostgreSQL database with Prisma ORM
- **Responsive Design**: Mobile-friendly interface

### 🔄 In Progress
- Property view requests management in admin dashboard
- Contact requests management in admin dashboard
- Property editing and deletion
- Image upload functionality

### 📋 Planned Features
- Maps integration with latitude/longitude
- Property search and filtering
- User profile management
- Advanced admin features
- Email templates customization
- File upload for property images

## 🛠️ Tech Stack

- **Frontend**: Next.js 15, React 19, TypeScript
- **Styling**: Tailwind CSS, shadcn/ui components
- **Database**: PostgreSQL with Prisma ORM
- **Authentication**: JWT tokens with bcrypt
- **Email**: Nodemailer with Gmail SMTP
- **Deployment**: Vercel-ready

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd client
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   
   Update `.env.local` with your configuration:
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

4. **Set up the database**
   ```bash
   # Generate Prisma client
   pnpm db:generate
   
   # Push the schema to your database
   pnpm db:push
   
   # (Optional) Open Prisma Studio to view your database
   pnpm db:studio
   ```

5. **Start the development server**
   ```bash
   pnpm dev
   ```

## 📧 Email Setup

### Gmail Configuration
1. Enable 2-factor authentication on your Gmail account
2. Generate an App Password (not your regular password)
3. Use the App Password as `EMAIL_PASS` in your `.env.local` file

### Email Notifications
- Property view requests are sent to `spreethamkumar5@gmail.com`
- Contact form submissions are sent to `spreethamkumar5@gmail.com`
- All emails include detailed information about the request

## 🔐 Admin Setup

1. **Access admin dashboard**: Visit `http://localhost:3000/admin`
2. **Register admin account**: Use the API endpoint or create directly in database
3. **Login**: Use your admin credentials to access the dashboard
4. **Manage properties**: Add, edit, and manage property listings

## 📡 API Endpoints

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

## 🗄️ Database Schema

### Tables
- `users` - User information and registration
- `admins` - Admin user management
- `properties` - Property listings with location data
- `property_view_requests` - Property viewing requests
- `contact_requests` - Contact form submissions

### Key Features
- Automatic user creation when forms are submitted
- Email notifications for all form submissions
- JWT-based authentication for admins
- Location data support for future map integration
- Comprehensive data tracking

## 🎯 Usage

### For Visitors
1. Browse properties on the main website
2. Fill out property view request forms
3. Submit contact inquiries
4. Receive confirmation emails

### For Admins
1. Login to admin dashboard at `/admin`
2. Manage property listings
3. View and respond to requests
4. Monitor email notifications

### For Developers
1. All API endpoints are RESTful
2. JWT authentication for protected routes
3. Comprehensive error handling
4. TypeScript support throughout

## 🚀 Deployment

### Vercel Deployment
1. Connect your repository to Vercel
2. Set up environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

### Environment Variables for Production
```env
DATABASE_URL="your-production-database-url"
JWT_SECRET="your-production-jwt-secret"
EMAIL_USER="your-production-email"
EMAIL_PASS="your-production-email-password"
NEXTAUTH_URL="https://your-domain.com"
NEXTAUTH_SECRET="your-production-nextauth-secret"
```

## 🧪 Testing

### API Testing
```bash
# Test admin registration
curl -X POST http://localhost:3000/api/auth/admin/register \
  -H "Content-Type: application/json" \
  -d '{"email":"admin@test.com","phone":"1234567890","password":"admin123"}'

# Test property creation
curl -X POST http://localhost:3000/api/admin/properties \
  -H "Authorization: Bearer YOUR_JWT_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"title":"Test Property","price":500000}'
```

## 📝 Scripts

```bash
# Development
pnpm dev              # Start development server
pnpm build            # Build for production
pnpm start            # Start production server

# Database
pnpm db:generate      # Generate Prisma client
pnpm db:push          # Push schema to database
pnpm db:studio        # Open Prisma Studio
pnpm db:migrate       # Run migrations
pnpm db:seed          # Seed database
pnpm db:reset         # Reset database

# Linting
pnpm lint             # Run ESLint
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

For support, please contact the development team or create an issue in the repository. 