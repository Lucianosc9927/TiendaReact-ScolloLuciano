import { Link } from "react-router-dom";

export const NavbarItem = ({ name, path, children }) => {
  return (
    <li className="navbarItem">
      <Link to={path}>
        {children}
        {name}
      </Link>
    </li>
  );
};
