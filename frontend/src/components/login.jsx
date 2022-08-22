import {useState} from 'react'
import {TextField} from '@mui/material'
import {Button} from '@mui/material'
import {Grid} from '@mui/material'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Spinner from './Spinner'
import {useSelector,useDispatch} from 'react-redux'
import { useEffect } from 'react'
import {useNavigate} from 'react-router-dom'
import ColorAlerts from './alert'
import {login,reset} from '../features/auth/authSlice'

function Login() {
    const [formData,setFormData]=useState({
        username:'',
        password:''
    })
    const {username,password}=formData
    const navigate=useNavigate()
    const dispatch=useDispatch()
    const {user,isLoading,isError,success,messege}=useSelector((state)=>state.auth)
    useEffect(()=>{
        if(isError){
            ColorAlerts(messege)
        }
        // if(success || user){
        //     navigate('/')
        // }
        dispatch(reset())
    },[user,isError,success,messege,navigate,dispatch])
    const onChange=(e)=>{
        setFormData((prevState)=>({
            ...prevState,
            [e.target.name]:e.target.value,
        }))
    }
    const onLogin=(e)=>{
        if(!username || !password){
            ColorAlerts("Please Fill you Credentials")
        }else{
            const userData={
                username,
                password
            }
            dispatch(login(userData))
            navigate('/')
        }
    }
    const onRegister=(e)=>{
        navigate('/Register')
    }
    if(isLoading){
        return <Spinner/>
    }
  return (
    <div className='loginForm'>
        <Grid item container justifyContent={'center'} xs={10} sm={11} md={11} m={10} lg={11}>
            <section className='form'>
                <form className='realForm'>
                <Grid item container direction={'row'} sm={10} xs={10} md={11} m={4} lg={11}>
                    <Grid item xs={10} sm={7} md={8} lg={7}>
                        <div className='images'>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={5} md={4} lg={5}>
                        <div className='form-control'>
                            <Grid item fontSize={18} xs={12}>
                                <h1>Sign-In</h1>
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
                                <div className='alert'> 
                                    <ToastContainer/>
                                </div>
                            </Grid>
                            <Grid item xs={10} sm={10} md={10}>
                                <div className='form-group'> 
                                <Button variant="contained" onClick={onLogin} size='small' >Sign-In</Button>
                                </div>
                            </Grid>
                            <Grid item xs={10} sm={10} md={10} marginTop={3}>
                                <div className='form-group'> 
                                <label htmlFor="Terms and Condition">By continuing, you agree to the Amazon Conditions of Use and Privacy Notice.</label>
                                </div>
                            </Grid>
                            <Grid item xs={10} sm={10} md={10} marginTop={3}>
                                <div className='form-group'> 
                                <Button variant="contained" onClick={onRegister}>Create your Amazon account</Button>
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

export default Login