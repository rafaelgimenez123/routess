import React from "react";
import { NavLink } from "react-router-dom";
import CarWidget from "../CartWidget/CartWidget";
import './NavBar.css';

export default function Navbar() {
  return (
    <div className="navbar">
      <ul className="ul_nav">
        <li>
        <NavLink to="/category/Acercade" className="store_title" activeClassName="activeNav">
            Aethernum store
          </NavLink>
        </li>
        <li className="li_nav">
          <NavLink to="/category/Acercade" className="li_nav" activeClassName="activeNav">
            Acerca de
          </NavLink>
        </li>
        <li className="li_nav">
          <NavLink to="/category/Tienda" className="li_nav" activeClassName="activeNav">
            Tienda
          </NavLink>
        </li>
        <li className="li_nav">
          <NavLink to="/category/lo-nuevo" className="li_nav" activeClassName="activeNav">
            Lo Nuevo
          </NavLink>
        </li>
        <li className="li_nav">
          <div className="carticon">
            <CarWidget></CarWidget>
          </div>
        </li>
      </ul>
    </div>
  );
}
