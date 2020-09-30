import React from "react";
import risingvine from "./images/ben_yellow_staircase_website.jpg";
import vanishingStaircase from "./images/vanishing_staircase.jpg";
import Carousel from 'nuka-carousel';

export default class extends React.Component {

  constructor(props) {
    super(props);
    this.carousel = React.createRef();
  }

  componentDidMount() {
    // This is necessary to ensure the carousel resizes to the correct size after first load (otherwise
    //it sets the size before the image has loaded and then the slide has no height).
    this.setDimensions();
  }

  // It is a bit paranoid to call this also onLoad of the image, but we want to be 100% sure the 
  // carousel sizes correctly.
  setDimensions() {
    setTimeout(() => {
      this.carousel.current.setDimensions();
    }, 0);
  }

  render() {
    return (
      <div className="mw7 relative center avenir">
        <article className="db mb4 br2-ns no-underline bg-white black">
          <Carousel
            ref={this.carousel}
            heightMode="first"
            autoplay={true}
            speed={500}
            wrapAround={true}
            renderCenterLeftControls={({ previousSlide }) => null }
            renderCenterRightControls={({ nextSlide }) => null }
            >
            <img 
              src={risingvine}
              className="w-100"
              alt="rising vine" onLoad={() => this.setDimensions()}/>
            <img 
              src={vanishingStaircase}
              className="w-100"
              alt="rising vine vanishing staircase" />
          </Carousel>
        </article>
        <article className="mb4 tc">
          <div className="flex justify-center mb4"><div className="bt bw2 h1 w4"></div></div>
          <div className="f-subheadline-ns f2 lh-title fw1 mb4">We believe in</div>
          <div className="f-headline-ns f1 lh-solid ttu tracked i underline bg-black white pa2 mb4">
            great <br/> design
          </div>
          <div className="f-subheadline-ns f2 lh-title fw1 mb4">applied to</div>
          <div className="f-headline-ns f1 lh-solid ttu tracked i underline bg-black white pa2 mb4">sustainably sourced</div>
          <div className="f-subheadline-ns f2 lh-title fw1 mb4">and</div>
          <div className="f-headline-ns f1 lh-solid ttu tracked i underline bg-black white pa2 mb4">ethically produced</div>
          <div className="f-subheadline-ns f2 lh-title fw1 mb4">clothing.</div>
          <div className="flex justify-center"><div className="bt bw2 h1 w4"></div></div>
        </article>
      </div>
    )
  };
};
