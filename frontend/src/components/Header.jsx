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
      <AppBar  className='main-nav-bar' style={{ position:'relative'}}>
        <Toolbar  className='main-toolbar'>
          <a href="/">
            <img src={process.env.PUBLIC_URL+'/resources/images/logo.png'}alt = 'jbkj'style={{width:'100px',marginRight:'30px'}} />
          </a>
          <div style={{
            display:'flex',
            justifyContent:'center',
            alignItems:'center'
          }} >
            <Link to={'/movies'} state={{'type':'Movie','genre':'','lang':''}} style={linkStyle} className='links' >Movies</Link>
            <Link to={'/shows'} state={{'type':'Show','genre':'','lang':''}} style={linkStyle} className='links' >Tv Shows</Link>
            <Link to={'/kids'} state={{'type':'Kids','genre':'','lang':''}} style={linkStyle}  >Kids</Link>
            <Link to={'/category'} state={{'lang':'English','genre':''}} style={linkStyle} className='category-header' >Categories</Link>
          </div>
        </Toolbar>
      </AppBar>
    </>    
  )
}

export default Header