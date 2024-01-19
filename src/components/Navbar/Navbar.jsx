import { NavbarItem } from "./NavbarItem";
import { IoMdHome, IoIosPhonePortrait, IoIosCart } from "react-icons/io";
import { FaMotorcycle } from "react-icons/fa";

import logo from "../../assets/logo.png";

import "./navbar.css";

export const Navbar = () => {
  return (
    <nav className="navbar">
      <img className="logo" src={logo} alt="Logo" />

      <ul className="navbarItems">
        <NavbarItem name="Inicio" path="/">
          <IoMdHome className="icon" />
        </NavbarItem>

        <NavbarItem name="Pedidos" path="/shop">
          <FaMotorcycle className="icon" />
        </NavbarItem>

        <NavbarItem name="Carrito" path="/carrito">
          <IoIosCart className="icon" />
        </NavbarItem>
      </ul>
    </nav>
  );
};
