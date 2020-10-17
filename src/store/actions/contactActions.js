const addContact = (contact) => {
    return {
        type: 'ADD_CONTACT',
        payload: contact
    }
};

export default addContact;
