import React from "react";
import './MovieForm.css';
import { useRef} from "react";

const MovieForm = (props) => {

  const titleInputRef = useRef()
  const openingTextInputRef = useRef()
  const releaseDateInputRef = useRef()
  const formSubmitHandler = (event) => {
      event.preventDefault()
      const enteredTitle = titleInputRef.current.value;
      const enteredOpeningTitle = openingTextInputRef.current.value;
      const enteredReleaseDate = releaseDateInputRef.current.value;
      titleInputRef.current.value = '';
      openingTextInputRef.current.value='';
      releaseDateInputRef.current.value='';
      
      const movies = {
       title: enteredTitle,
       openingText: enteredOpeningTitle,
       releaseDate: enteredReleaseDate
      }

     props.onSaveList(movies)
  }
  return (
   <React.Fragment>
    
    <form onSubmit={formSubmitHandler}>
      <label  className="label" style={{marginRight:"420px"}}>Title</label>
      <input type="text" size="66" className="input" ref={titleInputRef}/>
      <label  className="label">Opening Text</label>
      <input type="text" size="66"  className="openText" ref={openingTextInputRef}/>
      <label  className="label">Release Date</label>
      <input type="text" size="66"  className="input" ref={releaseDateInputRef}/>
      <button type="submit" style={{marginBottom:"15px",marginTop:"10px"}}>Add Movie</button>
    </form>
      
  

   </React.Fragment>
  )
}
export default MovieForm;