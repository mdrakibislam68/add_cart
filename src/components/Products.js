import React, { useContext } from "react";
import { GlobalContext } from "../context";
import Product from "./product/Product";

const Products = (props) => {
  const { products } = useContext(GlobalContext);

  return (
    <div className="mt-5 flex gap-2">
      {products.map((data, index) => (
        <Product data={data} key={index} productIndex={data.id} />
      ))}
    </div>
  );
};

export default Products;
