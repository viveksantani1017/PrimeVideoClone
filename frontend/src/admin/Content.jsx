import operations from './service/adminOperation'
import {Grid} from '@mui/material'
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

function Content() {
const [medias,setmedias]=useState([])
const imglocation=process.env.PUBLIC_URL+"/images/"
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
        <Grid container item marginTop={10} margin={10} lg={10} md={12}>
        <div className='data'>
            <Grid container item margin={10} justifyContent={'start'}>
                {
                    medias.map((data)=>{
                        return(
                            <Card key={data._id} style={{margin:5}} sx={{ maxWidth: 345 }}>
                                <CardMedia
                                    component="img"
                                    height="200"
                                    src={imglocation+data.coverImg}
                                    alt={data.coverImg}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                    {data.name}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                    {data.description}
                                    </Typography>
                                </CardContent>
                                <ToastContainer/>
                                <CardActions>
                                    <Link to='/admin/productUpdate' state={{pid:data._id}} style={{textDecorationLine:'none'}}>UPDATE</Link>
                                    <Button size="large" onClick={()=>{onDelete(data._id)}}>DELETE</Button>
                                </CardActions>
                            </Card>
                        )
                    })
                }
            </Grid>
        </div>
        </Grid>
    </div>
    </Grid>
 );
}
export default Content;