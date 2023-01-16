import React from 'react';
import Movie from './Movie';
import classes from './MoviesList.module.css';

const MovieList = (props) => {
  console.log('inside movie list',props)
  return (
    <ul className={classes['movies-list']}>
      
      {
        props.moviesForm.map((movie) => {
          return(
            <Movie
            id={movie.id}
            title={movie.title}
            releaseDate={movie.releaseDate}
            openingText={movie.openingText}
            onDeleteMovie={props.onDeleteMovie}
            />
          )
     

        })
      }
    </ul>
  );
};

export default MovieList;
