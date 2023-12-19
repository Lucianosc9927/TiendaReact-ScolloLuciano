import { Link } from "react-router-dom";
import "./categoryContainer.css";
export const CategoryContainer = () => {
  return (
    <nav className="categoryNavbar">
      <h2>Categorias</h2>
      <ul className="categoryNavbarItems">
        <li className="link">
          <Link to="/shop">Todos</Link>
        </li>
        <li className="link">
          <Link to="/shop/pizzas">Pizzas</Link>
        </li>
        <li className="link">
          <Link to="/shop/empanadas">Empanadas</Link>
        </li>
        <li className="link">
          <Link to="/shop/bebidas">Bebidas</Link>
        </li>
      </ul>
    </nav>
  );
};
