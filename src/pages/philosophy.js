import React from "react";
import Site from "../components/Site";

export default () => (
  <Site>
    <h1 className="ph3 ph0-l">Philosophy</h1>
    <article className="cf ph3 ph0-l pv2 pv5-ns">
      <header className="fn fl-ns w-25-ns pr4-ns">
        <h1 className="f3-ns f5 fw5 mb1 mb3-ns mt0 lh-copy">Context</h1>
        <div className="bb bw1 w-25-ns w-10" />
      </header>
      <div className="fn fl-ns w-75-ns">
        <p className="f5-ns f6 lh-copy measure mt0-ns tj">
          Clothing, like food, is an essential everyday concern. What we wear is of crucial importance, not only because
          it keeps us decent and comfortable, but also because it is a medium for expressing identity. As has been well documented,
          the global production mechanisms that fulfill our need for clothing are destructive and abusive. Overly intensive industrial agricultural
          practices, fossil fuel based synthetic fibre production and slave-like factory environments have sadly become unavoidable constituents of our
          clothing economy. Consumers no longer know where their clothing was made, and by whom. We, however, refuse to accept this state of affairs.
          We don't believe that current practices are immutable. Starting from a set of basic principles, we have decided to make clothes differently.   
        </p>
      </div>
    </article>

    <article className="cf ph3 ph0-l pv2 pv5-ns">
      <header className="fn fl-ns w-25-ns pr4-ns">
        <h1 className="f3-ns f5 fw5 mb1 mb3-ns mt0 lh-copy">Principles</h1>
        <div className="bb bw1 w-25-ns w-10" />
      </header>
      <div className="fn fl-ns w-75-ns">
        <h2 className="pa0 ma0 f5-ns f6 lh-copy measure mt0-ns tj i">Know the raw materials</h2>
        <p className="f5-ns f6 lh-copy measure mt0-ns tj">
          The fabrics and trimmings (buttons, zips etc...) we use must be chosen with the utmost care to minimize environmental impact.
          This entails avoiding oil based synthetic fibres and ensuring all natural fibres are cultivated in a responsible manner.
        </p>

        <h2 className="pa0 ma0 f5-ns f6 lh-copy measure mt0-ns tj i">Know the maker</h2>
        <p className="f5-ns f6 lh-copy measure mt0-ns tj">
          We must ensure that no abusive labour practices are employed in the process of transforming the raw materials into the finished garment.
          This applies to any human work involved in the entire production process: from harvesting the raw material, to spinning and weaving the fabric, to 
          stitching the garment together.
        </p>

        <h2 className="pa0 ma0 f5-ns f6 lh-copy measure mt0-ns tj i">Understand the production process</h2>
        <p className="f5-ns f6 lh-copy measure mt0-ns tj">
          In order to ensure a final garment of the highest quality, we must understand each step in the process. We must know how to grow the fibres, 
          how to spin and weave, how to design pattern pieces and finally how to stitch these together into finished garments. Without this knowledge, we
          cannot ensure we are using the best possible techniques for producing the best garments with the smallest environmental impact.
        </p>

        

        <h2 className="pa0 ma0 f5-ns f6 lh-copy measure mt0-ns tj i">Clothing over fashion</h2>
        <p className="f5-ns f6 lh-copy measure mt0-ns tj">
          Clothing is a visual medium for expressing identity. This means that we care deeply about how our clothing looks and how it makes our 
          customers look. However, we also believe some styles will always look good, no matter what the current fashion. We aim to make clothing that
          will last, both physically and stylistically. 
        </p>
      </div>
    </article>

    <article className="cf ph3 ph0-l pv2 pv5-ns">
      <header className="fn fl-ns w-25-ns pr4-ns">
        <h1 className="f3-ns f5 fw5 mb1 mb3-ns mt0 lh-copy">Execution</h1>
        <div className="bb bw1 w-25-ns w-10" />
      </header>
      <div className="fn fl-ns w-75-ns">
        <p className="f5-ns f6 lh-copy measure mt0-ns tj">
          In order to comply with our foundational principles, First Principals strives to operate as a <b>vertically integrated</b> clothing company.
        </p>
      </div>
    </article>

  </Site>
);
