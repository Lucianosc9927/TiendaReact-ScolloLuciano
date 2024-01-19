import { useEffect, useState } from "react";
import { ProductDetail } from "../ProductDetail/ProductDetail";
import { useParams } from "react-router-dom";
import { pedirDatos } from "../../utils/pedirDatos";
import "./productDetailContainer.css";

export const ProductDetailContainer = () => {
  const [loading, setLoading] = useState(true);
  const [item, setItem] = useState(null);
  const { itemId } = useParams(null);

  useEffect(() => {
    setLoading(true);

    pedirDatos()
      .then((data) => {
        setItem(data.find((prod) => prod.id === Number(itemId)));
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <article className="productContainer">
      {loading ? <h2>Cargando...</h2> : <ProductDetail item={item} />}
    </article>
  );
};
