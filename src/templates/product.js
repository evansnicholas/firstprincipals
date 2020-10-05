import React from "react";
import Site from "../components/Site";

export default ({ pageContext }) => (
  <Site>
    <section>
      <h2>{pageContext.title}</h2>
      <p>$19.99</p>
      <button
        class="snipcart-add-item"
        data-item-id={pageContext.id}
        data-item-price="19.99"
        data-item-url={`https://www.fromfirstprincipals.com/store/${pageContext.id}`}
        data-item-name="Rising Vine T-Shirt"
        >
        Add to cart
      </button>
    </section>
  </Site>
);