import React, { useContext, useEffect, useState } from "react";
import CardStore from "../Card-store";
import { GlobalContext } from "../context";
import Product from "./product/Product";

const Products = (props) => {
  const { products } = useContext(GlobalContext);
  const [user, setUser] = useState(null);

  // const cartClick = () => {};
  // // setUser((prevState) => {
  // //   return { ...prevState, [selectedField]: selectedValue };
  // // });

  return (
    <div className="mt-5 flex gap-2">
      {products.map((data, index) => (
        <Product data={data} key={index} productIndex={data.id} />
      ))}
      {/* <CardStore selectedChart={selectedChart} />; */}
      {/* <button onClick={()=> cartClick}></button> */}
      {/* <UserContext.Provider value={selectedChart}></UserContext.Provider> */}
      {/* <section>
        {selectedChart &&
          selectedChart.map((selected) => (
            <article
              className="float-right w-64 border-2 p-3"
              key={selected.id}
            >
              <h3> {selected.title}</h3>
              <h3> {selected.price}</h3>
              <p>{selected.details}</p>
            </article>
          ))}
      </section> */}
    </div>
  );
};

export default Products;
