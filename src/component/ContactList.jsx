import React from "react";
// Import Components
import ContactItem  from "./ContactItem";

// Component Contact List
function ContactList({ contacts }) {
    return (
        <div className="contact-list">
            {
                contacts.map((contact) => (
                    <ContactItem key={contact.id} {...contact} />
                ))
            }
        </div>
    );
}

export default ContactList;