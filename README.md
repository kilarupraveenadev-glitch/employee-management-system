# Employee Management System

A full-stack Employee Management System built using **React, Spring Boot, and PostgreSQL**.

The application allows users to add, view, update, search, sort, and delete employee records through a React frontend connected to a Spring Boot REST API.

---

## 🚀 Live Application

### Frontend

**Employee Management UI**

https://employee-management-frontend-i409.onrender.com

### Backend API

**Spring Boot REST API**

https://employee-management-system-m5d0.onrender.com

### Swagger API Documentation

**Swagger UI**

https://employee-management-system-m5d0.onrender.com/swagger-ui/index.html

---

## ✨ Features

- Add employee
- View all employees
- View employee by ID
- Update employee
- Delete employee
- Search employees
- Sort employee data
- Pagination
- Employee dashboard
- Form validation
- Error handling
- Email validation
- Unique employee email
- REST API
- Swagger / OpenAPI documentation
- PostgreSQL database integration
- Production deployment using Render

---

## 🛠️ Technologies Used

### Frontend

- React
- Vite
- JavaScript
- Axios
- CSS

### Backend

- Java 17
- Spring Boot
- Spring Data JPA
- Jakarta Validation
- Maven

### Database

- PostgreSQL

### API Documentation

- Swagger
- OpenAPI

### Deployment

- GitHub
- Render

---

## 🏗️ Application Architecture

```text
                    ┌──────────────────────┐
                    │    React Frontend    │
                    │       + Vite         │
                    └──────────┬───────────┘
                               │
                               │ Axios / HTTP
                               ▼
                    ┌──────────────────────┐
                    │   Spring Boot REST   │
                    │         API          │
                    └──────────┬───────────┘
                               │
                               │ Spring Data JPA
                               ▼
                    ┌──────────────────────┐
                    │      PostgreSQL      │
                    │       Database       │
                    └──────────────────────┘
```

---

## 🔄 Application Flow

```text
React Frontend
      |
      | Axios
      ↓
Spring Boot REST API
      |
      | Spring Data JPA
      ↓
PostgreSQL Database
```

---

## 🌐 Production URLs

| Component | URL |
|---|---|
| Frontend | https://employee-management-frontend-i409.onrender.com |
| Backend | https://employee-management-system-m5d0.onrender.com |
| Swagger | https://employee-management-system-m5d0.onrender.com/swagger-ui/index.html |
| Employee API | https://employee-management-system-m5d0.onrender.com/api/employees |

---

## 📡 REST API

### Get All Employees

```http
GET /api/employees
```

Returns all employee records.

### Get Employee By ID

```http
GET /api/employees/{id}
```

Returns a specific employee using their ID.

### Add Employee

```http
POST /api/employees
```

Creates a new employee.

Example request:

```json
{
  "firstName": "John",
  "lastName": "Smith",
  "email": "john.smith@gmail.com",
  "department": "Development",
  "salary": 60000
}
```

### Update Employee

```http
PUT /api/employees/{id}
```

Updates an existing employee.

Example request:

```json
{
  "firstName": "John",
  "lastName": "Smith",
  "email": "john.smith@gmail.com",
  "department": "Testing",
  "salary": 65000
}
```

### Delete Employee

```http
DELETE /api/employees/{id}
```

Deletes an employee using their ID.

---

## 📋 REST API Summary

| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/employees` | Get all employees |
| GET | `/api/employees/{id}` | Get employee by ID |
| POST | `/api/employees` | Add employee |
| PUT | `/api/employees/{id}` | Update employee |
| DELETE | `/api/employees/{id}` | Delete employee |

---

## 👤 Employee Information

Each employee contains the following information:

| Field | Description |
|---|---|
| ID | Unique employee ID |
| First Name | Employee first name |
| Last Name | Employee last name |
| Email | Employee email address |
| Department | Employee department |
| Salary | Employee salary |

---

## 🔍 Search and Sorting

The frontend provides employee search functionality.

Users can search employees using:

- First name
- Last name
- Email
- Department

Employee information can also be sorted using table columns such as:

- First name
- Last name
- Email
- Department
- Salary

---

## 📄 Pagination

Employee records are displayed using pagination.

The application displays a limited number of employees per page and provides:

- Previous page
- Next page
- Current page information

---

## 📊 Employee Dashboard

The dashboard provides a summary of employee information.

It displays:

- Total employees
- Number of departments
- Total salary

---

## ✅ Validation

The application performs validation when creating and updating employees.

Validation includes:

- First name is required
- Last name is required
- Email is required
- Email must be valid
- Email must be unique
- Salary is required
- Salary cannot be negative

---

## 📸 Screenshots

### Dashboard

![Dashboard](screenshots/dashboard.png)

### Employee List

![Employee List](screenshots/employee-list.png)

### Add/Edit Employee

![Employee Form](screenshots/employee-form.png)

### Swagger API

![Swagger API](screenshots/swagger.png)

> Make sure these image files exist inside the `screenshots` folder in the repository.

---

## 📁 Project Structure

```text
employee-management-system
│
├── backend
│   └── employee-management
│       │
│       ├── src
│       │   ├── main
│       │   │   ├── java
│       │   │   │   └── com
│       │   │   │       └── praveena
│       │   │   │           └── employeemanagement
│       │   │   │               ├── controller
│       │   │   │               ├── entity
│       │   │   │               ├── repository
│       │   │   │               ├── service
│       │   │   │               └── EmployeeManagementApplication.java
│       │   │   │
│       │   │   └── resources
│       │   │       └── application.properties
│       │   │
│       │   └── test
│       │
│       ├── pom.xml
│       ├── mvnw
│       └── mvnw.cmd
│
├── frontend
│   └── employee-management-ui
│       │
│       ├── public
│       ├── src
│       │   ├── App.jsx
│       │   ├── App.css
│       │   └── main.jsx
│       │
│       ├── package.json
│       ├── package-lock.json
│       └── vite.config.js
│
├── screenshots
│   ├── dashboard.png
│   ├── employee-list.png
│   ├── employee-form.png
│   └── swagger.png
│
├── .gitignore
└── README.md
```

---

# 💻 How to Run Locally

## Prerequisites

Make sure the following are installed:

- Java 17
- Maven
- PostgreSQL
- Node.js
- npm
- Git

---

## 1. Clone the Repository

```bash
git clone https://github.com/kilarupraveenadev-glitch/employee-management-system.git
```

Navigate into the project:

```bash
cd employee-management-system
```

---

# 🔧 Backend Setup

Navigate to the backend:

```bash
cd backend/employee-management
```

---

## Database Configuration

The application uses PostgreSQL.

Configure the database connection in:

```text
backend/employee-management/src/main/resources/application.properties
```

Example local configuration:

```properties
spring.application.name=employee-management

spring.datasource.url=jdbc:postgresql://localhost:5432/employee_management
spring.datasource.username=${SPRING_DATASOURCE_USERNAME:postgres}
spring.datasource.password=${SPRING_DATASOURCE_PASSWORD:your_password}

spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
spring.jpa.properties.hibernate.format_sql=true

server.port=${PORT:8080}
server.address=0.0.0.0
```

> Do not commit real database passwords to GitHub.

---

## Start the Backend

On Windows:

```bash
mvnw.cmd spring-boot:run
```

On macOS/Linux:

```bash
./mvnw spring-boot:run
```

Backend will run at:

```text
http://localhost:8080
```

---

# 🎨 Frontend Setup

Open another terminal.

Navigate to:

```bash
cd frontend/employee-management-ui
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Frontend will run at:

```text
http://localhost:5173
```

---

# 🔐 Frontend Environment Variable

The production frontend uses the following environment variable:

