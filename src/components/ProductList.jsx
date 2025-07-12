import React, { useEffect, useState } from 'react'

const ProductList = () => {

    const [Products, Setproducts] = useState([]);

    

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => Setproducts(data));
  }, []);

  return (
    <div>
      <h2>Products :</h2>
      <ul>
        {Products.map((product,idx) =>
            {<li key={idx}>{product.name}</li>} )}
      </ul>
    </div>
  );
  
}

export default ProductList