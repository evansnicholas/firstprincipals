import React from "react";
import Site from "../components/Site";
import aboutImage from "../components/images/about.jpeg";
import timelineImage from "../components/images/Timeline_27032020.png"
import { LinkClasses } from "../constants";

export default () => (
  <Site>
    <article className="db pb2 ph3 ph2-l mb4 br2-ns no-underline bg-white black">
      <div className="flex flex-column flex-row-ns pb5-ns pb4">
        <div className="pr3-ns mb4 mb0-ns w-100 w-40-ns">
          <img
            src={aboutImage}
            className="br-100 db"
            alt="Nick & Jeroen."
            />
        </div>
        <div className="w-100 w-60-ns pl3-ns">
          <p className="f5 lh-copy tj">
            <span className="b">First Principals</span> is <span className="b">Jeroen</span> and <span className="b">Nick's </span>
             (sustainable) clothing project, based in Utrecht. It all started in 2017 with a screen-printing course at &nbsp;
            <a className={LinkClasses} href="https://kapitaalutrecht.nl/">Kapitaal</a>. We became captivated by the technique
            and immediately agreed to go printing again, this time on t-shirts. The thrill of creating
            our own clothing convinced us to spend more time understanding how clothes are made. Since then we have 
            been collecting designs, learning the basics of sewing and sourcing sustainable t-shirts to print on. All with 
            the aim of creating cool t-shirts in a manner that is respectful of both humans and the environment through
            the entire production chain. 
          </p>
        </div>
      </div>
      <div>
        <header className="w-50-ns pr4-ns pb4">
          <h1 className="f3-ns f5 fw5 mb1 mb3-ns mt0 lh-copy">Our Journey</h1>
          <div className="bb bw1 w-25-ns w-10" />
        </header>
        <div className="center">
          <div className="w-80-ns w-100 center">
            <img
            src={timelineImage}
            alt="Our journey timeline"
          /></div>
        </div>
      </div>
    </article>
  </Site>
);