import React from "react";

import "./SiteLayout.scss";

import RouteMapper from "Modules/Routing/ReactAutoRouting/RouteMapper/RouteMapper";
import { LayoutProps } from "Modules/Routing/ReactAutoRouting/_Interfaces/PropHelpers/LayoutProps";
import HorizontalNavbar from "Modules/Layout/Components/HorizontalNavbar/HorizontalNavbar";
import { siteNavItems } from "./_Constants/siteNavItems";
import GridContainer from "Modules/Layout/BLC/Grid/Container/GridContainer";

export default function SiteLayout({ routeMapperProps }: LayoutProps) {
  return (
    <section className="siteLayout">
      <header>
        <HorizontalNavbar items={siteNavItems} />
      </header>

      <main className="content">
        {routeMapperProps && <RouteMapper {...routeMapperProps} />}
      </main>

      <footer>
        <GridContainer>
          <p>2021 BLC</p>
        </GridContainer>
      </footer>
    </section>
  );
}
