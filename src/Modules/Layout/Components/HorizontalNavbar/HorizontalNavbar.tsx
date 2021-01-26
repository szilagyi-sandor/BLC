import React from "react";

import "./HorizontalNavbar.scss";

import { NavLink } from "react-router-dom";
import { HorizontalNavbarProps } from "./interfaces";
import Container from "Modules/Layout/BLC/Components/Grid/Container/Container";

// TODO: responsivity
export default function HorizontalNavbar({ items }: HorizontalNavbarProps) {
  return (
    <nav className="horizontalNavbar">
      <Container>
        <div className="inner">
          <h1 className="navbarBrand">
            <NavLink to="/" exact>
              BLC
            </NavLink>
          </h1>

          <ul>
            {items.map((item, idx) => (
              <li key={idx}>
                <NavLink to={item.url} exact>
                  {item.text}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </nav>
  );
}
