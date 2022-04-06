import * as React from 'react';
import { styled } from '@mui/material/styles';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PlaceIcon from '@mui/icons-material/Place';
import PersonIcon from '@mui/icons-material/Person';

const StyledSpeedDial = styled(SpeedDial)(({ theme }) => ({
  position: 'absolute',
  bottom: theme.spacing(3),
  right: theme.spacing(3),
  color: theme.secondary,
}));

const layergroups = [
  { type: 'place', icon: <PlaceIcon />, name: 'Add Place', color: '#2E7D32' },
  { type: 'event', icon: <CalendarMonthIcon />, name: 'Add Event', color: '#f9a825' },
  { type: 'profile', icon: <PersonIcon />, name: 'Set my Position', color: '#C62828' },
];

export default function SpeedDialButton(props) {
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
          {layergroups.map((layergroup) => (
            <SpeedDialAction
              key={layergroup.name}
              icon={layergroup.icon}
              tooltipTitle={layergroup.name}
              onClick={() => {props.setSelectPosition({type: layergroup.type})}}
              FabProps={{
                sx: {
                  color: '#FFF',
                  bgcolor: layergroup.color,
                  '&:hover': {
                    bgcolor: layergroup.color,
                  }
                }
              }}
            />
          ))}
        </StyledSpeedDial>

  );
}
