# VJ's Chef: AI Recipe Generator

VJ's Chef is a web application that generates recipes based on your available ingredients, powered by Google's Gemini AI. It features a React frontend and a Node.js Express backend to securely handle API calls.

## Features

*   Ingredient input and management.
*   AI-powered recipe generation using Gemini API.
*   Loading and error handling.
*   Markdown recipe display.

## Technologies Used

*   **Frontend:** React, Vite
*   **Backend:** Node.js, Express, `@google/generative-ai`
*   **Other:** `react-markdown`, CSS

## Setup and Installation

To get Chef Claude running locally, you'll need Node.js and npm/Yarn.

1.  **Clone the repository:**
    ```bash
    git clone [YOUR_REPOSITORY_URL]
    cd react-app
    ```

2.  **Install Frontend Dependencies:**
    ```bash
    npm install
    ```

3.  **Install Backend Dependencies:**
    ```bash
    cd server
    npm install
    cd .. # Go back to root
    ```

4.  **Configure Environment Variables:**
    *   **Frontend (`.env` in root directory):**
        ```
        # d:/Project/WebD/react-app/.env
        VITE_BACKEND_URL=http://localhost:3001
        ```
    *   **Backend (`server/.env` in `server` directory):**
        ```
        # d:/Project/WebD/react-app/server/.env
        GEMINI_API_KEY=YOUR_ACTUAL_GEMINI_API_KEY
        ```
        *(Replace `YOUR_ACTUAL_GEMINI_API_KEY` with your key from Google Cloud. Ensure this file is in your `.gitignore`.)*

## Running the Application

You will need two separate terminal instances.

1.  **Start Backend Server (Terminal 1):**
    ```bash
    cd server
    node index.js
    ```
    (Server will run on `http://localhost:3001`)

2.  **Start Frontend Development Server (Terminal 2):**
    ```bash
    npm run dev
    ```
    (Frontend will typically run on `http://localhost:5173`)

## Deployment

The frontend can be deployed to static hosting services like GitHub Pages. However, the Node.js backend requires a server environment and must be deployed separately to a platform that supports Node.js applications (e.g., Render, Vercel, Heroku). Remember to configure `GEMINI_API_KEY` as an environment variable on your chosen backend hosting platform.

## Contact

Vijay Krishna - vijay74684@gmail.com

Project Link: [https://github.com/vjaykrsna/vjs-chef]
