import { useEffect, useState } from "react";
import { fakeFetch } from "../Api/productApi";

export function DisplayProducts() {
  const [product, setProduct] = useState([]);
  const [originalProduct, setOriginalProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleProduct = async () => {
    setIsLoading(true);
    try {
      const response = await fakeFetch("https://example.com/api/products");
      setProduct(response.data.products);
      setOriginalProduct(response.data.products);
      setIsLoading(false);
    } catch (err) {
      console.error(err);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    handleProduct();
  }, []);

  // Sort the Price

  const handlePrice = () => {
    const lowToHighPrice = [...product].sort((a, b) => a.price - b.price);
    setProduct(lowToHighPrice);
  };
  const handlePrice2 = () => {
    const HighPrice = [...product].sort((a, b) => b.price - a.price);
    setProduct(HighPrice);
  };
  const resetProducts = () => {
    setProduct(originalProduct);
  };

  return (
    <div>
      {isLoading && <p>Loading....</p>}
      <button onClick={handlePrice}>Sort by Price</button>
      <button onClick={handlePrice2}> High by Price</button>
      <button onClick={resetProducts}> Reset </button>
      {product.map(({ name, description, price, quantity }) => (
        <li key={name}>
          <h1>Name : {name}</h1>
          <p>Price : {price}</p>
          <p>Description : {description}</p>
          <p>Quantity : {quantity}</p>
        </li>
      ))}
    </div>
  );
}
