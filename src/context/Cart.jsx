import { createContext, useState } from "react";

export const Cart = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const searchInCart = (id) => {
    return cart.some((item) => item.id === id);
  };

  const totalItems = () => {
    return cart.reduce((acc, item) => acc + item.cantidad, 0);
  };

  const totalPrice = () => {
    return cart.reduce((acc, item) => acc + item.cantidad * item.price, 0);
  };

  const clearCart = () => {
    setCart([]);
  };

  const deleteItem = (id) => {
    setCart(cart.filter((item) => item.id != id));
  };

  return (
    <Cart.Provider
      value={{
        cart,
        addToCart,
        searchInCart,
        totalItems,
        totalPrice,
        clearCart,
        deleteItem,
      }}
    >
      {children}
    </Cart.Provider>
  );
};
