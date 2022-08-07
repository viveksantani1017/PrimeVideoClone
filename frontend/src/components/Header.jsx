import React from 'react'
import { AppBar, Toolbar } from '@mui/material'
import { Link } from 'react-router-dom'


function Header() {
  const linkStyle = {
    color: 'white',
    textDecoration: 'none',
    fontWeight: 'bolder',
    fontSize: '1.2rem',
    marginBottom: '10px',
    marginLeft: '20px'     
}  
  return (
    <>
      <AppBar  style={{height:'80px', display:'flex',justifyContent:'center',position:'relative'}}>
        <Toolbar  >
          <a href="/">
            <img src={process.env.PUBLIC_URL+'/resources/images/logo.png'}alt = 'jbkj'style={{width:'100px',marginRight:'30px'}} />
          </a>
          <div style={{
            display:'flex',
            justifyContent:'center',
            alignItems:'center'
          }}>
            <Link to={'./api/media/movies'} state={{'type':'Movie'}} style={linkStyle} className='links' >Movies</Link>
            <Link to={'./api/media/shows'} state={{'type':'Show'}} style={linkStyle} className='links' >Tv Shows</Link>
            <Link to={'./api/media/kids'} state={{'type':'Kids'}} style={linkStyle} className='links' >Kids</Link>
            <Link to={'./api/media/filter'} state={{'lang':'English','genre':''}} style={linkStyle} className='links' >Categories</Link>
          </div>
        </Toolbar>
      </AppBar>
    </>    
  )
}

export default Header