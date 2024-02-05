import { useContext } from "react";
import { Cart } from "../../context/Cart";

export const CartView = () => {
  const { cart, totalPrice, clearCart, deleteItem } = useContext(Cart);

  return (
    <>
      <ol>
        {cart.map((item) => (
          <li key={item.id}>
            <h2>{item.title}</h2>
            <p>{item.price}</p>
            <p>{item.cantidad}</p>
            <button onClick={() => deleteItem(item.id)}>Borrar producto</button>
          </li>
        ))}
      </ol>
      <h3>{totalPrice()}</h3>
      <button onClick={clearCart}>Vaciar carrito</button>
    </>
  );
};
