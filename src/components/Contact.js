import React, {useState} from "react";
import {useDispatch} from "react-redux";
import addContact from "../store/actions/contactActions";

export function Contat() {
    const dispatch = useDispatch();

    const [contacts, plusContac] = useState({
        id: 0,
        firstName: '',
        lastName: ''
    });

    // arrow function
    const handleOnChangeFirstName = (event) => {
        plusContac({...contacts, firstName: event.target.value})
    };

    const handleOnChangeLastName = (event) => {
        plusContac({...contacts, lastName: event.target.value});
    };

    const submitFormContact = (event) => {
        event.preventDefault();
        contacts.id++;
        dispatch(addContact(contacts));
    };

    return (
        <form onSubmit={submitFormContact}>
            <div className="form-group">
                <input type="text" className="form-control"
                       value={contacts.firstName}
                       onChange={handleOnChangeFirstName}
                       placeholder="Nom"/>
                <input type="text" className="form-control"
                       value={contacts.lastName}
                       onChange={handleOnChangeLastName}

                       placeholder="Prenom"/>
            </div>
            <button className="btn btn-outline-danger btn-block">Send</button>
        </form>
    )

}
