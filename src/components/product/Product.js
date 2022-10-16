import React, { useState } from "react";
import uuid from "react-uuid";
import useProducts from "../../hooks/useProducts";

const Product = ({ data }) => {
  const [product, setProduct] = useProducts();
  // console.log(hooks);
  const [toggle, setToggle] = useState(true);
  // const [selected, setSelected] = useState([""]);

  // const data = props.data;
  // console.log(data);

  const handleToggle = (data) => {
    // console.log(product);
    setProduct([...product, data]);

    // setToggle(!toggle);
    // setSelected(data.id);
  };
  return (
    <div className="w-64 border-2 p-3" key={uuid()}>
      <h3 className="text-xl font-semibold">{data.title}</h3>
      <p className="text-lg ">Price:{data.price}</p>
      <p>Product Details: {data.details}</p>
      <div className="flex items-center justify-between">
        <select className=" border">
          Select Size:
          <option>Small</option>
          <option>Medium</option>
          <option>Large</option>
        </select>
        <button
          className="p-2 border-2"
          onClick={() => {
            handleToggle(data);
          }}
        >
          {toggle ? "Add to chart" : " Added"}
        </button>
      </div>
    </div>
  );
};

export default Product;
