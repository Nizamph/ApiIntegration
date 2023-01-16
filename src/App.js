import React, {useEffect, useState, useCallback} from 'react';
import MovieForm from './components/MovieForm';
import MoviesList from './components/MoviesList';
import './App.css';

function App() {
    const [movie, setMovie] = useState([])
    const [loading,setIsLoading] = useState(false)
    const [error, setError] = useState(null)
    const[realtime,setRealTime]=useState(false)
 
  const fetchDataHandler = useCallback(async() => {
        setIsLoading(true)
        setError(null)
        try{
          const response =  await fetch('https://react-post-practice-dfd74-default-rtdb.firebaseio.com/movies.json')
           if(!response.ok) {
            throw new Error('something went wrong...retrying')
          }  
          const data = await response.json()

          const loadedMovies = [];

          for(const key in data) {
            loadedMovies.push({
              id: key,
              title: data[key].title,
              openingText: data[key].openingText,
              releaseDate: data[key].releaseDate,
            });
          }
       

            setMovie(loadedMovies)     
         

        } catch (error) {
          setError(error.message)  
        }

        setIsLoading(false)
  }, [])
    
     useEffect(() => {
      fetchDataHandler();
      setRealTime(false)
    }, [realtime]); 
    
    const deleteMovieHandler= async(id) => {
      try{
        const response = await fetch(`https://react-post-practice-dfd74-default-rtdb.firebaseio.com/movies/${id}.json`,{
          method:"DELETE"
        })
        console.log(response)
        setRealTime(true)
      }catch(err){
        console.log(err)
      }
   
    }
     
  let content = <p>Found no movies</p>
   if(movie.length>0) {
   content =  <MoviesList onDeleteMovie={deleteMovieHandler} moviesForm={movie} />
   }

   if(error) {
    content = <p>{error}</p>
   }

   if(loading) {
     content = <p>Loading...</p>
   }


  const formSaveHandler= async (newMovie) => {
  
  
      const response  =await fetch('https://react-post-practice-dfd74-default-rtdb.firebaseio.com/movies.json', {
      method:'POST',
      body: JSON.stringify(newMovie),
      headers: {
        'Contect-type': 'application/json'
      }
    })
    const data = await response.json();
    console.log(data);
    setRealTime(true)
  }




  return (
    <React.Fragment>
      <section>
        <MovieForm onSaveList={formSaveHandler}/>
        <button onClick={fetchDataHandler}>Fetch Movies</button>
       {content}
      
      </section>
    </React.Fragment>
  );
}

export default App;
