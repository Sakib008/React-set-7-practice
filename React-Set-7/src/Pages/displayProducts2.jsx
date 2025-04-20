import { useEffect, useState } from "react";
import { fakeFetch } from "../Api/product2Api";
import Loader from "../components/Loader";

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
      const newProduct = product.filter(({ name }) =>
        name.toLowerCase().includes(e.target.value.toLowerCase())
      );
      setFilteredProduct(newProduct);
    }
  };
  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="font-fira-code flex flex-col  border-4 border-x-yellow-200 m-10 min-w-[30vw] justify-center items-center">
      <div className="flex m-3 font-semibold text-xl">
        <label htmlFor="search">Search : </label>
        <input
          onChange={handleFilter}
          className="bg-none rounded-2xl px-4 mx-2 border-none"
          type="search"
          name="search"
          placeholder="Search here...."
        ></input>
      </div>
      {filteredProduct.map(({ name, price, quantity, rating }) => (
        <div
          key={name}
          className="w-[20vw] border-2 border-red-200 p-2 m-2 rounded-2xl font-semibold"
        >
          <h2 className="text-lg">{name}</h2>
          <p>Price : {price}</p>
          <p>Quantity : {quantity}</p>
          <p>Rating : {rating}</p>
        </div>
      ))}
    </div>
  );
}
