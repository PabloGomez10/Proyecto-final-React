import React, { Component } from "react";
import NavBar from "./componentes/navBar";
import ItemListContainer from "./componentes/itemListContainer";
import Card from "./componentes/card";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import Descripcion from "./componentes/descripcion";
import ProductDetails from "./componentes/itemDetails";
import { dataBase } from "./firebase";
import ProductDetail from "./componentes/itemDetails";
import Cart from "./componentes/cart";
import { CartProvider } from "./componentes/cartContext";
import CartProduct from "./componentes/cartWidget";

function App() {
  return (
    <div className="">
      <CartProvider>
   
      <NavBar />
      <Routes>
        <Route
          exact
          path="/"
          element={<ItemListContainer Bienvenidos="Bienvenidos a Delta Informatica" />}
        />
        <Route path="/productos" element={<Card />} />
        <Route path="/productos/:productId" element={<ProductDetail />} />
<Route path="/cart" element={<CartProduct/>}/>
        
      </Routes>
      <Outlet />
      </CartProvider>
    </div>
  );
}

export default App;


