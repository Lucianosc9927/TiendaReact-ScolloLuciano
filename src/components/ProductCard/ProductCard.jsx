import "./productCard.css";

export const ProductCard = ({ product }) => {
  return (
    <div className="card">
      <div className="card__content">
        <h3>{product.name}</h3>
        <p className="description">{product.description}</p>
        <p className="price">
          <strong>${product.price}</strong>
        </p>
      </div>
      <img className="img" src={`/public/${product.img}`} alt="" />
    </div>
  );
};
