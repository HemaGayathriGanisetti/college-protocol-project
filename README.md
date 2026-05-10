# College Protocol App

A Full Stack College Protocol Management Application built with Spring Boot (Backend) and React Native (Frontend).  
This application helps students and college administrators manage college rules, labs, timetables, categories, and authentication in a secure and organized way.

---

# 📝 Project Overview

The College Protocol App is designed to digitize and simplify college protocol management.

This project allows users to:

- Register and login securely
- Access protected APIs using JWT Authentication
- View college rules and regulations
- View laboratory information
- Access timetable details
- Browse categories
- Manage student-related data
- Provide admin-level management features
- Use a mobile-friendly React Native frontend

This project demonstrates practical knowledge of:

- Full Stack Development
- REST API Development
- JWT Authentication
- Spring Security
- React Native Mobile Development
- Backend & Frontend Integration
- Database Management

---

# 🛠️ Tech Stack

## Backend

- Java 17 – Backend development
- Spring Boot – Backend framework
- Spring Security – API security
- JWT (JSON Web Token) – Authentication
- Spring Data JPA – Database operations
- Hibernate – ORM framework
- Maven – Dependency management
- MySQL – Database
- Postman – API testing

---

## Frontend

- React Native – Mobile application framework
- TypeScript – Strongly typed JavaScript
- React Navigation – Navigation between screens
- Axios – API calls
- Context API – Global state management
- AsyncStorage – Local token storage
- React Native Components – Mobile UI development

---

# ✨ Features

## 🔐 Authentication

- User Registration
- User Login
- JWT-based Authentication
- Secure API Access
- Protected Screens

---

## 📚 College Management

### 📋 Rules Management
- View college rules
- View detailed rule descriptions
- Category-based rules

### 🧪 Labs Management
- View laboratory details
- Search labs
- Lab information management

### 🗓️ Timetable Management
- View timetable
- Organized schedule display

### 📂 Category Management
- Browse categories
- Organized content structure

### 👨‍🎓 Student Management
- Student-related operations
- Secure access control

---

## 🎨 Frontend Features

- Modern Mobile UI
- Splash Screen
- Authentication Screens
- Search Functionality
- Settings Screen
- Dynamic Navigation
- Protected Routes
- Responsive Design

---

# 📂 Project Structure

# Backend (Spring Boot)

```bash
Backend/
└── protocolapp/
    ├── src/main/java/com/college/protocolapp
    │
    ├── config
    │   ├── DataInitializer.java
    │   └── SecurityConfig.java
    │
    ├── controller
    │   ├── AdminController.java
    │   ├── AuthController.java
    │   ├── CategoryController.java
    │   ├── LabController.java
    │   ├── RuleController.java
    │   ├── StudentController.java
    │   ├── TimetableController.java
    │   └── UserController.java
    │
    ├── dto
    │   ├── LoginRequest.java
    │   ├── LoginResponse.java
    │   ├── RegisterRequest.java
    │   ├── StudentRequest.java
    │   ├── StudentResponse.java
    │   ├── UserResponse.java
    │   ├── CategoryRequest.java
    │   └── CategoryResponse.java
    │
    ├── exception
    │   ├── ErrorResponse.java
    │   └── GlobalExceptionHandler.java
    │
    ├── model
    │   ├── Category.java
    │   ├── Lab.java
    │   ├── Role.java
    │   ├── Rule.java
    │   ├── Student.java
    │   ├── Timetable.java
    │   └── User.java
    │
    ├── repository
    │   ├── CategoryRepository.java
    │   ├── LabRepository.java
    │   ├── RuleRepository.java
    │   ├── StudentRepository.java
    │   ├── TimetableRepository.java
    │   └── UserRepository.java
    │
    ├── security
    │   ├── JwtAuthFilter.java
    │   └── JwtService.java
    │
    ├── service
    │   ├── AuthService.java
    │   ├── CategoryService.java
    │   ├── LabService.java
    │   ├── RuleService.java
    │   ├── StudentService.java
    │   └── TimetableService.java
    │
    ├── resources
    │   └── application.properties
    │
    └── ProtocolappApplication.java
```

---

# Frontend (React Native)

