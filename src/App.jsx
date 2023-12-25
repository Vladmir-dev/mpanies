import { useState } from "react";
import "./App.css";
import Home from "./pages/Home";
import ShopPage from "./pages/ShopPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import store from "./features/store";
import { PersistGate } from "redux-persist/integration/react";
import { persistedStore } from "./features/store";
import { Provider } from "react-redux";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Otp from "./pages/Otp";
import CartPage from "./pages/CartPage";
import Checkout from "./pages/Checkout";
import ProtectedRoutes from "./ProtectedRoutes";
import UserDetailsPage from "./pages/UserDetailsPage";
import Search from "./pages/Search";
import ForgotPassword from "./pages/ForgotPassword";
import VerifyOtp from "./pages/VerifyOtp";
import SubCategoriesPage from "./pages/SubCategoriesPage";
import ProductDetial from "./pages/ProductDetial";
import BrandPage from "./pages/BrandPage";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="font-sans box-border">
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistedStore}>
          <BrowserRouter>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/category/:id" element={<ShopPage />} />
              <Route
                path="/category/:id/subcategories/:subcategoryId"
                element={<SubCategoriesPage />}
              />
              <Route path="brand/:id" element={<BrandPage />}/>
              
              <Route path="/product/:id" element={<ProductDetial />} />
              <Route path="/about" element={<About />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signUp" element={<SignUp />} />
              {/* <Route path="/otp" element={<Otp />} /> */}
              <Route path="/cart" element={<CartPage />} />
              <Route path="/search" element={<Search />} />
              <Route path="/forgot" element={<ForgotPassword />} />
              <Route path="/otp" element={<VerifyOtp />} />

              <Route element={<ProtectedRoutes />}>
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/user" element={<UserDetailsPage />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </PersistGate>
      </Provider>
    </div>
  );
}

export default App;
