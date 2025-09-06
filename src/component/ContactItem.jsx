import React from "react";
// Import Components
import ContactItemBody from "./ContactItemBody";
import ContactItemImage from "./ContactItemImage";

// Component Contact Item
function ContactItem({ name, tag, imageUrl}) {
    return (
        <div className="contact-item">
            <ContactItemImage imageUrl={imageUrl} />
            <ContactItemBody name={name} tag={tag} />
        </div>
    );
}

export default ContactItem;
