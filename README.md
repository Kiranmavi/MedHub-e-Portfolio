# MedHub e-Portfolio

A comprehensive e-Portfolio management system designed for medical students to track their clinical placements, feedback, and absences. The application provides role-based dashboards for students, supervisors, and administrators.

## Project Overview

MedHub e-Portfolio is a web-based application built to manage and track medical student placements, feedback, and attendance records. It serves as a digital portfolio system that enables students to maintain their clinical placement records while allowing supervisors and administrators to monitor and manage student activities.

## Scope

The application covers the following core functionalities:

- **Student Management**: Track student profiles with university IDs, programmes, and start dates
- **Placement Management**: Record and manage clinical placements with details such as location, ward/department, dates, arrival/departure times, and status
- **Feedback System**: Capture and manage supervisor feedback with ratings, categories, and OSCE scores
- **Absence Management**: Track student absences with reasons, justifications, and approval workflows
- **Role-Based Access Control**: Different dashboards and permissions for students, supervisors, and administrators
- **Authentication & Security**: Secure login with two-factor authentication support using Laravel Fortify

## Technology Stack

- **Backend**: Laravel 12 (PHP 8.2+)
- **Frontend**: Vue.js 3 with TypeScript, Inertia.js
- **UI Framework**: Tailwind CSS with Reka UI components
- **Authentication**: Laravel Fortify (with 2FA support)
- **API**: Laravel Sanctum
- **Database**: SQLite (configurable to other databases)

## Backend Architecture

The backend is built using **Laravel** and follows the MVC (Model-View-Controller) pattern with Inertia.js for seamless frontend integration.

### Key Backend Components:

#### Models
- **User**: Manages user accounts with roles (student, supervisor, admin)
- **Student**: Extends user profile with university-specific information (student_uni_id, programme, start_date)
- **Placement**: Tracks clinical placements with location, dates, times, and status
- **Feedback**: Stores supervisor feedback with ratings, categories, and OSCE scores
- **Absence**: Manages absence records with approval workflow

#### Controllers
- `UserController`: User management operations
- `StudentController`: Student profile and data management
- `PlacementController`: Placement CRUD operations
- `FeedbackController`: Feedback management
- `AbsenceController`: Absence tracking and approval
- Settings Controllers: Profile, password, and two-factor authentication management

#### Features
- RESTful API endpoints for all resources
- Role-based authorization
- Two-factor authentication support
- Database migrations and seeders
- Request validation
- Middleware for authentication and authorization

### Backend Routes

The application uses Laravel's routing system with:
- Web routes for Inertia.js page rendering
- API routes for resource management (`/api/user`, `/api/student`, `/api/placements`, `/api/feedback`, `/api/absence`)
- Settings routes for user preferences and security

## Frontend Dashboards

The frontend is built with **Vue.js 3** and **TypeScript**, using **Inertia.js** for server-side rendering and seamless navigation without full page reloads.

### 1. Student Dashboard (`Dashboard.vue`)

The Student Dashboard provides students with:

- **Placement Records View**: 
  - View all their clinical placements in a table format
  - See placement details including date, location, ward/department, status, arrival/departure times
  - Create, edit, and delete their own placement records
  - Filter and search placements

- **User Profile Display**:
  - View personal information
  - Display student-specific details (university ID, programme, start date)
  - Avatar with initials

- **Role-Based Features**:
  - Students can only view and manage their own placements
  - Limited access based on student role

### 2. Supervisor Dashboard (`SupervisorDashboard.vue`)

The Supervisor Dashboard provides supervisors with:

- **All Placements Overview**:
  - View placements from all students
  - Monitor student placement activities across the system
  - See student information associated with each placement

- **Enhanced Visibility**:
  - Access to comprehensive placement data for oversight
  - Ability to track multiple students' placement progress

### 3. Additional Frontend Pages

- **Welcome Page**: Landing page with registration option
- **Authentication Pages**: Login, Register, Password Reset, Email Verification, Two-Factor Challenge
- **Settings Pages**: 
  - Profile management
  - Password change
  - Two-factor authentication setup
  - Appearance settings

### Frontend Features

- **Responsive Design**: Mobile-friendly UI using Tailwind CSS
- **Component Library**: Reka UI components for consistent design
- **Type Safety**: Full TypeScript support
- **State Management**: Vue 3 Composition API with Inertia.js
- **Form Handling**: Integrated form validation and error handling
- **Navigation**: Breadcrumb navigation and sidebar menu

## Project Structure

```
MedHub-e-Portfolio/
├── app/
│   ├── Enums/              # Enum definitions (UserRole, PlacementStatus, etc.)
│   ├── Http/
│   │   ├── Controllers/    # Application controllers
│   │   ├── Middleware/     # Custom middleware
│   │   └── Requests/       # Form request validation
│   ├── Models/             # Eloquent models
│   └── Providers/          # Service providers
├── database/
│   ├── migrations/         # Database schema migrations
│   └── seeders/            # Database seeders
├── resources/
│   ├── js/
│   │   ├── components/     # Vue components
│   │   ├── layouts/        # Layout components
│   │   ├── pages/          # Inertia page components
│   │   └── routes/         # Frontend route definitions
│   └── css/                # Stylesheets
├── routes/
│   ├── web.php             # Web routes
│   └── api.php             # API routes
└── public/                 # Public assets
```

## Getting Started

### Prerequisites

- PHP 8.2 or higher
- Composer
- Node.js and npm
- SQLite (or MySQL/PostgreSQL)

### Installation

1. Clone the repository
2. Install PHP dependencies:
   ```bash
   composer install
   ```

3. Install Node dependencies:
   ```bash
   npm install
   ```

4. Set up environment:
   ```bash
   cp .env.example .env
   php artisan key:generate
   ```

5. Run migrations:
   ```bash
   php artisan migrate
   ```

6. Build frontend assets:
   ```bash
   npm run build
   ```

### Development

Run the development server:
```bash
composer dev
```

This will start:
- Laravel development server
- Queue worker
- Log viewer (Pail)
- Vite dev server

## User Roles

- **Student**: Can view and manage their own placements, feedback, and absences
- **Supervisor**: Can view all students' placements and provide feedback
- **Admin**: Full system access for managing users, students, and approvals

## Key Features

- ✅ Role-based dashboards
- ✅ Placement tracking and management
- ✅ Feedback system with ratings
- ✅ Absence management with approval workflow
- ✅ Two-factor authentication
- ✅ Responsive design
- ✅ RESTful API
- ✅ Type-safe frontend (TypeScript)

## License

MIT

