import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import FormGroup from '@mui/material/FormGroup';
import {Popup } from 'react-leaflet'
import { styled, alpha, useTheme } from '@mui/material/styles';

const StyledTextField = styled(TextField)(({theme})=>({

    marginTop:  20,
    marginBottom: 20,
    display: 'block',

}));

const handleSubmit = (e) => {
  e.preventDefault();
}


const NewItemPopup = (props) => {
  return(
    <Popup minWidth="300" maxWidth="300" position={props.newItemPopup.position}>
          <form>
            <StyledTextField
              id="name"
              label="Title"
              variant="standard"
              fullWidth
              required
            />
            <StyledTextField
              id="text"
              label="#Hash, URL, Contact, Text, ..."
              multiline
              variant="standard"
              fullWidth
              required
            />
            <Button type="submit" variant="contained">Save</Button>
          </form>
    </Popup>
  )
}

export default NewItemPopup
