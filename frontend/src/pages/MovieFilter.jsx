import * as React from "react";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getFilteredMedia, reset } from "../features/filter/filterSlice";
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
function MovieFilter() {
  const imglocation = process.env.PUBLIC_URL + "/resources/images/coverimages/";

  const dispatch = useDispatch();
  const location = useLocation();
  const { filterMedia, isError, isLoading, message } = useSelector(
    (state) => state.filterMedia
  );
  const { lang, genre, type } = location.state;
  React.useEffect(() => {
    if (isError) {
      console.log(message);
    }
    dispatch(getFilteredMedia({ lang: lang, genre: genre, type: type }));
    return () => {
      dispatch(reset());
    };
  }, [isError, dispatch, message]);
  if (isLoading) {
    return <h1>Loading</h1>;
  }
  return (
    <div>
      <div className="out-home">
        <h3 style={{color:'grey',marginTop:'30px',cursor:'arrow', fontWeight:'bold'}}>{genre} {lang}</h3>
      <Divider style={{marginTop:'20px',marginBottom:'15px' ,width:'100%',background:'grey'}}  orientation='horizontal'/>
        {filterMedia.length > 0 ? (
          <div>
            <Grid
              container
              spacing={{ xs: 2, md: 2 }}
              columns={{ xs: 4, sm: 8, md: 12 }}
            >
              {filterMedia.map((media) => {
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

export default MovieFilter;
