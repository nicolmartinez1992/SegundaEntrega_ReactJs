import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import "./index.css"
import ItemCount from '../item-count';

const Item = ({ title, price, stock, img, items, onAdd }) => {
  return (
    <div className="cardContainer">
      <Card sx={{ maxWidth: 345, backgroundColor: "rgba(0, 0, 0, 0.26)" }}>
        <CardMedia
          sx={{ height: 140 }}
          image={img}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" style={{ color: "black", fontFamily: "revert", fontSize: "medium" }}>
            Precio: ${price}
          </Typography>
          <Typography variant="body2" style={{ color: "black", fontFamily: "revert", fontSize: "medium" }}>
            Stock: {stock}
          </Typography>
        </CardContent>
        <CardActions>
          <ItemCount initial={1} stock={10} onAdd={(items) => console.log("Cantidad agregada: ", items)} />
          <Button style={{ color: "black", fontWeight: "bold", fontFamily: "unset" }} size="small" onClick={() => onAdd(items)} disabled = {!stock}>Add to cart</Button>
        </CardActions>
      </Card>
    </div>
  );
}

export default Item