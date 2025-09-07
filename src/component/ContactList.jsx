import React from "react";
// Import Components
import ContactItem  from "./ContactItem";

// Component Contact List
function ContactList({ contacts, onDelete }) {
    return (
        <div className="contact-list">
            {
                contacts.map((contact) => (
                    <ContactItem key={contact.id} onDelete={onDelete} {...contact} />
                ))
            }
        </div>
    );
}

export default ContactList;