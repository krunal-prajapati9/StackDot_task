import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../Productslice";
import ProductList from "./ProductList";
import { ToastContainer, toast } from "react-toastify";
const Productform = () => {
  const [Name, Setname] = useState("");
  const [Price, Setprice] = useState("");
  const [Category, Setcategory] = useState("");
  const [error, Seterror] = useState("");

  const dispatch = useDispatch();

  const handelsubmit = (e) => {
    e.preventDefault();

    if (!Name || !Price || !Category) {
      Seterror("All fields are required");
      return;
    }

    dispatch(addProduct({ name: Name, price: Price, category: Category }));

    toast.success("Product Added Sucessfully . !!!  Please Scroll Down", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });

    Setname("");
    Setprice("");
    Setcategory("");
    Seterror("");
  };

  return (
    <>
      <div className="h-screen flex items-center justify-center bg-gradient-to-br from-black to-gray-800 w-full">
        <div className="bg-white rounded-2xl shadow-xl w-[400px] p-9">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
            Add Products
          </h2>
          <form
            onSubmit={(e) => {
              handelsubmit(e);
            }}
            className="flex flex-col gap-4"
          >
            <div className="flex flex-col">
              <label htmlFor="name" className="mb-1 text-gray-700 font-medium">
                Product Name :
              </label>
              <input
                required
                id="name"
                className="rounded-md border px-4 py-2 text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="text"
                placeholder="Enter Product name "
                value={Name}
                onChange={(e) => {
                  Setname(e.target.value);
                }}
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="Price" className="mb-1 text-gray-700 font-medium">
                Price : <i class="ri-money-rupee-circle-fill"></i>
              </label>
              <input
                required
                id="Price "
                className="rounded-md border px-4 py-2 text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="text"
                placeholder="Please Enter the price of the product"
                value={Price}
                onChange={(e) => {
                  Setprice(e.target.value);
                }}
              />
            </div>

            <div className="flex flex-col">
              <label
                htmlFor="Category"
                className="mb-1 text-gray-700 font-medium"
              >
                Category
              </label>
              <input
                required
                id="Category"
                className="rounded-md border px-4 py-2 text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="text"
                placeholder="Please Enter category "
                value={Category}
                onChange={(e) => {
                  Setcategory(e.target.value);
                }}
              />
            </div>

            {error && (
              <p className="text-red-700 text-center text-sm"> {error} </p>
            )}

            <button
              type="submit"
              className="bg-green-600 hover:bg-green-700 transition text-white font-semibold text-lg py-3 rounded-xl mt-4"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
      <ProductList />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  );
};

export default Productform;
