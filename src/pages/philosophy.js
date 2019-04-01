import React from "react";
import Site from "../components/Site";

export default () => (
  <Site>
    <article className="cf ph3 ph0-ns pv2 pv5-ns">
      <header className="fn fl-ns w-50-ns pr4-ns">
        <h1 className="f3-ns f5 fw5 mb1 mb3-ns mt0 lh-copy">The Vision</h1>
        <div className="bb bw1 w-25-ns w-10" />
      </header>
      <div className="fn fl-ns w-50-ns">
        <p className="f5-ns f6 lh-copy measure mt0-ns tj">
          A first principle is the most basic starting point from which all else
          follows. To derive a product from first principles means to understand
          every step of its creation, from cotton seed to shop window.
        </p>
      </div>
    </article>

    <article className="cf ph3 ph0-ns pv2 pv5-ns">
      <header className="fn fl-ns w-50-ns pr4-ns">
        <h1 className="f3-ns f5 fw5 mb1 mb3-ns mt0 lh-copy">The Reality</h1>
        <div className="bb bw1 w-25-ns w-10" />
      </header>
      <div className="fn fl-ns w-50-ns">
        <p className="f5-ns f6 lh-copy measure mt0-ns tj">
          In practice production chains extend over large swathes of space and
          time which makes it extremely difficult to grasp them completely, let
          alone control every step. Take something as simple as a white cotton
          t-shirt. The cotton must be grown from seed in a country with the
          correct climate. It must be harvested and processed into (coloured)
          fabric. It must be transported to a factory where it must be cut and
          sewn into a garment. It must be transported again to a shop or
          warehouse. And this is just the production of the physical good.
          Without design and marketing the t-shirt would remain without value,
          and potential wearers would remain unaware of its existence.
        </p>
      </div>
    </article>

    <article className="cf ph3 ph0-ns pv2 pv5-ns">
      <header className="fn fl-ns w-50-ns pr4-ns">
        <h1 className="f3-ns f5 fw5 mb1 mb3-ns mt0 lh-copy">The Solution</h1>
        <div className="bb bw1 w-25-ns w-10" />
      </header>
      <div className="fn fl-ns w-50-ns">
        <p className="f5-ns f6 lh-copy measure mt0-ns tj">
          Our solution is to gradually extend our control of the production
          process, starting with the final product and working back through the
          different stages. As our competences and resources grow we can bring
          more and more stages under our own control.
        </p>
        <p className="f5-ns f6 lh-copy measure mt0-ns tj">
          Another aspect of the solution is to question the accepted first
          principles. Must we always make clothes from newly grown cotton-based
          textiles? Can we use recycled materials? Can we produce fabrics from
          other plants, or even other sources altogether?
        </p>
      </div>
    </article>

    <article className="cf ph3 ph0-ns pv2 pv5-ns">
      <header className="fn fl-ns w-50-ns pr4-ns">
        <h1 className="f3-ns f5 fw5 mb1 mb3-ns mt0 lh-copy">The Spelling</h1>
        <div className="bb bw1 w-25-ns w-10" />
      </header>
      <div className="fn fl-ns w-50-ns">
        <p className="f5-ns f6 lh-copy measure mt0-ns tj">
          Why didn't we spell principle properly? It doesn't matter how
          sustainable your clothes are, they also have to look cool, they have
          to make you feel like you're the First Principal.
        </p>
      </div>
    </article>

    <h1 className="bt bw1 pt3 ph3 ph0-ns">Products</h1>

    <div className="cf ph3 ph0-ns">
      <article className="fn fl-ns w-50-ns pr4-ns">
        <h2 className="mb4-ns mb2 ttu">#1: The T-Shirt</h2>
        <p className="ph0-ns ph2 lh-copy tj">
          For the t-shirt we start with a plain white T.
          From there we sew on the label and screen-print the design. The white t-shirt
          we use is from <a className="link" href="https://www.cottover.se/">Cottover</a>. We chose this manufacturer because
          their production chain aligns with our principles. Their GOTS and Fair Trade
          certifications gives us (some) assurance the t-shirts are made with
          respect for both humans and the environment.
        </p>
      </article>
      <article className="fn fl-ns w-50-ns">
        <h2 className="mb4-ns mb2 ttu">#2: The Tote Bag</h2>
        <p className="ph0-ns ph2 lh-copy tj">
          The starting point for the tote-bag is further back in the production process. We purchase
          unbleached cotton from the Utrecht fabric market (which takes place every Saturday morning).
          Our understanding of the cotton's provenance is patchy, we know only that it comes from India. 
          In the future we will look for a more traceable fabric. In our Utrecht workshop we then cut
          and sew the tote-bag. Finally we screen print the design.
        </p>
      </article>
    </div>
  </Site>
);
