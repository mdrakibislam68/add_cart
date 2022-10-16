import React, { useContext, useEffect, useState } from "react";
import CardStore from "../Card-store";
// import useProducts from "../hooks/useProducts";
import Product from "./product/Product";
import { UserContext } from "./UserContext";

const Products = () => {
  const data = useContext(UserContext);
  // const [selectedChart, setSelectedChart] = useState([]);
  // const [user, setUser] = useState(null);

  // const onSelected = (props) => {
  //   setSelectedChart((prevState) => [...prevState, props]);
  // };

  // setUser((prevState) => {
  //   return { ...prevState, [selectedField]: selectedValue };
  // });

  return (
    <div className="mt-5 flex gap-2">
      {data.map((data, index) => (
        <Product data={data} key={index} />
        // onSelected={onSelected}
      ))}
      {/* <CardStore selectedChart={selectedChart} /> */}

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
