import { NavbarItem } from "./NavbarItem";
import { IoMdHome } from "react-icons/io";
import { MdOutlineMenuBook } from "react-icons/md";

import logo from "../../assets/logo.png";

import "./navbar.css";
import { CartWidget } from "./CartWidget";

export const Navbar = () => {
  return (
    <nav className="navbar">
      <img className="logo" src={logo} alt="Logo" />

      <ul className="navbarItems">
        <NavbarItem name="Inicio" path="/">
          <IoMdHome className="icon" />
        </NavbarItem>

        <NavbarItem name="Catalogo" path="/shop">
          <MdOutlineMenuBook className="icon" />
        </NavbarItem>

        <NavbarItem name="Carrito" path="/cart">
          <CartWidget />
        </NavbarItem>
      </ul>
    </nav>
  );
};
