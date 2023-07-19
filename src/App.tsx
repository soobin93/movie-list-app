import React, { useEffect, useState } from "react";
import "./App.css";

import { useFetch } from "./features/hooks/use-fetch";
import { CheckEven } from "./features/check-even";
import { Button } from "./features/ui/button";
import { GenreItem } from "./features/genre-item";

import styles from "./App.module.css";

type GenreResponse = {
  id: number;
  name: string;
};

const API_URL = "https://api.themoviedb.org/3/genre/movie/list";

function App() {
  const [genres, setGenres] = useState<GenreResponse[]>([]);

  const { data, fire } = useFetch(API_URL, process.env.REACT_APP_API_TOKEN);

  useEffect(() => {
    if (data && data.hasOwnProperty("genres")) {
      setGenres(data.genres);
    } else {
      setGenres([]);
    }
  }, [data]);

  return (
    <div className="App">
      <h1>Even Number Checker</h1>
      <CheckEven />

      <h1>Shall we find out what movie genres out there</h1>

      <div className={styles.buttonContainer}>
        <Button onClick={() => fire()}>Load Movie Genres</Button>
      </div>

      {genres.map((genre) => (
        <GenreItem
          key={`genre-item-${genre?.id}`}
          id={genre?.id}
          name={genre?.name}
        />
      ))}
    </div>
  );
}

export default App;
