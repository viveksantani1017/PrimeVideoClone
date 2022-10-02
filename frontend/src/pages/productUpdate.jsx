import { useEffect } from 'react'
import { useState } from 'react'
import { useLocation,useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux';
import operations from './service/adminOperation'
import * as React from 'react';
import { TextField } from '@mui/material';
import {Grid} from '@mui/material';
import {Button} from '@mui/material';
import { ToastContainer } from 'react-toastify'
import ColorAlerts from '../components/alert'
import 'react-toastify/dist/ReactToastify.css'
import './admin.css'
function ProductUpdate() {
  
  const [form,setFormData]=useState({
    name:'',type:'',releaseDate:'',rating:'',description:'',cast:'',director:'',lang:[],genre:[],isOscarNominee:'',isOscarWinner:''
  })
  const location = useLocation.apply()
  const navigate = useNavigate()
  const pid=location.state.pid
  const onChange=(e)=>{
      setFormData((prevState)=>({
          ...prevState,
          [e.target.name]:e.target.value,
        }))
  }
  const { user,isLoading } = useSelector(
    (state) => state.auth
  );
      useEffect(()=>{
        if(!user['isAdmin'])
        {
          navigate('/');
        }
        let mounted=true
        if(mounted){
          operations.getMediadetails(pid).then((response)=>{
            setFormData(response)
        })}
        return()=>mounted =false;
      },[pid,user, navigate])
      
      const onUpdate=(e)=>{
        operations.updateMediaDetails(pid,form).then((response)=>{
          ColorAlerts(response.messege,'success')
          navigate('/')
        })
        
      } 
      return(
        <div className='Content'>
          <Grid item container padding={3}>
            <div className='Box' style={{width:500}}>
                <Grid item margin={5}>
                    <h2>Update Data of {form.name}</h2>
                    <Grid item margin={1}>
                      <TextField id="filled-multiline-static" label="Type" name='type' onChange={onChange} multiline focused fullWidth rows={1} defaultValue={form.type}/>
                    </Grid>
                    <Grid item margin={1}>
                      <TextField id="filled-multiline-static" label="Release Date" name='releaseDate' onChange={onChange} multiline focused fullWidth rows={1} defaultValue={form.releaseDate}/>
                    </Grid>
                    <Grid item margin={1}>
                      <TextField id="filled-multiline-static" label="Rating" name='rating' onChange={onChange} multiline focused fullWidth rows={1} defaultValue={form.rating}/>
                    </Grid>
                    <Grid item margin={1}>
                      <TextField id="filled-multiline-static" label="Description" name='description' onChange={onChange} multiline focused fullWidth rows={4} defaultValue={form.description}/>
                    </Grid>
                    <Grid item margin={1}>
                      <TextField id="filled-multiline-static" label="Cast" name='cast' onChange={onChange} multiline focused fullWidth rows={1} defaultValue={form.cast}/>
                    </Grid>
                    <Grid item margin={1}>
                      <TextField id="filled-multiline-static" label="Director" name='director' onChange={onChange} multiline focused fullWidth rows={1}  defaultValue={form.director}/>
                    </Grid>
                    <Grid item margin={1}>
                      <TextField id="filled-multiline-static" label="Language" name='lang' onChange={onChange} multiline focused fullWidth rows={1}  defaultValue={form.lang}/>
                    </Grid>
                    <Grid item margin={1}>
                      <TextField id="filled-multiline-static" label="Genre" name='genre' onChange={onChange} multiline focused fullWidth rows={1}  defaultValue={form.genre}/>
                    </Grid>
                    <Grid item margin={1}>
                      <TextField id="filled-multiline-static" label="isOscarNominee" name='isOscarNominee' onChange={onChange} multiline focused fullWidth rows={1}  defaultValue={form.isOscarNominee}/>
                    </Grid>
                    <Grid item margin={1}>
                      <TextField id="filled-multiline-static" label="isOscarWinner" name='isOscarWinner' onChange={onChange} multiline focused fullWidth rows={1}  defaultValue={form.isOscarWinner}/>
                    </Grid>
                    <div className='alert'> 
                        <ToastContainer/>
                    </div>
                    <Grid item margin={1}>
                      <Button variant="contained" onClick={onUpdate}>Update</Button>
                    </Grid>
                </Grid>
            </div>
          </Grid>
        </div>
      )
}

export default ProductUpdate