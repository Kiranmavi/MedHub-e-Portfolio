# MedHub e-Portfolio - Technical Documentation

## Table of Contents
1. [Project Scope](#project-scope)
2. [Backend Architecture](#backend-architecture)
3. [Frontend Integration](#frontend-integration)
4. [Authentication & Authorization](#authentication--authorization)
5. [CSRF Token Handling](#csrf-token-handling)
6. [Testing with PHP](#testing-with-php)
7. [System Requirements](#system-requirements)
8. [Setup & Installation](#setup--installation)

---

## Project Scope

### Overview
MedHub e-Portfolio is a comprehensive web-based application designed for medical students to manage their clinical placement records, receive supervisor feedback, and track absences. The system provides role-based dashboards for students, supervisors, and administrators.

### Core Functionalities

1. **Student Management**
   - Student profile creation with university ID, programme, and start date
   - Student-user relationship management
   - Role-based access control

2. **Placement Management**
   - Record clinical placements with hospital name, ward/department, dates, and times
   - Track placement status (attended, not-attended, cancelled, late)
   - Manage arrival/departure times and notes
   - View placement history

3. **Feedback System**
   - Supervisors provide feedback on student placements
   - Feedback includes ratings (excellent, good, satisfactory, poor)
   - Categorization of feedback
   - OSCE score tracking
   - Date tracking for feedback received

4. **Absence Management**
   - Record student absences with reasons and justifications
   - Approval workflow for absences
   - Admin approval tracking

5. **Role-Based Dashboards**
   - **Student Dashboard**: View and manage own placements
   - **Supervisor Dashboard**: View all students' placements and provide feedback
   - **Admin Dashboard**: Full system access and absence approvals

---

## Backend Architecture

### Technology Stack
- **Framework**: Laravel 12 (PHP 8.2+)
- **Database**: SQLite (configurable to MySQL/PostgreSQL)
- **API**: Laravel Sanctum for API authentication
- **Authentication**: Laravel Fortify
- **Frontend Integration**: Inertia.js

### Controllers

Controllers follow RESTful API conventions and handle HTTP requests:

#### 1. **UserController** (`app/Http/Controllers/UserController.php`)
- **Purpose**: Manages user accounts
- **Methods**:
  - `index()`: List all users
  - `store()`: Create new user
  - `show()`: Display specific user
  - `update()`: Update user information
  - `destroy()`: Delete user

#### 2. **StudentController** (`app/Http/Controllers/StudentController.php`)
- **Purpose**: Manages student profiles
- **Methods**: Standard CRUD operations
- **Relationships**: Belongs to User model

#### 3. **PlacementController** (`app/Http/Controllers/PlacementController.php`)
- **Purpose**: Manages clinical placements
- **Key Methods**:
  ```php
  public function store(Request $request)
  {
      $data = $request->validate([
          'student_id' => 'required|exists:students,id',
          'placement_date' => 'required|date',
          'placement_location' => 'required|string|max:200',
          'ward_department' => 'required|string|max:150',
          'status' => ['required', new Enum(PlacementStatus::class)],
          'arrival_time' => 'nullable|date_format:H:i',
          'departure_time' => 'nullable|date_format:H:i',
          'notes' => 'nullable|string',
      ]);
      
      $placement = Placement::create($data);
      return response()->json($placement, 201);
  }
  ```
- **Validation**: Uses Laravel validation rules and Enum validation
- **Response**: Returns JSON responses for API endpoints

#### 4. **FeedbackController** (`app/Http/Controllers/FeedbackController.php`)
- **Purpose**: Manages supervisor feedback
- **Validation**: Validates feedback rating and category using Enums
- **Relationships**: Links to Student and Supervisor (User)

#### 5. **AbsenceController** (`app/Http/Controllers/AbsenceController.php`)
- **Purpose**: Manages student absences
- **Features**: Approval workflow with admin tracking

### Models

Models use Eloquent ORM for database interactions:

#### 1. **User Model** (`app/Models/User.php`)
```php
protected $fillable = [
    'first_name',
    'last_name',
    'email',
    'password',
    'role',
];

protected $casts = [
    'email_verified_at' => 'datetime',
    'password' => 'hashed',
    'two_factor_confirmed_at' => 'datetime',
];
```
- **Relationships**: Has one Student
- **Features**: Two-factor authentication support via Laravel Fortify

#### 2. **Student Model** (`app/Models/Student.php`)
```php
public function user() {
    return $this->belongsTo(User::class);
}

public function placement() {
    return $this->hasMany(Placement::class);
}

public function feedback() {
    return $this->hasMany(Feedback::class);
}

public function absence() {
    return $this->hasMany(Absence::class);
}
```
- **Relationships**: 
  - Belongs to User
  - Has many Placements, Feedback, Absences

#### 3. **Placement Model** (`app/Models/Placement.php`)
```php
protected $casts = [
    'status' => PlacementStatus::class,
];

public function student() {
    return $this->belongsTo(Student::class);
}
```
- **Enum Casting**: Status field uses PlacementStatus enum

#### 4. **Feedback Model** (`app/Models/Feedback.php`)
```php
protected $casts = [
    'date_received' => 'date',
    'rating' => FeedbackRating::class,
    'category' => FeedbackCategory::class,
];
```
- **Enum Casting**: Rating and Category use Enums

#### 5. **Absence Model** (`app/Models/Absence.php`)
- **Relationships**: Belongs to Student, Admin, and Approver (User)

### Enums

Enums provide type safety and validation:

#### 1. **UserRole** (`app/Enums/userRole.php`)
```php
enum UserRole: string {
    case STUDENT = 'student';
    case ADMIN = 'admin';
    case SUPERVISOR = 'supervisor';
}
```

#### 2. **PlacementStatus** (`app/Enums/PlacementStatus.php`)
```php
enum PlacementStatus: string {
    case ATTENDED = 'attended';
    case NOT_ATTENDED = 'not-attended';
    case CANCELLED = 'cancelled';
    case LATE = 'late';
}
```

#### 3. **FeedbackRating** (`app/Enums/FeedbackRating.php`)
```php
enum FeedbackRating: string {
    case EXCELLENT = 'excellent';
    case GOOD = 'good';
    case SATISFACTORY = 'satisfactory';
    case POOR = 'poor';
}
```

#### 4. **FeedbackCategory** (`app/Enums/FeedbackCategory.php`)
- Categories for organizing feedback types

#### 5. **AbsenceApproval** (`app/Enums/AbsenceApproval.php`)
- Approval status for absence requests

### Routes

#### Web Routes (`routes/web.php`)

**Inertia.js Routes** (Server-side rendered pages):
```php
Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canRegister' => Features::enabled(Features::registration()),
    ]);
})->name('home');

Route::get('dashboard', function () {
    // Role-based data loading
    $user = auth()->user();
    $role = $user ? $user->role : 'guest';
    
    // Load user data with student relationship
    // Load placements based on role
    // Return Inertia::render('Dashboard', $data);
})->name('dashboard');
```

**API Resource Routes** (RESTful endpoints):
```php
Route::apiResource('user', UserController::class);
Route::apiResource('student', StudentController::class);
Route::apiResource('placements', PlacementController::class);
Route::apiResource('feedback', FeedbackController::class);
Route::apiResource('absence', AbsenceController::class);
```

These create standard REST endpoints:
- `GET /api/placements` - List all placements
- `POST /api/placements` - Create new placement
- `GET /api/placements/{id}` - Show specific placement
- `PUT/PATCH /api/placements/{id}` - Update placement
- `DELETE /api/placements/{id}` - Delete placement

#### API Routes (`routes/api.php`)

```php
Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::apiResource('users', UserController::class);
Route::apiResource('students', StudentController::class);
Route::apiResource('placements', PlacementController::class);
Route::apiResource('feedback', FeedbackController::class);
Route::apiResource('absences', AbsenceController::class);
```

**Note**: API routes use `auth:sanctum` middleware for token-based authentication.

---

## Frontend Integration

### Technology Stack
- **Framework**: Vue.js 3 with TypeScript
- **Integration**: Inertia.js (NOT React/Axios)
- **UI Library**: Reka UI components
- **Styling**: Tailwind CSS 4
- **Build Tool**: Vite

### Inertia.js Integration

**Inertia.js** is used instead of traditional REST API calls with Axios. It provides:
- Server-side rendering with client-side navigation
- No need for separate API endpoints for page rendering
- Shared data between backend and frontend
- Automatic CSRF token handling

#### How It Works:

1. **Backend** (`routes/web.php`):
```php
Route::get('dashboard', function () {
    return Inertia::render('Dashboard', [
        'placements' => $placements,
        'user' => $userData,
        'role' => $role,
    ]);
});
```

2. **Frontend** (`resources/js/pages/Dashboard.vue`):
```vue
<script setup lang="ts">
interface Props {
    placements: Placement[];
    role?: string;
    user?: UserData | null;
}

const props = defineProps<Props>();
</script>
```

3. **Navigation** (No fetch/Axios needed):
```typescript
import { router } from '@inertiajs/vue3';

// Navigate to another page
router.visit('/dashboard');

// Reload current page
router.reload();

// Make POST request
router.post('/placements', formData);
```

### API Calls for CRUD Operations

For direct API calls (not page navigation), the project uses **native Fetch API** with CSRF tokens:

```typescript
// Example from Dashboard.vue
const handleSubmit = async () => {
    const csrfToken = document.querySelector('meta[name="csrf-token"]')?.getAttribute('content');
    const headers: Record<string, string> = {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
    };
    
    if (csrfToken) {
        headers['X-CSRF-TOKEN'] = csrfToken;
    }

    const response = await fetch(placementRoutes.store().url, {
        method: 'POST',
        headers,
        body: JSON.stringify(dataToSend),
        credentials: 'same-origin',
    });
};
```

### Route Helpers (Wayfinder)

The project uses **Laravel Wayfinder** to generate type-safe route URLs:

```typescript
import placementRoutes from '@/routes/placements';

// Generate URL
placementRoutes.store().url; // '/api/placements'

// With parameters
placementRoutes.show({ placement: 1 }).url; // '/api/placements/1'

// With query parameters
placementRoutes.index({ query: { page: 2 } }).url; // '/api/placements?page=2'
```

### Frontend Structure

```
resources/js/
├── pages/              # Inertia.js page components
│   ├── Dashboard.vue
│   ├── SupervisorDashboard.vue
│   └── auth/
├── components/         # Reusable Vue components
├── layouts/            # Layout components
├── routes/             # Type-safe route definitions (auto-generated)
├── composables/        # Vue composables
└── app.ts              # Inertia.js initialization
```

---

## Authentication & Authorization

### Authentication: Laravel Fortify

**Laravel Fortify** handles authentication without providing UI components:

#### Configuration (`app/Providers/FortifyServiceProvider.php`):

```php
Fortify::loginView(fn (Request $request) => Inertia::render('auth/Login', [
    'canResetPassword' => Features::enabled(Features::resetPasswords()),
    'canRegister' => Features::enabled(Features::registration()),
]));

Fortify::registerView(fn () => Inertia::render('auth/Register'));
```

#### Features Enabled:
- User Registration
- Password Reset
- Email Verification
- Two-Factor Authentication (2FA)
- Rate Limiting (5 attempts per minute)

#### Rate Limiting:
```php
RateLimiter::for('login', function (Request $request) {
    $throttleKey = Str::transliterate(Str::lower($request->input(Fortify::username())).'|'.$request->ip());
    return Limit::perMinute(5)->by($throttleKey);
});
```

### Authorization: Role-Based Access Control (RBAC)

#### Role System:
- **Student**: Can view/manage own placements, feedback, absences
- **Supervisor**: Can view all placements and provide feedback
- **Admin**: Full system access, can approve absences

#### Implementation in Routes:

```php
Route::get('dashboard', function () {
    $user = auth()->user();
    $role = $user ? $user->role : 'guest';
    
    switch ($role) {
        case 'student':
            // Load student's own placements
            $data['placements'] = Placement::where('student_id', $student->id)->get();
            break;
            
        case 'supervisor':
            // Load all placements
            $data['placements'] = Placement::all();
            return Inertia::render('SupervisorDashboard', $data);
            
        default:
            // Guest or unknown role
            $data['placements'] = Placement::all();
    }
    
    return Inertia::render('Dashboard', $data);
});
```

#### Frontend Authorization:

```vue
<script setup lang="ts">
const isStudent = computed(() => props.role === 'student');
const canCreatePlacement = computed(() => isStudent.value);
const canEditPlacement = computed(() => isStudent.value);
const canDeletePlacement = computed(() => isStudent.value);
</script>

<template>
    <Button v-if="canCreatePlacement" @click="handleCreate">
        Create Placement
    </Button>
</template>
```

### API Authentication: Laravel Sanctum

For API endpoints, **Laravel Sanctum** provides token-based authentication:

```php
// routes/api.php
Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');
```

**Usage**:
- Generate token: `$user->createToken('token-name')`
- Authenticate requests: Include token in `Authorization: Bearer {token}` header
- CSRF cookie endpoint: `/sanctum/csrf-cookie` (for SPA authentication)

---

## CSRF Token Handling

### What is CSRF?
Cross-Site Request Forgery (CSRF) protection prevents unauthorized actions from being performed on behalf of authenticated users.

### How CSRF Works in This Project

#### 1. **CSRF Token Generation**

Laravel automatically generates CSRF tokens for each session. The token is included in:
- Meta tag in HTML head (for JavaScript access)
- Forms (automatically by Laravel)
- Session storage

#### 2. **CSRF Token in HTML**

The token is embedded in the main layout (`resources/views/app.blade.php`):
```html
<meta name="csrf-token" content="{{ csrf_token() }}">
```

#### 3. **Frontend Token Retrieval**

In Vue components, the token is retrieved from the meta tag:
```typescript
const csrfToken = document.querySelector('meta[name="csrf-token"]')?.getAttribute('content');
```

#### 4. **Including CSRF Token in Requests**

For API calls using Fetch API:
```typescript
const headers: Record<string, string> = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'X-Requested-With': 'XMLHttpRequest',
    'X-CSRF-TOKEN': csrfToken, // CSRF token from meta tag
};

const response = await fetch(url, {
    method: 'POST',
    headers,
    body: JSON.stringify(data),
    credentials: 'same-origin', // Important: includes cookies
});
```

#### 5. **Inertia.js Automatic CSRF**

When using Inertia.js router methods, CSRF is handled automatically:
```typescript
import { router } from '@inertiajs/vue3';

// CSRF token automatically included
router.post('/placements', formData);
```

#### 6. **CSRF Cookie for SPAs**

For Single Page Applications, Sanctum provides CSRF cookie endpoint:
```typescript
// Get CSRF cookie before making authenticated requests
await fetch('/sanctum/csrf-cookie', {
    credentials: 'same-origin',
});
```

### CSRF Token Validation

Laravel automatically validates CSRF tokens via middleware:
- `VerifyCsrfToken` middleware checks `X-CSRF-TOKEN` header
- Token must match session token
- Exempted routes can be configured in `app/Http/Middleware/VerifyCsrfToken.php`

### Best Practices

1. **Always include CSRF token** in POST, PUT, PATCH, DELETE requests
2. **Use `credentials: 'same-origin'`** to include cookies
3. **Refresh token** if session expires (Laravel handles this automatically)
4. **Don't expose token** in client-side code unnecessarily

---

## Testing with PHP

### Testing Framework: PHPUnit

The project uses **PHPUnit** for testing (included with Laravel).

### Test Structure

```
tests/
├── Feature/          # Integration/Feature tests
│   ├── Auth/         # Authentication tests
│   ├── Settings/     # Settings tests
│   └── DashboardTest.php
└── Unit/             # Unit tests
    └── ExampleTest.php
```

### Running Tests

```bash
# Run all tests
php artisan test

# Run specific test file
php artisan test tests/Feature/DashboardTest.php

# Run with coverage
php artisan test --coverage

# Run specific test method
php artisan test --filter test_authenticated_users_can_visit_the_dashboard
```

### Example Test: DashboardTest.php

```php
<?php

namespace Tests\Feature;

use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class DashboardTest extends TestCase
{
    use RefreshDatabase; // Resets database after each test

    public function test_guests_are_redirected_to_the_login_page()
    {
        $response = $this->get(route('dashboard'));
        $response->assertRedirect(route('login'));
    }

    public function test_authenticated_users_can_visit_the_dashboard()
    {
        $user = User::factory()->create();
        $this->actingAs($user); // Authenticate as user

        $response = $this->get(route('dashboard'));
        $response->assertStatus(200);
    }
}
```

### Test Types

#### 1. **Feature Tests** (Integration Tests)
- Test complete user flows
- Test HTTP requests and responses
- Test database interactions

```php
public function test_student_can_create_placement()
{
    $user = User::factory()->create(['role' => 'student']);
    $student = Student::factory()->create(['user_id' => $user->id]);
    
    $this->actingAs($user);
    
    $response = $this->postJson('/api/placements', [
        'student_id' => $student->id,
        'placement_date' => '2025-01-15',
        'placement_location' => 'Aberdeen Royal Infirmary',
        'ward_department' => 'Emergency Department',
        'status' => 'attended',
    ]);
    
    $response->assertStatus(201);
    $this->assertDatabaseHas('placements', [
        'student_id' => $student->id,
        'placement_location' => 'Aberdeen Royal Infirmary',
    ]);
}
```

#### 2. **Unit Tests**
- Test individual methods/classes
- Mock dependencies
- Fast execution

```php
public function test_placement_status_enum()
{
    $status = PlacementStatus::ATTENDED;
    $this->assertEquals('attended', $status->value);
}
```

### Test Database

Tests use a separate database (configured in `phpunit.xml`):
```xml
<env name="DB_CONNECTION" value="sqlite"/>
<env name="DB_DATABASE" value=":memory:"/>
```

This ensures:
- Tests don't affect development database
- Fast test execution (in-memory database)
- Clean state for each test

### Testing Authentication

```php
// Authenticate as user
$user = User::factory()->create();
$this->actingAs($user);

// Test authenticated route
$response = $this->get('/dashboard');
$response->assertStatus(200);

// Test unauthenticated access
$response = $this->get('/dashboard');
$response->assertRedirect('/login');
```

### Testing API Endpoints

```php
public function test_api_returns_placements()
{
    $user = User::factory()->create();
    Placement::factory()->count(5)->create();
    
    $this->actingAs($user);
    
    $response = $this->getJson('/api/placements');
    
    $response->assertStatus(200)
             ->assertJsonCount(5, 'data');
}
```

### Test Assertions

Common assertions:
- `assertStatus(200)` - Check HTTP status
- `assertJson()` - Check JSON response
- `assertDatabaseHas()` - Check database record exists
- `assertRedirect()` - Check redirect
- `assertSee()` - Check response contains text

---

## System Requirements

### Backend Requirements

- **PHP**: 8.2 or higher
- **Composer**: Latest version
- **Extensions**:
  - BCMath
  - Ctype
  - cURL
  - DOM
  - Fileinfo
  - JSON
  - Mbstring
  - OpenSSL
  - PCRE
  - PDO
  - Tokenizer
  - XML

### Frontend Requirements

- **Node.js**: 18.x or higher
- **npm**: 9.x or higher
- **Package Manager**: npm or yarn

### Database

- **SQLite** (default, for development)
- **MySQL** 5.7+ or **MariaDB** 10.3+
- **PostgreSQL** 13+

### Server Requirements

- **Web Server**: Apache or Nginx
- **PHP-FPM** (for production)
- **SSL Certificate** (recommended for production)

---

## Setup & Installation

### Step 1: Clone Repository
```bash
git clone <repository-url>
cd MedHub-e-Portfolio
```

### Step 2: Install PHP Dependencies
```bash
composer install
```

### Step 3: Environment Configuration
```bash
cp .env.example .env
php artisan key:generate
```

### Step 4: Configure Database
Edit `.env` file:
```env
DB_CONNECTION=sqlite
DB_DATABASE=/absolute/path/to/database/database.sqlite
```

Or for MySQL:
```env
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=medhub
DB_USERNAME=root
DB_PASSWORD=
```

### Step 5: Create Database
```bash
# For SQLite
touch database/database.sqlite

# For MySQL/PostgreSQL
php artisan migrate
```

### Step 6: Run Migrations
```bash
php artisan migrate
```

### Step 7: Install Frontend Dependencies
```bash
npm install
```

### Step 8: Build Frontend Assets
```bash
# Development
npm run dev

# Production
npm run build
```

### Step 9: Start Development Server
```bash
# Option 1: Using Laravel's built-in server
php artisan serve

# Option 2: Using composer dev script (includes Vite, queue, logs)
composer dev
```

### Step 10: Access Application
- Open browser: `http://localhost:8000`
- Register a new user or use existing credentials

---

## Development Workflow

### Running the Application

**Full Development Stack** (recommended):
```bash
composer dev
```

This runs:
- Laravel development server (port 8000)
- Queue worker
- Log viewer (Pail)
- Vite dev server (HMR enabled)

### Database Operations

```bash
# Create migration
php artisan make:migration create_table_name

# Run migrations
php artisan migrate

# Rollback last migration
php artisan migrate:rollback

# Reset database
php artisan migrate:fresh

# Seed database
php artisan db:seed
```

### Frontend Development

```bash
# Start Vite dev server (HMR)
npm run dev

# Build for production
npm run build

# Format code
npm run format

# Lint code
npm run lint
```

### Testing

```bash
# Run all tests
php artisan test

# Run with coverage
php artisan test --coverage

# Run specific test
php artisan test --filter test_name
```

### Useful Commands

```bash
# Clear cache
php artisan cache:clear
php artisan config:clear
php artisan route:clear
php artisan view:clear

# Reset auto-increment IDs
php artisan db:reset-ids --renumber

# Generate route helpers (Wayfinder)
php artisan wayfinder:generate
```

---

## API Endpoints Summary

### User Endpoints
- `GET /api/user` - Get authenticated user (requires Sanctum)
- `GET /api/users` - List all users
- `POST /api/users` - Create user
- `GET /api/users/{id}` - Show user
- `PUT /api/users/{id}` - Update user
- `DELETE /api/users/{id}` - Delete user

### Student Endpoints
- `GET /api/students` - List all students
- `POST /api/students` - Create student
- `GET /api/students/{id}` - Show student
- `PUT /api/students/{id}` - Update student
- `DELETE /api/students/{id}` - Delete student

### Placement Endpoints
- `GET /api/placements` - List all placements (paginated)
- `POST /api/placements` - Create placement
- `GET /api/placements/{id}` - Show placement with student relationship
- `PUT /api/placements/{id}` - Update placement
- `DELETE /api/placements/{id}` - Delete placement

### Feedback Endpoints
- `GET /api/feedback` - List all feedback (paginated)
- `POST /api/feedback` - Create feedback
- `GET /api/feedback/{id}` - Show feedback with relationships
- `PUT /api/feedback/{id}` - Update feedback
- `DELETE /api/feedback/{id}` - Delete feedback

### Absence Endpoints
- `GET /api/absences` - List all absences
- `POST /api/absences` - Create absence
- `GET /api/absences/{id}` - Show absence
- `PUT /api/absences/{id}` - Update absence
- `DELETE /api/absences/{id}` - Delete absence

---

## Security Features

1. **CSRF Protection**: All state-changing requests require CSRF token
2. **Password Hashing**: Bcrypt hashing for passwords
3. **Rate Limiting**: Login attempts limited to 5 per minute
4. **Two-Factor Authentication**: Optional 2FA via Fortify
5. **SQL Injection Protection**: Eloquent ORM uses parameterized queries
6. **XSS Protection**: Vue.js automatically escapes content
7. **Authorization**: Role-based access control
8. **Session Security**: Secure session cookies

---

## Troubleshooting

### Common Issues

1. **CSRF Token Mismatch**
   - Clear browser cookies
   - Ensure `credentials: 'same-origin'` in fetch requests
   - Check meta tag has CSRF token

2. **Database Connection Error**
   - Verify `.env` database configuration
   - Ensure database file exists (SQLite)
   - Check database user permissions (MySQL/PostgreSQL)

3. **Route Not Found**
   - Run `php artisan route:clear`
   - Check route definitions in `routes/web.php` or `routes/api.php`

4. **Frontend Assets Not Loading**
   - Run `npm run build` or `npm run dev`
   - Check Vite server is running
   - Clear browser cache

5. **Permission Denied**
   - Check file permissions: `chmod -R 755 storage bootstrap/cache`
   - Ensure web server has write access

---

## Additional Resources

- **Laravel Documentation**: https://laravel.com/docs
- **Inertia.js Documentation**: https://inertiajs.com
- **Vue.js Documentation**: https://vuejs.org
- **Laravel Fortify**: https://laravel.com/docs/fortify
- **Laravel Sanctum**: https://laravel.com/docs/sanctum
- **PHPUnit**: https://phpunit.de

---

## Conclusion

This documentation provides a comprehensive overview of the MedHub e-Portfolio system architecture, implementation details, and development workflow. The system uses modern web technologies with Laravel backend and Vue.js frontend, integrated seamlessly through Inertia.js for a smooth single-page application experience.

