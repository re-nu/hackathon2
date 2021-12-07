import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useHistory, useParams } from 'react-router';

export function Delete() {
    const{id}=useParams();
    const history=useHistory();

    async function deleteT() {
        const d=await fetch(
            `https://hackaton2-node.herokuapp.com/theater/${id}`,
            {method:"DELETE"}
        ) 
        history.push("/theaters")   
    }

  return (
    <div className="delete">
        <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
           Are you sure you want to delete  this Theater
        </Typography> 
      </CardContent>
      <CardActions>
        <Button 
        onClick={deleteT}
        size="small">Yes</Button>
        <Button 
        onClick={()=>history.goBack()}
        size="small">Back</Button>
      </CardActions>
    </Card>

    </div>
  );
}
