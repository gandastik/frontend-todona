import React from "react";
import "./style.css";

const ContactPage = () => {
  return (
    <div>
      <h1 style={{ fontSize: "48px", margin: "0.5rem 0" }}>Contact</h1>
      <div>
        <figure class="fir-image-figure">
          <a
            class="fir-imageover"
            rel="noopener"
            target="_blank"
            href="https://twitter.com/_davideast"
          >
            <img
              class="fir-author-image fir-clickcircle"
              src="https://fir-rollup.firebaseapp.com/de-sm.jpg"
              alt="David East - Author"
            ></img>
            <div class="fir-imageover-color"></div>
            <img
              class="fir-imageover-image fir-clickcircle"
              src="https://fir-rollup.firebaseapp.com/twitter-logo.png"
            />
          </a>
          <figcaption>
            <div class="fig-author-figure-title">David East</div>
            <div class="fig-author-figure-title">
              Engineer at Google on Firebase.
            </div>
            <div class="fig-author-figure-title">
              Jan. 16th, 2017 &#8212; 5m read
            </div>
          </figcaption>
        </figure>
      </div>
    </div>
  );
};

export default ContactPage;
