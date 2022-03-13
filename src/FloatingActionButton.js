import * as React from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';

const fabStyle = {
  right: 20,
  bottom: 20,
  position: 'fixed',
  zIndex: 1000
};


export default function FloatingActionButtonSize() {
  return (
    <Box sx={{ '& > :not(style)': { m: 1 } }}>
      <Fab color="secondary" aria-label="add" style={fabStyle}>
        <AddIcon />
      </Fab>
    </Box>
  );
}
