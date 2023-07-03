// CART É IMPORTADO PELO INDEX DE STORE/MODULES/CART
import { combineReducers } from "redux";
import cart from "./cart/reducer";
export default combineReducers({
    cart,
});
