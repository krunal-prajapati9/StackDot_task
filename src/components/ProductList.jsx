import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteProduct } from "../Productslice";

const ProductList = () => {
  const products = useSelector((state) => state.product.products);
  const dispatch = useDispatch();

  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-bold text-center mb-4">Your Products</h2>

      {products.length === 0 ? (
        <p className="text-center text-gray-600">
          No products added yet. Please add some products.
        </p>
      ) : (
        <div className="space-y-4">
          {products.map((product) => (
            <div key={product.id} className="bg-white p-4 rounded shadow">
              <h3 className="text-lg font-semibold text-gray-800">
                {product.name}
              </h3>
              <p className="text-gray-600">Price: ₹{product.price}</p>
              <p className="text-gray-600">Category: {product.category}</p>
               <button
                onClick={() => dispatch(deleteProduct(product.id))}
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded transition duration-200"
              >
                 Delete
              </button>
            </div>
           
          ))}
          
         
        </div>
      )}
    </div>
  );
};

export default ProductList;
