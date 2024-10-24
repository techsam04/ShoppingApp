import { Fragment } from "react"
import { useState } from "react"
import ProductList from "./product/productList"
import { Link, Route, Router, Routes } from "react-router-dom"
import CartList from "./cart/CartList"
import SingleProduct from "./product/SingleProduct"
import ProductDetails from "./product/productDetails/ProductDetails"
import HomePage from "./home/Home"
import NavBar from "./navbar/NavBar"
function App() {
  const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };

  return (
   <Fragment>
      <NavBar/>
      <Routes>
        <Route path="/" element={<HomePage/>}></Route>
        <Route path="/products" element={<ProductList/>}></Route>
        <Route path="/product-details/:id" element={<ProductDetails/>}></Route>
        <Route path="/cart" element={<CartList/>}></Route>
      </Routes>
   </Fragment>
  )
}

export default App