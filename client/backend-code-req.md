# Backend Code Requirements for 11Square Real Estate Platform

## Overview
This document outlines all the backend APIs and database connections required to make the 11Square real estate platform fully functional at a production level. The analysis covers all website sections and identifies areas that currently use static/mock data and need backend integration.

## Current State Analysis

### ✅ Already Implemented
- Basic Prisma database setup with PostgreSQL
- Health check API endpoint (`/api/health`)
- Database connection utilities

### ❌ Missing Backend Integration
The following sections currently use static/mock data and require backend APIs:

---

## 1. Property Management System

### 1.1 Property Data Management
**Current State**: All property data is hardcoded in components
**Required APIs**:
- `GET /api/properties` - List all properties with pagination, filtering, sorting
- `GET /api/properties/[id]` - Get single property details
- `POST /api/properties` - Create new property listing (admin)
- `PUT /api/properties/[id]` - Update property details (admin)
- `DELETE /api/properties/[id]` - Delete property listing (admin)

**Database Schema Requirements**:
```sql
-- Properties table
CREATE TABLE properties (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  description TEXT,
  long_description TEXT,
  location VARCHAR(255) NOT NULL,
  property_type VARCHAR(50) NOT NULL, -- villa, apartment, commercial, etc.
  category VARCHAR(50) NOT NULL, -- residential, commercial, land, investment
  status VARCHAR(50) NOT NULL, -- for_sale, for_rent, sold, rented
  price DECIMAL(15,2),
  beds INTEGER,
  baths INTEGER,
  sqft INTEGER,
  year_built INTEGER,
  lot_size VARCHAR(100),
  amenities JSONB,
  eco_features JSONB,
  images JSONB,
  is_new BOOLEAN DEFAULT false,
  featured BOOLEAN DEFAULT false,
  rating DECIMAL(3,2),
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);
```

### 1.2 Property Search & Filtering
**Current State**: Static filtering in frontend
**Required APIs**:
- `GET /api/properties/search` - Advanced search with filters
- `GET /api/properties/filters` - Get available filter options
- `GET /api/properties/types` - Get property types and categories

**Filter Parameters**:
- Location (area, city)
- Property type (villa, apartment, commercial, etc.)
- Price range
- Bedrooms/Bathrooms
- Square footage
- Amenities
- Property status
- Year built
- Features (furnished, balcony, garden, etc.)

### 1.3 Property Images & Media
**Current State**: Static placeholder images
**Required APIs**:
- `POST /api/properties/[id]/images` - Upload property images
- `DELETE /api/properties/[id]/images/[imageId]` - Delete property image
- `PUT /api/properties/[id]/images/order` - Reorder images

**Storage Requirements**:
- Cloud storage integration (AWS S3, Cloudinary)
- Image optimization and resizing
- Multiple image formats (thumbnail, medium, large)

---

## 2. Contact & Inquiry Management

### 2.1 Contact Form Submissions
**Current State**: Simulated form submission
**Required APIs**:
- `POST /api/contact` - Submit contact form
- `GET /api/contact/inquiries` - List contact inquiries (admin)
- `PUT /api/contact/inquiries/[id]` - Update inquiry status (admin)

**Database Schema**:
```sql
-- Contact inquiries table
CREATE TABLE contact_inquiries (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(50),
  message TEXT NOT NULL,
  source VARCHAR(50), -- homepage, property_page, contact_page
  status VARCHAR(50) DEFAULT 'new', -- new, contacted, closed
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);
```

### 2.2 Property-Specific Inquiries
**Current State**: Simulated property contact form
**Required APIs**:
- `POST /api/properties/[id]/inquiries` - Submit property-specific inquiry
- `GET /api/properties/[id]/inquiries` - Get inquiries for specific property (admin)

**Database Schema**:
```sql
-- Property inquiries table
CREATE TABLE property_inquiries (
  id SERIAL PRIMARY KEY,
  property_id INTEGER REFERENCES properties(id),
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(50),
  message TEXT NOT NULL,
  contact_preference VARCHAR(20), -- email, phone
  preferred_date DATE,
  preferred_time VARCHAR(20),
  status VARCHAR(50) DEFAULT 'new',
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);
```

---

## 3. User Management & Authentication

### 3.1 User Registration & Authentication
**Current State**: No user system
**Required APIs**:
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `POST /api/auth/logout` - User logout
- `GET /api/auth/me` - Get current user profile
- `PUT /api/auth/profile` - Update user profile

**Database Schema**:
```sql
-- Users table
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  first_name VARCHAR(100),
  last_name VARCHAR(100),
  phone VARCHAR(50),
  role VARCHAR(20) DEFAULT 'user', -- user, agent, admin
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);
```

### 3.2 User Preferences & Saved Properties
**Current State**: No saved properties functionality
**Required APIs**:
- `POST /api/users/favorites` - Add property to favorites
- `DELETE /api/users/favorites/[propertyId]` - Remove from favorites
- `GET /api/users/favorites` - Get user's favorite properties
- `POST /api/users/searches` - Save search criteria
- `GET /api/users/searches` - Get saved searches

