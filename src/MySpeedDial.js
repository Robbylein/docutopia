import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import Switch from '@mui/material/Switch';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import EventIcon from '@mui/icons-material/Event';
import PlaceIcon from '@mui/icons-material/Place';
import PersonIcon from '@mui/icons-material/Person';
import ShareIcon from '@mui/icons-material/Share';

const StyledSpeedDial = styled(SpeedDial)(({ theme }) => ({
  position: 'absolute',
  bottom: theme.spacing(3),
  right: theme.spacing(3),
  color: theme.secondary,
}));

const actions = [
  { icon: <PlaceIcon />, name: 'Add Place' },
  { icon: <EventIcon />, name: 'Add Event' },
  { icon: <PersonIcon />, name: 'Set my Position' },
];

export default function MySpeedDial() {
  const [direction, setDirection] = React.useState('up');
  const [hidden, setHidden] = React.useState(false);

  const handleDirectionChange = (event) => {
    setDirection(event.target.value);
  };

  const handleHiddenChange = (event) => {
    setHidden(event.target.checked);
  };

  return (

        <StyledSpeedDial
          ariaLabel="Add to Map"
          hidden={hidden}
          icon={<SpeedDialIcon />}
          direction={direction}
          FabProps={{
            sx: {
              bgcolor: 'secondary.main',
              '&:hover': {
                bgcolor: 'secondary.main',
              }
            }
          }}
        >
          {actions.map((action) => (
            <SpeedDialAction
              key={action.name}
              icon={action.icon}
              tooltipTitle={action.name}
            />
          ))}
        </StyledSpeedDial>

  );
}
