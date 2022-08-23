import operations from './service/adminOperation'
import {Grid, Tooltip} from '@mui/material'
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {Link} from 'react-router-dom';
import './admin.css'
import { ToastContainer } from 'react-toastify'
import ColorAlerts from '../components/alert'
import 'react-toastify/dist/ReactToastify.css'
import { useState ,useEffect} from 'react';
import PlayCircleOutlineOutlinedIcon from '@mui/icons-material/PlayCircleOutlineOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import PlayArrowOutlinedIcon from '@mui/icons-material/PlayArrowOutlined';

function Content() {
const [medias,setmedias]=useState([])
const imglocation=process.env.PUBLIC_URL+"/resources/images/coverimages/"
useEffect(()=>{
    let mounted=true
    operations.getAll().then((respone)=>{
        if(mounted){
            setmedias(respone.data)
        }
    })
    return()=> mounted=false
},[]);
const onDelete=(id)=>{
    operations.delelteMedia(id).then((response)=>{
        ColorAlerts(response.messege,'success');
    }).finally(()=>{
        window.location.reload();
    });
}
return ( 
    <Grid container item lg={12} md={12}>
    <div className='Content'>
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
                      <CardMedia
                        className="card-img"
                        component="img"
                        image={imglocation + media.coverImg}
                        alt={media.name}
                      />
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
                          <Typography variant="body2" fontWeight={'bold'} marginBottom={'10px'}fontSize={'1rem'} noWrap>
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
                          <ToastContainer/>
                                <CardActions style={{backgroundColor:'#1b2530'}}>
                                    <Link to='/admin/productUpdate' state={{pid:media._id}} style={{textDecorationLine:'none',backgroundColor:'none',color:'white'}}>UPDATE</Link>
                                    <Button size="large" style={{color:'white'}} onClick={()=>{onDelete(media._id)}}>DELETE</Button>
                                </CardActions>
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
    </Grid>
 );
}
export default Content;