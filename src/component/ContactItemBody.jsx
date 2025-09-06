import React from "react";

// Contact Item Body Component
function ContactItemBody({ name, tag }) {
    return (
        <div className="contact-item__body">
            <p className="contact-item__title">{name}</p>
            <p className="contact-item__tag">@{tag}</p>
        </div>
    );
}

export default ContactItemBody; 