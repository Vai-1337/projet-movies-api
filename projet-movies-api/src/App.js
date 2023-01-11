import { useContext, useState } from "react";
import { AnimeContext } from "./context/AnimeContext";
import "./App.css";
import MiniCard from "./components/MiniCard";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import AnimeCard from "./components/AnimeCard";


const App = () => {
  const {value, value2, value3, value4, value5} = useContext(AnimeContext);
  const [data2, setData2] = value
  const [data, setData] = value2
  const [query, setQuery] = value3
  const [isLoading, setIsLoading] = value4

  console.log(data)
  return (
    <div className="frame">
      <div className="topcards">
          {isLoading && data ? data.map((e, i) =>
            e.attributes.titles.en ?  
              <MiniCard key={i}
                  title={e.attributes.titles.en}
                  image={e.attributes.posterImage.tiny}
                  rating={e.attributes.averageRating}/>  : 
                  "") : <h1>Loading</h1> }
      </div>
          <div className='animcards'>
          {query && data2 && data2.map((e, i) =>  
              <AnimeCard  key={i} 
                    title={e.attributes.titles.en}
                    image={e.attributes.posterImage.small}
                    rating={e.attributes.averageRating}
                    video={e.attributes.youtubeVideoId}
            /> 
          )}
          </div>
</div>  );
};

export default App;
