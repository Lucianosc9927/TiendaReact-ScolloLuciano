import { useEffect, useState } from "react";
import { ProductDetail } from "../ProductDetail/ProductDetail";
import { useParams } from "react-router-dom";
import { db } from "../../firebase/config";
import { doc, getDoc } from "firebase/firestore";
import "./productDetailContainer.css";

export const ProductDetailContainer = () => {
  const [loading, setLoading] = useState(true);
  const [item, setItem] = useState(null);
  const { itemId } = useParams(null);

  useEffect(() => {
    setLoading(true);

    const docRef = doc(db, "productos", itemId);

    getDoc(docRef)
      .then((res) => {
        const doc = {
          ...res.data(),
          id: res.id,
        };

        setItem(doc);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <article className="productContainer">
      {loading ? <h2>Cargando...</h2> : <ProductDetail item={item} />}
    </article>
  );
};
