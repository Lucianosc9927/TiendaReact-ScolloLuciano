import { useContext, useState } from "react";
import { ItemCounter } from "./itemCounter";
import { Cart } from "../../context/Cart";
import { Link } from "react-router-dom";
import "./productDetail.css";

export const ProductDetail = ({ item }) => {
  const [cantidad, setCantidad] = useState(1);
  const { addToCart, searchInCart } = useContext(Cart);

  console.log(searchInCart(item.id));

  const handleAgregar = () => {
    const itemAdd = {
      ...item,
      cantidad,
    };

    addToCart(itemAdd);
  };

  return (
    <div className="product">
      <div className="productDetail">
        <img className="img" src={`/public/${item.img}`} alt="" />
        <p>{item.name}</p>
        <p>{item.description}</p>
        <p>{item.price}</p>
      </div>
      {searchInCart(item.id) ? (
        <Link to="/cart">Ir al carrito</Link>
      ) : (
        <>
          <ItemCounter
            cantidad={cantidad}
            stock={item.stock}
            setCantidad={setCantidad}
          />
          <button className="btn__add" onClick={handleAgregar}>
            Agregar
          </button>
        </>
      )}
    </div>
  );
};
