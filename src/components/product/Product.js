import React, { useContext, useEffect, useState } from "react";
import uuid from "react-uuid";
import { GlobalContext } from "../../context";

const Product = ({ data, productIndex }) => {
  const { setCard, cards } = useContext(GlobalContext);
  const [size, setSize] = useState("medium");
  let [qta, setQta] = useState(1);
  let [inValue, setInValue] = useState();
  let [test, setTest] = useState();

  const isAdded = cards.find((card) => card.id === data.id);
  useEffect(() => {
    cards.find((x) => {
      if (x.id === data.id) {
        const qta = x.qta;
        setInValue(qta);
        setTest(qta);
      }
      return null;
    });
  }, [cards, data, inValue]);

  const onSelected = (id) => {
    if (isAdded) {
      // alert("already")
    } else {
      const setProduct = [...cards, { ...data, size: size, qta: qta }];
      setCard(setProduct);
    }
  };
  const handleChange = (event, setter) => {
    setter(parseInt(event.target.value));

    // console.log(typeof   event.target.value);
  };

  const increment = () => {
    setTest((inValue) => parseInt(inValue) + 1);
  };
  const decrement = () => {
    setTest((inValue) => (inValue > 1 ? parseInt(inValue) - 1 : 1));
  };

  const updateQta = () => {
    // const update = [...cards, { ...data, qta: test }];
    // console.log(typeof test);
    setQta(parseInt(test));
  };
  console.log(qta);
  // const sum = (a, b) => {
  //   return a + b;
  // };

  // const sub = (a, b) => {
  //   return a - b;
  // };

  // const result = (a, b, add, min) => {
  //   const r1 = add(a, b);
  //   const r2 = min(a, b);
  //   console.log(`sum: ${r1}`);
  //   console.log(`sub: ${r2}`);
  // };

  // result(30, 20, sum, sub);

  return (
    <div className="w-72 border-2 p-3" key={uuid()}>
      <h3 className="text-xl font-semibold">{data.title} -</h3>
      <p className="text-lg ">Price:{data.price}</p>
      <p>Product Details: {data.details}</p>
      <form className="flex items-center justify-between">
        <label>Select Size:</label>
        <select
          className=" border"
          value={size}
          onChange={(e) => handleChange(e, setSize)}
        >
          <option value="small">Small</option>
          <option value="medium">Medium</option>
          <option value="large">Large</option>
        </select>

        {/* <input className="border p-1" type="submit" value="Select" /> */}
      </form>
      <input
        className="border inline-block w-24 pl-2"
        min={1}
        type="number"
        value={qta}
        onChange={(e) => handleChange(e, setQta)}
      />
      <div className="flex justify-between">
        <button
          className="p-2 border-2 mt-3"
          onClick={() => onSelected(productIndex)}
        >
          {isAdded ? (
            <div className="">
              <span className="px-1 cursor-pointer border" onClick={decrement}>
                -
              </span>
              <input
                type="text"
                className="relative w-10 text-center"
                onChange={(e) => handleChange(e, setQta)}
                value={test}
              />
              <span className="px-1 cursor-pointer border" onClick={increment}>
                +
              </span>
            </div>
          ) : (
            " Add to chart"
          )}
        </button>
        {isAdded && (
          <button className="px-1 border" onClick={updateQta}>
            update
          </button>
        )}
      </div>
    </div>
  );
};
export default Product;
