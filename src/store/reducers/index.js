// combine reducers

import productReducers from "./productReducer";
import cartReducer from "./cartReducer";
import {combineReducers} from "redux";
import contactReducers from "./contactReducers";

const rootReducers = combineReducers({
   myProduct: productReducers,
   myCart: cartReducer,
   myContact: contactReducers
});

export default rootReducers;
