import { useEffect, useState } from "react";
import { ProductCard } from "./../ProductCard/ProductCard";
import { CategoryContainer } from "../CategoryContainer/CategoryContainer";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebase/config";
import "./shop.css";

export const Shop = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const { categoryId } = useParams();

  useEffect(() => {
    setLoading(true);

    const productosRef = collection(db, "productos");
    const q = categoryId
      ? query(productosRef, where("category", "==", categoryId))
      : productosRef;

    getDocs(q)
      .then((res) => {
        const docs = res.docs.map((doc) => ({ ...doc.data(), id: doc.id }));

        setProducts(docs);
      })
      .finally(() => setLoading(false));
  }, [categoryId]);

  return (
    <main className="shop">
      <CategoryContainer />
      <div className="productsContainer">
        {loading ? (
          <h2>Cargando...</h2>
        ) : (
          products.map((el) => <ProductCard product={el} key={el.id} />)
        )}
      </div>
    </main>
  );
};
