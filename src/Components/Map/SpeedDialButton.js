import * as React from 'react';
import { styled } from '@mui/material/styles';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import EventIcon from '@mui/icons-material/Event';
import PlaceIcon from '@mui/icons-material/Place';
import PersonIcon from '@mui/icons-material/Person';

const StyledSpeedDial = styled(SpeedDial)(({ theme }) => ({
  position: 'absolute',
  bottom: theme.spacing(3),
  right: theme.spacing(3),
  color: theme.secondary,
}));

const actions = [
  { icon: <PlaceIcon />, name: 'Add Place', color: '#2E7D32' },
  { icon: <EventIcon />, name: 'Add Event', color: '#f9a825' },
  { icon: <PersonIcon />, name: 'Set my Position', color: '#C62828' },
];

export default function SpeedDialButton() {
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
              FabProps={{
                sx: {
                  color: '#FFF',
                  bgcolor: action.color,
                  '&:hover': {
                    bgcolor: action.color,
                  }
                }
              }}
            />
          ))}
        </StyledSpeedDial>

  );
}
