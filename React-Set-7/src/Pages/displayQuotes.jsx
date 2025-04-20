import { useEffect, useState } from "react";
import { fakeFetch } from "../Api/quotesApi";
import Loader from "../components/Loader";

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
  if(isLoading){
    return <Loader/>
  }

  return (
    <div className="font-fira-code flex flex-col  border-4 border-x-yellow-200 m-10 min-w-[30vw] justify-start items-center p-6 w-[30vw]">
     
      <p>{quote.content}</p>
      <p className="text-lg font-semibold">{quote.author}</p>
      <button className="bg-yellow-200 p-1 font-medium text-lg rounded-2xl m-8 w-60 hover:text-xl" onClick={handleQuote}>Change Quote</button>
    </div>
  );
}
