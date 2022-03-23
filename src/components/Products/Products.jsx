import React, { useState, useEffect } from 'react';
import axios from 'axios';
const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetchProducts();
}, []);
const fetchProducts = () => {
  axios
    .get('apiBDD')
    .then((res) => {
      console.log(res);
      setProducts(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};
return (
    <div>
      <h1>Featured Products</h1>
      <div className='item-container'>
        {products.map((product) => (
          <div className='card' key={product.id}>
            <img src={product.image} alt='product image' />
            <h3>{product.brand}</h3>
            <p>{product.item}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Products;