import React from 'react';

import classes from './Movie.module.css';



const Movie = (props) => {

  function deleteMovie() {
  
    props.onDeleteMovie(props.id)
   
  }

  console.log('props movies',props)
  return (
    <li className={classes.movie}>
      <h2>{props.title}</h2>
      <h3>{props.releaseDate}</h3>
      <p>{props.openingText}</p>
       <button onClick={deleteMovie} style={{backgroundColor:"#f7e702",color:"black"}}>Delete</button>
       {console.log('delete movie',props.onDeleteMovie)}
    </li> 
  );
};

export default Movie;
