import React, { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../context";

const Update = (data) => {
  const { setCard, cards } = useContext(GlobalContext);
  let [inValue, setInValue] = useState();

  useEffect(() => {
    cards.find((x) => {
      if (x.id === data.id) {
        const qta = x.qta;
        setInValue(qta);
        console.log(inValue);
      }
      return null;
    });
  }, [cards, data, inValue]);
  const handleChange = (event, setter) => {
    setter(event.target.value);
  };

  return (
    <div>
      <div className="">
        <span className="p-2">-</span>
        <input
          type="text"
          className="relative w-10"
          onChange={(e) => handleChange(e, setInValue)}
          value={inValue}
        />
        <span className="p-2">+</span>
      </div>

      <span>Update</span>
    </div>
  );
};

export default Update;
