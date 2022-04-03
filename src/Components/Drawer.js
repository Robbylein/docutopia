import MuiDrawer from '@mui/material/Drawer';
import Divider from '@mui/material/Divider';
import { styled, useTheme } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import CalendarIcon from '@mui/icons-material/CalendarMonth';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import AllInclusiveIcon from '@mui/icons-material/AllInclusive';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import List from '@mui/material/List';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import MapIcon from '@mui/icons-material/Map';
import {useNavigate} from "react-router-dom";



const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

export default function Drawer(props) {
  const theme = useTheme();
  let navigate = useNavigate();

return (
  <MuiDrawer
   sx={{
     width: props.drawerWidth,
     flexShrink: 0,
     '& .MuiDrawer-paper': {
       width: props.drawerWidth,
       boxSizing: 'border-box',
     },
   }}
   variant="persistent"
   anchor="left"
   open={props.open}
 >
   <DrawerHeader>
     <IconButton onClick={props.handleDrawerClose}>
       {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
     </IconButton>
   </DrawerHeader>
   <Divider />
   <List>
     <ListItemButton onClick={ () => {
       props.handleDrawerClose();
       navigate("/");
     }}>
       <ListItemIcon>
          <MapIcon />
       </ListItemIcon>
       <ListItemText>Map</ListItemText>
     </ListItemButton>
     <ListItemButton onClick={ () => {
       props.handleDrawerClose();
       navigate("/calendar");
     }}>
       <ListItemIcon>
          <CalendarIcon />
       </ListItemIcon>
       <ListItemText>Calendar</ListItemText>
     </ListItemButton>
     <ListItemButton onClick={ () => {
       props.handleDrawerClose();
       navigate("/sharing");
     }}>
       <ListItemIcon>
          <AllInclusiveIcon />
       </ListItemIcon>
       <ListItemText>Sharing</ListItemText>
     </ListItemButton>
     <ListItemButton onClick={ () => {
       props.handleDrawerClose();
       navigate("/quests");
     }}>
       <ListItemIcon>
          <CheckBoxIcon />
       </ListItemIcon>
       <ListItemText>Quests</ListItemText>
     </ListItemButton>
   </List>
{/* <Divider />
   <List>
     {['Wiki', 'FAQ'].map((text, index) => (
       <ListItem button key={text}>
         <ListItemIcon>
           {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
         </ListItemIcon>
         <ListItemText primary={text} />
       </ListItem>
     ))}
   </List> */}
 </MuiDrawer>
);
}
