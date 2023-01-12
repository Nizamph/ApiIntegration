import React, {useState} from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

function App() {
    const [movie, setMovie] = useState([])
  const fetchDataHandler = () => {
    fetch('https://swapi.dev/api/films').then((resolve) => {
     return resolve.json().then((data) => {
      const transformedData = data.results.map((imageData) => {
        return {
          id: imageData.episode_id,
          title: imageData.title,
          openingText: imageData.opening_crawl,
          releaseDate: imageData.release_date
        
        }
      })
         setMovie(transformedData)
      })
    })
  }

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchDataHandler}>Fetch Movies</button>
      </section>
      <section>
        <MoviesList movies={movie} />
      </section>
    </React.Fragment>
  );
}

export default App;
