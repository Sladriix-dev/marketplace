import fbIcon from "../../assets/facebook-brands.svg";
import instaIcon from "../../assets/instagram-square-brands.svg";
import twitterIcon from "../../assets/twitter-square-brands.svg";
import linkedinIcon from "../../assets/linkedin-brands.svg";
import locationIcon from "../../assets/location-dot-solid.svg";
import phoneIcon from "../../assets/phone-solid.svg";
import hourlyIcon from "../../assets/clock-solid.svg";
import emailIcon from "../../assets/envelope-solid.svg";


import React from 'react';
import "./footer.css";



const Footer = () => {
  return (
<section class="footer">

  <h2>Retrouvez-nous sur les réseaux sociaux !</h2>

  <div class="reseaux-logo">
      <img class="social-icon"
        alt="facebook"
        src={fbIcon}
      />
      <img class="social-icon"
        alt="linkedin"
        src={linkedinIcon}
      />
      <img class="social-icon"
        alt="instagram"
        src={instaIcon}
      />
      <img class="social-icon"
        alt="twitter"
        src={twitterIcon}
      />
  </div>

  <div class="separator"></div>

  <div class="display-flex-footer">
    <div class="carte-footer">
      <img
        alt="localisation"
        src={locationIcon}
      />
      <p class="texte-noir-footer">
        ADRESSE :<br />
        25 Rue Claude Tillier<br />
        75012 Paris
      </p>
    </div>

    <div class="carte-footer">
      <img
        alt="telephone"
        src={phoneIcon}
      />
      <p class="texte-noir-footer">TELEPHONE :<br /> 01 55 43 26 65</p>
    </div>

    <div class="carte-footer">
      <img
        alt="horaires"
        src={hourlyIcon}
      />
      <p class="texte-noir-footer">
        HORAIRES D'OUVERTURE :<br />
        Lundi au Vendredi<br />
        8h45 - 18h
      </p>
    </div>

    <div class="carte-footer">
      <img
        alt="email"
        src={emailIcon}
      />
      <p class="texte-noir-footer">
        EMAIL :<br />
        ipssi@hotmail.com
      </p>
    </div>
  </div>

  <div class="separator"></div>

  <div class="liens-footer">
    <a class="lien-noir-footer" href="">Politique de confidentialité</a>
    <a class="lien-noir-footer" href="">Conditions générales</a>
    <a class="lien-noir-footer" href="">Mentions légales</a>
  </div>

  <div class="credits">
    <a class="copyright" href="https://ecole-ipssi.com/" target="_blank">Site réalisé dans le cadre d'un projet de groupe IPSSI</a>
  </div>

</section>
  )
}

export default Footer