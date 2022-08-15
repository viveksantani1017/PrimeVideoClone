import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { Button, Grid, IconButton } from "@mui/material";
import PlayArrowRoundedIcon from "@mui/icons-material/PlayArrowRounded";
import DownloadIcon from "@mui/icons-material/Download";
import CelebrationIcon from "@mui/icons-material/Celebration";
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
function Detail() {
  const location = useLocation();
  const { id } = location.state;
  const imgLocation = "../resources/images/coverimages";
  const [media, setMedia] = useState([]);
  // const [drama,setDrama] = useState([]);
  const getMovie = async () => {
    const response = await axios.post(
      "http://localhost:5000/api/media/detail",
      { id: id }
    );
    setMedia(response.data);
    console.log(response);
  };
  useEffect(() => {
    getMovie();
  }, []);
  return (
    <div className="out-home">
      <Grid container>
        <Grid item md={6}>
          <h1>{media.name}</h1>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item md={6} style={{ color: "grey", marginTop: "15px" }}>
          <h4 className="extradetail">{media.rating}</h4>
          <h4 className="extradetail">{media.releaseDate}</h4>
          <h4 className="extradetail">{media.cast}</h4>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item md={6.5} style={{ marginTop: "15px" }}>
          <h4>{media.description}</h4>
        </Grid>
      </Grid>
      {/* <Grid container style={{ marginTop:'10px'}}>
        <Grid item xs={8}>
          <h5>{media.cast}</h5>
        </Grid>
        </Grid> */}
      <Grid container style={{ marginTop: "15px" }} gap={1}>
        <Button
          variant="contained"
          startIcon={
            <PlayArrowRoundedIcon color="white" style={{ fontSize: "2.4em" }} />
          }
          style={{
            backgroundColor: "#0f79af",
            color: "white",
            padding: "14px 10px",
            fontSize: "15px",
          }}
        >
          Play
        </Button>
        <Button
          variant="contained"
          style={{
            backgroundColor: "#425265",
            color: "white",
            fontSize: "15px",
            textTransform: "none",
            fontWeight: "bold",
            padding: "10px 20px",
            lineHeight: "1",
          }}
        >
          More Purchase <br /> Options
        </Button>
        <IconButton aria-label="add to watchlist" size="large" style={{display:'inline-block',marginLeft:'20px'}}>
          <AddOutlinedIcon fontSize="inherit" style={{color:'white',borderRadius:'50%',backgroundColor:'#425265'}}/>
        </IconButton>
      </Grid>
      <Grid container style={{ marginTop: "15px",color:'grey' }} gap={8}>
        <h3>Director</h3>
        <Grid item>
          <h3 style={{color:'#79b8f3'}}>{media.director}</h3>
        </Grid>
      </Grid>
      <Grid container style={{ marginTop: "10px",color:'grey' }} gap={8}>
        <h3>Starring</h3>
        <h3 style={{color:'#79b8f3'}}>{media.cast}</h3>
      </Grid>
      <Grid container style={{ marginTop: "10px",color:'grey' }} gap={8}>
        <h3>Genres</h3>
        <h3 style={{color:'#79b8f3'}}>{media.genre}</h3>
      </Grid>
      <Grid container style={{ marginTop: "10px",color:'grey' }} gap={8}>
        <h3>Audio</h3>
        <h3 style={{color:'#79b8f3'}}>{media.lang}</h3>
      </Grid>
    </div>
  );
}

export default Detail;
