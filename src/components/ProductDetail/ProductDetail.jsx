import { Button } from "../Button/Button";
import "./productDetail.css";

export const ProductDetail = ({ item }) => {
  return (
    <div className="product">
      <div className="productDetail">
        <img className="img" src={`/public/${item.img}`} alt="" />
        <p>{item.name}</p>
        <p>{item.description}</p>
        <p>{item.price}</p>
      </div>
      <Button>Agregar</Button>
    </div>
  );
};
