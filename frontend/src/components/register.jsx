import {useState} from 'react'
import {TextField} from '@mui/material'
import {Button} from '@mui/material'
import {Grid} from '@mui/material'
import {useNavigate} from 'react-router-dom'
import authService from '../features/auth/authService'
import ColorAlerts from './alert'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function Register() {
    const [formData,setFormData]=useState({
        username:'',
        password:'',
        confirmpassword:'',
    })
    const {username,password,confirmpassword}=formData

    const navigate=useNavigate()
     
    const onChange=(e)=>{
        setFormData((prevState)=>({
            ...prevState,
            [e.target.name]:e.target.value,
        }))
    }
    
    const onSignin=()=>{
        navigate('/Login')
    }
    const onRegister = (e) => {
        e.preventDefault()
        if(!username || !password || !confirmpassword){
            ColorAlerts("Please fill your Credentials")
        }
        else if(password !== confirmpassword){
            ColorAlerts("Please Match the Password")
        }else{
            const userData={
                username,
                password
            }
            let response=authService.register(userData)
            response.then((jsonresponse)=>{
                if(jsonresponse.data.success===false){
                    ColorAlerts(jsonresponse.data.messege)
                }
                navigate('/Login')
            })
        }
    }
  return (
    <div className='registerForm'>
        <Grid item container justifyContent={'center'} xs={10} sm={11} md={11} m={10} lg={11}>
            <section className='form'>
                <form className='realForm'>
                <Grid item container direction={'row'} sm={10} xs={10} md={11} m={4} lg={10}>
                    <Grid item xs={10} sm={7} md={8} lg={7}>
                        <div className='images'>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={5} md={4} lg={5}>
                        <div className='form-control'>
                            <Grid item fontSize={18} xs={12}>
                                <h1>Create account</h1>
                            </Grid>
                            <Grid item xs={10} sm={10} md={10}>
                                <div className='form-group'>
                                <TextField id="outlined-basic" size='small' fullWidth label="Username" onChange={onChange} name='username' value={username} variant="outlined" />
                                </div>
                            </Grid>
                            <br />
                            <Grid item xs={10} sm={10} md={10}>
                                <div className='form-group'>
                                <TextField id="outlined-basic" size='small' fullWidth label="Password" name='password' onChange={onChange} value={password} variant="outlined" />
                                </div>
                            </Grid>
                            <br />
                            <Grid item xs={10} sm={10} md={10}>
                                <div className='form-group'> 
                                <TextField id="outlined-basic" size='small' fullWidth label="Confirmpassword" name='confirmpassword' onChange={onChange} value={confirmpassword} variant="outlined" />
                                </div>
                            </Grid>
                            <Grid item xs={10} sm={10} md={10}>
                                <div className='alert'> 
                                    <ToastContainer/>
                                </div>
                            </Grid>
                            <br />
                            <Grid item xs={10} sm={10} md={10}>
                                <div className='form-group'> 
                                <Button variant="contained" size='small' onClick={onRegister}>Create your Amazon Account</Button>
                                </div>
                            </Grid>
                            <Grid item xs={10} sm={10} md={10} marginTop={3}>
                                <div className='form-group'> 
                                <label htmlFor="Terms and Condition">By creating an account, you agree to the Amazon Conditions of Use and Privacy Notice.</label>
                                </div>
                            </Grid>
                            <Grid item xs={10} sm={10} md={10} marginTop={2} borderTop={2} borderColor={'Highlight'}>
                                <div className='form-group'> 
                                    <label htmlFor="If Registered Click on this Link">Already have an account?</label> <button onClick={onSignin} type="submit">SignIn</button>
                                </div>
                            </Grid>
                        </div>
                    </Grid>
                </Grid>
                </form> 
            </section>
        </Grid>
    </div>
  )
}

export default Register