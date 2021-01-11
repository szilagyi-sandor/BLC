import React from "react";

import "./ErrorPage.scss";

import GridContainer from "Modules/Layout/BLC/Grid/Container/GridContainer";

export default function ErrorPage() {
  return (
    <section className="errorPage">
      <header>
        <GridContainer>
          <h2>Error page</h2>
        </GridContainer>
      </header>

      <div className="content">
        <GridContainer>
          <p>Something went wrong.</p>
        </GridContainer>
      </div>
    </section>
  );
}
