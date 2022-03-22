import React from 'react';
import './footer.css';

const Footer = () => {
  return (
<section class="footer">

  <div class="reseaux-logo">
    <div class="reseaux">
      <img
        alt="facebook"
        src="../assets/facebook-brands.svg/"
      />
      <img
        alt="linkedin"
        src="../assets/linkedin-brands.svg"
      />
      <img
        alt="instagram"
        src="../assets/instagram-square-brands.svg"
      />
      <img
        alt="twitter"
        src="../assets/twitter-square-brands.svg"
      />
    </div>

    <div class="logo">
      <img
        alt="logo"
        src=""
      />
    </div>
  </div>

  <div class="souligne-footer"></div>

  <div class="display-flex-footer">
    <div class="carte-footer">
      <img
        alt="localisation"
        src="../assets/location-dot-solid.svg"
      />
      <p class="texte-noir-footer">
        Adresse :<br />
        25 Rue Claude Tillier<br />
        75012 Paris
      </p>
    </div>

    <div class="carte-footer">
      <img
        alt="telephone"
        src="../assets/phone-solid.svg"
      />
      <p class="texte-noir-footer">Tel : 01 55 43 26 65</p>
    </div>

    <div class="carte-footer">
      <img
        alt="horaires"
        src="../assets/clock-solid.svg"
      />
      <p class="texte-noir-footer">
        Horaires d'ouverture :<br />
        Lundi au Vendredi<br />
        8h45 - 18h
      </p>
    </div>

    <div class="carte-footer">
      <img
        alt="email"
        src="../assets/envelope-solid.svg"
      />
      <p class="texte-noir-footer">
        Email :<br />
        ipssi@hotmail.com
      </p>
    </div>
  </div>

  <div class="souligne-footer"></div>

  <div class="liens-footer">
    <a class="lien-noir-footer" href="">Politique de confidentialité</a>
    <a class="lien-noir-footer" href="">Conditions générales</a>
    <a class="lien-noir-footer" href="">Mentions légales</a>
    <a class="lien-noir-footer" href="">Réalisé par xxx</a>
  </div>

</section>
  )
}

export default Footer