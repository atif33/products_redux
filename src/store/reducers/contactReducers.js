const initializeState = {
    contact: []
};

const contactReducers = (state = initializeState, action) => {

    switch (action.type) {
        case 'ADD_CONTACT':
            return {
                contact: [...state.contact, action.payload]
            };

        default:
            return state;

    }

};

export default contactReducers;
