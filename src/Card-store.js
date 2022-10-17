import React, { useEffect, useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import { GlobalContext } from "./context";

const CardStore = (props) => {
  const { cards, products } = useContext(GlobalContext);
  return (
    <section className="flex flex-wrap">
      {cards.map((item, index) => {
        console.log(cards);
        let result = products.filter((x) => x.id === item);
        return (
          <div key={index}>
            {result.map((selected, index) => {
              return (
                <article
                  className="w-64 border-2 p-3"
                  key={index}
                  id={selected.id}
                >
                  <h3> {selected.title}</h3>
                  <h3> {selected.price}</h3>
                  <p>{selected.details}</p>
                </article>
              );
            })}
          </div>
        );
      })}
    </section>
  );
};

export default CardStore;