**Database Schema**:
```sql
-- User favorites table
CREATE TABLE user_favorites (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id),
  property_id INTEGER REFERENCES properties(id),
  created_at TIMESTAMP DEFAULT NOW(),
  UNIQUE(user_id, property_id)
);

-- User searches table
CREATE TABLE user_searches (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id),
  name VARCHAR(255),
  search_criteria JSONB,
  created_at TIMESTAMP DEFAULT NOW()
);
```

---

## 4. Agent & Team Management

### 4.1 Agent Profiles
**Current State**: Static team member data
**Required APIs**:
- `GET /api/agents` - List all agents
- `GET /api/agents/[id]` - Get agent details
- `POST /api/agents` - Create agent profile (admin)
- `PUT /api/agents/[id]` - Update agent profile
- `DELETE /api/agents/[id]` - Delete agent profile (admin)

**Database Schema**:
```sql
-- Agents table
CREATE TABLE agents (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id),
  name VARCHAR(255) NOT NULL,
  role VARCHAR(100),
  bio TEXT,
  image_url VARCHAR(500),
  phone VARCHAR(50),
  email VARCHAR(255),
  specialties JSONB, -- areas of expertise
  experience_years INTEGER,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);
```

### 4.2 Agent-Property Assignments
**Current State**: No agent-property relationships
**Required APIs**:
- `POST /api/properties/[id]/assign-agent` - Assign agent to property
- `GET /api/agents/[id]/properties` - Get agent's assigned properties

**Database Schema**:
```sql
-- Agent property assignments table
CREATE TABLE agent_properties (
  id SERIAL PRIMARY KEY,
  agent_id INTEGER REFERENCES agents(id),
  property_id INTEGER REFERENCES properties(id),
  assigned_at TIMESTAMP DEFAULT NOW(),
  UNIQUE(agent_id, property_id)
);
```

---

## 5. Content Management System

### 5.1 Blog/News Management
**Current State**: No blog functionality
**Required APIs**:
- `GET /api/blog` - List blog posts
- `GET /api/blog/[id]` - Get blog post details
- `POST /api/blog` - Create blog post (admin)
- `PUT /api/blog/[id]` - Update blog post (admin)
- `DELETE /api/blog/[id]` - Delete blog post (admin)

**Database Schema**:
```sql
-- Blog posts table
CREATE TABLE blog_posts (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  slug VARCHAR(255) UNIQUE NOT NULL,
  content TEXT NOT NULL,
  excerpt TEXT,
  featured_image VARCHAR(500),
  author_id INTEGER REFERENCES users(id),
  status VARCHAR(20) DEFAULT 'draft', -- draft, published, archived
  published_at TIMESTAMP,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);
```

### 5.2 Testimonials Management
**Current State**: Static testimonial data
**Required APIs**:
- `GET /api/testimonials` - List testimonials
- `POST /api/testimonials` - Create testimonial (admin)
- `PUT /api/testimonials/[id]` - Update testimonial (admin)
- `DELETE /api/testimonials/[id]` - Delete testimonial (admin)

**Database Schema**:
```sql
-- Testimonials table
CREATE TABLE testimonials (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  role VARCHAR(100),
  content TEXT NOT NULL,
  rating INTEGER CHECK (rating >= 1 AND rating <= 5),
  image_url VARCHAR(500),
  is_featured BOOLEAN DEFAULT false,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);
```

---

## 6. Analytics & Reporting

### 6.1 Property Analytics
**Current State**: No analytics
**Required APIs**:
- `GET /api/analytics/properties/views` - Property view analytics
- `GET /api/analytics/properties/inquiries` - Property inquiry analytics
- `GET /api/analytics/search-trends` - Search trend analytics

**Database Schema**:
```sql
-- Property views table
CREATE TABLE property_views (
  id SERIAL PRIMARY KEY,
  property_id INTEGER REFERENCES properties(id),
  user_id INTEGER REFERENCES users(id),
  ip_address VARCHAR(45),
  user_agent TEXT,
  viewed_at TIMESTAMP DEFAULT NOW()
);

-- Search analytics table
CREATE TABLE search_analytics (
  id SERIAL PRIMARY KEY,
  search_query TEXT,
  filters JSONB,
  results_count INTEGER,
  user_id INTEGER REFERENCES users(id),
  ip_address VARCHAR(45),
  searched_at TIMESTAMP DEFAULT NOW()
);
```

### 6.2 Lead Management
**Current State**: No lead tracking
**Required APIs**:
- `GET /api/leads` - List all leads (admin)
- `PUT /api/leads/[id]` - Update lead status
- `GET /api/leads/analytics` - Lead conversion analytics

---

## 7. Notification System

