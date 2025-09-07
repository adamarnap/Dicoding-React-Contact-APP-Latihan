import React from "react";

class ContactInput extends React.Component {
    constructor(props){
        super(props);

        // Initialize state
        this.state = {
            name: '',
            tag: '',
        };

        // Bind the event handler
        this.onNameChangeEventHandler = this.onNameChangeEventHandler.bind(this);
        this.onTagChangeEventHandler = this.onTagChangeEventHandler.bind(this);
        this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
    }

    // Method to handle name change
    onNameChangeEventHandler(event) {
        this.setState(
            {
                name: event.target.value,
            }
        );
    }
    // Method to handle tag change
    onTagChangeEventHandler(event) {
        this.setState(
            {
                tag: event.target.value,
            }
        );
    }

    // Method to handle submit event
    onSubmitEventHandler(event) {
        event.preventDefault();
        // Call function addContact from props
        this.props.addContact(this.state);
    }

    // Render method
    render() {
        return (
            <form className="contact-input" onSubmit={this.onSubmitEventHandler}>
                <input
                    type="text"
                    placeholder="Name"
                    value={this.state.name}
                    onChange={this.onNameChangeEventHandler}
                />
                <input
                    type="text"
                    placeholder="Tag"
                    value={this.state.tag}
                    onChange={this.onTagChangeEventHandler}
                />
                <button type="submit">Add Contact</button>
            </form>
        );
    }
}

export default ContactInput;