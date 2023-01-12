import { useContext, useState } from "react";
import React from "react";
import { AnimeContext } from "../context/AnimeContext";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import Video from "./Video";
import YouTube from "react-youtube";
import AnimeDetails from "./AnimeDetails";

const AnimeCard = (props) => {
  console.log(props);

  const [showVideo, setShowVideo] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  const card = (
    <React.Fragment>
      
      <div className="animecard">
        <CardContent>
        {!showVideo && <img className="posteranimecard" src={props.image} alt=""></img>}

          <Typography className="typoanimecard">{props.title}</Typography>

          <Typography className="typoanimecard">{props.rating}</Typography>
          <Typography className="videolink" variant="body2">
            <Button
              className="trailerbutton"
              onClick={() => setShowVideo(!showVideo)}
            >
              {showVideo ? "Hide" : "Trailer"}
            </Button>

            {showVideo && <YouTube videoId={props.video} />}
          </Typography>

          <Typography>
            <Button
              className="details"
              onClick={() => setShowDetails(!showDetails)}
            >
              {showDetails ? "Hide" : "Details"}
            </Button>

            {showDetails && 
            <div className="addedpanel">
            <AnimeDetails title={props.titlejp} />
            </div>}
          </Typography>
        </CardContent>
      </div>
    </React.Fragment>
  );

  return (
    <Box sx={{ minWidth: 275 }}>
      <Card className="cardboxanime" variant="outlined">
        {card}
      </Card>
      {/* {cardComment ? <CardsComment id={props.idcomment}/> : ""} */}
    </Box>
  );
};

export default AnimeCard;
