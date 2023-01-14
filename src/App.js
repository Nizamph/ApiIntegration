import React, {useEffect, useState, useCallback} from 'react';
import MovieForm from './components/MovieForm';
import MoviesList from './components/MoviesList';
import './App.css';

function App() {
    const [movie, setMovie] = useState([])
    const [loading,setIsLoading] = useState(false)
    const [error, setError] = useState(null)


  const fetchDataHandler = useCallback(async() => {
        setIsLoading(true)
        setError(null)
        try{
          const response =  await fetch('https://swapi.dev/api/films')
           if(!response.ok) {
            throw new Error('something went wrong...retrying')
          }  
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
         

        } catch (error) {
          setError(error.message)  
        }

        setIsLoading(false)
  }, [])

     useEffect(() => {
      fetchDataHandler();
    }, [fetchDataHandler]); 
    

  let content = <p>Found no movies</p>
   if(movie.length>0) {
   content =  <MoviesList movies={movie} />
   }

   if(error) {
    content = <p>{error}</p>
   }

   if(loading) {
     content = <p>Loading...</p>
   }

  return (
    <React.Fragment>
      <section>
        <MovieForm/>
        <button onClick={fetchDataHandler}>Fetch Movies</button>
       {content}
      
      </section>
    </React.Fragment>
  );
}

export default App;
