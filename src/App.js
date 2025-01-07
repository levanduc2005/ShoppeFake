import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";
import { Footer } from "./Components";
import { Home, Login, Register, Product, Cart, Checkout } from "./pages";

const App = () => {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const [valueQuantity, setValueQuantity] = useState(1);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addCart = (product) => {
    setCart((prevCart) => {
      const existProduct = prevCart.find((item) => item.id === product.id);
      if (existProduct) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + valueQuantity }
            : item
        );
      }

      return [
        { ...product, quantity: valueQuantity, checked: false },
        ...prevCart,
      ];
    });
  };

  const deleteCart = (product) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== product.id));
  };

  const validPrice = (price) => {
    if (price === 0) return 0;
    return new Intl.NumberFormat("vi-VN", {
      minimumFractionDigits: 3, // Đảm bảo ít nhất 3 chữ số thập phân
      maximumFractionDigits: 3,
    }).format(price);
  };

  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={<Home cart={cart} validPrice={validPrice} />}
        />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/product/:id"
          element={
            <Product
              cart={cart}
              setCart={setCart}
              addCart={addCart}
              valueQuantity={valueQuantity}
              setValueQuantity={setValueQuantity}
            />
          }
        />
        <Route
          path="/cart"
          element={
            <Cart
              setCart={setCart}
              cart={cart}
              deleteCart={deleteCart}
              validPrice={validPrice}
            />
          }
        />
        <Route
          path="/checkout"
          element={<Checkout validPrice={validPrice} />}
        />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
