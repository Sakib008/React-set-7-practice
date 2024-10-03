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

  const handleFilter = (e) => {
    if (e.target.value.length === 0) {
      setFilteredProduct(product);
    } else {
      const newProduct = product.filter(
        ({ name }) => e.target.value.toLowerCase() === name.toLowerCase()
      );
      setFilteredProduct(newProduct);
    }
  };

  return (
    <div>
      {isLoading && <p>Loading...</p>}
      <label htmlFor="search">Search : </label>
      <input
        onChange={handleFilter}
        type="search"
        name="search"
        placeholder="Search here...."
      ></input>
      {filteredProduct.map(({ name, price, quantity, rating }) => (
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