```bash
frontend/
├── src
│
├── components
│   └── RuleCard.tsx
│
├── constants
│
├── context
│
├── navigation
│
├── screens
│   ├── CategoriesScreen.tsx
│   ├── HomeScreen.tsx
│   ├── LabsScreen.tsx
│   ├── LoginScreen.tsx
│   ├── RuleDetailsScreen.tsx
│   ├── RulesScreen.tsx
│   ├── SearchScreen.tsx
│   ├── SettingsScreen.tsx
│   ├── SplashScreen.tsx
│   └── TimetableScreen.tsx
│
├── theme
│
├── utils
│
├── App.tsx
├── index.js
├── package.json
└── tsconfig.json
```

---

# 🔧 Backend Configuration (`application.properties`)

```properties
# Application Name
spring.application.name=protocolapp

# MySQL Database Configuration
spring.datasource.url=jdbc:mysql://localhost:3306/protocolapp
spring.datasource.username=YOUR_DB_USERNAME
spring.datasource.password=YOUR_DB_PASSWORD

# JPA / Hibernate
spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true

# Server Port
server.port=8080

# JWT Configuration
jwt.secret=YOUR_SECRET_KEY
jwt.expiration=36000000
```

⚡ Important: Replace database credentials with your actual MySQL credentials.

---

# ▶️ How to Run the Project

# 1️⃣ Clone Repository

```bash
git clone https://github.com/HemaGayathriGanisetti/college-protocol-project.git
```

---

# 2️⃣ Setup MySQL Database

```sql
CREATE DATABASE protocolapp;
```

---

# 3️⃣ Run Backend

```bash
cd Backend/protocolapp

mvn clean install

mvn spring-boot:run
```

✅ Backend runs at:

```bash
http://localhost:8080
```

---

# 4️⃣ Run Frontend

```bash
cd frontend

npm install

npx react-native start
```

---

# ▶️ Run Android App

Open another terminal:

```bash
npx react-native run-android
```

---

# 🔑 Important Notes

- Make sure backend is running before frontend
- MySQL server must be active
- JWT token is used for secured APIs
- Android Emulator or Physical Device required for React Native

---

# 🔑 API Endpoints

# 🔓 Public APIs

| Method | Endpoint | Description |
|---|---|---|
| POST | `/auth/register` | Register new user |
| POST | `/auth/login` | Login user |

---

# 🔐 Secured APIs

## Categories

| Method | Endpoint | Description |
|---|---|---|
| GET | `/categories` | Get all categories |

---

## Rules

| Method | Endpoint | Description |
|---|---|---|
| GET | `/rules` | Get all rules |
| GET | `/rules/{id}` | Get rule by ID |

---

## Labs

| Method | Endpoint | Description |
|---|---|---|
| GET | `/labs` | Get all labs |
| GET | `/labs/{id}` | Get lab by ID |

---

## Timetable

| Method | Endpoint | Description |
|---|---|---|
| GET | `/timetable` | Get timetable |

---

## Students

| Method | Endpoint | Description |
|---|---|---|
| GET | `/students` | Get students |
| POST | `/students` | Add student |

---

# 📬 Testing APIs with Postman

## 1️⃣ Install Postman

https://www.postman.com/downloads/

---

## 2️⃣ Test Public APIs

- `POST /auth/register`
- `POST /auth/login`

Login returns JWT token.

---

## 3️⃣ Test Secured APIs

Use header:

```bash
Authorization: Bearer YOUR_JWT_TOKEN
```

Example:

```bash
GET /rules
GET /labs
GET /categories
```

---

# ⚙️ Prerequisites

Before running this project, install:

- Java 17
- Maven
- MySQL
- Node.js
- npm
- Android Studio
- React Native CLI
- Postman (Optional)
- VS Code / Eclipse / IntelliJ IDEA

---

# ⚠️ Troubleshooting

| Problem | Cause | Solution |
|---|---|---|
| Backend not starting | MySQL not running | Start MySQL service |
| Authentication failed | Invalid JWT token | Login again |
| API not working | Backend server stopped | Run Spring Boot server |
| React Native build failed | Dependencies missing | Run `npm install` |
| Android build failed | Invalid drawable name | Use lowercase image names |
| Metro Bundler issue | Cache issue | Run `npx react-native start --reset-cache` |

---

# 🚀 Future Enhancements

- Admin Dashboard
- Push Notifications
- Attendance Management
- Dark Mode
- Cloud Deployment
- Role-Based Access Control
- Profile Management
- File Upload Support

---

# 👩‍💻 Author

**Gayathri Ganisetti**

GitHub Repository:

https://github.com/HemaGayathriGanisetti/college-protocol-project
