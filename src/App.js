import React, {useState} from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

function App() {
    const [movie, setMovie] = useState([])
  const fetchDataHandler = async() => {
    
      const response =  await fetch('https://swapi.dev/api/films');
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
