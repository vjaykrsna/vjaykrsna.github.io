import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import Header from "./components/Header";
import App from "./components/App.jsx";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <Header />
        <App />
    </StrictMode>
);
