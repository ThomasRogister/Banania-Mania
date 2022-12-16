import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Error from "./pages/error";
import Products from "./pages/products";
import Basket from "./pages/basket";
import Product from "./pages/product";
import AddProduct from "./pages/addProduct";
import Confirm from "./pages/confirm";
import SignUp from "./pages/signUp";

function App() {
  return (
    <div className="app__routes">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/*" element={<Error />} />
        <Route path="/products" element={<Products />} />
        <Route path="/basket" element={<Basket />} />
        <Route path="/addProduct" element={<AddProduct />} />
        <Route path="/confirm" element={<Confirm />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/signUp" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
