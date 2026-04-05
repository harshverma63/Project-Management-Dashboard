# 🗂️ Project Management Dashboard (React v19)

A role-based **Project & Task Management Dashboard** built with React, demonstrating authentication logic, state management, task filtering, and dynamic UI rendering using real-world data scenarios. A practical React project showcasing core frontend skills, problem-solving, and real-world application structure.

**Live Demo:** *(Deploy to Vercel — see instructions below)*

---

## 🔑 Login Credentials

**Project Manger Login:**
- **ID:** `PM0001`
- **Password:** `pm@secure`

**Employee Logins:**
- **Employee ID:** `EMP0001`
- **Password:** `admin`

> **NOTE:**
> 1. For more employee logins, just increment the last digit(s) of the Employee ID — the password is `admin` for all employees.
> 2. You can access employees from `EMP0001` to `EMP0100` using the same password.

---

## 🔧 Tech Stack

`React.js v19` | `JavaScript (ES6+)` | `useState` | `useEffect` | `Local Storage` | `GitHub-hosted JSON API` | `CSS (Dark Theme)`

---

## ✨ Key Features

- 🔐 **Role-based Login** — Separate access for Employees and HR managers
- 📦 **API-based Data Fetching** — Live employee and task data from GitHub-hosted JSON APIs
- 💾 **Persistent Login** — Session maintained via Local Storage across page refreshes
- 👨‍💼 **Employee Dashboard** — View profile, logged-in user info, and task list
- 🧑‍💻 **HR Dashboard** — Full visibility of all tasks; ability to reassign tasks to any employee
- 🔍 **Live Task Search** — Real-time search across task subjects
- 📊 **Task Filtering** — Filter by Status (All / In Progress / Completed / etc.) and Priority (All / Low / Medium / High)
- 👤 **My Tasks Toggle** — Employees can toggle between their tasks and all tasks
- 📋 **Task Detail Popup** — Click any task to see full details: description, comments, due date, progress, priority, required hours, and assigned employee
- 🔄 **Task Reassignment** — HR can search and reassign tasks to any employee from within the task popup
- 📢 **Welcome Popup** — Conditional first-time welcome screen for new visitors
- 🚪 **Logout** — Clears session and returns to login screen

---

## 🔄 Workflow

1. App launches with a **Welcome Popup**
2. User proceeds to the **Login Page**
3. Credentials are validated against the live employee API
4. Session is saved to **Local Storage**
5. Dashboard renders based on role:
   - **Employee** → sees their task list, can filter, search, and view task details
   - **HR (HR0149)** → sees all tasks, can reassign tasks to other employees
6. **Logout** clears session and resets the app

---

## 🗂️ Project Structure

```
src/
├── App.jsx                          # Root component
├── App.css
├── index.css
├── main.jsx
└── Components/
    ├── Project.jsx                  # Main orchestrator — handles auth state & routing
    ├── Login.jsx                    # Login form with API validation
    ├── LocalStorage.jsx             # Helper for get/set localStorage
    ├── StartingPopUp.jsx            # Welcome popup on first load
    ├── TeamAPI.json                 # Local fallback team data
    ├── ProjectUser.css
    ├── User/
    │   ├── EmpHeader.jsx            # Header with user info and logout
    │   ├── LoggedUser.jsx           # Post-login employee landing page
    │   ├── Hamburger.jsx            # Mobile nav toggle
    │   └── hamburger.css
    └── Task/
        ├── TaskManager.jsx          # Core task logic — filtering, popup state
        ├── TaskHeader.jsx           # Task section header
        ├── TaskList.jsx             # Renders the list of task cards
        ├── TaskPopUp.jsx            # Task detail modal with reassignment
        ├── Filters.jsx              # Search, status, priority, my-tasks filters
        ├── Task.json                # Task meta (statuses, priorities)
        └── task.css
```

---

## 📌 Highlights

- Implemented **role-based conditional rendering** (HR vs Employee views)
- Managed state and lifecycle exclusively using **React Hooks** (`useState`, `useEffect`)
- Built a **multi-filter system** combining live search, status, priority, and user-based filters simultaneously
- Designed **interactive task popup** with comments, progress, and live reassignment
- Simulated a real-world **frontend authentication flow** with persistent sessions

---

## ⚠️ Note

This project uses **mock authentication (frontend only)**. Credentials are validated against a publicly hosted JSON API. In production, secure backend authentication is recommended.

---

## 👨‍💻 Author

**Harsh Verma**