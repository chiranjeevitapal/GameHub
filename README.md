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
