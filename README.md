# Employee Management System

A full-stack Employee Management System built with **React, Spring Boot, PostgreSQL, and Swagger/OpenAPI**.

The application allows users to manage employee information through a modern React frontend connected to a Spring Boot REST API.

---

## 🚀 Features

### Employee Management

- Add new employees
- View all employees
- View employee details
- Update employee information
- Delete employees
- Search employees
- Sort employee data
- Pagination

### Dashboard

- Total employee count
- Total number of departments
- Total salary

### Validation & Error Handling

- Required field validation
- Email validation
- Salary validation
- Duplicate email handling
- User-friendly error messages
- Delete confirmation

### API

- RESTful API
- Swagger/OpenAPI documentation
- CRUD operations
- Spring Data JPA integration

---

## 🛠️ Technology Stack

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

- Swagger / OpenAPI

---

## 🏗️ Application Architecture

```text
┌──────────────────────────────┐
│        React Frontend        │
│          Vite + CSS          │
└──────────────┬───────────────┘
               │
               │ Axios / HTTP
               ▼
┌──────────────────────────────┐
│      Spring Boot REST API    │
│                              │
│        Controller            │
│             ↓                │
│         Service              │
│             ↓                │
│       Spring Data JPA        │
└──────────────┬───────────────┘
               │
               │ JDBC
               ▼
┌──────────────────────────────┐
│          PostgreSQL          │
│        employees table       │
└──────────────────────────────┘