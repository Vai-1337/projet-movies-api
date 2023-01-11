import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const AnimeContext = createContext();

export const AnimeController = ({ children }) => {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [input, setInput] = useState("")
const [data2, setData2] = useState([])


  const fetchData = async () => {
    try {
      const callData = await axios.get(
        "https://kitsu.io/api/edge/anime?page[limit]=20&page[offset]=1"
      );
     setData(callData.data.data);
      setIsLoading(true);
    } catch (err) {
      console.log(err);
    }
  };
  const fetchData2 = async () => {
    try {
      const callData = await axios.get(
        `https://kitsu.io/api/edge//anime?filter[text]=${query}`
      );
      setData2(callData.data.data);
      setIsLoading(true);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    query ? fetchData2() : fetchData();
  }, [query]);

  return (
    <AnimeContext.Provider
      value={{value : [data2, setData2], value2: [data, setData], value3: [query, setQuery], value4:[isLoading, setIsLoading], value5: [input, setInput]}}
    >
      {isLoading && children }
    </AnimeContext.Provider>
  );
};
