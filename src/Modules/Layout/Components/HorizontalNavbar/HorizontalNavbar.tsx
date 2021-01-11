import React from "react";

import "./HorizontalNavbar.scss";

import { NavLink } from "react-router-dom";
import { HorizontalNavbarProps } from "./interfaces";
import GridContainer from "Modules/Layout/BLC/Grid/Container/GridContainer";

// TODO: responsivity
export default function HorizontalNavbar({ items }: HorizontalNavbarProps) {
  return (
    <nav className="horizontalNavbar">
      <GridContainer>
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
      </GridContainer>
    </nav>
  );
}
