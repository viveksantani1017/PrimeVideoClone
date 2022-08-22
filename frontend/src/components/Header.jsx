import React, { useEffect, useState } from "react";
import { AppBar, Button, FilledInput, FormControl, IconButton, InputBase, InputLabel, Menu, MenuItem, Toolbar } from "@mui/material";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import { alpha, Box, styled } from "@mui/system";
import Search from "@mui/icons-material/Search";

function Header() {
  const [query, setQuery] = useState('')
  console.log(query)
  const handleSubmit = event => {
    event.preventDefault();

    console.log('form submitted ✅');
  };

  useEffect(() => {
    const keyDownHandler = event => {
      console.log('User pressed: ', event.key);

      if (event.key === 'Enter') {
        event.preventDefault();

        // 👇️ call submit function here
        handleSubmit();
      }
    };

    document.addEventListener('keydown', keyDownHandler);
    return () => {
      document.removeEventListener('keydown', keyDownHandler);
    };
  }, []);
  const linkStyle = {
    color: "white",
    textDecoration: "none",
    fontWeight: "bolder",
    fontSize: "1.2rem",
    marginBottom: "10px",
    marginLeft: "20px",
  };
  const [style, setStyle] = useState("searchbox");
  
  const changeStyle = () => {
    console.log("you just clicked");
    setStyle("searchbox2");
  };
  const [iconStyle, setIconStyle] = useState("");
  
  const changeIconStyle = () => {
    console.log("you just clicked");
    setIconStyle("searchbox2");
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  
  const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: '#0f171e',
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  }));
  
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    fontSize:'1.2rem',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
  }));
  return (
    <>
      <AppBar className="main-nav-bar" style={{ position: "relative" }}>
        <Toolbar className="main-toolbar">
          <a href="/">
            <img
              src={process.env.PUBLIC_URL + "/resources/images/logo.png"}
              alt="jbkj"
              style={{ width: "100px", marginRight: "30px" }}
            />
          </a>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Link
              to={"/movies"}
              state={{ type: "Movie", genre: "", lang: "" }}
              style={linkStyle}
              className="links"
            >
              Movies
            </Link>
            <Link
              to={"/shows"}
              state={{ type: "Show", genre: "", lang: "" }}
              style={linkStyle}
              className="links"
            >
              Tv Shows
            </Link>
            <Link
              to={"/kids"}
              state={{ type: "Kids", genre: "", lang: "" }}
              style={linkStyle}
            >
              Kids
            </Link>
            <Link
              to={"/category"}
              state={{ lang: "English", genre: "" }}
              style={linkStyle}
              className="category-header"
            >
              Categories
            </Link>
          </div>
          <div className="search-div">
            <form onSubmit={handleSubmit}>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search"
              inputProps={{ 'aria-label': 'search' }}
              value={query}
              onChange={event => setQuery(event.target.value)}
              autoComplete="off"
            />
          </Search>
         </form>
          </div>
          <div className='menu-div'>
            <img src={process.env.PUBLIC_URL+'/resources/images/svg/user.png'} style={{position:'absolute',right:'100%',width:'2rem',height:'2rem',top:'10%'}}/>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        style={{color:'white',textTransform:'none',fontSize:'1.2rem'}}
      >
        User
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem  onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </div>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Header;
