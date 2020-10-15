// combine reducers

import productReducers from "./productReducer";
import cartReducer from "./cartReducer";
import {combineReducers} from "redux";

const rootReducers = combineReducers({
   myProduct: productReducers,
   myCart: cartReducer
});

export default rootReducers;
