# Backend Setup for 11Square Real Estate

This document outlines the backend setup for the 11Square real estate website using PostgreSQL and Prisma.

## Prerequisites

- Node.js (v18 or higher)
- PostgreSQL database
- pnpm package manager

## Database Setup

### 1. Install PostgreSQL
Make sure PostgreSQL is installed and running on your system.

### 2. Create Database
```sql
CREATE DATABASE "11square_db";
```

### 3. Update Environment Variables
Copy `.env.example` to `.env` and update the database URL:
```bash
cp .env.example .env
```

Update the `DATABASE_URL` in `.env`:
```
DATABASE_URL="postgresql://your_username:your_password@localhost:5432/11square_db?schema=public"
```

## Prisma Setup

### 1. Install Dependencies
```bash
pnpm install
```

### 2. Generate Prisma Client
```bash
npx prisma generate
```

### 3. Run Database Migrations
```bash
npx prisma migrate dev --name init
```

### 4. Seed Database (when ready)
```bash
npx prisma db seed
```

## Development

### 1. Start Development Server
```bash
pnpm dev
```

### 2. Open Prisma Studio (Database GUI)
```bash
npx prisma studio
```

## Database Schema

The database schema is defined in `prisma/schema.prisma`. Currently, it's set up with:
- PostgreSQL as the database provider
- Prisma Client for type-safe database access

## File Structure

```
client/
├── prisma/
│   └── schema.prisma          # Database schema
├── lib/
│   ├── prisma.ts              # Prisma client utility
│   └── db.ts                  # Database connection
├── .env                       # Environment variables
├── .env.example               # Example environment file
└── BACKEND_SETUP.md           # This file
```

## Next Steps

1. Define your database models in `prisma/schema.prisma`
2. Create API routes in `app/api/`
3. Set up authentication (NextAuth.js recommended)
4. Add database seeding scripts
5. Set up production database

## Environment Variables

- `DATABASE_URL`: PostgreSQL connection string
- `NODE_ENV`: Environment (development/production)
- `NEXTAUTH_URL`: NextAuth.js URL
- `NEXTAUTH_SECRET`: NextAuth.js secret key

## Troubleshooting

### Database Connection Issues
1. Ensure PostgreSQL is running
2. Check database credentials in `.env`
3. Verify database exists: `psql -d 11square_db`

### Prisma Issues
1. Regenerate client: `npx prisma generate`
2. Reset database: `npx prisma migrate reset`
3. Check schema: `npx prisma validate` 