### 7.1 Email Notifications
**Current State**: No email functionality
**Required APIs**:
- `POST /api/notifications/email` - Send email notification
- `POST /api/notifications/inquiry-confirmation` - Send inquiry confirmation
- `POST /api/notifications/property-update` - Notify about property updates

**Email Templates Needed**:
- Inquiry confirmation emails
- Property update notifications
- Newsletter subscriptions
- Password reset emails
- Welcome emails

### 7.2 SMS Notifications
**Current State**: No SMS functionality
**Required APIs**:
- `POST /api/notifications/sms` - Send SMS notification
- `POST /api/notifications/appointment-reminder` - Send appointment reminders

---

## 8. Admin Dashboard

### 8.1 Admin APIs
**Current State**: No admin functionality
**Required APIs**:
- `GET /api/admin/dashboard` - Admin dashboard data
- `GET /api/admin/users` - Manage users
- `GET /api/admin/properties` - Manage properties
- `GET /api/admin/inquiries` - Manage inquiries
- `GET /api/admin/analytics` - View analytics

### 8.2 Admin Dashboard Features
- Property management interface
- User management
- Inquiry management
- Analytics dashboard
- Content management
- System settings

---

## 9. External Integrations

### 9.1 Payment Gateway Integration
**Current State**: No payment functionality
**Required APIs**:
- `POST /api/payments/create-intent` - Create payment intent
- `POST /api/payments/confirm` - Confirm payment
- `GET /api/payments/history` - Payment history

### 9.2 Third-Party Services
**Current State**: No external integrations
**Required Integrations**:
- Email service (SendGrid, Mailgun)
- SMS service (Twilio)
- File storage (AWS S3, Cloudinary)
- Payment processing (Stripe, Razorpay)
- Analytics (Google Analytics, Mixpanel)

---

## 10. Security & Performance

### 10.1 Security Requirements
- JWT token authentication
- Role-based access control (RBAC)
- Input validation and sanitization
- Rate limiting
- CORS configuration
- API key management for external services

### 10.2 Performance Requirements
- Database indexing for search queries
- Caching layer (Redis)
- Image optimization and CDN
- API response caching
- Database query optimization

---

## 11. Database Schema Summary

### Core Tables Required:
1. `users` - User accounts and authentication
2. `properties` - Property listings
3. `contact_inquiries` - General contact form submissions
4. `property_inquiries` - Property-specific inquiries
5. `agents` - Agent profiles
6. `agent_properties` - Agent-property assignments
7. `user_favorites` - User saved properties
8. `user_searches` - User saved searches
9. `blog_posts` - Blog content
10. `testimonials` - Customer testimonials
11. `property_views` - Analytics tracking
12. `search_analytics` - Search tracking

### Indexes Required:
- Properties: location, property_type, price, status
- Users: email
- Inquiries: created_at, status
- Views: property_id, viewed_at

---

## 12. Implementation Priority

### Phase 1 (Critical - MVP)
1. Property management APIs
2. Contact form submission
3. Basic user authentication
4. Property search and filtering

### Phase 2 (Important - Enhanced UX)
1. User favorites and saved searches
2. Agent management
3. Blog/Content management
4. Email notifications

### Phase 3 (Advanced Features)
1. Analytics and reporting
2. Admin dashboard
3. Payment integration
4. Advanced search features

### Phase 4 (Production Optimization)
1. Performance optimization
2. Advanced security features
3. Third-party integrations
4. Mobile app APIs

---

## 13. Technology Stack Recommendations

### Backend Framework
- Next.js API routes (current)
- Prisma ORM (current)
- PostgreSQL database (current)

### Additional Services
- Redis for caching
- AWS S3 for file storage
- SendGrid for email
- Twilio for SMS
- Stripe for payments
- Cloudinary for image optimization

### Monitoring & Analytics
- Sentry for error tracking
- Google Analytics for web analytics
- Mixpanel for user analytics
- LogRocket for session replay

---

## 14. Estimated Development Time

### Phase 1: 4-6 weeks
- Core property management
- Basic user system
- Contact forms
- Search functionality

### Phase 2: 3-4 weeks
- User favorites
- Agent system
- Content management
- Email notifications

### Phase 3: 4-5 weeks
- Analytics dashboard
- Admin interface
- Payment integration
- Advanced features

### Phase 4: 2-3 weeks
- Performance optimization
- Security hardening
- Third-party integrations

**Total Estimated Time: 13-18 weeks**

---

## 15. Next Steps

1. **Database Schema Implementation**
   - Update Prisma schema with all required tables
   - Create database migrations
   - Set up seed data

2. **API Development**
   - Start with Phase 1 APIs
   - Implement authentication system
   - Create property management endpoints

3. **Frontend Integration**
   - Replace static data with API calls
   - Implement loading states
   - Add error handling

4. **Testing & Deployment**
   - Unit and integration tests
   - API documentation
   - Production deployment setup

This comprehensive backend implementation will transform the current static website into a fully functional, production-ready real estate platform. 