import React, {useState} from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

function App() {
    const [movie, setMovie] = useState([])
    const [loading,setIsLoading] = useState(false)
  const fetchDataHandler = async() => {
        setIsLoading(true)
      const response = await fetch('https://swapi.dev/api/films')
        const data = await response.json()
            const transformedData = data.results.map((imageData) => {
              return {
                id: imageData.episode_id,
                title: imageData.title,
                openingText: imageData.opening_crawl,
                releaseDate: imageData.release_date
              
              }
            })
               setMovie(transformedData)
            setIsLoading(false)
 
  }

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchDataHandler}>Fetch Movies</button>
      </section>
      <section>
       { !loading && <MoviesList movies={movie} />} 
       {loading && <p>...content is loading please hang up here</p>}
      </section>
    </React.Fragment>
  );
}

export default App;
