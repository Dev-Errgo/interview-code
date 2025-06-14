# Name: P. Dhanraj
# R.No: RA2211032020004
# Email: dp8328@srmist.edu.in, dhanraj.ra0004@gmail.com
# College: SRM Institute of Science and Technology
# Description: Made changes in TODOS in frontend and backend. 
# Errgo Code Assessment - Full Stack Application

A full-stack web application built with React frontend and Node.js backend, featuring real-time chat functionality using WebSockets.

## 🚀 Features

- *Frontend*: Modern React application with TypeScript
- *Backend*: Node.js API with JSON data handling
- *Real-time Chat*: Cross-platform WebSocket-based messaging system
- *Responsive Design*: Clean and intuitive user interface
- *Navigation*: Seamless routing between different pages

## 📁 Project Structure


├── Frontend/           # React TypeScript application
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   └── ...
│   └── README.md
├── Backend/            # Node.js server
│   ├── src/
│   └── README.md
└── README.md          # This file


## 🛠 Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn package manager

### Backend Setup
1. Navigate to the backend directory:
   bash
   cd Backend
   

2. Install dependencies:
   bash
   npm install
   

3. Start the server:
   bash
   npm start
   

### Frontend Setup
1. Navigate to the frontend directory:
   bash
   cd Frontend
   

2. Install dependencies:
   bash
   npm install
   

3. Start the development server:
   bash
   npm start
   

## 🌐 Usage

1. *Main Application*: Navigate to http://localhost:3000 to access the main application
2. *Project Page*: The default route redirects to /project
3. *Chat System*: Access the real-time chat at /chat

## ✨ Key Implementation Details

### Frontend Changes
- *Navigation Enhancement*: Added setSidebarVisible() function in toggleSidebar()
- *Component Updates*: Modified TopNavbar.tsx with new props and functionality
- *Routing*: Added default redirect to /project in main.tsx
- *Form Handling*: Updated onSubmit() method in ProjectPage.tsx

### Backend Changes
- *JSON Processing*: Implemented JSON parsing functionality
- *Response Management*: Added response handling to push data to lists
- *API Endpoints*: Completed TODO items for full round-trip data flow

### Bonus Challenge - Real-time Chat
- *WebSocket Integration*: Implemented cross-platform chatting using WebSockets
- *Live Messaging*: Real-time message display across multiple users
- *Simple UI*: Clean chat interface with text input and send button
- *Backend State*: Chat messages stored in server memory (resets on restart)

## 🔧 Chat System Configuration

The chat system runs on your local LAN IP address. To test with other devices:

1. Find your local IP address
2. Replace the IP address in the ChatPage component (Frontend)
3. Ensure both devices are on the same network

## 📋 TODO Completion

All scattered TODOs across both directories have been completed to implement:
- Full round-trip data flow
- Frontend-backend integration
- Data population and display
- Clean, concise code with proper documentation

## 🏆 Bonus Features

- ✅ Real-time chat system with WebSockets
- ✅ Multiple user support in single session
- ✅ Live message broadcasting
- ✅ Cross-platform compatibility
- ✅ Server-side message state management

## 🧪 Testing

1. Start both frontend and backend servers
2. Open multiple browser tabs/windows to test multi-user chat
3. Test on different devices using the LAN IP address
4. Verify real-time message synchronization

## 📚 Code Quality

This project maintains high code quality standards:
- *Clean Code*: Well-structured and readable implementation
- *Conciseness*: Efficient solutions without unnecessary complexity
- *Documentation*: Comprehensive TSDoc comments throughout
- *TypeScript*: Full type safety in frontend components

## 🤝 Contributing

This project was developed as part of the Errgo Code Assessment. For any questions or issues, please refer to the individual README files in the Frontend and Backend directories.

## 📞 Contact

For submission and evaluation, this repository has been shared with: errgo.project@gmail.com

---

*Note*: Make sure to update the WebSocket IP address in the ChatPage component to match your local network configuration for cross-device testing.
