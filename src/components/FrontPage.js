import React from "react";
import rethinkingtshirts from "./images/rethinking-tshirts-closer.jpg";
import nowtakingorders from "./images/launch-tshirts.jpg";
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
      <div className="mw7 center avenir">
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
              src={rethinkingtshirts}
              className="w-100"
              alt="rethinking t-shirts" onLoad={() => this.setDimensions()}/>
            <img 
              src={nowtakingorders}
              className="w-100"
              alt="now taking orders" />
          </Carousel>
        </article>
      </div>
    )
  };
};
