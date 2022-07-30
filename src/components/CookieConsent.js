import React from "react";
import { CSSTransition } from "react-transition-group";
import * as styles from "./CookieConsent.module.scss";
import { CookieConsentKey } from "../constants";
import { Link } from "gatsby";



class CookieConsent extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      displayCookieConsent: false
    };
  }

  handleClick() {
    this.setCookieConsent();
    this.setState({
      displayCookieConsent: false
    });
  }

  componentDidMount() {
    const cookieConsent = this.getCookieConsent();
    if (cookieConsent) {
      // The user has already accepted cookies.
      return;
    }
    this.setState({
      displayCookieConsent: true
    });
  }

  getCookieConsent() {
    if (window && window.localStorage) {
      const consent = window.localStorage.getItem(CookieConsentKey);
      return Boolean(consent);
    }
  }

  setCookieConsent() {
    if (window && window.localStorage) {
      window.localStorage.setItem(CookieConsentKey, true);
    }
  }

  render() {
    const inProp = this.state.displayCookieConsent;

    return (
      <div>
        <CSSTransition
          in={inProp}
          unmountOnExit
          classNames={{
            exit: styles.cookieConsentExit,
            exitActive: styles.cookieConsentExitActive
          }}
          timeout={500}
        >
          <div
            key="cookie-transition"
            className="flex flex-wrap items-center tl pv3 bb b--black-10"
          >
            <div className="w-75-ns w-100 ph0-l ph3 pb0-ns pb2 tl-ns">
              By continuing to use this website you agree to our <Link className="black" to="/privacy">Privacy Policy</Link>.
            </div>
            <div className="ph0-ns ph3">
              <button
                onClick={this.handleClick}
                className="f6 br2 pa2 bn white bg-black b pointer"
              >
                I AGREE
              </button>
            </div>
          </div>
        </CSSTransition>
      </div>
    );
  }
}

export default CookieConsent;