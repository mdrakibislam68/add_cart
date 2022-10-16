import React from "react";
import { UserContext } from "./UserContext";
import Products from "./Products";
import CardStore from "../Card-store";

const products = [
  {
    id: "1",
    title: "Product Title:",
    price: " 00.0",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipiscin adlkflkasdlkfasdkfasdfj",
  },
  {
    id: "2",
    title: "Product Title:",
    price: " 00.0",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipiscin adlkflkasdlkfasdkfasdfj",
  },
  {
    id: "3",
    title: "Product Title:",
    price: " 00.0",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipiscin adlkflkasdlkfasdkfasdfj",
  },
];
const Home = () => {
  // const onSelected = (props) => {
  //   console.log(props);
  // };
  return (
    <UserContext.Provider value={products}>
      <h2 className="text-4xl font-semibold text-center">
        Purchase some product
      </h2>

      <Products />
    </UserContext.Provider>
    // <div>
    //   <Products products={products} />
    // </div>
  );
};

export default Home;
