import { useContext } from "react";
import { IoIosCart } from "react-icons/io";
import { Cart } from "../../context/Cart";

export const CartWidget = () => {
  const { totalItems } = useContext(Cart);
  return (
    <div className="cartWidget">
      <IoIosCart className="icon" />
      <span>{totalItems()}</span>
    </div>
  );
};
