export const ItemCounter = ({ cantidad, stock, setCantidad }) => {
  const handleSumar = () => {
    cantidad < stock && setCantidad(cantidad + 1);
  };

  const handleRestar = () => {
    cantidad > 1 && setCantidad(cantidad - 1);
  };

  return (
    <div>
      <button onClick={handleRestar}>-</button>
      <span>{cantidad}</span>
      <button onClick={handleSumar}>+</button>
    </div>
  );
};
