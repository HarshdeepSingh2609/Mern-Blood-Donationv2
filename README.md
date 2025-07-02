# 🩸 Blood Donation MERN Stack Web App:https://mern-blood-donation-frontend.vercel.app/mainpage

A role-based full-stack blood donation management platform built with the MERN stack (MongoDB, Express.js, React.js, Node.js). This platform facilitates seamless interaction between **Donors**, **Hospitals**, **Organizations**, and **Admins**, ensuring transparent, secure, and streamlined blood donation and management.

---

## 🔗 Live Site
https://mern-blood-donation-frontend.vercel.app/mainpage

## 📌 Table of Contents

- [🔍 About the Project](#-about-the-project)
- [🧑‍🤝‍🧑 User Roles & Permissions](#-user-roles--permissions)
- [⚙️ Features](#️-features)
- [🧰 Tech Stack](#-tech-stack)
-
---

## 🔍 About the Project

This project aims to digitize and manage blood donations through a **role-based access system** and an **inventory-driven approach**.

- Users can register/login as **Donor**, **Hospital**, **Organization**, or **Admin**
- **Donors** can donate blood only after registration
- **Hospitals** can **request** or **donate** blood, but only via a connected **Organization**
- **Organizations** manage the blood inventory, approve requests, and mediate between **donors** and **hospitals**
- **Admins** have full access to all users, organizations, and donation logs

---

## 🧑‍🤝‍🧑 User Roles & Permissions

| Role       | Permissions |
|------------|-------------|
| **Donor**  | 🔹 Register/Login<br>🔹 Donate blood via an organization<br>🔹 View donation history |
| **Hospital** | 🔹 Request blood<br>🔹 Donate surplus blood via organization<br>🔹 View donation records |
| **Organization** | 🔹 Manage donors & hospitals<br>🔹 Approve/Reject requests<br>🔹 Handle inventory<br>🔹 View analytics |
| **Admin** | 🔹 Full access to all users and data<br>🔹 Manage organizations<br>🔹 View and control complete donation pipeline |

---

## ⚙️ Features

- 🧑 Role-based login and dashboards (Donor, Hospital, Org, Admin)
- 🩸 Donate and request blood through verified organizations
- 📦 Inventory system for each organization
- 🕓 Track past donations & eligibility
- 🔍 Filter by blood group, location, or availability
- ✅ Admin moderation and access control
- 🧾 Secure registration with validation


---

## 🧰 Tech Stack

**Frontend**:
- React.js
- Redux Toolkit
- Axios
- Tailwind CSS / Bootstrap

**Backend**:
- Node.js
- Express.js
- MongoDB (Mongoose ODM)
- JWT for Auth
- Bcrypt for password hashing

**Deployment**:
- Frontend: Vercel 
- Backend: Render
- Database: MongoDB Atlas

---