```text
VITE_API_URL=https://employee-management-system-m5d0.onrender.com
```

The frontend uses this variable to communicate with the deployed Spring Boot backend.

The API URL is used for:

- GET employees
- POST employee
- PUT employee
- DELETE employee

For local development, you can create:

```text
frontend/employee-management-ui/.env
```

Example:

```env
VITE_API_URL=http://localhost:8080
```

For production, configure the environment variable in Render:

```text
VITE_API_URL=https://employee-management-system-m5d0.onrender.com
```

Do not commit `.env` files containing sensitive information.

---

# 📖 Swagger / OpenAPI

Swagger is used to document and test the REST API.

### Production Swagger

```text
https://employee-management-system-m5d0.onrender.com/swagger-ui/index.html
```

Swagger provides an interactive interface for testing:

```text
GET     /api/employees
GET     /api/employees/{id}
POST    /api/employees
PUT     /api/employees/{id}
DELETE  /api/employees/{id}
```

---

# ☁️ Deployment

The application is deployed using **Render**.

The source code is hosted on GitHub.

```text
                    GitHub
                       |
              ┌────────┴────────┐
              │                 │
              ▼                 ▼
        Render Frontend    Render Backend
              │                 │
              │                 ▼
              │             PostgreSQL
              │
              ▼
        React Application
```

### Frontend

```text
https://employee-management-frontend-i409.onrender.com
```

### Backend

```text
https://employee-management-system-m5d0.onrender.com
```

### Database

PostgreSQL is hosted and connected through the backend deployment.

Database credentials are configured through environment variables and are not stored in the source code.

---

# 🔒 Security

Sensitive configuration should not be committed to GitHub.

Production credentials should be configured using environment variables.

Backend environment variables include:

```text
SPRING_DATASOURCE_URL
SPRING_DATASOURCE_USERNAME
SPRING_DATASOURCE_PASSWORD
```

Frontend environment variable:

```text
VITE_API_URL
```

Make sure `.env` files are included in `.gitignore`.

Example:

```gitignore
.env
.env.local
```

---

# 🧪 Testing

The application can be tested through both the frontend and Swagger.

### Frontend Testing

Test the following operations:

- Add employee
- View employees
- Edit employee
- Delete employee
- Search employees
- Sort employees
- Pagination
- Form validation

### API Testing

Use Swagger to test:

```text
GET
POST
PUT
DELETE
```

---

# 🔄 CRUD Operations

The application supports complete CRUD functionality.

```text
Create
  ↓
POST /api/employees

Read
  ↓
GET /api/employees

Update
  ↓
PUT /api/employees/{id}

Delete
  ↓
DELETE /api/employees/{id}
```

---

# 📦 Build

## Build Frontend

```bash
cd frontend/employee-management-ui
npm run build
```

The production build will be generated in:

```text
dist/
```

## Build Backend

Navigate to:

```bash
cd backend/employee-management
```

Run:

```bash
mvnw.cmd clean package
```

The generated JAR file will be available inside:

```text
target/
```

---

# 🛠️ Error Handling

The application provides error handling for common scenarios such as:

- Invalid employee information
- Missing required fields
- Invalid email
- Duplicate email
- Negative salary
- Backend connection errors
- Employee not found
- Delete/update failures

---

# 🎯 Future Improvements

Possible future enhancements include:

- Employee authentication and login
- Role-based access control
- Employee profile pages
- Department management
- Advanced filtering
- Salary statistics and charts
- Export employees to Excel/CSV
- Unit and integration testing
- Automated CI/CD pipeline
- Improved mobile responsiveness

---

# 👨‍💻 Author

**Praveena**

Full-Stack Developer

---

## ⭐ Project Summary

This project demonstrates a complete full-stack application using:

```text
React
   +
Spring Boot
   +
Spring Data JPA
   +
PostgreSQL
   +
REST API
   +
Swagger
   +
Render
```

The application is deployed and available online through the production URLs listed above.