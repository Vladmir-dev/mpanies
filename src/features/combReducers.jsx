// import addItem from "./addItem";
import { combineReducers } from "redux";
import authReducer from "./auth/authSlice";
import cartReducer from "./cart/cartSlice";
// import storeReducer from './shop'
import productsReducer from "./products/productSlice";
import searchReducer from "./search/searchSlice";
import slideReducer from "./slide/SlideSlice";
import categoryReducer from "./category/categorySlice";
// import currencyReducer from './currencySlice';

// import Cart from "../../common/Cart/Cart";
// import userReducer from './addItem/userSlice'

const rootReducer = combineReducers({
  users: authReducer,
  cart: cartReducer,
  slide: slideReducer,
  products: productsReducer,
  search: searchReducer,
  category: categoryReducer,
  // currency:currencyReducer
});

export default rootReducer;
