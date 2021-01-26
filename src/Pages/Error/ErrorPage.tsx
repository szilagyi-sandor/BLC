import React from "react";

import "./ErrorPage.scss";

import Container from "Modules/Layout/BLC/Components/Grid/Container/Container";

export default function ErrorPage() {
  return (
    <section className="errorPage">
      <header>
        <Container>
          <h2>Error page</h2>
        </Container>
      </header>

      <div className="content">
        <Container>
          <p>Something went wrong.</p>
        </Container>
      </div>
    </section>
  );
}
