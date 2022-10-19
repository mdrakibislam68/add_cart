import React, { useContext } from "react";
import { GlobalContext } from "./context";

const CardStore = () => {
  const { cards } = useContext(GlobalContext);
  return (
    <section className="flex flex-wrap">
      {cards.map((item, index) => {
        console.log(item.qta);
        return (
          <article className="w-64 border-2 p-3" key={index} id={item.id}>
            <h3>Title: {item.title}</h3>
            <h2>Size: {item.size}</h2>
            <h2>Qta: {item.qta}</h2>
            <h3> {item.price}</h3>
            <p>{item.details}</p>
          </article>
        );
      })}
    </section>
  );
};

export default CardStore;
