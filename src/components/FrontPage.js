import React from "react";
import peopleInField from "./images/people_in_field_4x3.jpg";
import losanges_4x3 from "./images/losange_4x3.jpg";
import flaxFromTop from "./images/flax_from_top.jpg";
import losangesNoBackground from "./images/losanges_no_background.jpg";
import GarmentMakingVideo from "../blog-posts/videos/Garment_Making.mp4";
import Carousel from 'nuka-carousel';
import { Link } from "gatsby";

class FrontPage extends React.Component {

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
      <div className="mw7 relative center avenir pt2">
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
              src={losanges_4x3}
              className="w-100"
              alt="Linen T printed with losange pattern" onLoad={() => this.setDimensions()}/>
            <img 
              src={peopleInField}
              className="w-100"
              alt="Harvesters in flax field" />
          </Carousel>
        </article>
        <article className="mb4 tc">
          <div className="flex justify-center mb4"><div className="bt bw2 h1 w4"></div></div>
          <div className="flex flex-wrap pb2 pb4-ns ph2 ph0-l">
            <div className="w-100 w-50-ns flex items-center">
              <div className="f2 lh-title fw3 tl w-100 pl2 pr5 bl">From the raw material ...</div>
            </div>
            <div className="w-100 w-50-ns mv3">
              <img
                src={flaxFromTop}
                className="w-100"
                alt="Flax lying on ground." />
            </div>
            <div className="flex dn-ns items-center">
              <div className="f2 lh-title fw3 tr w-100 pl5 br pr2">... to the final product.</div>
            </div>
            <div className="w-100 w-50-ns mv3">
              <img
                src={losangesNoBackground}
                className="w-100"
                alt="Screen printed linen T-Shirt." />
            </div>
            <div className="dn flex-ns w-100 w-50-ns items-center pr2">
              <div className="f2 lh-title fw3 tr w-100 br pr2 pl5">... to the final product.</div>
            </div>
          </div>

          <div className="f2 lh-title fw3 pb3">We strive to be a</div>
          <div className="f2 lh-title fw3 ttu tracked i pb3 underline">vertically integrated</div>
          <div className="f2 lh-title fw3 pb3">clothing company.</div>
          <div>
            <Link className="f5 i dib outline pa2 black no-underline" to="/philosophy">What does that mean?</Link>
          </div>
        </article>
        <article className="mb4 tc">
          <div className="flex justify-center mb4"><div className="bt bw2 h1 w4"></div></div>
          <video autoPlay muted loop className="w-100">
            <source src={GarmentMakingVideo} type="video/mp4" />
          </video>
        </article>
      </div>
    )
  };
};

export default FrontPage;