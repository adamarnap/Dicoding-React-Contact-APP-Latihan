import React from "react";
import { createRoot } from "react-dom/client";

// Import main stylesheet
import "./styles/style.css";

// Import Component
import ContactApp from "./component/ContactApp.jsx";

// Create a root.
const root = createRoot(document.getElementById("root"));
root.render(<ContactApp />);