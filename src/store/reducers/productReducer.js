const initialState = {
    products: []
};

const productReducers = (state = initialState, action) => {

    switch (action.type) {
        case 'ADD_PRODUCT':
            return {
                products: [...state.products, action.payload]
            };
        case  'RESET_STORE':
            return {products: [{}]}
        default:
            return state;

    }
};
export default productReducers;
