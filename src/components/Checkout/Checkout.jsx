import { useContext, useState } from "react";
import { Cart } from "../../context/Cart";
import { db } from "../../firebase/config";
import { collection, addDoc } from "firebase/firestore";
import "./Checkout.css";

export const Checkout = () => {
  const { cart, totalItems, clearCart } = useContext(Cart);
  const [orderId, setOrderId] = useState("");

  const [values, setValues] = useState({
    nombre: "",
    direccion: "",
    email: "",
  });

  const handleInputChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const orden = {
      cliente: values,
      items: cart,
      total: totalItems(),
      fecha: new Date(),
    };

    const orderRef = collection(db, "ordenes");
    addDoc(orderRef, orden).then((doc) => {
      setOrderId(doc.id);
      clearCart();
    });
  };
  if (orderId) {
    return (
      <div className="formContainer">
        <h2>Gracias por tu compra!</h2>
        <p>Tu codigo de orden es: {orderId}</p>
      </div>
    );
  }

  return (
    <div className="formContainer">
      <h2>Checkout</h2>

      <form onSubmit={handleSubmit}>
        <input
          value={values.nombre}
          type="text"
          placeholder="Nombre"
          onChange={handleInputChange}
          name="nombre"
        />
        <input
          value={values.direccion}
          onChange={handleInputChange}
          type="text"
          placeholder="Direccion"
          name="direccion"
        />
        <input
          value={values.email}
          onChange={handleInputChange}
          type="text"
          placeholder="Email"
          name="email"
        />

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};
