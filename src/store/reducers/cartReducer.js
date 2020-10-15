const initialState = {
    cart: []
};

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_PRODUCT':
            return state;
        default:
            return state;

    }
};
export default cartReducer;
