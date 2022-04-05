import * as React from 'react';
import Box from '@mui/material/Box';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import { styled, alpha, useTheme } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import NavBarMenuRight from './NavBarMenuRight'


const Search = styled('div')(({ theme }) => ({
position: 'relative',
borderRadius: theme.shape.borderRadius,
backgroundColor: alpha(theme.palette.common.white, 0.15),
'&:hover': {
  backgroundColor: alpha(theme.palette.common.white, 0.25),
},
marginRight: theme.spacing(2),
marginLeft: 0,
width: '100%',
[theme.breakpoints.up('sm')]: {
  marginLeft: theme.spacing(3),
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
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '20ch',
      '&:focus': {
        width: '30ch',
      },
    },
  },
}));


const NavBar = (props) => {

  const [auth, setAuth] = React.useState(true);

// rausfinden warum transition nicht geht

  const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
  })(({theme}) => ({
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    color: theme.palette.common.white,
    ...(props.open && {
      width: `calc(100% - ${props.drawerWidth}px)`,
      marginLeft: `${props.drawerWidth}px`,
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    }),
  }));







return (
  <AppBar position="fixed" color="secondary">
  <Toolbar>
  <IconButton
    color="inherit"
    aria-label="open drawer"
    onClick={props.handleDrawerOpen}
    edge="start"
    sx={{ mr: 2, ...(props.open && { display: 'none' }) }}
  >
    <MenuIcon />
  </IconButton>

  <Search>
    <SearchIconWrapper>
      <SearchIcon />
    </SearchIconWrapper>
    <StyledInputBase
      placeholder="Search…"
      inputprop={{ 'aria-label': 'search' }}
    />
  </Search>
  <Box sx={{ flexGrow: 1 }} />
    {auth && (
      <div>
        <NavBarMenuRight/>
      </div>
    )}
    {!auth && (
      <div>
        <Button color="inherit">Login</Button>
        <Button color="inherit">Register</Button>
      </div>
    )}
  </Toolbar>
  </AppBar>
)

};

export default NavBar;
