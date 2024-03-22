import * as React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import "./card.scss";

const Cards = () => {
  return (
    <div className="card-main-container">
      <Card sx={{ maxWidth: 245 }} className="card-container">
      <CardActionArea className="card-action-area-container">
        {/* <CardMedia
          component="img"
          height="140"
          image={pic_1}
          alt="green iguana"
        /> */}
        <img className="image-container" src="https://reactjs.org/logo-og.png" alt="react logo" />
        <CardContent className="card-content-container">
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="black">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className="card-action-container">
        <Button size="small" color="primary" className="card-button">
          ADD TO CART
        </Button>
      </CardActions>
    </Card>
    </div>
  )
}

export default Cards
