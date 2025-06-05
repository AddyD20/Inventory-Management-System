# Inventory-Management-System
EasyManage Inventory Management System
A fullstack web application for managing inventory.
Built with React (frontend), Node.js/Express (backend), and MongoDB Atlas (cloud database).
Easily track and manage your inventory with a modern, user-friendly interface.

Features
Add and manage dairy products (milk, cheese, butter/cream) via intuitive forms

Cloud database: All data is stored securely and globally accessible using MongoDB Atlas

Breadcrumb navigation: Easily move between Home, Inventory, and Product pages

Responsive UI: Works on desktop and mobile

Feedback alerts: Get instant success/error messages on actions

Secure: Sensitive credentials are hidden via .env and .gitignore

One-command startup: Run both backend and frontend together with a single command

How It Works
User logs in and navigates to the Inventory page

Selects a product category (Milk, Cheese, Butter/Cream) and fills out the form

Submits the form: Data is sent to a Node.js/Express backend

Backend saves the entry to the correct collection in MongoDB Atlas

Success or error feedback is shown to the user

All inventory is accessible from anywhere—no local database needed

Notes
You must have a MongoDB Atlas account and cluster set up

The .env file (with your MongoDB URI) is required in the /backend folder but must not be committed to GitHub

The app is designed for easy deployment and collaboration—just clone, set up .env, and run

Folder Structure
text
Inventory-Management_System/
│
├── backend/         # Node.js/Express API server
│   ├── server.js
│   ├── package.json
│   ├── .env.example # Example environment variables
│   └── ... (other backend files)
│
├── view/            # React frontend
│   ├── src/
│   ├── package.json
│   └── ... (frontend files)
│
├── .gitignore       # Ignores node_modules, .env, etc.
├── package.json     # Root: scripts for running both servers
├── run.bat          # (Optional) Windows batch script to start both servers
└── README.md        # This file
Prerequisites
Node.js (v16+ recommended)

npm (comes with Node.js)

MongoDB Atlas account and cluster

Installation
1. Clone the Repository
bash
git clone https://github.com/yourusername/Inventory-Management-System.git
cd Inventory-Management-System
2. Set Up Environment Variables
In /backend, create a .env file:

text
MONGODB_URI=your-mongodb-atlas-uri
(Never commit your real .env! Use .env.example for sharing variable names.)

3. Install Dependencies
bash
npm run install-all
or, if you don’t have the root script, install separately:

bash
cd backend && npm install
cd ../view && npm install
4. Run the Project
With one command (from project root):

bash
npm run dev
Or, double-click run.bat (Windows only).

Backend runs on http://localhost:3000

Frontend runs on http://localhost:3001 (or next available port)

Usage
Go to http://localhost:3001 in your browser

Use the navigation to access Inventory and product forms

Add, view, and manage dairy products

All data is stored securely in MongoDB Atlas

Security
.env and other sensitive files are gitignored

Never share your real credentials—use .env.example for variable names

Contributing
Contributions, issues, and feature requests are welcome!
Feel free to fork the repository and submit pull requests.

Author
Aditi Ritesh Dixit
LinkedIn: https://www.linkedin.com/in/aditi-dixit-895b551b5/

Enjoy using EasyManage to keep your café inventory organized, anywhere, anytime!
