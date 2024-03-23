import React from 'react';
import './footer.css';


function Footer() {
    return (
      <footer className="footer">
        <div className="contact-info">
          Chaînon & Fondation Chaînon<br />
          514 845-0151<br />
          4373, ave. De l'Esplanade Montréal, QC H2W 1T2
        </div>
        <div className="newsletter">
          <p className="newsletter-text">Abonnez-vous à notre infolettre</p>
          <form className="newsletter-form">
            <label htmlFor="email" className="visually-hidden">Email</label>
            <input type="email" id="email" placeholder="Email" className="newsletter-input" />
            <button type="submit" className="newsletter-button">
              <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/b0ad56a69c3679194068aa6ffb6a459d91c7192b6e190895261e941f5b32f311?apiKey=78b3824f9340487c994130168bf8c43f&" 
              alt="Submit" className="newsletter-icon" />
            </button>
          </form>
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/9800c8d98eafbdc612bc21bad63ee3c4b463d737b5eab056f9d954179323830f?apiKey=78b3824f9340487c994130168bf8c43f&" 
          alt="Newsletter" className="newsletter-image" />
        </div>
      </footer>
    );
  }

export default Footer;