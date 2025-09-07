import React from "react";
// Import Components
import ContactItemBody from "./ContactItemBody";
import ContactItemImage from "./ContactItemImage";
import Delete from "./buttons/Delete";

// Component Contact Item
function ContactItem({ name, tag, imageUrl, id, onDelete }) {
    return (
        <div className="contact-item">
            <ContactItemImage imageUrl={imageUrl} />
            <ContactItemBody name={name} tag={tag} />
            <Delete id={id} onDelete={onDelete} />
        </div>
    );
}

export default ContactItem;
