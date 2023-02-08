import React, { useState, useEffect } from "react";
import { dataBase } from "../firebase";

const ProductDetail = ({ match }) => {
  const [product, setProduct] = useState({});
  const productId = match.params.productId;
  useEffect(() => {
    dataBase
      .collection("Productos")
      .doc(match.params.productId)
      .get()
      .then((doc) => {
        setProduct({ id: doc.id, ...doc.data() });
      });
  }, [match.params.productId]);

  return (
    <div className="container-fluid">
      <div className="card">
        <img src={product.imagenes} className="card-img-top" />
        <h2 className="card-title">{product.nombre}</h2>
        <p>Categoria: {product.categoria}</p>
        <p>Descripcion: {product.descripcion}</p>
        <p>Precio: {product.precio}$</p>
      </div>
    </div>
  );
};

export default ProductDetail;

