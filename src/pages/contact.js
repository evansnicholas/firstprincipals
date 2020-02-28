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

    const [name, setName] = useState("");
    const [formStatus, setFormStatus] = useState(FormNotSubmittedStatus);

    const handleSubmit = (e) => {
        const formData = {
            name
        }
        axios.post("/", {
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          data: encode({ "form-name": "contact", ...formData })
        })
          .then(() => setFormStatus(FormSubmitSuccessStatus))
          .catch(error => {console.log(error); setFormStatus(FormSubmitErrorStatus)});
    
        e.preventDefault();
      };

    const renderForm = () => (
      <form onSubmit={handleSubmit}>
        <p>
          <label>
            Your Name:
            <input
              type="text"
              name="name"
              value={name}
              onChange={e => setName(e.target.value)}
            />
          </label>
        </p>
        <p>
          <button type="submit">Send</button>
        </p>
      </form>
    );

    const renderSuccessMessage = () => (
      <p>Thanks for getting in touch, we will respond as soon as possible.</p>
    );

    const renderErrorMessage = () => (
      <p>Something went wrong submitting the form, please try again.</p>
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
        {renderContact()}
      </Site>
    );
}

    