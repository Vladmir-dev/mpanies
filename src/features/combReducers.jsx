// import addItem from "./addItem";
import { combineReducers } from "redux";
import authReducer from "./auth/authSlice"
import cartReducer from "./cart/cartSlice"
// import storeReducer from './shop'
import productsReducer from './products/productSlice'
// import searchReducer from './searchSlice'
// import currencyReducer from './currencySlice';

// import Cart from "../../common/Cart/Cart";
// import userReducer from './addItem/userSlice'

const rootReducer = combineReducers({
    users:authReducer,
    cart:cartReducer,
    // store:storeReducer,
    products:productsReducer,
    // search:searchReducer,
    // currency:currencyReducer
})

export default rootReducer;