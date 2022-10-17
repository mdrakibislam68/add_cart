import React, { useState, useContext } from "react";
import uuid from "react-uuid";
import { GlobalContext } from "../../context";

const Product = ({ data, productIndex }) => {
  const [toggle, setToggle] = useState(true);
  const { setCard, cards } = useContext(GlobalContext);

  const onSelected = (id) => {
    // console.log(id);
    const isAdded = cards.find((Product) => Product.id === id);
    // console.log(isAdded);
    // setToggle(false);
    if (isAdded) {
      alert("Alrady");
      setToggle(false);
    } else {
      const setProductId = [...cards, id];
      setCard(setProductId);
    }
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
          onClick={() => onSelected(productIndex)}
        >
          {/* {console.log(cards.filter((x) => x.id === productIndex))} */}
          {cards.includes(productIndex) ? "Added" : " Add to chart"}
        </button>
      </div>
    </div>
  );
};

export default Product;
