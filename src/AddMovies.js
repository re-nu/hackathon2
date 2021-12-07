import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
import { useHistory } from 'react-router';


export function AddMovies() {
    const history=useHistory();
    const[name,setname]=useState("");
    const[poster,setposter]=useState("");

    function addM() {
        const movie={name:name,poster:poster,seats:[]}
        console.log("movie added",movie);
    }

  return (
    <div className="add-movies">
       <form>
           <div className="add-movie-pic">
             <img className="add-movie-pic"
             src="https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/66473426/original/69ac208fdd658cd3044f5582d3ad71c6c1aad4ec/make-you-a-movie-blog-website.jpg"
             alt="movies"/>
           </div>
         <TextField
         onChange={(e)=>setname(e.target.value)} 
         id="name" label="name" variant="standard" />
         <TextField
         onChange={(e)=>setposter(e.target.value)} 
         id="poster" label="poster" variant="standard" />
         <div className="buttons">
         <Button 
         onClick={addM}
          variant="outlined">Add movie</Button>
          <Button 
         onClick={()=>history.goBack()}
          variant="outlined">back</Button>
         </div>
       </form>
    </div>
  );
}
