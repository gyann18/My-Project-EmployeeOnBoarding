# 👩‍💼 Employee Onboarding Application

A full-stack employee onboarding system designed to simplify and manage the process of adding, authenticating, and searching employees in an organization. 
This project is built using **React.js** for the frontend and **Node.js with Express** for the backend, storing employee data in a JSON-formatted text file.

---

## 🛠️ Tech Stack

| Layer      | Technology         |
|------------|--------------------|
| Frontend   | React.js           |
| Backend    | Node.js, Express.js|
| Database   | employees.txt (JSON Format) |
| IDE        | Visual Studio Code |
| API Client | Axios              |
| Security   | CORS Middleware    |

---

## 🌐 Features

- 🔐 **Login with ID & Password**  
- 🔍 **Employee Search by ID or Year**
- ➕ **Add New Employee Records**
- 📄 **Data saved to a simple `employees.txt` file**
- 📈 **Search Metrics: Total Searches, Success Rate, Time to Fill**
- 🚀 **RESTful API integration between frontend and backend**

---

## 🖥️ Frontend (React.js)

- Built using `create-react-app`
- Components for login, add employee, and employee search
- Axios used for API calls
- Displays error messages for invalid logins or empty fields

---

## 🗄️ Backend (Node.js + Express)

- `server.js` sets up the server, routes, and middleware
- Routes:
  - `/login` — Authenticates employee
  - `/addEmployee` — Adds a new record
  - `/search` — Finds employee by ID or year
- Middleware used for:
  - Body parsing
  - CORS
  - Error handling
- Reads & writes to `employees.txt` file

---

## 📁 Database Design

- All employee records are saved as JSON in `employees.txt`
- Fields:
  - Name
  - ID
  - Address
  - Contact
  - Salary
  - Date of Joining

---

## 🚀 How to Run the Project

### 1. Clone the Repo
```bash
git clone https://github.com/gyann18/My-Project-EmployeeOnBoarding.git
cd onboarding-backend
## 📊 Project Presentation

📥 [Download PDF Presentation](EmployeeOnboardingApplicationPPT-5.pdf)
