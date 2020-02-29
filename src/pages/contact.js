import React, { useState } from "react";
import Site from "../components/Site";
import axios from 'axios';

const encode = (data) => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

const FormNotSubmittedStatus = "formNotSubmitted";
const FormSubmitSuccessStatus = "formSubmitSuccess";
const FormSubmitErrorStatus = "formSubmitError";


export default () => {

    const [emailAddress, setEmailAddress] = useState("");
    const [message, setMessage] = useState("");
    const [emailAddressRequiredAlert, setEmailAddressRequiredAlert] = useState(false);
    const [formStatus, setFormStatus] = useState(FormNotSubmittedStatus);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (emailAddress === "") {
          setEmailAddressRequiredAlert(true);
          return;
        } 
        const formData = {
            emailAddress,
            message
        }
        axios.post("/",
          encode({ "form-name": "contact", ...formData }),
          { headers: { "Content-Type": "application/x-www-form-urlencoded" } }
        )
          .then(() => setFormStatus(FormSubmitSuccessStatus))
          .catch(error => {console.log(error); setFormStatus(FormSubmitErrorStatus)});
      };

    const inputBaseClasses = "pa2 ba bw1 w-100";
    const emailBorderColour = emailAddressRequiredAlert ? "b--red" : "b--black"; 

    const renderForm = () => (
        <form
          onSubmit={handleSubmit}
          name="contact"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          <div className="mt3">
            <label className="db fw4 lh-copy f6" for="email-address">
              Your email address*:
            </label>
            <input
              className={`${inputBaseClasses} ${emailBorderColour}`}
              id="email-address"
              type="text"
              name="email-address"
              value={emailAddress}
              onChange={e => setEmailAddress(e.target.value)}
            />
          </div>
          <div className="mt3">
            <label className="db fw4 lh-copy f6" for="message">
              Your message:
            </label>
            <textarea
              className={`${inputBaseClasses} b--black`}
              id="message"
              name="message"
              rows="10"
              onChange={e => setMessage(e.target.value)}
            >
              {message}
            </textarea>
          </div>
          <div className="mt3">
            <button
              className="f6 br2 pa2 bn white bg-black b pointer"
              type="submit"
            >
              Send
            </button>
          </div>
        </form>
    );

    const renderSuccessMessage = () => (
      <p className="b">Thanks for getting in touch, we will respond as soon as possible.</p>
    );

    const renderErrorMessage = () => (
      <p className="b">Something went wrong submitting the form, please try again.</p>
    );

    const renderContact = () => {
        switch (formStatus) {
            case FormNotSubmittedStatus: return renderForm();
            case FormSubmitSuccessStatus: return renderSuccessMessage();
            case FormSubmitErrorStatus: return renderErrorMessage();
            default: return renderErrorMessage();
        }
    }

    return (
      <Site>
        <article className="pb3 ph3 ph0-l">
          <h1>Contact</h1>
          <p className="lh-copy">
            If you have a question for us please don't hesitate to get in touch.
            You can reach us on social media, write an email to
            info [at] fromfirstprincipals.com or fill out the contact form below. We will do our best
            to respond swiftly.
          </p>
          {renderContact()}
        </article>
      </Site>
    );
}

    