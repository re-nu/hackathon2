import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { useHistory } from 'react-router';

export function Theater({name,pic,id}) {
    console.log(id);
    const history=useHistory();
  return (
      <div className="theater-card">
           <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={pic}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button 
        onClick={()=>history.push("/theater/"+id)}
        size="small" color="primary">
          Visit
        </Button>
        <Button 
        onClick={()=>history.push("/edit-theater/"+id)}
        size="small" color="primary">
          Edit
        </Button>
        <Button 
        onClick={()=>history.push("/delete-theater/"+id)}
        size="small" color="primary">
          Delete
        </Button>
      </CardActions>
    </Card>
      </div>
  );
}
