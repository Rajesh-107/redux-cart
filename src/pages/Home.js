import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../components/ProductCard";
import {
  toggleBrand,
  toggleStck,
} from "../redux/actionsCreators/filterActions";
import { loadProduct } from "../redux/actionsCreators/ProductsActions";
import { loadProductData } from "../redux/thunk/products/fetchProducts";

const Home = () => {
  const filters = useSelector((state) => state.filter.filters);
  const products = useSelector((state) => state.product.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadProductData())
  }, [dispatch]);

  


  const activeClass = "text-white bg-indigo-500 border-white";
  const { brands, stock } = filters;

  let content;
  if (products.length) {
    content = products.map((product) => (
      <ProductCard key={product.model} product={product} />
    ));
  }

  if (products.length && (stock || brands.length)) {
    content = products
      .filter((product) => {
        if (brands.length) {
          return brands.includes(product.brand);
        }
        return product;
      })
      .filter((product) => {
        if (stock) {
          return product.status === true;
        }
        return product;
      })
      .map((product) => <ProductCard key={product.model} product={product} />);
  }

  return (
    <>
      <div className="max-w-7xl gap-14 mx-auto my-10">
        <div className="mb-10 flex justify-end gap-5">
          <button
            onClick={() => dispatch(toggleStck())}
            className={`border ${
              stock ? activeClass : null
            } px-3 py-2 rounded-full font-semibold`}
          >
            In Stock
          </button>
          <button
            onClick={() => dispatch(toggleBrand("intel"))}
            className={`border ${
              brands.includes("intel") ? activeClass : null
            } px-3 py-2 rounded-full font-semibold`}
          >
            Intel
          </button>
          <button
            onClick={() => dispatch(toggleBrand("amd"))}
            className={`border ${
              brands.includes("amd") ? activeClass : null
            } px-3 py-2 rounded-full font-semibold`}
          >
            AMD
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-7xl gap-14 mx-auto my-10">
        {content}
      </div>
    </>
  );
};

export default Home;
