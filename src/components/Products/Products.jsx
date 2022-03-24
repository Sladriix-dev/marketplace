import React, { useState, useEffect } from 'react';
import io from "socket.io-client";

import "./products.css";

//Variable global arrayOfCategories utilisées pour la valeur des checkbox afin de filtrer les produits
let arrayOfCategories = []


const Products = () => {
  const [products, setProducts] = useState([]);

  //const [arrayOfCategories, setArrayOfCategories] = useState([])
  useEffect(() => {
    console.log("useEffect called")
    searchProduct()
}, []);

//fetchProducts nous permet de recevoir les data des products par socket 
const fetchProducts = () => {
  const socket = io("http://127.0.0.1:3000");

  socket.on("listProducts", data => {
    console.log(data);
    setProducts(data);
  });
};

//Lorsqu'un checkbox est coché, on insère la valeur dans arrayOfCategories sinon on le supprime de arrayOfCategories
const clickCheckBoxAction = (event) => {

    if (event.target.checked) {
        arrayOfCategories.push(event.target.value)
    } else {
        for (var i = 0; i < arrayOfCategories.length; i++) {
            if (arrayOfCategories[i] == event.target.value) {
                arrayOfCategories.splice(i, 1)
            }
        }
        //setArrayOfCategories(arrayOfCategories)
    }
    console.log("clickCheckBoxAction:" + arrayOfCategories)
    searchProduct()
}

const searchProduct = () => {
    const socket = io("http://127.0.0.1:3000")
    let arrayOfCategoriesToEmit = arrayOfCategories
    if (arrayOfCategories.length == 0) {

      arrayOfCategoriesToEmit = ["Album", "Figurines"]
    }
    socket.emit("filteredProduct", {"category": arrayOfCategoriesToEmit})

      socket.on ('listProducts', function (data) {
        setProducts(data)
      });
}

return (
    <div>
      <h1 class="h1-title-products">Retrouvez tous nos produits à la vente !</h1>
      
        <div class="products-filter">
        <h2 class="h2-title-products">Filter les produits</h2>
          <label for="Album">Album</label>
          <input value="Album" class="filter-input" type="checkbox" id="Album" name="search" onChange={clickCheckBoxAction}></input>
          <label for="Figurine">Figurines</label>
          <input value="Figurines" class="filter-input" type="checkbox" id="Album" name="search" onChange={clickCheckBoxAction}></input>
        </div>
      {/*<input class="filter-input" name="search" onChange={searchProduct}></input>*/}
      <div className='item-container'>
        {products.map((product) => (
          <div class='card' key={product.id}>
            <img class="product-image" src={product.image} alt='product image' />
            <h3 class="products-title">{product.title}</h3>
            <p class="product-price">{product.price}</p>
            <p class="product-description">{product.description}</p>
            <button class="buy-product-button">Acheter</button>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Products;