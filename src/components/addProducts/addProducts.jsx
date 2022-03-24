import React, { useState, useEffect } from 'react';
import './addProducts.css';

import axios from 'axios'

const AddProducts = () => {

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [price, setPrice] = useState(0)

    const handleOnChangeTitle = (event) => {
        setTitle(event.target.value)
    }

    const handleOnChangeDescription = (event) => {
        setDescription(event.target.value)
    }

    const handleOnChangePrice = (event) => {
        setPrice(event.target.value)
    }

    const createProduct = () => {
        axios.put("http://127.0.0.1:3000/product/insert", {
            "title": title,
            "description": description,
            "price": price,
            "filters": [ {
                "category": "Album"
            }]

        })
    }

  return (
  
<div>
      
      <h1 class="add-product-title">Ajouter des produits</h1>

      <div class="add-product-div">

      <form action="" method="get" class="add-product-form">
            <div class="form-example">
                <input type="text" name="name" id="name" placeholder="Nom du produit" required onChange={handleOnChangeTitle}></input>
            </div>
            <div class="form-example">
                <input type="textaera" name="name" id="name" placeholder="Description du produit" required onChange={handleOnChangeDescription}></input>
            </div>
            <div class="form-example">
                <input type="number" min="0" max="100" step="0.5" name="prix" id="prix" placeholder="Prix du produit" required onChange={handleOnChangePrice}></input>
            </div>
            <div class="form-example">
                <input type="text" name="name" id="name" placeholder="Image du produit"></input>
            </div>
            <div class="add-product-form-button">
                <input type="submit" value="Enregistrer le produit" onClick={() => createProduct()}></input>
            </div>

            </form>
            </div>
        
      </div>
    
  )
}

export default AddProducts