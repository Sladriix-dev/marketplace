import React from 'react';
import './addProducts.css';



const AddProducts = () => {

  return (
  
<div>
      
      <h1 class="add-product-title">Ajouter des produits</h1>

      <div class="add-product-div">

      <form action="" method="get" class="add-product-form">
            <div class="form-example">
                <input type="text" name="name" id="name" placeholder="Nom du produit" required></input>
            </div>
            <div class="form-example">
                <input type="textaera" name="name" id="name" placeholder="Description du produit" required></input>
            </div>
            <div class="form-example">
                <input type="number" min="0" max="100" step="0.5" name="prix" id="prix" placeholder="Prix du produit" required></input>
            </div>
            <div class="form-example">
                <input type="text" name="name" id="name" placeholder="Image du produit" required></input>
            </div>
            <div class="add-product-form-button">
                <input type="submit" value="Enregistrer le produit"></input>
            </div>
            </form>

            </div>
        
 
      </div>
    
  )
}

export default AddProducts