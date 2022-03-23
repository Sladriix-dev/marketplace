import React from 'react'
import './bestProducts.css';

import Product from '../Products/Product/Product';


const BestProducts = () => {
  return (
    <div>
      
      <h1 class="h1-title">Retrouvez nos derniers produits !</h1>

      <div class="black-separator"></div>

      <div class="three-product-inline">

        <div class="product-inline">

          <img class="product-image" src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHByb2R1Y3R8ZW58MHx8MHx8&w=1000&q=80" width="150px" height="150px"></img>
          <div class="product-title">Product Title</div>
          <div class="product-description">Product Description</div>
          <div class="product-price">14.99 €</div>
          <button class="buy-product-button" to="www.google.com" renderAs={<Product />}>En savoir plus</button>

        </div>

        <div class="product-inline">

          <img class="product-image" src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHByb2R1Y3R8ZW58MHx8MHx8&w=1000&q=80" width="150px" height="150px"></img>
          <div class="product-title">Product Title</div>
          <div class="product-description">Product Description</div>
          <div class="product-price">14.99 €</div>
          <button class="buy-product-button">Acheter</button>

        </div>

        <div class="product-inline">

          <img class="product-image" src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHByb2R1Y3R8ZW58MHx8MHx8&w=1000&q=80" width="150px" height="150px"></img>
          <div class="product-title">Product Title</div>
          <div class="product-description">Product Description</div>
          <div class="product-price">14.99 €</div>
          <button class="buy-product-button">Acheter</button>

        </div>

      </div>  
      
      </div>

    
  )
}

export default BestProducts