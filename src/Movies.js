import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import WeekendIcon from '@mui/icons-material/Weekend';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { Book } from "@mui/icons-material";

export function Movies() {
    const{id}=useParams();
    const history=useHistory();

    const [theaters, settheaters] = useState([]);
    const [movies,setmovies]=useState([]);
  useEffect(() => {
    async function getTher() {
      const d = await fetch(`https://hackaton2-node.herokuapp.com/theater/${id}`);
      const ther = await d.json();
      await settheaters(ther);
      console.log(ther);
      await setmovies(ther.movies);
      console.log(movies);

    }
    getTher();
  }, []);

    
  return (
    <div className="movies-ther">
        <div className="ther">
            <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="180"
        image={theaters.pic}
        alt={theaters.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {theaters.name}
        </Typography>
      </CardContent>
      <CardActions>
        <Button 
        onClick={()=>history.push(`/${id}/add-movies`)}
        size="small">Add Movies/Shows</Button>
      </CardActions>
    </Card>
        </div>
        <div className="movies">
        {movies.map((m,index)=>(
          <MovieLayout key={index} name={m.name} poster={m.poster} trailer={m.trailer} rating={m.rating} seats={m.seats}/>
      ))}
        </div>
    </div>
  );
}


function MovieLayout({name,poster,trailer,seats}) {
  const [styl,setstyl]=useState(false);
  const style={display:styl?"grid":"none"}

  const[color,setcolor]=useState("primary");
  const clr={color:color}
  function book(s,index) {
    if(s){
      console.log("seat is already booked")
    }
    else{
        console.log("Booked seat of seatNo:",index)
    }
    
  }

  // const clr={color:color}
    return(
        <div className="movie">
             <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="180"
        image={poster}
        alt={name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Trailer</Button>
        <Button 
        onClick={()=>setstyl(!styl)}
        size="small">Book Show</Button>
      </CardActions>
    </Card>
    <div  style={style} className="seats"> 
         {seats.map((s,index)=>(
           <div style={clr} className={`_${s}`}>
             <IconButton 
             onClick={()=>{book(s,index)}}
             aria-label="seat"  color={color}>
              <WeekendIcon />
            </IconButton>
           </div>
         ))}
    </div>
        </div>
    );
}

