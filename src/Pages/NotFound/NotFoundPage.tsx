import GridContainer from "Modules/Layout/BLC/Grid/Container/GridContainer";
import React from "react";

import "./NotFoundPage.scss";

export default function NotFoundPage() {
  return (
    <section className="notFoundPage">
      <header>
        <GridContainer>
          <h2>Not found page</h2>
        </GridContainer>
      </header>

      <div className="content">
        <GridContainer>
          <p>
            The link is incorrect or the page has been removed. Make sure the
            link you are trying to open is correct.
          </p>
        </GridContainer>
      </div>
    </section>
  );
}
