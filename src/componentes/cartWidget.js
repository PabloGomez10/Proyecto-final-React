import React, { useContext } from "react";
import { CartContext } from "./cartContext";
import firebase from "firebase/compat/app";

const CartProduct = () => {
const [cart, setCart] = useContext(CartContext);
const handleSubmit = async () => {
const dataBase = firebase.firestore();
try {
const order = {
products: cart,
date: firebase.firestore.Timestamp.now(),
};
await dataBase.collection("Orden de Compra").add(order);
console.log("Orden de compra agregada con éxito");
setCart([]);
} catch (error) {
console.error("Error al agregar la orden de compra", error);
}
};
return (
<div className="container-fluid">
<h2>Carrito de compras</h2>
<table className="table table-striped">
<thead>
<tr>
<th>Nombre</th>
<th>Precio</th>
<th>Cantidad</th>
</tr>
</thead>
<tbody>
{cart.map((product) => (
  <tr key={product.id}>
    <td>{product.nombre}</td>
    <td>{product.precio}$</td>
    <td>1</td>
    <td><button onClick={() => setCart(cart.filter(p => p.id !== product.id))}>Eliminar</button></td>
  </tr>
))}

</tbody>
</table>
<button onClick={handleSubmit}>Comprar</button>
</div>
);
};

export default CartProduct;