import React from 'react';
import './footer.css';

const Footer = () => {
  return (
<section class="footer">
  <div class="traits-footer-haut">
    <div class="trait-bleu"></div>
    <div class="trait-jaune"></div>
    <div class="trait-rouge"></div>
  </div>

  <div class="reseaux-logo">
    <div class="reseaux">
      <img
        alt="facebook"
        src=""
      />
      <img
        alt="linkedin"
        src=""
      />
      <img
        alt="instagram"
        src=""
      />
      <img
        alt="twitter"
        src=""
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
        src=""
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
        src=""
      />
      <p class="texte-noir-footer">Tel : 01 55 43 26 65</p>
    </div>

    <div class="carte-footer">
      <img
        alt="horaires"
        src=""
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
        src=""
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
    <a class="lien-noir-footer" href="">Réalisé par Groupe N°</a>
  </div>

  <div class="traits-footer-bas">
  <div class="trait-bleu"></div>
  <div class="trait-jaune"></div>
  <div class="trait-rouge"></div>
  </div>
</section>
  )
}

export default Footer