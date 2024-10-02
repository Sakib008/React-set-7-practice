import { useEffect, useState } from "react";
import { fakeFetch } from "../Api/product2Api";

export function DisplayProduct2() {
  const [product, setProduct] = useState([]);
  const [filteredProduct, setFilteredProduct] = useState([]);

  const [isLoading, setIsLoading] = useState(false);

  const handleProduct = async () => {
    setIsLoading(true);
    try {
      const response = await fakeFetch("https://example.com/api/products");
      setProduct(response.data.products);
      setFilteredProduct(response.data.products);
      setIsLoading(false);
    } catch (err) {
      console.error(err);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    handleProduct();
  }, []);

  return (
    <div>
      {isLoading && <p>Loading...</p>}
      {product.map(({ name, price, quantity, rating }) => (
        <div
          key={name}
          style={{
            border: "2px solid black",
            borderRadius: " 5px",
            margin: "5px 2px",
          }}
        >
          <h2>{name}</h2>
          <p>Price : {price}</p>
          <p>Quantity : {quantity}</p>
          <p>Rating : {rating}</p>
        </div>
      ))}
    </div>
  );
}
