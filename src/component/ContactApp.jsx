// Parent component
import React from "react";
// Import Data
import { getData } from "../utils/data";
// Import Components
import ContactList from "./ContactList";

// Contact App Component
function ContactApp() {
    const contacts = getData();
    return (
        <div className="contact-app">
            <h1>Contact List</h1>
            <ContactList contacts={contacts} />
        </div>
    );
}

export default ContactApp;