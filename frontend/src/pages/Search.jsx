import * as React from "react";
import { Link, useLocation } from "react-router-dom";
import PlayCircleOutlineOutlinedIcon from '@mui/icons-material/PlayCircleOutlineOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import PlayArrowOutlinedIcon from '@mui/icons-material/PlayArrowOutlined';
import {
  Card,
  CardMedia,
  CardContent,
  Divider,
  Grid,
  Typography,
  Tooltip,
} from "@mui/material";
import axios from "axios";
function Search() {
  const location = useLocation();
  const { name } = location.state;
  const imglocation = process.env.PUBLIC_URL + "/resources/images/coverimages/";
  const [medias, setMedia] = React.useState([]);

  // const [drama,setDrama] = useState([]);
  const getMovie = async () => {
    const response = await axios.post(
      "http://localhost:5000/api/media/search",
      { 'searchMedia': name }
    );
    setMedia(response.data);
    console.log(response.data);
  };
  React.useEffect(() => {
    getMovie();
  }, []);
  return (
    <div>
      <div className="out-home">
        <h3 style={{color:'grey',marginTop:'30px',cursor:'arrow', fontWeight:'bold'}}>{name}</h3>
      <Divider style={{marginTop:'20px',marginBottom:'15px' ,width:'100%',background:'grey'}}  orientation='horizontal'/>
        {medias.length > 0 ? (
          <div>
            <Grid
              container
              spacing={{ xs: 2, md: 2 }}
              columns={{ xs: 4, sm: 8, md: 12 }}
            >
              {medias.map((media) => {
                return (
                  <Grid item xs={2} sm={4} md={2.4} key={media._id} >
                    <Card sx={{ maxWidth: 345 }} style={{borderRadius:'0',transition:'.2s ease'}} className='media-card'>
                      <Link to={'/detail'} state={{id:media._id}}>
                      <CardMedia
                        className="card-img"
                        component="img"
                        image={imglocation + media.coverImg}
                        alt={media.name}
                      />
                      </Link>
                        <CardContent className="card-content" style={{backgroundColor:'#1b2530', color:'white'}}>
                            <Typography variant="body2" fontWeight={'bold'} fontSize={'1rem'} noWrap>
                              {media.name} 
                            </Typography>
                            <div className="bottom-info" style={{color:'grey'}}>
                              <span>{media.rating}</span>
                              <span style={{marginLeft:'10px'}}>{media.releaseDate}</span>
                            </div>
                        </CardContent>
                        <CardContent className="card-content-extra" style={{backgroundColor:'#1b2530', color:'white'}}>
                          <div className="play-div">
                             <div className="left">
                              <Tooltip title='Play' placement="top" arrow >
                              <PlayCircleOutlineOutlinedIcon style={{fontSize:'40px'}} />
                              </Tooltip>
                             <h4 style={{display:'flex',marginTop:'10px'}} >Play</h4>
                              </div> 
                              <div className="right">
                              <Tooltip title='Play' placement="top" arrow >
                                <PlayArrowOutlinedIcon style={{fontSize:'35px'}}/>
                                </Tooltip>
                                <Tooltip title='Add to Watchlist' placement="top" arrow >
                                <AddOutlinedIcon style={{fontSize:'35px'}}/>
                                </Tooltip>
                              </div>
                          </div>
                          <Typography variant="body2" fontWeight={'bold'} color={'#389aec'} marginTop={'40px'} fontSize={'0.8rem'} noWrap>
                          Included With Prime
                          </Typography>
                          <Typography variant="body2" fontWeight={'bold'} marginTop={'10px'} marginBottom={'10px'}fontSize={'1rem'} noWrap>
                          {media.name}
                          </Typography>
                          <Typography variant="body2" fontSize={'0.8rem'} sx={{
                             overflow: "hidden",
                             textOverflow: "ellipsis",
                             display: "-webkit-box",
                             WebkitLineClamp: "3",
                             WebkitBoxOrient: "vertical",
                          }} >
                            {media.description}
                          </Typography>
                          <div className="bottom-info" style={{fontSize:'0.8rem', marginTop:'10px'}}>
                              <span>{media.rating}</span>
                              <span style={{marginLeft:'10px'}}>{media.releaseDate}</span>
                            </div>
                        </CardContent>
                        
                    </Card>
                  </Grid>
                );
              })}
            </Grid>
          </div>
        ) : (
          <h1>No Movie</h1>
        )}
      </div>
    </div>
  );
}

export default Search;
