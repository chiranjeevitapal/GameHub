# **Game Manager Application**

![Hosted Image](https://i.postimg.cc/fyXdj5Wy/Screenshot-2024-12-12-193238.png)

This is a comprehensive **Game Management Application** designed to streamline game administration and configuration. It aims to provide features such as:

- **Game Configuration**: Manage and customize game settings seamlessly.  
- **Segmentation**: Organize and categorize games for better management.  
- **A/B Testing**: Test game configurations to optimize performance and user experience.  

## **Current Implementation**
The current version of the application includes:

- **Backend**: Built with **Node.js** and **Express** for efficient API and data management.  
- **Frontend**: Developed with **React.js** for an interactive and user-friendly interface.

---

> **Note**: This project is a **work in progress**, and additional features like segmentation, configuration management, and A/B testing are part of the intended roadmap.

---

## **Table of Contents**
1. [Features](#features)
2. [Prerequisites](#prerequisites)
3. [Installation](#installation)
4. [Usage](#usage)
5. [Scripts](#scripts)
6. [Folder Structure](#folder-structure)
7. [API Routes](#api-routes)
8. [Technologies Used](#technologies-used)

---

## **Features**
- Add new games with details such as **name, description, genre, image**, and **downloads**.
- Edit existing games with pre-filled data.
- Upload and display game images.
- View a grid of games with their details.

---

## **Prerequisites**
Make sure you have the following installed:
- **Node.js** (v14+)
- **Yarn** (latest version)

---

## **Installation**

1. **Clone the Repository**:
   ```bash
   git clone git@github.com:chiranjeevitapal/GameHub.git
   cd GameHub

2. **Install Dependencies**:
   ```bash
   yarn install
3. **Start the Development Environment**:
   ```bash
   yarn dev

## **Usage**

1. **The server runs at http://localhost:3100**:
2. **The React frontend runs at http://localhost:3000**:


---

## **Folder Structure**
```plaintext
MYGAME/
├── client/                   # React frontend files
│   ├── public/               # Public assets (index.html, icons)
│   ├── src/                  # Source code
│   │   ├── components/       # React components
│   │   │   ├── add-game.js   # Add game component
│   │   │   ├── edit-game.js  # Edit game component
│   │   │   ├── games.js      # Main games component
│   │   │   └── GameFormModal.js # Shared form modal
│   │   ├── context/          # Context API for state management
│   │   │   └── GameContext.js
│   │   ├── services/         # API service calls
│   │   │   └── gameService.js
│   │   ├── styles/           # Styling files (CSS, Tailwind)
│   │   │   ├── App.css       # Global App styling
│   │   │   └── index.css     # General Tailwind styles
│   │   ├── App.js            # Main App component
│   │   ├── index.js          # React entry point
│   │   └── tailwind.config.js # Tailwind configuration
│   ├── package.json          # Frontend dependencies
│   └── node_modules/         # Frontend dependencies folder
│
├── server/                   # Backend server files
│   ├── public/               # Static files served by the backend
│   │   └── images/           # Game images
│   │       ├── aftermath-survival.png
│   │       ├── dragon-slayer.png
│   │       ├── enchanted-realms.png
│   │       ├── haunted-manor.png
│   │       ├── heros-journey.png
│   │       ├── mystic-sorcerer.png
│   │       ├── neon-racers.png
│   │       ├── offroad-mayhem.png
│   │       ├── pirates-treasure.png
│   │       └── space-marine-saga.png
│   ├── server.js             # Main server entry point
│   ├── package.json          # Backend dependencies
│   └── node_modules/         # Backend dependencies folder
│
├── README.md                 # Project documentation
├── package.json              # Root package.json for orchestration
├── yarn.lock                 # Yarn lock file
└── .gitignore                # Ignored files and folders
```

---

## **API Routes**

| **Method** | **Endpoint**         | **Description**                |
|------------|----------------------|--------------------------------|
| **GET**    | `/api/games`         | Fetch all games                |
| **POST**   | `/api/games`         | Add a new game                 |
| **PUT**    | `/api/games/:id`     | Update an existing game by ID  |
| **DELETE** | `/api/games/:id`     | Delete a game by ID            |

---


## **Technologies Used**
**Backend**: Node.js, Express.js, Multer  <br />
**Frontend**: React.js, TailwindCSS <br />
**Tools**: Yarn, Concurrently


Here’s a **feature roadmap** for your Game Management Application, organized by **phases**. You can include this in your GitHub README file to show the planned features and structure for development.

---

## **Game Management Tool: Feature Roadmap** 🚀  

### **Phase 1: Basic Details (MVP)**
- **Objective**: Allow admins to add, edit, delete, and view basic game details.  
- **Features**:  
   - Add a new game using a modal window:  
     - Game Title  
     - Description  
     - Game Image (Upload or URL)  
     - Status (Active/Inactive)  
   - List all games on the dashboard in a table or card format.  
   - Edit and delete existing games.  
   - Backend API:  
     - `POST /api/admin/games` → Add a game.  
     - `GET /api/admin/games` → Fetch all games.  
     - `PUT /api/admin/games/{id}` → Update game details.  
     - `DELETE /api/admin/games/{id}` → Delete a game.  

---

### **Phase 2: Game Configuration**
- **Objective**: Allow admins to configure game settings.  
- **Features**:  
   - Add/edit game configurations:  
     - Gameplay Parameters: Difficulty, time limits, scoring.  
     - Rewards: In-game currency (coins, gems, etc.), levels.  
     - UI/UX Settings: Themes, button layouts, etc.  
   - Backend API:  
     - `POST /api/admin/games/{id}/config` → Add/update game configurations.  
     - `GET /api/admin/games/{id}/config` → Fetch game configurations.  

---

### **Phase 3: Segmentation**
- **Objective**: Organize users into segments for tailored experiences.  
- **Features**:  
   - Define segmentation rules:  
     - Geographic Location  
     - Device Type (Mobile/PC)  
     - User Behavior: Playtime, spending, DAU.  
   - View and manage existing segments.  
   - Backend API:  
     - `POST /api/admin/games/{id}/segments` → Add/update segments.  
     - `GET /api/admin/games/{id}/segments` → Fetch segment rules.  

---

### **Phase 4: A/B Testing**
- **Objective**: Run and manage A/B tests for game optimization.  
- **Features**:  
   - Create A/B tests:  
     - Define variants (Variant A, Variant B).  
     - Set metrics to track (e.g., retention, engagement, revenue).  
   - Monitor and analyze test results.  
   - Backend API:  
     - `POST /api/admin/games/{id}/abtests` → Create/update A/B tests.  
     - `GET /api/admin/games/{id}/abtests` → Fetch test details.  

---

### **Phase 5: Game Client APIs**
- **Objective**: Provide read-only APIs for game clients to fetch configurations.  
- **Features**:  
   - Expose lightweight, high-performance APIs:  
     - Fetch game configurations.  
     - Fetch A/B test settings.  
   - Backend API:  
     - `GET /api/client/games` → Fetch all active games.  
     - `GET /api/client/games/{id}/config` → Fetch game configurations.  
     - `GET /api/client/abtests/{id}` → Fetch active A/B test settings.  

---

### **Phase 6: User Authentication and Security**
- **Objective**: Secure the application for admin users and API clients.  
- **Features**:  
   - **Admin Authentication**: JWT-based login and session management.  
   - **API Security**:  
     - API Keys for client APIs.  
     - Rate limiting for client endpoints.  
   - Backend APIs:  
     - `POST /api/auth/login` → Admin login.  

---

### **Phase 7: Advanced Features**
- **Objective**: Add optional advanced tools to enhance functionality.  
- **Features**:  
   - **Analytics Dashboard**: Show KPIs like DAU, retention, revenue, etc.  
   - **Version Control**: Track versions of game configurations.  
   - **Localization**: Add multi-language support for game configurations.  
   - **Integration Settings**: Webhook URLs and API endpoints for game servers.  

---

## **Tech Stack**
1. **Frontend (Admin Dashboard)**:  
   - React.js (or Angular)  
   - Tailwind CSS / Material UI for styling  

2. **Backend**:  
   - Node.js + Express.js (current choice) or Spring Boot (optional for scalability).  

3. **Database**:  
   - PostgreSQL (SQL) or MongoDB (NoSQL), configurable via environment settings.  

4. **Caching**:  
   - Redis for client APIs to improve read performance.

---

## **Phase-Wise Milestones**
1. **Phase 1**: Basic Game Details – Initial MVP ✅  
2. **Phase 2**: Game Configurations – Week 2  
3. **Phase 3**: Segmentation – Week 3  
4. **Phase 4**: A/B Testing – Week 4  
5. **Phase 5**: Game Client APIs – Week 5  
6. **Phase 6**: Security – Week 6  
7. **Phase 7**: Advanced Features – Week 7+

---
