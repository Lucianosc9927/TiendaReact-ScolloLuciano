import { useEffect, useState } from "react";
import { ProductCard } from "./../ProductCard/ProductCard";
import { CategoryContainer } from "../CategoryContainer/CategoryContainer";
import { pedirDatos } from "../../utils/pedirDatos";
import "./shop.css";
import { useParams } from "react-router-dom";

export const Shop = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const { categoryId } = useParams();

  useEffect(() => {
    setLoading(true);
    pedirDatos().then((data) => {
      const items = categoryId
        ? data.filter((item) => item.category === categoryId)
        : data;
      setProducts(items);
      setLoading(false);
    });
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
