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
import Cart from "./pages/Cart";
import checkout from "./pages/Checkout";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="font-sans">
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistedStore}>
          <BrowserRouter>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/shop" element={<ShopPage />} />
              <Route path="/about" element={<About />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signUp" element={<SignUp />} />
              <Route path="/otp" element={<Otp />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<checkout />} />
            </Routes>
          </BrowserRouter>
        </PersistGate>
      </Provider>
    </div>
  );
}

export default App;
