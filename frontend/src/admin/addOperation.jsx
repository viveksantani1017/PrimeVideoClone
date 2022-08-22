import React from 'react'
import TextField from '@mui/material/TextField';
import { Grid } from '@mui/material';
import Label from '@mui/material/FormLabel'
import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import operations from './service/adminOperation';
import { useState } from 'react';
import './admin.css'

function AddOperation() {
  const [media,setMedia]=useState({
    name:'',type:'',releaseDate:'',genre:[],rating:0,coverImg:{},description:'',cast:'',director:'',lang:'',isOscarNominee:'',isOscarWinner:''
  })
  const {name,type,releaseDate,genre,rating,description,cast,director,lang}=media
  const [image,setImage]=useState('')
  const onChange=(e)=>{
    setMedia((prevState)=>({
        ...prevState,
        [e.target.name]:e.target.value,
      }))
    }

  const onFileUpload=(e)=>{
    setMedia((prevState)=>({
      ...prevState,
      coverImg:e.target.files[0].name,
    }))
    setImage(e.target.files[0])
  } 

  const getData=(e)=>{
    if(!e.target.checked){
      var index = genre.indexOf(e.target.value);
      genre.splice(index,1);
    }
    else{
      genre.push(e.target.value)
    }
  } 

  const onAddData=()=>{
    const formData=new FormData()
    formData.append('coverImg',image)
    formData.append('media',JSON.stringify(media))
    operations.addMediaData(formData)
  }
  return (
    <div className='Box'>
        <Grid item container justifyContent={'center'}>
          <form style={{width:'400px'}}>
              <Grid item container margin={2} justifyContent={'center'}>
                  <h1>Insert Product Details</h1>
                  <input type="file" name="coverImg" label="Upload" onChange={onFileUpload} />
                  <TextField id="standard-basic" name="name" label="Name" onChange={onChange} value={name} fullWidth variant="standard" />
                  <TextField id="standard-basic" name="type" label="Type" onChange={onChange} value={type} fullWidth variant="standard" />
                  <TextField id="standard-basic" name="description" label="Description" onChange={onChange} value={description} fullWidth variant="standard" />
                  <TextField id="standard-basic" name="releaseDate" label="Release Date" onChange={onChange} value={releaseDate} fullWidth variant="standard" />
                  <TextField id="standard-basic" name="cast" label="Cast" fullWidth onChange={onChange} value={cast} variant="standard" />
                  <TextField id="standard-basic" name="director" label="Director" fullWidth onChange={onChange} value={director} variant="standard" />
                  <TextField id="standard-basic" name="lang" label="Language" fullWidth onChange={onChange} value={lang} variant="standard" />
                  <Grid item container marginTop={2}>
                    <Label>Rating :- </Label>
                    <input style={{width:'100%'}} type="range" name="rating" min={0} step={0.1} max={10}  onChange={onChange} value={rating} />
                    <Label>{rating}</Label>
                  </Grid>
                  <Grid item container margin={2} marginTop={2}>
                        <Label>Genre :- </Label>
                      <FormGroup aria-label="position" row>
                            <FormControlLabel value="Action" name='action'  onClick={getData} control={<Checkbox />} label="Action" labelPlacement="start" />
                            <FormControlLabel value="Adventure" name='adventure' onChange={getData} control={<Checkbox />} label="Adventure" labelPlacement="start" />
                            <FormControlLabel value="Comedy" name='comedy' onChange={getData} control={<Checkbox />} label="Comedy" labelPlacement="start" />
                            <FormControlLabel value="Fantasy" name='fantasy' onChange={getData} control={<Checkbox />} label="Fantasy" labelPlacement="start" />
                            <FormControlLabel value="Horror" name='horrer' onChange={getData} control={<Checkbox />} label="Horror" labelPlacement="start"/>
                            <FormControlLabel value="Mystery" name='mystery' onChange={getData} control={<Checkbox />} label="Mystery" labelPlacement="start" />
                            <FormControlLabel value="Drama" name='drama' onChange={getData} control={<Checkbox />} label="Drama" labelPlacement="start" />
                            <FormControlLabel value="Science fiction" name='science fiction' onChange={getData} control={<Checkbox />} label="Science Fiction" labelPlacement="start" />
                            <FormControlLabel value="Other" name='other' onChange={getData} control={<Checkbox />} label="other" labelPlacement="start" />
                      </FormGroup>
                      <FormControl>

                          <FormLabel id="demo-radio-buttons-group-label">isOscarNominee :- </FormLabel>
                            <RadioGroup
                              aria-labelledby="demo-radio-buttons-group-label" 
                              name="isOscarNominee" onChange={(event,newValue)=>{
                                                        setMedia((prevState)=>({
                                                        ...prevState,
                                                        isOscarNominee:newValue,
                                                      }))
                              }}>
                              <FormControlLabel value="true" name='isOscarNominee' control={<Radio />} label="True" />
                              <FormControlLabel value="false" name='isOscarNominee' control={<Radio />} label="False" />
                            </RadioGroup>

                          <FormLabel id="demo-radio-buttons-group-label">isOscarWinner :- </FormLabel>
                            <RadioGroup
                              aria-labelledby="demo-radio-buttons-group-label"
                              name="radio-buttons-group"
                              onChange={(event,newValue)=>{
                                    setMedia((prevState)=>({
                                      ...prevState,
                                      isOscarWinner:newValue,
                                    }))
                              }}>
                              <FormControlLabel value="true" name='isOscarWinner' control={<Radio />} label="True" />
                              <FormControlLabel value="false" name='isOscarWinner' control={<Radio />} label="False" />
                            </RadioGroup>
                      </FormControl>
                  </Grid>
                  <br />
                  <br />
                  <br />
                  <Button onClick={onAddData} variant="contained">Add Data</Button>
              </Grid>
          </form>
        </Grid>
    </div>
  )
}
export default AddOperation