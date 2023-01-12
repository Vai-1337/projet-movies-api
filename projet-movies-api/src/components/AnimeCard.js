import { useContext, useState } from "react";
import React from "react";
import { AnimeContext } from "../context/AnimeContext";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom"
import Video from "./Video"
import YouTube from 'react-youtube'

const AnimeCard = (props) => {

  const [showVideo, setShowVideo] = useState(false);

  
  
  
  
  const card = (

    <React.Fragment>
 


      <div className="animecard">
          <CardContent >
       
            <img className="posteranimecard" src={props.image} alt=""></img>

            <Typography className="titleanimecard" variant="h5" component="div">
             {props.title}
            </Typography>

         

            <Typography
              className="ratinganimecard"
              sx={{ mb: 1.5 }}
              color="text.secondary">
              {props.rating}
            </Typography>
            <Typography className="videolink" variant="body2">


<Button className="trailerbutton" onClick={() => setShowVideo(!showVideo)}>
  {showVideo ? 'Hide' : 'Trailer'}
        </Button>

{showVideo && <YouTube videoId={props.video}/>}

  </Typography>
            
          </CardContent>
    
      </div>

    </React.Fragment>
  );

  return (
    <Box sx={{ minWidth: 275 }}>
      <Card className="cardboxanimr" variant="outlined">
        {card}
      </Card>
      {/* {cardComment ? <CardsComment id={props.idcomment}/> : ""} */}
    </Box>
  );
  
};

export default AnimeCard;
