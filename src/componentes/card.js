import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { dataBase } from "../firebase";
import { CartContext } from "./cartContext";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useContext(CartContext);
  const [selectedCategory, setSelectedCategory] = useState("Todas");

  const handleAddToCart = (product) => {
    setCart([...cart, product]);
  };
  
  const handleCategorySelection = (category) => {
    setSelectedCategory(category);
  };

  useEffect(() => {
    dataBase.collection("Productos").onSnapshot((snapshot) => {
      const newProducts = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setProducts(newProducts);
    });
  }, []);

  const filteredProducts = selectedCategory === "Todas"
    ? products
    : products.filter(product => product.categoria === selectedCategory);

  return (
    <div>
      <div>
        <h3>Categorías:</h3>
        <button onClick={() => handleCategorySelection("Todas")}>Todas</button>
        <button onClick={() => handleCategorySelection("a")}>Componentes</button>
        <button onClick={() => handleCategorySelection("b")}>Computadoras</button>
        {/* Agrega tantos botones como categorías tengas en firebase */}
      </div>
      <div className="container-fluid d-flex flex-wrap">
        {filteredProducts.map((product) => (
          <div className="card col-sm-12 col-md-6 col-lg-4 p-3">
            <img src={product.imagenes} className="card-img-top" />
            <div className="card-body">
              <h2 className="card-title">{product.nombre}</h2>
              <p className="card-text">Descripcion: {product.descripcion}</p>
              <p className="card-text">Precio: {product.precio}$</p>
              <Link to={`/productos/${product.id}`}>
                <button className="btn btn-primary">
                  Ver más
                </button>
              </Link>
              <button className="btn btn-primary" onClick={() => handleAddToCart(product)}>
                Agregar al carrito
              </button>
              <Link to="/cart">
                <button className="btn btn-success">Ir a comprar</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};



export default Products;