import { useContext } from "react";
import { Cart } from "../../context/Cart";
import "./CartView.css";

export const CartView = () => {
  const { cart, totalPrice, clearCart, deleteItem } = useContext(Cart);

  return (
    <section className="cartView">
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            <div className="productInfo">
              <img src={item.img} alt={item.description} />
              <h2>{item.title}</h2>
              <p className="price">${item.price}</p>
              <p>Cantidad: {item.cantidad}</p>
            </div>
            <button className="deleteItem" onClick={() => deleteItem(item.id)}>
              Borrar producto
            </button>
          </li>
        ))}
      </ul>
      <h3>TOTAL:{totalPrice()}</h3>
      <button className="btnRemove" onClick={clearCart}>
        Vaciar carrito
      </button>
    </section>
  );
};
