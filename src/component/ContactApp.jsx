// Parent component
import React from "react";
// Import Data
import { getData } from "../utils/data";
// Import Components
import ContactList from "./ContactList";

// Class Component Contact App
class ContactApp extends React.Component {
    // Constructor
    constructor(props) {
        super(props);
        this.state = {
            contacts: getData(),
        };

        this.onDeleteHandler = this.onDeleteHandler.bind(this);
    }

    // Method to handle delete contact
    onDeleteHandler(id) {
        const contacts = this.state.contacts.filter((contact) => contact.id !== id);
        this.setState({ contacts });
    }

    // Render method
    render() {
        return (
            <div className="contact-app">
                <h1>Contact List</h1>
                <ContactList contacts={this.state.contacts} onDelete={this.onDeleteHandler} />
            </div>
        );
    }
}

export default ContactApp;