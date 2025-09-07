// Parent component
import React from "react";
// Import Data
import { getData } from "../utils/data";
// Import Child Components
import ContactList from "./ContactList";
import ContactInput from "./form/ContactInput";

// Class Component Contact App
class ContactApp extends React.Component {
    // Constructor
    constructor(props) {
        super(props);
        this.state = {
            contacts: getData(),
        };

        this.onDeleteHandler = this.onDeleteHandler.bind(this);
        this.onAddContactHandler = this.onAddContactHandler.bind(this);
    }

    // Method to handle delete contact
    onDeleteHandler(id) {
        const contacts = this.state.contacts.filter((contact) => contact.id !== id);
        this.setState({ contacts });
    }

    // Method to handle add contact
    onAddContactHandler({ name, tag}) {
        this.setState((prevState) => {
            return {
                contacts: [
                    ...prevState.contacts,
                    {
                        id: +new Date(),
                        name,
                        tag,
                        imageUrl: "/images/default.jpg",
                    }
                ]
            }
        })
    }

    // Render method
    render() {
        return (
            <div className="contact-app">
                <h1>Contact List</h1>
                {/* Input Contact Form */}
                <ContactInput addContact={this.onAddContactHandler} addContact2="herhe" />
                {/* Contact List */}
                <ContactList contacts={this.state.contacts} onDelete={this.onDeleteHandler} />
            </div>
        );
    }
}

export default ContactApp;