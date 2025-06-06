# Inventory-Management-System

**EasyManage Inventory Management System**  
A fullstack web application for managing inventory. Built with React (frontend), Node.js/Express (backend), and MongoDB Atlas (cloud database). Easily track and manage your inventory with a modern, user-friendly interface.

*(This project is actively maintained)*

---

## Features

- Add and manage dairy products (milk, cheese, butter/cream) via intuitive forms  
- Cloud database: All data is stored securely and accessible globally using MongoDB Atlas  
- Breadcrumb navigation: Easily move between Home, Inventory, and Product pages  
- Responsive UI: Works smoothly on desktop and mobile devices  
- Feedback alerts: Instant success/error messages for user actions  
- Secure: Sensitive credentials hidden via `.env` and `.gitignore`  
- One-command startup: Run backend and frontend servers together with a single command  

---

## How It Works

1. User logs in and navigates to the Inventory page  
2. Selects a product category (Milk, Cheese, Butter/Cream) and fills out the product form  
3. Submits the form; data is sent to the Node.js/Express backend API  
4. Backend saves the inventory entry in the appropriate MongoDB Atlas collection  
5. Success or error feedback is shown to the user  
6. All inventory data is securely stored and accessible from anywhere with internet  

---

## Notes

- You **must** have a MongoDB Atlas account and cluster set up  
- A `.env` file containing your MongoDB URI is required in the `/backend` folder  
- The `.env` file **must not** be committed to GitHub for security reasons  
- Designed for easy deployment and collaboration—clone, setup `.env`, and run  

---

## Folder Structure

```Inventory-Management-System/
│
├── backend/ # Node.js/Express API server
│ ├── server.js
│ ├── package.json
│ ├── .env.example # Example environment variables
│ └── ... # Other backend files
│
├── view/ # React frontend
│ ├── src/
│ ├── package.json
│ └── ... # Other frontend files
│
├── .gitignore # Ignore node_modules, .env, etc.
├── package.json # Root: scripts for running both servers
├── run.bat # (Optional) Windows batch script to start backend + frontend
└── README.md # This file

```
---

## Prerequisites

- Node.js (v16 or newer recommended)  
- npm (comes with Node.js)  
- MongoDB Atlas account and cluster  

---

## Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/Inventory-Management-System.git
   cd Inventory-Management-System

2.**Set up environment variables**

In /backend, create a .env file:

  ```inis
    MONGODB_URI=your-mongodb-atlas-uri
    Note: Never commit your real .env file. Use .env.example for sharing variable names.
```
3. **Install dependencies**

```bash
    npm run install-all
    Or install backend and frontend separately:
```    
  ```bash
    cd backend && npm install
    cd ../view && npm install
    Run the project
```   
  **From the root folder:**
    
 ``` bash
    npm run dev
    Or on Windows, double-click run.bat.
    
    Backend runs on http://localhost:3000

    Frontend runs on http://localhost:3001 (or next available port)
```

## Usage
-Open your browser and go to http://localhost:3001

-Use navigation to access Inventory and product forms

-Add, view, and manage dairy products easily

-All data securely stored in MongoDB Atlas

## Security
-.env and other sensitive files are included in .gitignore

-Never share your real credentials publicly

-Use .env.example to share environment variable keys

## Contributing
Contributions, issues, and feature requests are welcome! Feel free to fork the repository and submit pull requests.

## Author
Aditi Ritesh Dixit
LinkedIn: https://www.linkedin.com/in/aditi-dixit-895b551b5/

**Enjoy using EasyManage to keep your café inventory organized, anywhere, anytime!**

