import React from "react";

// Contact Item Image Component
function ContactItemImage({ imageUrl}){
    return (
        <div className="contact-item__image">
            <img src={imageUrl} alt="Contact Avatar" />
        </div>
    );
}

export default ContactItemImage;