import { Routes, Route } from "react-router-dom";
import Map from './Pages/Map';
import Calendar from './Pages/Calendar';
import Sharing from './Pages/Sharing';
import Quests from './Pages/Quests';
import Drawer from './Components/Drawer';
import NotFound from './Pages/NotFound';
import Profile from './Pages/Profile';
import NavBar from './Components/NavBar'
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';


const drawerWidth = 180;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    paddingTop: 64,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);

const App = () => {
  const [open, setOpen] = React.useState(false);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };


  return (
  <Box sx={{ display: 'flex' }}>
   <CssBaseline />
   <NavBar open={open} handleDrawerOpen={handleDrawerOpen} handleDrawerClose={handleDrawerClose} drawerWidth={drawerWidth} />
   <Drawer open={open} handleDrawerClose={handleDrawerClose} drawerWidth={drawerWidth}/>
    <Main open={open}>
      <Routes>
        <Route path="/" element={<Map />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/calendar" element={<Calendar/>} />
        <Route path="/sharing" element={<Sharing />} />
        <Route path="/quests" element={<Quests />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
      </Main>
    </Box>

  );
}

export default App;
