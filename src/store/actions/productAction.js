// le nom du fonction executé
// payload: l'objet retouré

export const addNewProduct = (product) => {
    return {
        type: 'ADD_PRODUCT',
        payload: product
    }
};

export const resetStoreProducts = () => {
    return {
        type: 'RESET_STORE'
    }
};

// export default addNewProduct;
// export default resetStoreProducts;
