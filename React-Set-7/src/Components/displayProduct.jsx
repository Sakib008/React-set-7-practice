import { useEffect, useState } from "react";
import { fakeFetch } from "../Api/productApi";

export function DisplayProducts() {
  const [product, setProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleProduct = async () => {
    setIsLoading(true);
    try {
      const response = await fakeFetch("https://example.com/api/products");
      setProduct(response.data);
    } catch (err) {
      console.error(err);
      setIsLoading(false);
    }
  };
  useEffect(() => {
    handleProduct;
  }, []);
}
