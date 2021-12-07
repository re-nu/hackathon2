import { useEffect,useState } from "react";
import { useParams,useHistory } from "react-router";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export function Edit() {
    const{id}=useParams();
    const [theaters, settheaters] = useState({});

    useEffect(()=>{
        async function getTher() {
            const d = await fetch(`https://hackaton2-node.herokuapp.com/theater/${id}`);
            const ther = await d.json();
            await settheaters(ther);
            console.log(ther);
        }
          getTher();
    },[]);
    
    return Object.keys(theaters).length>0?<Update theaters={theaters} id={id}/>:"loading";
}


function Update({theaters,id}) {
    const history=useHistory();
    const [name,setname]=useState(theaters.name);
    const [pic,setpic]=useState(theaters.pic);

    async function edit(params) {
        const ediT={name:name,pic:pic}
        console.log(ediT);

        const data=await fetch(
            `https://hackaton2-node.herokuapp.com/theater/${id}`,
            {method:"PUT",
             body:JSON.stringify(ediT),
             headers:{"Content-Type":"application/json",}
          }
        );
        history.push("/theaters");
    }

  return (
    <div>
      <form>
      <TextField 
      value={name}
      onChange={(e)=>setname(e.target.value)}
      id="name" label="theater name"  variant="standard" />
      <TextField 
      value={pic}
       onChange={(e)=>setpic(e.target.value)}
      id="pic" label="theater pic" variant="standard" />

     <Button 
     onClick={edit}
     variant="outlined">Update changes</Button>

      </form>
    </div>
  )
}