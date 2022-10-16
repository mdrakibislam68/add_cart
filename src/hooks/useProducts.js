import { useEffect, useState } from "react";

const useProducts = () => {
  const [product, setProduct] = useState([]);
  const store = () => {
    return [product, setProduct];
  };
  return store;
};

export default useProducts;
