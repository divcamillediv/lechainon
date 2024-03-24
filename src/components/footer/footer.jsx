import * as React from "react";
import "./footer.css";


function Footer() {
  return (
    <>
      <div className="footer">
        <div className="contact-info">
          Chaînon & Fondation Chaînon
          <br />
          514 845-0151
          <br />
          4373, ave. De l'Esplanade Montréal, QC H2W 1T2
        </div>
        <div className="newsletter-signup">
          <div className="newsletter-text">
            Abonnez-vous à notre infolettre
            <br />
        </div>
          <form className="email-form">
            <input
              type="email"
              className="email-input"
              placeholder="Email"
            />
            <button type="submit" className="email-submit-button">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/b0ad56a69c3679194068aa6ffb6a459d91c7192b6e190895261e941f5b32f311?apiKey=78b3824f9340487c994130168bf8c43f&"
                className="email-icon"
              />
            </button>
          </form>
          <img
            loading="lazy" src="./src/assets/logo.png"
            className="logo" />
        </div>
      </div>
    </>
  );
}

export default Footer;
