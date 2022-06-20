import React, { useContext } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const SearchComponent = ({ img, name, symbol, rank }) => {
  return (
<div>
{name?
(
<Card sx={{ maxWidth: 350, m: 4 }}>
   
   <CardContent>
     <Typography gutterBottom variant="h5" component="div">
       {name}
     </Typography>
   </CardContent>
   <CardMedia component="img" height="140" image={img} alt={name} />
   <CardActions>
     <Typography>{rank}</Typography>
     <Typography>{symbol}</Typography>
   </CardActions>
 </Card>
)
 : null
}
</div>

  )
   
};

export default SearchComponent;
