import Contact from "../components/contact.jsx";
import "../Assets/css/contacts.css";
import React from "react";

/*
* @description: Builds the connected user contacts.
* @type: UI
*/
export default class Contacts extends React.PureComponent {
    /*
    * @description: Builds view instance.
    * @parameters:
    *   -> Object props: Contains class properties.
    * @return: void
    */
	constructor (props) {
		// Calls the parent constructor.
		super (props);
		// Global attributes.
		this.old_contact = null;
	}

    /*
    * @description: Called when a user contact has been pressed.
    * @parameters:
    *   -> HTMLElement ref: Contains the selected contact html reference.
    *   -> int id: What is the selected user contact's id ?
    * @return: void
    */
    __on_contact_pressed = (ref, id) => {
        // An old contact is it available ?
        if (this.old_contact != null) this.old_contact.classList.remove ("active-contact");
        // Puts a class to the selected user contact.
        ref.classList.add ("active-contact");
        // Updates the old selected user contact.
        this.old_contact = ref;
        // Sets active user contact position index.
        this.props.setIndex (id);
        // Moves the scrollbar at the full bottom.
        setTimeout (() => this.props.chatContext.scroll_to_bottom (), 10);
    }

    /*
    * @description: Returns this view as JSX format.
    * @return: JSXObject
    */
	render = () => <div className = "users-contacts">
        {/* Global title */}
        <div className = "contacts-header">
            {/* Label text */}
            <div className = "contacts-title"><label><strong>Messages</strong></label></div>
            {/* Settings icon */}
            <div className = "settings-icon" title = "Display contacts settings." onClick = {() => this.props.onSettings ()}>
                {/* Vector representation */}
                <svg viewBox = "0 0 512 512" width = "24px" height = "24px" fill = "#343434">
                    <path d = {`M262.29,192.31a64,64,0,1,0,57.4,57.4A64.13,64.13,0,0,0,262.29,192.31ZM416.39,
                    256a154.34,154.34,0,0,1-1.53,20.79l45.21,35.46A10.81,10.81,0,0,1,462.52,326l-42.77,74a10.81,
                    10.81,0,0,1-13.14,4.59l-44.9-18.08a16.11,16.11,0,0,0-15.17,1.75A164.48,164.48,0,0,1,325,
                    400.8a15.94,15.94,0,0,0-8.82,12.14l-6.73,47.89A11.08,11.08,0,0,1,298.77,470H213.23a11.11,
                    11.11,0,0,1-10.69-8.87l-6.72-47.82a16.07,16.07,0,0,0-9-12.22,155.3,155.3,0,0,1-21.46-12.57,
                    16,16,0,0,0-15.11-1.71l-44.89,18.07a10.81,10.81,0,0,1-13.14-4.58l-42.77-74a10.8,10.8,0,0,1,
                    2.45-13.75l38.21-30a16.05,16.05,0,0,0,6-14.08c-.36-4.17-.58-8.33-.58-12.5s.21-8.27.58-12.35a16,
                    16,0,0,0-6.07-13.94l-38.19-30A10.81,10.81,0,0,1,49.48,186l42.77-74a10.81,10.81,0,0,1,
                    13.14-4.59l44.9,18.08a16.11,16.11,0,0,0,15.17-1.75A164.48,164.48,0,0,1,187,111.2a15.94,15.94,
                    0,0,0,8.82-12.14l6.73-47.89A11.08,11.08,0,0,1,213.23,42h85.54a11.11,11.11,0,0,1,10.69,8.87l6.72,
                    47.82a16.07,16.07,0,0,0,9,12.22,155.3,155.3,0,0,1,21.46,12.57,16,16,0,0,0,15.11,1.71l44.89-18.07a10.81,
                    10.81,0,0,1,13.14,4.58l42.77,74a10.8,10.8,0,0,1-2.45,13.75l-38.21,30a16.05,16.05,0,0,0-6.05,
                    14.08C416.17,247.67,416.39,251.83,416.39,256Z`} className = "settings"/>
                </svg>
            </div>
        </div>
        {/* User contacts container */}
        <div className = "guests-contacts">
            {/* Creating user contacts */}
            {this.props.contacts.map ((item, index) => <Contact profil = {item.profil} key = {index} name = {item.name} id = {index}
                label = {item.label} date = {item.date} onPressed = {(ref, id) => this.__on_contact_pressed (ref, id)}/>)}
        </div>
    </div>;
}