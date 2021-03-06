import React from "react";
import jsonp from "jsonp";
import instaLogo from "./icons/insta.png";
import facebookLogo from "./icons/facebook.png";
import { Link } from "gatsby";
import TrustPilot from "./TrustPilot";

export default class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { email: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderSignUpForm = this.renderSignUpForm.bind(this);
    this.renderMessage = this.renderMessage.bind(this);
  }

  handleChange(event) {
    this.setState({
      email: event.target.value,
      subscribeAttempted: false,
      subscribeError: false
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const email = this.state.email;
    const validEmail = this.validateEmailAddress(email);
    if (!validEmail) {
      return alert("Please enter a valid email address.");
    }
    const url = `https://fromfirstprincipals.us20.list-manage.com/subscribe/post-json?u=36f4b0b47de14444bc76a2c25&id=5e54179006&EMAIL=${email}`;
    jsonp(
      url,
      {
        param: "c"
      },
      err => {
        const newState = {
          subscribeAttempted: true
        };
        if (err) {
          console.log(`Sign up error: ${err.message}`);
          newState.subscribeError = true;
          const state = Object.assign(this.state, newState);
          return this.setState(state);
        }
        const state = Object.assign(this.state, newState);
        this.setState(state);
      }
    );
  }

  validateEmailAddress(email) {
    return email.indexOf("@") > -1;
  }

  renderSignUpForm() {
    return (
      <form
        className="mw7 center pb4"
        action=""
        method="get"
        onSubmit={this.handleSubmit}
      >
        <fieldset className="cf bn ma0 pa0" onSubmit={this.handleSubmit}>
          <legend className="pa0 f6 fw6 mb2 black-80">
            Sign up to stay in touch:
          </legend>
          <div className="cf sans-serif ba b--black-20 br2">
            <label className="clip" htmlFor="email-address">
              Email Address
            </label>
            <input
              className="f6 f7-l input-reset bn fl black-80 bg-white pa3 lh-solid w-100 w-75-m w-80-l br2-ns br--left-ns"
              placeholder="Your Email Address"
              type="text"
              name="EMAIL"
              value={this.state.value}
              onChange={this.handleChange}
              id="email-address"
            />
            <input
              className="f6 button-reset fl tc bn bg-animate bg-black hover-bg-black white b pointer pv3 w-100 w-25-m w-20-l br2-ns br--right-ns"
              type="submit"
              value="Subscribe"
            />
          </div>
        </fieldset>
        {/*<!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->*/}
        <div style={{ position: "absolute", left: -5000 }}>
          <div aria-hidden="true">
            <input
              type="text"
              name="b_36f4b0b47de14444bc76a2c25_5e54179006"
              tabIndex="-1"
              value=""
              readOnly
            />
          </div>
          <input
            type="submit"
            value="Subscribe"
            name="subscribe"
            id="mc-embedded-subscribe"
            className="button"
          />
        </div>
      </form>
    );
  }

  renderMessage() {
    if (this.state.subscribeError) {
      return (
        <p>Unfortunately we couldn't sign you up, please try again later.</p>
      );
    }
    return (
      <p className="pb2">
        Thank you for signing up! We will let you know when cool stuff is
        happening.
      </p>
    );
  }

  render() {
    return (
      <div className="avenir bb bt b--black-10 pa3 pv4-ns ph0-l">
        {this.state.subscribeAttempted
          ? this.renderMessage()
          : this.renderSignUpForm()}
        <div className="h-100">
          <div className="flex justify-center pb4">
            <div className="pr4 f6">
              <Link className="black-70 no-underline" to="/privacy">
                Privacy Policy
              </Link>
            </div>
            <div className="pr4 f6">
              <Link className="black-70 no-underline" to="/faq">
                F.A.Q.
              </Link>
            </div>
            <div className="f6">
              <Link className="black-70 no-underline" to="/contact">
                Contact
              </Link>
            </div>
          </div>
          <div className="flex flex-column items-center w-100">
            <div className="flex flex-row pb4">
              <div className="black-70 pr2">
                <a
                  href="https://www.instagram.com/firstprincipals/"
                  className="link dim dib black-70"
                  title="First Principals on Instagram"
                >
                  <img src={instaLogo} alt="Instagram" width="32" />
                </a>
              </div>
              <div className="black-70">
                <a
                  href="https://www.facebook.com/FromFirstPrincipals/"
                  className="link dim dib black-70"
                  title="First Principals on Instagram"
                >
                  <img src={facebookLogo} alt="Facebook" width="32" />
                </a>
              </div>
            </div>
            <div className="pb3">
              <TrustPilot />
            </div>
            <div className="f7 black-70 tc">
              Copyright © First Principals 2020
            </div>
          </div>
        </div>
      </div>
    );
  }
}
