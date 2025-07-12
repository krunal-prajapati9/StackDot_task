import React from 'react';
import { useSelector } from 'react-redux';

const ProductList = () => {
  const products = useSelector((state) => state.product.products);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Products:</h2>
      {products.length === 0 ? (
        <p>No products added yet.</p>
      ) : (
        <ul className="space-y-2">
          {products.map((product) => (
            <li key={product.id} className="bg-white p-3 rounded shadow">
              <strong>{product.name}</strong> - ₹{product.price} - {product.category}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ProductList;
