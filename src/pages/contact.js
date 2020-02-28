import React from 'react';
import Site from "../components/Site";


export default () => (
    <Site>
        <form name="contact" method="POST" data-netlify="true">
          <p>
            <label>Your Name: <input type="text" name="name" /></label>   
          </p>
          <p>
            <button type="submit">Send</button>
          </p>
        </form>
    </Site>
);