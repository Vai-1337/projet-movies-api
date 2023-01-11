import React, { useContext,useState } from "react";
import { AnimeContext } from "../context/AnimeContext";

const SearchBar = () => {
  const {value3} = useContext(AnimeContext);
  const [query, setQuery] = value3
  const {value5} = useContext(AnimeContext)
  const [input, setInput] = value5

  const handleClick = (e) => {
    e.preventDefault()
    console.log(input)
        setQuery(input)  }
  
  return (
    <form onSubmit={handleClick}>
      <input
        type="text"
        placeholder=""
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button type='submit'>ok</button>
    </form>
  );
};

export default SearchBar;
