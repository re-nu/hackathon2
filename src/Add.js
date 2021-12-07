import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
import { useHistory } from 'react-router';

export function Add() {
    const history=useHistory();
    const [name,setname]=useState("");
    const [pic,setpic]=useState("");

    async function add(params) {
        const newT={name:name,pic:pic,movies:[]}
        console.log(newT);

        const data=await fetch(
            "https://hackaton2-node.herokuapp.com/Add-theater",
            {method:"POST",
             body:JSON.stringify(newT),
             headers:{"Content-Type":"application/json",}
          }
        );
        history.push("/theaters");
    }

  return (
    <div>
      <form>
      <div className="add-movie-pic">
             <img className="add-movie-pic"
             src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSH65vuMMxKHcn-HYozSrZUF2FIVPX9OZFwdQ&usqp=CAU"
             alt="movies"/>
           </div>
      <TextField 
      onChange={(e)=>setname(e.target.value)}
      id="name" label="theater name"  variant="standard" />
      <TextField 
       onChange={(e)=>setpic(e.target.value)}
      id="pic" label="theater pic" variant="standard" />

     <Button 
     onClick={add}
     variant="outlined">Add theater</Button>

      </form>
    </div>
  );
}
