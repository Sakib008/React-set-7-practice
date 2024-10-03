import { useEffect, useState } from "react";
import { fakeFetch } from "../Api/quotesApi";

export function DisplayQuotes() {
  const [quote, setQuote] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const handleQuote = async () => {
    setIsLoading(true);
    const res = await fakeFetch();
    setQuote(res);
    setIsLoading(false);
  };

  useEffect(() => {
    handleQuote();
  }, []);

  return (
    <div>
      {isLoading && <p>Loading....</p>}
      <p>{quote.content}</p>
      <p>{quote.author}</p>
      <button onClick={handleQuote}>Change Quote</button>
    </div>
  );
}
