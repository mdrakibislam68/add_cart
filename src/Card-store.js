import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import useProducts from "./hooks/useProducts";

const CardStore = () => {
  const { product } = useProducts();
  console.log(product);
  const [user, setUser] = useState("");

  // const onSelected = (props) => {
  //   setSelectedChart((prevState) => [...prevState, props]);
  // };
  // console.log(props.selectedChart);
  // const selectedChart = props.selectedChart;

  // const selectedChart = props;
  // setUser(props);
  // const selectedChart = selectedChart.selectedChart;

  return (
    // <article className="float-right w-64 border-2 p-3">
    //   <h3> {selectedChart.title}</h3>
    //   <h3> {selectedChart.price}</h3>
    //   <p>{selectedChart.details}</p>
    // </article>
    // <div>sldk</div>
    <section>
      {product &&
        product.map((selected) => (
          <article className="float-right w-64 border-2 p-3" key={selected.id}>
            <h3> {selected.title}</h3>
            <h3> {selected.price}</h3>
            <p>{selected.details}</p>
          </article>
        ))}
    </section>
  );
};

export default CardStore;
