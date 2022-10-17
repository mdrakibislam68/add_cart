import React, { useState } from "react";
export const GlobalContext = React.createContext();

export const GlobalProvider = ({ children }) => {
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

  const [cards, setCard] = useState([]);

  return (
    <GlobalContext.Provider value={{ cards, products, setCard }}>
      {children}
    </GlobalContext.Provider>
  );
};
