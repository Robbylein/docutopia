import * as React from 'react'
import { Popup } from 'react-leaflet'
import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';



const MarkerPopup = (props) => {
let item = props.item;
const [anchorEl, setAnchorEl] = React.useState(null);
const open = Boolean(anchorEl);
const handleClick = (event) => {
  setAnchorEl(event.currentTarget);
};
const handleClose = () => {
  setAnchorEl(null);
};

  return(
      <Popup>

        <b style={{fontSize: '1.0rem'}}>{item.name}</b>


        <Button
          id="basic-button"
          aria-controls={open ? 'basic-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
        >
          <MoreVertIcon/>
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
          <MenuItem onClick={handleClose}><EditIcon/></MenuItem>
          <MenuItem onClick={handleClose}><DeleteIcon/></MenuItem>
        </Menu>
        <p>{item.start||""} {item.end||""}</p>

        <p>{item.text}</p>
        <Stack direction="row" spacing={1}>
          {item.tags.map((tag)=>(
            <Chip
            key={tag.Tags_id.id}
            label={tag.Tags_id.id}
            sx={{backgroundColor: tag.Tags_id.color, color: '#fff'}}
            />
          ))}
        </Stack>
      </Popup>
  )
}

export default MarkerPopup;
