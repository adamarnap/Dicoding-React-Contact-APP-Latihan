import React from "react";

// Function component
function Delete({ id, onDelete }) {
    return (
        <button className="contact-item__delete" onClick={() => onDelete(id)}>
            Delete
        </button>
    );
}

export default Delete;