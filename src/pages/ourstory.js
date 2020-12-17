import React, { useState } from "react";
import Site from "../components/Site";
import aboutImage from "../components/images/about.jpeg";
import timelineImage from "../components/images/Timeline_27032020.png"
import { LinkClasses } from "../constants";
import s from './ourstory.module.scss';
import { Link } from "gatsby";

function ToggleContent({ chapter, activeChapters, children}) {
  const active = activeChapters[chapter];
  return active ? <div className={`${s.open}`}> { children } </div> : null;
};

function ToggleButton({ chapter, activeChapters }) {
  const open = activeChapters[chapter];
  const vertical = open ? s.close : s.open;
  return (
    <div className={`${s.plus}`}>
      <div className={`${s.horizontalPlus}`}></div>
      <div className={`${s.verticalPlus} ${vertical}`}></div>
    </div>
  );
}

function toggleChapter(chapter, activeChapters, setActiveChapters) {
  const updated = Object.assign({}, activeChapters, { [chapter]: !activeChapters[chapter] });
  setActiveChapters(updated);
}

export default () => {
  const [activeChapters, setActiveChapters] = useState({ 1: false, 2: false });

  return (
    <Site>
      <article className="db no-underline bg-white black">
        <div className="bb ph0-l ph2-m ph2 mb2 pt2">
          <div>
            <div className="fw1 f3 pb3 tc tl-ns">Chapter 2</div>
            <div className="relative">
              <h1 className="mt0 f1 tc dib tl-ns ph0-ns ph4">Learning to Make</h1>
              <button
                className={`f1 dib absolute right-0 bottom-0 ${s.button} pb2`}
                type="button"
                onClick={() => toggleChapter(2, activeChapters, setActiveChapters)}>
                <ToggleButton chapter="2" activeChapters={activeChapters} />
              </button>
            </div>
          </div>
          <ToggleContent chapter="2" activeChapters={activeChapters}>
            <div className="ph3 ph0-l pv3">
              <p className="f5 lh-copy tj">The initial experiments with t-shirts whetted our appetites and fuelled our ambitions. However we quickly realised that in order to live by
              our principle of controlling the entire production chain we would need to acquire new skills. In 2020, I (Nick) moved 
              to London to learn how to design and manufacture clothing. To read more about this, check out our <Link className={LinkClasses} to="/blog/learning-to-make">blog post</Link>.
              </p>
            </div>
          </ToggleContent>
        </div>
        <div className="ph0-l ph2-m ph2 pt2">
          <div>
            <div className="fw1 f3 pb3 tc tl-ns">Chapter 1</div>
            <div className="relative">
              <h1 className="mt0 f1 tc dib tl-ns ph0-ns ph4">The Utrecht Days</h1>
              <button 
                className={`f1 dib absolute right-0 bottom-0 ${s.button} pb2`}
                type="button"
                onClick={() => toggleChapter(1, activeChapters, setActiveChapters)}>
                <ToggleButton chapter="1" activeChapters={activeChapters} />
              </button>
            </div>
          </div>
          <ToggleContent chapter="1" activeChapters={activeChapters}>
            <div className="flex flex-column flex-row-ns pb4 ph3 ph2-l pv3">
              <div className="pr3-ns mb4 mb0-ns w-100 w-40-ns">
                <img
                  src={aboutImage}
                  className="br-100 db"
                  alt="Nick & Jeroen."
                  />
              </div>
              <div className="w-100 w-60-ns pl3-ns">
                <p className="f5 lh-copy tj">
                  <span className="b">First Principals</span> started as <span className="b">Nick</span> and <span className="b">Jeroen's </span>
                  sustainable clothing project, based in Utrecht. In 2017 we took a screen-printing course at &nbsp;
            <a className={LinkClasses} href="https://kapitaalutrecht.nl/">Kapitaal</a>. We became captivated by the technique
            and immediately agreed to go printing again, this time on t-shirts. The thrill of creating
            our own clothing convinced us to spend more time understanding how clothes are made. We began
            collecting designs, learning the basics of sewing and sourcing sustainable t-shirts to print on. All with
            the aim of creating cool t-shirts in a manner that is respectful of both humans and the environment through
            the entire production chain.
          </p>
              </div>
            </div>
            <div>
              <div className="center pt4">
                <div className="w-80-ns w-100 center">
                  <img
                    src={timelineImage}
                    alt="Our journey timeline"
                    />
                </div>
              </div>
            </div>
          </ToggleContent>
        </div>
      </article>
    </Site>
  );

};