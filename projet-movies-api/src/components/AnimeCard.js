import { useContext, useState } from "react";
import React from "react";
import { AnimeContext } from "../context/AnimeContext";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const AnimeCard = () => {
  const [data, setData] = useState(AnimeContext);
console.log(data)
  const card = (

    <React.Fragment>
 


      <div className="card">
          <CardContent >
            <img className="logo2" src="./Untitled-2.png" alt=""></img>

            <Typography className="titre" variant="h5" component="div">
             
            </Typography>
            <Typography
              className="poster"
              sx={{ mb: 1.5 }}
              color="text.secondary"
            >
              <img src="" alt="" />
            </Typography>
            <Typography className="rating" variant="body2">
            </Typography>
          </CardContent>
    
      </div>

    </React.Fragment>
  );

  return (
    <Box sx={{ minWidth: 275 }}>
      <Card className="cardbox" variant="outlined">
        {card}
      </Card>
      {/* {cardComment ? <CardsComment id={props.idcomment}/> : ""} */}
    </Box>
  );
  
};

export default AnimeCard;